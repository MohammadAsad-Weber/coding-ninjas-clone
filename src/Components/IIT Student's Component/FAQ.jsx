import React, { useState } from "react";

// Sub-Component
function FAQCard(props) {
  // State for hide/show
  const [show, setShow] = useState(false);

  return (
    <div className="w-full overflow-y-hidden bg-white">
      {/* Question */}
      <div
        onClick={() => setShow((val) => !val)}
        className={`p-5 ${
          show ? "text-[#4164bd]" : "text-black"
        } cursor-pointer flex justify-between`}
      >
        <h3 className="font-medium md:text-lg">{props.question}</h3>
        <i className={`bx bxs-chevron-${show ? "up" : "down"} text-xl`}></i>
      </div>
      {/* Answer */}
      <p
        style={
          show
            ? {
                height: "calc-size(fit-content, size)",
                paddingBlock: "5px 20px",
              }
            : { height: "0", paddingBlock: "0" }
        }
        className="px-5 text-sm text-gray-600 transition-all duration-500 md:text-base"
      >
        {props.answer}
      </p>
    </div>
  );
}

function FAQ(props) {
  return (
    <div className="py-10 px-5 flex flex-col items-center gap-10 bg-[#4164bd] md:gap-14">

      {/* Heading */}
      <h1 className="text-xl font-semibold text-white md:text-2xl">
        Frequently Asked Question
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
      
    </div>
  );
}

export default FAQ;
