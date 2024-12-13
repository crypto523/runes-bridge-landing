import React, { ReactNode, CSSProperties, useRef, useState, useEffect } from "react";

import Image from "next/image";
import Navbar from "../Navbar/Navbar";
import MenuBar from "../utils/MenuBar";
import { Section } from "@/app/page";

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

const SectionLayoutF: React.FC<LayoutProps> = ({ children, className = "", currentSection, hideSection, nextSection, showSection }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [dimensions, setDimensions] = useState<Dimensions>({ width: window.innerWidth - 120, height: window.innerHeight - 120 });
    const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setDimensions({ width: rect.width, height: rect.height });
            }
        };

        // Calculate dimensions on mount and resize
        updateDimensions();
        window.addEventListener('resize', updateDimensions);

        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    const showHero = () => {
        hideSection(currentSection);
        showSection("HERO");
    }

    return (
        <div className={`hidden lg:flex w-full h-full p-[30px_60px] overflow-hidden ${className}`}>
            <div ref={containerRef} className="relative w-full h-full">

                <svg width="100%" height="100%" className="z-10" xmlns="http://www.w3.org/2000/svg">
                    <polygon
                        points={`
                                ${dimensions.width},${dimensions.height} 
                                ${dimensions.width},${dimensions.width * 0.02}
                                ${dimensions.width * 0.98},0
                                ${dimensions.width * 0.5},0
                                ${dimensions.width * 0.45},${dimensions.height * 0.2}
                                ${dimensions.width * 0.02},${dimensions.height * 0.2}
                                0,${dimensions.height * 0.2 + dimensions.width * 0.02}
                                0,${dimensions.height * 0.9 - dimensions.width * 0.02}
                                ${dimensions.width * 0.02},${dimensions.height * 0.9}
                                ${dimensions.width * 0.7},${dimensions.height * 0.9}
                                ${dimensions.width * 0.75},${dimensions.height}
                                ${dimensions.width},${dimensions.height}
                                `}
                        fill="white"
                        stroke="none"
                    />
                </svg>

                <svg width="100%" height="105%" className="absolute top-0 z-20" xmlns="http://www.w3.org/2000/svg">
                    <line x1={dimensions.width} y1={dimensions.height} x2={dimensions.width} y2={dimensions.width * 0.02} stroke="#444444" strokeWidth={1.5} vectorEffect="non-scaling-stroke" />
                    <line x1={dimensions.width} y1={dimensions.width * 0.02} x2={dimensions.width * 0.98} y2={0} stroke="#444444" strokeWidth={0.7} vectorEffect="non-scaling-stroke" />
                    <line x1={dimensions.width * 0.98} y1={0} x2={dimensions.width * 0.5} y2={0} stroke="#444444" strokeWidth={1.5} vectorEffect="non-scaling-stroke" />
                    <line x1={dimensions.width * 0.5} y1={0} x2={dimensions.width * 0.45} y2={dimensions.height * 0.15} stroke="#444444" strokeWidth={0.8} vectorEffect="non-scaling-stroke" />
                    <line x1={dimensions.width * 0.45} y1={dimensions.height * 0.15} x2={dimensions.width * 0.02} y2={dimensions.height * 0.15} stroke="#444444" strokeWidth={0.8} vectorEffect="non-scaling-stroke" />
                    <line x1={dimensions.width * 0.02} y1={dimensions.height * 0.15} x2={0} y2={dimensions.height * 0.15 + dimensions.width * 0.02} stroke="#444444" strokeWidth={0.8} vectorEffect="non-scaling-stroke" />
                    <line x1={0} y1={dimensions.height * 0.15 + dimensions.width * 0.02} x2={0} y2={dimensions.height * 0.9 - dimensions.width * 0.02} stroke="#444444" strokeWidth={1.5} vectorEffect="non-scaling-stroke" />
                    <line x1={0} y1={dimensions.height * 0.9 - dimensions.width * 0.02} x2={dimensions.width * 0.02} y2={dimensions.height * 0.9} stroke="#444444" strokeWidth={0.8} vectorEffect="non-scaling-stroke" />
                    <line x1={dimensions.width * 0.02} y1={dimensions.height * 0.9} x2={dimensions.width * 0.7} y2={dimensions.height * 0.9} stroke="#444444" strokeWidth={0.8} vectorEffect="non-scaling-stroke" />
                    <line x1={dimensions.width * 0.7} y1={dimensions.height * 0.9} x2={dimensions.width * 0.75} y2={dimensions.height} stroke="#444444" strokeWidth={0.8} vectorEffect="non-scaling-stroke" />
                    <line x1={dimensions.width} y1={dimensions.height} x2={dimensions.width * 0.75} y2={dimensions.height} stroke="#444444" strokeWidth={1.5} />
                    <polygon points={`${dimensions.width * 0.75},${dimensions.height * 1.02} ${dimensions.width * 0.7 - dimensions.height * 0.01},${dimensions.height * 0.91} ${dimensions.width * 0.05},${dimensions.height * 0.91} ${dimensions.width * 0.05},${dimensions.height * 1.02}`} fill="black" />
                </svg>

                <Image src="/vector1.svg" width={50} height={1050} alt="vector1" className="absolute left-0 top-[50%] -z-10" />

                <div className="absolute inset-0 w-full h-full flex flex-row-reverse z-20">
                    <div className="w-[4.55%] h-full flex flex-col items-center justify-between border-[#626262] border-l-[1px] ">
                        <div className="pt-[65%] cursor-pointer">
                            {
                                !isMenuOpened ?
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => setIsMenuOpened(true)}>
                                        <path d="M5 17H19M5 12H19M5 7H13" stroke="#626262" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg> :
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => setIsMenuOpened(false)}>
                                        <g id="Menu / Close_LG">
                                            <path id="Vector" d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001" stroke="#061012" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                    </svg>
                            }
                        </div>
                        <div className="pb-[30px] w-full flex flex-col items-center cursor-pointer" onClick={() => { hideSection(currentSection); showSection(nextSection) }}>
                            <div className="w-[90px] pr-[180px] font-conthrax font-600 text-[10px] leading-[12px] text-[#000000] whitespace-nowrap rotate-90 ">explore more</div>
                            <div className="">
                                <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 1C9 0.447715 8.55228 -2.41411e-08 8 0C7.44772 2.41411e-08 7 0.447715 7 1L9 1ZM7.29289 21.7071C7.68342 22.0976 8.31658 22.0976 8.70711 21.7071L15.0711 15.3431C15.4616 14.9526 15.4616 14.3195 15.0711 13.9289C14.6805 13.5384 14.0474 13.5384 13.6569 13.9289L8 19.5858L2.34315 13.9289C1.95262 13.5384 1.31946 13.5384 0.928933 13.9289C0.538408 14.3195 0.538408 14.9526 0.928933 15.3431L7.29289 21.7071ZM7 1L7 21L9 21L9 1L7 1Z" fill="#FA0B0F" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full h-full">
                        <div className={`w-full h-full flex flex-col items-center transition-all ${isMenuOpened && 'blur-md'}`}>
                            <Navbar className="!px-[44px] !py-[2vh] !border-b-0" mainClass="flex-row-reverse" subClass="flex-row-reverse !justify-end gap-14" onLogoClick={showHero} />

                            {children}

                            <div className="relative w-full h-[9vh] flex items-center justify-center pr-[303.5px] pl-[66px] -mb-[5px]">
                                <div className="absolute top-[5vh] -translate-y-[50%] flex items-center justify-center gap-8">
                                    <svg width="7vh" height="7vh" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="30" cy="30" r="30" fill="white" />
                                        <path d="M43.7098 16.652C41.0957 15.4239 38.2946 14.5196 35.3642 14.0023C35.3105 13.9921 35.2567 14.0165 35.2309 14.0674C34.8708 14.7233 34.4709 15.5807 34.1924 16.2528C31.0411 15.7701 27.9058 15.7701 24.8182 16.2528C24.5377 15.5644 24.1239 14.7233 23.7618 14.0674C23.734 14.0186 23.6803 13.9941 23.6286 14.0023C20.7001 14.5196 17.897 15.4239 15.2829 16.652C15.261 16.6622 15.2411 16.6785 15.2272 16.7009C9.91147 24.8313 8.45517 32.7621 9.16938 40.5952C9.17336 40.6339 9.19325 40.6706 9.22309 40.693C12.7305 43.3305 16.1284 44.9313 19.4627 45.9924C19.5164 46.0087 19.5721 45.9883 19.6059 45.9435C20.3938 44.8417 21.098 43.6787 21.7008 42.4547C21.7366 42.3834 21.7008 42.2979 21.6292 42.2694C20.5131 41.8355 19.4527 41.308 18.4302 40.7093C18.3486 40.6604 18.3427 40.5422 18.4163 40.4852C18.6311 40.3202 18.846 40.1492 19.0509 39.9761C19.0887 39.9435 19.1404 39.9374 19.1842 39.9577C25.8945 43.0942 33.1599 43.0942 39.7907 39.9577C39.8344 39.9353 39.8861 39.9435 39.9239 39.974C40.1288 40.1471 40.3437 40.3202 40.5605 40.4852C40.6341 40.5422 40.6302 40.6604 40.5486 40.7093C39.5281 41.3203 38.4657 41.8376 37.3476 42.2694C37.274 42.2979 37.2422 42.3834 37.278 42.4567C37.8947 43.6767 38.597 44.8397 39.3709 45.9435C39.4027 45.9904 39.4604 46.0107 39.5141 45.9944C42.8643 44.9333 46.2622 43.3325 49.7696 40.695C49.7994 40.6726 49.8193 40.6359 49.8233 40.5993C50.6788 31.5442 48.3909 23.6785 43.7615 16.705C43.7496 16.6825 43.7317 16.6642 43.7078 16.654L43.7098 16.652ZM22.6995 35.8253C20.6782 35.8253 19.0151 33.9271 19.0151 31.5951C19.0151 29.2631 20.6484 27.3649 22.6995 27.3649C24.7506 27.3649 26.4177 29.2815 26.3839 31.5951C26.3839 33.9271 24.7506 35.8253 22.6995 35.8253ZM36.325 35.8253C34.3038 35.8253 32.6407 33.9271 32.6407 31.5951C32.6407 29.2631 34.2739 27.3649 36.325 27.3649C38.3761 27.3649 40.0433 29.2815 40.0095 31.5951C40.0095 33.9271 38.394 35.8253 36.325 35.8253Z" fill="black" />
                                    </svg>
                                    <svg width="7vh" height="7vh" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="30" cy="30" r="30" fill="white" />
                                        <circle cx="30.0414" cy="29.9999" r="29.0414" fill="white" />
                                        <path d="M30.0391 11.3304L29.7822 12.1813V36.8707L30.0391 37.1206L41.7888 30.3463L30.0391 11.3304Z" fill="#061012" />
                                        <path d="M30.0366 11.3304L18.2866 30.3463L30.0366 37.1206V25.1371V11.3304Z" fill="#061012" />
                                        <path d="M30.0393 39.2903L29.8945 39.4625V48.2572L30.0393 48.6694L41.7962 32.5196L30.0393 39.2903Z" fill="#061012" />
                                        <path d="M30.0366 48.6694V39.2903L18.2866 32.5196L30.0366 48.6694Z" fill="#061012" />
                                        <path d="M30.0352 37.1202L41.7849 30.3459L30.0352 25.1367V37.1202Z" fill="#061012" />
                                        <path d="M18.2866 30.3459L30.0366 37.1202V25.1367L18.2866 30.3459Z" fill="#061012" />
                                    </svg>
                                    <svg width="7vh" height="7vh" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="30" cy="30" r="30" fill="white" />
                                        <path d="M37.3325 12.5H22.6675C16.2975 12.5 12.5 16.2975 12.5 22.6675V37.315C12.5 43.7025 16.2975 47.5 22.6675 47.5H37.315C43.685 47.5 47.4825 43.7025 47.4825 37.3325V22.6675C47.5 16.2975 43.7025 12.5 37.3325 12.5ZM22.3525 40.7625C22.3525 41.48 21.7575 42.075 21.04 42.075C20.3225 42.075 19.7275 41.48 19.7275 40.7625V37.14C19.7275 36.4225 20.3225 35.8275 21.04 35.8275C21.7575 35.8275 22.3525 36.4225 22.3525 37.14V40.7625ZM31.3125 40.7625C31.3125 41.48 30.7175 42.075 30 42.075C29.2825 42.075 28.6875 41.48 28.6875 40.7625V33.5C28.6875 32.7825 29.2825 32.1875 30 32.1875C30.7175 32.1875 31.3125 32.7825 31.3125 33.5V40.7625ZM40.2725 40.7625C40.2725 41.48 39.6775 42.075 38.96 42.075C38.2425 42.075 37.6475 41.48 37.6475 40.7625V29.8775C37.6475 29.16 38.2425 28.565 38.96 28.565C39.6775 28.565 40.2725 29.16 40.2725 29.8775V40.7625ZM40.2725 24.3475C40.2725 25.065 39.6775 25.66 38.96 25.66C38.2425 25.66 37.6475 25.065 37.6475 24.3475V22.65C33.185 27.235 27.6025 30.4725 21.355 32.03C21.25 32.065 21.145 32.065 21.04 32.065C20.445 32.065 19.92 31.6625 19.7625 31.0675C19.5875 30.3675 20.0075 29.65 20.725 29.475C26.6225 28.005 31.8725 24.9075 36.0375 20.5325H33.85C33.1325 20.5325 32.5375 19.9375 32.5375 19.22C32.5375 18.5025 33.1325 17.9075 33.85 17.9075H38.9775C39.0475 17.9075 39.1 17.9425 39.17 17.9425C39.2575 17.96 39.345 17.96 39.4325 17.995C39.52 18.03 39.59 18.0825 39.6775 18.135C39.73 18.17 39.7825 18.1875 39.835 18.2225C39.8525 18.24 39.8525 18.2575 39.87 18.2575C39.94 18.3275 39.9925 18.3975 40.045 18.4675C40.0975 18.5375 40.15 18.59 40.1675 18.66C40.2025 18.73 40.2025 18.8 40.22 18.8875C40.2375 18.975 40.2725 19.0625 40.2725 19.1675C40.2725 19.185 40.29 19.2025 40.29 19.22V24.3475H40.2725Z" fill="black" />
                                    </svg>
                                    <svg width="7vh" height="7vh" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="30" cy="30" r="30" fill="white" />
                                        <path d="M43.3332 39.3333V43.3333H16.6665V39.3333C16.6665 38.6 17.2665 38 17.9998 38H41.9998C42.7332 38 43.3332 38.6 43.3332 39.3333Z" fill="black" stroke="black" strokeWidth="1.14286" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M23.3332 28.6667H20.6665V38H23.3332V28.6667Z" fill="black" />
                                        <path d="M28.6667 28.6667H26V38H28.6667V28.6667Z" fill="black" />
                                        <path d="M34.0002 28.6667H31.3335V38H34.0002V28.6667Z" fill="black" />
                                        <path d="M39.3332 28.6667H36.6665V38H39.3332V28.6667Z" fill="black" />
                                        <path d="M44.6668 44.3333H15.3335C14.7868 44.3333 14.3335 43.88 14.3335 43.3333C14.3335 42.7867 14.7868 42.3333 15.3335 42.3333H44.6668C45.2135 42.3333 45.6668 42.7867 45.6668 43.3333C45.6668 43.88 45.2135 44.3333 44.6668 44.3333Z" fill="black" />
                                        <path d="M42.4932 21.6667L30.4932 16.8667C30.2265 16.76 29.7732 16.76 29.5065 16.8667L17.5065 21.6667C17.0398 21.8533 16.6665 22.4 16.6665 22.9067V27.3333C16.6665 28.0667 17.2665 28.6667 17.9998 28.6667H41.9998C42.7332 28.6667 43.3332 28.0667 43.3332 27.3333V22.9067C43.3332 22.4 42.9598 21.8533 42.4932 21.6667ZM29.9998 25.3333C28.8932 25.3333 27.9998 24.44 27.9998 23.3333C27.9998 22.2267 28.8932 21.3333 29.9998 21.3333C31.1065 21.3333 31.9998 22.2267 31.9998 23.3333C31.9998 24.44 31.1065 25.3333 29.9998 25.3333Z" fill="black" />
                                    </svg>
                                    <Image src="/parachute.svg" width={60} height={60} style={{ width: "7vh", height: "7vh" }} alt="parachute" />
                                    <svg width="7vh" height="7vh" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="30" cy="30" r="30" fill="white" />
                                        <path d="M37 15.4375C37 17.6075 35.2325 19.375 33.0625 19.375H26.9375C25.8525 19.375 24.8725 18.9375 24.155 18.22C23.4375 17.5025 23 16.5225 23 15.4375C23 13.2675 24.7675 11.5 26.9375 11.5H33.0625C34.1475 11.5 35.1275 11.9375 35.845 12.655C36.5625 13.3725 37 14.3525 37 15.4375Z" fill="black" />
                                        <path d="M41.9525 16.8025C41.55 16.47 41.095 16.2075 40.605 16.015C40.0975 15.8225 39.59 16.225 39.485 16.75C38.89 19.7425 36.2475 22 33.0625 22H26.9375C25.1875 22 23.5425 21.3175 22.3 20.075C21.39 19.165 20.76 18.01 20.515 16.7675C20.41 16.2425 19.885 15.8225 19.3775 16.0325C17.3475 16.855 16 18.71 16 22.4375V39.5C16 44.75 19.1325 46.5 23 46.5H37C40.8675 46.5 44 44.75 44 39.5V22.4375C44 19.585 43.2125 17.835 41.9525 16.8025ZM23 29.4375H30C30.7175 29.4375 31.3125 30.0325 31.3125 30.75C31.3125 31.4675 30.7175 32.0625 30 32.0625H23C22.2825 32.0625 21.6875 31.4675 21.6875 30.75C21.6875 30.0325 22.2825 29.4375 23 29.4375ZM37 39.0625H23C22.2825 39.0625 21.6875 38.4675 21.6875 37.75C21.6875 37.0325 22.2825 36.4375 23 36.4375H37C37.7175 36.4375 38.3125 37.0325 38.3125 37.75C38.3125 38.4675 37.7175 39.0625 37 39.0625Z" fill="black" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <MenuBar isOpened={isMenuOpened} currentSection={currentSection} hideSection={hideSection} showSection={showSection} isRight={true} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionLayoutF;