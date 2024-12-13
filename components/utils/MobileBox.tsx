import React from "react";

interface MobileBoxProps {
    icon: React.FC;
    image: React.FC;
    title: string;
    content: string;
    class?: string;
}

const MobileBox: React.FC<MobileBoxProps> = (props) => {

    return (
        <div className={`w-full px-7 py-12 flex flex-col items-start gap-12 border-[#6262624D] border-2 bg-[#F6F5F54D] ${props.class? props.class : ''}`}>
            <div className="w-full flex items-center justify-start gap-[25%]">
                <props.icon />
                <props.image />
            </div>
            <div className="w-full flex flex-col items-start gap-3.5">
                <h6 className="font-poppins font-[600] text-6 text-[#061012]">{props.title}</h6>
                <p className="font-inter font-[500] text-[16px] leading-[19.36px] text-[#444444]">{props.content}</p>
            </div>
        </div>
    )
}

export default MobileBox;