import React from "react";
import SectionLayout from "./Layout";
import UpBox from "../utils/UpBox";
import { FormatSpuareIcon, FormatSquareFrameIcon } from "../utils/Icons";
import { contents, titles } from "../utils/constants";

const Features: React.FC = () => {

    return (
        <SectionLayout>
            <div className="w-full h-full flex flex-col items-start gap-[25px]">
                <div className="flex gap-[18px]">
                    <div className="table-cell">
                        <UpBox icon={FormatSpuareIcon} image={FormatSquareFrameIcon} title={titles.COMMUNITYBUILDING} content={contents.COMMUNITYBUILDING} />
                    </div>
                    <div className="table-cell">
                        
                    </div>
                </div>
                <div>

                </div>
            </div>
        </SectionLayout>
    )
}

export default Features;