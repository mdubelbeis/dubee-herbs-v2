import Image from "next/image";
import React from "react";

interface LogoProps {
  height: number;
  width: number;
  layout: string;
}

const Logo: React.FC<LogoProps> = ({ height, width, layout }) => {
  let filteredStyles = "";
  if (layout === "desktop") {
    filteredStyles = `absolute bottom-0 -right-24 rotate-12`;
  }

  return (
    <Image
      src={"/logo/bee-revise.png"}
      alt="logo"
      width={width}
      height={height}
      className={filteredStyles}
    />
  );
};

export default Logo;
