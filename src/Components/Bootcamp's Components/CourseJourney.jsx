import React, { useContext } from "react";
import { CodingNinjasContext } from "../../Context/ContextAPI"; // Context API

// Sub-Component
function JourneyCard(props) {
  // Array of List Elements
  const lists = props.array.map((item, index) => {
    return <li key={index}>{item}</li>;
  });

  return (
    <div className="w-full p-5 flex items-center gap-5 bg-white rounded-xl md:px-8">
      <div className="aspect-square h-[72px] relative flex justify-center items-center shadow-[0_0_10px_#ededed] rounded-full">
        <img src={props.image} alt="" className="aspect-square h-9" />
        <div
          style={{ backgroundColor: props.feelingBackground }}
          className="w-fit p-1.5 px-3 text-center text-xs font-medium text-nowrap absolute top-[85%] right-[45%] rounded-2xl rounded-tr-none"
        >
          {props.feeling}
        </div>
      </div>
      <div className="flex flex-col gap-2.5">
        <h3 className="text-[0.95rem] font-medium md:text-lg">{props.title}</h3>
        <ul className="text-xs text-gray-400 flex flex-col gap-2.5 md:text-sm">
          {lists}
        </ul>
      </div>
    </div>
  );
}

function CourseJourney(props) {
  // Using Context API
  const { scroll } = useContext(CodingNinjasContext);

  return (
    <div className="p-10 flex flex-col justify-center items-center gap-10 bg-[#f6f4fb] lg:flex-row">

      {/* Intro section */}
      <div className="max-w-sm w-full flex flex-col gap-3 lg:gap-6">
        {/* Heading */}
        <h4 className="text-center font-medium text-[#6249c5] lg:text-left">
          {props.program} Journey
        </h4>

        {/* Dialogue */}
        <h2 className="text-center text-2xl font-bold lg:text-left lg:text-5xl">
          <div>It's not just a course;</div>
          <div className="text-transparent bg-[linear-gradient(113deg,_#0047ff_9.94%,_#00c2ff_103.47%)] bg-clip-text">
            it's an experience.
          </div>
        </h2>

        {/* Inline Book webinar Button */}
        <button
          onClick={() => scroll("webinar")}
          className="hidden w-fit mt-10 py-5 px-10 text-white font-medium bg-[#f66c3b] rounded-lg hover:bg-[#ff8254] lg:inline"
        >
          Book a free webinar
        </button>
      </div>

      {/* Journey Cards */}
      <div className="max-w-md flex flex-col items-center gap-5 md:max-w-lg">
        {props.array.map((object, index) => {
          return (
            <JourneyCard
              key={index}
              image={object.image}
              feelingBackground={object.feelingBackground}
              feeling={object.feeling}
              title={object.title}
              array={object.array}
            />
          );
        })}
      </div>

      {/* Book webinar Button */}
      <button
        onClick={() => scroll("webinar")}
        className="py-3 px-6 text-white font-medium bg-[#f66c3b] rounded-lg hover:bg-[#ff8254] lg:hidden"
      >
        Book a free webinar
      </button>
      
    </div>
  );
}

export default CourseJourney;
