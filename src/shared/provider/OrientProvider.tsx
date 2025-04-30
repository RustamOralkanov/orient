import { useState, type ReactNode } from "react";
import { OrientContext } from "../model/provider.model";
import { FormModal } from "@/widgets/formModal";
import { Menu } from "@/widgets/menu";
import { Success } from "../ui/success";

export const OrientProvider: React.FC<{ readonly children: ReactNode }> = ({ children }) => {
    const [isFormModal, setIsFormModal] = useState(false);
    const [isMenu, setIsMenu] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleFormModal = () => {
        setIsFormModal(!isFormModal);
    };

    const handleMenu = () => {
        setIsMenu(!isMenu);
    };

    const handleSuccess = () => {
        setIsSuccess(!isSuccess);
    };

    return (
        <OrientContext.Provider value={{ isFormModal, handleFormModal, handleMenu, handleSuccess }}>
            <FormModal open={isFormModal} onCancel={handleFormModal} onClose={handleFormModal} />
            <Menu open={isMenu} onClose={handleMenu} />
            {isSuccess && <Success />}
            {children}
        </OrientContext.Provider>
    );
};
