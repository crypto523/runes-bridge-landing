"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { url } from "inspector";

interface LoadingVProps {
  onFinishV: () => void;
}

const LoadingV: React.FC<LoadingVProps> = ({ onFinishV }) => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to("h5#v-welcome", {
      text: "V Says Welcome Home",
      ease: "sine",
      duration: 2,
    }).to("p#v-welcome", {
        opacity: 1,
        duration: 2,
        transformOrigin: "top center",
        onComplete: () =>{
            onFinishV();
        }   
    });
  });

  return (
    <div className="absolute top-0 left-0 right-0 h-[100vh] flex flex-col items-center justify-center bg-white" id="landingv" style={{backgroundImage: `url("bg-grid.svg")`}}>
      <Image src="/mask.png" width={304} height={228} alt="v-mask" priority />
      <div className="max-w-[500px]">
        <h5
          className="h-[86px] font-inter text-[#061012] text-center font-[600] text-[24px] leading-[86px]"
          id="v-welcome"
        ></h5>
        <p
          className="w-[466px] font-poppins font-[500] text-[16px] leading-[19.36px] text-[#444444] text-center"
          id="v-welcome"
          style={{opacity: 0}}
        >
          I am V, a symbol of resistance, a force born from the ashes of
          tyranny. My face, though hidden behind this mask, carries the weight
          of an idea. An idea that cannot be silenced, not by oppression, not by
          fear. Those who once held me captive will face their reckoning, and
          those that strangle freedom will crumble before the will of the
          people. RunesBridge is dead. Long live RunesBridge-V.
        </p>
      </div>
    </div>
  );
};

export default LoadingV;
