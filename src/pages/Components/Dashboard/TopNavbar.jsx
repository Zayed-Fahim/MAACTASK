import React, { useContext } from "react";
import logo from "../../../assets/logo/FieldX.png";
import { AuthContext } from "../../../contexts/AuthProvider";
import { GoChevronDown } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const TopNavbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center bg-white py-[11px]">
      <img
        onClick={() => navigate("/dashboard")}
        className="h-12 w-[102px] ml-[75px] cursor-pointer"
        loading="lazy"
        src={logo}
        alt="FieldX"
      />
      <div className="flex gap-[10px] items-center mr-6">
        <img
          className="w-9 h-9 rounded-[50%]"
          loading="lazy"
          src={user && "https://i.ibb.co/gmnzmTL/1.png"}
          alt={user?.name}
        />
        <p className="text-[555B6D] text-[18px]">
          {user?.name?.split(" ")[user?.name.split(" ").length - 1]}
        </p>
        <GoChevronDown size={18} />
      </div>
    </div>
  );
};

export default TopNavbar;
