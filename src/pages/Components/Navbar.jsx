import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";
import logo from "../../assets/logo/FieldX.png";
import Button from "../SmallComponents/Button";

const Navbar = () => {
  const navigate = useNavigate();
  const registerButtonClassNames = "register-button";
  const loginButtonClassNames =
    "bg-[#0052cc] text-white text-sm rounded-[8px] px-6 py-3";

  return (
    <div>
      <div className="flex justify-between items-center mx-[10rem] py-5">
        <Link to="/">
          <img loading="lazy" src={logo} alt="FieldX" />
        </Link>
        <div className="flex items-center gap-5">
          <Button
            onClick={() => navigate("/login")}
            buttonClassNames={loginButtonClassNames}
            text={"Login"}
            type={"button"}
          />
          <Button
            onClick={() => navigate("/register")}
            buttonClassNames={registerButtonClassNames}
            text={"Register"}
            type={"button"}
          />
        </div>
      </div>
      <hr className="h-[1px] bg-[#C2D2EB] w-full" />
    </div>
  );
};

export default Navbar;
