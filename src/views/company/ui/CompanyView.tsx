import { OrientData, useOrientContext } from "@/shared/model";
import { Button } from "@/shared/ui";
import { Col, Row } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

export const CompanyView = () => {
    const { handleFormModal } = useOrientContext();
    const [data, setData] = useState<OrientData["ru"]["company"] | null>(null);

    useEffect(() => {
        axios
            .get("/orient.json")
            .then((response) => {
                setData(response.data.ru.company);
            })
            .catch((error) => {
                console.error("Ошибка при загрузке JSON:", error);
            });
    }, []);

    return (
        <div className="bg-gray-900 mt-128 relative" id="company">
            <img src="/freepik__elegant-alleys-with-decorative-plants-lots-of-gree__21438.png" className="absolute h-full w-544 right-0 top-0 brightness-30 opacity-50" />
            <div className="container pt-90 relative z-10">
                <div className="relative w-fit mx-auto">
                    <h2 className="text-white uppercase text-[218px] leading-none text-center">AB CAPITAL</h2>
                    <img src="/company-kursiv.svg" className="absolute top-2/4 -translate-y-2/4 right-0" />
                </div>
            </div>
            <p className="text-[14px] text-white font-display font-light max-w-250 absolute bottom-40 right-70">{data?.description_1}</p>
            <Row className="-mt-85  relative z-[1]">
                <Col xl={6}>
                    <div className="h-full flex flex-col justify-end">
                        <div className="flex flex-col gap-40 py-50 pr-35 pl-70 bg-orange -mr-55 relative z-20">
                            <img src={data?.logo} alt="logo" className="max-w-110" />
                            <p className="text-[14px] text-white font-display font-light">{data?.description}</p>
                            <Button onClick={handleFormModal}>{data?.button}</Button>
                        </div>
                    </div>
                </Col>
                <Col xl={12}>
                    <div className="relative z-10 -mb-105">
                        <img src={data?.image} className="w-full h-full object-cover" />
                    </div>
                </Col>
            </Row>
        </div>
    );
};
