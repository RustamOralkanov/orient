import { useState } from "react";

export const Booking = () => {
    const [isActive, setIsActive] = useState(true);

    if (!isActive) return null;

    return (
        <div className="fixed bottom-20 right-20 bg-gray-900 px-30 py-20 shadow backdrop-blur-2xl z-50 flex flex-col gap-10 max-md:left-10 max-md:bottom-10 max-md:right-10">
            <h4 className="text-white text-[16px] font-regular uppercase">
                Старт бронирования <span className="text-white text-2xl font-semibold">01.08.2025</span>
            </h4>
            <h5 className="text-white text-[14px] font-regular uppercase">Успейте первыми! </h5>
            <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
                className="w-16 h-16 cursor-pointer absolute top-8 right-8"
                onClick={() => setIsActive(!isActive)}
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                    fill="#ffffff"
                />
            </svg>
        </div>
    );
};
