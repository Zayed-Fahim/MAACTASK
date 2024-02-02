import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";

const CreateRegions = () => {
  const { handleSubmit, register, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/region",
        data
      );
      if (response?.data.status === "Success") {
        toast.success(response.data.message);
        reset();
      } else {
        toast.error(
          response?.data.message || "Attempt failed! Please try again later."
        );
      }
    } catch (error) {
      if (error?.response && error?.response.status === 509) {
        toast.error("Region already available!");
      } else {
        toast.error("Error during adding region. Please try again.");
        console.log(error.message);
      }
    }
  };
  return (
    <div className="px-6 pb-[99px]">
      <div className="flex flex-col gap-2 py-8">
        <p className="font-bold text-xl">Create Region</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[1.5px]">
            <p className="text-[#77838F] text-sm">Geo</p>
            <MdChevronRight className="h-[22px] w-[22px] text-[#77838F]" />
            <Link to="/dashboard" className="text-sm text-[#77838F]">
              Geo List
            </Link>
            <MdChevronRight className="h-[22px] w-[22px] text-[#77838F]" />
            <Link to="/dashboard/area-list" className="text-[#0052CC] text-sm">
              Create Geo
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full h-[635px] flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-14 bg-white rounded-lg p-10 w-[475px] h-[270px]"
        >
          <div>
            <label
              className="font-semibold text-[18px] text-[#495057]"
              htmlFor="region"
            >
              Region
            </label>
            <input
              type="text"
              id="region"
              placeholder="Type Region"
              name="region"
              {...register("region")}
              className="border w-full h-12 rounded-lg focus:outline-none pl-2 mt-2"
            />
          </div>

          <div className="flex justify-end items-end">
            <button
              type="submit"
              className=" bg-[#0b2e4e] px-9 rounded-lg py-2 text-white"
            >
              Add Region
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateRegions;
