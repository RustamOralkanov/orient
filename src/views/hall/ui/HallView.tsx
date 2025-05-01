import { Carousel, Col, Row } from "antd";
import { useState } from "react";
import { useCarousel } from "@/shared/lib";
import { OrientData } from "@/shared/model";
import { CarouselButtons, MobileCarouselButtons } from "@/shared/ui/arrowButton";
import { TextAnimation, TitleAnimation } from "@/shared/ui";

type HallViewProps = Partial<OrientData["ru"]["hall"]>;

export const HallView = (props: HallViewProps) => {
    const { carouselRef, nextSlide, prevSlide } = useCarousel();
    const [index, setIndex] = useState<number>(0);

    return (
        <div className="container max-lg:mt-80">
            <div className="aspect-[1.59/1] -mx-70 max-lg:aspect-[unset] max-lg:-mx-15">
                <img src={props?.image} alt="banner" className="w-full h-full object-cover max-lg:min-h-350" />
            </div>
            <Row className="-mt-265 max-lg:mt-0">
                <Col xl={8} lg={0} md={0} sm={0} xs={0}>
                    <div className="flex flex-col gap-96 mt-154 max-lg:mt-0 ">
                        <img src={props?.image_2} className="max-w-429 w-full h-auto object-contain max-lg:max-w-185 max-lg:-top-92.5 max-lg:hidden" />
                        <p className="max-w-385 text-[16] uppercase -tracking-[0.02em] font-display max-lg:hidden">{props?.description_2}</p>
                    </div>
                </Col>
                <Col xl={{ offset: 4, span: 12 }} lg={{ offset: 0, span: 24 }} md={{ offset: 0, span: 24 }} sm={{ offset: 0, span: 24 }} xs={{ offset: 0, span: 24 }}>
                    <img src={props?.image_2} className="hidden aspect-square max-w-185 absolute -top-92.5 -right-15 max-lg:block" />
                    <div className="p-70 flex flex-col h-full gap-68 bg-red -mr-70 font-display max-lg:-mx-15 max-lg:flex-[1] max-lg:px-15 max-lg:gap-27">
                        <div className="relative w-fit">
                            <img src="/hall-kursiv.svg" alt="kursiv" className="absolute -right-95 max-lg:h-48 max-lg:-right-50 max-lg:-top-30" />
                            <h2 className="h2 text-white flex flex-col leading-[1.1]">
                                <TitleAnimation title={[props?.title || ""]} />
                            </h2>
                        </div>
                        <TextAnimation delay={0.3}>
                            <h5 className="max-w-550 uppercase text-yellow-dark text-[32px] -tracking-[0.02em] leading-tight">{props?.subtitle}</h5>
                        </TextAnimation>
                        <TextAnimation delay={0.6}>
                            <p className="max-w-570 text-white text-[16px] -tracking-[0.03em] font-light">{props?.description}</p>
                        </TextAnimation>
                    </div>
                </Col>
            </Row>
            <div className="bg-orange -mx-70 mt-100 max-lg:bg-yellow-100 max-lg:-mx-15 max-lg:mt-0">
                <Row className="max-lg:!flex-col-reverse">
                    <Col xl={12} lg={24} md={24} sm={24} xs={24}>
                        <div className="flex flex-col h-full justify-between py-50 font-display pl-70 max-lg:pl-24 max-lg:py-24 max-lg:bg-orange max-lg:mx-15 max-lg:-mt-30 max-lg:relative max-lg:z-10">
                            <div className="flex flex-col gap-12">
                                <span className="text-yellow-100 opacity-75 uppercase leading-none">холлы</span>
                                <h4 className="max-w-420 text-[44px] uppercase text-white leading-tight font-semibold max-lg:text-2xl">{props?.infos?.[index]?.title}</h4>
                            </div>
                            <CarouselButtons total={props?.infos?.length as number} next={nextSlide} prev={prevSlide} color="text-gray-900" />
                        </div>
                    </Col>
                    <Col xl={12} lg={24} md={24} sm={24} xs={24} className="-mt-100 max-lg:mt-0">
                        <div className="w-full">
                            <Carousel dots={false} ref={carouselRef} afterChange={(id) => setIndex(id)}>
                                {props?.infos?.map((info, id) => (
                                    <div key={id}>
                                        <div>
                                            <img src={info?.image} className="w-full h-full object-contain max-lg:min-h-380 max-lg:object-cover" />
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
                            <MobileCarouselButtons next={nextSlide} prev={prevSlide} />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};
