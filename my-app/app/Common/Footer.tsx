import React from "react";
import { IoIosBicycle } from "react-icons/io";
const Footer = () => {
  return (
    <>
      <div className="bg-header">
        <div className="flex flex-col pl-4">
          <div className="flex gap-2 items-center text-white pt-10">
            <i className="text-[24px]">
              <IoIosBicycle />
            </i>
            <p className="text-[22px]">InstantMart</p>
          </div>
          <p className="text-[#ffffffb3] text-[14px] w-85.75 h-15">
            Bringing fresh, organic groceries straight from local farms to your
            doorstep. Nourish your home with Earths finest.
          </p>
          <div>
            <i></i>
            <i></i>
            <i></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
