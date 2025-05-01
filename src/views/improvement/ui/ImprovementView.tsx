import { useCarousel, useResponsive } from "@/shared/lib";
import { OrientData, useOrientContext } from "@/shared/model";
import { Button, TextAnimation, TitleAnimation } from "@/shared/ui";
import { CarouselButtons } from "@/shared/ui/arrowButton";
import { Carousel, Col, Row } from "antd";
import { useState } from "react";
import { motion } from "motion/react";
import { Parallax } from "react-scroll-parallax";

type ImprovementViewProps = Partial<OrientData["ru"]["improvement"]>;

export const ImprovementView = (props: ImprovementViewProps) => {
    const { isMobile } = useResponsive();
    const { handleFormModal } = useOrientContext();
    const { carouselRef, nextSlide, prevSlide } = useCarousel();
    const [index, setIndex] = useState<number>(0);

    const info_title = props?.info_title?.split("|");

    return (
        <>
            <div className="container pt-273 pb-218 bg-gray-900 max-lg:pt-90 max-lg:pb-80" id="improvement">
                <div className="relative flex justify-center -mb-30 z-10 max-lg:-mb-15">
                    <h2 className="h2 text-white flex flex-col leading-[1.1]">
                        <TitleAnimation title={[props?.title || ""]} />
                    </h2>
                    <motion.img
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                        src="/improvement-kursiv.svg"
                        alt="location"
                        className="absolute top-2/4 -translate-y-2/4 max-lg:h-48"
                    />
                </div>
                <div className="relative w-[calc(100%_+_140px)] -mx-70 max-lg:-mx-15 max-lg:w-[calc(100%_+_30px)]">
                    <img src={props?.image} className="w-full max-lg:min-h-453 max-lg:object-cover" />
                    <div className="flex flex-col gap-40 p-90 bg-[linear-gradient(147.21deg,_rgba(160,84,40,0.75)_19.59%,_rgba(58,30,15,0.75)_217.84%)] w-fit absolute top-100 right-0 max-lg:relative max-lg:z-10 max-lg:top-0 max-lg:p-24 max-lg:text-center max-lg:text-sm max-lg:items-center max-lg:w-[calc(100%_-_30px)] max-lg:mx-auto max-lg:-mt-110 ">
                        <TextAnimation delay={0}>
                            <p className="max-w-530 text-white -tracking-[0.03em]">{props?.description}</p>
                        </TextAnimation>
                        <TextAnimation delay={0.5}>
                            <Button onClick={handleFormModal}>{props?.button}</Button>
                        </TextAnimation>
                    </div>
                </div>
                <div className="flex flex-col overflow-hidden w-[calc(100%_+_140px)] -mx-70 -mt-340 max-lg:mt-80 max-lg:mx-0 max-lg:w-full">
                    <h3 className="max-w-750 text-white uppercase text-[53px] leading-tight ml-180 relative z-10 flex flex-col max-lg:text-2xl max-lg:ml-0">
                        <TitleAnimation title={info_title || []} height={28} />
                    </h3>
                    {isMobile ? (
                        <Carousel dots={false} variableWidth autoplay autoplaySpeed={3000} className="max-lg:-mt-45">
                            {props?.infos?.map((info, id) => (
                                <div key={id}>
                                    <div className="flex flex-col gap-27 min-w-640 max-lg:min-w-300 max-lg:max-w-330 max-lg:pr-30">
                                        <video autoPlay playsInline muted loop>
                                            <source src={info?.image} />
                                        </video>
                                        <p className="max-w-540 text-white leading-tight -tracking-[0.03em] max-lg:text-sm">{info?.description}</p>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    ) : (
                        <Parallax translateX={["800px", "-1000px"]} className="flex gap-240 -mt-125">
                            {props?.infos?.map((info, id) => (
                                <div key={id} className="flex flex-col gap-27 min-w-640 max-lg:min-w-300">
                                    <video autoPlay playsInline muted loop>
                                        <source src={info?.image} />
                                    </video>
                                    <p className="max-w-540 text-white leading-tight -tracking-[0.03em] max-lg:text-sm">{info?.description}</p>
                                </div>
                            ))}
                        </Parallax>
                    )}
                </div>
            </div>
            <div className="bg-orange max-lg:bg-gray-900">
                <Row className="max-lg:!flex-col-reverse">
                    <Col xl={12}>
                        <div className="flex flex-col h-full justify-between py-50 font-display pl-70 max-lg:pl-24 max-lg:py-24 max-lg:bg-orange max-lg:mx-15 max-lg:-mt-30 max-lg:relative max-lg:z-10">
                            <div className="flex flex-col gap-12">
                                <span className="text-yellow-100 opacity-75 uppercase leading-none">Благоустройство</span>
                                <h4 className="max-w-420 text-[44px] uppercase text-white leading-tight font-semibold max-lg:text-2xl">{props?.features?.[index]?.title}</h4>
                            </div>
                            <CarouselButtons total={props?.features?.length as number} next={nextSlide} prev={prevSlide} color="text-gray-900" />
                        </div>
                    </Col>
                    <Col xl={12} className="-mt-100 max-lg:mt-0">
                        <div className="w-full">
                            <Carousel dots={false} ref={carouselRef} afterChange={(id) => setIndex(id)}>
                                {props?.features?.map((feature, id) => (
                                    <div key={id}>
                                        <div>
                                            <img src={feature?.image} className="w-full h-full object-contain max-lg:min-h-380 max-lg:object-cover" />
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </div>
            <Gallery data={props as OrientData["ru"]["improvement"]} />
        </>
    );
};

const Gallery = ({ data }: { data: OrientData["ru"]["improvement"] }) => {
    const { carouselRef, nextSlide, prevSlide } = useCarousel();
    const { isMobile } = useResponsive();
    const [index, setIndex] = useState<number>(0);

    const gallery = data?.gallery || [];

    // Вычисляем 6 элементов справа с зацикливанием
    const visibleImages = [...Array(6)].map((_, i) => {
        const imgIndex = (index + i) % gallery.length;
        return gallery[imgIndex];
    });

    return (
        <div className="pt-190 h-929 pb-150 bg-gray-900 relative overflow-hidden max-lg:pt-80 max-lg:pb-80 max-lg:h-500">
            {/* Боковая галерея */}
            <div className="flex gap-20 items-start absolute -right-260 max-lg:hidden">
                {visibleImages.map((src, id) => (
                    <div key={id} className={["bg-red flex-[1_0_auto]", id === 4 ? "w-640 h-500" : "w-310 h-310"].join(" ")}>
                        <img src={src} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>

            {/* Основной слайдер */}
            <div className="max-w-640 ml-auto mr-70 flex flex-col gap-24 max-lg:max-w-full max-lg:mr-0">
                <Carousel dots={false} ref={carouselRef} beforeChange={(_, id) => setIndex(id)} fade={!isMobile} variableWidth={isMobile} centerMode={isMobile}>
                    {gallery.map((src, id) => (
                        <div key={id}>
                            <div className="w-710 h-500 max-lg:w-320 max-lg:h-300 max-lg:pr-20">
                                <img src={src} className="w-full h-full object-cover" />
                            </div>
                        </div>
                    ))}
                </Carousel>
                <CarouselButtons total={gallery.length} next={nextSlide} prev={prevSlide} color="text-white" justifyBetween />
            </div>
        </div>
    );
};
