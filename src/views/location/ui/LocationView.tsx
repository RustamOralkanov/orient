import { useEffect, useState } from "react";
import axios from "axios";
import { OrientData } from "@/shared/model";
import { Button } from "@/shared/ui";
import { CarouselButtons } from "@/shared/ui/arrowButton";
import { Carousel } from "antd";
import { useCarousel } from "@/shared/lib";

export const LocationView = () => {
    const { carouselRef, nextSlide, prevSlide } = useCarousel();
    const [index, setIndex] = useState<number>(0);
    const [data, setData] = useState<OrientData["ru"]["location"] | null>(null);

    useEffect(() => {
        axios
            .get("/orient.json")
            .then((response) => {
                setData(response.data.ru.location);
            })
            .catch((error) => {
                console.error("Ошибка при загрузке JSON:", error);
            });
    }, []);

    return (
        <>
            <div className="container bg-orange pt-120" id="location">
                <div className="relative flex justify-center">
                    <h2 className="h2 text-white text">{data?.title}</h2>
                    <img src="/location.svg" alt="location" className="absolute top-2/4 -translate-y-2/4" />
                </div>
                <div className="mt-133 -ml-70 -mr-70 w-[100%_-_140px] relative">
                    <img src="/map.svg" className="w-full" />
                    <div className="absolute left-0 bottom-0 bg-gray-900 pl-70 py-45 pr-50">
                        <div className="flex flex-col gap-40 max-w-420">
                            <h4 className="text-2xl text-white uppercase -tracking-[0.05em]">{data?.subtitle}</h4>
                            <p className="text-white">{data?.description}</p>
                            <Button onClick={() => window.open(data?.link, "blank")}>{data?.button}</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-red py-60 flex items-start justify-between container">
                <div className="flex flex-col justify-between max-w-420 gap-117">
                    <div className="flex flex-col gap-30">
                        <h5 className="text-[44px] text-white leading-tight">{data?.places?.[index]?.title}</h5>
                        <div className="flex gap-56 items-center">
                            <div className="flex gap-8 items-center">
                                <span className="text-[32px] text-yellow-dark leading-none">{data?.places?.[index]?.onCar}</span>
                                <div className="flex flex-col">
                                    <span className="leading-tight text-white text-xs">минут</span>
                                    <span className="leading-tight text-white text-xs">пешком</span>
                                </div>
                            </div>
                            <div className="flex gap-8 items-center">
                                <span className="text-[32px] text-yellow-dark leading-none">{data?.places?.[index]?.onWalking}</span>
                                <div className="flex flex-col">
                                    <span className="leading-tight text-white text-xs">минут</span>
                                    <span className="leading-tight text-white text-xs">на машине</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CarouselButtons total={data?.places?.length as number} next={nextSlide} prev={prevSlide} />
                </div>
                <div className="aspect-[1.61/1] max-w-910 w-full -mr-70 -mb-120">
                    <Carousel ref={carouselRef} dots={false} afterChange={(id) => setIndex(id)}>
                        {data?.places?.map((place, id) => (
                            <div key={id}>
                                <img src={place?.image} alt={place?.title} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </>
    );
};
