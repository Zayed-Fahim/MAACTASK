import React from "react";
import { useNavigate } from "react-router-dom/dist";
import RegistrationForm from "../../SmallComponents/Home/RegistrationForm";

const Register = ({ setRedirectLoading }) => {
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
              Create Account
            </h1>
            <p className="text-center text-[24px]">
              Fill in the details below to create an account
            </p>
          </div>
          <RegistrationForm setRedirectLoading={setRedirectLoading} />
          <div className="flex justify-center items-center text-2xl mt-5">
            <h1 className="text-black">
              Already have an account?{" "}
              <button
                onClick={() => navigate("/login")}
                className="text-[#0052cc] cursor-pointer font-semibold"
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
