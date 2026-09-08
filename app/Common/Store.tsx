"use client";
import React from "react";
import Image from "next/image";

const Store = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#faf7f2] pb-8 ">
      <div className="bg-bg-header w-82 h-110.5 rounded-xl flex flex-col gap-3 justify-center items-center text-center sm:w-314 sm:h-86 sm:flex-row sm:justify-around sm:p-4 sm:items-center">
        <div className="flex flex-col items-center justify-center gap-3 sm:justify-start sm:items-start sm:flex sm:flex-col sm:text-start">
          <h1 className="text-[30px] text-white font-medium sm:text-[36px]">
            Get fresh groceries in minutes
          </h1>

          <p className="text-[#ffffffb3] text-[16px] w-78 h-18 text-center sm:text-start sm:text-[16px] sm:w-120 sm:h-12 sm:font-medium">
            Download the InstantMart app for exclusive deals, real-time
            tracking, and the freshest selection delivered right to your door.
          </p>

          <div className="flex justify-center items-center gap-3">
            <button className="w-30.25 h-12.5 text-bg-header bg-white text-[16px] font-medium border rounded-[10px]">
              App Store
            </button>
            <button className="w-34.25 h-12.5 text-[16px] border rounded-[10px] bg-[#ffffff1a] text-white border-[#ffffff33]">
              Google Play
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/delivery_truck.svg"
            alt="delivery_truck"
            height={240}
            width={101}
            className="w-60 h-25.25 sm:w-120 sm:h-46"
          />
        </div>
      </div>
    </div>
  );
};

export default Store;
