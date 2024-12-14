import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

interface LoadingProps {
    onFinishLoading: () => void; // Callback for when loading is finished
}

const Loading: React.FC<LoadingProps> = ({ onFinishLoading }) => {
    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
        gsap.to("#loadingbar>div", {
            opacity: 1,
            repeat: -1,
            stagger: 0.2,
            ease: "elastic",
        });
        gsap.to("#progress", {
            duration: 2,  // Duration of the animation (in seconds)
            innerHTML: 100,  // Final value to animate to
            ease: 'power1.out',  // Easing for the animation
            snap: { innerHTML: 10 },  // Snap to whole numbers to avoid decimals
            onComplete: () => {
                onFinishLoading();
            }
        });
    });

    return (
        <div className="absolute top-0 left-0 right-0 h-[100vh] bg-black flex flex-col items-center justify-center">
            <div className="relative w-[100px] h-[100px] flex" id="loadingbar">
                <div className="absolute bottom-0 right-0 w-[50px] h-[20px] bg-white opacity-0"></div>
                <div className="absolute bottom-0 right-[50px] w-[30px] h-[20px] bg-white opacity-0"></div>
                <div className="absolute bottom-0 left-0 w-[20px] h-[50px] bg-white opacity-0"></div>
                <div className="absolute bottom-[50px] left-0 w-[20px] h-[30px] bg-white opacity-0"></div>
                <div className="absolute top-0 left-0 w-[50px] h-[20px] bg-white opacity-0"></div>
                <div className="absolute top-0 left-[50px] w-[30px] h-[20px] bg-white opacity-0"></div>
                <div className="absolute top-0 right-0 w-[20px] h-[50px] bg-white opacity-0"></div>
                <div className="absolute top-[50px] right-0 w-[20px] h-[30px] bg-white opacity-0"></div>
            </div>
            <div className="mt-[20px] font-conthrax text-[#BACAD5] font-semibold text-[20px] leading-[24px]">
                Loading... <span id="progress">0</span>
            </div>
        </div>
    );
};

export default Loading;
