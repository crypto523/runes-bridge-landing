import React from "react";

const Banner: React.FC = () => {
  return (
    <div
      className="md:max-w-[85%] lg:max-w-[70%] w-full flex flex-col px-4 m-auto lg:mt-[46px] opacity-0 gap-3 translate-y-[40px] text-primary text-center"
      id="banner"
    >
      <div>
        <h1 className="font-poppins font-semibold text-4xl md:text-5xl lg:text-7xl">
          RunesBridge-V
        </h1>
        <h6 className="font-inter font-semibold text-xs lg:text-lg">
          -The First Community Take-Over Platform-
        </h6>
      </div>
      <p className="mt-[15px] font-inter font-medium text-base leading-5 text-secondary select-none">
        <span className="font-semibold text-primary text-xl cursor-pointer hover:font-bold transition-all">
          RunesBridge-V
        </span>{" "}
        is an extensible, decentralized platform designed to launch new projects
        with a special focus on “Community Takeovers” or “CTOs”. We provide
        marketing, launch support, access to free technology, and community
        support. We reinforce community safety and solid growth, and do
        everything transparently. All our team members are KYC’d by a third
        party to mitigate risks. Scroll down to learn more.
      </p>
    </div>
  );
};

export default Banner;
