import { useEffect, useState } from "react";

interface BackgroundProps {
    ltr: boolean
}

const Background: React.FC<BackgroundProps> = ({ ltr }) => {
    const [topGap, setTopGap] = useState<string>("15%");
    const [bottomGap, setBottomGap] = useState<string>("10%");
    const [cornerWidth, setCornerWidth] = useState<string>("2%");

    useEffect(() => {
        const handleGapSize = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth < 768) {
                setTopGap("48px");
                setBottomGap("44px");
                setCornerWidth("5%");
            } else if (screenWidth <= 1024) {
                setTopGap("90px");
                setBottomGap("83.5px");
                setCornerWidth("2%");
            } else {
                setTopGap("15%");
                setBottomGap("10%");
                setCornerWidth("2%");
            }
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
                className="z-20"
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
                    x2={cornerWidth}
                    y2="0"
                    stroke="var(--color-secondary)"
                    strokeWidth={0.7}
                    vectorEffect="non-scaling-stroke"
                />
                <line
                    x1={cornerWidth}
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
                    x2={`calc(100% - ${cornerWidth})`}
                    y2={topGap}
                    stroke="var(--color-secondary)"
                    strokeWidth={0.8}
                    vectorEffect="non-scaling-stroke"
                />
                <line
                    x1={`calc(100% - ${cornerWidth})`}
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
                <line
                    x1="100%"
                    y1={`calc(98% - ${bottomGap})`}
                    x2={`calc(100% - ${cornerWidth})`}
                    y2={`calc(100% - ${bottomGap})`}
                    stroke="var(--color-secondary)"
                    strokeWidth={0.8}
                    vectorEffect="non-scaling-stroke"
                />
                <line
                    x1={`calc(100% - ${cornerWidth})`}
                    y1={`calc(100% - ${bottomGap})`}
                    x2="30%"
                    y2={`calc(100% - ${bottomGap})`}
                    stroke="var(--color-secondary)"
                    strokeWidth={0.8}
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
                {/* <polygon
                points={`${dimensions.width * 0.25 + dimensions.height * 0.01},${dimensions.height * 1
                    } ${dimensions.width * 0.3 + dimensions.height * 0.004},${dimensions.height * 0.907
                    } ${dimensions.width * 0.95},${dimensions.height * 0.907} ${dimensions.width * 0.95
                    },${dimensions.height * 1}`}
                fill="black"
            /> */}
            </svg>
            <svg
                width="100%"
                height="100%"
                className="absolute top-0 z-10"
                style={ltr ? {} : { transform: "rotateY(180deg)" }}
                xmlns="http://www.w3.org/2000/svg"
            >
                <polygon
                    points={`
                        0,100% 
                        0,2% 
                        ${cornerWidth},0 
                        53%,0 
                        60%,${topGap} 
                        calc(100% - ${cornerWidth}),${topGap} 
                        100%,calc(${topGap} + 2%) 
                        100%,calc(98% - ${bottomGap}) 
                        calc(100% - ${cornerWidth}),calc(100% - ${bottomGap}) 
                        30%,calc(100% - ${bottomGap}) 
                        24%,100% 
                        0,100%
                    `}
                    stroke="none"
                    fill="white"
                    vectorEffect="non-scaling-stroke"
                />
            </svg>
        </div>
    )
}

export default Background;