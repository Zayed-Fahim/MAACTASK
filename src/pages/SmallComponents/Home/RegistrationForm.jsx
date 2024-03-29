import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "./Button";
import "../../../CSS/RegistrationForm.css";

const schema = yup
  .object({
    password: yup
      .string()
      .min(6, "Password length should be at least 6 characters")
      .max(8, "Password cannot exceed more than 8 characters"),
    cPassword: yup
      .string()
      .min(6, "Password length should be at least 6 characters")
      .max(8, "Password cannot exceed more than 8 characters")
      .oneOf([yup.ref("password")], "Password do not match"),
  })
  .required();

const RegistrationForm = ({ setRedirectLoading }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const createAccountButtonClassNames =
    "w-full bg-[#0052cc] py-6 text-xl font-[800] rounded-[8px] text-white";
  const [state, setState] = useState("");
  const handleFocus = () => {
    setState("focused");
  };
  const handleBlur = () => {
    const selectElement = document.getElementById("role");
    setState(selectElement.value ? "filled" : "");
  };
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://maactask-server.vercel.app/api/v1/users/register",
        data
      );
      if (response.data.status === "Success") {
        toast.success("Registration successful!");
        setIsLoading(false);
        setTimeout(() => setRedirectLoading(true), 1000);
        setTimeout(() => {
          navigate("/login");
          setRedirectLoading(false);
        }, 2500);
        reset();
      } else {
        toast.error(response.data.message);
        setIsLoading(false);
      }
    } catch (error) {
      toast.error("Account already registered!");
      setIsLoading(false);
    }
  };

  return (
    <form
      className="w-[608px] flex flex-col gap-7"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="relative z-0 w-full">
        <input
          type="text"
          name="name"
          placeholder=" "
          required
          {...register("name")}
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
          required
          placeholder=" "
          {...register("email")}
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
          required
          placeholder=" "
          {...register("id")}
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
          required
          placeholder=" "
          {...register("mobile")}
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
          required
          placeholder=" "
          {...register("password")}
          className="pt-4 pb-2 block w-full pl-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <label
          htmlFor="password"
          className="absolute duration-300 -top-1 -z-1 origin-0 text-gray-500 text-xl"
        >
          Password
        </label>
      </div>
      {errors.password && (
        <p className="text-red-500 -mt-3">{errors.password.message}</p>
      )}

      <div className="relative z-0 w-full">
        <input
          type="password"
          name="cPassword"
          required
          placeholder=" "
          {...register("cPassword")}
          className="pt-4 pb-2 block w-full pl-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <label
          htmlFor="cPassword"
          className="absolute duration-300 -top-1 -z-1 origin-0 text-gray-500 text-xl"
        >
          Confirm Password
        </label>
      </div>
      {errors.cPassword && (
        <p className="text-red-500 -mt-3">{errors.cPassword.message}</p>
      )}
      <div className="relative z-0 w-full">
        <select
          name="role"
          id="role"
          {...register("role")}
          required
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="pt-2 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        >
          <option defaultValue="" hidden></option>
          <option className="text-xl" value="hub">
            HUB
          </option>
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
          required
          {...register("terms")}
          className="h-6 w-7 -mr-7"
          id="terms&conditions"
        />
        <label htmlFor="terms&conditions" className="text-2xl -pl-14">
          I read and agree to the{" "}
          <span className="text-[#0052cc] cursor-pointer font-semibold">
            Terms & Conditions
          </span>
        </label>
      </div>
      <Button
        buttonClassNames={createAccountButtonClassNames}
        type="submit"
        text={
          <div>
            {isLoading ? (
              <div className="flex items-center gap-4 justify-center">
                <p>Creating Account</p>
                <div class="registration-loader" />
              </div>
            ) : (
              "Create Account"
            )}
          </div>
        }
      />
    </form>
  );
};

export default RegistrationForm;
