import React, { useEffect, useState } from "react";
import { MdChevronRight } from "react-icons/md";
import Button from "../../SmallComponents/Dashboard/Button";
import { HiOutlinePlusSmall } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import image from "../../../assets/images/3.png";
import RegionListTable from "../../SmallComponents/Dashboard/RegionListTable";
import axios from "axios";

const RegionList = () => {
  const createRegionButtonClassNames = "rounded-lg bg-[#0b2e4e] py-2 px-3";
  const navigate = useNavigate();
  const [regions, setRegions] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://maactask-server.vercel.app/api/v1/region"
      );
      if (response?.data?.status === "Success") {
        setRegions(response?.data?.payload);
      }
    };
    fetchData();
  }, [setRegions]);

  return (
    <div className="px-6 pb-[99px]">
      <div className="flex flex-col gap-2 py-8">
        <p className="font-bold text-xl">Region List</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[1.5px]">
            <p className="text-[#77838F] text-sm">Geo</p>
            <MdChevronRight className="h-[22px] w-[22px] text-[#77838F]" />
            <Link to="/dashboard" className="text-[#0052CC] text-sm">
              Geo List
            </Link>
          </div>
          <Button
            buttonClassNames={createRegionButtonClassNames}
            type={"button"}
            onClick={() => navigate("/dashboard/create-region")}
            text={
              <div className="flex items-center justify-center">
                <HiOutlinePlusSmall className="text-white" size={18} />
                <p className="text-[18px] text-white">Create New</p>
              </div>
            }
          />
        </div>
      </div>
      {regions?.length > 0 ? (
        <RegionListTable regions={regions} setRegions={setRegions} />
      ) : (
        <div className="bg-white w-full min-h-[710px] flex justify-center items-center rounded-[10px]">
          <div className="flex flex-col items-center gap-10">
            <img
              className="w-[280px] h-[172px]"
              loading="lazy"
              src={image}
              alt=""
            />
            <p className="text-center text-[#9FA3A6] text-xl leading-loose">
              Currently you have no Data. <br />
              For next step first{" "}
              <Link to="/dashboard/create-region" className="text-[#0052CC]">
                Create Region
              </Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegionList;
