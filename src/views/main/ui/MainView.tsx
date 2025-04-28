import { MenuButton } from "@/entities/menu";
import { OrientData, useOrientContext } from "@/shared/model";
import { Button } from "@/shared/ui";
import axios from "axios";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export const MainView = () => {
    const { handleFormModal } = useOrientContext();
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
            <div className="absolute  top-0 left-0 w-[65%] h-full">
                <div className=" w-full h-full bg-orange top-0 left-0 opacity-75" />
                <motion.img
                    initial={{ x: 200 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 4 }}
                    src="/a554ac92035171a9ea2610dd00edf607449cd416.jpg"
                    alt="bg"
                    className="-z-10 w-auto h-full absolute top-0 left-0"
                />
            </div>

            <img src="/main.png" alt="bg" className="object-cover absolute w-[49%] right-0 bottom-0 h-690" />
            <div className="flex flex-col relative z-10 gap-107">
                <div className="flex items-start justify-between">
                    <img src="/logo.svg" alt="logo" />
                    <div className="flex items-center gap-20">
                        <a href={`tel:${data?.phone}`} className="text-orange font-normal">
                            {data?.phone}
                        </a>
                        <MenuButton />
                    </div>
                </div>
                <div className="flex flex-col gap-60">
                    <div className="flex flex-col gap-33">
                        <h1 className="font-neumann text-[63px] uppercase text-white leading-[1.1] max-w-620">{data?.main?.title}</h1>
                        <p className="text-[20px] uppercase text-white leading-[1.5] max-w-420 font-light">{data?.main?.subtitle}</p>
                    </div>
                    <Button onClick={handleFormModal}>{data?.leave_request}</Button>
                </div>
            </div>
        </div>
    );
};
