"use client";

import React from "react";
import Image from "next/image";
import { LuLeaf } from "react-icons/lu";
import { IoArrowForward } from "react-icons/io5";
import Special from "./Special";

const Hero = () => {
  return (
    <div className="bg-[#faf7f2] px-4 pt-16 pb-24">
      <div className="flex justify-center flex-col gap-4 sm:items-center sm:justify-center">
        <div className="relative h-134.5 w-85.75 overflow-hidden rounded-[15px] sm:h-135 sm:w-275 flex flex-col ">
          <Image
            src="/herobg.webp"
            alt="herobg"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#173b28]/90 via-[#173b28]/50 to-transparent" />
          <div className="relative z-10 flex flex-col gap-4 pt-22 pl-4 sm:pl-10 sm:flex sm:flex-col sm:gap-6">
            <div className="flex gap-2 text-[#ffb86a] text-[12px] rounded-full font-medium bg-[#ffb86a1a] w-43 h-7 justify-center items-center">
              <i>
                <LuLeaf />
              </i>
              <p> Farm-Fresh & Organic</p>
            </div>
            <h1 className="text-[36px] w-78 h-22.5 text-white sm:text-[60px] sm:w-134 sm:h-37.5 ">
              Nourish your home with
              <span className="text-[#ffb86a]">Earths finest</span>
            </h1>
            <p className="text-[#ffffffb3] text-[16px] w-78 h-19.5">
              Fresh, organic groceries delivered from local farms to your
              doorstep. Quality you can taste, convenience you deserve.
            </p>
            <div className="sm:flex sm:flex-row sm:gap-2 flex flex-col gap-3">
              <button className="bg-[#ff8904] w-38.25 h-12 flex justify-center  rounded-full font-medium gap-4 items-center text-[16px] text-white">
                <p>Shop Now</p>
                <i>
                  <IoArrowForward />
                </i>
              </button>
              <button className="bg-[#ffffff1a] text-white w-48.5 h-12.5 flex justify-center items-center  rounded-full border border-[#ffffff33] text-[16px] font-medium">
                Browse Categories
              </button>
            </div>
          </div>
        </div>
        <Special />
      </div>
    </div>
  );
};

export default Hero;
