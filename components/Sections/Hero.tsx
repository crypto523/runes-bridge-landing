'use client'

import React, { useEffect } from "react"
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import RunesButton from "../utils/Button";
import Planet from "../Planet/Planet";
import gsap from "gsap";
import { Section } from "@/app/page";
import { useAppContext } from "@/context/AppContext";

interface HeroProps {
    showSection: (section: Section) => void;
    hideSection: (section: Section) => void;
}

const Hero: React.FC<HeroProps> = ({ showSection, hideSection }) => {
    const { orientation } = useAppContext();

    useEffect(() => {
        const animation = gsap
            .timeline()
            .to(
                "div#banner",
                {
                    opacity: 1,
                    translateY: 0,
                    duration: 2,
                },
            )
            .to(
                "div#hero-buttons",
                {
                    opacity: 1,
                    duration: 2,
                },
                "<"
            )
            .to(
                "div#planet",
                {
                    opacity: 1,
                    duration: 2,
                    translateY: 0,
                },
                "<"
            )
    })

    const moreExplorer = () => {
        const animation = gsap
            .timeline()
            .to("#up", { translateY: -400, opacity: 0, duration: 2 })
            .to("#planet", {
                translateY: 400, opacity: 0, duration: 2, onComplete: () => {
                    showSection("LABS");
                    hideSection("HERO");
                }
            }, "<");
    }

    return (
        <section className="w-[100vw] min-h-[100vh] flex flex-col items-centers" id="hero" style={{ backgroundImage: `url("bg-grid.svg")`, zIndex: 100 }}>
            <Navbar currentSection="HERO" hideSection={hideSection} showSection={showSection} onLogoClick={() => { }} className={`hidden md:flex md:!py-10 md:h-full ${orientation === "portrait" ? 'lg:border-b-0 lg:!pb-0' : ''}`} subClass="md:gap-3 md:justify-end" />
            <div className={`w-full flex-1 flex flex-col items-center justify-evenly ${orientation === "portrait" ? 'lg:justify-start gap-10' : ''}`}>
                <div id="up">
                    <Banner />

                    <div className="flex flex-col lg:flex-row items-center justify-center gap-[16px] mt-[40px] opacity-0" id="hero-buttons">
                        <RunesButton className="w-3/5 lg:w-auto border-primary tab">
                            <span>WorkShop</span>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.3135 2C6.80348 2 2.31348 6.49 2.31348 12C2.31348 17.51 6.80348 22 12.3135 22C17.8235 22 22.3135 17.51 22.3135 12C22.3135 6.49 17.8235 2 12.3135 2ZM15.1035 12.53L11.5735 16.06C11.4235 16.21 11.2335 16.28 11.0435 16.28C10.8535 16.28 10.6635 16.21 10.5135 16.06C10.2235 15.77 10.2235 15.29 10.5135 15L13.5135 12L10.5135 9C10.2235 8.71 10.2235 8.23 10.5135 7.94C10.8035 7.65 11.2835 7.65 11.5735 7.94L15.1035 11.47C15.4035 11.76 15.4035 12.24 15.1035 12.53Z" fill="#FA0B0F" />
                            </svg>
                        </RunesButton>
                        <RunesButton className="w-3/5 lg:w-auto bg-transparent text-black border-primary px-[40px] ">Buy RBV</RunesButton>
                    </div>

                    <div className="flex items-center justify-center text-[#000000]">
                        <span className="font-poppins font-[600] lg:text-[24px] leading-[86px]">CA&nbsp;</span>
                        <span className="font-poppins font-[400] lg:text-[24px] leading-[86px]">sdfh89w4r52h324uo0sgh8su9pdgfesr</span>
                        <svg className="ml-2 cursor-pointer" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 13.9V16.9C17 20.9 15.4 22.5 11.4 22.5H7.6C3.6 22.5 2 20.9 2 16.9V13.1C2 9.1 3.6 7.5 7.6 7.5H10.6" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M17.0001 13.9H13.8001C11.4001 13.9 10.6001 13.1 10.6001 10.7V7.5L17.0001 13.9Z" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.6001 2.5H15.6001" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7 5.5C7 3.84 8.34 2.5 10 2.5H12.62" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21.9999 8.5V14.69C21.9999 16.24 20.7399 17.5 19.1899 17.5" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M22 8.5H19C16.75 8.5 16 7.75 16 5.5V2.5L22 8.5Z" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>

                <div className="relative">
                    <Planet />
                    <div className="absolute -right-[15%] md:-right-[5%] bottom-0 pb-[30px] hidden md:flex flex-col items-center cursor-pointer" onClick={moreExplorer}>
                        <div className="w-[90px] pr-[180px] font-conthrax font-600 text-[10px] leading-[12px] text-[#000000] whitespace-nowrap rotate-90 ">explore more</div>
                        <div className="">
                            <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 1C9 0.447715 8.55228 -2.41411e-08 8 0C7.44772 2.41411e-08 7 0.447715 7 1L9 1ZM7.29289 21.7071C7.68342 22.0976 8.31658 22.0976 8.70711 21.7071L15.0711 15.3431C15.4616 14.9526 15.4616 14.3195 15.0711 13.9289C14.6805 13.5384 14.0474 13.5384 13.6569 13.9289L8 19.5858L2.34315 13.9289C1.95262 13.5384 1.31946 13.5384 0.928933 13.9289C0.538408 14.3195 0.538408 14.9526 0.928933 15.3431L7.29289 21.7071ZM7 1L7 21L9 21L9 1L7 1Z" fill="#FA0B0F" />
                            </svg>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero;