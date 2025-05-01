import { MenuButton } from "@/entities/menu";
import { useResponsive } from "@/shared/lib";
import { OrientData, useOrientContext } from "@/shared/model";
import { Button, TextAnimation } from "@/shared/ui";
import { motion } from "motion/react";

type MainViewProps = Partial<OrientData["ru"]>;

export const MainView = (props: MainViewProps) => {
    const { isMobile } = useResponsive();
    const { handleFormModal } = useOrientContext();

    const title = props?.main?.title.split(", ");

    return (
        <div className="h-800 relative pt-30 px-70 overflow-hidden max-lg:flex max-lg:flex-col max-lg:h-dvh max-lg:px-15">
            <div className="absolute top-0 left-0 w-[65%] h-full max-lg:relative max-lg:h-[65dvh] max-lg:-mx-20 max-lg:w-[calc(100%_+_40px)] max-lg:-mt-30">
                <div className="w-full h-full bg-orange opacity-90 max-lg:h-[65dvh]" />
                <motion.img
                    initial={{ x: 0 }}
                    animate={{ x: isMobile ? 0 : -100 }}
                    transition={{ duration: 4 }}
                    src="/a554ac92035171a9ea2610dd00edf607449cd416.webp"
                    alt="bg"
                    className="-z-10 w-full h-full object-cover absolute top-0 left-0"
                />
            </div>
            <div className="absolute w-[49%] right-0 bottom-0 h-690 overflow-clip max-lg:relative max-lg:w-[calc(100%_+_40px)] max-lg:-mx-20">
                <div className="absolute top-24 left-24 uppercase text-white text-[16px] z-10 bg-[linear-gradient(90deg,_#A05428_0%,_#3A1E0F_100%)] h-40 rounded-full flex items-center gap-8 font-semibold pr-20 pl-4 leading-[1.1]">
                    <img src="/comfort-plus.svg" className="w-32 h-32 object-contain" />
                    комфорт +
                </div>
                <motion.img
                    src="/main.webp"
                    alt="bg"
                    className="h-790 w-full object-cover max-lg:h-full"
                    initial={{ y: 0 }}
                    animate={{ y: isMobile ? 0 : -100 }}
                    transition={{ duration: 6 }}
                />
            </div>
            <div className="flex flex-col relative z-10 gap-107 max-lg:absolute max-lg:top-30 max-lg:w-[calc(100%_-_30px)] max-lg:gap-50">
                <div className="flex items-start justify-between">
                    <img src="/logo.svg" alt="logo" className="h-96 w-auto object-cover max-lg:h-63" />
                    <div className="flex items-center gap-20">
                        <a href={`tel:${props?.phone}`} className="text-orange font-normal max-lg:hidden">
                            {props?.phone}
                        </a>
                        <MenuButton />
                    </div>
                </div>
                <div className="flex flex-col gap-60 max-lg:gap-24">
                    <div className="flex flex-col gap-33 max-lg:gap-24">
                        <h1 className="font-neumann text-[63px] uppercase text-white leading-[1.1] max-w-620 flex flex-col max-lg:text-[32px]">
                            {title?.map((row, id) => (
                                <span key={id} className="overflow-hidden h-[70px] max-lg:h-[38px]">
                                    <motion.span
                                        initial={{ rotate: 5, y: 33, opacity: 0 }}
                                        whileInView={{ rotate: 0, y: 0, opacity: 1 }}
                                        transition={{ delay: 0.3 * id, duration: 1.5, ease: [0, 0.71, 0.2, 1.01] }}
                                        viewport={{ once: true }}
                                        className="block"
                                    >
                                        {row}
                                    </motion.span>
                                </span>
                            ))}
                        </h1>
                        <TextAnimation>
                            <p className="text-[20px] uppercase text-white leading-[1.5] max-w-420 font-light max-lg:text-sm">{props?.main?.subtitle}</p>
                        </TextAnimation>
                    </div>
                    <TextAnimation>
                        <Button onClick={handleFormModal}>{props?.leave_request}</Button>
                    </TextAnimation>
                </div>
            </div>
        </div>
    );
};
