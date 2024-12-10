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
import RBVToken from "@/components/Sections/RBCToken";
import Welcome from "@/components/Sections/Welcome";
import Airdrop from "@/components/Sections/Airdrop";
import Bridge from "@/components/Sections/Bridge";
import Taskboard from "@/components/Sections/TaskBoard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(TextPlugin);
}

type Section = "HERO" | "LABS" | "WELCOME" | "AIRDROP" | "FEATURE" | "BRIDGE" | "STAKING" | "GOVERNANCE" | "TASKBOARD" | "RBV" | "NONE"

export default function Home() {
  const [preloading, setPreloading] = useState<boolean>(true);
  const [vLoading, setVLoading] = useState<boolean>(false);
  const [currentSection, setCurrentSection] = useState<Section>("NONE");

  const changeSection = (section: Section) => {
    setCurrentSection(section);
  }

  const onFinishPreloading = () => {
    setPreloading(false);
    setVLoading(true);
  };

  const onFinishV = () => {
    setCurrentSection("HERO");
    
    const tl = gsap.timeline();
    tl.to("div#landingv", {
      opacity: 0,
      duration: 2,
      onComplete: () => {
        setVLoading(false);
      },
    });
  };

  return (
    <main className="relative w-full">
      {currentSection === "HERO" && <Hero />}
      {currentSection === "LABS" && <CTOLabs />}
      {currentSection === "WELCOME" && <Welcome />}
      {currentSection === "AIRDROP" && <Airdrop />}
      {currentSection === "FEATURE" && <Features />}
      {currentSection === "BRIDGE" && <Bridge />}
      {currentSection === "STAKING" && <Staking />}
      {currentSection === "GOVERNANCE" && <Governance />}
      {currentSection === "TASKBOARD" && <Taskboard />}
      {currentSection === "RBV" && <RBVToken />}

      {preloading && <Loading onFinishLoading={onFinishPreloading} />}
      {vLoading && <LoadingV onFinishV={onFinishV} />}
    </main>
  );
}
