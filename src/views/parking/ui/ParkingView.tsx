import { useCarousel } from "@/shared/lib";
import { OrientData } from "@/shared/model";
import { CarouselButtons } from "@/shared/ui/arrowButton";
import { Carousel } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

export const ParkingView = () => {
    const { carouselRef, nextSlide, prevSlide } = useCarousel();
    const [index, setIndex] = useState<number>(0);
    const [data, setData] = useState<OrientData["ru"]["parking"] | null>(null);

    useEffect(() => {
        axios
            .get("/orient.json")
            .then((response) => {
                setData(response.data.ru.parking);
            })
            .catch((error) => {
                console.error("Ошибка при загрузке JSON:", error);
            });
    }, []);

    const subtitle = data?.subtitle.split(" ").slice(0, -3).join(" ");
    const subtitleNext = data?.subtitle.split(" ").slice(-3).join(" ");

    return (
        <div className="container pt-170">
            <div className="flex justify-between" id="parking">
                <div className="flex flex-col justify-between pt-100">
                    <div className="relative w-fit">
                        <img src="/parking-kursiv.svg" alt="kursiv" className="absolute bottom-42 right-164" />
                        <h2 className="h2 text-gray-900">{data?.title}</h2>
                    </div>
                    <div className="flex flex-col gap-30">
                        <h4 className="text-[32px] uppercase font-light max-w-480 leading-tight">
                            {subtitle} <span className="font-semibold text-orange">{subtitleNext}</span>
                        </h4>
                        <p className="max-w-510 text-[16px] -tracking-[0.03em] text-[#474747]">{data?.description}</p>
                    </div>
                </div>
                <div className="flex gap-20 items-start -ml-50 -mr-70">
                    <div className="aspect-square">
                        <img src={data?.image} className="w-full h-full" />
                    </div>
                    <div className="w-[41vw] h-[44vw]">
                        <img src={data?.image_2} className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
            <div className="bg-yellow py-50 mt-205 -mx-70 flex gap-130">
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
                <div className="flex flex-col justify-between ml-70">
                    <div className="flex flex-col">
                        <span className="text-gray-900 text-sm uppercase opacity-50">Паркинг</span>
                        <span className="text-gray-900 text-[44px] uppercase font-semibold">{data?.infos?.[index]?.title}</span>
                        <span className="text-gray-900 text-sm max-w-290">{data?.infos?.[index]?.subtitle}</span>
                    </div>
                    <CarouselButtons
                        total={data?.infos?.length as number}
                        next={nextSlide}
                        prev={prevSlide}
                        color="text-gray-900"
                        buttonClassNames={"!border-gray-900 !text-gray-900 hover:!bg-orange  hover:!border-orange hover:!text-white"}
                    />
                </div>
            </div>
        </div>
    );
};
