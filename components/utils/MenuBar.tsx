import { Section } from "@/app/page";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { menuList } from "./constants";
import { Triangle } from "./Icons";
import { useAppContext } from "@/context/AppContext";

interface MenuBarProps {
    isOpened: boolean;
    setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
    isRight?: boolean;
    className?: string;
}

const MenuBar: React.FC<MenuBarProps> = ({
    isOpened,
    setIsOpened,
    isRight = false,
    className = ""
}) => {
    const { isMobile, viewSection, setViewSection } = useAppContext();

    const navigateSection = (section: Section) => {
        console.log("Log: ", viewSection, section, isMobile);
        setIsOpened(false);
        
        if (section === "CTOGOVERNANCE" || section === "RBVGOVERNANCE") {
            if (isMobile) {
                setViewSection(section);
            } else {
                setViewSection("GOVERNANCE")
            }
        } else {
            setViewSection(section);
        }
    };

    return (
        <div className={`absolute top-0 bottom-[30%] lg:bottom-0 w-[100%] lg:w-[47.5%] bg-primary transition-all ${isOpened ? "flex flex-col items-center justify-around" : "hidden"} ${isRight ? "right-0" : "left-0"} ${className}`}>
            <div className={`w-full h-full flex flex-col justify-around pt-[6vh] pb-[2vh] z-10 font-poppins font-[600] text-[20px] leading-[30px] text-white ${isRight ? "items-end pr-[6vw]" : "items-start pl-[6vw]"}`}>
                {menuList.map((menu, index) => (
                    <div className="cursor-pointer" key={index} onClick={() => navigateSection(menu.section)}>
                        {
                            menu.section === viewSection ?
                                <div className=" relative px-6 py-2" style={{ backgroundImage: `linear-gradient(135deg, white -95%, red)` }}>
                                    {menu.content}
                                    <Triangle className="absolute top-0 left-0" />
                                    <Triangle className="absolute bottom-0 right-0 rotate-180" />
                                </div> :
                                <div className="px-2">
                                    {menu.content}
                                </div>
                        }
                    </div>
                ))}
            </div>
            <div className={`w-full py-[4.5vh] gap-2 flex items-center border-[#FFFFFF4D] border-t-[0.5px] ${isRight ? 'pr-[7vw] justify-end' : 'pl-[7vw]'}`}>
                <svg width="42" height="32" viewBox="0 0 42 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M34.8582 2.652C32.2441 1.42388 29.443 0.51959 26.5126 0.00227285C26.4589 -0.00791055 26.4052 0.0165311 26.3793 0.0674481C26.0192 0.723259 25.6193 1.5807 25.3408 2.2528C22.1896 1.77011 19.0543 1.77011 15.9667 2.2528C15.6862 1.5644 15.2723 0.723259 14.9103 0.0674481C14.8824 0.0185678 14.8287 -0.00587387 14.777 0.00227285C11.8486 0.51959 9.04547 1.42388 6.43137 2.652C6.40948 2.66218 6.38958 2.67847 6.37566 2.70087C1.05991 10.8313 -0.39639 18.7621 0.317814 26.5952C0.321793 26.6339 0.341691 26.6706 0.371532 26.693C3.87889 29.3305 7.27687 30.9313 10.6112 31.9924C10.6649 32.0087 10.7206 31.9883 10.7544 31.9435C11.5422 30.8417 12.2465 29.6787 12.8493 28.4547C12.8851 28.3834 12.8492 28.2979 12.7776 28.2694C11.6615 27.8355 10.6012 27.308 9.5786 26.7093C9.49704 26.6604 9.4911 26.5422 9.56471 26.4852C9.77957 26.3202 9.99442 26.1492 10.1993 25.9761C10.2371 25.9435 10.2888 25.9374 10.3326 25.9577C17.0429 29.0942 24.3083 29.0942 30.9391 25.9577C30.9829 25.9353 31.0346 25.9435 31.0724 25.974C31.2773 26.1471 31.4921 26.3202 31.709 26.4852C31.7826 26.5422 31.7786 26.6604 31.6971 26.7093C30.6765 27.3203 29.6141 27.8376 28.4961 28.2694C28.4225 28.2979 28.3906 28.3834 28.4264 28.4567C29.0431 29.6767 29.7454 30.8397 30.5193 31.9435C30.5511 31.9904 30.6088 32.0107 30.6625 31.9944C34.0127 30.9333 37.4107 29.3325 40.918 26.695C40.9479 26.6726 40.9678 26.6359 40.9718 26.5993C41.8272 17.5442 39.5394 9.67854 34.91 2.70495C34.898 2.68255 34.8801 2.66422 34.8563 2.65403L34.8582 2.652ZM13.8479 21.8253C11.8266 21.8253 10.1635 19.9271 10.1635 17.5951C10.1635 15.2631 11.7968 13.3649 13.8479 13.3649C15.899 13.3649 17.5661 15.2815 17.5323 17.5951C17.5323 19.9271 15.899 21.8253 13.8479 21.8253ZM27.4735 21.8253C25.4522 21.8253 23.7891 19.9271 23.7891 17.5951C23.7891 15.2631 25.4224 13.3649 27.4735 13.3649C29.5246 13.3649 31.1917 15.2815 31.1579 17.5951C31.1579 19.9271 29.5425 21.8253 27.4735 21.8253Z" fill="white" />
                </svg>
                <svg width="42" height="32" viewBox="0 0 41 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.19933 14.587C1.29119 14.5426 1.38309 14.5004 1.47265 14.4605C3.02966 13.7634 4.60735 13.1107 6.18273 12.458C6.2677 12.458 6.41005 12.3626 6.49043 12.3315C6.61214 12.2804 6.73387 12.2316 6.85559 12.1805C7.08983 12.0829 7.32408 11.9874 7.55603 11.8897C8.02451 11.6966 8.49066 11.5034 8.95914 11.3103L11.7631 10.1492C13.6325 9.37668 15.5041 8.6019 17.3735 7.82934C19.2428 7.05678 21.1144 6.282 22.9838 5.50945C24.8531 4.73689 26.7247 3.96212 28.5941 3.18956C30.4634 2.41701 32.3351 1.64223 34.2044 0.869668C34.6201 0.696509 35.0702 0.438983 35.5157 0.363503C35.89 0.299123 36.2551 0.17481 36.6317 0.10599C37.3459 -0.0249896 38.1336 -0.0782646 38.818 0.208115C39.0545 0.308014 39.2727 0.447873 39.4541 0.623252C40.3222 1.45353 40.2005 2.8166 40.0168 3.98431C38.7376 12.1228 37.4585 20.2635 36.177 28.402C36.0025 29.5187 35.7637 30.7441 34.852 31.4501C34.0803 32.0473 32.9826 32.1138 32.0296 31.8608C31.0765 31.6055 30.2361 31.0705 29.4116 30.5443C25.9922 28.3554 22.5704 26.1665 19.151 23.9776C18.338 23.4581 17.4332 22.7788 17.4424 21.8353C17.447 21.267 17.7983 20.7608 18.1566 20.3102C21.1282 16.5628 25.4157 13.9876 28.6056 10.4134C29.0557 9.90948 29.4093 8.99928 28.7916 8.70846C28.4241 8.5353 28.0016 8.77062 27.6663 8.99484C23.4499 11.8253 19.2359 14.658 15.0196 17.4885C13.644 18.4121 12.2018 19.3622 10.5437 19.5887C9.06022 19.7929 7.56752 19.3933 6.13222 18.9848C4.92886 18.6429 3.72776 18.2922 2.5313 17.9303C1.89517 17.7394 1.23837 17.5329 0.746927 17.1C0.25548 16.6671 -0.0269494 15.939 0.269297 15.3618C0.455312 14.9999 0.815866 14.7713 1.19479 14.5848L1.19933 14.587Z" fill="#FEFFFC" />
                </svg>
            </div>
            <svg
                width="100%"
                height="100%"
                className="absolute top-0 left-0 -z-0"
                xmlns="http://www.w3.org/2000/svg"
            >
                <line
                    x1={isRight ? "10%" : "90%"}
                    y1="0%"
                    x2={isRight ? "10%" : "90%"}
                    y2="100%"
                    stroke="#FFFFFF4D"
                    strokeWidth={0.8}
                />
            </svg>
        </div>
    );
};

export default MenuBar;
