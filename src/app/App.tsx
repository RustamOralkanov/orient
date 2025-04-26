import { AboutView } from "@/views/about";
import { ImprovementView } from "@/views/improvement";
import { LocationView } from "@/views/location";
import { MainView } from "@/views/main";

export const App = () => {
    return (
        <>
            <MainView />
            <AboutView />
            <LocationView />
            <ImprovementView />
        </>
    );
};
