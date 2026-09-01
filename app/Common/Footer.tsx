"use client";
import React from "react";
import { IoIosBicycle } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="bg-header overflow-x-hidden">
        <div className="flex flex-col h-175  gap-6 justify-start items-start p-6 sm:flex sm:flex-row sm:gap-4 sm:justify-around sm:max-w-7xl sm:mx-auto sm:items-start sm:h-88">
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-center text-white">
              <i className="text-[24px]">
                <IoIosBicycle />
              </i>
              <p className="text-[22px]">InstantMart</p>
            </div>
            <p className="text-[#ffffffb3] text-[14px] max-w-85.75 font-semibold">
              Bringing fresh, organic groceries straight from local farms to
              your doorstep. Nourish your home with Earths finest.
            </p>
            <div className="text-white flex gap-4">
              <i className="border w-9 h-9 rounded-[5px] flex justify-center items-center border-bg-header bg-[#ffffff1a]">
                <FaFacebook />
              </i>
              <i className="border w-9 h-9 rounded-[5px] flex justify-center items-center border-bg-header bg-[#ffffff1a]">
                <FaXTwitter />
              </i>
              <i className="border w-9 h-9 rounded-[5px] flex justify-center items-center border-bg-header bg-[#ffffff1a]">
                <FaInstagram />
              </i>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-3">
            <label htmlFor="" className="text-white text-[14px] font-bold">
              QUICK LINKS
            </label>
            <ul className="text-[#ffffffb3] text-[14px] flex flex-col gap-3 font-medium">
              <li>All Products</li>
              <li>Flash Deals</li>
              <li>Track Order</li>
              <li>Delivery Partner</li>
            </ul>
          </div>
          <div className="flex flex-col justify-start items-start gap-3">
            <label htmlFor="" className="text-white text-[14px] font-bold">
              CUSTOMER SERVICE
            </label>
            <ul className="text-[#ffffffb3] text-[14px] flex flex-col gap-3 font-medium">
              <li>My Account</li>
              <li>Order History</li>
              <li>Addresses</li>
              <li>Help Center</li>
            </ul>
          </div>
          <div className="flex flex-col justify-start items-start gap-3 ">
            <label htmlFor="" className="text-white text-[14px] font-bold">
              Contact Us
            </label>
            <ul className="text-[#ffffffb3] text-[14px] flex flex-col gap-3 font-medium">
              <li className="flex gap-2 items-center">
                <i>
                  <SlLocationPin />
                </i>
                <p className="text-[#ffffffb3] text-[14px] flex flex-col gap-3 font-medium">
                  123 Green Valley Rd, Portland
                </p>
              </li>
              <li className="flex gap-2 items-center">
                <i>
                  <FaPhone />
                </i>
                <p className="text-[#ffffffb3] text-[14px] flex flex-col gap-3 font-medium">
                  +1 (111) 123-4567
                </p>
              </li>
              <li className="flex gap-2 items-center">
                <i>
                  <MdOutlineEmail />
                </i>
                <p className="text-[#ffffffb3] text-[14px] flex flex-col gap-3 font-medium">
                  hello@example.com
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#3a4a3e] mb-6 mx-4" />
        <div className="flex flex-col items-center gap-4 pb-10 text-[12px] text-[#ffffff80] sm:flex sm:flex-row sm:justify-between sm:items-center sm:max-w-6xl sm:mx-auto sm:pb-10">
          <p>© 2026 Greatstack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
