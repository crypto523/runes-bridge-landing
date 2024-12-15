import React, { useEffect } from "react";
import Image from "next/image";

import SectionLayout from "./Layout";
import { Section } from "@/app/page";
import gsap from "gsap";

interface GovernanceProps {
    showSection: (section: Section) => void;
    hideSection: (section: Section) => void;
}

const Governance: React.FC<GovernanceProps> = ({ showSection, hideSection }) => {

    useEffect(() => {
        gsap.to("#governance", { opacity: 1, scaleX: 1, duration: 1 })
    })

    return (
        <div id="governance" className="absolute top-0 w-[100vw] h-[100vh] opacity-0">
            <SectionLayout showSection={showSection} hideSection={hideSection} nextSection="TASKBOARD" currentSection="GOVERNANCE">
                <div className="w-full flex-1 flex items-center justify-around">
                    <div className="max-w-[500px] w-[35vw] h-full flex flex-col items-center justify-evenly">
                        <div className="flex flex-col items-start gap-[10px]">
                            <h2 className="font-poppins font-[600] text-[32px] text-primary">CTO Governance</h2>
                            <p className="font-inter font-[500] text-[16px] leading-[19.36px] text-secondary">When launching a CTO project it’s important to get it right. Raising revenue and maintaining a treasury is integral to it&apos;s long term success, and must be handled in a manner which protects the community from catastrophic loss.</p>
                        </div>
                        <Image src="/blocks.svg" width={275} height={275} alt="blocks" style={{ height: "30vh", width: "auto" }} />
                    </div>
                    <div className="max-w-[500px] w-[35vw] flex flex-col items-start gap-[10px]">
                        <h2 className="font-poppins font-[600] text-[32px] text-primary">RBV Governance</h2>
                        <p className="font-inter font-[500] text-[16px] leading-[19.36px] text-secondary">V is deeply committed to governance and is developing a robust, trustless system that involves elected members, rotating keys, and a formal decision making process. This system is designed to ensure that the project&apos;s direction constantly aligns with and engages the community and the broader crypto space.
                            In the meantime, the treasury and all wallets are maintained using a system of multisig protocols with redundancy measures for lost or compromised keys.</p>
                    </div>
                </div>
            </SectionLayout>
        </div>
    )
}

export default Governance;