import { useCarousel } from "@/shared/lib";
import { OrientData, useOrientContext } from "@/shared/model";
import { Button, TextAnimation, TitleAnimation } from "@/shared/ui";
import { CarouselButtons } from "@/shared/ui/arrowButton";
import { Carousel, Col, Row } from "antd";
import { useLayoutEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Parallax } from "react-scroll-parallax";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./ImprovementView.scss";

type ImprovementViewProps = Partial<OrientData["ru"]["improvement"]>;

export const ImprovementView = (props: ImprovementViewProps) => {
    const { handleFormModal } = useOrientContext();
    const { carouselRef, nextSlide, prevSlide } = useCarousel();
    const [index, setIndex] = useState<number>(0);

    const info_title = props?.info_title?.split("|");

    console.log(info_title);

    return (
        <>
            <div className="container pt-273 pb-218 bg-gray-900" id="improvement">
                <div className="relative flex justify-center -mb-30 z-10">
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
                        className="absolute top-2/4 -translate-y-2/4"
                    />
                </div>
                <div className="relative w-[calc(100%_+_140px)] -mx-70">
                    <img src={props?.image} className="w-full" />
                    <div className="flex flex-col gap-40 p-90 bg-[linear-gradient(147.21deg,_rgba(160,84,40,0.75)_19.59%,_rgba(58,30,15,0.75)_217.84%)] w-fit absolute top-100 right-0">
                        <TextAnimation delay={0}>
                            <p className="max-w-530 text-white -tracking-[0.03em]">{props?.description}</p>
                        </TextAnimation>
                        <TextAnimation delay={0.5}>
                            <Button onClick={handleFormModal}>{props?.button}</Button>
                        </TextAnimation>
                    </div>
                </div>
                <div className="flex flex-col overflow-hidden w-[calc(100%_+_140px)] -mx-70 -mt-340">
                    <h3 className="max-w-750 text-white uppercase text-[53px] leading-tight ml-180 relative z-10 flex flex-col">
                        <TitleAnimation title={info_title || []} height={67} />
                    </h3>
                    <Parallax translateX={["100px", "-1500px"]} className="flex gap-240 -mt-125">
                        {props?.infos?.map((info, id) => (
                            <div key={id} className="flex flex-col gap-27 min-w-640">
                                <img src={info.image} className="w-640 h-460 object-cover" />
                                <p className="max-w-540 text-white leading-tight -tracking-[0.03em]">{info?.description}</p>
                            </div>
                        ))}
                    </Parallax>
                    <ParallaxScroll infos={props?.infos || []} />
                </div>
            </div>
            <Row className="bg-orange">
                <Col xl={12}>
                    <div className="flex flex-col h-full justify-between py-50 font-display pl-70">
                        <div className="flex flex-col gap-12">
                            <span className="text-yellow-100 uppercase leading-none">Благоустройство</span>
                            <h4 className="max-w-420 text-[44px] uppercase text-white leading-tight">{props?.features?.[index]?.title}</h4>
                        </div>
                        <CarouselButtons total={props?.features?.length as number} next={nextSlide} prev={prevSlide} color="text-gray-900" />
                    </div>
                </Col>
                <Col xl={12} className="-mt-100">
                    <div className="w-full">
                        <Carousel dots={false} ref={carouselRef} afterChange={(id) => setIndex(id)}>
                            {props?.features?.map((feature, id) => (
                                <div key={id}>
                                    <div>
                                        <img src={feature?.image} className="w-full h-full object-contain" />
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </Col>
            </Row>
            <Gallery data={props as OrientData["ru"]["improvement"]} />
        </>
    );
};

gsap.registerPlugin(ScrollTrigger);

const ParallaxScroll = ({ infos }: { infos: OrientData["ru"]["improvement"]["infos"] }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);
    const secondItemRef = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const totalWidth = (contentRef.current?.scrollWidth || 0) - window.innerWidth;

            const endPosition = () => {
                const secondItem = secondItemRef.current;
                if (!secondItem) return "+=500";

                const rect = secondItem.getBoundingClientRect();
                const centerOfScreen = window.innerWidth / 2;
                const leftOffset = secondItem.offsetLeft + secondItem.offsetWidth / 2;
                return `+=${leftOffset - centerOfScreen}`;
            };

            gsap.to(contentRef.current, {
                x: () => -(secondItemRef.current?.offsetLeft || 0),
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: endPosition,
                    scrub: true,
                    pin: true,
                    anticipatePin: 1,
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-gray-900">
            <div ref={contentRef} className="flex gap-[240px] w-max">
                {infos.map((info, id) => (
                    <div key={id} ref={id === 1 ? secondItemRef : null} className="flex flex-col gap-[27px] min-w-[640px]">
                        <img src={info.image} className="w-[640px] h-[460px] object-cover" />
                        <p className="max-w-[540px] text-white leading-tight tracking-tight">{info.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Gallery = ({ data }: { data: OrientData["ru"]["improvement"] }) => {
    const { carouselRef, nextSlide, prevSlide } = useCarousel();
    const [index, setIndex] = useState<number>(0);

    const gallery = data?.gallery || [];

    // Вычисляем 6 элементов справа с зацикливанием
    const visibleImages = [...Array(6)].map((_, i) => {
        const imgIndex = (index + i) % gallery.length;
        return gallery[imgIndex];
    });

    return (
        <div className="pt-190 h-929 pb-150 bg-gray-900 relative overflow-hidden">
            {/* Боковая галерея */}
            <div className="flex gap-20 items-start absolute -right-260">
                {visibleImages.map((src, id) => (
                    <div key={id} className={["bg-red flex-[1_0_auto]", id === 4 ? "w-640 h-500" : "w-310 h-310"].join(" ")}>
                        <img src={src} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>

            {/* Основной слайдер */}
            <div className="max-w-640 ml-auto mr-70 flex flex-col gap-24">
                <Carousel dots={false} ref={carouselRef} beforeChange={(_, id) => setIndex(id)} fade>
                    {gallery.map((src, id) => (
                        <div key={id}>
                            <div className="w-710 h-500">
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
