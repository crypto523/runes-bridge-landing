import React, { useEffect } from "react";
import gsap from "gsap";
import SectionLayout from "./Layout";
import Image from "next/image";

interface AirdropProps {
}

const Airdrop: React.FC<AirdropProps> = () => {

    useEffect(() => {
        gsap.to("#airdrop", { opacity: 1, scaleX: 1, duration: 1 })
    })

    return (
        <div id="airdrop" className={`w-full md:h-screen flex-1 flex items-center p-5 pt-0 md:py-24 md:px-14 lg:px-10 lg:py-10 lg:portrait:overflow-auto lg:landscape:overflow-hidden`} style={{ opacity: 0 }}>
            <SectionLayout nextSection="STAKING">
                <div className={`w-full h-full flex-1 flex flex-col md:flex-col-reverse lg:flex-row-reverse lg:h-[75%] lg:flex-none items-center justify-evenly gap-4 px-5 pt-12 pb-11 md:pt-0 md:pb-[84px] lg:pb-0 lg:px-14 lg:portrait:flex-col-reverse`}>
                    <div className={`w-full flex items-center justify-center lg:landscape:w-[50%] pb-3`}>
                        <Image src="/parachute.svg" width={100} height={100} alt="launch" className={`w-1/2 md:w-1/3 lg:w-1/3`} />
                    </div>

                    <div className={`flex flex-col items-start gap-2.5 lg:landscape:w-[60%] xl:w-[50%]`}>
                        <h2 className="md:text-3xl md:leading-8 xl:text-4xl 2xl:text-5xl">
                            Airdrop Guild
                        </h2>
                        <div className="flex flex-col items-start gap-2 lg:gap-0 xl:gap-2 ">
                            <p className="md:text-base 2xl:text-lg">This is a facility designed to reward RBV holders with tokens “Powered by RunesBridge-V”.</p>
                            <p className="md:text-base 2xl:text-lg">The Airdrop Guild is a facility by which tokens are distributed to our community on a staggered, timed and tiered basis, this by design a way to secure a launch by carefully adding a large number of small wallets to a community. Airdrops are also by design made to discourage selling pressure, encourage long term holding and increase holder count and minimize the size of each holder. </p>
                        </div>
                    </div>
                </div>
            </SectionLayout>
        </div>
    )
}

export default Airdrop;
