import React from "react";
import TopNavbar from "../pages/Components/Dashboard/TopNavbar";
import SideNavbar from "../pages/Components/Dashboard/SideNavbar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Components/Dashboard/Footer";

const Dashboard = () => {
  return (
    <>
      <style jsx="true">
        {`
          .background {
            background: none !important;
          }
        `}
      </style>
      <div className="flex flex-col bg-[#f8f8fb] min-h-screen">
        <TopNavbar />
        <div className="flex">
          <SideNavbar />
          <div className="flex flex-col w-full">
            <Outlet />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
