import React, { useEffect } from "react";
import SectionLayout from "./Layout";
import gsap from "gsap";
import { Bank } from "../utils/Icon";
import { useAppContext } from "@/context/AppContext";

interface CTOGovProps {
}

const CTOGovernance: React.FC<CTOGovProps> = () => {
  const { orientation } = useAppContext();

  useEffect(() => {
    gsap.to("#ctogovernance", { opacity: 1, scaleX: 1, duration: 1 });
  });

  return (
    <div id="ctogovernance" className={`w-full md:h-screen flex-1 flex items-center p-5 pt-0 md:py-24 md:px-14 lg:px-10 lg:py-10 ${orientation === "portrait" ? 'lg:overflow-auto' : 'lg:overflow-hidden'}`} style={{ opacity: 0 }}>
      <SectionLayout nextSection="RBVGOVERNANCE">

        <div className={`w-full h-full flex-1 flex flex-col md:flex-col-reverse lg:flex-row-reverse lg:h-[75%] lg:flex-none items-center justify-evenly gap-4 px-5 pt-12 pb-11 md:pt-0 md:pb-[84px] lg:pb-0 ${orientation === "portrait" ? 'lg:flex-col-reverse' : ''}`}>
          <div className={`flex flex-col items-start gap-2.5 ${orientation === "portrait" ? '' : 'lg:w-[60%]'} xl:w-[50%]`}>
            <h2 className="md:text-3xl md:leading-8 xl:text-4xl 2xl:text-5xl">
              CTO Governance
            </h2>
            <div className="flex flex-col items-start gap-2 lg:gap-0 xl:gap-2 ">
              <p className="md:text-base 2xl:text-lg">It’s important to get a CTO right and part of long term success is raising revenue for a project and maintaining a project treasury but this must be handled in a manner which protects the community from catastrophic loss. We help to offer solutions to secure assets and institute decentralization.</p>
            </div>
          </div>

          <div className={`w-full flex items-center justify-center ${orientation === "portrait" ? '' : 'lg:w-[50%]'}`}>
            <Bank className={`w-full md:w-1/2 ${orientation === "portrait" ? 'lg:w-2/3' : 'lg:w-2/3'}`}/>
          </div>
        </div>

      </SectionLayout>
    </div>
  );
};

export default CTOGovernance;
