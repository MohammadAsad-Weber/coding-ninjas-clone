import React, { useContext } from "react";
import { CodingNinjasContext } from "../../Context/ContextAPI"; // Context API

// SVGs - { Logos & Icons }
import GitHub from "../../assets/SVGs/github.svg";
import LinkedIn from "../../assets/SVGs/linkedin.svg";
import Resume from "../../assets/SVGs/resume.svg";
import SoftSkills from "../../assets/SVGs/soft_skills.svg";
import Interview from "../../assets/SVGs/interview.svg";

// Sub-Component
function PlacementCard(props) {
  return (
    <div className="max-w-80 w-full flex gap-4 lg:flex-col lg:gap-2.5">
      <i className={`bx ${props.icon} text-[1.75rem] lg:text-4xl`}></i>
      <div className="flex flex-col gap-2.5">
        <h2 className="text-lg font-medium">{props.title}</h2>
        <p className="text-sm text-gray-400">{props.paragraph}</p>
      </div>
    </div>
  );
}
function BootcampCard(props) {
  return (
    <div className="min-h-[180px] p-[1px] bg-[linear-gradient(rgba(250,_250,_250,_.4),_transparent)] rounded-3xl lg:first:col-span-2">
      <div className="h-full w-full p-5 flex flex-col items-start gap-2.5 bg-[linear-gradient(to_bottom,_#1f1f1f_20%,_#141414_100%)] rounded-3xl">
        <img src={props.img} alt="" className="aspect-square h-10" />
        <h2 className="font-semibold text-white">{props.title}</h2>
        <p className="text-sm text-[gray]">{props.paragraph}</p>
      </div>
    </div>
  );
}

function Benefit(props) {
  // Using Context API
  const { scroll } = useContext(CodingNinjasContext);

  return (
    <>
      {/* Placement Benefit */}
      <div className="p-10 pt-16 flex flex-col items-center gap-10 md:gap-14">

        {/* Heading */}
        <h1 className="text-2xl font-semibold">Placement benefits</h1>

        {/* Benefit Cards */}
        <div className="max-w-screen-lg grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {props.placementArray.map((object, index) => {
            return (
              <PlacementCard
                key={index}
                icon={object.icon}
                title={object.title}
                paragraph={object.paragraph}
              />
            )
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

      {/* Job Bootcamp Benefits */}
      <div className="p-10 pt-16 flex flex-col items-center gap-10 bg-[#141414] md:gap-14">

        {/* Heading */}
        <h1 className="text-2xl font-semibold text-white">
          Job Bootcamp benefits
        </h1>

        {/* Benefit Cards */}
        <div className="max-w-screen-lg grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {props.bootcampArray.map((object, index) => {
            return (
              <BootcampCard
                key={index}
                img={object.img}
                title={object.title}
                paragraph={object.paragraph}
              />
            )
          })}
        </div>

      </div>

      {/* Benefits Beyond Learning */}
      <div className="p-10 overflow-x-hidden flex justify-center bg-[#141414]">

        {/* Inner div */}
        <div className="max-w-screen-lg w-full flex flex-col items-start gap-10 bg-[#141414] md:gap-14">

          {/* Heading */}
          <h1 className="text-lg font-semibold text-white">
            Benefits beyond learning
          </h1>

          {/* Benefit Cards */}
          <div className="w-full grid grid-cols-3 gap-2 sm:grid-cols-6 sm:gap-4">

            {/* GitHub Card */}
            <div className="p-[1px] bg-[linear-gradient(to_bottom_right,_rgba(250,_250,_250,_.4),_transparent)] rounded-3xl sm:col-span-2">
              <div className="w-full h-full p-5 flex flex-col items-center gap-2.5 bg-[linear-gradient(to_top_left,_#1f1f1f_20%,_#141414_100%)] rounded-3xl">
                <img src={GitHub} alt="" className="aspect-square h-10" />
                <h2 className="text-center font-semibold text-white">
                  Github profile
                </h2>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="p-[1px] bg-[linear-gradient(to_bottom_right,_rgba(250,_250,_250,_.4),_transparent)] rounded-3xl sm:col-span-2">
              <div className="w-full h-full p-5 flex flex-col items-center gap-2.5 bg-[linear-gradient(to_top_left,_#1f1f1f_20%,_#141414_100%)] rounded-3xl">
                <img src={LinkedIn} alt="" className="aspect-square h-10" />
                <h2 className="text-center font-semibold text-white">
                  LinkedIn profile
                </h2>
              </div>
            </div>

            {/* Resume Card */}
            <div className="p-[1px] bg-[linear-gradient(to_bottom_right,_rgba(250,_250,_250,_.4),_transparent)] rounded-3xl sm:col-span-2">
              <div className="w-full h-full p-5 flex flex-col items-center gap-2.5 bg-[linear-gradient(to_top_left,_#1f1f1f_20%,_#141414_100%)] rounded-3xl">
                <img src={Resume} alt="" className="aspect-square h-10" />
                <h2 className="text-center font-semibold text-white">
                  Resume writing
                </h2>
              </div>
            </div>

            {/* Soft Skills Card */}
            <div className="p-[1px] bg-[linear-gradient(to_bottom_right,_rgba(250,_250,_250,_.4),_transparent)] rounded-3xl col-span-3">
              <div className="w-full h-full p-5 flex items-center gap-3 bg-[linear-gradient(to_top_left,_#1f1f1f_20%,_#141414_100%)] rounded-3xl sm:flex-col">
                <img src={SoftSkills} alt="" className="aspect-square h-10" />
                <div className="flex flex-col gap-2.5 sm:items-center">
                  <h2 className="font-semibold text-white">Soft skills</h2>
                  <p className="text-sm text-[gray]">
                    Master communication and salary negotiation skills.
                  </p>
                </div>
              </div>
            </div>

            {/* Interview Card */}
            <div className="p-[1px] bg-[linear-gradient(to_bottom_right,_rgba(250,_250,_250,_.4),_transparent)] rounded-3xl col-span-3">
              <div className="w-full h-full p-5 flex items-center gap-3 bg-[linear-gradient(to_top_left,_#1f1f1f_20%,_#141414_100%)] rounded-3xl sm:flex-col">
                <img src={Interview} alt="" className="aspect-square h-10" />
                <div className="flex flex-col gap-2.5 sm:items-center">
                  <h2 className="font-semibold text-white">
                    Interview preparation
                  </h2>
                  <p className="text-sm text-[gray]">
                    Mock interviews and expert sessions
                  </p>
                </div>
              </div>
            </div>
          
          </div>

        </div>

      </div>
    </>
  );
}

export default Benefit;
