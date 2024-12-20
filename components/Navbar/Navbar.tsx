import React, { useEffect, useState } from "react";
import Image from "next/image";
import RunesButton from "../utils/Button";
import classNames from "classnames"; // Import classnames utility (optional)
import { Discord, Telegram } from "../utils/Icon";
import MenuBar from "../utils/MenuBar";
import { Section } from "@/app/page";
import { useAppContext } from "@/context/AppContext";

interface NavbarProps {
    className?: string; // Add a className prop for customization
    mainClass?: string;
    subClass?: string;
    currentSection: Section;
    hideSection: (section: Section) => void;
    showSection: (section: Section) => void;
    onLogoClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
    className,
    mainClass,
    subClass,
    currentSection,
    hideSection,
    showSection,
    onLogoClick,
}) => {
    const { orientation } = useAppContext();
    const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" })
            setIsMenuOpened(false);
        }
    }

    const defaultClasses =
        `relative w-full p-5 md:px-[42px] xl:px-[165px] md:h-[90px] lg:h-[15%] flex items-center lg:border-b-2 lg:border-[#C4C3CB]`;
    return (
        <div className={classNames(defaultClasses, className)}>
            <div
                className={classNames("w-full flex items-center justify-between", mainClass)}
            >
                <div className="flex items-center cursor-pointer hover:scale-105 transition-all" onClick={onLogoClick}>
                    <p className="font-conthrax font-[600] text-xl md:text-2xl lg:text-[28px] leading-[24px] text-primary">
                        RunesBridge
                    </p>
                    <Image src="logo.svg" width={60} height={60} alt="logo" />
                    <p className="font-conthrax font-[600] text-[10px] leading-[12px] text-[#A5A5A5]">
                        Beta
                    </p>
                </div>
                <div
                    className={classNames(
                        "hidden w-[45%] md:flex items-center justify-between",
                        subClass
                    )}
                >
                    <div className="flex items-center md:gap-3 lg:gap-5">
                        <div className="flex items-center gap-2 text-black font-poppins font-medium text-base cursor-pointer">
                            <Telegram />
                            <span className="hidden xl:inline-flex">Telegram</span>
                        </div>
                        <div className="flex items-center gap-2 text-black font-poppins font-medium text-base cursor-pointer">
                            <Discord />
                            <span className="hidden xl:inline-flex">Telegram</span>
                        </div>
                    </div>
                    <RunesButton>WorkShop</RunesButton>
                </div>
                <button
                    id="menu-toggle"
                    className="flex items-center p-0 bg-transparent md:hidden"
                    onClick={() => setIsMenuOpened((prev) => !prev)}
                >
                    {isMenuOpened ? (
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="Menu / Close_LG">
                                <path
                                    id="Vector"
                                    d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
                                    stroke="#061012"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </g>
                        </svg>
                    ) : (
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5 17H19M5 12H19M5 7H13"
                                stroke="#626262"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    )}
                </button>
            </div>
            {isMenuOpened &&
                <MenuBar
                    isOpened={isMenuOpened}
                    setIsOpened={setIsMenuOpened}
                    currentSection={currentSection}
                    hideSection={hideSection}
                    showSection={showSection}
                    className="top-[100%] left-0 w-full h-[calc(100vh-100px)] z-[200]"
                />}
        </div>
    );
};

export default Navbar;
