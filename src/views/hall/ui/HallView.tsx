import { useCarousel } from "@/shared/lib";
import { OrientData } from "@/shared/model";
import { CarouselButtons } from "@/shared/ui/arrowButton";
import { Carousel } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

export const HallView = () => {
    const { carouselRef, nextSlide, prevSlide } = useCarousel();
    const [index, setIndex] = useState<number>(0);
    const [data, setData] = useState<OrientData["ru"]["hall"] | null>(null);

    useEffect(() => {
        axios
            .get("/orient.json")
            .then((response) => {
                setData(response.data.ru.hall);
            })
            .catch((error) => {
                console.error("Ошибка при загрузке JSON:", error);
            });
    }, []);

    return (
        <div className="container">
            <div className="aspect-[1.59/1] -mx-70">
                <img src={data?.image} alt="banner" className="w-full h-full object-cover" />
            </div>
            <div className="flex justify-between -mt-283" id="hall">
                <div className="flex flex-col gap-96 mt-154">
                    <img src={data?.image_2} className="max-w-429 w-full h-auto object-contain" />
                    <p className="max-w-385 text-[16] uppercase -tracking-[0.02em] ">{data?.description_2}</p>
                </div>
                <div className="p-70 flex flex-col gap-68 bg-red -mr-70">
                    <div className="relative w-fit">
                        <img src="/hall-kursiv.svg" alt="kursiv" className="absolute -right-95" />
                        <h2 className="h2 text-white">{data?.title}</h2>
                    </div>
                    <h5 className="max-w-550 uppercase text-yellow-dark text-[32px] -tracking-[0.02em] leading-tight">{data?.subtitle}</h5>
                    <p className="max-w-570 text-white text-[16px] -tracking-[0.03em] font-light">{data?.description}</p>
                </div>
            </div>
            <div className="bg-orange py-50 mt-100 -mx-70 flex justify-between">
                <div className="flex flex-col justify-between ml-70">
                    <div className="flex flex-col">
                        <span className="text-yellow-100 text-sm uppercase">холлы</span>
                        <span className="text-white text-[44px] uppercase font-semibold max-w-420">{data?.infos?.[index]?.title}</span>
                    </div>
                    <CarouselButtons total={data?.infos?.length as number} next={nextSlide} prev={prevSlide} color="text-gray-900" />
                </div>
                <div className="w-[calc(50%_-_10px)] h-500 -mt-150 -mb-50 -ml-70">
                    <Carousel ref={carouselRef} dots={false} beforeChange={(_, id) => setIndex(id)}>
                        {data?.infos?.map((info, id) => (
                            <div key={id}>
                                <div>
                                    <img src={info?.image} alt={info?.title} className="w-full h-500 object-cover" />
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
};
