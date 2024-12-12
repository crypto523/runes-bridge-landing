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
          top: "3.64%",
          right: "21.5%",
          translateX: "50%"
        },
        {
          top: "80%",
          right: "80.6%",
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "none",
        }
      )
      .fromTo(
        "#sol",
        {
          top: "10%",
          left: "16%",
        },
        {
          top: "90%",
          left: "75%",
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
          top: "50%",
          translateY: "-50%",
          right: "90%"
        },
        {
          right: "5%",
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
      className={`flex items-center justify-center p-3 ${props.class ? props.class : 'opacity-0 translate-y-[200px]'}`}
      id="planet"
    >
      <div className="relative lg:w-[658px] lg:h-[478px] ">
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
          className="absolute w-[25px] h-[25px] lg:w-[45px] lg:h-[45px]"
        />
        <Image
          src="/SOL.svg"
          id="sol"
          width={45}
          height={45}
          alt="ETH"
          className="absolute w-[25px] h-[25px] lg:w-[45px] lg:h-[45px]"
        />
        <Image
          src="/BIT.svg"
          id="bitcoin"
          width={45}
          height={45}
          alt="ETH"
          className="absolute w-[25px] h-[25px] lg:w-[45px] lg:h-[45px]"
        />
        <Image
          src="/logo.svg"
          id="logop"
          width={60}
          height={60}
          alt="logo"
          className="absolute top-[12%] right-[47%]"
        />
        <Image
          src="/logo.svg"
          id="logop"
          width={50}
          height={50}
          alt="logo"
          className="absolute bottom-[12%] right-[47%] "
        />
      </div>
    </div>
  );
};

export default Planet;
