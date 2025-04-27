import { useOrientContext } from "@/shared/model";

export const MenuButton = () => {
    const { handleMenu } = useOrientContext();
    return (
        <button
            className="relative z-[9999] px-20 h-50 rounded-full border-1 border-orange text-orange flex items-center gap-10 uppercase text-sm font-medium cursor-pointer"
            style={{ zIndex: 9999 }}
            onClick={handleMenu}
        >
            <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 4.5L0 3.75C11.1905 3.6111 16.6968 2.22159 24 0.5V4.5L0 4.5Z" fill="#A05428" />
                <path d="M0 7.5L0 8.25C11.1905 8.3889 16.6968 9.77841 24 11.5V7.5L0 7.5Z" fill="#A05428" />
            </svg>
            Меню
        </button>
    );
};
