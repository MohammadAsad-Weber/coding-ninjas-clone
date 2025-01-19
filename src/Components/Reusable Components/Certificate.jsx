import React from "react";

// Image - { Certificate }
import NSDC from "../../assets/Images/nsdc_certificate.webp";

function Certificate() {
  return (
    <div className="p-5 pt-10 flex items-center justify-center">

      {/* Certificate Box */}
      <div className="max-w-[920px] w-full p-4 flex flex-col items-center justify-center gap-8 border-2 border-[#c3c3c3] rounded-2xl sm:flex-row sm:justify-between md:p-6 md:gap-12">
        {/* Image */}
        <img
          src={NSDC}
          alt=""
          className="max-w-80 w-full rounded-2xl"
        />
        {/* Description */}
        <h1 className="text-lg leading-8 sm:text-xl md:text-2xl">
          We are an approved training partner of NSDC under their scheme for
          market led fee-based services
        </h1>
      </div>

    </div>
  );
}

export default Certificate;
