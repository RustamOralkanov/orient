import { Carousel, Col, Row } from "antd";
import { useState } from "react";
import { OrientData } from "@/shared/model";
import { Button, TextAnimation, TitleAnimation } from "@/shared/ui";
import { CarouselButtons, MobileCarouselButtons } from "@/shared/ui/arrowButton";
import { useCarousel } from "@/shared/lib";
import { motion } from "motion/react";

type LocationViewProps = Partial<OrientData["ru"]["location"]>;

export const LocationView = (props: LocationViewProps) => {
    const { carouselRef, nextSlide, prevSlide } = useCarousel();
    const [index, setIndex] = useState<number>(0);

    return (
        <>
            <div className="container bg-orange pt-120 max-lg:pt-58" id="location">
                <div className="relative flex justify-center">
                    <h2 className="h2 flex flex-col text-white leading-[1.1]">
                        <TitleAnimation title={[props?.title || ""]} />
                    </h2>
                    <motion.img
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                        src="/location.svg"
                        alt="location"
                        className="absolute top-2/4 -translate-y-2/4 max-lg:h-48"
                    />
                </div>
                <div className="mt-133 -mx-70 w-[100%_-_140px] relative max-lg:mt-68 max-lg:w-full max-lg:mx-0">
                    <img src="/map.svg" className="w-full max-lg:object-top max-lg:min-h-380 max-lg:object-cover" />
                    <div className="absolute left-0 bottom-0 bg-gray-900 pl-70 py-45 pr-50 max-lg:-mx-15 max-lg:px-15 max-lg:static max-lg:w-[calc(100%_+_30px)]">
                        <div className="flex flex-col gap-40 max-w-420">
                            <TextAnimation delay={0.1}>
                                <h4 className="text-2xl text-white uppercase -tracking-[0.05em] max-lg:text-[20px]">{props?.subtitle}</h4>
                            </TextAnimation>
                            <TextAnimation delay={0.3}>
                                <p className="text-white max-lg:text-sm">{props?.description}</p>
                            </TextAnimation>
                            <TextAnimation delay={0.6}>
                                <Button onClick={() => window.open(props?.link, "blank")}>{props?.button}</Button>
                            </TextAnimation>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-red py-60 max-lg:py-0 max-lg:bg-gray-900">
                <Row className="max-lg:!flex-col-reverse">
                    <Col xl={12} lg={24} md={24} sm={24} xs={24}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.1, duration: 1 }}
                            viewport={{ once: true }}
                            className="flex flex-col h-full justify-between pl-70 font-display max-lg:p-24 max-lg:bg-red max-lg:mx-15 max-lg:-mt-30 max-lg:relative max-lg:z-10"
                        >
                            <div className="flex flex-col gap-30">
                                <h5 className="text-[44px] text-white leading-tight max-w-420 max-lg:text-2xl">{props?.places?.[index]?.title}</h5>
                                <div className="flex gap-56 items-center">
                                    <div className="flex gap-8 items-center">
                                        <span className="text-[32px] text-yellow-dark leading-none">{props?.places?.[index]?.time}</span>
                                        <div className="flex flex-col">
                                            <span className="leading-tight text-white text-xs">{props?.places?.[index]?.time_title}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <CarouselButtons total={props?.places?.length as number} next={nextSlide} prev={prevSlide} />
                        </motion.div>
                    </Col>
                    <Col xl={12} lg={24} md={24} sm={24} xs={24} className="-mt-60 -mb-120 max-lg:mt-0 max-lg:mb-0">
                        <div className="w-full">
                            <Carousel dots={false} ref={carouselRef} afterChange={(id) => setIndex(id)}>
                                {props?.places?.map((place, id) => (
                                    <div key={id}>
                                        <div className="aspect-[7/4] min-h-442 w-full h-full max-lg:min-h-380">
                                            <img src={place?.image} className="w-full h-full object-cover max-lg:min-h-380 max-lg:object-cover" />
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
                            <MobileCarouselButtons next={nextSlide} prev={prevSlide} />
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
};
