import { MenuButton } from "@/entities/menu";
import { useResponsive } from "@/shared/lib";
import { OrientData, useOrientContext } from "@/shared/model";
import { Button, TextAnimation } from "@/shared/ui";
import { motion } from "motion/react";

import useDownloader from "react-use-downloader";

type MainViewProps = Partial<OrientData["ru"]>;

export const MainView = (props: MainViewProps) => {
    const { download } = useDownloader();
    const { isMobile } = useResponsive();
    const { handleFormModal } = useOrientContext();

    const title = props?.main?.title.split(", ");

    const fileUrl = "/pr.pdf";
    const filename = "Orient.pdf";

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
                            Узнать подробнее
                        </a>
                        <button
                            className="relative z-10 px-20 h-50 rounded-full border-1 bg-yellow-100 border-orange text-orange flex items-center gap-10 uppercase text-sm font-medium cursor-pointer max-lg:border-white max-lg:text-white max-lg:hidden"
                            style={{ zIndex: 9999 }}
                            onClick={() => download(fileUrl, filename)}
                        >
                            <span className="text-orange">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10.4613 13.7551C10.3429 13.8846 10.1755 13.9583 10 13.9583C9.82453 13.9583 9.65714 13.8846 9.53873 13.7551L6.2054 10.1092C5.97248 9.85448 5.99019 9.45915 6.24494 9.22623C6.49969 8.99332 6.89502 9.01102 7.12794 9.26577L9.375 11.7235V2.5C9.375 2.15482 9.65482 1.875 10 1.875C10.3452 1.875 10.625 2.15482 10.625 2.5V11.7235L12.8721 9.26577C13.105 9.01102 13.5003 8.99332 13.7551 9.22623C14.0098 9.45915 14.0275 9.85448 13.7946 10.1092L10.4613 13.7551Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M3.125 12.5C3.125 12.1548 2.84518 11.875 2.5 11.875C2.15482 11.875 1.875 12.1548 1.875 12.5V12.5457C1.87498 13.6854 1.87497 14.604 1.9721 15.3265C2.07295 16.0765 2.2887 16.7081 2.79029 17.2097C3.29189 17.7113 3.92345 17.927 4.67354 18.0279C5.39602 18.125 6.31462 18.125 7.45428 18.125H12.5457C13.6854 18.125 14.604 18.125 15.3265 18.0279C16.0766 17.927 16.7081 17.7113 17.2097 17.2097C17.7113 16.7081 17.9271 16.0765 18.0279 15.3265C18.125 14.604 18.125 13.6854 18.125 12.5457V12.5C18.125 12.1548 17.8452 11.875 17.5 11.875C17.1548 11.875 16.875 12.1548 16.875 12.5C16.875 13.6962 16.8737 14.5304 16.789 15.1599C16.7068 15.7714 16.5565 16.0952 16.3258 16.3258C16.0952 16.5565 15.7714 16.7068 15.1599 16.789C14.5304 16.8737 13.6962 16.875 12.5 16.875H7.5C6.30382 16.875 5.46956 16.8737 4.8401 16.789C4.22862 16.7068 3.90481 16.5565 3.67418 16.3258C3.44354 16.0952 3.29317 15.7714 3.21096 15.1599C3.12633 14.5304 3.125 13.6962 3.125 12.5Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </span>
                            сКАЧАТЬ БУКЛЕТ
                        </button>
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
                            <p className="text-[20px] uppercase text-white leading-[1.5] max-w-420 font-light max-lg:text-sm">
                                {props?.main?.subtitle}
                            </p>
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
