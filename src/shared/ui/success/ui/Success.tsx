import { Col, Row } from "antd";
import { Button } from "../../button/Button";
import { motion } from "motion/react";
import { useOrientContext } from "@/shared/model";

export const Success = () => {
    const { handleSuccess } = useOrientContext();
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-dvh fixed top-0 left-0 z-[9999] bg-yellow-100"
            id="callback-success"
        >
            <Row className="h-full">
                <Col xl={9} lg={24} md={24} sm={24} xs={24} className="max-lg:h-[55dvh]">
                    <div className="h-full bg-orange relative">
                        <img src="/logo.svg" className="top-70 left-70 absolute h-96 w-auto object-contain max-lg:top-33 max-lg:right-49 max-lg:h-57" />
                    </div>
                </Col>
                <Col xl={15} lg={24} md={24} sm={24} xs={24} className="max-lg:h-2/4">
                    <div className="relative flex flex-col h-full font-display">
                        <div className="h-full flex justify-center items-center bg-yellow-100 max-lg:p-50 max-lg:absolute max-lg:h-fit max-lg:-top-2/4">
                            <div className="flex flex-col gap-24 max-w-258">
                                <div className="flex flex-col gap-10">
                                    <h4 className="font-neumann text-5xl uppercase text-orange">Спасибо!</h4>
                                    <p className="text-[20px]">Ваша заявка успешно отправлена</p>
                                </div>
                                <p className="text-sm text-gray-900/70">Наши менеджеры свяжутся с вами в ближайшее время.</p>
                                <Button className="!text-gray-900" onClick={handleSuccess}>
                                    На главную
                                </Button>
                            </div>
                        </div>
                        <div className="h-383 w-[calc(100%_+_200px)] object-cover -ml-200 block">
                            <img src="/a554ac92035171a9ea2610dd00edf607449cd416.jpg" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </Col>
            </Row>
        </motion.div>
    );
};
