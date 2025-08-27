import { scrollToContent, useResponsive } from "@/shared/lib";
import { OrientData } from "@/shared/model";
import { Button } from "@/shared/ui";
import { Col, Row } from "antd";

type FooterProps = Partial<OrientData["ru"]["footer"]>;

export const Footer = (props: FooterProps) => {
    const { isMobile } = useResponsive();

    return (
        <footer className="mt-140 bg-red py-70 max-lg:py-40 max-lg:mt-80 max-lg:overflow-hidden">
            <div className="container flex flex-col gap-40">
                <Row gutter={isMobile ? [40, 40] : [20, 20]}>
                    <Col
                        xl={{ span: 6, order: 1 }}
                        lg={{ span: 24, order: 2 }}
                        md={{ span: 24, order: 2 }}
                        sm={{ span: 24, order: 2 }}
                        xs={{ span: 24, order: 2 }}
                    >
                        <div className="flex flex-col gap-12 font-display">
                            <span className="text-sm text-yellow-100/50 -tracking-[0.02em] leading-normal uppercase">
                                Отдел продаж
                            </span>
                            <span className="text-sm uppercase text-yellow-100 -tracking-[0.02em] leading-normal">
                                {props?.op}
                            </span>
                            <div className="flex flex-col">
                                {props?.word_days?.split(",").map((day, id) => (
                                    <span
                                        className="text-sm uppercase text-yellow-100 -tracking-[0.02em] leading-normal"
                                        key={id}
                                    >
                                        {day}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Col>
                    <Col
                        xl={{ span: 6, order: 2 }}
                        lg={{ span: 12, order: 4 }}
                        md={{ span: 12, order: 4 }}
                        sm={{ span: 12, order: 4 }}
                        xs={{ span: 12, order: 4 }}
                    >
                        <div className="flex flex-col gap-12 font-display">
                            <span className="text-sm text-yellow-100/50 -tracking-[0.02em] leading-normal uppercase">
                                Социальные сети
                            </span>
                            <div className="flex flex-col gap-4">
                                {props?.socials?.map((social, id) => (
                                    <a
                                        href={social?.link}
                                        className="text-sm uppercase !text-yellow-100 -tracking-[0.02em] leading-normal w-fit"
                                        key={id}
                                    >
                                        {social?.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </Col>
                    <Col
                        xl={{ span: 12, order: 3 }}
                        lg={{ span: 24, order: 1 }}
                        md={{ span: 24, order: 1 }}
                        sm={{ span: 24, order: 1 }}
                        xs={{ span: 24, order: 1 }}
                    >
                        <div className="flex flex-col items-end gap-36 font-display max-lg:gap-12">
                            <a
                                href={`tel:${props?.phone}`}
                                className="text-[64px] !text-white -tracking-[0.02em] font-light max-lg:text-[40px] max-lg:leading-[1.1]"
                            >
                                Узнать подробнее
                            </a>
                            <div className="flex gap-40 items-end justify-end">
                                <img src={props?.company_logo} alt="logo" className="h-33" />
                                <Button onClick={() => window.open("https://ab-capital.kz/", "blank")}>
                                    САЙТ ЗАСТРОЙЩИКА
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col
                        xl={{ span: 0, order: 0 }}
                        lg={{ span: 12, order: 3 }}
                        md={{ span: 12, order: 3 }}
                        sm={{ span: 12, order: 3 }}
                        xs={{ span: 12, order: 3 }}
                    >
                        <div className="flex flex-col gap-12 font-display">
                            <span className="text-sm text-yellow-100/50 -tracking-[0.02em] leading-normal">Меню</span>
                            <div className="flex flex-col">
                                {props?.pages?.map((page) => (
                                    <span
                                        key={page?.alias}
                                        className="uppercase text-yellow-100 text-sm cursor-pointer"
                                        onClick={() => scrollToContent(page?.alias)}
                                    >
                                        {page?.title}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="flex flex-col gap-24">
                    <p className="text-xs text-yellow-100/50 -tracking-[0.02em] leading-normal">
                        Бұл жарнама әлеуетті тұтынушылардың сұранысын зерттеу мақсатында орналастырылған. Осы жарнама ҚР
                        АК 395-бабына сәйкес жария оферта болып табылмайды.
                        <br />
                        Тұрғын үй құрылысына үлестік қатысу туралы шарттар жергілікті атқарушы орган үлескерлердің
                        ақшасын тартуға рұқсат бергеннен кейін ғана жасалатын болады.
                    </p>
                    <p className="text-xs text-yellow-100/50 -tracking-[0.02em] leading-normal">
                        Данная реклама размещена с целью изучения спроса потенциальных потребителей. Настоящая реклама,
                        в соответствии со ст. 395 ГК РК, не является публичной офертой. <br /> Договоры о долевом
                        участии в жилищном строительстве будут заключаться только после выдачи разрешения на привлечение
                        денег дольщиков местным исполнительным органом.
                    </p>
                </div>
                <div className="flex flex-col gap-12 max-xl:hidden">
                    <span className="text-sm text-yellow-100/50 -tracking-[0.02em] leading-normal">Меню</span>
                    <div className="flex justify-between">
                        {props?.pages?.map((page) => (
                            <span
                                key={page?.alias}
                                className="uppercase text-yellow-100 text-sm cursor-pointer"
                                onClick={() => scrollToContent(page?.alias)}
                            >
                                {page?.title}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="w-full h-1 bg-yellow-100 opacity-50" />
                <img src={props?.logo} />
                <div className="w-full h-1 bg-yellow-100 opacity-50" />
                <div className="grid grid-cols-2 gap-50 max-lg:gap-24">
                    <p className="text-xs text-yellow-100/50 -tracking-[0.02em] leading-[1.2] col-span-1 max-lg:col-span-2">
                        Жобаның архитектурасы, абаттандырудың, қасбеттердің, интерьердің, қолданылатын материалдардың
                        бейнелері, олардың нөмірленуі, кешеннің инфрақұрылымы шартты болып табылады және жобалау, салу
                        және пайдалану барысында өзгертілуі мүмкін.
                    </p>
                    <p className="text-xs text-yellow-100/50 -tracking-[0.02em] leading-[1.2] col-span-1 max-lg:col-span-2">
                        Архитектура проекта, изображения благоустройства, фасадов, интерьера, применяемых материалов, их
                        нумерация, инфраструктура комплекса являются условными и могут быть изменены в ходе
                        проектирования, строительства и эксплуатации.
                    </p>
                </div>
            </div>
        </footer>
    );
};
