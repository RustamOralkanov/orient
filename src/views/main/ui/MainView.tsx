import { MenuButton } from "@/entities/menu";
import { OrientData, useOrientContext } from "@/shared/model";
import { Button, TextAnimation } from "@/shared/ui";
import { motion } from "motion/react";

type MainViewProps = Partial<OrientData["ru"]>;

export const MainView = (props: MainViewProps) => {
    const { handleFormModal } = useOrientContext();

    const title = props?.main?.title.split(", ");

    return (
        <div className="h-800 relative pt-30 px-70 overflow-hidden">
            <div className="absolute top-0 left-0 w-[65%] h-full">
                <div className="w-full h-full bg-orange top-0 left-0 opacity-90" />
                <motion.img
                    initial={{ x: 0 }}
                    animate={{ x: -100 }}
                    transition={{ duration: 4 }}
                    src="/a554ac92035171a9ea2610dd00edf607449cd416.jpg"
                    alt="bg"
                    className="-z-10 w-full h-full absolute top-0 left-0"
                />
            </div>
            <div className="absolute w-[49%] right-0 bottom-0 h-690 overflow-clip">
                <motion.img src="/main.png" alt="bg" className="h-790 w-full object-cover" initial={{ y: 0 }} animate={{ y: -100 }} transition={{ duration: 6 }} />
            </div>
            <div className="flex flex-col relative z-10 gap-107">
                <div className="flex items-start justify-between">
                    <img src="/logo.svg" alt="logo" className="h-96 w-auto object-cover" />
                    <div className="flex items-center gap-20">
                        <a href={`tel:${props?.phone}`} className="text-orange font-normal">
                            {props?.phone}
                        </a>
                        <MenuButton />
                    </div>
                </div>
                <div className="flex flex-col gap-60">
                    <div className="flex flex-col gap-33">
                        <h1 className="font-neumann text-[63px] uppercase text-white leading-[1.1] max-w-620 flex flex-col">
                            {title?.map((row, id) => (
                                <span key={id} className="overflow-hidden h-[70px]">
                                    <motion.span
                                        initial={{ rotate: 5, y: 75, opacity: 0 }}
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
                            <p className="text-[20px] uppercase text-white leading-[1.5] max-w-420 font-light">{props?.main?.subtitle}</p>
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
