import React, { useState } from "react";
import "../../CSS/RegistrationForm.css";
import Button from "../SmallComponents/Button";
import { useNavigate } from "react-router-dom/dist";

const Register = () => {
  const [state, setState] = useState("");
  const createAccountButtonClassNames =
    "w-full bg-[#0052cc] py-6 text-xl font-[800] rounded-[8px] text-white";
  const handleFocus = () => {
    setState("focused");
  };
  const handleBlur = () => {
    const selectElement = document.getElementById("role");
    setState(selectElement.value ? "filled" : "");
  };
  const navigate = useNavigate();

  return (
    <>
      <style jsx>
        {`
          .background {
            height: auto;
          }
        `}
      </style>
      <div className="flex justify-center items-center py-[7rem]">
        <div className="mx-auto max-w-max px-[13rem] py-[5rem]  bg-white sm:rounded-3xl flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="text-5xl leading-[150%] font-bold text-center">
              Create Account
            </h1>
            <p className="text-center text-[24px]">
              Fill in the details below to create an account
            </p>
          </div>
          <form className="w-[608px] flex flex-col gap-7">
            <div className="relative z-0 w-full">
              <input
                type="text"
                name="name"
                placeholder=" "
                required
                className="pt-4 pb-2 block w-full pl-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label
                htmlFor="name"
                className="absolute duration-300 -top-1 -z-1 origin-0 text-gray-500 text-xl"
              >
                Enter Your Full Name
              </label>
            </div>

            <div className="relative z-0 w-full">
              <input
                type="email"
                name="email"
                placeholder=" "
                className="pt-4 pb-2 block w-full pl-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label
                htmlFor="email"
                className="absolute duration-300 -top-1 -z-1 origin-0 text-gray-500 text-xl"
              >
                Enter Your Email
              </label>
            </div>

            <div className="relative z-0 w-full">
              <input
                type="text"
                name="id"
                placeholder=" "
                className="pt-4 pb-2 block w-full pl-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label
                htmlFor="id"
                className="absolute duration-300 -top-1 -z-1 origin-0 text-gray-500 text-xl"
              >
                Your ID
              </label>
            </div>
            <div className="relative z-0 w-full">
              <input
                type="text"
                name="mobile"
                placeholder=" "
                className="pt-4 pb-2 block w-full pl-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label
                htmlFor="mobile"
                className="absolute duration-300 -top-1 -z-1 origin-0 text-gray-500 text-xl"
              >
                Your Mobile Number
              </label>
            </div>
            <div className="relative z-0 w-full">
              <input
                type="password"
                name="password"
                placeholder=" "
                className="pt-4 pb-2 block w-full pl-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label
                htmlFor="password"
                className="absolute duration-300 -top-1 -z-1 origin-0 text-gray-500 text-xl"
              >
                Password
              </label>
            </div>
            <div className="relative z-0 w-full">
              <input
                type="password"
                name="cPassword"
                placeholder=" "
                className="pt-4 pb-2 block w-full pl-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label
                htmlFor="cPassword"
                className="absolute duration-300 -top-1 -z-1 origin-0 text-gray-500 text-xl"
              >
                Confirm Password
              </label>
            </div>
            <div className="relative z-0 w-full">
              <select
                name="role"
                id="role"
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              >
                <option defaultValue="" hidden></option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
              <div className="flex justify-between items-center">
                <label
                  className={`absolute duration-300 -top-1 -z-1 origin-0 text-gray-500 text-xl ${
                    state === "focused"
                      ? "focus-label"
                      : state === "filled"
                      ? "filled-label"
                      : ""
                  }`}
                  htmlFor="role"
                >
                  <h1>Select Your Role</h1>
                </label>
              </div>
            </div>

            <div className="flex justify-start items-start h-auto">
              <input
                type="checkbox"
                className="h-6 w-7 -mr-7"
                id="terms&conditions"
              />
              <label htmlFor="terms&conditions" className="text-2xl -pl-14">
                I read and agree to the{" "}
                <span className="text-[#0052cc] cursor-pointer">
                  Terms & Conditions
                </span>
              </label>
            </div>
            <Button
              buttonClassNames={createAccountButtonClassNames}
              type={"button"}
              text={"Create Account"}
            />
          </form>
          <div className="flex justify-center items-center text-2xl mt-5">
            <h1 className="text-black">
              Already have an account?{" "}
              <button
                onClick={() => navigate("/login")}
                className="text-[#0052cc] cursor-pointer"
              >
                Sign In
              </button>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
