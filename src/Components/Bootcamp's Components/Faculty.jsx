import React, { useContext } from "react";
import { CodingNinjasContext } from "../../Context/ContextAPI"; // Context API

// Sub-Component
function FacultyCard(props) {
  // Array of the Images Elements
  const images = props.logos.map((source, index) => {
    return (
      <img key={index} src={source} className="aspect-square h-8" />
    );
  });

  // Array of the Lists Elements
  const lists = props.subjects.map((sub, index) => {
    return (
      <li key={index} className="text-xs text-gray-800">
        {sub}
      </li>
    );
  });

  return (
    <div className="max-w-72 w-full min-w-72 min-h-[405px] py-6 px-10 flex flex-col items-center justify-between gap-8 bg-white rounded-2xl">

      {/* Details */}
      <div className="flex flex-col items-center gap-3">
        <img
          style={{
            background: `linear-gradient(180deg, ${props.background} 0%, #d5dff9 100%) `,
          }}
          src={props.profile}
          alt=""
          className="aspect-square h-20 rounded-full"
        />
        <h1 className="text-lg font-medium">{props.name}</h1>
        <p className="-mt-2.5 text-sm text-gray-800">{props.role}</p>
      </div>

      {/* Teaching Details */}
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-2.5" >{images}</div>
        <h4 className="text-xs text-gray-500 font-semibold">Teaches</h4>
        <ul className="flex flex-col items-center gap-1">{lists}</ul>
      </div>

      {/* LinkedIn */}
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[0.9rem] font-semibold text-blue-500 underline"
      >
        LinkedIn profile
      </a>

    </div>
  );
}

function Faculty(props) {
  // Using Context API
  const { scroll } = useContext(CodingNinjasContext);

  return (
    <div className="p-10 pt-16 flex flex-col items-center gap-10 bg-[#f6fbfb] sm:gap-16">

      {/* Heading */}
      <h1 className="text-xl text-center font-semibold sm:text-2xl">
        Faculty that brings out the best in you
      </h1>

      {/* Faculty Cards */}
      <div className="max-w-fit w-full overflow-x-auto bar-none flex items-center gap-5">
        {props.array.map((object, index) => {
          return (
            <FacultyCard
              key={index}
              profile={object.profile}
              background={object.background}
              name={object.name}
              role={object.role}
              logos={object.logos}
              subjects={object.subjects}
              link={object.link}
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

export default Faculty;
