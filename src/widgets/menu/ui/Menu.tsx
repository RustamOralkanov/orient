import { scrollToContent } from "@/shared/lib";
import { useOrientContext } from "@/shared/model";
import { Col, Drawer, DrawerProps, Row } from "antd";
import useDownloader from "react-use-downloader";

const pages = [
    {
        title: "О проекте",
        alias: "about",
    },
    {
        title: "Расположение",
        alias: "location",
    },
    {
        title: "Благоустройство",
        alias: "improvement",
    },
    {
        title: "Архитектура",
        alias: "architecture",
    },
    {
        title: "Холлы",
        alias: "hall",
    },
    {
        title: "Паркинг",
        alias: "parking",
    },
    {
        title: "Планировки",
        alias: "layout",
    },
    {
        title: "О застройщике",
        alias: "company",
    },
];

export const Menu = (props: DrawerProps) => {
    const { handleMenu } = useOrientContext();

    const { download } = useDownloader();

    const fileUrl = "/pr.pdf";
    const filename = "Orient.pdf";
    return (
        <Drawer
            {...props}
            closeIcon={false}
            width={"100%"}
            classNames={{ content: "p-70 !bg-orange !relative max-lg:px-15 max-lg:pt-120", body: "!p-0" }}
        >
            <div className="h-full">
                <img
                    src="/logo.svg"
                    className="absolute left-2/4 -translate-x-2/4 z-50 max-lg:h-50 max-lg:left-15 max-lg:top-40 max-lg:-translate-x-0"
                />
                <button
                    className="absolute z top-30 right-70 px-20 h-50 rounded-full border-1 border-white text-white flex items-center gap-10 uppercase text-sm font-medium cursor-pointer max-lg:right-15"
                    style={{ zIndex: 9999 }}
                    onClick={handleMenu}
                >
                    <svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.215942 3.5L0.590942 2.85048C10.3517 8.32544 15.815 9.87526 23.0006 12.0359L21.0006 15.5L0.215942 3.5Z"
                            fill="#FDFBF6"
                        />
                        <path
                            d="M0.215942 12.5L0.590942 13.1495C10.3517 7.67456 15.815 6.12474 23.0006 3.9641L21.0006 0.5L0.215942 12.5Z"
                            fill="#FDFBF6"
                        />
                    </svg>
                    Меню
                </button>
                <Row className="!h-full">
                    <Col xl={12} lg={24} md={24} sm={24} xs={24} className="!h-full">
                        <div className="flex flex-col justify-between font-display h-full w-fit">
                            <div className="flex flex-col font-display">
                                {pages?.map((page) => (
                                    <span
                                        key={page?.alias}
                                        className="uppercase text-yellow-100 text-[32px] cursor-pointer h-58 flex items-center max-lg:text-2xl max-lg:h-38"
                                        onClick={() => {
                                            scrollToContent(page?.alias);
                                            handleMenu();
                                        }}
                                    >
                                        {page?.title}
                                    </span>
                                ))}
                            </div>
                            <div className="flex flex-col gap-24">
                                <button className="flex gap-20 items-center text-left leading-tight text-white uppercase cursor-pointer text-[16px]">
                                    <span className="w-60 h-60 border border-gray-900 rounded-full flex items-center justify-center text-white">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M7.87599 2.70831H7.95751C9.29273 2.7083 10.3505 2.70829 11.1874 2.80721C12.0465 2.90877 12.7538 3.12197 13.3446 3.60681C13.545 3.7713 13.7288 3.95508 13.8932 4.15551C14.3781 4.7463 14.5913 5.45355 14.6928 6.31269C14.7157 6.5058 14.7332 6.71067 14.7467 6.92801C15.4017 6.60158 15.9568 6.33336 16.4194 6.18198C16.9623 6.00435 17.5381 5.93266 18.0692 6.26089C18.6002 6.58911 18.7936 7.1362 18.8775 7.7012C18.9585 8.24629 18.9584 8.96433 18.9584 9.82701V10.173C18.9584 11.0356 18.9585 11.7537 18.8775 12.2988C18.7936 12.8638 18.6002 13.4109 18.0692 13.7391C17.5381 14.0673 16.9623 13.9956 16.4194 13.818C15.9568 13.6666 15.4017 13.3984 14.7467 13.0719C14.7332 13.2893 14.7157 13.4942 14.6928 13.6873C14.5913 14.5464 14.3781 15.2537 13.8932 15.8445C13.7288 16.0449 13.545 16.2287 13.3446 16.3931C12.7538 16.878 12.0465 17.0912 11.1874 17.1927C10.3505 17.2917 9.29274 17.2917 7.95754 17.2916H7.87596C6.54075 17.2917 5.48297 17.2917 4.64612 17.1927C3.78698 17.0912 3.07973 16.878 2.48894 16.3931C2.28851 16.2287 2.10473 16.0449 1.94025 15.8445C1.4554 15.2537 1.2422 14.5464 1.14065 13.6873C1.04173 12.8504 1.04174 11.7926 1.04175 10.4574V9.54255C1.04174 8.20733 1.04173 7.14954 1.14065 6.31269C1.2422 5.45355 1.4554 4.7463 1.94025 4.15551C2.10473 3.95508 2.28852 3.7713 2.48894 3.60681C3.07973 3.12197 3.78698 2.90877 4.64612 2.80721C5.48297 2.70829 6.54077 2.7083 7.87599 2.70831ZM13.5417 10.4166V9.58331C13.5417 8.19822 13.5407 7.21435 13.4515 6.45942C13.3639 5.71829 13.1988 5.27967 12.927 4.9485C12.8144 4.81136 12.6887 4.68562 12.5516 4.57308C12.2204 4.30129 11.7818 4.13618 11.0406 4.04857C10.2857 3.95934 9.30184 3.95831 7.91675 3.95831C6.53166 3.95831 5.54778 3.95934 4.79286 4.04857C4.05172 4.13618 3.6131 4.30129 3.28193 4.57308C3.1448 4.68562 3.01905 4.81136 2.90651 4.9485C2.63473 5.27967 2.46961 5.71829 2.38201 6.45942C2.29277 7.21435 2.29175 8.19822 2.29175 9.58331V10.4166C2.29175 11.8017 2.29277 12.7856 2.38201 13.5405C2.46961 14.2817 2.63473 14.7203 2.90651 15.0515C3.01906 15.1886 3.1448 15.3143 3.28193 15.4269C3.6131 15.6987 4.05172 15.8638 4.79286 15.9514C5.54778 16.0406 6.53166 16.0416 7.91675 16.0416C9.30184 16.0416 10.2857 16.0406 11.0406 15.9514C11.7818 15.8638 12.2204 15.6987 12.5516 15.4269C12.6887 15.3143 12.8144 15.1886 12.927 15.0515C13.1988 14.7203 13.3639 14.2817 13.4515 13.5405C13.5407 12.7856 13.5417 11.8017 13.5417 10.4166ZM14.7917 11.697L14.9949 11.7986C15.8244 12.2134 16.3832 12.4909 16.8081 12.63C17.2242 12.7661 17.3502 12.7139 17.412 12.6758C17.4738 12.6376 17.5768 12.5482 17.6411 12.1152C17.7068 11.673 17.7084 11.049 17.7084 10.1216V9.8784C17.7084 8.95099 17.7068 8.32701 17.6411 7.8848C17.5768 7.45171 17.4738 7.36237 17.412 7.3242C17.3502 7.28603 17.2243 7.23384 16.8081 7.37C16.3832 7.50903 15.8244 7.7866 14.9949 8.20135L14.7917 8.30292V9.47206C14.7917 9.49547 14.7917 9.51897 14.7917 9.54255V10.4574C14.7917 10.481 14.7917 10.5045 14.7917 10.5279V11.697Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </span>
                                    Смотреть <br /> видеопрезентацию
                                </button>
                                <button
                                    className="flex gap-20 items-center text-left leading-tight text-white uppercase cursor-pointer text-[16px]"
                                    onClick={() => download(fileUrl, filename)}
                                >
                                    <span className="w-60 h-60 border border-gray-900 rounded-full flex items-center justify-center text-white">
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
                                    <span>
                                        сКАЧАТЬ БУКЛЕТ
                                        <br />
                                        <span className="text-sm opacity-50">PDF 4.8 Mb</span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </Col>
                    <Col xl={12} lg={0} md={0} sm={0} xs={0} style={{ position: "unset" }}>
                        <div className="absolute flex flex-col gap-20 h-full top-0 right-0 w-2/4 overflow-hidden">
                            <img src="/menu-bg.webp" className="w-full h-full object-center object-cover" />
                        </div>
                    </Col>
                </Row>
            </div>
        </Drawer>
    );
};
