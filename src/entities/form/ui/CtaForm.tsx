import { Form, FormProps } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/shared/ui";
import { OrientData, useOrientContext } from "@/shared/model";
import { InputMask } from "@react-input/mask";

type FieldType = {
    name?: string;
    phone?: string;
};

export const CtaForm: React.FC<{ modal?: boolean }> = ({ modal }) => {
    const [form] = Form.useForm();
    const [data, setData] = useState<OrientData["ru"]["form"] | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const { handleSuccess } = useOrientContext();

    const { isFormModal, handleFormModal } = useOrientContext();

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
        const utmCampaign = urlParams.get("utm_campaign")?.split("_")[0] ?? "/";
        const utmAgid = urlParams.get("utm_agid") ?? "/";
        const utmContent = urlParams.get("utm_content")?.split("_")[0] ?? "/";
        const creativeId = urlParams.get("utm_content")?.split("_")[1] ?? "/";
        const utmPlacement = urlParams.get("utm_placement") ?? "/";
        const utmTerm = urlParams.get("utm_term")?.split("_")[0] ?? "/";
        const gclid = urlParams.get("gclid") ?? "/";
        const fbclid = urlParams.get("fbclid") ?? "/";
        const yclid = urlParams.get("yclid") ?? "/";
        const from_site = "orient.ab-capital.kz";
        const platform = urlParams.get("referer") ?? "/";
        const formType = modal ? "popup" : "body";
        const lead_comment = "/";
        const amo_visitor_uid = localStorage.getItem("visitor_uid") ?? "/";

        const datas = new FormData();

        if (values.name) datas.append("name", values.name);
        if (values.phone) datas.append("phone", values.phone);
        if (amo_visitor_uid) datas.append("amo_visitor_uid", amo_visitor_uid);

        datas.append("utm_source", utmSource);
        datas.append("utm_medium", utmMedium);
        datas.append("utm_campaign", utmCampaign);
        datas.append("utm_agid", utmAgid);
        datas.append("utm_content", utmContent);
        datas.append("creative_id", creativeId);
        datas.append("utm_placement", utmPlacement);
        datas.append("utm_term", utmTerm);
        datas.append("gclid", gclid);
        datas.append("fbclid", fbclid);
        datas.append("yclid", yclid);
        datas.append("from_site", from_site);
        datas.append("platform", platform);
        datas.append("form_type", formType);

        datas.append("lead_comment", lead_comment);

        await axios
            .post("https://api.ab-capital.kz/api/guest/send-form", datas, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((response) => {
                console.log(response);
                setIsLoading(false);
                handleSuccess();
                if (isFormModal) {
                    handleFormModal();
                }
            })
            .catch((error) => {
                console.error(error);
                setIsLoading(false);
            });
    };

    return (
        <Form
            form={form}
            onFinish={onFinish}
            className={["flex flex-col ", modal ? "gap-24 max-lg:!gap-12" : "gap-35 max-lg:gap-24"].join(" ")}
        >
            <Form.Item
                name="name"
                rules={[{ required: true, message: "Пожалуйста, заполните поле!" }]}
                className="!mb-0"
            >
                <input
                    className="h-55 border-b-1 border-b-red w-full text-[20px] uppercase text-white outline-0"
                    placeholder={data?.name}
                />
            </Form.Item>
            <Form.Item
                name="phone"
                rules={[{ required: true, message: "Пожалуйста, заполните поле!" }]}
                className="!mb-0"
            >
                <InputMask
                    mask="+7 (___) ___-__-__"
                    replacement={{ _: /\d/ }}
                    className="h-55 border-b-1 border-b-red w-full text-[20px] uppercase text-white outline-0"
                    placeholder={data?.phone}
                />
            </Form.Item>
            <Form.Item className="!mb-0 flex justify-end">
                <Button disabled={isLoading}>{data?.button}</Button>
            </Form.Item>
        </Form>
    );
};
