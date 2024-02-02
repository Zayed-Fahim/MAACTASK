import axios from "axios";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import Button from "./Button";
import Cookies from "js-cookie";
import { AuthContext } from "../../contexts/AuthProvider";

const LoginForm = () => {
  const { handleSubmit, register, reset } = useForm();
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const loginButtonClassNames =
    "w-full bg-[#0052cc] py-6 text-xl font-[800] rounded-[8px] text-white";

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://maactask-server.vercel.app/api/v1/users/login",
        data
      );
      if (response?.data.status === "Success") {
        const token = await response.data.payload.token;
        setUser(response.data.payload.newUserData);
        Cookies.set("token", token, { expires: 90 });
        toast.success("Successfully logged in!");
        navigate("/dashboard");
        reset();
      } else {
        toast.error(response?.data.message || "Invalid email or password!");
      }
    } catch (error) {
      if (error?.response && error?.response.status === 401) {
        toast.error("Invalid email or password!");
      } else {
        toast.error("Error during login. Please try again.");
        console.log(error.message);
      }
    }
  };

  return (
    <form
      className="w-[608px] flex flex-col gap-7"
      onSubmit={handleSubmit(onSubmit)}
    >
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
      <Button
        buttonClassNames={loginButtonClassNames}
        type="submit"
        text="Sign in"
      />
    </form>
  );
};

export default LoginForm;
