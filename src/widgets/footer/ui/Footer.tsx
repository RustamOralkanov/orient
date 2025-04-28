import { scrollToContent } from "@/shared/lib";
import { OrientData } from "@/shared/model";
import { Button } from "@/shared/ui";
import { Col, Row } from "antd";

type FooterProps = Partial<OrientData["ru"]["footer"]>;

export const Footer = (props: FooterProps) => {
    return (
        <footer className="mt-140 bg-red py-70">
            <div className="container flex flex-col gap-40">
                <Row gutter={[20, 20]}>
                    <Col xl={6}>
                        <div className="flex flex-col gap-12 font-display">
                            <span className="text-sm text-yellow-100/50 -tracking-[0.02em] leading-normal uppercase">Отдел продаж</span>
                            <span className="text-sm uppercase text-yellow-100 -tracking-[0.02em] leading-normal">{props?.op}</span>
                            <div className="flex flex-col">
                                {props?.word_days?.split(",").map((day, id) => (
                                    <span className="text-sm uppercase text-yellow-100 -tracking-[0.02em] leading-normal" key={id}>
                                        {day}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Col>
                    <Col xl={6}>
                        <div className="flex flex-col gap-12 font-display">
                            <span className="text-sm text-yellow-100/50 -tracking-[0.02em] leading-normal uppercase">Социальные сети</span>
                            <div className="flex flex-col gap-4">
                                {props?.socials?.map((social, id) => (
                                    <a href={social?.link} className="text-sm uppercase !text-yellow-100 -tracking-[0.02em] leading-normal w-fit" key={id}>
                                        {social?.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </Col>
                    <Col xl={12}>
                        <div className="flex flex-col items-end gap-36 font-display">
                            <a href={`tel:${props?.phone}`} className="text-[64px] !text-white -tracking-[0.02em] font-light">
                                {props?.phone}
                            </a>
                            <div className="flex gap-40 items-end justify-end">
                                <img src={props?.company_logo} alt="logo" className="h-33" />
                                <Button onClick={() => window.open("https://ab-capital.kz/", "blank")}>САЙТ ЗАСТРОЙЩИКА</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div></div>
                <div className="flex flex-col gap-12">
                    <span className="text-sm text-yellow-100/50 -tracking-[0.02em] leading-normal">Меню</span>
                    <div className="flex justify-between">
                        {props?.pages?.map((page) => (
                            <span key={page?.alias} className="uppercase text-yellow-100 text-sm cursor-pointer" onClick={() => scrollToContent(page?.alias)}>
                                {page?.title}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="w-full h-1 bg-yellow-100 opacity-50" />
                <img src={props?.logo} />
                <div className="w-full h-1 bg-yellow-100 opacity-50" />
            </div>
        </footer>
    );
};
