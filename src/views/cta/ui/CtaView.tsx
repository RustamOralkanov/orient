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
        <div className="container mt-333">
            <Row>
                <Col xl={10} className="bg-orange">
                    <div className="flex flex-col h-full gap-40 bg-orange p-60 -mt-45">
                        <h4 className="uppercase text-[40px] -tracking-[0.01em] text-white font-light leading-tight font-display">{data?.title}</h4>
                        <p className="text-white uppercase text-[16px] leading-snug max-w-320 font-display">{data?.subtitle}</p>
                        <CtaForm />
                    </div>
                </Col>
                <Col xl={14}>
                    <div className="w-full h-full">
                        <img src="/night.webp" className="w-full h-full object-cover" />
                    </div>
                </Col>
            </Row>
        </div>
    );
};
