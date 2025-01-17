import React from "react";
import InfoSVG from "../icons/InfoSVG";
import LogoutSVG from "../icons/LogoutSVG";

const RightSidebar = () => {
  return (
    <div className="h-screen w-72 bg-white text-[#f79402] flex flex-col justify-between items-center py-12">
      <div className="flex flex-col gap-4 items-center">
        <InfoSVG size={64} color="#000000" />
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-[#2d2d2d] text-xl font-bold">Welcome Kristin</h1>
          <div className="bg-[#fff4e6] px-3 py-1 rounded-lg">
            <h4 className="text-black text-sm font-normal">Admin</h4>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1 border border-gray-300 p-2 rounded-lg">
          <h2>120</h2>
          <p className="text-gray-500 text-sm font-semibold">Recipes</p>
        </div>
      </div>
      <div>
        <button className="bg-[#f79402] hover:bg-[#cc7502] text-white px-4 py-2 rounded-lg flex flex-row gap-2 items-center justify-center">
          Logout
          <LogoutSVG size={18} color="#ffffff" />
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;
