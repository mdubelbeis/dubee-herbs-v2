import Image from "next/image";
import React from "react";

interface LogoProps {
  position: string;
  height: number;
  width: number;
}

const Logo: React.FC<LogoProps> = ({ position, height, width }) => {
  return (
    <Image
      src={"/logo/bee-revise.png"}
      alt="logo"
      width={width}
      height={height}
      className={`${position} -top-6 -right-8 transform rotate-12`}
    />
  );
};

export default Logo;
