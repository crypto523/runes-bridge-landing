"use client";

import { useState } from "react";
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
import RBVToken from "@/components/Sections/RBVToken";
import Welcome from "@/components/Sections/Welcome";
import Airdrop from "@/components/Sections/Airdrop";
import Bridge from "@/components/Sections/Bridge";
import Taskboard from "@/components/Sections/TaskBoard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(TextPlugin);
}

export type Section = "HERO" | "LABS" | "WELCOME" | "AIRDROP" | "FEATURE" | "BRIDGE" | "STAKING" | "GOVERNANCE" | "TASKBOARD" | "RBV" | "NONE"

export default function Home() {
  const [preloading, setPreloading] = useState<boolean>(true);
  const [vLoading, setVLoading] = useState<boolean>(false);
  const [viewSection, setViewSection] = useState<Section[]>([]);

  const showSection = (section: Section) => {
    setViewSection(prevViewSection => [...prevViewSection, section]);
  }

  const hideSection = (section: Section) => {
    setViewSection(prevViewSection => prevViewSection.filter(s => s !== section));
  };

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
        showSection("HERO");
      },
    });
  };

  return (
    <main className="relative w-full">
      {viewSection.includes("HERO") && <Hero showSection={showSection} hideSection={hideSection} />}
      {viewSection.includes("LABS") && <CTOLabs showSection={showSection} hideSection={hideSection} />}
      {viewSection.includes("WELCOME") && <Welcome showSection={showSection} hideSection={hideSection} />}
      {viewSection.includes("FEATURE") && <Features showSection={showSection} />}
      {viewSection.includes("AIRDROP") && <Airdrop />}
      {viewSection.includes("STAKING") && <Staking showSection={showSection} hideSection={hideSection} />}
      {viewSection.includes("BRIDGE") && <Bridge />}
      {viewSection.includes("GOVERNANCE") && <Governance showSection={showSection} hideSection={hideSection} />}
      {viewSection.includes("TASKBOARD") && <Taskboard />}
      {viewSection.includes("RBV") && <RBVToken showSection={showSection} hideSection={hideSection} />}

      {preloading && <Loading onFinishLoading={onFinishPreloading} />}
      {vLoading && <LoadingV onFinishV={onFinishV} />}
    </main>
  );
}
