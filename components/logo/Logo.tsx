import Image from "next/image";
import React from "react";
import logo from "../../public/logo/Du-Bee Herbs.png";

interface LogoProps {
  mobileWidth?: string;
  desktopWidth?: string;
  mobileHeight?: string;
  desktopHeight?: string;
}
const Logo: React.FC<LogoProps> = ({
  mobileHeight,
  mobileWidth,
  desktopHeight,
  desktopWidth,
}) => {
  return (
    <Image
      src={logo}
      alt="logo"
      className={`${mobileWidth} ${desktopWidth} ${mobileHeight} ${desktopHeight} justify-self-end`}
    />
  );
};

export default Logo;
