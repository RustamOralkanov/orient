import { useState, type ReactNode } from "react";
import { OrientContext } from "../model/provider.model";
import { FormModal } from "@/widgets/formModal";
import { Menu } from "@/widgets/menu";

export const OrientProvider: React.FC<{ readonly children: ReactNode }> = ({ children }) => {
    const [isFormModal, setIsFormModal] = useState(false);
    const [isMenu, setIsMenu] = useState(false);

    const handleFormModal = () => {
        setIsFormModal(!isFormModal);
    };

    const handleMenu = () => {
        setIsMenu(!isMenu);
    };

    return (
        <OrientContext.Provider value={{ isFormModal, handleFormModal, handleMenu }}>
            <FormModal open={isFormModal} onCancel={handleFormModal} onClose={handleFormModal} />
            <Menu open={isMenu} onClose={handleMenu} />
            {children}
        </OrientContext.Provider>
    );
};
