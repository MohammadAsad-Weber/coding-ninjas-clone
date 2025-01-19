import React from "react";

// SVGs - { Logos & Icons }
import GitHub from "../../assets/SVGs/github.svg";
import LinkedIn from "../../assets/SVGs/linkedin.svg";
import Resume from "../../assets/SVGs/resume.svg";
import SoftSkills from "../../assets/SVGs/soft_skills.svg";
import Interview from "../../assets/SVGs/interview.svg";

// Sub-Component
function ProgramCard(props) {
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
  return (
    <>
      {/* Job Bootcamp Benefits */}
      <div className="p-10 pt-16 flex flex-col items-center gap-10 bg-[#141414] md:gap-14">

        {/* Heading */}
        <h1 className="text-2xl font-semibold text-white">
          Job Bootcamp benefits
        </h1>

        {/* Benefit Cards */}
        <div className="max-w-screen-lg grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {props.array.map((object, index) => {
            return (
              <ProgramCard
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
      <div className="p-10 overflow-x-hidden flex flex-col items-center gap-10 bg-[#141414] md:gap-14">

        {/* Heading */}
        <h1 className="text-xl font-semibold text-white">
          Benefits beyond learning
        </h1>

        {/* Benefit Cards */}
        <div className="max-w-screen-lg w-full grid grid-cols-3 gap-2 sm:grid-cols-6 sm:gap-4">

          {/* GitHub Card */}
          <div className="p-[1px] bg-[linear-gradient(to_bottom_right,_rgba(250,_250,_250,_.4),_transparent)] rounded-3xl sm:col-span-2">
            <div className="w-full h-full p-5 flex flex-col items-center gap-2 bg-[linear-gradient(to_top_left,_#1f1f1f_20%,_#141414_100%)] rounded-3xl">
              <img src={GitHub} alt="" className="aspect-square h-10" />
              <h2 className="text-center font-semibold text-white">
                Job board access
              </h2>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="p-[1px] bg-[linear-gradient(to_bottom_right,_rgba(250,_250,_250,_.4),_transparent)] rounded-3xl sm:col-span-2">
            <div className="w-full h-full p-5 flex flex-col items-center gap-2 bg-[linear-gradient(to_top_left,_#1f1f1f_20%,_#141414_100%)] rounded-3xl">
              <img src={LinkedIn} alt="" className="aspect-square h-10" />
              <h2 className="text-center font-semibold text-white">
                Profile Building
              </h2>
            </div>
          </div>

          {/* Resume Card */}
          <div className="p-[1px] bg-[linear-gradient(to_bottom_right,_rgba(250,_250,_250,_.4),_transparent)] rounded-3xl sm:col-span-2">
            <div className="w-full h-full p-5 flex flex-col items-center gap-2 bg-[linear-gradient(to_top_left,_#1f1f1f_20%,_#141414_100%)] rounded-3xl">
              <img src={Resume} alt="" className="aspect-square h-10" />
              <h2 className="text-center font-semibold text-white">
                Resume writing
              </h2>
            </div>
          </div>

          {/* Soft Skills Card */}
          <div className="min-h-28 p-[1px] bg-[linear-gradient(to_bottom_right,_rgba(250,_250,_250,_.4),_transparent)] rounded-3xl col-span-3 sm:min-h-40">
            <div className="w-full h-full p-5 flex justify-center items-center gap-3 bg-[linear-gradient(to_top_left,_#1f1f1f_20%,_#141414_100%)] rounded-3xl sm:flex-col">
              <img src={SoftSkills} alt="" className="aspect-square h-10" />
              <h2 className="font-semibold text-white">
                10 Industry expert sessions
              </h2>
            </div>
          </div>

          {/* Interview Card */}
          <div className="min-h-28 p-[1px] bg-[linear-gradient(to_bottom_right,_rgba(250,_250,_250,_.4),_transparent)] rounded-3xl col-span-3 sm:min-h-40">
            <div className="w-full h-full p-5 flex justify-center items-center gap-3 bg-[linear-gradient(to_top_left,_#1f1f1f_20%,_#141414_100%)] rounded-3xl sm:flex-col">
              <img src={Interview} alt="" className="aspect-square h-10" />
              <h2 className="font-semibold text-white">10 Mock interivews</h2>
            </div>
          </div>
          
        </div>

      </div>
    </>
  );
}

export default Benefit;
