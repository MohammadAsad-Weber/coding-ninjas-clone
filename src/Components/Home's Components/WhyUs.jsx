import React, { useState } from "react";

// SVGs - { Heading }
import WhyUsSVG from "../../assets/SVGs/why_us.svg";

// Images - { Icons }
import DoubtImg from "../../assets/Images/Icons/doubt_support.png";
import FacultyImg from "../../assets/Images/Icons/faculty.png";
import PlacementImg from "../../assets/Images/Icons/placement.png";

// Videos - { Why Us }
import Doubts from "../../assets/Videos/1_1_doubt_support.mp4";
import Faculty from "../../assets/Videos/stanford_iit_maang_faculty.mp4";
import Placement from "../../assets/Videos/placement_assistance.mp4";

// Sub-Component
function VideoOption(props) {
  return (
    <div
      onClick={() => props.setVideoSrc(props.video)}
      className="cursor-pointer p-2.5 flex items-center gap-7 rounded-xl hover:bg-[#2d2d2d] transition-colors md:px-5"
    >
      <img className="h-8" src={props.image} alt="" />
      <h3
        style={
          props.videoSrc === props.video ? { color: "#fff" } : { color: "#9ca3af" }
        }
        className="text-xl font-semibold"
      >
        {props.title}
      </h3>
    </div>
  );
}

function WhyUs() {
  // State for Video source
  const [videoSrc, setVideoSrc] = useState(Doubts);

  // State for Mute/Unmute
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div className="p-5 pt-20 flex flex-col items-center gap-16 bg-[#15181a]">

      {/* Heading */}
      <img className="max-w-screen-md w-full" src={WhyUsSVG} alt="" />

      {/* Video Section */}
      <div className="max-w-screen-lg flex flex-col items-center gap-10 md:flex-row lg:gap-20">

        {/* Video Card */}
        <div className="max-w-80 w-full p-2.5 pb-5 bg-[#2d2d2d] border border-white/40 rounded-xl">
          <div className="relative mb-5">
            <video
              autoPlay
              loop
              muted={isMuted}
              src={videoSrc}
              className="min-h-[340px] w-full rounded-xl"
            />
            <button
              onClick={() => setIsMuted((val) => !val)}
              className="py-1.5 px-3 absolute top-2.5 right-2.5 flex items-center justify-center bg-[#2d2d2d] rounded-xl"
            >
              <i
                className={`bx bxs-volume-${
                  isMuted ? "mute" : "full"
                } text-xl text-gray-500`}
              ></i>
            </button>
          </div>
          <h3 className="text-xl font-bold text-transparent bg-[linear-gradient(90deg,#f16222_0%,#f37421_26%,#f68d1e_71%,#f7981d_99.99%)] bg-clip-text">
            Ankush Singla
          </h3>
          <p className="text-sm font-bold text-gray-500">
            Co-Founder of Coding Ninjas | Mentor
          </p>
        </div>

        {/* Video Options */}
        <div className="flex flex-col gap-5">
          <VideoOption
            videoSrc={videoSrc}
            setVideoSrc={setVideoSrc}
            video={Doubts}
            image={DoubtImg}
            title="Fastest 1:1 doubt support"
          />
          <VideoOption
            videoSrc={videoSrc}
            setVideoSrc={setVideoSrc}
            video={Faculty}
            image={FacultyImg}
            title="Stanford/IIT/MAANG faculty"
          />
          <VideoOption
            videoSrc={videoSrc}
            setVideoSrc={setVideoSrc}
            video={Placement}
            image={PlacementImg}
            title="Placement assistance"
          />
        </div>

      </div>
      
    </div>
  );
}

export default WhyUs;
