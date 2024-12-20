import React, {
    ReactNode,
    useRef,
    useState,
    useEffect,
} from "react";

import Image from "next/image";
import Navbar from "../Navbar/Navbar";
import MenuBar from "../utils/MenuBar";
import { Section } from "@/app/page";
import { ArrowIcon, MenuClose, MenuToggle } from "../utils/Icon";
import Background from "../utils/Background";
import { useAppContext } from "@/context/AppContext";

interface LayoutProps {
    children: ReactNode;
    className?: string;
    currentSection: Section;
    hideSection: (section: Section) => void;
    nextSection: Section;
    showSection: (section: Section) => void;
}

type Dimensions = {
    width: number;
    height: number;
};

const SectionLayout: React.FC<LayoutProps> = ({
    children,
    className = "",
    currentSection,
    hideSection,
    nextSection,
    showSection,
}) => {
    const { orientation } = useAppContext();
    const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);


    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsMenuOpened(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    const showHero = () => {
        hideSection(currentSection);
        showSection("HERO");
    };

    return (
        <div className={`relative w-full h-full flex flex-col ${className}`} >
            <Image src="/vector1.svg" width={50} height={1050} alt="vector1"
                className="hidden lg:block absolute right-0 top-[50%] -z-10" />

            <div className="relative w-full h-full flex flex-col md:flex-row z-30">
                <div className="hidden md:flex w-[5%] lg:w-[4.55%] h-full flex-col items-center justify-between border-[#626262] border-r-[1px] ">
                    <div className="pt-[65%] cursor-pointer">
                        {!isMenuOpened ?
                            <MenuToggle className="cursor-pointer" onClick={() => setIsMenuOpened(true)} />
                            : <MenuClose className="cursor-pointer" onClick={() => setIsMenuOpened(false)} />}
                    </div>

                    <div className="pb-[30px] w-full flex flex-col items-center cursor-pointer"
                        onClick={() => { hideSection(currentSection); showSection(nextSection); }}>
                        <div className="w-[90px] pr-[180px] font-conthrax font-600 text-[10px] leading-[12px] text-[#000000] whitespace-nowrap rotate-90 ">
                            explore more
                        </div>
                        <div className="">
                            <ArrowIcon />
                        </div>
                    </div>
                </div>

                <div className="relative w-full h-full flex flex-col">
                    <div className={`w-full h-full flex flex-col items-center transition-all ${isMenuOpened && "blur-md"}`}>
                        <Navbar
                            className={`!pl-5 !pr-0 !border-b-0 hidden md:flex ${orientation === "portrait" ? 'lg:h-[90px]' : ''}`}
                            subClass="!justify-end gap-14 md:gap-3"
                            onLogoClick={showHero}
                            currentSection={currentSection}
                            hideSection={hideSection}
                            showSection={showSection} />

                        {children}
                    </div>

                    <MenuBar
                        isOpened={isMenuOpened}
                        setIsOpened={setIsMenuOpened}
                        currentSection={currentSection}
                        hideSection={hideSection}
                        showSection={showSection} />
                </div>
            </div>

            <Background ltr={true} />
        </div>
    );
};

export default SectionLayout;
