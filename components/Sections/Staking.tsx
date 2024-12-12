import React from "react";
import Image from "next/image";

import SectionLayout from "./Layout";
import { Section } from "@/app/page";

interface StakingProps {
    showSection: (section: Section) => void;
    hideSection: (section: Section) => void;
}

const Staking: React.FC<StakingProps> = ({ showSection, hideSection }) => {

    return (
        <div id="staking" className="absolute top-0 w-[100vw] h-[100vh]">
            <SectionLayout showSection={showSection} nextSection="BRIDGE" currentSection="STAKING" hideSection={hideSection}>
                <div className="w-full flex-1 flex items-center justify-around">
                    <Image src="/chain.svg" width={382} height={420} alt="chain" style={{ height: "60vh", width: "auto" }} />
                    <div className="flex flex-col items-start gap-[10px] max-w-[504px]">
                        <h2 className="font-poppins font-[600] text-[6vh] text-[#061012]">Staking Forge</h2>
                        <div className="font-inter font-[500] text-[2vh] leading-[19.36px] text-[#727272]">
                            <p>- Staking for Special Incentives</p>
                            <p>This is a white-label staking facility allowing projects “Powered by RunesBridge-V” to offer staking to their community. This is designed to create a type of vampire attack where a community from a failed project is incentivized to join a new CTO version through an exclusive staking reward for whitelisted wallet addresses. For transparency, a copy of the table of whitelisted wallets and their corresponding reward eligibility will be published on our Discord for external scrutiny. Join our Discord and open a staking ticket to get started with staking for your community.</p>
                            <p>- Staking for RBV Agents</p>
                            <p>Staking is also utilized to ensure actors within the RBV Ecosystem post a security bond of value while performing tasks. They then receive their returned bond along with additional tokens after completing their task. See the Taskboard for more information, or visit the Staking Forge section of our Discord and open a ticket to begin designing your staking program.</p>
                        </div>
                    </div>
                </div>
            </SectionLayout>
        </div>
    )
}

export default Staking;