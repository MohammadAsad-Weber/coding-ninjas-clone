import React, { useContext } from "react";
import { CodingNinjasContext } from "../../Context/ContextAPI"; // Context API

function StudentsData() {
  // Using Context API
  const { scroll } = useContext(CodingNinjasContext);

  return (
    <div className="p-10 pt-16 flex flex-col items-center gap-10 md:gap-14">

      {/* Heading */}
      <h1 className="text-xl text-center font-semibold md:text-2xl">
        Our learners bring varied backgrounds and experiences
      </h1>

      {/* Graph */}
      <div className="h-[636px] w-[332px] relative text-[#bbbbbb] bg-[#141414] rounded-3xl min-[980px]:h-[480px] min-[980px]:w-[840px]">

        {/* Final year Card */}
        <div className="h-[120px] w-[120px] p-[2px] absolute top-[469px] left-[152px] bg-[linear-gradient(to_bottom_right,_#813c3c,_transparent)] rounded-full min-[980px]:h-[170px] min-[980px]:w-[170px] min-[980px]:top-[40px] min-[980px]:left-[140px]">
          <div className="h-full w-full flex flex-col items-center justify-center bg-[#1a1a1a] rounded-full">
            <p className="text-center">Final year students</p>
            <h1 className="text-xl font-semibold min-[980px]:text-2xl">15%</h1>
          </div>
        </div>

        {/* Non CS Card */}
        <div className="h-[96px] w-[96px] p-[2px] absolute top-[394px] left-[46px] bg-[linear-gradient(to_bottom_right,_#357b91,_transparent)] rounded-full min-[980px]:h-[120px] min-[980px]:w-[120px] min-[980px]:top-[230px] min-[980px]:left-[60px]">
          <div className="h-full w-full flex flex-col items-center justify-center bg-[#1a1a1a] rounded-full">
            <p className="text-center">Non CS</p>
            <h1 className="text-xl font-semibold min-[980px]:text-2xl">20%</h1>
          </div>
        </div>

        {/* Non-Tech Card */}
        <div className="h-[176px] w-[176px] p-[2px] absolute top-[238px] left-[122px] bg-[linear-gradient(to_bottom_right,_#867624,_transparent)] rounded-full min-[980px]:h-[240px] min-[980px]:w-[240px] min-[980px]:top-[120px] min-[980px]:left-[300px]">
          <div className="h-full w-full flex flex-col items-center justify-center bg-[#1a1a1a] rounded-full">
            <p className="text-center">Non-tech roles</p>
            <h1 className="text-xl font-semibold min-[980px]:text-2xl">37%</h1>
          </div>
        </div>

        {/* Techs Card */}
        <div className="h-[136px] w-[136px] p-[2px] absolute top-[41px] left-[44px] bg-[linear-gradient(to_bottom_right,_#2c7a4b,_transparent)] rounded-full min-[980px]:h-[200px] min-[980px]:w-[200px] min-[980px]:top-[240px] min-[980px]:left-[580px]">
          <div className="h-full w-full flex flex-col items-center justify-center bg-[#1a1a1a] rounded-full">
            <p className="text-center">Tech roles</p>
            <h1 className="text-xl font-semibold min-[980px]:text-2xl">21%</h1>
          </div>
        </div>

        {/* Others Card */}
        <div className="h-[84px] w-[84px] p-[2px] absolute top-[130px] left-[189px] bg-[linear-gradient(to_bottom_right,_#6249c5,_transparent)] rounded-full min-[980px]:h-[100px] min-[980px]:w-[100px] min-[980px]:top-[70px] min-[980px]:left-[560px]">
          <div className="h-full w-full flex flex-col items-center justify-center bg-[#1a1a1a] rounded-full">
            <p className="text-center">Others</p>
            <h1 className="text-xl font-semibold min-[980px]:text-2xl">7%</h1>
          </div>
        </div>
        
      </div>

      {/* Buttons */}
      <div className="hidden items-center justify-center gap-5 min-[980px]:flex">
        <button
          onClick={() => scroll("callback")}
          className="w-56 h-12 flex items-center justify-center text-black font-medium bg-white border border-black/90 rounded-lg hover:bg-black/90 hover:text-white"
        >
          Request callback
        </button>
        <button
          onClick={() => scroll("webinar")}
          className="w-56 h-12 flex items-center justify-center text-white font-medium bg-[#f66c3b] rounded-lg hover:bg-[#ff8254]"
        >
          Book a free webinar
        </button>
      </div>

    </div>
  );
}

export default StudentsData;
