import { CtaForm } from "@/entities/form";
import { OrientData } from "@/shared/model";
import { Col, Row } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

export const CtaView = () => {
    const [data, setData] = useState<OrientData["ru"]["form"] | null>(null);

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

    return (
        <div className="container mt-333 max-lg:bg-gray-900  max-lg:mt-280">
            <Row className="max-lg:!flex-col-reverse">
                <Col xl={10} lg={24} md={24} sm={24} xs={24} className="bg-orange">
                    <div className="flex flex-col h-full gap-40 bg-orange p-60 -mt-45 max-lg:mt-0 max-lg:p-24 max-lg:gap-30">
                        <h4 className="uppercase text-[40px] -tracking-[0.01em] text-white font-light leading-tight font-display max-lg:text-2xl">{data?.title}</h4>
                        <p className="text-white uppercase text-[16px] leading-snug max-w-320 font-display max-lg:text-sm">{data?.subtitle}</p>
                        <CtaForm />
                    </div>
                </Col>
                <Col xl={14} lg={24} md={24} sm={24} xs={24}>
                    <div className="w-full h-full max-lg:!-mt-200">
                        <img src="/night.webp" className="w-full h-full max-lg:max-h-200 object-cover" />
                    </div>
                </Col>
            </Row>
        </div>
    );
};
