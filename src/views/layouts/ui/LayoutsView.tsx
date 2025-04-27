import { useCarousel } from "@/shared/lib";
import { OrientData } from "@/shared/model";
import { CarouselButtons } from "@/shared/ui/arrowButton";
import { Carousel } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

export const LayoutsView = () => {
    const { carouselRef, nextSlide, prevSlide } = useCarousel();
    const [index, setIndex] = useState<number>(0);
    const [rooms, setRooms] = useState<number | null>(null);
    const [data, setData] = useState<OrientData["ru"]["layouts"] | null>(null);

    useEffect(() => {
        axios
            .get("/orient.json")
            .then((response) => {
                setData(response.data.ru.layouts);
            })
            .catch((error) => {
                console.error("Ошибка при загрузке JSON:", error);
            });
    }, []);

    return (
        <div className="container pt-170" id="layout">
            <div className="flex justify-between items-end">
                <div className="flex flex-col gap-24">
                    <div className="relative w-fit">
                        <img src="/layouts-kursiv.svg" alt="kursiv" className="absolute bottom-40 -left-45" />
                        <h2 className="h2 text-gray-900">{data?.title}</h2>
                    </div>
                    <h4 className="text-2xl uppercase font-light max-w-610 leading-tight">{data?.subtitle}</h4>
                </div>
                <div className="flex flex-col gap-16">
                    <span className="text-[16px] -tracking-[0.02em]">Комнатность</span>
                    <div className="flex items-center gap-10">
                        {[...Array(4)].map((_, id) => (
                            <button
                                key={id}
                                onClick={() => setRooms(id + 1)}
                                className={[
                                    "cursor-pointer w-60 h-60 rounded-full border-1 border-gray-900  text-32 leading-none text-[32px] font-light transition-all duration-300",
                                    rooms === id + 1 ? "text-white bg-orange" : "text-gray-900",
                                ].join(" ")}
                            >
                                {id + 1 === 4 ? id + 1 + "+" : id + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="relative aspect-[2.165/1] mt-50 -mx-70">
                <img src={data?.image} className="w-full h-full brightness-50" />
                <p className="absolute max-w-410 text-sm text-white -tracking-[0.03em] z-10 top-100 right-70 leading-normal">{data?.description}</p>
            </div>
            <div className="bg-orange py-50 -mt-180 -mr-70 flex relative z-10">
                <div className="w-[calc(50%_-_80px)] -mt-50 -mb-167">
                    <Carousel ref={carouselRef} dots={false} beforeChange={(_, id) => setIndex(id)}>
                        {data?.flats?.map((info, id) => (
                            <div key={id}>
                                <div>
                                    <img src={info?.image} alt={info?.title} className="w-full h-470 object-contain bg-white" />
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
                <div className="flex flex-col justify-between ml-90 relative">
                    <div className="flex flex-col gap-12">
                        <span className="text-white text-[32px] uppercase font-semibold leading-none">{data?.flats?.[index]?.title}</span>
                        <span className="text-yellow-100 text-[20px] uppercase opacity-70 leading-none font-light">{data?.flats?.[index]?.subtitle}</span>
                    </div>
                    <div className="flex flex-col gap-12">
                        <span className="text-yellow-100 text-sm font-leight leading-none">Площадь, м2</span>
                        <span className="text-white text-[64px] uppercase leading-none font-light">{data?.flats?.[index]?.area}</span>
                    </div>
                    <div className="flex items-center gap-12">
                        <div className="p-10 bg-white text-red text-sm">Вид на горы</div>
                        <div className="p-10 bg-white text-red text-sm">Скидка 10%</div>
                    </div>
                    <div className="absolute -bottom-150">
                        <CarouselButtons
                            total={data?.flats?.length as number}
                            next={nextSlide}
                            prev={prevSlide}
                            color="text-red"
                            buttonClassNames={"!border-gray-900 !text-gray-900 hover:!bg-orange  hover:!border-orange hover:!text-white"}
                            counterClassNames="!text-gray-900"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
