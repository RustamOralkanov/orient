import { useState } from "react";

export const DayOrNight = ({ onChange }: { onChange: (value: boolean) => void }) => {
    const [active, setActive] = useState(true);

    const handleOnChange = (value: boolean) => {
        setActive(value);
        onChange(value);
    };

    return (
        <div className="absolute top-20 right-20 z-[2] h-52 p-8 bg-white flex items-center rounded-full gap-2">
            <div
                className="w-36 h-36 flex items-center justify-center rounded-full cursor-pointer relative z-[3]"
                onClick={() => handleOnChange(true)}
            >
                <img
                    src="/sun.svg"
                    alt="sun"
                    className={[active ? "brightness-10 invert-[1]" : "opacity-[50%]"].join(" ")}
                />
            </div>
            <div
                className="w-36 h-36 flex items-center justify-center rounded-full cursor-pointer relative z-[3]"
                onClick={() => handleOnChange(false)}
            >
                <img
                    src="/moon.svg"
                    alt="moon"
                    className={[!active ? "brightness-10 invert-[1]" : "opacity-[50%]"].join(" ")}
                />
            </div>
            <div
                className="absolute w-36 h-36 rounded-full top-8 bg-red transition-all duration-200"
                style={{ left: active ? 8 : 45 }}
            />
        </div>
    );
};
