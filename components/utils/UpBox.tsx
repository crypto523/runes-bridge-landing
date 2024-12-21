import { IconProps } from "@/types/style";
import React from "react";

interface UpBoxProps {
    icon?: React.FC<IconProps>;
    image?: React.FC<IconProps>;
    title: string;
    content: string;
    className?: string;
}

const UpBox: React.FC<UpBoxProps> = (props) => {

    return (
        <div className={`w-full h-full flex flex-col justify-start md:gap-2 border-[#6262624D] border-[1px] px-3.5 py-4 md:px-10 md:py-10 lg:px-5 lg:py-5 lg:justify-evenly lg:landscape:px-2 lg:landscape:py-2 xl:landscape:px-5 xl:landscape:py-5 2xl:landscape:px-10 2xl:landscape:py-10 bg-[#F6F5F54D] ${props.className}`}>
            <div className="flex items-center justify-end gap-3.5 md:justify-between md:flex-row-reverse">
                {props.image && <props.image className="" />}
                {props.icon && <props.icon className="w-10 h-10 md:w-20 md:h-20 lg:landscape:w-14 2xl:landscape:w-20" />}
            </div>
            <div>
                <h3 className="md:text-2xl">{props.title}</h3>
                <p className="font-inter font-normal text-[10px] leading-3 text-secondary md:text-base">{props.content}</p>
            </div>
        </div>
    )
}

export default UpBox;