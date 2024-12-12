import React, { useEffect } from "react";
import Image from "next/image";
import SectionLayout from "./Layout";
import { Section } from "@/app/page";
import gsap from "gsap";

interface CTOLabsProps {
  showSection: (section: Section) => void;
}

const CTOLabs: React.FC<CTOLabsProps> = ({ showSection }) => {

  useEffect(() => {
    gsap.to("#labs", {opacity: 1})
  })

  return (
    <div id="labs" className="absolute top-0 w-[100vw] h-[100vh]" style={{opacity: 0}}>
      <SectionLayout showSection={showSection} nextSection="WELCOME">
        <div className="w-full flex-1 flex items-center justify-around">
          <Image
            src="/launch.gif"
            width={568}
            height={400}
            alt="launch"
            style={{ width: "auto", height: "55vh", maxHeight: "100%", objectFit: "contain" }}
          />
          <div className="max-w-[504px] ">
            <h6 className="text-[#061012] font-[600] font-poppins text-[24px] leading-[36px] mb-[10px]">
              Launch a CTO <br /> &quot;Powered by RunesBridge-V&quot;
            </h6>
            <p className="text-[#444444] font-inter, font-[500] text-[16px] leading-[19.36px]">
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
        </div>
      </SectionLayout>
    </div>
  );
};

export default CTOLabs;
