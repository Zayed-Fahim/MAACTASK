import React from "react";
import Button from "../SmallComponents/Button";
import pc from "../../assets/images/1.png";
import mobile from "../../assets/images/2.png";

const Home = () => {
  const downloadButtonClassNames = "download-button";
  const demoButtonClassNames =
    "bg-[#0052cc] text-white text-xl font-bold rounded-[8px] px-12 py-6";
  return (
    <div>
      <div className="mt-[164px]">
        <div className="flex flex-col gap-12 mb-[84px]">
          <div>
            <h1 className="text-center text-[58px] font-bold leading-[130%]">
              Analytics that transform your <br /> product inside-out
            </h1>
          </div>
          <div className="flex gap-5 justify-center items-center">
            <Button
              buttonClassNames={demoButtonClassNames}
              text={"Request for Demo"}
              type={"button"}
            />
            <Button
              buttonClassNames={downloadButtonClassNames}
              text={"Download"}
              type={"button"}
            />
          </div>
        </div>
        <div className="flex justify-center items-center relative mb-[150px]">
          <div className="relative flex justify-center items-center">
            <div className="w-[1022px] h-[783px]">
              <img loading="lazy" src={pc} alt="pc-view" />
              <img
                loading="lazy"
                className="absolute top-52 right-[78px] w-[310px] h-[625px]"
                src={mobile}
                alt="mobile-view"
              />
            </div>
          </div>
        </div>
        <hr className="h-[1px] bg-[#E1E1E1] w-full mb-[100px]" />
      </div>
    </div>
  );
};

export default Home;
