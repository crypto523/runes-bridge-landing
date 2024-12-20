import React, { useEffect } from "react";
import Image from "next/image";
import SectionLayout from "./Layout";
import { Section } from "@/app/page";
import gsap from "gsap";
import { VMask } from "../utils/Icon";
import { useAppContext } from "@/context/AppContext";

interface CTOLabsProps {
  showSection: (section: Section) => void;
  hideSection: (section: Section) => void;
}

const CTOLabs: React.FC<CTOLabsProps> = ({ showSection, hideSection }) => {
  const { orientation } = useAppContext();

  useEffect(() => {
    gsap.to("#labs", { opacity: 1, scaleX: 1, duration: 1 });
  });

  return (
    <div id="labs" className={`w-full md:h-screen flex-1 flex items-center p-5 pt-0 md:py-24 md:px-14 lg:px-10 lg:py-10 ${orientation === "portrait" ? 'lg:overflow-auto' : 'lg:overflow-hidden'}`} style={{ opacity: 0 }}>
      <SectionLayout currentSection="LABS" nextSection="WELCOME" showSection={showSection} hideSection={hideSection}>

        <div className={`w-full h-full flex-1 flex flex-col md:flex-col-reverse lg:flex-row-reverse lg:h-[75%] lg:flex-none items-center justify-evenly gap-4 px-5 pt-12 pb-11 md:pt-0 md:pb-[84px] lg:pb-0 ${orientation === "portrait" ? 'lg:flex-col-reverse' : ''}`}>
          <div className={`flex flex-col items-start gap-2.5 ${orientation === "portrait" ? '' : 'lg:w-[50%]'}`}>
            <h2 className="md:text-[28px] md:leading-8 lg:text-4xl">
              <span>Launch a CTO "Powered by </span>
              <span className="inline-flex -mb-1 items-center">
                RunesBridge-V"
                <VMask className="w-5 h-6 ml-1 md:w-9 md:h-11" />
              </span>
            </h2>
            <div className="flex flex-col items-start gap-2">
              <p className="md:text-base">We specialize in helping to launch projects and our niche is the “CTO”.</p>
              <p className="md:text-base">We have animators, raiders, marketers, a growing number of KOLs and we also have a growing suite of tech in the workshop for anyone to play with. We offer these tools as white label products and all the hands-on support needed for your project to launch and maintain successfully.</p>
              <p className="md:text-base">Want to know more ?</p>
              <p className="md:text-base">Join our discord and open a CTO-Onboarding Ticket to get started.</p>
            </div>
          </div>

          <div className={`w-full flex items-center justify-center ${orientation === "portrait" ? '' : 'lg:w-[50%]'}`}>
            <Image src="/launch.gif" width={100} height={100} alt="launch" className={`w-full md:w-1/2 ${orientation === "portrait" ? 'lg:w-2/3' : 'lg:w-2/3'}`} />
          </div>
        </div>

      </SectionLayout>
    </div>
  );
};

export default CTOLabs;
