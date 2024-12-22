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
import CTOGovernance from "@/components/Sections/CTOGovernance";
import RBVGovernance from "@/components/Sections/RBVGovernance";
import { useAppContext } from "@/context/AppContext";

export default function HomePage() {
    const { viewSection } = useAppContext();

    return (
        <main className="relative w-full h-full flex flex-col">
            {viewSection === "HERO" && <Hero />}
            {viewSection === "LABS" && <CTOLabs />}
            {viewSection === "WELCOME" && <Welcome />}
            {viewSection === "FEATURE" && <Features />}
            {viewSection === "AIRDROP" && <Airdrop />}
            {viewSection === "STAKING" && <Staking />}
            {viewSection === "BRIDGE" && <Bridge />}
            {viewSection === "CTOGOVERNANCE" && <CTOGovernance />}
            {viewSection === "RBVGOVERNANCE" && <RBVGovernance />}
            {viewSection === "GOVERNANCE" && <Governance />}
            {viewSection === "TASKBOARD" && <Taskboard />}
            {viewSection === "RBVTOKEN" && <RBVToken />}
        </main>
    );
}
