import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/Components/Home/Navbar";
import Footer from "../pages/Components/Home/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
