import { CtaForm } from "@/entities/form";
import { OrientData } from "@/shared/model";
import { Modal, ModalProps } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

export const FormModal = (props: ModalProps) => {
    const [data, setData] = useState<OrientData["ru"]["form"] | null>(null);

    useEffect(() => {
        axios
            .get("/orient.json")
            .then((response) => {
                setData(response.data.ru.form);
            })
            .catch((error) => {
                console.error("Ошибка при загрузке JSON:", error);
            });
    }, []);

    return (
        <Modal {...props} destroyOnClose centered footer={null} classNames={{ content: "!rounded-[0] !p-0" }} width={480} zIndex={99}>
            <div className="flex flex-col">
                <img src="/птичка.webp" className="w-full h-240 object-cover" />
                <div className="flex flex-col gap-40 bg-orange p-36">
                    <div className="flex flex-col gap-12">
                        <h4 className="uppercase text-[32px] -tracking-[0.01em] text-white font-light leading-tight font-display">{data?.title}</h4>
                        <p className="text-white uppercase text-sm leading-snug max-w-320 font-display">{data?.subtitle}</p>
                    </div>
                    <CtaForm modal />
                </div>
            </div>
        </Modal>
    );
};
