import React, { useEffect } from "react";
import Image from "next/image";
import SectionLayout from "./Layout";
import { Section } from "@/app/page";
import gsap from "gsap";
import { VMask } from "../utils/Icon";

interface CTOLabsProps {
  showSection: (section: Section) => void;
  hideSection: (section: Section) => void;
}

const CTOLabs: React.FC<CTOLabsProps> = ({ showSection, hideSection }) => {
  useEffect(() => {
    gsap.to("#labs", { opacity: 1, scaleX: 1, duration: 1 });
  });

  return (
    <div
      id="labs"
      className="w-full h-[100vh]"
      style={{ opacity: 0 }}
    >
      <SectionLayout
        showSection={showSection}
        hideSection={hideSection}
        currentSection="LABS"
        nextSection="WELCOME"
      >
        <div className="w-full flex-1 flex items-center justify-around">
          <div className="flex flex-1 items-center justify-center">
            <Image
              src="/launch.gif"
              width={568}
              height={400}
              alt="launch"
              style={{
                width: "auto",
                height: "55vh",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          </div>
          <div className="w-full md:max-w-[60%] 2xl:max-w-[50%] px-5">
            <h6 className="text-primary font-semibold font-poppins text-4xl mb-2.5">
              Launch a CTO &quot;Powered by RunesBridge-V&quot;{" "}
              <VMask className="w-10 h-12.5 inline cursor-pointer hover:scale-95 transition-all" />
            </h6>
            <p className="text-secondary font-inter font-medium text-base">
              {/* <span className="font-semibold text-primary text-xl">WE </span> */}
              We specialize in helping to launch projects and our niche is
              Community Takeovers.
            </p>
            <p className="text-secondary font-inter font-medium text-base">
              <span>W</span>e have animators, raiders, marketers, a growing
              number of Key Opinion Leaders (KOLs) and we also have a growing
              suite of tech in the workshop for anyone to play with. We offer
              these tools as white label products and all the hands-on support
              needed for your project to launch and maintain successfully.
            </p>
            <p className="text-secondary font-inter font-medium text-base">
              <span>W</span>ant to know more ?
            </p>
            <p className="text-secondary font-inter font-medium text-base">
              <span>W</span>oin our discord and open a CTO-Onboarding Ticket to
              get started.
            </p>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default CTOLabs;
