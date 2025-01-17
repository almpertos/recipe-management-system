import React from "react";
import AddSVG from "../icons/AddSVG";
import EditSVG from "../icons/EditSVG";
import DeleteSVG from "../icons/DeleteSVG";
import LogoutSVG from "../icons/LogoutSVG";

const LeftSidebar = () => {
  return (
    <div className="group h-screen w-20 bg-white text-[#f79402] flex flex-col items-center py-10 transition-all duration-300 hover:w-60">
      {/* Logo */}
      <div className="flex items-center justify-center border-gray-700 mb-8">
        <h1 className="text-xl font-bold">App</h1>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-4 w-full">
        <ul className="space-y-4">
          <li>
            <a
              href="#"
              className="group flex items-center p-3 rounded-2xl hover:bg-[#f79402] transition-all duration-300 relative"
            >
              <AddSVG size={28} color="#000000" />
              <span className="absolute left-16 opacity-0 group-hover:opacity-100 whitespace-nowrap text-black transition-all duration-300 font-semibold">
                Add Recipe
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="group flex items-center p-3 rounded-2xl hover:bg-[#f79402] transition-all duration-300 relative"
            >
              <EditSVG size={28} color="#000000" />
              <span className="absolute left-16 opacity-0 group-hover:opacity-100 whitespace-nowrap text-black transition-all duration-300 font-semibold">
                Edit Recipe
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="group flex items-center p-3 rounded-2xl hover:bg-[#f79402] transition-all duration-300 relative"
            >
              <DeleteSVG size={28} color="#000000" />
              <span className="absolute left-16 opacity-0 group-hover:opacity-100 whitespace-nowrap text-black transition-all duration-300 font-semibold">
                Delete Recipe
              </span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Footer */}
      <div className="w-full p-4">
        <button className="group flex items-center p-3 rounded-2xl hover:bg-[#f79402] transition-all duration-300 relative w-full">
          <LogoutSVG size={28} color="#000000" />
          <span className="absolute left-16 opacity-0 group-hover:opacity-100 whitespace-nowrap text-black transition-all duration-300 font-semibold">
            Logout
          </span>
        </button>
      </div>
    </div>
  );
};

export default LeftSidebar;
