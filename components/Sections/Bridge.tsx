import React from "react";
import SectionLayoutF from "./LayoutF";
import Planet from "../Planet/Planet";

const Bridge: React.FC = () => {
  return (
    <SectionLayoutF>
      <div className="w-full h-full flex items-center justify-between pl-[4vw]">
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
        <Planet class="!opacity-1 translate-y-0 scale-75" />
      </div>
    </SectionLayoutF>
  );
};

export default Bridge;
