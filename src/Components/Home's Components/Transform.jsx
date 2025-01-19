import React, { useContext } from "react";
import { CodingNinjasContext } from "../../Context/ContextAPI"; // Context API

// SVGs - { Icons }
import Learner from "../../assets/SVGs/learner.svg";
import Placement from "../../assets/SVGs/placement_cell.svg";
import AverageCTC from "../../assets/SVGs/average_ctc.svg";
import Hike from "../../assets/SVGs/hike.svg";

// Sub-Component
function SpecificationCard(props) {
  return (
    <div className="text-center flex flex-col justify-center items-center gap-2.5">
      <img
        className={`${props.animation} h-24 p-5 mb-2.5 rounded-3xl`}
        src={props.img}
        alt=""
      />
      <h1 className="animated-text text-4xl text-center font-bold sm:text-6xl lg:text-7xl">
        {props.heading}
      </h1>
      <p className="animated-para font-medium sm:text-lg lg:text-xl">
        {props.paragraph}
      </p>
    </div>
  );
}

function Transform() {
  // Using Context API
  const { scroll } = useContext(CodingNinjasContext);

  return (
    <div className="p-5 py-20 flex flex-col items-center gap-10 bg-[#15181a]">

      {/* Heading */}
      <h1 className="max-w-screen-md mb-20 text-5xl flex flex-col gap-5 text-center font-extrabold sm:text-6xl lg:text-7xl">
        <div className="animated-text">9 years of</div>
        <div className="animated-text">transforming</div>
        <div className="animated-text">tech careers</div>
      </h1>

      {/* Specifications */}
      <div className="max-w-screen-lg flex flex-col items-center gap-10">
        <SpecificationCard
          img={Learner}
          animation="animated-learner"
          heading="1.5 Lac+ Learners"
          paragraph="crack dream roles at top tech companies"
        />
        <div className="h-28 w-1 bg-gray-500/20 rounded-3xl"></div>{/* Divider */}
        <SpecificationCard
          img={Placement}
          animation="animated-placement"
          heading="1,400 Alimni in MAANG"
          paragraph="& more in 103/111 Unicorns"
        />
        <div className="h-28 w-1 bg-gray-500/20 rounded-3xl"></div>{/* Divider */}
        <SpecificationCard
          img={AverageCTC}
          animation="animated-average-ctc"
          heading="1 Cr+ highest CTC"
          paragraph="after completing this course"
        />
        <div className="h-28 w-1 bg-gray-500/20 rounded-3xl"></div>{/* Divider */}
        <SpecificationCard
          img={Hike}
          animation="animated-hike"
          heading="128% average hike"
          paragraph="via our placement cell"
        />
      </div>

      {/* Explore Button */}
      <button
        onClick={() => scroll("offerings")}
        className="h-14 max-w-72 w-72 min-w-72 py-3 px-6 text-white font-semibold flex items-center justify-center gap-2 bg-[#f66c3b] rounded-lg hover:bg-[#ff8254]"
      >
        Explore offerings
        <i className="bx bxs-chevrons-up text-xl translate-y-[1.75px]"></i>
      </button>
      
    </div>
  );
}

export default Transform;
