import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

interface LoadingProps {
    setPreloading: (preloading: boolean) => void;
}

const Loading: React.FC<LoadingProps> = ({ setPreloading }) => {
    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
        // Ensure GSAP animation runs smoothly
        gsap.to('#loadingbar div', { opacity: 1, repeat: -1, stagger: 0.2, ease: "none" });

        // Timer to increment progress
        const progressTimer = setInterval(() => {
            setProgress((lastProgress) => {
                if (lastProgress >= 100) {
                    clearInterval(progressTimer); // Stop timer at 100%
                    setPreloading(false);
                    return 100; // Ensure it doesn't exceed 100
                }
                return lastProgress + 10; // Increment by 10
            });
        }, 200);

        // Cleanup interval on unmount
        return () => clearInterval(progressTimer);
    }, []);

    return (
        <div className="absolute inset-0 bg-black flex flex-col items-center justify-center">
            <div className="relative w-[100px] h-[100px] flex" id='loadingbar'>
                <div className='absolute bottom-0 right-0 w-[50px] h-[20px] bg-white opacity-0'></div>
                <div className='absolute bottom-0 right-[50px] w-[30px] h-[20px] bg-white opacity-0'></div>
                <div className='absolute bottom-0 left-0 w-[20px] h-[50px] bg-white opacity-0'></div>
                <div className='absolute bottom-[50px] left-0 w-[20px] h-[30px] bg-white opacity-0'></div>
                <div className='absolute top-0 left-0 w-[50px] h-[20px] bg-white opacity-0'></div>
                <div className='absolute top-0 left-[50px] w-[30px] h-[20px] bg-white opacity-0'></div>
                <div className='absolute top-0 right-0 w-[20px] h-[50px] bg-white opacity-0'></div>
                <div className='absolute top-[50px] right-0 w-[20px] h-[30px] bg-white opacity-0'></div>
            </div>
            <div className='mt-[20px] font-conthrax text-[#BACAD5] font-semibold text-[20px] leading-[24px]'>
                Loading... <span>{progress}</span>
            </div>
        </div>
    );
};

export default Loading;
