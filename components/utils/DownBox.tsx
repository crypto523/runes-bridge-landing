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
        <div className={`relative w-full h-full max-w-[340px] ${!props.background ? 'border-[1px] border-[#6262624D] bg-[#F6F5F54D]' : ''}`}>
            <div className={`w-full h-full flex flex-col justify-evenly p-3`}>
                <h6 className={`max-w-[200px] font-poppins font-[600] text-[3vh] leading-[3vh] text-primary ${props.background ? '' : ''}`}>{props.title}</h6>
                <p className="font-inter font-[500] text-[2.5vh] leading-[2.5vh] py-3 text-secondary">{props.content}</p>
                <div className="flex items-center gap-[38px]">
                    <props.icon />
                    <props.image />
                </div>
            </div>
            {props.background && <svg width="100%" height="99%" style={{position: "absolute", top: 0, right: 0, left: 0, bottom: 1}} xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="0" x2="80%" y2="0" stroke="var(--color-secondary)" strokeWidth={1.5} vectorEffect="non-scaling-stroke" />
                <line x1="80%" y1="0" x2="100%" y2="30%" stroke="var(--color-secondary)" strokeWidth={0.8} vectorEffect="non-scaling-stroke" />
                <line x1="100%" y1="30%" x2="100%" y2="100%" stroke="var(--color-secondary)" strokeWidth={1.5} vectorEffect="non-scaling-stroke" />
                <line x1="100%" y1="100%" x2="0" y2="100%" stroke="var(--color-secondary)" strokeWidth={0.8} vectorEffect="non-scaling-stroke" />
                <line x1="0" y1="100%" x2="0" y2="0" stroke="var(--color-secondary)" strokeWidth={1.5} vectorEffect="non-scaling-stroke" />
            </svg>}
        </div>
    )
}

export default DownBox;