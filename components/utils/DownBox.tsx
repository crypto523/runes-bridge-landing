import React from "react";
import Image from "next/image";

interface DownBoxProps {
    icon: React.FC;
    image: React.FC;
    title: string;
    content: string;
    background?: string
}

const DownBox: React.FC<DownBoxProps> = (props) => {

    return (
        <div className={`relative w-full h-full ${!props.background ? 'border-[1px] border-[#6262624D] bg-[#F6F5F54D]' : ''}`}>
            {props.background && <Image src="/infra_bg.svg" width={295} height={225} alt="background" style={{height: "auto"}} />}
            <div className={`flex flex-col p-5 ${props.background ? 'absolute top-0' : ''}`}>
                <h6 className={`font-poppins font-[600] text-[24px] leading-[25px] text-[#061012] z-10 ${props.background ? 'max-w-[220px]' : ''}`}>{props.title}</h6>
                <p className="font-inter font-[500] text-[16px] leading-[19.36px] text-[#444444] mt-[15px] z-10">{props.content}</p>
                <div className="flex items-center gap-[38px] mt-[10px] z-10">
                    <props.icon />
                    <props.image />
                </div>
            </div>
        </div>
    )
}

export default DownBox;