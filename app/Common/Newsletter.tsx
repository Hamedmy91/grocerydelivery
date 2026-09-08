"use client";
import React from "react";
import { CiMail } from "react-icons/ci";

const Newsletter = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#faf7f2]">
      <div className="bg-white flex flex-col gap-2 justify-center items-center border rounded-3xl border-[#faf7f2] w-85.75 h-134.5 sm:w-315 sm:h-104">
        <div className="flex flex-col gap-4 justify-center items-center bg-white text-center">
          <i className="text-[32px] border text-header bg-white border-white shadow-xl/25 rounded-[5px] w-16 h-16 items-center justify-center flex">
            <CiMail />
          </i>
          <h1 className="text-[30px] text-header font-medium">
            Subscribe to our Newsletter
          </h1>
          <p className="text-[#6b7280] text-[16px] w-77.75 h-18 font-medium sm:w-2xl sm:h-12">
            Get weekly updates on fresh produce, seasonal offers, and exclusive
            discounts right to your inbox.
          </p>
          <div className="flex flex-col gap-3 sm:flex sm:flex-row sm:gap-2">
            <input
              type="text"
              placeholder="Enter Your email Address"
              className="border border-[#e5e7eb] rounded-xl p-2 text-header w-77.75 h-12.5 text-sm font-medium sm:w-88 sm:h-13"
            />
            <button className="w-77.75 h-13 border text-white border-header rounded-[10px] bg-header sm:w-33.75 sm:h-13">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
