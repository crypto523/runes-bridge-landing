"use client";

import { useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/all";

import Loading from "@/components/Loading/Loading";
import LoadingV from "@/components/Loading/LoadingV";
import Hero from "@/components/Sections/Hero";
import CTOLabs from "@/components/Sections/CTOLabs";
import Features from "@/components/Sections/Features";
import Staking from "@/components/Sections/Staking";
import Governance from "@/components/Sections/Governance";
import RBVToken from "@/components/Sections/RBVToken";
import Welcome from "@/components/Sections/Welcome";
import Airdrop from "@/components/Sections/Airdrop";
import Bridge from "@/components/Sections/Bridge";
import Taskboard from "@/components/Sections/TaskBoard";
import { BuildingIcon, CertIcon, ColorSquareIcon, CubeConvertIcon, HierarchyIcon, MoneyReceiveFrameIcon, PeopleIcon, ShieldTickIcon, WalletIcon } from "@/components/utils/Icons";
import { contents, titles } from "@/components/utils/constants";
import MobileBox from "@/components/utils/MobileBox";
import Planet from "@/components/Planet/Planet";
import Navbar from "@/components/Navbar/Navbar";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(TextPlugin);
}

export type Section = "HERO" | "LABS" | "WELCOME" | "AIRDROP" | "FEATURE" | "BRIDGE" | "STAKING" | "GOVERNANCE" | "TASKBOARD" | "RBV" | "NONE"

