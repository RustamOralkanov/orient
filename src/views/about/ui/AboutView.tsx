import { useResponsive } from "@/shared/lib";
import { OrientData } from "@/shared/model";
import { DayOrNight, TextAnimation, TitleAnimation } from "@/shared/ui";
import { Col, Row } from "antd";
import { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import useDownloader from "react-use-downloader";

type AboutViewProps = Partial<OrientData["ru"]["about"]>;

export const AboutView = (props: AboutViewProps) => {
    const { isMobile } = useResponsive();
    const [isDay, setIsDay] = useState(true);
    const { download } = useDownloader();

    const fileUrl = "/pr.pdf";
    const filename = "Orient.pdf";

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
                    <img
                        src="/day.webp"
                        alt="day"
                        className="absolute bottom-0 w-full object-cover z-[1] transition-all duration-600"
                        style={{ height: isDay ? "100%" : 0 }}
                    />
                    <img src="/night.webp " alt="night" className="absolute bottom-0 w-full h-full object-cover" />
                </div>
            </div>
            <Row
                gutter={[20, 20]}
                className="relative z-10 -mt-193 !-ml-80 max-lg:!-ml-10 max-lg:-mt-102 "
                align={"bottom"}
            >
                <Col xl={8} lg={24} md={24} sm={24} xs={24}>
                    <div className="aspect-square overflow-clip max-lg:max-w-205 max-lg:-ml-15">
                        <Parallax
                            translateX={["-400px", "0px"]}
                            disabled={isMobile}
                            className="w-800 h-full max-w-[100%]"
                        >
                            <img
                                src="/5de32af2945a058c7507031d8033c78580d84f18.webp"
                                alt="about"
                                className="w-full h-full object-cover scale-150 mb-50 max-lg:scale-130"
                            />
                        </Parallax>
                    </div>
                </Col>
                <Col
                    xl={{ offset: 2, span: 14 }}
                    lg={{ offset: 0, span: 24 }}
                    md={{ offset: 0, span: 24 }}
                    sm={{ offset: 0, span: 24 }}
                    xs={{ offset: 0, span: 24 }}
                    className="pt-200 max-lg:pt-50"
                >
                    <TextAnimation>
                        <p className="text-[16px] text-gray-900 tracking-tight font-light font-display">
                            {props?.description}
                        </p>
                    </TextAnimation>
                    <button
                        className="flex items-center gap-10 border border-orange rounded-full px-20 py-10 uppercase text-md text-orange mt-20 cursor-pointer"
                        style={{ zIndex: 9999 }}
                        onClick={() => download(fileUrl, filename)}
                    >
                        <span className="text-orange">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.4613 13.7551C10.3429 13.8846 10.1755 13.9583 10 13.9583C9.82453 13.9583 9.65714 13.8846 9.53873 13.7551L6.2054 10.1092C5.97248 9.85448 5.99019 9.45915 6.24494 9.22623C6.49969 8.99332 6.89502 9.01102 7.12794 9.26577L9.375 11.7235V2.5C9.375 2.15482 9.65482 1.875 10 1.875C10.3452 1.875 10.625 2.15482 10.625 2.5V11.7235L12.8721 9.26577C13.105 9.01102 13.5003 8.99332 13.7551 9.22623C14.0098 9.45915 14.0275 9.85448 13.7946 10.1092L10.4613 13.7551Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M3.125 12.5C3.125 12.1548 2.84518 11.875 2.5 11.875C2.15482 11.875 1.875 12.1548 1.875 12.5V12.5457C1.87498 13.6854 1.87497 14.604 1.9721 15.3265C2.07295 16.0765 2.2887 16.7081 2.79029 17.2097C3.29189 17.7113 3.92345 17.927 4.67354 18.0279C5.39602 18.125 6.31462 18.125 7.45428 18.125H12.5457C13.6854 18.125 14.604 18.125 15.3265 18.0279C16.0766 17.927 16.7081 17.7113 17.2097 17.2097C17.7113 16.7081 17.9271 16.0765 18.0279 15.3265C18.125 14.604 18.125 13.6854 18.125 12.5457V12.5C18.125 12.1548 17.8452 11.875 17.5 11.875C17.1548 11.875 16.875 12.1548 16.875 12.5C16.875 13.6962 16.8737 14.5304 16.789 15.1599C16.7068 15.7714 16.5565 16.0952 16.3258 16.3258C16.0952 16.5565 15.7714 16.7068 15.1599 16.789C14.5304 16.8737 13.6962 16.875 12.5 16.875H7.5C6.30382 16.875 5.46956 16.8737 4.8401 16.789C4.22862 16.7068 3.90481 16.5565 3.67418 16.3258C3.44354 16.0952 3.29317 15.7714 3.21096 15.1599C3.12633 14.5304 3.125 13.6962 3.125 12.5Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </span>
                        сКАЧАТЬ БУКЛЕТ
                    </button>
                </Col>
            </Row>
            <div className="flex mt-120 relative z-[3] max-lg:flex-wrap max-lg:mt-20">
                {props?.info?.map((item, id) => (
                    <div
                        key={id}
                        className={`flex flex-col gap-10 w-full max-lg:w-[50%] max-lg:mt-40 ${
                            id % 2 === 0 ? "mb-40 max-lg:mb-0" : "mt-40 max-lg:mt-0"
                        }`}
                    >
                        <Parallax
                            translateY={id % 2 === 0 ? ["50px", "0px"] : ["-50px", "0px"]}
                            disabled={isMobile}
                            easing="easeInOut"
                            shouldAlwaysCompleteAnimation={false}
                        >
                            <div className="flex flex-col gap-10">
                                <h4 className="text-[80px] leading-none text-orange font-neumann text-center whitespace-nowrap max-lg:text-left max-lg:text-[48px]">
                                    {item.value}
                                </h4>
                                <p className="text-[20px] text-center leading-none max-lg:text-left max-lg:text-[16px]">
                                    {item.label}
                                </p>
                            </div>
                        </Parallax>
                    </div>
                ))}
            </div>
            <img
                src="/about-bg.svg"
                alt="bg"
                className="absolute -bottom-100 -left-70 -z-[1] w-auto h-auto object-contain"
            />
        </div>
    );
};
