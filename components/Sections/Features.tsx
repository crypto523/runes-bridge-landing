import React from "react";
import SectionLayout from "./Layout";
import UpBox from "../utils/UpBox";
import { ColorSquareFrameIcon, ColorSquareIcon, FormatSpuareIcon, FormatSquareFrameIcon, HierarchyIcon, MoneyReceiveFrameIcon, MoneyReceiveIcon, PeopleFrameIcon, PeopleIcon } from "../utils/Icons";
import { contents, titles } from "../utils/constants";
import DownBox from "../utils/DownBox";
import { Section } from "@/app/page";

interface FeaturesProps {
    showSection: (section: Section) => void;
}

const Features: React.FC<FeaturesProps> = ({showSection}) => {

    return (
        <SectionLayout id="features" showSection={showSection} nextSection="AIRDROP" >
            <div className="w-full h-full flex flex-col items-start gap-[25px] pb-[18px]">
                <div className="flex gap-[18px] px-[47px]">
                    <div className="table-cell">
                        <UpBox icon={FormatSpuareIcon} image={FormatSquareFrameIcon} title={titles.COMMUNITYBUILDING} content={contents.COMMUNITYBUILDING} />
                    </div>
                    <div className="table-cell max-w-[295px]">
                        <DownBox icon={ColorSquareIcon} image={ColorSquareFrameIcon} title={titles.INFRASTRUCTURETOOLS} content={contents.INFRASTRUCTURETOOLS} background="/infra_bg.svg" />
                    </div>
                </div>
                <div className="flex gap-[18px] px-[47px] w-full">
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
    )
}

export default Features;