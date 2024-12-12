import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

interface PlanetProps {
  class?: string;
}

const Planet: React.FC<PlanetProps> = (props) => {
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
        "-=5"
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
        "-=5"
      )
      .fromTo("#logop", {
        scale: 0,
        opacity: 1
      }, {
        scale: 1.5,
        opacity: 0.7,
        duration: 3,
        repeat: -1,
        ease: "none"
      }, 0);
  });

  return (
    <div
      className={`flex items-center justify-center ${props.class ? props.class : 'opacity-0 translate-y-[200px]'}`}
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
        <Image
          src="/logo.svg"
          id="logop"
          width={60}
          height={60}
          alt="logo"
          className="absolute top-[75px] right-[310px] "
        />
        <Image
          src="/logo.svg"
          id="logop"
          width={50}
          height={50}
          alt="logo"
          className="absolute bottom-[35px] right-[310px] "
        />
      </div>
    </div>
  );
};

export default Planet;
