import React, { useState, useContext } from "react";
import { CodingNinjasContext } from "../../Context/ContextAPI"; // Context API

// Sub-Component
function FAQCard(props) {
  // State for Hide/Show
  const [show, setShow] = useState(false);

  return (
    <div
      onClick={() => setShow((val) => !val)}
      className="w-full overflow-y-hidden text-sm border border-[#f0f0f1] rounded-lg hover:cursor-pointer sm:text-base lg:text-lg"
    >
      {/* Question */}
      <div className="py-4 px-6 font-semibold flex items-center justify-between">
        <h3>{props.question}</h3>
        <i
          className={`bx ${
            show ? "bx-chevron-up-circle" : "bx-chevron-down-circle"
          } text-lg sm:text-xl md:text-2xl`}
        ></i>
      </div>

      {/* Answer */}
      <p
        style={
          show
            ? { height: "calc-size(fit-content, size)", paddingBlock: "16px" }
            : { height: "0", paddingBlock: "0" }
        }
        className="px-6 transition-all duration-300"
      >
        {props.answer}
      </p>
    </div>
  );
}

function FAQ(props) {
  // Using Context API
  const { scroll } = useContext(CodingNinjasContext);

  return (
    <div className="p-10 pt-16 flex flex-col items-center gap-10">

      {/* Heading */}
      <h1 className="text-xl font-semibold sm:text-2xl">
        Frequently Asked Questions
      </h1>

      {/* FAQs */}
      <div className="max-w-screen-lg w-full flex flex-col items-center gap-5">
        {props.array.map((object, index) => {
          return (
            <FAQCard
              key={index}
              question={object.question}
              answer={object.answer}
            />
          );
        })}
      </div>

      {/* Buttons */}
      <div className="hidden items-center justify-center gap-5 md:flex">
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

export default FAQ;
