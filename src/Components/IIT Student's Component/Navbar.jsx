import React from "react";

// Logo Image
import Logo from "../../assets/Images/Logos/iit.png";

function Navbar() {
  return (
    <nav className="h-16 px-5 sticky z-30 top-0 flex items-center justify-center bg-white shadow-lg xl:px-0">

      {/* Inner div */}
      <div className="max-w-screen-lg w-full flex items-center justify-between">

        {/* Logo */}
        <img src={Logo} alt="" className="h-6 sm:h-8" />

        {/* Button */}
        <button className="py-2 px-3 text-xs text-white font-medium bg-[#4164bd] rounded-lg sm:text-sm sm:py-2.5 sm:px-5">
          Download Curriculum
        </button>

      </div>

    </nav>
  );
}

export default Navbar;
