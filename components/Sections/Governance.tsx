import React from "react";
import Image from "next/image";

import SectionLayout from "./Layout";
import { Section } from "@/app/page";

interface GovernanceProps {
    showSection: (section: Section) => void;
    hideSection: (section: Section) => void;
}

const Governance: React.FC<GovernanceProps> = ({showSection, hideSection}) => {

    return (
        <SectionLayout showSection={showSection} hideSection={hideSection} nextSection="TASKBOARD" currentSection="GOVERNANCE">
            <div className="w-full h-full flex items-center justify-between px-[45px]">
                <div className="max-w-[500px] w-full h-full flex flex-col items-center justify-start gap-4">
                    <div className="flex flex-col items-start gap-[10px]">
                        <h2 className="font-poppins font-[600] text-[32px] leading-[86px] text-[#061012]">CTO Governance</h2>
                        <p className="font-inter font-[500] text-[16px] leading-[19.36px] text-[#444444]">It’s important to get a CTO right and part of long term success is raising revenue for a project and maintaining a project treasury but this must be handled in a manner which protects the community from catastrophic loss. We help to offer solutions to secure assets and institute decentralization.</p>
                    </div>
                    <Image src="/blocks.svg" width={275} height={275} alt="blocks" style={{ height: "auto" }} />
                </div>
                <div className="max-w-[500px] flex flex-col items-start gap-[10px]">
                    <h2 className="font-poppins font-[600] text-[32px] leading-[86px] text-[#061012]">RBV Governance</h2>
                    <p className="font-inter font-[500] text-[16px] leading-[19.36px] text-[#444444]">V is deeply committed to governance and is developing a robust, trustless system that involves elected members, rotating keys, and a formal decision making process. This system is designed to ensure that the project&apos;s direction constantly aligns with and engages the community and the broader crypto space.
                        In the meantime, the treasury and all wallets are maintained using a system of multisig protocols with redundancy measures for lost or compromised keys.</p>
                </div>
            </div>
        </SectionLayout>
    )
}

export default Governance;