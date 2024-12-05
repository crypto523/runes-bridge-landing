import React from "react";
import Image from "next/image";

const Planet: React.FC = () => {

    return (
        <div className="flex items-center justify-center opacity-0 translate-y-[200px]" id="planet">
            <Image src="/planet.png" width={658} height={478} alt="planet" priority />
        </div>
    )
}

export default Planet;