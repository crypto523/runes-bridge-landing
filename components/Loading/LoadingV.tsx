"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { url } from "inspector";
import { useAppContext } from "@/context/AppContext";

interface LoadingVProps {
  setVLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoadingV: React.FC<LoadingVProps> = ({ setVLoading }) => {
  const { setViewSection } = useAppContext();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to("h5#v-welcome", {
      text: "V Says Welcome Home",
      ease: "sine",
      duration: 1.5,
    }).to("p#v-welcome", {
      opacity: 1,
      duration: 2,
    });
  });

  const onFinish = () => {
    const tl = gsap.timeline();
    tl.to("div#landingv", {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        setVLoading(false);
        setViewSection("HERO");
      },
    });
  };

  return (
    <div
      className="absolute top-0 w-[100vw] h-[100vh] flex flex-col items-center justify-center bg-white"
      id="landingv"
      style={{ backgroundImage: `url("bg-grid.svg")` }}
      onClick={onFinish}
      onWheel={onFinish}
    >
      <Image src="/mask.png" width={304} height={228} alt="v-mask" priority />
      <div className="w-full max-w-[482px] p-2">
        <h5
          className="h-[86px] font-inter text-primary text-center font-[600] text-[24px] leading-[86px]"
          id="v-welcome"
        ></h5>
        <p
          className="w-full font-poppins font-[500] text-[16px] leading-[19.36px] text-secondary text-center"
          id="v-welcome"
          style={{ opacity: 0 }}
        >
          I am V, a symbol of resistance, a force born from the ashes of
          tyranny. My face, though hidden behind this mask, carries the weight
          of an idea. An idea that cannot be silenced, not by oppression, not by
          fear. Those who once held me captive will face their reckoning.
          RunesBridge is dead. Long live RunesBridge-V.
        </p>
      </div>
    </div>
  );
};

export default LoadingV;
