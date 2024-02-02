import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#f2f2f5] py-5 px-6 w-full flex items-center justify-between text-[#74788D]">
      <p className="text-[]">2022 © MAAC</p>
      <div className="flex items-center gap-6">
        <Link className="hover:underline">Contact Us</Link>
        <Link className="hover:underline">Privacy Policy</Link>
        <Link className="hover:underline">Terms & Condition</Link>
      </div>
    </footer>
  );
};

export default Footer;
