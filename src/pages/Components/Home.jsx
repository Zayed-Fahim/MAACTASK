import React from "react";
import Button from "../SmallComponents/Button";

const Home = () => {
  const downloadButtonClassNames = "download-button";
  const demoButtonClassNames =
    "bg-[#0052cc] text-white text-xl font-bold rounded-[8px] px-12 py-6";
  return (
    <div>
      <div className="mt-[164px] flex flex-col gap-12">
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
    </div>
  );
};

export default Home;
