import React, { createContext, useContext, useEffect, useState } from "react";

type Orientation = "portrait" | "landscape";

interface AppContextProps {
    orientation: Orientation;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [orientation, setOrientation] = useState<Orientation>("landscape");

    useEffect(() => {
        const checkOrientation = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            setOrientation(width > height ? "landscape" : "portrait");
        };

        checkOrientation();

        window.addEventListener("resize", checkOrientation);

        return () => {
            window.removeEventListener("resize", checkOrientation);
        };
    }, []);

    return (
        <AppContext.Provider value={{ orientation }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useOrientation must be used within an AppContextProvider");
    }
    return context;
}