import { useContext } from "react";
import { OrientContext, type OrientContextProps } from "./provider.model";

export const useOrientContext = (): OrientContextProps => {
    const context = useContext(OrientContext);
    if (!context) {
        throw new Error("useOrientContext must be used within a OrientProvider");
    }
    return context;
};
