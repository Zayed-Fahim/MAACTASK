import React from "react";
import { PiCaretCircleLeftFill } from "react-icons/pi";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";

const SideNavbar = () => {
  return (
    <div className="bg-white min-w-[255px] h-auto flex flex-col gap-[15px]">
      <div className="flex items-center justify-between px-5 pt-5 pb-4">
        <p className="text-[#6A7187] font-semibold">MENU</p>
        <PiCaretCircleLeftFill className="cursor-pointer w-[30px] h-[30px] text-[#0b2e4e] -mr-[34px]" />
      </div>
      <div className="flex flex-col gap-[18px]">
        <div className="py-3 px-5 flex items-center gap-4">
          <GrLocation className="w-[30px] h-[30px] text-[#757575]" />
          <p className="text-[#757575]">Geo Information</p>
        </div>
        <div className="">
          <ul className="flex flex-col gap-3 w-full">
            <li className="text-[#0052CC] border-e-8 border-[#0052CC] cursor-pointer hover:bg-[#eff0f2] pl-[61px] py-1">
              <Link to="/dashboard">Region</Link>
            </li>
            <li className="text-[#757575] cursor-pointer hover:bg-[#eff0f2] pl-[61px] py-1">
              <Link to="/dashboard/area-list">Area</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
