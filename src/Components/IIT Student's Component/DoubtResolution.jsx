import React from "react";

// Sub-Component
function DetailBox(props) {
  return (
    <div className="p-2.5 text-center border border-[#4164bd] rounded">
      <h2 className="mb-2 text-xl font-medium lg:text-2xl">{props.num}</h2>
      <p className="text-sm font-['Mulish'] lg:text-base">{props.title}</p>
    </div>
  );
}

function DoubtResolution() {
  return (
    <div className="py-10 px-2.5 flex flex-col items-center gap-7 lg:gap-10">

      {/* Heading */}
      <h1 className="text-xl text-center font-semibold lg:text-3xl">
        Unlimited 1:1 Live
        <span className="text-[#4164bd]"> Doubt Resolution</span>
      </h1>

      {/* Content */}
      <div className="max-w-screen-lg w-full flex flex-col items-center justify-center gap-5 lg:flex-row lg:gap-10">

        {/* Details */}
        <div className="max-w-md px-2.5 flex flex-col items-center gap-5">

          {/* Heading */}
          <h2 className="hidden text-2xl font-semibold lg:block">Timings</h2>

          {/* Paragrapg */}
          <p className="text-center text-gray-800 lg:text-lg">
            Ask unlimited doubts to our expert teaching assistants whenever you
            are stuck from 10 a.m. to 12 a.m. (midnight), 7 days a week, 365
            days a year.
          </p>

          {/* Detail Boxes */}
          <div className="flex items-center justify-center gap-2.5">
            <DetailBox num="6" title="Expert Instructors" />
            <DetailBox num="50" title="Industry Mentors" />
            <DetailBox num="1000+" title="Teaching Assistants" />
          </div>
          
        </div>

        {/* Iframe */}
        <iframe
          className="aspect-video max-w-lg w-full"
          src="https://www.youtube.com/embed/5vlHbRJAtCc"
          title="1:1 Doubt Support"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />

      </div>

    </div>
  );
}

export default DoubtResolution;
