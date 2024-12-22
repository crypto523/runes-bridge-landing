import { defaultSections, Section } from "@/app/page";
import React, { createContext, useContext, useEffect, useState } from "react";

type Orientation = "portrait" | "landscape";

interface AppContextProps {
    orientation: Orientation;
    isMobile: boolean;
    viewSection: Section;
    setViewSection: React.Dispatch<React.SetStateAction<Section>>;
    handleWheel: (event: React.WheelEvent<HTMLDivElement>) => void
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [orientation, setOrientation] = useState<Orientation>("landscape");
    const [isMobile, setisMobile] = useState<boolean>(false);
    const [viewSection, setViewSection] = useState<Section>("NONE");
    const [sections, setSections] = useState<Section[]>(defaultSections);

    useEffect(() => {
        const checkOrientation = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            setOrientation(width > height ? "landscape" : "portrait");
            setisMobile(width < 768 ? true : false);

            if (width < 768) {
                // setSections(["HERO", "LABS", "WELCOME", "FEATURE", "AIRDROP", "STAKING", "BRIDGE", "CTOGOVERNANCE", "RBVGOVERNANCE", "TASKBOARD", "RBVTOKEN"])
                if (viewSection === "GOVERNANCE") {
                    setViewSection("CTOGOVERNANCE");
                }
            } else {
                // setSections(defaultSections);
                if (viewSection === "CTOGOVERNANCE" || viewSection === "RBVGOVERNANCE") {
                    setViewSection("GOVERNANCE");
                }
            }
        };

        checkOrientation();

        window.addEventListener("resize", checkOrientation);

        return () => {
            window.removeEventListener("resize", checkOrientation);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const navigateSection = (direction: number, currentSection: Section) => {
        const currentIndex = sections.indexOf(currentSection);

        let tartgetIndex: number;
        if (direction === 1) {
            tartgetIndex = (currentIndex + 1) % sections.length;
        } else {
            tartgetIndex = (currentIndex + sections.length - 1) % sections.length;
        }

        if (currentSection === "HERO") {
            const animation = gsap
                .timeline()
                .to("#up", { translateY: -400, opacity: 0, duration: 2 })
                .to("#planet", {
                    translateY: 400, opacity: 0, duration: 2, onComplete: () => {
                        setViewSection(sections[tartgetIndex]);
                    }
                }, "<");
        } else {
            const ID = currentSection.toLocaleLowerCase();
            const animation = gsap
                .timeline()
                .to(`#${ID}`, {
                    scaleX: 0, opacity: 0, duration: 1, onComplete: () => {
                        setViewSection(sections[tartgetIndex]);
                    }
                });
        }
    }

    const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
        const container = event.currentTarget;

        const isAtTop = container.scrollTop === 0;
        const isAtBottom = container.scrollHeight - container.scrollTop === container.clientHeight;

        if (isAtTop && event.deltaY < 0) {
            navigateSection(-1, viewSection);
        } else if (isAtBottom && event.deltaY > 0) {
            navigateSection(1, viewSection);
        } else if (container.scrollHeight <= container.clientHeight) {
            if (event.deltaY < 0) {
                navigateSection(-1, viewSection);
            } else if (event.deltaY > 0) {
                navigateSection(1, viewSection);
            }
        }
    };

    return (
        <AppContext.Provider value={{ orientation, isMobile, viewSection, setViewSection, handleWheel }}>
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