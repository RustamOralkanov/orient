import { Col, Row } from "antd";
import { OrientData, useOrientContext } from "@/shared/model";
import { Button, TitleAnimation } from "@/shared/ui";

type CompanyViewProps = Partial<OrientData["ru"]["company"]>;

export const CompanyView = (props: CompanyViewProps) => {
    const { handleFormModal } = useOrientContext();

    return (
        <div className="bg-gray-900 mt-128 relative max-lg:mt-0" id="company">
            <img
                src="/freepik__elegant-alleys-with-decorative-plants-lots-of-gree__21438.webp"
                className="absolute h-full w-544 right-0 top-0 brightness-30 opacity-50 max-lg:hidden"
            />
            <div className="container pt-90 relative z-10 max-lg:pt-80">
                <div className="relative w-fit mx-auto">
                    <h2 className="text-white uppercase text-[218px] text-center flex flex-col leading-[1.1] max-lg:text-[58px]">
                        <TitleAnimation title={["AB CAPITAL"]} height={210} />
                    </h2>
                    <img
                        src="/company-kursiv.svg"
                        className="absolute top-2/4 -translate-y-2/4 right-0 max-lg:h-48  max-lg:-top-24  max-lg:-translate-y-[unset]  max-lg:right-120"
                    />
                </div>
            </div>
            <Row className="-mt-85 relative z-[1] max-lg:-mt-30 max-lg:px-15">
                <Col xl={{ span: 6, order: 1 }} lg={{ span: 24, order: 2 }} md={{ span: 24, order: 2 }} sm={{ span: 24, order: 2 }} xs={{ span: 24, order: 2 }}>
                    <div className="h-full flex flex-col justify-end">
                        <div className="flex flex-col gap-40 py-50 pr-35 pl-70 bg-orange -mr-55 relative z-20 max-lg:-mr-15 max-lg:p-40">
                            <img src={props?.logo} alt="logo" className="max-w-110" />
                            <p className="text-[14px] text-white font-display font-light">{props?.description}</p>
                            <Button onClick={handleFormModal}>{props?.button}</Button>
                        </div>
                    </div>
                </Col>
                <Col xl={{ span: 12, order: 2 }} lg={{ span: 24, order: 1 }} md={{ span: 24, order: 1 }} sm={{ span: 24, order: 1 }} xs={{ span: 24, order: 1 }}>
                    <div className="relative z-10 -mb-105">
                        <img src={props?.image} className="w-full h-full object-cover" />
                    </div>
                </Col>
            </Row>
            <p className="text-[14px] text-white font-display font-light max-w-250 absolute bottom-40 right-70 max-lg:static max-lg:mt-50 max-lg:pb-50 max-lg:px-15 max-lg:max-w-full">
                {props?.description_1}
            </p>
        </div>
    );
};
