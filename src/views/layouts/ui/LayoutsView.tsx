import { useEffect, useState } from "react";
import { useCarousel, useResponsive } from "@/shared/lib";
import { OrientData } from "@/shared/model";
import { CarouselButtons, MobileCarouselButtons } from "@/shared/ui/arrowButton";
import { Carousel, Col, Row } from "antd";
import { TextAnimation, TitleAnimation } from "@/shared/ui";
import { motion } from "motion/react";

type LayoutsViewProps = Partial<OrientData["ru"]["layouts"]>;

interface Flats {
    flats: {
        id: number;
        floor: number;
        size: number;
        price: number;
        rooms: number;
        block_title: string;
        plans: [
            {
                id: number;
                image: string;
                tur_3d: string;
            },
            {
                id: number;
                image: string;
                tur_3d: string;
            }
        ];
    }[];
    // добавь сюда другие поля по необходимости
}

export const LayoutsView = (props: LayoutsViewProps) => {
    const { isMobile } = useResponsive();
    const { carouselRef, nextSlide, prevSlide } = useCarousel();
    const [flats, setFlats] = useState<Flats | undefined>(undefined);
    const [index, setIndex] = useState<number>(0);
    const [rooms, setRooms] = useState<number | null>(1);

    useEffect(() => {
        const fetchFlats = async () => {
            try {
                const response = await fetch("https://api.ab-capital.kz/api/guest/flats?project_alias=orient");
                if (!response.ok) {
                    throw new Error(`Ошибка: ${response.status}`);
                }
                const json = await response.json();
                console.log(json);
                setFlats(json);
            } catch (err: unknown) {
                console.error(err);
            }
        };

        fetchFlats();
    }, []);

    const layoutsDescription = props.description?.split("| ") || [];

    const getFlats = () => {
        return flats?.flats?.filter((flat) => flat.rooms === rooms);
    };

    const Rooms = () => (
        <div className="flex flex-col gap-16 max-lg:mt-50">
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
    );

    return (
        <div className="container pt-170 max-lg:pt-101" id="layout">
            <div className="flex justify-between items-end">
                <div className="flex flex-col gap-24">
                    <div className="relative w-fit">
                        <img src="/layouts-kursiv.svg" alt="kursiv" className="absolute bottom-40 -left-45 max-lg:h-48 max-lg:-left-10 max-lg:max-lg:bottom-26" />
                        <h2 className="h2 text-gray-900 flex flex-col leading-[1.1]">
                            <TitleAnimation title={[props?.title || ""]} />
                        </h2>
                    </div>
                    <h4 className="text-2xl uppercase font-light max-w-610 leading-tight max-lg:text-[16px]">
                        <TextAnimation>{props?.subtitle}</TextAnimation>
                    </h4>
                </div>
                {flats?.flats && flats?.flats?.length > 0 && !isMobile && <Rooms />}
            </div>
            <div className="relative aspect-[2.165/1] mt-50 -mx-70 max-lg:min-h-190 max-lg:aspect-[unset] max-lg:mt-24 max-lg:-mx-15">
                <img src={props?.image} className="w-full h-full brightness-50" />
                <div className="flex flex-col gap-24 absolute z-10 top-100 right-70 max-lg:hidden">
                    {layoutsDescription?.map((item, id) => (
                        <p
                            key={id}
                            className=" max-w-410 text-sm text-white -tracking-[0.03em] leading-normal max-lg:static max-lg:text-gray-900 max-lg:max-w-full max-lg:px-15 max-lg:mt-50 max-lg:text-sm"
                        >
                            {item}
                        </p>
                    ))}
                </div>
            </div>
            <div className="hidden flex-col gap-12 max-lg:flex">
                {layoutsDescription?.map((item, id) => (
                    <p
                        key={id}
                        className=" max-w-410 text-sm text-white -tracking-[0.03em] leading-normal max-lg:static max-lg:text-gray-900 max-lg:max-w-full max-lg:mt-50 max-lg:text-sm"
                    >
                        {item}
                    </p>
                ))}
            </div>
            {flats?.flats && flats?.flats?.length > 0 && isMobile && <Rooms />}
            {flats?.flats && flats?.flats?.length > 0 && (
                <div className="bg-orange -mr-70 py-50 -mt-194 relative z-10 max-lg:mt-50 max-lg:-mx-15 max-lg:py-0 max-lg:bg-yellow-100">
                    <Row className="max-lg:!flex-col">
                        <Col xl={12} lg={24} md={24} sm={24} xs={24}>
                            <div className="-mt-50 -mb-170 max-lg:ml-0 max-lg:mt-0 max-lg:mb-0">
                                <Carousel ref={carouselRef} dots={false} beforeChange={(_, id) => setIndex(id)}>
                                    {getFlats()?.map((info, id) => (
                                        <div key={id}>
                                            <div>
                                                <img src={info?.plans?.[0]?.image || "/3-room-88.png"} className="w-full h-500 object-contain bg-white max-lg:max-h-380" />
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
                                className="flex flex-col justify-between font-display h-full max-lg:bg-orange max-lg:gap-30 max-lg:p-24 max-lg:mx-15 max-lg:-mt-30"
                            >
                                <div className="flex flex-col gap-12">
                                    <span className="text-white text-[32px] uppercase font-semibold leading-none">{getFlats()?.[index]?.rooms}-комнатная</span>
                                    {/* <span className="text-yellow-100 text-[20px] uppercase opacity-70 leading-none font-light">{flats?.flats?.[index]?.subtitle}</span> */}
                                </div>
                                <div className="flex flex-col gap-12">
                                    <span className="text-yellow-100/50 text-sm font-leight leading-none">Площадь, м2</span>
                                    <span className="text-white text-[64px] uppercase leading-none font-light">{getFlats()?.[index]?.size}</span>
                                </div>
                                {/* <div className="flex items-center gap-12">
                                    <div className="p-10 bg-white text-red text-sm">Вид на горы</div>
                                    <div className="p-10 bg-white text-red text-sm">Скидка 10%</div>
                                </div> */}
                                <div className="absolute -bottom-150">
                                    <CarouselButtons
                                        total={getFlats()?.length as number}
                                        next={nextSlide}
                                        prev={prevSlide}
                                        color="text-red"
                                        buttonClassNames={"!border-gray-900 !text-gray-900 hover:!bg-orange hover:!border-orange hover:!text-white"}
                                        counterClassNames="!text-gray-900"
                                    />
                                </div>
                            </motion.div>
                        </Col>
                    </Row>
                </div>
            )}
        </div>
    );
};
