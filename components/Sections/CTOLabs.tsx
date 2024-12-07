import React from "react";
import Image from "next/image";
import SectionLayout from "./Layout";

const CTOLabs: React.FC = () => {
  return (
    <SectionLayout>
      <div className="w-full flex items-center justify-around">
        <Image
          src="/launch.gif"
          width={568}
          height={400}
          alt="launch"
          style={{ width: "auto" }}
        />
        <div className="max-w-[504px] ">
          <h6 className="text-[#061012] font-[600] font-poppins text-[24px] leading-[36px] mb-[10px]">
            Launch a CTO <br /> “Powered by RunesBridge-V"
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
  );
};

export default CTOLabs;
