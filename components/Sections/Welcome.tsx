import React, { useEffect } from "react";
import gsap from "gsap";
import { useAppContext } from "@/context/AppContext";
import SectionLayout from "./Layout";
import UpBox from "../utils/UpBox";
import { GradientLG, GradientMD, GradientSM, Lock, MarketingIcon, Users, VCoin } from "../utils/Icon";
import { contents, titles } from "../utils/constants";

interface WelcomeProps {
}

const Welcome: React.FC<WelcomeProps> = () => {
    const { orientation } = useAppContext();

    useEffect(() => {
        gsap.to("#welcome", { opacity: 1, scaleX: 1, duration: 1 })
    })

    return (
        <div id="welcome" className={`w-full flex-1 p-5 pt-0 md:py-24 md:px-14 lg:px-10 lg:py-10 ${orientation === "portrait" ? 'lg:overflow-auto' : 'lg:overflow-hidden'}`} style={{ opacity: 0 }}>
            <SectionLayout nextSection="FEATURE" ltr={false}>
                <div className={`w-full h-full flex-1 flex flex-col gap-4 px-5 pt-12 pb-11 items-end justify-evenly md:pt-0 md:pb-[84px] md:px-14 lg:px-5 lg:pb-[10%] xl:px-10 2xl:px-28 xl:h-[75%]`}>
                    <div className={`flex flex-col items-start gap-4 ${orientation === "portrait" ? '' : 'lg:w-full lg:max-w-[900px]'}`}>
                        <h2 className="w-full mt-8 mb-0 md:text-3xl md:leading-8 md:text-right lg:text-4xl 2xl:text-5xl">
                            V Says Welcome Home
                        </h2>
                        <div className="w-full flex flex-col items-start gap-2">
                            <p className="w-full md:text-base 2xl:text-lg md:text-right">We welcome Community Takeover projects—or really any project that wants our support to launch the right way. The first CTO projects will be launched between December 2024 and January 2025.</p>
                        </div>
                    </div>
                    <div className={`w-full grid grid-cols-2 gap-2.5 md:gap-5 lg:gap-1.5 xl:gap-5 2xl:gap-10 pb-4 lg:landscape:grid-cols-11`}>
                        <UpBox icon={VCoin} image={GradientLG} title={titles.WIDEDISTRIBUTION} content={contents.WIDEDISTRIBUTION} className={`md:col-span-2 md:pr-32 lg:landscape:col-span-5 lg:landscape:px-5`} />
                        <UpBox icon={Lock} image={GradientMD} title={titles.LAUNCHSECURITY} content={contents.LAUNCHSECURITY} className="lg:landscape:col-span-3" />
                        <UpBox image={MarketingIcon} title={titles.MARKETINGSUPPORT} content={contents.MARKETINGSUPPORT} className="md:hidden" />
                        <div className={`w-full h-full hidden md:flex flex-col justify-between border-[#6262624D] border-[1px] px-3.5 py-4 md:px-10 md:py-10 lg:landscape:col-span-3 lg:px-5 lg:py-5 lg:landscape:px-2 lg:landscape:py-2 xl:landscape:px-5 xl:landscape:py-5 2xl:landscape:px-10 2xl:landscape:py-10 bg-[#F6F5F54D]`}>
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
                        </div>
                        <UpBox icon={Users} image={GradientSM} title={titles.COMMUNITYBUILDING} content={contents.COMMUNITYBUILDING} className="md:hidden" />
                    </div>
                </div>
            </SectionLayout>
        </div>
    )
}

export default Welcome;