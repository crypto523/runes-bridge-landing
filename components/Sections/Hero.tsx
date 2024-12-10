'use client'

import React, { useEffect } from "react"
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import RunesButton from "../utils/Button";
import Planet from "../Planet/Planet";
import gsap from "gsap";

const Hero: React.FC = () => {
    useEffect(() => {
        const animation = gsap.timeline();
        animation
            .to(
                "div#banner",
                {
                    opacity: 1,
                    translateY: 0,
                    duration: 2,
                },
                "<"
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

    return (
        <section className="w-full h-full" id="hero" style={{ backgroundImage: `url("bg-grid.svg")` }}>
            <Navbar />
            <Banner />

            <div className="flex items-center justify-center gap-[16px] mt-[40px] opacity-0" id="hero-buttons">
                <RunesButton className="border-[#061012]">
                    <span>WorkShop</span>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.3135 2C6.80348 2 2.31348 6.49 2.31348 12C2.31348 17.51 6.80348 22 12.3135 22C17.8235 22 22.3135 17.51 22.3135 12C22.3135 6.49 17.8235 2 12.3135 2ZM15.1035 12.53L11.5735 16.06C11.4235 16.21 11.2335 16.28 11.0435 16.28C10.8535 16.28 10.6635 16.21 10.5135 16.06C10.2235 15.77 10.2235 15.29 10.5135 15L13.5135 12L10.5135 9C10.2235 8.71 10.2235 8.23 10.5135 7.94C10.8035 7.65 11.2835 7.65 11.5735 7.94L15.1035 11.47C15.4035 11.76 15.4035 12.24 15.1035 12.53Z" fill="#FA0B0F" />
                    </svg>
                </RunesButton>
                <RunesButton className="bg-transparent text-black border-[#061012] px-[40px] ">Buy RBV</RunesButton>
            </div>

            <div className="flex items-center justify-center text-[#000000]">
                <span className="font-poppins font-[600] text-[24px] leading-[86px]">CA&nbsp;</span>
                <span className="font-poppins font-[400] text-[24px] leading-[86px]">sdfh89w4r52h324uo0sgh8su9pdgfesr</span>
                <svg className="ml-2 cursor-pointer" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 13.9V16.9C17 20.9 15.4 22.5 11.4 22.5H7.6C3.6 22.5 2 20.9 2 16.9V13.1C2 9.1 3.6 7.5 7.6 7.5H10.6" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17.0001 13.9H13.8001C11.4001 13.9 10.6001 13.1 10.6001 10.7V7.5L17.0001 13.9Z" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.6001 2.5H15.6001" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7 5.5C7 3.84 8.34 2.5 10 2.5H12.62" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21.9999 8.5V14.69C21.9999 16.24 20.7399 17.5 19.1899 17.5" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 8.5H19C16.75 8.5 16 7.75 16 5.5V2.5L22 8.5Z" stroke="#707070" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

            <Planet />
        </section>
    )
}

export default Hero;