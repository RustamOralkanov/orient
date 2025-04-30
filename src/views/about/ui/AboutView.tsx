import { useResponsive } from "@/shared/lib";
import { OrientData } from "@/shared/model";
import { DayOrNight, TextAnimation, TitleAnimation } from "@/shared/ui";
import { Col, Row } from "antd";
import { useState } from "react";
import { Parallax } from "react-scroll-parallax";

type AboutViewProps = Partial<OrientData["ru"]["about"]>;

export const AboutView = (props: AboutViewProps) => {
    const { isMobile } = useResponsive();
    const [isDay, setIsDay] = useState(true);

    const subtitle = props?.subtitle?.split(" ").slice(0, 2).join(" ");
    const subtitleNext = props?.subtitle?.split(" ").slice(2).join(" ");

    const handleDay = (value: boolean) => {
        setIsDay(value);
    };

    return (
        <div className="container pt-150 pb-130 relative max-lg:pt-80 max-lg:pb-60" id="about">
            <div className="flex flex-col gap-54 pl-220 relative z-[2] max-lg:pl-0 max-lg:gap-20">
                <h2 className="h2 flex flex-col !leading-[1.1]">
                    <TitleAnimation title={[props?.title || ""]} />
                </h2>
                <TextAnimation delay={0.5}>
                    <p className="text-[32px] uppercase leading-tight max-w-570 max-lg:text-[16px]">
                        <span className="text-orange">{subtitle}</span> {subtitleNext}
                    </p>
                </TextAnimation>
                <div className="relative aspect-[108/59] max-lg:mt-10 max-lg:-mx-15 max-lg:min-h-380 max-lg:w-[calc(100%_+_30px)]">
                    <DayOrNight onChange={handleDay} />
                    <img src="/day.webp" alt="day" className="absolute bottom-0 w-full object-cover z-[1] transition-all duration-600" style={{ height: isDay ? "100%" : 0 }} />
                    <img src="/night.webp " alt="night" className="absolute bottom-0 w-full h-full object-cover" />
                </div>
            </div>
            <Row gutter={[20, 20]} className="relative z-10 -mt-193 !-ml-80 max-lg:!-ml-10 max-lg:-mt-102 " align={"bottom"}>
                <Col xl={8} lg={24} md={24} sm={24} xs={24}>
                    <div className="aspect-square overflow-clip max-lg:max-w-205 max-lg:-ml-15">
                        <Parallax translateX={["-400px", "0px"]} disabled={isMobile} className="w-800 h-full max-w-[100%]">
                            <img src="/5de32af2945a058c7507031d8033c78580d84f18.webp" alt="about" className="w-full h-full object-cover scale-150 mb-50 max-lg:scale-130" />
                        </Parallax>
                    </div>
                </Col>
                <Col xl={{ offset: 2, span: 14 }} lg={{ offset: 0, span: 24 }} md={{ offset: 0, span: 24 }} sm={{ offset: 0, span: 24 }} xs={{ offset: 0, span: 24 }}>
                    <TextAnimation>
                        <p className="text-[16px] text-gray-900 tracking-tight font-light font-display">{props?.description}</p>
                    </TextAnimation>
                </Col>
            </Row>
            <div className="flex mt-120 relative z-[3] max-lg:flex-wrap max-lg:mt-20">
                {props?.info?.map((item, id) => (
                    <div key={id} className={`flex flex-col gap-10 w-full max-lg:w-[50%] max-lg:mt-40 ${id % 2 === 0 ? "mb-40 max-lg:mb-0" : "mt-40 max-lg:mt-0"}`}>
                        <Parallax translateY={id % 2 === 0 ? ["50px", "0px"] : ["-50px", "0px"]} disabled={isMobile} easing="easeInOut" shouldAlwaysCompleteAnimation={false}>
                            <div className="flex flex-col gap-10">
                                <h4 className="text-[80px] leading-none text-orange font-neumann text-center whitespace-nowrap max-lg:text-left max-lg:text-[48px]">
                                    {item.value}
                                </h4>
                                <p className="text-[20px] text-center leading-none max-lg:text-left max-lg:text-[16px]">{item.label}</p>
                            </div>
                        </Parallax>
                    </div>
                ))}
            </div>
            <img src="/about-bg.svg" alt="bg" className="absolute -bottom-100 -left-70 -z-[1] w-auto h-auto object-contain" />
        </div>
    );
};
