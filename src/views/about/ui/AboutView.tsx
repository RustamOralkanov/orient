import { OrientData } from "@/shared/model";
import { DayOrNight } from "@/shared/ui";
import axios from "axios";
import { useEffect, useState } from "react";

export const AboutView = () => {
    const [isDay, setIsDay] = useState(true);
    const [data, setData] = useState<OrientData["ru"] | null>(null);

    useEffect(() => {
        axios
            .get("/orient.json")
            .then((response) => {
                setData(response.data.ru);
            })
            .catch((error) => {
                console.error("Ошибка при загрузке JSON:", error);
            });
    }, []);

    const subtitle = data?.about.subtitle.split(" ").slice(0, 2).join(" ");
    const subtitleNext = data?.about.subtitle.split(" ").slice(2).join(" ");

    const handleDay = (value: boolean) => {
        setIsDay(value);
    };

    return (
        <div className="container pt-150 pb-130 relative" id="about">
            <div className="flex flex-col gap-54 pl-220 relative z-[2]">
                <h2 className="h2">{data?.about.title}</h2>
                <p className="text-[32px] uppercase leading-tight max-w-570">
                    <span className="text-orange">{subtitle}</span> {subtitleNext}
                </p>
                <div className="relative aspect-[108/59]">
                    <DayOrNight onChange={handleDay} />
                    <img src="/day.jpg" alt="day" className="absolute bottom-0 w-full object-cover z-[1] transition-all duration-600" style={{ height: isDay ? "100%" : 0 }} />
                    <img src="/night.jpg " alt="night" className="absolute bottom-0 w-full h-full object-cover" />
                </div>
            </div>
            <div className="flex items-end justify-between gap-130 -ml-70 -mt-195 relative z-[3]">
                <img src="/about.jpg" alt="about" className="aspect-square object-cover mb-50" />
                <p className="text-[16px] text-gray-900 tracking-tight font-light">{data?.about?.description}</p>
            </div>
            <div className="flex mt-120 relative z-[3]">
                {data?.about?.info.map((item, id) => (
                    <div className={`flex flex-col gap-10 w-full ${id % 2 === 0 ? "mb-40" : "mt-40"}`} key={id}>
                        <h4 className="text-[80px] leading-none text-orange font-neumann text-center whitespace-nowrap">{item.value}</h4>
                        <p className="text-[20px] text-center leading-none">{item.label}</p>
                    </div>
                ))}
            </div>
            <img src="/about-bg.svg" alt="bg" className="absolute -bottom-100 -left-70 -z-[1] w-auto h-auto object-contain" />
        </div>
    );
};
