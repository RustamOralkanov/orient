import { OrientData, useOrientContext } from "@/shared/model";
import { Button } from "@/shared/ui";
import { Row, Col } from "antd";

type ServiceViewProps = Partial<OrientData["ru"]["service"]>;

export const ServiceView = (props: ServiceViewProps) => {
    const { handleFormModal } = useOrientContext();
    return (
        <div className="mt-205 container">
            <div className="border-t-1 border-t-gray-900/40 pt-70">
                <Row gutter={[20, 20]}>
                    <Col xl={14}>
                        <div className="flex flex-col gap-20">
                            <div className="flex justify-between">
                                <h2 className="uppercase text-[64px] font-display">
                                    <span className="font-bold">AB </span>
                                    Service
                                </h2>
                                <div className="aspect-square max-w-200">
                                    <img src={props?.image} className="w-full h-full" />
                                </div>
                            </div>
                            <img src={props?.image_1} className="w-full h-auto" />
                        </div>
                    </Col>
                    <Col xl={10}>
                        <div className="flex flex-col justify-between h-full">
                            <div className="flex flex-col gap-60 bg-orange p-60 -mr-70">
                                <div className="flex flex-col gap-24 ">
                                    <p className="text-white text-sm -tracking-[0.02em] font-light leading-normal font-display">{props?.description_1}</p>
                                    <p className="text-white text-sm -tracking-[0.02em] font-light leading-normal font-display">{props?.description_2}</p>
                                </div>
                                <Button onClick={handleFormModal}>{props?.button}</Button>
                            </div>
                            <p className="text-gray-900 max-w-340 uppercase text-sm -tracking-[0.02em] leading-normal font-display ml-auto">{props?.info}</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};
