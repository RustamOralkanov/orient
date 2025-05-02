import { Carousel, Col, Row } from "antd";
import { useState } from "react";
import { useCarousel } from "@/shared/lib";
import { OrientData } from "@/shared/model";
import { CarouselButtons, MobileCarouselButtons } from "@/shared/ui/arrowButton";
import { TextAnimation, TitleAnimation } from "@/shared/ui";
import { motion } from "motion/react";

type ArchitectureViewProps = Partial<OrientData["ru"]["architecture"]>;

export const ArchitectureView = (props: ArchitectureViewProps) => {
    const { carouselRef, nextSlide, prevSlide } = useCarousel();
    const [index, setIndex] = useState<number>(0);

    return (
        <div className="container pt-135 max-lg:pt-100" id="architecture">
            <h2 className="uppercase text-[177px] text-orange text-center flex flex-col leading-[1.1] max-2xl:text-[96px] max-lg:text-[40px]">
                <TitleAnimation title={[props?.title || ""]} height={193} />
            </h2>
            <div className="flex gap-60 mt-100 max-lg:flex-col max-lg:mt-0">
                <div className="flex flex-col flex-[1_0_auto] justify-between mt-50 -mr-190 relative z-10 max-lg:mt-37 max-lg:mr-0">
                    <p className="-tracking-[0.03em] uppercase text-2xl leading-normal max-w-675 max-lg:text-[16px] max-lg:relative max-lg:z-10">{props?.description}</p>
                    <div className="hidden w-full -mt-30 max-lg:block">
                        <img src={props?.image} alt="image" className="w-full" />
                    </div>
                    <div className="flex flex-col max-lg:mt-72">
                        <img src="/architecture-kursiv.svg" alt="kursiv" className="max-w-354 -mb-35 -ml-55 max-lg:h-115" />
                        <TextAnimation delay={0.2}>
                            <p className="-tracking-[0.03em] text-[16px] leading-normal max-w-490 max-lg:max-w-full max-lg:text-sm">{props?.description_2}</p>
                        </TextAnimation>
                    </div>
                </div>
                <div className="max-lg:hidden">
                    <img src={props?.image} alt="image" className="pr-110" />
                </div>
            </div>
            <div className="relative z-10 mt-180 max-lg:mt-100">
                <img src="/arc-balls.webp" alt="balls" className="absolute -top-90 -left-70 max-lg:static max-lg:-ml-15" />
                <TextAnimation delay={0.3}>
                    <p className="-tracking-[0.03em] uppercase text-[20px] leading-normal max-w-420 ml-auto mr-110 max-lg:ml-0 max-lg:mt-120 max-lg:max-w-full max-lg:mr-0 max-lg:text-[16px]">
                        {props?.description_3}
                    </p>
                </TextAnimation>
            </div>
            <div className="bg-orange -mr-70 py-80 mt-194 max-lg:mt-72 max-lg:-mx-15 max-lg:py-0 max-lg:bg-yellow-100">
                <Row className="max-lg:!flex-col">
                    <Col xl={12} lg={24} md={24} sm={24} xs={24}>
                        <div className="-ml-70 -mt-80 max-lg:ml-0 max-lg:mt-0">
                            <Carousel ref={carouselRef} dots={false} beforeChange={(_, id) => setIndex(id)}>
                                {props?.infos?.map((info, id) => (
                                    <div key={id}>
                                        <div>
                                            <img src={info?.image} alt={info?.title} className="w-full h-490 object-cover max-lg:max-h-380" />
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
                            <MobileCarouselButtons next={nextSlide} prev={prevSlide} />
                        </div>
                    </Col>
                    <Col xl={{ offset: 4, span: 8 }} lg={{ offset: 0, span: 24 }} md={{ offset: 0, span: 24 }} sm={{ offset: 0, span: 24 }} xs={{ offset: 0, span: 24 }}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.1, duration: 1 }}
                            viewport={{ once: true }}
                            className="flex flex-col justify-between font-display h-full max-lg:bg-orange max-lg:p-24 max-lg:mx-15 max-lg:-mt-30"
                        >
                            <div className="flex flex-col gap-12">
                                <span className="text-yellow-100 opacity-75 uppercase leading-none">Архитектура</span>
                                <span className="text-white text-[32px] max-w-420 font-semibold max-lg:text-2xl uppercase">{props?.infos?.[index]?.title}</span>
                            </div>
                            <CarouselButtons total={props?.infos?.length as number} next={nextSlide} prev={prevSlide} color="text-gray-900" />
                        </motion.div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};
