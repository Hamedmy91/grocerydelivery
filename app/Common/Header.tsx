"use client";

import { useState } from "react";
import { IoIosBicycle } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header className="relative z-50">
      <div className="flex justify-between items-center gap-4 p-4 max-w-6xl mx-auto">
        <div className="flex gap-2 items-center text-header shrink-0">
          <i className="text-[24px]">
            <IoIosBicycle />
          </i>
          <p className="text-[22px] font-bold">InstantMart</p>
        </div>

        <div className="hidden sm:flex flex-1 justify-center items-center gap-8">
          <ul className="flex gap-6 items-center text-header-res text-[14px] font-medium">
            <li className="cursor-pointer hover:text-header transition-colors">
              Home
            </li>
            <li className="cursor-pointer hover:text-header transition-colors">
              Products
            </li>
            <li className="cursor-pointer text-header-res-1">Deals</li>
          </ul>
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search for groceries"
              className="border border-header-res-1 bg-[#f7f6f4] w-[384px] h-9 rounded-full pl-9 pr-4 text-[14px] text-header"
            />
            <i className="absolute left-3 text-[18px] text-header">
              <CiSearch />
            </i>
          </div>
        </div>

        <div className="flex gap-3 items-center text-header sm:hidden">
          <button className="text-[25px]">
            <IoCartOutline />
          </button>
          <button
            onClick={() => setMenu(!menu)}
            className="text-[26px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {menu ? <IoClose /> : <CiMenuBurger />}
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <i className="text-[24px] text-header cursor-pointer">
            <IoCartOutline />
          </i>

          <button className="flex gap-2 items-center h-9 px-4 rounded-full bg-header text-white cursor-pointer hover:opacity-90 transition-opacity">
            <FaRegUser className="text-[16px]" />
            <span className="text-[14px] font-medium whitespace-nowrap">
              Sign In
            </span>
          </button>
        </div>
      </div>

      {/*MOBILE MENU */}
      <div
        className={`sm:hidden absolute top-16 right-4 w-68 bg-white rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.12)] border border-[#eeeeee] overflow-hidden transition-all duration-200 origin-top-right ${menu ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}
      >
        <div className="px-5 py-4 text-[14px]">
          <button
            onClick={() => setMenu(false)}
            className="w-full flex items-center gap-5 py-3 text-[#74747d] text-[16px] text-left"
          >
            <FaRegUser className="text-[17px]" />
            <span>Sign In</span>
          </button>
          <button
            onClick={() => setMenu(false)}
            className="w-full flex items-center gap-5 py-3 text-[#74747d] text-[16px] text-left"
          >
            <FiArrowUpRight className="text-[14px]" />
            <span>Products</span>
          </button>
          <button
            onClick={() => setMenu(false)}
            className="w-full flex items-center gap-5 py-3 text-[#74747d] text-[16px] text-left"
          >
            <FiArrowUpRight className="text-[18px]" />
            <span>Deals</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
