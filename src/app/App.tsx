import { useEffect, useState } from "react";
import axios from "axios";
import { OrientData } from "@/shared/model";
import { AboutView } from "@/views/about";
import { ArchitectureView } from "@/views/architecture";
import { CompanyView } from "@/views/company";
import { CtaView } from "@/views/cta";
import { HallView } from "@/views/hall";
import { ImprovementView } from "@/views/improvement";
import { LayoutsView } from "@/views/layouts";
import { LocationView } from "@/views/location";
import { MainView } from "@/views/main";
import { ParkingView } from "@/views/parking";
import { ServiceView } from "@/views/service";
import { Footer } from "@/widgets/footer";

export const App = () => {
    const [data, setData] = useState<OrientData["ru"] | null>(null);

    useEffect(() => {
        axios
            .get("/orient.json")
            .then((response) => {
                setData(response.data.ru);
            })
            .catch((error) => {
                console.error("Ошибка при загрузке JSON:", error);
            });
    }, []);

    return (
        <>
            <MainView />
            <AboutView />
            <LocationView />
            <ImprovementView />
            <ArchitectureView />
            <HallView />
            <ParkingView />
            <LayoutsView />
            <CtaView />
            <CompanyView />
            <ServiceView {...data?.service} />
            <Footer {...data?.footer} />
        </>
    );
};
