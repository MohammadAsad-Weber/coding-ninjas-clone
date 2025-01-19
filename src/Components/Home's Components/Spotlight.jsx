import React from "react";

//SVGs - { Icon }
import SpotlightIcon from "../../assets/SVGs/spotlight.svg";

// Images - { Images of News Articles Company }
import ImageLink from "../../assets/Images/Articles/news.webp";
import CXO from "../../assets/Images/Articles/cxo.png";
import HindustanTimes from "../../assets/Images/Articles/hindustan_times.png";
import TheHindu from "../../assets/Images/Articles/the_hindu.png";
import EconomicsTime from "../../assets/Images/Articles/economic_times.png";
import TheTimesOfIndia from "../../assets/Images/Articles/the_times_of_india.png";
import MoneyControl from "../../assets/Images/Articles/money_control.png";

// Sub-Components
function SpotlightCard(props) {
  return (
    <a
      href={props.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="max-w-52 w-full min-w-52 max-h-48 h-full min-h-fit p-3 flex flex-col items-start justify-start gap-2.5 bg-white border border-[#e3e3e3] rounded-xl"
    >
      <img src={props.img} alt="" className="max-h-10 h-10 min-h-10" />
      <p className="max-h-12 h-12 min-h-12 text-xs text-[#141414]">
        {props.description}
      </p>
    </a>
  );
}

// Cards Data
const cardsData = [
  {
    url: "https://www.cxotoday.com/press-release/coding-ninjas-unconventional-approach-upskills-1l-students-yields-2-2x-salary-increase-for-graduates/",
    image: CXO,
    description:
      "Coding Ninjas Unconventional Approach Upskills 1L Students, Yields 2.2x Salary Increase",
  },
  {
    url: "https://www.hindustantimes.com/ht-insight/future-tech/sustainable-development-through-upskilling-indias-engineering-renaissance-101694761787406.html",
    image: HindustanTimes,
    description:
      "Sustainable development through upskilling: India's engineering renaissance",
  },
  {
    url: "https://www.thehindu.com/news/national/women-in-tech-earn-7-more-than-men-on-average-but-men-snag-highest-salaries/article66591413.ece",
    image: TheHindu,
    description:
      "Women in tech earn 7% more than men on average but men snag the highest salaries",
  },
  {
    url: "https://economictimes.indiatimes.com/jobs/fresher/tech-grads-sign-up-for-bootcamps-to-be-more-employable/articleshow/104074729.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst",
    image: EconomicsTime,
    description: "Tech grads sign up for 'bootcamps' to be more employable",
  },
  {
    url: "https://timesofindia.indiatimes.com/blogs/voices/young-professionals-must-embrace-continuous-upskilling-in-the-age-of-ai/",
    image: TheTimesOfIndia,
    description:
      "Young professionals must embrace continuous upskilling in the age of AI",
  },
  {
    url: "https://www.moneycontrol.com/news/business/startup/generative-ai-courses-in-hot-demand-as-more-indians-flock-to-upskilling-platforms-11015551.html",
    image: MoneyControl,
    description:
      "Generative AI courses in hot demand as more Indians flock to upskilling platforms",
  },
];

function Spotlight() {
  // Video Url
  const url = "https://www.youtube.com/watch?v=KnGfIXDNNNk&embeds_referring_euri=https%3A%2F%2Fwww.codingninjas.com%2F"

  return (
    <div className="py-16 px-5 flex flex-col items-center gap-10 bg-[#fff6f3]">

      {/* Heading */}
      <div className="w-fit flex items-center justify-center gap-2.5">
        <img src={SpotlightIcon} alt="" className="rounded-2xl" />
        <h1 className="text-lg font-semibold">Coding Ninjas in spotlight</h1>
      </div>

      {/* Container */}
      <div className="max-w-fit w-full flex flex-col items-center justify-center gap-5 lg:flex-row">

        {/* Image with Video */}
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={ImageLink} alt="" className="max-w-md w-full min-w-80" />
        </a>

        {/* SpotlightCards */}
        <div className="max-w-fit w-full grid grid-cols-[repeat(3,_auto)] gap-2.5 overflow-x-auto bar-none">
          {cardsData.map((data, index) => {
            return (
              <SpotlightCard
                key={index}
                url={data.url}
                img={data.image}
                description={data.description}
              />
            );
          })}
        </div>

      </div>
      
    </div>
  );
}

export default Spotlight;
