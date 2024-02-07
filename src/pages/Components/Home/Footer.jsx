import React from "react";
import logo from "../../../assets/logo/FieldX2.png";
import { GrTwitter } from "react-icons/gr";
import { RiLinkedinFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="pt-[88px] pb-[68px] bg-[#00193D] flex flex-col justify-center gap-[5.5rem]">
      <div className="flex flex-col gap-8 justify-center items-center">
        <img src={logo} alt="FieldX" />
        <h1 className="text-center text-white">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br />
          accusantium doloremque laudantium, totam rem aperiam eaque.
        </h1>
        <div className="flex justify-center items-center gap-5">
          <button className="bg-white rounded-[50%] p-2">
            <GrTwitter size={24} />
          </button>
          <button className="bg-white rounded-[50%] p-2">
            <RiLinkedinFill size={24} />
          </button>
          <button className="bg-white rounded-[50%] p-2">
            <FaFacebookF size={24} />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <hr className="w-full container mx-auto" />
        <h1 className="text-white text-center text-[18px] font-bold">
          © All rights reserve by <span className="text-[#F60E0E]">MAAC</span>
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
