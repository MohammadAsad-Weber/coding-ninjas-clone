import React from "react";

// Logo Image
import IIT from "../../assets/Images/Logos/iit.png";

function Navbar() {
  return (
    <nav className="h-16 px-5 sticky z-30 top-0 flex items-center justify-center bg-white shadow-lg xl:px-0">

      {/* Inner div */}
      <div className="max-w-screen-lg w-full flex items-center justify-between">

        {/* Image */}
        <img src={IIT} alt="" className="h-6 sm:h-8" />

        {/* Callback Button */}
        <button className="py-1.5 px-3 text-white text-xs font-medium bg-[#f66c3b] rounded-lg hover:bg-[#ff8254] sm:py-2 sm:px-4 sm:text-sm">
          Download brochure
        </button>

      </div>
    
    </nav>
  );
}

export default Navbar;
