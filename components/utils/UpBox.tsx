import React from "react";

interface UpBoxProps {
    icon: React.FC;
    image: React.FC;
    title: string;
    content: string;
}

const UpBox: React.FC<UpBoxProps> = (props) => {

    return (
        <div className="w-full h-full flex flex-col border-[#6262624D] border-[1px] p-5">
            <div className="flex items-center gap-[38px]">
                <props.icon />
                <props.image />
            </div>
            <h6 className="font-poppins font-[600] text-[24px] leading-[86px] text-[#061012]">{props.title}</h6>
            <p className="font-inter font-[500] text-[16px] leading-[19.36px] text-[#444444]">{props.content}</p>
        </div>
    )
}

export default UpBox;