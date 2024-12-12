import React from "react";
import SectionLayout from "./Layout";
import UpBox from "../utils/UpBox";
import { ColorSquareFrameIcon, ColorSquareIcon, FormatSpuareIcon, FormatSquareFrameIcon, HierarchyIcon, MoneyReceiveFrameIcon, MoneyReceiveIcon, PeopleFrameIcon, PeopleIcon } from "../utils/Icons";
import { contents, titles } from "../utils/constants";
import DownBox from "../utils/DownBox";
import { Section } from "@/app/page";

interface FeaturesProps {
    showSection: (section: Section) => void;
    hideSection: (section: Section) => void;
}

const Features: React.FC<FeaturesProps> = ({ showSection, hideSection }) => {

    return (
        <div id="features" className="absolute top-0 w-[100vw] h-[100vh]">
            <SectionLayout showSection={showSection} nextSection="AIRDROP" hideSection={hideSection} currentSection="FEATURE">
                <div className="w-full h-full flex-1 flex flex-col items-start justify-evenly">
                    <div className="w-full flex gap-[1.8vw] px-[3vw]">
                        <div className="table-cell">
                            <UpBox icon={FormatSpuareIcon} image={FormatSquareFrameIcon} title={titles.COMMUNITYBUILDING} content={contents.COMMUNITYBUILDING} />
                        </div>
                        <div className="table-cell">
                            <DownBox icon={ColorSquareIcon} image={ColorSquareFrameIcon} title={titles.INFRASTRUCTURETOOLS} content={contents.INFRASTRUCTURETOOLS} background="/infra_bg.svg" />
                        </div>
                    </div>
                    <div className="w-full flex gap-[1.8vw] px-[3vw]">
                        <div className="table-cell">
                            <UpBox icon={MoneyReceiveIcon} image={MoneyReceiveFrameIcon} title={titles.FINANCIALSUPPORT} content={contents.FINANCIALSUPPORT} />
                        </div>
                        <div className="table-cell max-w-[263px]">
                            <DownBox icon={HierarchyIcon} image={MoneyReceiveFrameIcon} title={titles.ADVISORYNETWORK} content={contents.ADVISORYNETWORK} />
                        </div>
                        <div className="table-cell flex-1">
                            <UpBox icon={PeopleIcon} image={PeopleFrameIcon} title={titles.USERENGAGEMENT} content={contents.USERENGAGEMENT} />
                        </div>
                    </div>
                </div>
            </SectionLayout>
        </div>
    )
}

export default Features;