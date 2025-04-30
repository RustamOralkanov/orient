import { useMediaQuery } from "react-responsive";

interface ScreenSize {
    isDesktop: boolean;
    isMiddleLaptop: boolean;
    isMobile: boolean;
}

export const useResponsive = (): ScreenSize => {
    const isDesktop = useMediaQuery({ minWidth: 1600 });
    const isMiddleLaptop = useMediaQuery({ maxWidth: 1440, minWidth: 1200 });
    const isMobile = useMediaQuery({ maxWidth: 1024, minWidth: 0 });

    return {
        isDesktop,
        isMiddleLaptop,
        isMobile,
    };
};
