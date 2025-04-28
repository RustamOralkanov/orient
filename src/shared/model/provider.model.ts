import { createContext } from "react";

export interface OrientContextProps {
    isFormModal: boolean;
    handleFormModal: () => void;
    handleMenu: () => void;
}

export const OrientContext = createContext<OrientContextProps | undefined>(undefined);
