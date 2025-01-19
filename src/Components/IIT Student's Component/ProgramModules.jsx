import React, { useState } from "react";

// Sub-Component
function Dropdown(props) {
  // State for hide/show
  const [show, setShow] = useState(false);

  // Array of Lists Element
  const lists = props.array.map((item, index) => {
    return (
      <li key={index} className="list-disc list-inside">
        {item}
      </li>
    );
  });

  return (
    <div className="border-b border-[#d4d4d4] overflow-y-hidden">
      <div
        onClick={() => setShow((val) => !val)}
        className="cursor-pointer p-3 flex items-center gap-x-2"
      >
        <i
          className={`bx bxs-${
            show ? "up" : "right"
          }-arrow text-[0.65rem] translate-y-[1.5px]`}
        ></i>
        <h1 className="font-medium md:text-lg">{props.title}</h1>
      </div>
      <ul
        style={
          show
            ? { height: "calc-size(fit-content, size)", paddingBlock: "12px" }
            : { height: "0", paddingBlock: "0" }
        }
        className="pl-8 text-sm font-light transition-all duration-500 md:text-base"
      >
        {lists}
      </ul>
    </div>
  );
}

function ProgramModules(props) {
  return (
    <div className="py-10 px-5 flex flex-col items-center gap-5">

      {/* Heading */}
      <h1 className="text-2xl text-center font-semibold">
        Program <span className="text-[#4164bd]">Modules</span>
      </h1>

      {/* Modules */}
      <div className="max-w-screen-lg w-full">
        {props.array.map((object, index) => {
          return (
            <Dropdown key={index} title={object.title} array={object.array} />
          );
        })}
      </div>
      
    </div>
  );
}

export default ProgramModules;
