import React, { useEffect } from "react";
import SectionLayout from "./Layout";
import gsap from "gsap";
import { Weight } from "../utils/Icon";
import { useAppContext } from "@/context/AppContext";

interface RBVGovProps {
}

const RBVGovernance: React.FC<RBVGovProps> = () => {
    const { orientation } = useAppContext();

    useEffect(() => {
        gsap.to("#rbvgovernance", { opacity: 1, scaleX: 1, duration: 1 });
    });

    return (
        <div id="rbvgovernance" className={`lg:landscape:hidden w-full md:h-screen flex-1 flex items-center p-5 pt-0 md:py-24 md:px-14 lg:px-10 lg:py-10 ${orientation === "portrait" ? 'lg:overflow-auto' : 'lg:overflow-hidden'}`} style={{ opacity: 0 }}>
            <SectionLayout ltr={false} nextSection="TASKBOARD">

                <div className={`w-full h-full flex-1 flex flex-col md:flex-col-reverse lg:flex-row-reverse lg:h-[75%] lg:flex-none items-center justify-evenly gap-4 px-5 pt-12 pb-11 md:pt-0 md:pb-[84px] lg:pb-0 ${orientation === "portrait" ? 'lg:flex-col-reverse' : ''}`}>
                    <div className={`flex flex-col items-start gap-2.5 ${orientation === "portrait" ? '' : 'lg:w-[60%]'} xl:w-[50%]`}>
                        <h2 className="md:text-3xl md:leading-8 xl:text-4xl 2xl:text-5xl">
                            RBV Governance
                        </h2>
                        <div className="flex flex-col items-start gap-2 lg:gap-0 xl:gap-2 ">
                            <p className="md:text-base 2xl:text-lg">V is deeply committed to governance and is developing a robust, trustless system that involves elected members, rotating keys, and a formal decision making process.
                                This system is designed to ensure that the project&lsquo;s direction constantly aligns with and engages the community and the broader crypto space.</p>
                            <p className="md:text-base 2xl:text-lg">In the meantime, the treasury and all wallets are maintained using a system of multisig protocols with redundancy measures for lost or compromised keys.</p>
                        </div>
                    </div>

                    <div className={`w-full flex items-center justify-center ${orientation === "portrait" ? '' : 'lg:w-[50%]'}`}>
                        <Weight className={`w-full md:w-1/2 ${orientation === "portrait" ? 'lg:w-2/3' : 'lg:w-2/3'}`} />
                    </div>
                </div>

            </SectionLayout>
        </div>
    );
};

export default RBVGovernance;
