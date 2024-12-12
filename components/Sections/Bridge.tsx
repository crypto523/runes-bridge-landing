import React from "react";
import SectionLayoutF from "./LayoutF";
import Planet from "../Planet/Planet";
import { Section } from "@/app/page";

interface BridgeProps {
  showSection: (section: Section) => void;
  hideSection: (section: Section) => void;
}

const Bridge: React.FC<BridgeProps> = ({ showSection, hideSection }) => {
  return (
    <div id="bridge" className="absolute top-0 w-[100vw] h-[100vh]">
      <SectionLayoutF currentSection="BRIDGE" nextSection="GOVERNANCE" showSection={showSection} hideSectioin={hideSection}>
        <div className="w-full flex-1 flex items-center justify-around">
          <div className="max-w-[504px] flex flex-col">
            <h2 className="font-poppins font-[600] text-[40px] leading-[86px] text-[#061012]">
              Bridge
            </h2>
            <p className="max-w-[504px] text-[#727272] font-inter font-[500] text-[16px] leading-[19.36px]">
              Just like the namesake RunesBridge project we offer bridge
              facilities between Runes and Ethereum and shortly after launch we
              will have a facility between Solana and Ethereum. Join us on discord
              and open up a bridge ticket to ask for token integration for our
              bridge or to address any technical or other questions about cross
              chain bridge transactions.
            </p>
          </div>
          <div className="h-[60vh] w-[60vh] flex items-center justify-center">
            <Planet class="!opacity-1 translate-y-0 scale-75 -z-10" />
          </div>
        </div>
      </SectionLayoutF>
    </div>
  );
};

export default Bridge;
