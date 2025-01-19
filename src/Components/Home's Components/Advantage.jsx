import React, {useContext} from "react";
import { CodingNinjasContext } from "../../Context/ContextAPI"; // Context API
import { useInView } from 'react-intersection-observer';

// SVGs - { Logos & Icons }
import AdvantageLogo from "../../assets/SVGs/advantage_logo.svg";
import LogoWhite from "../../assets/SVGs/logo_white.svg";
import Check from "../../assets/SVGs/check_fill.svg";

function Advantage() {
  // Using Context API
  const {scroll} = useContext(CodingNinjasContext);

  // useInView Hook from "react-intersection-observer"
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className="py-20 px-5 flex flex-col gap-10 items-center bg-advantage bg-cover bg-center bg-no-repeat">

      {/* Heading */}
      <h3 className="text-xl text-center text-transparent font-semibold bg-[linear-gradient(113deg,_#0047ff_9.94%,_#00c2ff_90%)] bg-clip-text md:text-2xl">
        The Coding Ninjas advantage
      </h3>

      {/* Advantage Box */}
      <div className="max-w-screen-lg w-full border border-[#403f3f] rounded-3xl">

        {/* Table element */}
        <table className="w-full">
          <thead>
            <tr>
              <th className="py-8 px-2"></th>
              <th className="py-8 px-2 flex justify-center">
                <img src={AdvantageLogo} alt="" className="min-w-8" />
              </th>
              <th className="py-8 px-2 text-xs font-medium text-[#b2b2b2] sm:text-sm md:text-base">
                Free resources
              </th>
              <th className="py-8 px-2 text-xs font-medium text-[#b2b2b2] sm:text-sm md:text-base">
                Other courses
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 pr-0 text-xs font-semibold text-[#e3e3e3] sm:text-sm md:text-base md:pl-10">
                Structured + problem solving based
              </td>
              <td className="py-5 flex justify-center">
                <img src={Check} alt="" />
              </td>
              <td className="text-center text-[#b2b2b2]">
                <i className="bx bx-x text-2xl sm:text-3xl"></i>
              </td>
              <td className="text-center text-[#b2b2b2]">
                <i className="bx bx-check text-2xl sm:text-3xl"></i>
              </td>
            </tr>
            <tr className="even:bg-[#141414]">
              <td className="p-4 pr-0 text-xs font-semibold text-[#e3e3e3] sm:text-sm md:text-base md:pl-10">
                Fastest 1:1 doubt support
              </td>
              <td className="py-5 flex justify-center">
                <img src={Check} alt="" />
              </td>
              <td className="text-center text-[#b2b2b2]">
                <i className="bx bx-x text-2xl sm:text-3xl"></i>
              </td>
              <td className="text-center text-[#b2b2b2]">
                <i className="bx bx-x text-2xl sm:text-3xl"></i>
              </td>
            </tr>
            <tr>
              <td className="p-4 pr-0 text-xs font-semibold text-[#e3e3e3] sm:text-sm md:text-base md:pl-10">
                Integrated prep platform
              </td>
              <td className="py-5 flex justify-center">
                <img src={Check} alt="" />
              </td>
              <td className="text-center text-[#b2b2b2]">
                <i className="bx bx-x text-2xl sm:text-3xl"></i>
              </td>
              <td className="text-center text-[#b2b2b2]">
                <i className="bx bx-x text-2xl sm:text-3xl"></i>
              </td>
            </tr>
            <tr className="even:bg-[#141414]">
              <td className="p-4 pr-0 text-xs font-semibold text-[#e3e3e3] sm:text-sm md:text-base md:pl-10">
                Profiles highlighted on Naukr
              </td>
              <td className="py-5 flex justify-center">
                <img src={Check} alt="" />
              </td>
              <td className="text-center text-[#b2b2b2]">
                <i className="bx bx-x text-2xl sm:text-3xl"></i>
              </td>
              <td className="text-center text-[#b2b2b2]">
                <i className="bx bx-x text-2xl sm:text-3xl"></i>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Comparig div */}
        <div ref={ref} className="mt-16 py-10 px-5 flex flex-col gap-10 md:px-10">

          {/* Coding Ninjas Loading Bar */}
          <div>
            <div className="w-full flex flex-wrap justify-between items-center gap-2">
              <img src={LogoWhite} alt="" />
              <div className="w-full flex items-center justify-between gap-2 sm:max-w-fit">
                <h3 className="text-sm font-medium text-transparent bg-[linear-gradient(112deg,_#fa00ff_-3.21%,_#ff8a00_97.8%)] bg-clip-text">
                  Your dream role, faster and with confidence!
                </h3>
                <i className="bx bxs-zap text-transparent bg-yellow-500 bg-clip-text"></i>
              </div>
            </div>
            <div className="w-full h-1 relative mt-3 bg-[#2d2d2d] rounded-3xl">
              <div className={`w-full h-1 absolute top-0 left-0 bg-[linear-gradient(112deg,_#fa00ff_-3.21%,_#ff8a00_97.8%)] rounded-3xl ${inView ? 'animated-coding-ninjas' : ''}`}></div>
            </div>
          </div>
          
          {/* Others Loading Bar */}
          <div>
            <div className="w-full flex flex-wrap justify-between items-center gap-2">
              <h2 className="text-xl font-medium text-white">Others</h2>
              <h3 className="w-full text-sm font-medium text-gray-400 sm:max-w-fit">
                Average role, under-confident
              </h3>
            </div>
            <div className="w-full h-1 relative mt-3 bg-[#2d2d2d] rounded-3xl">
              <div className={`w-[75%] h-1 absolute top-0 left-0 bg-[#999999] rounded-3xl ${inView ? 'animated-others' : ''}`}></div>
            </div>
          </div>
          
        </div>

      </div>

      {/* Explore Button */}
      <button onClick={() => scroll("offerings")} className="h-14 max-w-72 w-72 min-w-72 py-3 px-6 text-white font-semibold flex items-center justify-center gap-2 bg-[#f66c3b] rounded-lg hover:bg-[#ff8254]">
        Explore offerings
        <i className="bx bxs-chevrons-up text-xl translate-y-[1.75px]"></i>
      </button>
      
    </div>
  );
}

export default Advantage;
