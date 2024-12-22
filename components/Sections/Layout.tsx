import React, {
    ReactNode,
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
    nextSection: Section;
    ltr?: boolean;
}

const SectionLayout: React.FC<LayoutProps> = ({
    children,
    className = "",
    nextSection,
    ltr = true
}) => {
    const { orientation, viewSection, setViewSection } = useAppContext();
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
        setViewSection("HERO");
    };

    return (
        <div className={`relative w-full h-full flex flex-col ${className}`} >
            <Image src="/vector1.svg" width={50} height={1050} alt="vector1"
                className={`hidden lg:block absolute top-[50%] -z-10 ${ltr ? 'right-0' : 'left-0'}`} />

            <div className={`relative w-full h-full flex flex-col z-30 ${ltr ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`hidden md:flex w-[5%] lg:w-[4.55%] h-full flex-col items-center justify-between border-[#626262] ${ltr ? 'border-r-[1px]' : 'border-l-[1px]'}`}>
                    <div className="pt-[65%] cursor-pointer">
                        {!isMenuOpened ?
                            <MenuToggle className="cursor-pointer" onClick={() => setIsMenuOpened(true)} />
                            : <MenuClose className="cursor-pointer" onClick={() => setIsMenuOpened(false)} />}
                    </div>

                    <div className="pb-[30px] w-full flex flex-col items-center cursor-pointer"
                        onClick={() => setViewSection(nextSection)}>
                        <div className="w-[90px] pr-[180px] font-conthrax font-600 text-[10px] leading-[12px] text-[#000000] whitespace-nowrap rotate-90 ">
                            explore more
                        </div>
                        <div className="">
                            <ArrowIcon className="" />
                        </div>
                    </div>
                </div>

                <div className="relative w-full h-full flex flex-col">
                    <div className={`w-full h-full flex flex-col items-center transition-all ${isMenuOpened && "blur-md"}`}>
                        <Navbar
                            className={`!border-b-0 hidden md:flex ${orientation === "portrait" ? 'lg:h-[90px]' : ''} ${ltr ? '!pl-5 !pr-0' : '!pr-5 !pl-0 '}`}
                            mainClass={ltr ? '' : 'flex-row-reverse'}
                            subClass={`!justify-end gap-14 md:gap-3 lg:gap-5 xl:gap-14 ${ltr ? '' : 'flex-row-reverse'}`} />

                        {children}
                    </div>

                    <MenuBar
                        isOpened={isMenuOpened}
                        setIsOpened={setIsMenuOpened}
                        isRight={!ltr} />
                </div>
            </div>

            <Background ltr={ltr} />
        </div>
    );
};

export default SectionLayout;
