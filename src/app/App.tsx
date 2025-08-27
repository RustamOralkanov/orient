import { useEffect, useState } from "react";
import axios from "axios";
import { OrientData } from "@/shared/model";
import { AboutView } from "@/views/about";
import { ArchitectureView } from "@/views/architecture";
import { CompanyView } from "@/views/company";
// import { CtaView } from "@/views/cta";
import { HallView } from "@/views/hall";
import { ImprovementView } from "@/views/improvement";
// import { LayoutsView } from "@/views/layouts";
import { LocationView } from "@/views/location";
import { MainView } from "@/views/main";
import { ParkingView } from "@/views/parking";
import { ServiceView } from "@/views/service";
import { Footer } from "@/widgets/footer";
import { OrientProvider } from "@/shared/provider";
import { ParallaxProvider } from "react-scroll-parallax";
import { Booking } from "@/shared/ui/booking";

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
        <ParallaxProvider>
            <OrientProvider>
                <MainView {...data} />
                <AboutView {...data?.about} />
                <LocationView {...data?.location} />
                <ImprovementView {...data?.improvement} />
                <ArchitectureView {...data?.architecture} />
                <HallView {...data?.hall} />
                <ParkingView {...data?.parking} />
                {/* <LayoutsView {...data?.layouts} /> */}
                {/* <CtaView /> */}
                <CompanyView {...data?.company} />
                <ServiceView {...data?.service} />
                <Footer {...data?.footer} />
                <Booking />
            </OrientProvider>
        </ParallaxProvider>
    );
};
