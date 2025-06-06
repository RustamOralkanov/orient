import { Flex } from "antd";

interface CarouselButtonsProps {
    next: () => void;
    prev: () => void;
}

export const MobileCarouselButtons: React.FC<CarouselButtonsProps> = (props) => {
    const handleNext = () => {
        props.next();
    };

    const handlePrev = () => {
        props.prev();
    };

    return (
        <div className="absolute top-[50%] -translate-y-[50%] w-full hidden max-lg:block">
            <Flex align="center" gap={12} justify="space-between" className="!w-[calc(100%_-_30px)] !mx-15">
                <button
                    className={[
                        "flex items-center justify-center w-64 h-64 rounded-full border-1 border-white text-white transition-all duration-300 hover:bg-white hover:text-gray-900 cursor-pointer",
                    ].join(" ")}
                    onClick={handlePrev}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4 10.6667C6.09145 10.6667 9.2223 10.1957 11.7762 8.84084C14.2606 7.52282 16.1429 5.41863 16.1429 2H19C19 6.58137 16.3585 9.47718 13.1881 11.1592C12.5822 11.4806 11.9552 11.7594 11.3203 12C11.9552 12.2406 12.5822 12.5194 13.1881 12.8408C16.3585 14.5228 19 17.4186 19 22H16.1429C16.1429 18.5814 14.2606 16.4772 11.7762 15.1592C9.2223 13.8043 6.09145 13.3333 4 13.3333V10.6667Z"
                            fill="currentColor"
                        />
                    </svg>
                </button>
                <button
                    className={[
                        "flex items-center justify-center w-64 h-64 rounded-full border-1 border-white text-white transition-all duration-300 hover:bg-white hover:text-gray-900 cursor-pointer",
                    ].join(" ")}
                    onClick={handleNext}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20 10.6667C17.9086 10.6667 14.7777 10.1957 12.2238 8.84084C9.73945 7.52282 7.85714 5.41863 7.85714 2H5C5 6.58137 7.64151 9.47718 10.8119 11.1592C11.4178 11.4806 12.0448 11.7594 12.6797 12C12.0448 12.2406 11.4178 12.5194 10.8119 12.8408C7.64151 14.5228 5 17.4186 5 22H7.85714C7.85714 18.5814 9.73945 16.4772 12.2238 15.1592C14.7777 13.8043 17.9086 13.3333 20 13.3333V10.6667Z"
                            fill="currentColor"
                        />
                    </svg>
                </button>
            </Flex>
        </div>
    );
};
