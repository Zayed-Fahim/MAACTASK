import React from "react";
import "../../../CSS/RedirectScreenLoader.css";

const RedirectScreen = () => {
  return (
    <div className="w-full h-screen bg-white bg-opacity-50 flex justify-center items-center gap-4 text-xl font-semibold">
      <p>Redirecting. Please Wait a while.</p>
      <div class="redirect-loader" />
    </div>
  );
};

export default RedirectScreen;
