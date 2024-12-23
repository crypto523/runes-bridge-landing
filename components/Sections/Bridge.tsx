import React, { useEffect } from "react";
import gsap from "gsap";
import SectionLayout from "./Layout";
import Planet from "../Planet/Planet";
import { useAppContext } from "@/context/AppContext";

interface BridgeProps {
}

const Bridge: React.FC<BridgeProps> = () => {
  const { isMobile } = useAppContext();

  useEffect(() => {
    gsap.to("#bridge", { opacity: 1, scaleX: 1, duration: 1 })
  })

  return (
    <div id="bridge" className={`w-full md:h-screen flex-1 flex items-center p-5 pt-0 md:py-24 md:px-14 lg:px-10 lg:py-10 lg:portrait:overflow-auto lg:landscape:overflow-hidden`} style={{ opacity: 0 }}>
      <SectionLayout ltr={false} nextSection={isMobile ? "CTOGOVERNANCE" : "GOVERNANCE"}>
        <div className={`w-full h-full flex-1 flex flex-col md:flex-col-reverse lg:flex-row-reverse lg:h-[75%] lg:flex-none items-center justify-evenly gap-4 px-5 pt-12 pb-11 md:pt-0 md:pb-[84px] lg:pb-0 lg:portrait:flex-col-reverse`}>
          <div className={`flex flex-col items-start gap-2.5 lg:landscape:w-[60%] xl:w-[50%]`}>
            <h2 className="md:text-3xl md:leading-8 xl:text-4xl 2xl:text-5xl">
              Bridge
            </h2>
            <div className="flex flex-col items-start gap-2 lg:gap-0 xl:gap-2 ">
              <p className="md:text-base 2xl:text-lg">Just like the namesake RunesBridge project we offer bridge facilities between Runes and Ethereum and shortly after launch we will have a facility between Solana and Ethereum. Join us on discord and open up a bridge ticket to ask for token integration for our bridge or to address any technical or other questions about cross chain bridge transactions.</p>
            </div>
          </div>

          <div className={`w-full flex items-center justify-center md:w-2/3 lg:landscape:w-[50%]`}>
            <Planet class="!opacity-1 translate-y-0 scale-50 md:scale-100 lg:landscape:scale-50 xl:scale-75 -z-10" />
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default Bridge;
