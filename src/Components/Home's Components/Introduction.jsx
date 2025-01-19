import React, { useContext } from "react";
import { CodingNinjasContext } from "../../Context/ContextAPI"; // Context API

// Introduction Video
import IntroVideo from "../../assets/Videos/intro_video.mp4";

function Introduction() {
  // Using Context API
  const { scroll } = useContext(CodingNinjasContext);

  return (
    <div className="p-10 pt-20 flex flex-col items-center gap-16 bg-[#15181a] lg:gap-20">

      {/* Intro Section */}
      <div className="max-w-screen-md w-full text-center flex flex-col gap-8">
        <h2 className="text-xl text-transparent font-semibold bg-[linear-gradient(105deg,_#75b469,_#efce74,_#fb833f,_#fecc4f,_#fb11e0,_#fe732b,_#0149ff,_#01a3ff,_#3e85fe,_#883eec,_#75b469)] bg-[length:900%] bg-clip-text animate-text md:text-2xl">
          Restricted by opportunities?
        </h2>
        <h1 className="text-4xl text-white font-bold sm:text-5xl md:text-[4rem] lg:text-7xl">
          Get the tech career you deserve. Faster.
        </h1>
        <p className="text-sm text-gray-500 md:text-base">
          Structured coding courses that get you there faster with confidence.
        </p>
      </div>

      {/* Explore Button */}
      <button
        onClick={() => scroll("offerings")}
        className="h-14 max-w-72 w-72 min-w-72 py-3 px-6 text-white font-semibold flex items-center justify-center gap-x-2 bg-[#f66c3b] rounded-lg hover:bg-[#ff8254]"
      >
        Explore offerings
        <i className="bx bxs-chevrons-down text-xl translate-y-[1.75px]"></i>
      </button>

      {/* IFrame (Video) Section */}
        <video
          className="aspect-video max-w-screen-lg w-full rounded-3xl"
          controls
          autoPlay
          muted
          loop
          playsInline
          src={IntroVideo}
        />
      
    </div>
  );
}

export default Introduction;
