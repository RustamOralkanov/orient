import { OrientData } from "@/shared/model";
import { DayOrNight, TextAnimation, TitleAnimation } from "@/shared/ui";
import { Col, Row } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";

export const AboutView = () => {
    const [isDay, setIsDay] = useState(true);
    const [data, setData] = useState<OrientData["ru"] | null>(null);

    useEffect(() => {
        axios
            .get("/orient.json")
            .then((response) => {
                setData(response.data.ru);
            })
            .catch((error) => {
                console.error("Ошибка при загрузке JSON:", error);
            });
    }, []);

    const subtitle = data?.about.subtitle.split(" ").slice(0, 2).join(" ");
    const subtitleNext = data?.about.subtitle.split(" ").slice(2).join(" ");

    const handleDay = (value: boolean) => {
        setIsDay(value);
    };

    return (
        <div className="container pt-150 pb-130 relative" id="about">
            <div className="flex flex-col gap-54 pl-220 relative z-[2]">
                <h2 className="h2 flex flex-col !leading-[1.1]">
                    <TitleAnimation title={[data?.about.title || ""]} />
                </h2>
                <TextAnimation delay={0.5}>
                    <p className="text-[32px] uppercase leading-tight max-w-570">
                        <span className="text-orange">{subtitle}</span> {subtitleNext}
                    </p>
                </TextAnimation>
                <div className="relative aspect-[108/59]">
                    <DayOrNight onChange={handleDay} />
                    <img src="/day.jpg" alt="day" className="absolute bottom-0 w-full object-cover z-[1] transition-all duration-600" style={{ height: isDay ? "100%" : 0 }} />
                    <img src="/night.jpg " alt="night" className="absolute bottom-0 w-full h-full object-cover" />
                </div>
            </div>
            <Row gutter={[20, 20]} className="relative z-10 -mt-193 !-ml-80" align={"bottom"}>
                <Col xl={8}>
                    <div className="aspect-square overflow-clip">
                        <Parallax translateX={["-400px", "0px"]} className="w-800 h-full">
                            <img src="/5de32af2945a058c7507031d8033c78580d84f18.webp" alt="about" className="w-full h-full object-cover scale-150 mb-50 " />
                        </Parallax>
                    </div>
                </Col>
                <Col xl={{ offset: 2, span: 14 }}>
                    <TextAnimation>
                        <p className="text-[16px] text-gray-900 tracking-tight font-light font-display">{data?.about?.description}</p>
                    </TextAnimation>
                </Col>
            </Row>
            <div className="flex mt-120 relative z-[3]">
                {data?.about?.info.map((item, id) => (
                    <div key={id} className={`flex flex-col gap-10 w-full ${id % 2 === 0 ? "mb-40" : "mt-40"}`}>
                        <Parallax translateY={id % 2 === 0 ? ["50px", "0px"] : ["-50px", "0px"]} easing="easeInOut" shouldAlwaysCompleteAnimation={false}>
                            <div className="flex flex-col gap-10">
                                <h4 className="text-[80px] leading-none text-orange font-neumann text-center whitespace-nowrap">{item.value}</h4>
                                <p className="text-[20px] text-center leading-none">{item.label}</p>
                            </div>
                        </Parallax>
                    </div>
                ))}
            </div>
            <img src="/about-bg.svg" alt="bg" className="absolute -bottom-100 -left-70 -z-[1] w-auto h-auto object-contain" />
        </div>
    );
};
