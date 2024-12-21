import React, { useEffect } from "react";
import gsap from "gsap";
import SectionLayout from "./Layout";
import UpBox from "../utils/UpBox";
import { ColorSquareFrameIcon, ColorSquareIcon, FormatSpuareIcon, FormatSquareFrameIcon, HierarchyIcon, MoneyReceiveFrameIcon, MoneyReceiveIcon, PeopleFrameIcon, PeopleIcon } from "../utils/Icons";
import { contents, titles } from "../utils/constants";
import DownBox from "../utils/DownBox";
import { Section } from "@/app/page";
import { Branch, Circles, Dollar, GradientLG, GradientMD, User, Users } from "../utils/Icon";

interface FeaturesProps {
    showSection: (section: Section) => void;
    hideSection: (section: Section) => void;
}

const Features: React.FC<FeaturesProps> = ({ showSection, hideSection }) => {

    useEffect(() => {
        gsap.to("#feature", { opacity: 1, scaleX: 1, duration: 1 })
    })

    return (
        <div id="feature" className={`w-full flex-1 p-5 pt-0 md:py-24 md:px-14 lg:px-10 lg:py-10 lg:portrait:overflow-auto lg:landscape:overflow-hidden`} style={{ opacity: 0 }}>
            <SectionLayout currentSection="FEATURE" nextSection="AIRDROP" hideSection={hideSection} showSection={showSection}>
                <div className={`w-full h-full flex-1 flex flex-col gap-4 px-5 pt-12 pb-11 items-end justify-evenly md:pt-0 md:pb-[84px] md:px-14 lg:h-[75%] lg:portrait:px-10 lg:landscape:px-5 lg:portrait:pb-[10%] lg:landscape:pb-[5%] xl:px-10 2xl:px-28 `}>
                    <div className={`flex flex-col items-start gap-4 md:hidden lg:portrait:flex lg:portrait:w-full lg:portrait:max-w-[900px]`}>
                        <h2 className="w-full mt-8 mb-0 md:text-3xl md:leading-8 md:text-right lg:text-4xl 2xl:text-5xl">
                            V Says Welcome Home
                        </h2>
                        <div className="w-full flex flex-col items-start gap-2">
                            <p className="w-full md:text-base 2xl:text-lg md:text-right">We welcome Community Takeover projects—or really any project that wants our support to launch the right way. The first CTO projects will be launched between December 2024 and January 2025.</p>
                        </div>
                    </div>
                    <div className={`w-full grid grid-cols-2 gap-2.5 pb-4 md:pt-4 md:grid-cols-12 lg:portrait:gap-5 lg:landscape:grid-cols-8`}>
                        <UpBox icon={Users} image={GradientMD} title={titles.COMMUNITYBUILDING} content={contents.COMMUNITYBUILDING} className="hidden md:flex md:col-span-6 lg:landscape:col-span-3" />
                        <UpBox icon={Circles} image={GradientMD} title={titles.INFRASTRUCTURETOOLS} content={contents.INFRASTRUCTURETOOLS} className="md:col-span-6 lg:landscape:col-span-3" />
                        <UpBox icon={Dollar} image={GradientMD} title={titles.FINANCIALSUPPORT} content={contents.FINANCIALSUPPORT} className="md:col-span-6 lg:landscape:col-span-2 lg:landscape:col-start-1"/>
                        <UpBox icon={Branch} image={GradientMD} title={titles.ADVISORYNETWORK} content={contents.ADVISORYNETWORK} className="md:col-span-6 lg:landscape:col-span-2"/>
                        {/* <div className={`w-full h-full hidden md:flex flex-col justify-between border-[#6262624D] border-[1px] px-3.5 py-4 md:px-10 md:py-10 lg:landscape:col-span-3 lg:px-5 lg:py-5 lg:landscape:px-2 lg:landscape:py-2 xl:landscape:px-5 xl:landscape:py-5 2xl:landscape:px-10 2xl:landscape:py-10 bg-[#F6F5F54D]`}>
                            <div>
                                <h3 className={`md:text-2xl`}>{titles.MARKETINGSUPPORT}</h3>
                                <p className="font-inter font-normal text-[10px] leading-3 text-secondary md:text-base">{contents.MARKETINGSUPPORT}</p>
                            </div>
                            <div className="w-full flex items-center justify-end lg:landscape:hidden">
                                <GradientMD className="md:pt-10 md:pb-3" />
                            </div>
                            <div className="w-full flex items-center justify-end">
                                <MarketingIcon className="w-60 h-24 lg:landscape:w-40 lg:landscape:h-16 xl:landscape:h-20 2xl:landscape:h-24 2xl:landscape:w-64" />
                            </div>
                        </div> */}
                        <UpBox icon={User} image={GradientMD} title={titles.USERENGAGEMENT} content={contents.USERENGAGEMENT} className="md:col-span-12 lg:landscape:col-span-4" />
                    </div>
                </div>
            </SectionLayout>
        </div>
    )
}

export default Features;
// <SectionLayout showSection={showSection} nextSection="AIRDROP" hideSection={hideSection} currentSection="FEATURE">
//     <div className="w-full h-full flex-1 flex flex-col items-start justify-evenly">
//         <div className="w-full flex gap-[1.8vw] px-[3vw]">
//             <div className="table-cell">
//                 <UpBox icon={FormatSpuareIcon} image={FormatSquareFrameIcon} title={titles.COMMUNITYBUILDING} content={contents.COMMUNITYBUILDING} />
//             </div>
//             <div className="table-cell">
//                 <DownBox icon={ColorSquareIcon} image={ColorSquareFrameIcon} title={titles.INFRASTRUCTURETOOLS} content={contents.INFRASTRUCTURETOOLS} background="/infra_bg.svg" />
//             </div>
//         </div>
//         <div className="w-full flex gap-[1.8vw] px-[3vw]">
//             <div className="table-cell">
//                 <UpBox icon={MoneyReceiveIcon} image={MoneyReceiveFrameIcon} title={titles.FINANCIALSUPPORT} content={contents.FINANCIALSUPPORT} />
//             </div>
//             <div className="table-cell max-w-[263px]">
//                 <DownBox icon={HierarchyIcon} image={MoneyReceiveFrameIcon} title={titles.ADVISORYNETWORK} content={contents.ADVISORYNETWORK} />
//             </div>
//             <div className="table-cell flex-1">
//                 <UpBox icon={PeopleIcon} image={PeopleFrameIcon} title={titles.USERENGAGEMENT} content={contents.USERENGAGEMENT} />
//             </div>
//         </div>
//     </div>
// </SectionLayout>