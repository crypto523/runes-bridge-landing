import React, { useEffect } from "react";
import Image from "next/image";

import SectionLayout from "./Layout";
import gsap from "gsap";
import { Bank, Weight } from "../utils/Icon";

interface GovernanceProps {
}

const Governance: React.FC<GovernanceProps> = () => {

    useEffect(() => {
        gsap.to("#governance", { opacity: 1, scaleX: 1, duration: 1 })
    })

    return (
        <div id="governance" className={`w-full md:h-screen flex-1 flex items-center p-5 pt-0 md:py-24 md:px-14 lg:px-10 lg:py-10 lg:portrait:overflow-auto lg:landscape:overflow-hidden}`} style={{ opacity: 0 }}>
            <SectionLayout nextSection="TASKBOARD">
                <div className="w-full h-full grid justify-evenly md:grid-cols-1 lg:landscape:grid-cols-2 lg:gap-2.5 md:px-5 md:pt-0 md:pb-[84px]">
                    <div className="w-full p-2 grid md:grid-cols-3 lg:portrait:grid-cols-2 lg:landscape:grid-cols-1 xl:landscape:p-5">
                        <div className={`md:col-span-2 lg:portrait:col-span-1 flex flex-col items-start justify-center`}>
                            <h2 className="md:text-3xl md:leading-8 xl:text-4xl 2xl:text-5xl">
                                CTO Governance
                            </h2>
                            <div className="flex flex-col items-start gap-2 lg:gap-0 xl:gap-2 ">
                                <p className="md:text-base 2xl:text-lg">When launching a CTO project it’s important to get it right. Raising revenue and maintaining a treasury is integral to it&apos;s long term success, and must be handled in a manner which protects the community from catastrophic loss.</p>
                            </div>
                        </div>
                        <div className={`col-span-1 flex items-center justify-center`}>
                            <Bank className={`w-2/3 lg:w-1/3 2xl:w-2/3`} />
                        </div>
                    </div>
                    <div className="w-full p-2 grid md:grid-cols-3 lg:portrait:grid-cols-2 lg:landscape:grid-cols-1 xl:landscape:p-5">
                        <div className={`col-span-1 flex items-center justify-center lg:landscape:hidden 2xl:flex`}>
                            <Weight className={`w-2/3 lg:w-1/3 2xl:w-2/3`} />
                        </div>
                        <div className={`md:col-span-2 lg:portrait:col-span-1 flex flex-col items-start justify-center`}>
                            <h2 className="md:text-3xl md:leading-8 xl:text-4xl 2xl:text-5xl">
                                RBV Governance
                            </h2>
                            <div className="flex flex-col items-start gap-2 lg:gap-0 xl:gap-2 ">
                                <p className="md:text-base 2xl:text-lg">V is deeply committed to governance and is developing a robust, trustless system that involves elected members, rotating keys, and a formal decision making process. This system is designed to ensure that the project&apos;s direction constantly aligns with and engages the community and the broader crypto space.</p>
                                <p className="md:text-base 2xl:text-lg">In the meantime, the treasury and all wallets are maintained using a system of multisig protocols with redundancy measures for lost or compromised keys.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionLayout>
        </div>
    )
}

export default Governance;
