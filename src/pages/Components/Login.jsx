import React from "react";
import { useNavigate } from "react-router-dom/dist";
import LoginForm from "../SmallComponents/LoginForm";

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <style jsx="true">
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
          <LoginForm />
          <div className="flex justify-center items-center text-2xl mt-16 mb-10">
            <h1 className="text-black">
              Don't have any account?{" "}
              <button
                onClick={() => navigate("/register")}
                className="text-[#0052cc] cursor-pointer font-semibold"
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
