import { OrientData } from "@/shared/model";
import { Button } from "@/shared/ui";
import axios from "axios";
import { useEffect, useState } from "react";

export const MainView = () => {
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

    return (
        <div className="h-800 relative pt-30 px-70">
            <img src="/main-bg.png" alt="bg" className="absolute h-full w-[65%] object-cover left-0 top-0" />
            <img src="/main.png" alt="bg" className="object-cover absolute w-[49%] right-0 bottom-0 h-690" />
            <div className="flex flex-col relative z-10 gap-107">
                <div className="flex items-start justify-between">
                    <img src="/logo.svg" alt="logo" />
                    <div className="flex items-center gap-20">
                        <a href={`tel:${data?.phone}`} className="text-orange font-normal">
                            {data?.phone}
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-60">
                    <div className="flex flex-col gap-33">
                        <h1 className="font-neumann text-[63px] uppercase text-white leading-[1.1] max-w-620">{data?.main?.title}</h1>
                        <p className="text-[20px] uppercase text-white leading-[1.5] max-w-420 font-light">{data?.main?.subtitle}</p>
                    </div>
                    <Button>{data?.leave_request}</Button>
                </div>
            </div>
        </div>
    );
};
