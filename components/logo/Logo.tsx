import Image from "next/image";
import React from "react";

const Logo: React.FC = () => {
  return (
    <Image src={"/logo/bee-revise.png"} alt="logo" width={100} height={100} />
  );
};

export default Logo;