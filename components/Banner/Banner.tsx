import React from "react";

const Banner: React.FC = () => {
  return (
    <div
      className="max-w-[999px] w-full flex flex-col px-4 m-auto lg:mt-[46px] opacity-0 gap-3 translate-y-[40px] text-primary text-center"
      id="banner"
    >
      <h1 className="font-poppins font-semibold text-4xl lg:text-7xl">
        RunesBridge-V
      </h1>
      <h6 className="font-inter font-semibold">-The First Community Take-Over Platform-</h6>
      <p className="mt-[15px] font-inter font-medium text-base leading-5 text-secondary">
        RunesBridge-V is an extensible, decentralized platform designed to
        launch new projects, with a special focus on relaunching existing
        projects with a Community Takeover (CTO). We provide marketing, launch
        support, access to free technology, and community support. We support
        community safety and solid growth, and do everything transparently. All
        our team members are vetted by a third party KYC solution to mitigate
        risks. Scroll down to learn more.
      </p>
    </div>
  );
};

export default Banner;
