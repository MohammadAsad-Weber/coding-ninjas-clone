import React from "react";

function Pricing(props) {
  return (
    <div className="pt-16 px-5 pb-10 flex flex-col items-center gap-10 md:gap-14">

      {/* Heading */}
      <h1 className="text-xl font-semibold sm:text-2xl">Plan and pricing</h1>

      {/* Table */}
      <div className="max-w-screen-lg w-full overflow-hidden border border-[#e6e6e6] rounded-2xl">
        <table className="w-full">
          <thead>
            <tr className="bg-[#f8f8f8]">
              <th className="p-4 text-left font-medium sm:p-5 md:text-lg">
                Perks
              </th>
              <th className="p-4 text-left flex justify-center font-medium sm:p-5">
                <div className="w-fit">
                  <h2 className="md:text-lg">Coding Ninjas Job Bootcamp</h2>
                  <p className="hidden mt-1 text-sm text-gray-400 font-normal sm:block">
                    to help you with faster career transition to tech field
                  </p>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-[#f8f8f8] odd:bg-white">
              <td className="w-[45%] p-3 text-xs text-gray-500 border-r border-[#e6e6e6] sm:p-5 sm:text-sm sm:text-gray-700 md:text-base">
                Industry-standard curriculum by expert
              </td>
              <td className="w-[55%] text-center text-2xl text-blue-600">
                <i className="bx bx-check"></i>
              </td>
            </tr>
            <tr className="even:bg-[#f8f8f8] odd:bg-white">
              <td className="w-[45%] p-3 text-xs text-gray-500 border-r border-[#e6e6e6] sm:p-5 sm:text-sm sm:text-gray-700 md:text-base">
                Live classes
              </td>
              <td className="w-[55%] text-center text-2xl text-blue-600">
                <i className="bx bx-check"></i>
              </td>
            </tr>
            <tr className="even:bg-[#f8f8f8] odd:bg-white">
              <td className="w-[45%] p-3 text-xs text-gray-500 border-r border-[#e6e6e6] sm:p-5 sm:text-sm sm:text-gray-700 md:text-base">
                1:1 live doubt support (Unlimited)
              </td>
              <td className="w-[55%] text-center text-2xl text-blue-600">
                <i className="bx bx-check"></i>
              </td>
            </tr>
            <tr className="even:bg-[#f8f8f8] odd:bg-white">
              <td className="w-[45%] p-3 text-xs text-gray-500 border-r border-[#e6e6e6] sm:p-5 sm:text-sm sm:text-gray-700 md:text-base">
                Dedicated, focused, personalised placement assistance
              </td>
              <td className="w-[55%] text-center text-2xl text-blue-600">
                <i className="bx bx-check"></i>
              </td>
            </tr>
            <tr className="even:bg-[#f8f8f8] odd:bg-white">
              <td className="w-[45%] p-3 text-xs text-gray-500 border-r border-[#e6e6e6] sm:p-5 sm:text-sm sm:text-gray-700 md:text-base">
                Relationship manager
              </td>
              <td className="w-[55%] text-center text-2xl text-blue-600">
                <i className="bx bx-check"></i>
              </td>
            </tr>
            <tr className="even:bg-[#f8f8f8] odd:bg-white">
              <td className="w-[45%] p-3 text-xs text-gray-500 border-r border-[#e6e6e6] sm:p-5 sm:text-sm sm:text-gray-700 md:text-base">
                1:1 Domain Expert Sessions
              </td>
              <td className="w-[55%] text-center text-2xl text-blue-600">
                <i className="bx bx-check"></i>
              </td>
            </tr>
            <tr className="even:bg-[#f8f8f8] odd:bg-white">
              <td className="w-[45%] p-3 text-xs text-gray-500 border-r border-[#e6e6e6] sm:p-5 sm:text-sm sm:text-gray-700 md:text-base">
                Full fees refundable within 7 days
              </td>
              <td className="w-[55%] text-center text-2xl text-blue-600">
                <i className="bx bx-check"></i>
              </td>
            </tr>
            <tr className="bg-white">
              <td className="w-[45%] border-r border-[#e6e6e6]"></td>
              <td className="w-[55%]">
                <div className="m-5 mt-0 flex flex-col items-center md:mt-5">
                  <p className="text-[0.65rem] sm:text-xs md:text-sm">
                    Price as low as
                  </p>
                  <h3 className="text-sm font-semibold sm:text-base md:text-lg">
                    ₹{props.price} / month
                  </h3>
                  <button className="w-28 h-9 mt-5 flex items-center justify-center text-xs text-white font-medium bg-[#f66c3b] rounded-lg hover:bg-[#ff8254] sm:text-sm md:text-base">
                    Apply now
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </div>
  );
}

export default Pricing;
