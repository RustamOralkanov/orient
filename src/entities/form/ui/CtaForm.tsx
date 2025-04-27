import { Form, FormProps } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/shared/ui";
import { OrientData } from "@/shared/model";
import { InputMask } from "@react-input/mask";

type FieldType = {
    name?: string;
    phone?: string;
};

export const CtaForm: React.FC<{ modal?: boolean }> = ({ modal }) => {
    const [form] = Form.useForm();
    const [data, setData] = useState<OrientData["ru"]["form"] | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        axios
            .get("/orient.json")
            .then((response) => {
                setData(response.data.ru.form);
            })
            .catch((error) => {
                console.error("Ошибка при загрузке JSON:", error);
            });
    }, []);

    const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
        setIsLoading(true);
        const urlParams = new URLSearchParams(window.location.search);
        const utmSource = urlParams.get("utm_source") ?? "/";
        const utmMedium = urlParams.get("utm_medium") ?? "/";
        const utmCampaign = urlParams.get("utm_campaign") ?? "/";
        const utmAgId = urlParams.get("utm_agid") ?? "/";
        const utmContent = urlParams.get("utm_content") ?? "/";
        const utmPlacement = urlParams.get("utm_placement") ?? "/";
        const utmTerm = urlParams.get("utm_term") ?? "/";
        const gclid = urlParams.get("gclid") ?? "/";
        const fbclid = urlParams.get("fbclid") ?? "/";
        const yclid = urlParams.get("yclid") ?? "/";
        const type_of_premises = "apartment";
        const platform = urlParams.get("referrer") ?? "/";
        const utm_route = "/";
        const type_payment = "/";
        const utm_flat = "/";
        const form_type = modal ? "popup" : "body";
        const url = "orient.ab-capital.kz";
        const amo_visitor_uid = localStorage.getItem("visitor_uid");

        const datas = new FormData();

        if (values.name) datas.append("name", values.name);
        if (values.phone) datas.append("phone", values.phone);
        datas.append("utm_campaign", utmCampaign);
        datas.append("utm_content", utmContent);
        datas.append("utm_medium", utmMedium);
        datas.append("utm_source", utmSource);
        datas.append("utm_term", utmTerm);
        datas.append("url", url);
        datas.append("utm_agid", utmAgId);
        datas.append("utm_placement", utmPlacement);
        datas.append("gclid", gclid);
        datas.append("fbclid", fbclid);
        datas.append("yclid", yclid);
        datas.append("type_of_premises", type_of_premises);
        datas.append("platform", platform);
        datas.append("utm_route", utm_route);
        datas.append("type_payment", type_payment);
        datas.append("utm_flat", utm_flat);
        datas.append("form_type", form_type);
        if (amo_visitor_uid) datas.append("amo_visitor_uid", amo_visitor_uid);
        datas.append("lead_comment", "/");

        await axios
            .post("https://api.ab-capital.kz/api/guest/send-form", datas, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((response) => {
                console.log(response);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setIsLoading(false);
            });
    };

    return (
        <Form form={form} onFinish={onFinish} className="flex flex-col gap-35">
            <Form.Item name="name" rules={[{ required: true, message: "Пожалуйста, заполните поле!" }]}>
                <input className="h-55 border-b-1 border-b-red w-full text-[20px] uppercase text-white outline-0" placeholder={data?.name} />
            </Form.Item>
            <Form.Item name="phone" rules={[{ required: true, message: "Пожалуйста, заполните поле!" }]}>
                <InputMask
                    mask="+7 (___) ___-__-__"
                    replacement={{ _: /\d/ }}
                    className="h-55 border-b-1 border-b-red w-full text-[20px] uppercase text-white outline-0"
                    placeholder={data?.phone}
                />
            </Form.Item>
            <Form.Item>
                <Button disabled={isLoading}>{data?.button}</Button>
            </Form.Item>
        </Form>
    );
};
