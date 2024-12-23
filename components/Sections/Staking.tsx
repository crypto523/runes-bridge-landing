import React, { useEffect } from "react";
import Image from "next/image";

import SectionLayout from "./Layout";
import gsap from "gsap";

interface StakingProps {
}

const Staking: React.FC<StakingProps> = () => {

    useEffect(() => {
        gsap.to("#staking", { opacity: 1, scaleX: 1, duration: 1 })
    })

    return (
        <div id="staking" className={`w-full flex-1 p-5 pt-0 md:py-24 md:px-14 lg:px-10 lg:py-10 `} style={{ opacity: 0 }}>
            <SectionLayout nextSection="BRIDGE">
                <div className={`w-full h-full flex-1 flex flex-col gap-4 px-5 pt-12 pb-11 items-end justify-evenly md:pt-0 md:pb-[84px] md:px-14 lg:h-[75%] lg:portrait:px-10 lg:landscape:px-5 lg:portrait:pb-[10%] lg:landscape:pb-[7%] xl:px-10 2xl:px-28 2xl:landscape:flex-row 2xl:landscape:items-center`}>
                    <div className={`w-full hidden items-center justify-center lg:portrait:flex lg:landscape:hidden 2xl:landscape:flex 2xl:landscape:w-1/3`}>
                        <Image src="/chain.svg" width={100} height={100} alt="launch" className={`w-full md:w-1/2 lg:w-1/2 2xl:w-2/3`} />
                    </div>
                    <div className={`flex flex-col items-start gap-2.5 2xl:w-2/3`}>
                        <h2 className="md:text-3xl md:leading-8 xl:text-4xl 2xl:text-5xl">
                            Staking Forge
                        </h2>
                        <div className="flex flex-col items-start gap-2 ">
                            <div className="flex items-center 2xl:items-start">
                                <div className="lg:landscape:w-2/3 2xl:w-full">
                                    <p className="md:text-base 2xl:text-lg font-bold text-primary">Staking for Special Incentives</p>
                                    <p className="md:text-base 2xl:text-lg">This is a white-label staking facility allowing projects “Powered by RunesBridge-V” to offer staking to their community. </p>
                                    <p className="md:text-base 2xl:text-lg">This is designed to create a type of vampire attack where a community from a failed project is incentivized to join a new CTO version through an exclusive staking reward for whitelisted wallet addresses. </p>
                                    <p className="md:text-base 2xl:text-lg">For transparency, a copy of the table of whitelisted wallets and their corresponding reward eligibility will be published on our Discord for external scrutiny. </p>
                                    <p className="md:text-base 2xl:text-lg">Join our Discord and open a staking ticket to get started with staking for your community.</p>
                                </div>
                                <div className={`w-1/3 hidden items-center justify-center lg:landscape:flex 2xl:landscape:hidden`}>
                                    <Image src="/chain.svg" width={100} height={100} alt="launch" className={`w-2/3 2xl:w-1/4`} />
                                </div>
                            </div>
                            <div>
                                <p className="md:text-base 2xl:text-lg font-bold text-primary">Staking for RBV Agents</p>
                                <p className="md:text-base 2xl:text-lg">Staking is also utilized to ensure actors within the RBV Ecosystem post a security bond of value while performing tasks. </p>
                                <p className="md:text-base 2xl:text-lg">They then receive their returned bond along with additional tokens after completing their task. See the Taskboard for more information, or visit the Staking Forge section of our Discord and open a ticket to begin designing your staking program.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionLayout>
        </div>
    )
}

export default Staking;
// <div className={`w-full h-full flex-1 flex flex-col md:flex-col-reverse lg:flex-row-reverse lg:flex-none items-center justify-evenly gap-4 px-5 pt-12 pb-11 md:pt-0 md:pb-[84px] lg:pb-0 lg:portrait:flex-col-reverse`}>
//     <div className={`flex flex-col items-start gap-2.5 `}>
//         <h2 className="md:text-3xl md:leading-8 xl:text-4xl 2xl:text-5xl">
//             Staking Forge
//         </h2>
//         <div className="flex flex-col items-start gap-2 lg:gap-0 xl:gap-2 ">
//             <p className="md:text-base 2xl:text-lg">Staking for Special Incentives</p>
//             <p className="md:text-base 2xl:text-lg">This is a white-label staking facility allowing projects “Powered by RunesBridge-V” to offer staking to their community. </p>
//             <p className="md:text-base 2xl:text-lg">This is designed to create a type of vampire attack where a community from a failed project is incentivized to join a new CTO version through an exclusive staking reward for whitelisted wallet addresses. </p>
//             <p className="md:text-base 2xl:text-lg">For transparency, a copy of the table of whitelisted wallets and their corresponding reward eligibility will be published on our Discord for external scrutiny. </p>
//             <p className="md:text-base 2xl:text-lg">Join our Discord and open a staking ticket to get started with staking for your community.</p>
//             <p className="md:text-base 2xl:text-lg">Staking for RBV Agents</p>
//             <p className="md:text-base 2xl:text-lg">Staking is also utilized to ensure actors within the RBV Ecosystem post a security bond of value while performing tasks. </p>
//             <p className="md:text-base 2xl:text-lg">They then receive their returned bond along with additional tokens after completing their task. See the Taskboard for more information, or visit the Staking Forge section of our Discord and open a ticket to begin designing your staking program.</p>
//         </div>
//     </div>

// {/* <div className={`w-full flex items-center justify-center lg:landscape:w-1/3 pb-3`}>
//     <Image src="/chain.svg" width={100} height={100} alt="launch" className={`w-full md:w-1/2 lg:w-1/2`} />
// </div> */}
// </div>