import React, { useEffect } from "react";
import SectionLayout from "./Layout";
import gsap from "gsap";

interface RBVTokenProps {
}

const RBVToken: React.FC<RBVTokenProps> = () => {

    useEffect(() => {
        gsap.to("#rbv", { opacity: 1, scaleX: 1, duration: 1 })
    })

    return (
        <div id="rbv" className={`w-full md:h-screen flex-1 flex items-center p-5 pt-0 md:py-24 md:px-14 lg:px-10 lg:py-10 lg:portrait:overflow-auto lg:landscape:overflow-hidden`} style={{ opacity: 0 }}>
            <SectionLayout nextSection="RBVTOKEN">
                <div className="w-2/3 flex-1 flex flex-col items-center justify-center">
                    <h2 className="font-poppins font-[600] text-[48px] text-primary mb-7">RBV Token</h2>
                    <div className="w-full flex items-center font-poppins font-[500] text-[24px] text-[#666666] border-[#C4C3CB] border-b-[0.8px]">
                        <div className="w-1/2 h-full flex items-center justify-end p-2 border-r-[0.8px]"><p className="p-2 w-fit text-right">Total 1,000,000,000 <span className="text-nowrap">(1 Billion Tokens)</span></p></div>
                        <div className="w-1/2 h-full p-2 border-l-[0.8px]"><p className="p-2 w-fit ">Total Team Tokens 5%</p></div>
                    </div>
                    <div className="w-full flex items-center justify-center font-poppins font-[500] text-[24px] text-[#666666] border-[#C4C3CB] border-t-[0.8px]">
                        <div className="w-1/2 h-full flex items-center justify-end p-2 border-r-[0.8px]"><p className="p-2 w-fit text-right">Total Treasury 600,000,000</p></div>
                        <div className="w-1/2 h-full p-2 border-l-[0.8px]"><p className="p-2 w-fit ">Total Uniswap LP Seed 300,000,00</p></div>
                    </div>
                </div>
            </SectionLayout>
        </div>
    )
}

export default RBVToken;