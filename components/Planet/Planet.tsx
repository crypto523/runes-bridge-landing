import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

const Planet: React.FC = () => {
  useEffect(() => {
    gsap
      .timeline()
      .fromTo(
        "#eth",
        {
          top: 24,
          right: 125,
        },
        {
          top: 400,
          right: 520,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "none",
        }
      )
      .fromTo(
        "#sol",
        {
          top: 40,
          left: 95,
        },
        {
          top: 400,
          left: 470,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "none",
        },
        "-=1"
      )
      .fromTo(
        "#bitcoin",
        {
          right: 580
        },
        {
          right: 40,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "none",
        },
        "-=1"
      );
  });

  return (
    <div
      className="flex items-center justify-center opacity-0 translate-y-[200px]"
      id="planet"
    >
      <div className="relative w-[658px] h-[478px] ">
        <Image
          src="/planet.png"
          width={658}
          height={478}
          alt="planet"
          priority
        />
        <Image
          src="/ETH.svg"
          id="eth"
          width={45}
          height={45}
          alt="ETH"
          className="absolute top-[24px] right-[125px] "
        />
        <Image
          src="/SOL.svg"
          id="sol"
          width={45}
          height={45}
          alt="ETH"
          className="absolute top-[400px] left-[470px] "
        />
        <Image
          src="/BIT.svg"
          id="bitcoin"
          width={45}
          height={45}
          alt="ETH"
          className="absolute top-[218px] right-[580px] "
        />
      </div>
    </div>
  );
};

export default Planet;
