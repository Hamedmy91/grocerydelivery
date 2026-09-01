"use client";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="bg-[#faf7f2]">
        <div className="flex justify-center items-center ">
          <Image src="/herobg.WEBP" alt="herobg" width={343} height={538} className="rounded-[10px]" />
        </div>
      </div>
    </>
  );
};

export default Hero;
