import type { CarouselRef } from "antd/es/carousel";
import type { RefObject } from "react";
import { useCallback, useRef } from "react";

export const useCarousel = () => {
    const carouselRef: RefObject<CarouselRef | null> = useRef(null);

    const prevSlide = useCallback(() => {
        carouselRef.current?.prev();
    }, []);

    const nextSlide = useCallback(() => {
        carouselRef.current?.next();
    }, []);

    const goToSlide = useCallback((slide: number, dontAnimate?: boolean) => {
        carouselRef.current?.goTo(slide, dontAnimate);
    }, []);

    return { carouselRef, prevSlide, nextSlide, goToSlide };
};
