"use client";

import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { LuLeaf } from "react-icons/lu";
import { MdOutlineAccessTime } from "react-icons/md";
import { SiAdguard } from "react-icons/si";

const Special = () => {
  return (
    <>
      <div className="grid grid-cols-2 bg-white w-86 h-49.5 rounded-2xl p-5 gap-5 sm:flex sm:flex-row sm:justify-around sm:w-275 sm:h-26.5 sm:items-center">
        <div className="flex gap-4 items-center justify-center sm:w-69 sm:h-16">
          <i className="border border-[#faf7f2]  bg-[#faf7f2] w-10 h-10 text-[20px] text-header rounded-[5px] flex justify-center items-center">
            <CiDeliveryTruck />
          </i>
          <div>
            <p className="text-header text-[14px] font-medium">Free delivery</p>
            <p className="text-[12px] text-[#6b7280] font-medium">
              Orders over $20
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center justify-center sm:w-69 sm:h-16">
          <i className="border border-[#faf7f2]  bg-[#faf7f2] w-10 h-10 text-[20px] text-header rounded-[5px] flex justify-center items-center">
            <LuLeaf />
          </i>
          <div>
            <p className="text-header text-[14px] font-medium">100% Organic</p>
            <p className="text-[12px] text-[#6b7280] font-medium">
              Certified products
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center justify-center sm:w-69 sm:h-16">
          <i className="border border-[#faf7f2]  bg-[#faf7f2] w-10 h-10 text-[20px] text-header rounded-[5px] flex justify-center items-center">
            <MdOutlineAccessTime />
          </i>
          <div>
            <p className="text-header text-[14px] font-medium">Same Day</p>
            <p className="text-[12px] text-[#6b7280] font-medium truncate">
              Express delivery
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center justify-center sm:w-69 sm:h-16">
          <i className="border border-[#faf7f2]  bg-[#faf7f2] w-10 h-10 text-[20px] text-header rounded-[5px] flex justify-center items-center">
            <SiAdguard />
          </i>
          <div>
            <p className="text-header text-[14px] font-medium">Secure Pay</p>
            <p className="text-[12px] text-[#6b7280] font-medium">
              Safe checkout
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Special;
