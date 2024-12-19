import React, { useEffect } from "react";
import Image from "next/image";
import SectionLayout from "./Layout";
import { Section } from "@/app/page";
import gsap from "gsap";
import { VMask } from "../utils/Icon";
import Background from "../utils/Background";

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
      className="w-full md:h-screen flex-1 flex items-center p-5 pt-0 md:pt-5"
      style={{ opacity: 0 }}
    >
      <div className="relative min-h-[calc(100vh-120px)] lg:max-h-full lg:overflow-hidden w-full h-full">
        <div className="w-full h-[1500px]"></div>
        <Background ltr={true} />
      </div>
    </div>
  );
};

export default CTOLabs;

// <SectionLayout
//   showSection={showSection}
//   hideSection={hideSection}
//   currentSection="LABS"
//   nextSection="WELCOME"
// >
//   <div className="w-full flex-1 flex flex-col-reverse lg:flex-row items-center justify-around">
//     <div className="flex w-full lg:flex-1 items-center justify-center">
//       <Image
//         src="/launch.gif"
//         width={568}
//         height={400}
//         alt="launch"
//         className="w-full md:w-1/3 lg:w-2/3"
//         // style={{
//         //   width: "auto",
//         //   height: "55vh",
//         //   maxHeight: "100%",
//         //   objectFit: "contain",
//         // }}
//       />
//     </div>
//     <div className="w-full md:max-w-[60%] 2xl:max-w-[50%] px-3.5">
//       <h6 className="text-primary font-semibold font-poppins text-xl lg:text-4xl mb-2.5">
//         Launch a CTO &quot;Powered by RunesBridge-V&quot;{" "}
//         <VMask className="w-5 h-6 lg:w-10 lg:h-12.5 inline cursor-pointer hover:scale-95 transition-all" />
//       </h6>
//       <p className="text-secondary font-inter font-medium text-sm leading-4 lg:text-base">
//         {/* <span className="font-semibold text-primary text-xl">WE </span> */}
//         We specialize in helping to launch projects and our niche is
//         Community Takeovers.
//       </p>
//       <p className="text-secondary font-inter font-medium text-sm leading-4 lg:text-base">
//         <span>W</span>e have animators, raiders, marketers, a growing
//         number of Key Opinion Leaders (KOLs) and we also have a growing
//         suite of tech in the workshop for anyone to play with. We offer
//         these tools as white label products and all the hands-on support
//         needed for your project to launch and maintain successfully.
//       </p>
//       <p className="text-secondary font-inter font-medium text-sm leading-4 lg:text-base">
//         <span>W</span>ant to know more ?
//       </p>
//       <p className="text-secondary font-inter font-medium text-sm leading-4 lg:text-base">
//         <span>W</span>oin our discord and open a CTO-Onboarding Ticket to
//         get started.
//       </p>
//     </div>
//   </div>
// </SectionLayout>