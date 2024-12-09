import React from "react";
import SectionLayout from "./Layout";

const RBVToken: React.FC = () => {

    return (
        <SectionLayout>
            <div className="max-w-[1028px] w-full h-full flex flex-col items-center justify-center">
                <h2 className="font-poppins font-[600] text-[48px] text-[#061012] py-[24px]">RBV Token</h2>
                <div className="w-full flex items-center font-poppins font-[500] text-[24px] text-[#666666] border-[#C4C3CB] border-b-[0.8px]">
                    <div className="w-1/2 h-full flex items-center justify-end p-2 border-r-[0.8px]"><p className="p-2 w-fit text-right">Total 1,000,000,000   (1 Billion Tokens)</p></div>
                    <div className="w-1/2 h-full p-2 border-l-[0.8px]"><p className="p-2 w-fit text-right">Total Team Tokens 5%</p></div>
                </div>
                <div className="w-full flex items-center justify-center font-poppins font-[500] text-[24px] text-[#666666] border-[#C4C3CB] border-t-[0.8px]">
                    <div className="w-1/2 h-full flex items-center justify-end p-2 border-r-[0.8px]"><p className="w-fit">Total Treasury 600,000,000</p></div>
                    <div className="w-1/2 h-full p-2 border-l-[0.8px]"><p className="w-fit">Total Uniswap LP Seed 300,000,00</p></div>
                </div>
            </div>
        </SectionLayout>
    )
}

export default RBVToken;