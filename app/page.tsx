"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/all";

import Loading from "@/components/Loading/Loading";
import LoadingV from "@/components/Loading/LoadingV";
import Hero from "@/components/Sections/Hero";
import CTOLabs from "@/components/Sections/CTOLabs";
import Features from "@/components/Sections/Features";
import Staking from "@/components/Sections/Staking";
import Governance from "@/components/Sections/Governance";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(TextPlugin);
}

export default function Home() {
  const [preloading, setPreloading] = useState<boolean>(true);
  const [vLoading, setVLoading] = useState<boolean>(false);

  const onFinishPreloading = () => {
    setPreloading(false);
    setVLoading(true);
  };

  const onFinishV = () => {
    const tl = gsap.timeline();
    tl.to("div#landingv", {
      opacity: 0,
      duration: 2,
      onComplete: () => {
        setVLoading(false);
      },
    })
      .to(
        "div#banner",
        {
          opacity: 1,
          translateY: 0,
          duration: 2,
        },
        "<"
      )
      .to(
        "div#hero-buttons",
        {
          opacity: 1,
          duration: 2,
        },
        "<"
      )
      .to(
        "div#planet",
        {
          opacity: 1,
          duration: 2,
          translateY: 0,
        },
        "<"
      )
  };

  return (
    <main className="relative w-full">
      <Hero />
      <CTOLabs />
      <Features />
      <Staking />
      <Governance />

      {preloading && <Loading onFinishLoading={onFinishPreloading} />}
      {vLoading && <LoadingV onFinishV={onFinishV} />}
    </main>
  );
}
