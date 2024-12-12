import React from "react";
import Image from "next/image";

import SectionLayout from "./Layout";
import { Section } from "@/app/page";

interface StakingProps {
    showSection: (section: Section) => void;
}

const Staking: React.FC<StakingProps> = ({showSection}) => {

    return (
        <SectionLayout id="staking" showSection={showSection} nextSection="BRIDGE">
            <div className="w-full h-full flex items-center justify-between px-[100px]">
                <Image src="/chain.svg" width={382} height={420} alt="chain" style={{height: "auto"}} />
                <div className="flex flex-col items-start gap-[10px] max-w-[504px]">
                    <h2 className="font-poppins font-[600] text-[40px] leading-[86px] text-[#061012]">Staking Forge</h2>
                    <div className="font-inter font-[500] text-[16px] leading-[19.36px] text-[#727272]">
                        <p>- Staking for Special Incentives</p>
                        <p>This is a white-label staking facility allowing projects “Powered by RunesBridge-V” to offer staking to their community. This is designed to create a type of vampire attack where a community from a failed project is incentivized to join a new CTO version through an exclusive staking reward for whitelisted wallet addresses. For transparency, a copy of the table of whitelisted wallets and their corresponding reward eligibility will be published on our Discord for external scrutiny. Join our Discord and open a staking ticket to get started with staking for your community.</p>
                        <p>- Staking for RBV Agents</p>
                        <p>Staking is also utilized to ensure actors within the RBV Ecosystem post a security bond of value while performing tasks. They then receive their returned bond along with additional tokens after completing their task. See the Taskboard for more information, or visit the Staking Forge section of our Discord and open a ticket to begin designing your staking program.</p>
                    </div>
                </div>
            </div>
        </SectionLayout>
    )
}

export default Staking;