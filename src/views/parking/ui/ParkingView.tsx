import { useState } from "react";
import { useCarousel, useResponsive } from "@/shared/lib";
import { OrientData } from "@/shared/model";
import { CarouselButtons } from "@/shared/ui/arrowButton";
import { Carousel, Col, Row } from "antd";
import { TitleAnimation } from "@/shared/ui";
import { motion } from "motion/react";

type ParkingViewProps = Partial<OrientData["ru"]["parking"]>;

export const ParkingView = (props: ParkingViewProps) => {
    const { isMobile } = useResponsive();
    const { carouselRef, nextSlide, prevSlide } = useCarousel();
    const [index, setIndex] = useState<number>(0);

    const subtitle = props?.subtitle?.split(" ").slice(0, -3).join(" ");
    const subtitleNext = props?.subtitle?.split(" ").slice(-3).join(" ");

    const ParkingDescription = () => (
        <div className="flex flex-col gap-30 max-lg:mt-112 max-lg:gap-24z">
            <h4 className="text-[32px] uppercase font-light max-w-480 leading-tight max-lg:text-[20px]">
                {subtitle} <span className="font-semibold text-orange">{subtitleNext}</span>
            </h4>
            <p className="max-w-510 text-[16px] -tracking-[0.03em] text-[#474747] max-lg:text-sm">{props?.description}</p>
        </div>
    );

    return (
        <div className="container pt-170 max-lg:pt-80">
            <div className="flex justify-between max-lg:flex-col" id="parking">
                <div className="flex flex-col justify-between pt-100 max-lg:pt-0">
                    <div className="relative w-fit">
                        <img src="/parking-kursiv.svg" alt="kursiv" className="absolute bottom-42 right-164 max-lg:h-48 max-lg:bottom-22 max-lg:-right-22" />
                        <h2 className="h2 text-gray-900 flex flex-col leading-[1.1]">
                            <TitleAnimation title={[props?.title || ""]} />
                        </h2>
                    </div>
                    {!isMobile && <ParkingDescription />}
                </div>
                <div className="flex gap-20 items-start -ml-50 -mr-70 max-lg:ml-0 max-lg:mr-0 max-lg:mt-30 max-lg:relative">
                    <div className="aspect-square max-lg:max-w-185 max-lg:absolute max-lg:-bottom-57 max-lg:-right-15">
                        <img src={props?.image} className="w-full h-full" />
                    </div>
                    <div className="w-[41vw] h-[44vw] max-lg:-mx-15 max-lg:w-[calc(100%_+_30px)] max-lg:min-h-390">
                        <img src={props?.image_2} className="w-full h-full object-cover" />
                    </div>
                </div>
                {isMobile && <ParkingDescription />}
            </div>
            <div className="bg-yellow -mx-70 py-50 mt-194 max-lg:mt-72 max-lg:-mx-15 max-lg:py-0 max-lg:bg-yellow-100">
                <Row className="max-lg:!flex-col">
                    <Col xl={12} lg={24} md={24} sm={24} xs={24}>
                        <div className="-ml-70 -mt-150 -mb-50 max-lg:ml-0 max-lg:mt-0">
                            <Carousel ref={carouselRef} dots={false} beforeChange={(_, id) => setIndex(id)}>
                                {props?.infos?.map((info, id) => (
                                    <div key={id}>
                                        <div>
                                            <img src={info?.image} alt={info?.title} className="w-full h-500 object-cover max-lg:max-h-380" />
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </Col>
                    <Col xl={{ offset: 4, span: 8 }} lg={{ offset: 0, span: 24 }} md={{ offset: 0, span: 24 }} sm={{ offset: 0, span: 24 }} xs={{ offset: 0, span: 24 }}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.1, duration: 1 }}
                            viewport={{ once: true }}
                            className="flex flex-col justify-between font-display h-full max-lg:bg-yellow max-lg:p-24 max-lg:mx-15 max-lg:-mt-30"
                        >
                            <div className="flex flex-col">
                                <span className="text-gray-900 text-sm uppercase opacity-50">Паркинг</span>
                                <span className="text-gray-900 text-[44px] uppercase font-semibold max-lg:text-2xl">{props?.infos?.[index]?.title}</span>
                                <span className="text-gray-900 text-sm max-w-290">{props?.infos?.[index]?.subtitle}</span>
                            </div>
                            <CarouselButtons
                                total={props?.infos?.length as number}
                                next={nextSlide}
                                prev={prevSlide}
                                color="text-gray-900"
                                buttonClassNames={"!border-gray-900 !text-gray-900 hover:!bg-orange  hover:!border-orange hover:!text-white"}
                            />
                        </motion.div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};
