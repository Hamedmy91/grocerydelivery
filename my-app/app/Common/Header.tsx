
import React from "react";
import { IoIosBicycle } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";


const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center p-4">
        <div className="flex gap-2 items-center text-header">
          <i className="text-[24px]">
            <IoIosBicycle />
          </i>
          <p className="text-[22px]">InstantMart</p>
        </div>
        <div className="hidden sm:flex">
          <ul className="flex gap-3 items-center text-header-res text-[14px] font-medium">
            <li>home</li>
            <li>Products</li>
            <li className="text-header-res-1">Deals</li>
          </ul>
          <div className="hidden sm:flex relative p-6 sm:items-center sm:gap-2">
            <input
              type="text"
              placeholder="Search for groceries"
              className="sm:border sm:border-[#f9731626] sm:bg-[#f7f6f4] sm:w-[384px] sm:h-9 sm:rounded-full sm:pl-8 sm:text-header"
            />
            <i className="sm:absolute sm:top-8.5 sm:left-8 sm:text-[18px] sm:text-header">
              <CiSearch />
            </i>
          </div>
        </div>
        <div className="flex gap-2 items-center text-header sm:hidden">
          <i className="text-[24px]">
            <IoCartOutline />
          </i>
          <i className="text-[24px]">
            <CiMenuBurger />
          </i>
        </div>
        <div className="hidden sm:flex sm:flex-row sm:gap-2 sm:items-center ">
          <i className="text-[24px]">
            <IoCartOutline />
          </i>
          <div className="hidden sm:flex sm:gap-2 sm:border sm:flex-row sm:w-24.25 sm:h-9 sm:p-2 sm:items-center sm:rounded-full sm:bg-header sm:text-white">
            <i className="sm:text-[16px]">
              <FaRegUser />
            </i>
            <p className="sm:text-[14px] sm:font-medium">Sign in</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
