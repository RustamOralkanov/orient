import { useCarousel } from "@/shared/lib";
import { OrientData } from "@/shared/model";
import { CarouselButtons } from "@/shared/ui/arrowButton";
import { Carousel } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

export const ArchitectureView = () => {
    const { carouselRef, nextSlide, prevSlide } = useCarousel();
    const [index, setIndex] = useState<number>(0);
    const [data, setData] = useState<OrientData["ru"]["architecture"] | null>(null);

    useEffect(() => {
        axios
            .get("/orient.json")
            .then((response) => {
                setData(response.data.ru.architecture);
            })
            .catch((error) => {
                console.error("Ошибка при загрузке JSON:", error);
            });
    }, []);

    return (
        <div className="container pt-135" id="architecture">
            <h2 className="uppercase text-[177px] text-orange text-center leading-none">{data?.title}</h2>
            <div className="flex gap-60 mt-100">
                <div className="flex flex-col flex-[1_0_auto] justify-between mt-50 -mr-190 relative z-10">
                    <p className="-tracking-[0.03em] uppercase text-2xl leading-normal max-w-675">{data?.description}</p>
                    <div className="flex flex-col">
                        <img src="/architecture-kursiv.svg" alt="kursiv" className="max-w-354 -mb-35 -ml-55" />
                        <p className="-tracking-[0.03em] text-[16px] leading-normal max-w-490">{data?.description_2}</p>
                    </div>
                </div>
                <div>
                    <img src={data?.image} alt="image" className="pr-110" />
                </div>
            </div>
            <div className="relative z-10 mt-180">
                <img src="/arc-balls.png" alt="balls" className="absolute -top-50 -left-70" />
                <p className="-tracking-[0.03em] uppercase text-[20px] leading-normal max-w-420 ml-auto mr-110">{data?.description_3}</p>
            </div>
            <div className="bg-orange py-84 mt-194 -mr-70 flex justify-between">
                <div className="h-490 w-2/4 -mt-84 -ml-70">
                    <Carousel ref={carouselRef} dots={false} beforeChange={(_, id) => setIndex(id)}>
                        {data?.infos?.map((info, id) => (
                            <div key={id}>
                                <div>
                                    <img src={info?.image} alt={info?.title} className="w-full h-490 object-cover" />
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
                <div className="flex flex-col justify-between mr-70">
                    <span className="text-white text-[32px] max-w-420">{data?.infos?.[index]?.title}</span>
                    <CarouselButtons total={data?.infos?.length as number} next={nextSlide} prev={prevSlide} color="text-gray-900" />
                </div>
            </div>
        </div>
    );
};