export default function Home() {
  const [preloading, setPreloading] = useState<boolean>(true);
  const [vLoading, setVLoading] = useState<boolean>(false);
  const [viewSection, setViewSection] = useState<Section>("NONE");

  const sections: Section[] = ["HERO", "LABS", "WELCOME", "FEATURE", "AIRDROP", "STAKING", "BRIDGE", "GOVERNANCE", "TASKBOARD", "RBV"];

  const showSection = (section: Section) => {
    setViewSection(section);
  }

  const hideSection = (section: Section) => {
    
  };

  const navigateSection = (direction: number, currentSection: Section) => {
    const currentIndex = sections.indexOf(currentSection);

    let tartgetIndex: number;
    if (direction === 1) {
      tartgetIndex = (currentIndex + 1) % sections.length;
    } else {
      tartgetIndex = (currentIndex + sections.length - 1) % sections.length;
    }

    if (currentSection === "HERO") {
      const animation = gsap
        .timeline()
        .to("#up", { translateY: -400, opacity: 0, duration: 2 })
        .to("#planet", {
          translateY: 400, opacity: 0, duration: 2, onComplete: () => {
            showSection(sections[tartgetIndex]);
          }
        }, "<");
    } else {
      const ID = currentSection.toLocaleLowerCase();
      const animation = gsap
        .timeline()
        .to(`#${ID}`, {
          scaleX: 0, opacity: 0, duration: 1, onComplete: () => {
            showSection(sections[tartgetIndex]);
          }
        });
      }
  }

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    const container = event.currentTarget;

    const isAtTop = container.scrollTop === 0;
    const isAtBottom = container.scrollHeight - container.scrollTop === container.clientHeight;

    if (isAtTop && event.deltaY < 0) {
      // Scrolling up at the top
      navigateSection(-1, viewSection);
    } else if (isAtBottom && event.deltaY > 0) {
      // Scrolling down at the bottom
      navigateSection(1, viewSection);
    } else if (container.scrollHeight <= container.clientHeight) {
      // No scroll bar, scroll direction detection
      if (event.deltaY < 0) {
        navigateSection(-1, viewSection);
      } else if (event.deltaY > 0) {
        navigateSection(1, viewSection);
      }
    }
  };

  const onFinishPreloading = () => {
    setPreloading(false);
    setVLoading(true);
  };

  const onFinishV = () => {

    const tl = gsap.timeline();
    tl.to("div#landingv", {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        setVLoading(false);
        showSection("HERO");
      },
    });
  };

  return (
    <main className="relative w-full min-h-[100vh] overflow-auto" onWheel={handleWheel}>
      <Navbar currentSection="HERO" hideSection={hideSection} showSection={showSection} onLogoClick={() => { }} className="md:hidden" />
        
      {viewSection.includes("HERO") && <Hero showSection={showSection} hideSection={hideSection} />}
      {viewSection.includes("LABS") && <CTOLabs showSection={showSection} hideSection={hideSection} />}
      {viewSection.includes("WELCOME") && <Welcome showSection={showSection} hideSection={hideSection} />}
      {viewSection.includes("FEATURE") && <Features showSection={showSection} hideSection={hideSection} />}
      {viewSection.includes("AIRDROP") && <Airdrop showSection={showSection} hideSection={hideSection} />}
      {viewSection.includes("STAKING") && <Staking showSection={showSection} hideSection={hideSection} />}
      {viewSection.includes("BRIDGE") && <Bridge showSection={showSection} hideSection={hideSection} />}
      {viewSection.includes("GOVERNANCE") && <Governance showSection={showSection} hideSection={hideSection} />}
      {viewSection.includes("TASKBOARD") && <Taskboard showSection={showSection} hideSection={hideSection} />}
      {viewSection.includes("RBV") && <RBVToken showSection={showSection} hideSection={hideSection} />}

      {/* {viewSection==="HERO" && <div className="w-full px-8 py-[112px] flex flex-col items-center lg:hidden">
        <div className="w-full" id="launch">
          <h6 className="text-primary font-[600] font-poppins text-[20px] leading-[30px] mb-[10px]">
            Launch a CTO <br /> &quot;Powered by RunesBridge-V&quot;
          </h6>
          <p className="text-secondary font-inter, font-[500] text-[16px] leading-[19.36px]">
            We specialize in helping to launch projects and our niche is the
            “CTO”. <br /><br /> We have animators, raiders, marketers, a growing
            number of KOLs and we also have a growing suite of tech in the
            workshop for anyone to play with. We offer these tools as white
            label products and all the hands-on support needed for your project
            to launch and maintain successfully. <br /><br />
            Want to know more ? <br /><br />
            Join our discord and open a CTO-Onboarding Ticket to get started.
          </p>
        </div>

        <Image
          src="/launch.gif"
          width={295}
          height={270}
          alt="launch"
          style={{ width: "100%", height: "auto", objectFit: "contain" }}
        />

        <div className="w-full flex flex-col items-end mt-36" id="welcome">
          <h2 className="font-poppins font-[600] text-[24px] text-right text-primary">V says welcome home</h2>
          <p className="font-inter font-[500] text-[16px] leading-[19.36px] text-secondary text-right mt-4">We welcome Community Take-Over projects—or really any project that wants our support to launch the right way. The first CTO projects will be launched between December 2024 and January 2025.</p>
        </div>

        <MobileBox icon={CubeConvertIcon} image={MoneyReceiveFrameIcon} title={titles.WIDEDISTRIBUTION} content={contents.WIDEDISTRIBUTION} class="mt-11" />
        <MobileBox icon={ShieldTickIcon} image={MoneyReceiveFrameIcon} title={titles.LAUNCHSECURITY} content={contents.LAUNCHSECURITY} class="mt-5" />
        <MobileBox icon={CertIcon} image={MoneyReceiveFrameIcon} title={titles.MARKETINGSUPPORT} content={contents.MARKETINGSUPPORT} class="mt-5" />
        <MobileBox icon={BuildingIcon} image={MoneyReceiveFrameIcon} title={titles.COMMUNITYBUILDING} content={contents.COMMUNITYBUILDING} class="mt-5" />
        <MobileBox icon={ColorSquareIcon} image={MoneyReceiveFrameIcon} title={titles.INFRASTRUCTURETOOLS} content={contents.INFRASTRUCTURETOOLS} class="mt-5" />
        <MobileBox icon={WalletIcon} image={MoneyReceiveFrameIcon} title={titles.FINANCIALSUPPORT} content={contents.FINANCIALSUPPORT} class="mt-5" />
        <MobileBox icon={HierarchyIcon} image={MoneyReceiveFrameIcon} title={titles.ADVISORYNETWORK} content={contents.ADVISORYNETWORK} class="mt-5" />
        <MobileBox icon={PeopleIcon} image={MoneyReceiveFrameIcon} title={titles.USERENGAGEMENT} content={contents.USERENGAGEMENT} class="mt-5" />

        <svg width="136" height="210" viewBox="0 0 186 286" className="mt-24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <rect width="186" height="286" fill="url(#pattern0_467_23155)" />
          <defs>
            <pattern id="pattern0_467_23155" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlinkHref="#image0_467_23155" transform="scale(0.00251256 0.00163404)" />
            </pattern>
            <image id="image0_467_23155" width="398" height="612" xlinkHref="data:image/png;base64,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" />
          </defs>
        </svg>

        <div className="w-full flex flex-col items-start gap-7 mt-16" id="airdrop">
          <h5 className="font-poppins font-[600] text-[24px] text-primary">Airdrop Guild</h5>
          <p className=" text-[#727272] font-inter font-[500] text-[16px] leading-[19.36px]">
            This is a facility designed to reward RBV holders with tokens “Powered by RunesBridge-V”. <br />
            The Airdrop Guild is a facility by which tokens are distributed to our community on a staggered, timed and tiered basis, this by design a way to secure a launch by carefully adding a large number of small wallets to a community. Airdrops are also by design made to discourage selling pressure, encourage long term holding and increase holder count and minimize the size of each holder.
          </p>
        </div>

        <Image src="/chain.svg" width={214} height={255} alt="chain" className="mt-20" />

        <div className="w-full flex flex-col items-start gap-3 mt-6" id="staking">
          <h2 className="font-poppins font-[600] text-6 text-primary">Staking Forge</h2>
          <div className="font-inter font-[500] text-4 leading-[19.36px] text-[#727272]">
            <p>- Staking for Special Incentives</p>
            <p>This is a white-label staking facility allowing projects “Powered by RunesBridge-V” to offer staking to their community. This is designed to create a type of vampire attack where a community from a failed project is incentivized to join a new CTO version through an exclusive staking reward for whitelisted wallet addresses. For transparency, a copy of the table of whitelisted wallets and their corresponding reward eligibility will be published on our Discord for external scrutiny. Join our Discord and open a staking ticket to get started with staking for your community.</p>
            <p>- Staking for RBV Agents</p>
            <p>Staking is also utilized to ensure actors within the RBV Ecosystem post a security bond of value while performing tasks. They then receive their returned bond along with additional tokens after completing their task. See the Taskboard for more information, or visit the Staking Forge section of our Discord and open a ticket to begin designing your staking program.</p>
          </div>
        </div>

        <Planet class="mt-14" />

        <div className="w-full flex flex-col items-start gap-3 mt-7" id="bridge">
          <h2 className="font-poppins font-[600] text-6 text-primary">
            Bridge
          </h2>
          <p className="text-[#727272] font-inter font-[500] text-4 leading-[19.36px]">
            Just like the namesake RunesBridge project we offer bridge
            facilities between Runes and Ethereum and shortly after launch we
            will have a facility between Solana and Ethereum. Join us on discord
            and open up a bridge ticket to ask for token integration for our
            bridge or to address any technical or other questions about cross
            chain bridge transactions.
          </p>
        </div>

        <div className="w-full flex flex-col items-start gap-3 mt-10" id="governance">
          <h2 className="font-poppins font-[600] text-6 text-primary">CTO Governance</h2>
          <p className="font-inter font-[500] text-4 leading-[19.36px] text-secondary">It’s important to get a CTO right and part of long term success is raising revenue for a project and maintaining a project treasury but this must be handled in a manner which protects the community from catastrophic loss. We help to offer solutions to secure assets and institute decentralization.</p>
        </div>

        <Image src="/blocks.svg" width={275} height={245} alt="blocks" className="mt-10" />

        <div className="w-full flex flex-col items-start gap-3 mt-10" id="governance2">
          <h2 className="font-poppins font-[600] text-6 text-primary">RBV Governance</h2>
          <p className="font-inter font-[500] text-4 leading-[19.36px] text-secondary">V is deeply committed to governance and is developing a robust, trustless system that involves elected members, rotating keys, and a formal decision making process. This system is designed to ensure that the project&apos;s direction constantly aligns with and engages the community and the broader crypto space.
            In the meantime, the treasury and all wallets are maintained using a system of multisig protocols with redundancy measures for lost or compromised keys.</p>
        </div>

        <div className="w-full flex flex-col items-center mt-10">
          <svg width="308" height="100" viewBox="0 0 308 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M95.7808 49.7914C97.9501 49.7914 99.7248 48.0298 99.5539 45.8672C98.7001 35.0634 94.3383 24.7922 87.0775 16.6507C78.9421 7.5286 67.7356 1.7176 55.5924 0.324473C43.4493 -1.06865 31.2179 2.05345 21.228 9.09611C11.2382 16.1388 4.18773 26.6099 1.41964 38.5152C-1.34845 50.4204 0.359206 62.9279 6.21735 73.6554C12.0755 84.3829 21.6748 92.5808 33.187 96.6878C44.6991 100.795 57.3198 100.524 68.645 95.9266C78.7529 91.8235 87.1986 84.5301 92.7311 75.2112C93.8386 73.3459 93.0231 70.982 91.0763 70.0249C89.1294 69.0679 86.7908 69.8822 85.6559 71.731C80.9937 79.3259 74.0106 85.27 65.6902 88.6475C56.1518 92.5194 45.5224 92.7476 35.8266 89.2887C26.1308 85.8297 18.0461 78.9251 13.1122 69.8902C8.17832 60.8553 6.7401 50.3212 9.07145 40.2943C11.4028 30.2674 17.3408 21.4484 25.7545 15.5169C34.1683 9.58538 44.4698 6.95587 54.697 8.12919C64.9243 9.30251 74.3627 14.1967 81.2145 21.8795C87.1913 28.5812 90.8357 36.9964 91.6691 45.869C91.8719 48.0289 93.6114 49.7914 95.7808 49.7914Z" fill="#D9D9D9" />
            <circle cx="49.9174" cy="49.7914" r="34.7284" fill="#061012" />
            <path d="M31.0884 47.9443L45.3145 62.1704" stroke="white" strokeWidth="2.51049" strokeLinecap="round" />
            <path d="M68.7461 38.4941L45.3149 61.9254" stroke="white" strokeWidth="2.51049" strokeLinecap="round" />
            <path d="M117.282 41.8413H216.865" stroke="#061012" strokeWidth="16.7366" strokeLinecap="round" />
            <path d="M117.282 68.6201H257.033" stroke="#D9D9D9" strokeWidth="16.7366" strokeLinecap="round" />
            <path d="M243.644 41.8413L298.874 41.8413" stroke="#D9D9D9" strokeWidth="16.7366" strokeLinecap="round" />
          </svg>

          <svg width="308" height="101" viewBox="0 0 308 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M95.7808 50.4999C97.9501 50.4999 99.7248 48.7383 99.5539 46.5757C98.7001 35.7719 94.3383 25.5007 87.0775 17.3592C78.9421 8.2371 67.7356 2.42609 55.5924 1.03297C43.4493 -0.360154 31.2179 2.76194 21.228 9.80461C11.2382 16.8473 4.18773 27.3184 1.41964 39.2237C-1.34845 51.1289 0.359206 63.6364 6.21735 74.3639C12.0755 85.0914 21.6748 93.2893 33.187 97.3963C44.6991 101.503 57.3198 101.232 68.645 96.635C78.7529 92.532 87.1986 85.2386 92.7311 75.9197C93.8386 74.0544 93.0231 71.6905 91.0763 70.7334C89.1294 69.7764 86.7908 70.5907 85.6559 72.4395C80.9937 80.0344 74.0106 85.9785 65.6902 89.356C56.1518 93.2279 45.5224 93.4561 35.8266 89.9971C26.1308 86.5382 18.0461 79.6336 13.1122 70.5987C8.17832 61.5638 6.7401 51.0296 9.07145 41.0028C11.4028 30.9759 17.3408 22.1569 25.7545 16.2254C34.1683 10.2939 44.4698 7.66437 54.697 8.83769C64.9243 10.011 74.3627 14.9052 81.2145 22.588C87.1913 29.2897 90.8357 37.7049 91.6691 46.5775C91.8719 48.7374 93.6114 50.4999 95.7808 50.4999Z" fill="#D9D9D9" />
            <circle cx="49.9174" cy="50.4999" r="34.7284" fill="#061012" />
            <path d="M63.5158 64.0988L50.3359 50.9189M50.3359 50.9189L37.1558 37.7388M50.3359 50.9189L63.516 37.7388M50.3359 50.9189L37.1558 64.099" stroke="white" strokeWidth="1.67366" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M117.282 37.5293H216.865" stroke="#061012" strokeWidth="16.7366" strokeLinecap="round" />
            <path d="M117.282 64.3076H257.033" stroke="#D9D9D9" strokeWidth="16.7366" strokeLinecap="round" />
            <path d="M243.644 37.5293L298.874 37.5293" stroke="#D9D9D9" strokeWidth="16.7366" strokeLinecap="round" />
          </svg>

          <svg width="308" height="100" viewBox="0 0 308 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M95.7808 49.7914C97.9501 49.7914 99.7248 48.0298 99.5539 45.8672C98.7001 35.0634 94.3383 24.7922 87.0775 16.6507C78.9421 7.5286 67.7356 1.7176 55.5924 0.324473C43.4493 -1.06865 31.2179 2.05345 21.228 9.09611C11.2382 16.1388 4.18773 26.6099 1.41964 38.5152C-1.34845 50.4204 0.359206 62.9279 6.21735 73.6554C12.0755 84.3829 21.6748 92.5808 33.187 96.6878C44.6991 100.795 57.3198 100.524 68.645 95.9266C78.7529 91.8235 87.1986 84.5301 92.7311 75.2112C93.8386 73.3459 93.0231 70.982 91.0763 70.0249C89.1294 69.0679 86.7908 69.8822 85.6559 71.731C80.9937 79.3259 74.0106 85.27 65.6902 88.6475C56.1518 92.5194 45.5224 92.7476 35.8266 89.2887C26.1308 85.8297 18.0461 78.9251 13.1122 69.8902C8.17832 60.8553 6.7401 50.3212 9.07145 40.2943C11.4028 30.2674 17.3408 21.4484 25.7545 15.5169C34.1683 9.58538 44.4698 6.95587 54.697 8.12919C64.9243 9.30251 74.3627 14.1967 81.2145 21.8795C87.1913 28.5812 90.8357 36.9964 91.6691 45.869C91.8719 48.0289 93.6114 49.7914 95.7808 49.7914Z" fill="#D9D9D9" />
            <circle cx="49.9174" cy="49.7914" r="34.7284" fill="#061012" />
            <path d="M31.0884 47.9443L45.3145 62.1704" stroke="white" strokeWidth="2.51049" strokeLinecap="round" />
            <path d="M68.7461 38.4941L45.3149 61.9254" stroke="white" strokeWidth="2.51049" strokeLinecap="round" />
            <path d="M117.282 41.8413H216.865" stroke="#061012" strokeWidth="16.7366" strokeLinecap="round" />
            <path d="M117.282 68.6201H257.033" stroke="#D9D9D9" strokeWidth="16.7366" strokeLinecap="round" />
            <path d="M243.644 41.8413L298.874 41.8413" stroke="#D9D9D9" strokeWidth="16.7366" strokeLinecap="round" />
          </svg>
        </div>

        <div className="w-full flex flex-col items-start gap-3 mt-10" id="task">
          <h2 className="font-poppins font-[600] text-6 text-primary">
            TaskBoard / Suggestions
          </h2>
          <p className="text-[#727272] font-inter font-[500] text-[16px] leading-[19.36px]">
            In the short term, all tasks and suggestions should be forwarded to
            the Suggestions or Tasks Board tickets. We want to make sure that
            the growth comes from the community in the form of tasks and that
            the suggestions from the community are always recorded so that we
            don’t miss the opportunity to close a knowledge gap or embrace any
            insights from our community.
          </p>
        </div>

        <div className="w-full flex flex-col items-center justify-center mt-10" id="token">
          <h2 className="font-poppins font-[600] text-6 text-primary m-0 mb-5">RBV Token</h2>
          <div className="w-full flex items-center font-poppins font-[500] text-4 text-[#666666] border-[#C4C3CB] border-b-[0.8px]">
            <div className="w-1/2 h-full flex items-center justify-end p-2 border-r-[1.6px] -mr-[1.2px]"><p className="p-2 w-fit text-right">Total 1,000,000,000 <span className="text-nowrap">(1 Billion Tokens)</span></p></div>
            <div className="w-1/2 h-full p-2 border-l-[1.6px]"><p className="p-2 w-fit">Total Team Tokens 5%</p></div>
          </div>
          <div className="w-full flex items-center justify-center font-poppins font-[500] text-4 text-[#666666] border-[#C4C3CB] border-t-[0.8px]">
            <div className="w-1/2 h-full flex items-center justify-end p-2"><p className="p-2 w-fit text-right">Total Treasury 600,000,000</p></div>
            <div className="w-1/2 h-full p-2 border-l-[1.6px] -ml-[1.2px]"><p className="p-2 w-fit">Total Uniswap LP Seed 300,000,00</p></div>
          </div>
        </div>
      </div>} */}

      {preloading && <Loading onFinishLoading={onFinishPreloading} />}
      {vLoading && <LoadingV onFinishV={onFinishV} />}
    </main>
  );
}
