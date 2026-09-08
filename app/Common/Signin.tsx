"use client";

import React from "react";
import Image from "next/image";
import { IoIosBicycle } from "react-icons/io";
import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
const Signin = () => {
  return (
    <div className="min-h-screen w-full flex">
      <div className="relative hidden lg:flex w-1/2 min-h-screen items-center justify-center overflow-hidden">
        <Image
          src="/herobg.webp"
          alt="herobg"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 z-10 bg-black/50" />

        <div className="relative z-20 text-center px-10 text-white">
          <h1 className="text-3xl font-bold mb-4">
            Welcome back to InstantMart
          </h1>

          <p className="text-white/80 text-lg">
            Fresh groceries and organic produce,
            <br />
            delivered to your doorstep.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center w-full lg:w-1/2 min-h-screen bg-[#faf7f2] px-6">
        <Link href="/" className="flex gap-2 items-center text-header shrink-0">
          <i className="text-[32px]">
            <IoIosBicycle />
          </i>
          <p className="text-[24px] font-bold">InstantMart</p>
        </Link>

        <p className="text-[24px] text-header font-bold mt-4">
          Sign in to your account
        </p>

        <p className="text-[14px] text-[#6b7280]">
          Don&apos;t have an account?{" "}
          <Link
            href="/Signup"
            className="text-[#ff6900] font-medium hover:underline"
          >
            Create one
          </Link>
        </p>

        {/* Form */}
        <div className="w-full max-w-md flex flex-col gap-4 mt-2">
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
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
