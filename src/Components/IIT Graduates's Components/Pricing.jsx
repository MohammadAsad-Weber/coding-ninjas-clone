import React from "react";

function Pricing() {
  return (
    <div className="pt-16 px-5 pb-10 flex flex-col items-center gap-10 md:gap-14">

      {/* Heading */}
      <h1 className="text-xl font-semibold sm:text-2xl">Plan and pricing</h1>

      {/* Table */}
      <div className="max-w-screen-lg w-full overflow-hidden border border-[#e6e6e6] rounded-2xl">
        <table className="w-full">
          <thead>
            <tr className="bg-[#f8f8f8]">
              <th className="py-4 px-3 text-left text-sm font-semibold md:py-5 md:text-base">
                Perks
              </th>
              <th className="py-4 px-3 text-left text-sm font-semibold md:py-5 md:text-base">
                <div className="flex flex-col items-center justify-center gap-1">
                  <h4>Live Learning</h4>
                  <p className="hidden text-sm text-gray-600 font-normal md:block">
                    For real time experience, and classroom feel
                  </p>
                </div>
              </th>
              <th className="py-4 px-3 text-left text-sm font-semibold md:py-5 md:text-base">
                <div className="flex flex-col items-center justify-center gap-1">
                  <h4>Blended Learning</h4>
                  <p className="hidden text-sm text-gray-600 font-normal md:block">
                    To suit your pace, help you learn at your convenience
                  </p>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white even:bg-[#f8f8f8]">
              <td className="w-[40%] p-3 text-xs text-gray-600 border-r border-[#e6e6e6] md:text-sm md:text-gray-800">
                Live classes
              </td>
              <td className="w-[30%] text-center text-2xl text-blue-500 md:text-3xl">
                <i className="bx bx-check"></i>
              </td>
              <td className="w-[30%] text-center text-2xl text-red-500 md:text-3xl">
                <i className="bx bx-x"></i>
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-[#f8f8f8]">
              <td className="w-[40%] p-3 text-xs text-gray-600 border-r border-[#e6e6e6] md:text-sm md:text-gray-800">
                Blended classes
              </td>
              <td className="w-[30%] text-center text-2xl text-red-500 md:text-3xl">
                <i className="bx bx-x"></i>
              </td>
              <td className="w-[30%] text-center text-2xl text-blue-500 md:text-3xl">
                <i className="bx bx-check"></i>
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-[#f8f8f8]">
              <td className="w-[40%] p-3 text-xs text-gray-600 border-r border-[#e6e6e6] md:text-sm md:text-gray-800">
                1:1 live doubt support (Unlimited)
              </td>
              <td className="w-[30%] text-center text-2xl text-blue-500 md:text-3xl">
                <i className="bx bx-check"></i>
              </td>
              <td className="w-[30%] text-center text-2xl text-blue-500 md:text-3xl">
                <i className="bx bx-check"></i>
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-[#f8f8f8]">
              <td className="w-[40%] p-3 text-xs text-gray-600 border-r border-[#e6e6e6] md:text-sm md:text-gray-800">
                1:1 Domain Expert Sessions
              </td>
              <td className="w-[30%] text-center text-2xl text-blue-500 md:text-3xl">
                <i className="bx bx-check"></i>
              </td>
              <td className="w-[30%] text-center text-2xl text-blue-500 md:text-3xl">
                <i className="bx bx-check"></i>
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-[#f8f8f8]">
              <td className="w-[40%] p-3 text-xs text-gray-600 border-r border-[#e6e6e6] md:text-sm md:text-gray-800">
                Full fees refundable within 7 days
              </td>
              <td className="w-[30%] text-center text-2xl text-blue-500 md:text-3xl">
                <i className="bx bx-check"></i>
              </td>
              <td className="w-[30%] text-center text-2xl text-blue-500 md:text-3xl">
                <i className="bx bx-check"></i>
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-[#f8f8f8]">
              <td className="w-[40%] p-3 text-xs text-gray-600 border-r border-[#e6e6e6] md:text-sm md:text-gray-800">
                E&ICT Academy, IIT-Guwahati Alumni Status
              </td>
              <td className="w-[30%] text-center text-2xl text-blue-500 md:text-3xl">
                <i className="bx bx-check"></i>
              </td>
              <td className="w-[30%] text-center text-2xl text-blue-500 md:text-3xl">
                <i className="bx bx-check"></i>
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-[#f8f8f8]">
              <td className="w-[40%] p-3 text-xs text-gray-600 border-r border-[#e6e6e6] md:text-sm md:text-gray-800">
                Orientation at E&ICT, IIT Guwahati Campus
              </td>
              <td className="w-[30%] text-center text-2xl text-blue-500 md:text-3xl">
                <i className="bx bx-check"></i>
              </td>
              <td className="w-[30%] text-center text-2xl text-blue-500 md:text-3xl">
                <i className="bx bx-check"></i>
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-[#f8f8f8]">
              <td className="w-[40%] p-3 text-xs text-gray-600 border-r border-[#e6e6e6] md:text-sm md:text-gray-800">
                Graduation ceremony at E&ICT, IIT Guwahati Campus
              </td>
              <td className="w-[30%] text-center text-2xl text-blue-500 md:text-3xl">
                <i className="bx bx-check"></i>
              </td>
              <td className="w-[30%] text-center text-2xl text-blue-500 md:text-3xl">
                <i className="bx bx-check"></i>
              </td>
            </tr>
            <tr className="bg-white">
              <td></td>
              <td>
                <div className="py-5 flex flex-col items-center justify-center gap-1">
                  <p className="text-[0.65rem] text-gray-800 sm:text-xs md:text-sm">
                    Price as low as
                  </p>
                  <h5 className="text-xs font-medium sm:text-sm md:text-lg">
                    ₹5911 / month
                  </h5>
                  <button className="py-1 px-2 text-xs text-white font-medium bg-[#f66c3b] rounded-lg hover:bg-[#ff8254] sm:py-[6px] sm:px-3 md:py-[10px] md:w-[75%] md:text-sm">
                    Apply now
                  </button>
                </div>
              </td>
              <td>
                <div className="py-5 flex flex-col items-center justify-center gap-1">
                  <p className="text-[0.65rem] text-gray-800 sm:text-xs md:text-sm">
                    Price as low as
                  </p>
                  <h5 className="text-xs font-medium sm:text-sm md:text-lg">
                    ₹5911 / month
                  </h5>
                  <button className="py-1 px-2 text-xs text-white font-medium bg-[#f66c3b] rounded-lg hover:bg-[#ff8254] sm:py-[6px] sm:px-3 md:py-[10px] md:w-[75%] md:text-sm">
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
