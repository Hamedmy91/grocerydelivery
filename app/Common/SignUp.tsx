// app/Common/Signup.tsx
"use client";

import Link from "next/link";
import { IoIosBicycle } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdPersonOutline } from "react-icons/md";


const Signup = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full min-h-screen bg-[#faf7f2] px-6">
      <Link href="/" className="flex gap-2 items-center text-header shrink-0">
        <i className="text-[32px]">
          <IoIosBicycle />
        </i>
        <p className="text-[24px] font-bold">InstantMart</p>
      </Link>

      <p className="text-[24px] text-header font-bold mt-4">
        Create your account
      </p>

      <p className="text-[14px] text-[#6b7280]">
        Already have an account?
        <Link
          href="/Sign"
          className="text-[#ff6900] font-medium hover:underline"
        >
          Sign In
        </Link>
      </p>

      <div className="w-full max-w-md flex flex-col gap-4 mt-2">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-[14px] font-medium text-header"
          >
            Name
          </label>
          <div className="relative w-full">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-[18px]">
              <MdPersonOutline />
            </span>
            <input
              id=" Name"
              type="email"
              placeholder="Your Name"
              className="w-full h-12 rounded-lg border border-gray-300 pl-11 pr-4 outline-none focus:border-[#ff6900] bg-white"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-[14px] font-medium text-header"
          >
            Email Address
          </label>
          <div className="relative w-full">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-[18px]">
              <HiOutlineMail />
            </span>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full h-12 rounded-lg border border-gray-300 pl-11 pr-4 outline-none focus:border-[#ff6900] bg-white"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="password"
            className="text-[14px] font-medium text-header"
          >
            Password
          </label>
          <div className="relative w-full">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-[18px]">
              <RiLockPasswordLine />
            </span>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full h-12 rounded-lg border border-gray-300 pl-11 pr-4 outline-none focus:border-[#ff6900] bg-white"
            />
          </div>
        </div>

        <button className="w-full h-12 rounded-lg bg-[#0a2e1a] text-white font-medium mt-1 hover:opacity-90 transition-opacity">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;
