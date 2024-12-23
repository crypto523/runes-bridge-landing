import { useAppContext } from "@/context/AppContext";
import { useEffect, useRef, useState } from "react";
import { BottomBar, BottomBarLG, BottomBarMD, BuildingBottomIcon, ChartBottomIcon, DiscordBottomIcon, EthBottomIcon, NoteBottomIcon, ParachuteBottomIcon } from "./Icon";

interface BackgroundProps {
    ltr: boolean
}

const Background: React.FC<BackgroundProps> = ({ ltr }) => {
    const { orientation } = useAppContext();
    const backgroundRef = useRef<HTMLDivElement | null>(null);

    const [topGap, setTopGap] = useState<string>("15%");
    const [bottomGap, setBottomGap] = useState<string>("10%");
    const [cornerWidth, setCornerWidth] = useState<number>(2);
    const [points, setPoints] = useState<string>('')

    const [dimensions, setDimensions] = useState<{ width: number, height: number }>({ width: window.innerWidth, height: window.innerWidth })

    useEffect(() => {
        const handleGapSize = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth < 768) {
                setTopGap("48px");
                setBottomGap("44px");
                setCornerWidth(5);
            } else if (screenWidth < 1024) {
                setTopGap("90px");
                setBottomGap("83.5px");
                setCornerWidth(2);
            } else {
                if (orientation === "landscape") {
                    setTopGap("15%");
                    setBottomGap("10%");
                } else {
                    setTopGap("90px");
                    setBottomGap("83.5px");
                }

                setCornerWidth(2);
            }

            setDimensions({
                width: backgroundRef.current?.clientWidth!,
                height: backgroundRef.current?.clientHeight!
            });
        }

        handleGapSize();

        window.addEventListener("resize", handleGapSize);

        return () => {
            window.removeEventListener("resize", handleGapSize);
        }
    }, [])

    return (
        <div className="absolute inset-0">
            <svg
                width="100%"
                height="100%"
                className="z-30"
                style={ltr ? {} : { transform: "rotateY(180deg)" }}
                xmlns="http://www.w3.org/2000/svg"
            >
                <line
                    x1="0"
                    y1="100%"
                    x2="0"
                    y2="2%"
                    stroke="var(--color-secondary)"
                    strokeWidth={1.5}
                    vectorEffect="non-scaling-stroke"
                />
                <line
                    x1="0"
                    y1="2%"
                    x2={`${cornerWidth}%`}
                    y2="0"
                    stroke="var(--color-secondary)"
                    strokeWidth={0.7}
                    vectorEffect="non-scaling-stroke"
                />
                <line
                    x1={`${cornerWidth}%`}
                    y1="0"
                    x2="53%"
                    y2="0"
                    stroke="var(--color-secondary)"
                    strokeWidth={1.5}
                    vectorEffect="non-scaling-stroke"
                />
                <line
                    x1="53%"
                    y1="0"
                    x2="60%"
                    y2={topGap}
                    stroke="var(--color-secondary)"
                    strokeWidth={0.8}
                    vectorEffect="non-scaling-stroke"
                />
                <line
                    x1="60%"
                    y1={topGap}
                    x2={`calc(100% - ${cornerWidth}%)`}
                    y2={topGap}
                    stroke="var(--color-secondary)"
                    strokeWidth={0.8}
                    vectorEffect="non-scaling-stroke"
                />
                <line
                    x1={`calc(100% - ${cornerWidth}%)`}
                    y1={topGap}
                    x2="100%"
                    y2={`calc(${topGap} + 2%)`}
                    stroke="var(--color-secondary)"
                    strokeWidth={0.8}
                    vectorEffect="non-scaling-stroke"
                />
                <line
                    x1="100%"
                    y1={`calc(${topGap} + 2%)`}
                    x2="100%"
                    y2={`calc(98% - ${bottomGap})`}
                    stroke="var(--color-secondary)"
                    strokeWidth={1.5}
                    vectorEffect="non-scaling-stroke"
                />
                {/* <line
                    className="hidden lg:block"
                    x1="100%"
                    y1={`calc(98% - ${bottomGap})`}
                    x2="100%"
                    y2={`calc(100% - ${bottomGap})`}
                    stroke="#C4C3CB"
                    strokeWidth={1.5}
                    vectorEffect="non-scaling-stroke"
                /> */}
                <line
                    x1="100%"
                    y1={`calc(98% - ${bottomGap})`}
                    x2={`calc(100% - ${cornerWidth}%)`}
                    y2={`calc(100% - ${bottomGap})`}
                    stroke="var(--color-secondary)"
                    strokeWidth={0.8}
                    vectorEffect="non-scaling-stroke"
                />
                <line
                    x1={`calc(100% - ${cornerWidth}%)`}
                    y1={`calc(100% - ${bottomGap})`}
                    x2="30%"
                    y2={`calc(100% - ${bottomGap})`}
                    stroke="var(--color-secondary)"
                    strokeWidth={1}
                    vectorEffect="non-scaling-stroke"
                />
                <line
                    x1="30%"
                    y1={`calc(100% - ${bottomGap})`}
                    x2="24%"
                    y2="100%"
                    stroke="var(--color-secondary)"
                    strokeWidth={0.8}
                    vectorEffect="non-scaling-stroke"
                />
                <line
                    x1="0"
                    y1="100%"
                    x2="24%"
                    y2="100%"
                    stroke="var(--color-secondary)"
                    strokeWidth={1.5}
                />
            </svg>
            <div className={`absolute bottom-0 -z-10 ${ltr ? 'right-0' : 'left-0 bottom'} translate-y-1 flex items-center justify-center gap-2 w-[75%] lg:landscape:w-[70%] lg:bg-black lg:gap-3 xl:gap-5 2xl:gap-8`} style={{ height: bottomGap }}>
                <BottomBar className="absolute inset-0 w-full h-full -z-10 lg:hidden" />
                <BottomBarMD className="absolute inset-0 w-full h-full -z-10 hidden lg:portrait:flex" />
                <BottomBarLG className="absolute left-0 top-0 hidden lg:landscape:flex -translate-x-5" />
                <DiscordBottomIcon className="md:w-11 md:h-11 2xl:w-14 2xl:h-14" />
                <EthBottomIcon className="md:w-11 md:h-11 2xl:w-14 2xl:h-14" />
                <ChartBottomIcon className="md:w-11 md:h-11 2xl:w-14 2xl:h-14" />
                <BuildingBottomIcon className="md:w-11 md:h-11 2xl:w-14 2xl:h-14" />
                <ParachuteBottomIcon className="md:w-11 md:h-11 2xl:w-14 2xl:h-14" />
                <NoteBottomIcon className="md:w-11 md:h-11 2xl:w-14 2xl:h-14" />
            </div>
            {/* <div className={`absolute bottom-0 left-[24%] w-[70%] bg-black`} style={{ height: bottomGap }}>
                
            </div> */}
        </div>
    )
}

export default Background;