import { useEffect, useState } from "react";

export const useContentHeight = () => {
    const [contentHeight, setContentHeight] = useState<number | null>(null);

    useEffect(() => {
        const el = document.getElementById("content-wrapper");
        if (el) {
            setContentHeight(el.clientHeight);
        }
    }, []);

    return { contentHeight };
};
