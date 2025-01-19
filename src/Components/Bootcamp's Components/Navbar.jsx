import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { CodingNinjasContext } from "../../Context/ContextAPI"; // Context API

// Logo Image
import Logo from "../../assets/SVGs/logo.svg";

function Navbar() {
  // To get the Path name
  const location = useLocation().pathname;

  // Using Context API
  const { scroll } = useContext(CodingNinjasContext);

  return (
    <nav className="h-16 px-5 sticky z-30 top-0 flex items-center justify-between bg-white shadow-lg lg:px-0 lg:justify-around">

      {/* Logo for screens smaller than 1024px */}
      <img src={Logo} alt="" className="h-6 lg:hidden" />

      {/* Logo for screens larger than 1024px */}
      <div className="hidden items-center gap-10 lg:flex">
        <img src={Logo} alt="" className="h-6" />
        <a
          href="/bootcamp-web-development"
          className={`text-sm font-medium ${
            location === "/bootcamp-web-development"
              ? "text-gray-700"
              : "text-gray-400"
          } hover:text-gray-700`}
        >
          Web Development
        </a>
        <a
          href="/bootcamp-data-analytics"
          className={`text-sm font-medium ${
            location === "/bootcamp-data-analytics"
              ? "text-gray-700"
              : "text-gray-400"
          } hover:text-gray-700`}
        >
          Data Analytics
        </a>
      </div>

      {/* Callback Button */}
      <button
        onClick={() => scroll("callback")}
        className="py-1.5 px-3 text-white text-xs font-medium bg-[#f66c3b] rounded-lg hover:bg-[#ff8254] md:py-2 md:px-4 md:text-base"
      >
        Request Callback
      </button>
      
    </nav>
  );
}

export default Navbar;
