import { useCarousel } from "@/shared/lib";
import { OrientData, useOrientContext } from "@/shared/model";
import { Button } from "@/shared/ui";
import { CarouselButtons } from "@/shared/ui/arrowButton";
import { Carousel, Col, Row } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

import "./ImprovementView.scss";

export const ImprovementView = () => {
    const { handleFormModal } = useOrientContext();
    const { carouselRef, nextSlide, prevSlide } = useCarousel();
    const [index, setIndex] = useState<number>(0);
    const [data, setData] = useState<OrientData["ru"]["improvement"] | null>(null);

    useEffect(() => {
        axios
            .get("/orient.json")
            .then((response) => {
                setData(response.data.ru.improvement);
            })
            .catch((error) => {
                console.error("Ошибка при загрузке JSON:", error);
            });
    }, []);

    return (
        <>
            <div className="container pt-273 pb-218 bg-gray-900" id="improvement">
                <div className="relative flex justify-center -mb-30 z-10">
                    <h2 className="h2 text-white text">{data?.title}</h2>
                    <img src="/improvement-kursiv.svg" alt="location" className="absolute top-2/4 -translate-y-2/4" />
                </div>
                <div className="relative w-[calc(100%_+_140px)] -mx-70">
                    <img src={data?.image} className="w-full" />
                    <div className="flex flex-col gap-40 p-90 bg-[linear-gradient(147.21deg,_rgba(160,84,40,0.75)_19.59%,_rgba(58,30,15,0.75)_217.84%)] w-fit absolute top-100 right-0">
                        <p className="max-w-530 text-white -tracking-[0.03em]">{data?.description}</p>
                        <Button onClick={handleFormModal}>{data?.button}</Button>
                    </div>
                </div>
                <div className="flex flex-col overflow-hidden w-[calc(100%_+_140px)] -mx-70 -mt-340">
                    <h3 className="max-w-750 text-white uppercase text-[53px] leading-tight ml-180 relative z-10">{data?.info_title}</h3>
                    <ParallaxProvider>
                        <Parallax translateX={["100px", "-1500px"]} className="flex gap-240 -mt-125">
                            {data?.infos?.map((info, id) => (
                                <div key={id} className="flex flex-col gap-27 min-w-640">
                                    <img src={info.image} className="w-640 h-460 object-cover" />
                                    <p className="max-w-540 text-white leading-tight -tracking-[0.03em]">{info?.description}</p>
                                </div>
                            ))}
                        </Parallax>
                    </ParallaxProvider>
                </div>
            </div>
            <Row className="bg-orange">
                <Col xl={12}>
                    <div className="flex flex-col h-full justify-between py-50 font-display pl-70">
                        <div className="flex flex-col gap-12">
                            <span className="text-yellow-100 uppercase leading-none">Благоустройство</span>
                            <h4 className="max-w-420 text-[44px] uppercase text-white leading-tight">{data?.features?.[index]?.title}</h4>
                        </div>
                        <CarouselButtons total={data?.features?.length as number} next={nextSlide} prev={prevSlide} color="text-gray-900" />
                    </div>
                </Col>
                <Col xl={12} className="-mt-100">
                    <div className="w-full">
                        <Carousel dots={false} ref={carouselRef} afterChange={(id) => setIndex(id)}>
                            {data?.features?.map((feature, id) => (
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
            <Gallery data={data as OrientData["ru"]["improvement"]} />
        </>
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
