import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const appContext = createContext();
export const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <appContext.Provider 
        value={{
            isSidebarOpen,
            isModalOpen,
            openModal,
            closeModal,
            openSidebar,
            closeSidebar
        }}>
            {children}
        </appContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(appContext);
}