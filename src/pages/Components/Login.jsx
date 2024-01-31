import React from "react";
import { useNavigate } from "react-router-dom/dist";
import Button from "../SmallComponents/Button";
import "../../CSS/LoginForm.css";

const Login = () => {
  const loginButtonClassNames =
    "w-full bg-[#0052cc] py-6 text-xl font-[800] rounded-[8px] text-white";
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
              Welcome Back!
            </h1>
            <p className="text-center text-[24px]">
              Please login to your account
            </p>
          </div>
          <form className="w-[608px] flex flex-col gap-7">
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
            <Button
              buttonClassNames={loginButtonClassNames}
              type={"button"}
              text={"Sign in"}
            />
          </form>
          <div className="flex justify-center items-center text-2xl mt-16 mb-10">
            <h1 className="text-black">
              Don't have any account?{" "}
              <button
                onClick={() => navigate("/register")}
                className="text-[#0052cc] cursor-pointer"
              >
                Sign Up
              </button>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
