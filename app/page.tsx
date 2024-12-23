"use client";

import { useEffect, useState } from "react";
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
import Navbar from "@/components/Navbar/Navbar";
import { AppContextProvider, useAppContext } from "@/context/AppContext";
import CTOGovernance from "@/components/Sections/CTOGovernance";
import RBVGovernance from "@/components/Sections/RBVGovernance";
import HomePage from "@/components/Page";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(TextPlugin);
}

export type Section = "HERO" | "LABS" | "WELCOME" | "AIRDROP" | "FEATURE" | "BRIDGE" | "STAKING" | "CTOGOVERNANCE" | "RBVGOVERNANCE" | "GOVERNANCE" | "TASKBOARD" | "RBVTOKEN" | "NONE"
export const defaultSections: Section[] = ["HERO", "LABS", "WELCOME", "FEATURE", "AIRDROP", "STAKING", "BRIDGE", "GOVERNANCE", "TASKBOARD", "RBVTOKEN"];

export default function Home() {

  const [preloading, setPreloading] = useState<boolean>(true);
  const [vLoading, setVLoading] = useState<boolean>(false);

  const onFinishPreloading = () => {
    setPreloading(false);
    setVLoading(true);
  };

  return (
    <AppContextProvider>
      <main className="relative w-full h-full flex flex-col items-center md:justify-center">
        <Navbar className={`md:hidden`} />

        <HomePage />

        {preloading && <Loading onFinishLoading={onFinishPreloading} />}
        {vLoading && <LoadingV setVLoading={setVLoading} />}
      </main>
    </AppContextProvider>
  );
}
