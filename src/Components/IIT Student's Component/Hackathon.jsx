import React, { useState } from "react";

// Library Image
import Library from "../../assets/Images/library.jpeg";

// Sub-Component
function Dropdown(props) {
  // State for hide/show
  const [show, setShow] = useState(false);

  return (
    <div className="overflow-y-hidden bg-[#414141]">
      <div
        onClick={() => setShow((val) => !val)}
        className={`${
          show ? "text-yellow-500" : "text-white"
        } cursor-pointer p-3 flex items-center justify-between`}
      >
        <h2 className="lg:text-lg">{props.heading}</h2>
        <i
          className={`bx bxs-${show ? "up" : "right"}-arrow text-[0.65rem]`}
        ></i>
      </div>
      <p
        style={
          show
            ? { height: "calc-size(fit-content, size)", paddingBlock: "12px" }
            : { height: "0px", paddingBlock: "0px" }
        }
        className="px-3 text-sm font-light bg-[#272727] transition-all duration-500 lg:text-base"
      >
        {props.paragraph}
      </p>
    </div>
  );
}

function Hackathon(props) {
  return (
    <div className="p-10 text-white flex flex-col items-center justify-center gap-10 bg-[radial-gradient(at_bottom_center,_#000_75%,_#303030_14%)]">

      {/* Heading */}
      <h1 className="text-xl text-center font-medium font-['Arial_Black'] leading-6">
        Exclusive 2 days Hackathon at E&ICT IIT Guwahati Campus
      </h1>

      {/* Content */}
      <div className="flex flex-col items-center justify-center gap-10 lg:flex-row">

        {/* Library Image */}
        <img src={Library} alt="" className="max-w-xl w-full" />

        {/* Details */}
        <div className="max-w-md w-full flex flex-col items-center gap-5">

          {/* Heading with Sub-Heading */}
          <div className="text-center">
            <h3 className="mb-1 lg:text-lg">
              Solve real-world problems using data
            </h3>
            <p className="text-sm lg:text-base">
              (these are some sample problems)
            </p>
          </div>

          {/* Dropdowns */}
          <div className="flex flex-col gap-2">
            {props.array.map((object, index) => {
              return (
                <Dropdown
                  key={index}
                  heading={object.heading}
                  paragraph={object.paragraph}
                />
              );
            })}
          </div>

          {/* Callback button */}
          <button className="py-2 px-4 text-xs bg-[#4164bd] rounded-md lg:text-sm lg:py-3 lg:px-9">
            Request Callback
          </button>
          
        </div>

      </div>

    </div>
  );
}

export default Hackathon;
