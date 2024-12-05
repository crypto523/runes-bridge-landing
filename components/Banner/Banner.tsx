import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="max-w-[999px] m-auto mt-[46px] opacity-0 translate-y-[40px]" id="banner">
      <h1 className="font-poppins font-[600] text-[74px] leading-[86px] text-center text-[#061012] ">
        RunesBridge-V
      </h1>
      <p className="mt-[mt-15px] font-inter font-[500] text-[16px] leading-[19.36px] text-center text-[#444444] ">
        RunesBridge-V is an extensible, decentralized platform designed to
        launch new projects with a special focus on “Community Takeovers” or
        “CTOs”. We provide marketing, launch support, access to free technology,
        and community support. We support community safety and solid growth, and
        do everything transparently. All our team members are KYC’d by a third
        party to mitigate risks. Scroll down to learn more.
      </p>
    </div>
  );
};

export default Banner;
