import React from "react";
import SectionLayoutF from "./LayoutF";

const Airdrop: React.FC = () => {

    return (
        <SectionLayoutF>
            <div className="w-full h-full flex items-center justify-between p-[6vw] pt-[2vw]">
                <p className="max-w-[504px] text-[#727272] font-inter font-[500] text-[16px] leading-[19.36px]">
                    This is a facility designed to reward RBV holders with tokens “Powered by RunesBridge-V”. <br />
                    The Airdrop Guild is a facility by which tokens are distributed to our community on a staggered, timed and tiered basis, this by design a way to secure a launch by carefully adding a large number of small wallets to a community. Airdrops are also by design made to discourage selling pressure, encourage long term holding and increase holder count and minimize the size of each holder.
                </p>
                <div className="w-auto h-auto flex flex-col items-center justify-center gap-5">
                    <h2 className="font-poppins font-[600] text-[40px] leading-[86px] text-[#061012]">Airdrop Guild</h2>
                    <svg width="186" height="286" viewBox="0 0 186 286" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <rect width="186" height="286" fill="url(#pattern0_467_23155)" />
                        <defs>
                            <pattern id="pattern0_467_23155" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlinkHref="#image0_467_23155" transform="scale(0.00251256 0.00163404)" />
                            </pattern>
                            <image id="image0_467_23155" width="398" height="612" xlinkHref="data:image/png;base64,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" />
                        </defs>
                    </svg>
                </div>
            </div>
        </SectionLayoutF>
    )
}

export default Airdrop;