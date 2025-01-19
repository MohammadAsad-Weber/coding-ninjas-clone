import React, { useState, useContext } from "react";
import { CodingNinjasContext } from "../../Context/ContextAPI"; // Context API

// SVGs - { Icon}
import TestimonialSVG from "../../assets/SVGs/testimonial.svg";

// Images - { Profile Pictures of Alumnies}
import Amit from "../../assets/Images/Testimonials/amit.png";
import Annu from "../../assets/Images/Testimonials/annu.png";
import Ayush from "../../assets/Images/Testimonials/ayush.png";
import Durgesh from "../../assets/Images/Testimonials/durgesh.png";
import Gautam from "../../assets/Images/Testimonials/gautam.png";
import Karan from "../../assets/Images/Testimonials/karan.png";
import Manas from "../../assets/Images/Testimonials/manas.png";
import Manish from "../../assets/Images/Testimonials/manish.png";
import Naman from "../../assets/Images/Testimonials/naman.png";
import Onkar from "../../assets/Images/Testimonials/onkar.png";
import Rahul from "../../assets/Images/Testimonials/rahul.png";
import Samir from "../../assets/Images/Testimonials/samir.png";
import Sanjay from "../../assets/Images/Testimonials/sanjay.png";
import Shivansh from "../../assets/Images/Testimonials/shivansh.png";
import Shrinidhi from "../../assets/Images/Testimonials/shrinidhi.png";
import Supratik from "../../assets/Images/Testimonials/supratik.png";
import Tanmay from "../../assets/Images/Testimonials/tanmay.png";
import Twisam from "../../assets/Images/Testimonials/twisam.png";
import Vartika from "../../assets/Images/Testimonials/vartika.png";

// Testimonial Data
const nonTechToTech = [
  {
    image: Twisam,
    name: "Twisam",
    role: "Full Stack Developer",
    description:
      "From optometrist to IT pro, thanks to Coding Ninjas. Their lessons help me excel in projects. CN transformed my journey, giving me clarity and optimization skills!",
    became: "Cogent E Pvt Ltd",
  },
  {
    image: Onkar,
    name: "Onkar Lapate",
    role: "SDE-1",
    description:
      "Chose Coding Ninjas for structured, high-quality learning due to lack of support & structure. Top-notch mentors, quick TAs, and a supportive community. Best decision ever.",
    became: "Bombay Softwares",
  },
  {
    image: Durgesh,
    name: "Durgesh Chaubey",
    role: "SDE - 1",
    description:
      "Coding Ninjas exceeded my college experience. After the course, I transitioned from a consultant to an SDE-1. Exceptional faculty, including alumni from top institutions like Stanford and IIT.",
    became: "MasterCard",
  },
];
const serviceToProduct = [
  {
    image: Annu,
    name: "Annu",
    role: "SDE - 1",
    description:
      "A friend recommended Coding Ninjas' JAVA course in my first year. It was amazing. The basics I learned still benefit me. The faculty brilliantly simplified complex concepts.",
    became: "Apple",
  },
  {
    image: Ayush,
    name: "Ayush Jaiswal",
    role: "Software Engineer",
    description:
      "My journey with Coding Ninjas has been long and rewarding. In college, their expert guidance helped me build a strong foundation and prepare for placements.",
    became: "Glassdoor",
  },
  {
    image: Supratik,
    name: "Supratik. De",
    role: "Senior Software Engineer",
    description:
      "Coding Ninjas brought two pivotal changes to my career: I transitioned to a Product-based company as a Senior Software Engineer, and my confidence in DSA skills soared.",
    became: "UKG Telestaff",
  },
];
const tier2_3College = [
  {
    image: Manas,
    name: "Maanas Agrawal",
    role: "SDE- 2",
    description:
      "Ankush Singla and Manisha Khattar's lectures made tough problems easy to grasp. They are not just teachers, but mentors. TAs were always available. I wholeheartedly recommend Coding Ninjas for anyone prepping for placements.",
    became: "Expedia Group",
  },
  {
    image: Vartika,
    name: "Vartika Shakya",
    role: "Associate Technical Consultant",
    description:
      "Coding Ninjas holds a special place in my heart. I convinced my friends to join because it's been a driving force in my journey, and I'm grateful for who I am today.",
    became: "Adobe",
  },
  {
    image: Rahul,
    name: "Rahul Maurya",
    role: "Senior Software Engineer",
    description:
      "I had basic coding skills, especially in Android programming. A friend suggested Coding Ninjas, and their course was a turning point. The video lessons were invaluable, and I credit them for my interview success. Their structured teaching made complex topics clear.",
    became: "OLA",
  },
  {
    image: Sanjay,
    name: "Sanjay Kumar",
    role: "Software Engineer",
    description:
      "My dreams changed from cracking JEE, which didn't work out. So, I turned to Coding Ninjas, and they transformed my skills, helping me land my dream job at Cisco. They've been a game-changer.",
    became: "CISCO",
  },
];
const jobBootcamp = [
  {
    image: Tanmay,
    name: "Tanmay Deshpande",
    role: "Web Application Developer",
    description:
      "My goal was securing a higher package. DSA learning and mock interviews were invaluable. The placement assistance team kept me updated on various opportunities.",
    became: "Media.Net",
  },
  {
    image: Samir,
    name: "Samir Sayyed",
    role: "Product Developer",
    description:
      "Transitioned from Mechanical to IT via the bootcamp. My aim: full-stack mastery and a great job. Structured program, top-notch mentors, hands-on projects. The placement team boosted my interview confidence. Industry mentors' mock interviews were game-changers.",
    became: "Phenom People",
  },
  {
    image: Shrinidhi,
    name: "Shrinidhi",
    role: "Software Engineer-1",
    description:
      "Organized curriculum, quality content, and great support. I learned essentials from scratch despite a non-CS background. Placement team kept me updated on opportunities, and mentors were incredibly helpful. Weekly live sessions were invaluable.",
    became: "naruar",
  },
  {
    image: Manish,
    name: "Manish Kumar Gupta",
    role: "Software Engineer",
    description:
      "I joined this bootcamp to launch my tech career, upskilling for a software developer role. After 7 months, I landed a job at a product-based startup, meeting all my expectations. The placement team was instrumental in guiding me through the process.",
    became: "TripStack",
  },
];
const upskillingCourses = [
  {
    image: Naman,
    name: "Naman",
    role: "Software Engineer",
    description:
      "In 2019, seniors suggested Coding Ninjas. I received a scholarship, attended classes, and studied C++ and DSA. My mentor, Navdeep Sandhu, was an excellent teacher. I still turn to him for help.",
    became: "IndiaMart",
  },
  {
    image: Gautam,
    name: "Gautam Zindal",
    role: "Data Analyst",
    description:
      "Coding Ninjas' Hinglish course option bridged the language gap. From Intro to C++ to Data Structures, they made the journey from basics to advanced levels a breeze.",
    became: "Myntra",
  },
  {
    image: Shivansh,
    name: "Shivansh Jaitly",
    role: "Advanced Engineering Analyst",
    description:
      "As a college freshman, I was clueless about the significance of Data Structures. Thanks to Coding Ninjas, I enrolled in their course, put in the effort, attended lectures, and took notes. It all paid off when I aced my Accenture interview with what I learned.",
    became: "Accenture",
  },
  {
    image: Amit,
    name: "Amit Raj",
    role: "Engineer Trainee",
    description:
      "In college, coding felt like a struggle. A friend recommended Coding Ninjas, and their 7-day trial won me over. I enrolled in DSA and C++ courses, and the concepts I learned continue to shape my problem-solving today.",
    became: "VI",
  },
  {
    image: Karan,
    name: "Karan Fulare",
    role: "Software Engineer",
    description:
      "Coding Ninjas broadened my horizons. The support team was incredible. I wholeheartedly recommend it for career guidance. Special thanks to my mentor for interview success!",
    became: "Green Tiger Mobility",
  },
];

// Sub-Component
function TestimonialCard(props) {
  return (
    <div className="max-w-80 w-full min-w-80 relative pt-8">
      {/* Image */}
      <img
        src={props.img}
        alt=""
        className="aspect-square h-16 absolute top-0 left-1/2 -translate-x-1/2"
      />
      {/* Inner div */}
      <div className="p-4 pt-16 flex flex-col items-center gap-5 bg-[#1f1f1f] rounded-2xl">
        {/* Details */}
        <div className="h-11 text-center text-[#838485]">
          <h1 className="text-lg font-medium mb-1">{props.name}</h1>
          <h3 className="text-xs">{props.role}</h3>
        </div>
        {/* Paragraph */}
        <p className="max-h-36 h-full min-h-36 text-sm text-[#e3e3e3]">
          {props.description}
        </p>
        {/* From-To */}
        <div className="w-full h-20 flex items-center justify-between text-sm font-medium text-[#979797]">
          <span className="max-w-20 w-full">Post Coding Ninja</span>
          <i className="bx bx-chevrons-right text-3xl"></i>
          <span className="max-w-20 w-full">{props.became}</span>
        </div>
      </div>
    </div>
  );
}

function Testimonial() {
  // Using Context API
  const { scroll } = useContext(CodingNinjasContext);

  // State for category
  const [array, setArray] = useState(nonTechToTech);

  return (
    <div className="py-20 px-5 bg-[#141414] flex flex-col items-center gap-10">

      {/* Heading and Link */}
      <div className="max-w-screen-lg w-full flex items-center justify-center md:justify-between">
        <div className="flex items-center justify-center gap-4">
          <img src={TestimonialSVG} alt="" />
          <h2 className="text-xl font-semibold text-white">
            Stories from people like you
          </h2>
        </div>
        <a
          href="https://www.codingninjas.com/review"
          className="hidden text-orange-500 font-medium underline hover:text-orange-400 md:inline-block"
        >
          Read all success stories
        </a>
      </div>

      {/* Categories */}
      <div className="max-w-fit w-full overflow-x-auto bar-none flex items-center gap-5">
        <span
          onClick={() => setArray(nonTechToTech)}
          className={`${
            array === nonTechToTech
              ? "text-black bg-white"
              : "text-[#adadae] bg-[#2d2d2d]"
          } p-2 px-3 text-nowrap text-xs font-medium rounded-3xl hover:cursor-pointer`}
        >
          Non tech to tech
        </span>
        <span
          onClick={() => setArray(serviceToProduct)}
          className={`${
            array === serviceToProduct
              ? "text-black bg-white"
              : "text-[#adadae] bg-[#2d2d2d]"
          } p-2 px-3 text-nowrap text-xs font-medium rounded-3xl hover:cursor-pointer`}
        >
          Service to product
        </span>
        <span
          onClick={() => setArray(tier2_3College)}
          className={`${
            array === tier2_3College
              ? "text-black bg-white"
              : "text-[#adadae] bg-[#2d2d2d]"
          } p-2 px-3 text-nowrap text-xs font-medium rounded-3xl hover:cursor-pointer`}
        >
          Tier 2/3 colleges
        </span>
        <span
          onClick={() => setArray(jobBootcamp)}
          className={`${
            array === jobBootcamp
              ? "text-black bg-white"
              : "text-[#adadae] bg-[#2d2d2d]"
          } p-2 px-3 text-nowrap text-xs font-medium rounded-3xl hover:cursor-pointer`}
        >
          Job Bootcamp
        </span>
        <span
          onClick={() => setArray(upskillingCourses)}
          className={`${
            array === upskillingCourses
              ? "text-black bg-white"
              : "text-[#adadae] bg-[#2d2d2d]"
          } p-2 px-3 text-nowrap text-xs font-medium rounded-3xl hover:cursor-pointer`}
        >
          Upskilling Course
        </span>
      </div>

      {/* Testimonial Cards */}
      <div className="max-w-[1020px] w-full overflow-x-auto bar-none flex items-center gap-5">
        {array.map((object, index) => {
          return (
            <TestimonialCard
              key={index}
              img={object.image}
              name={object.name}
              role={object.role}
              description={object.description}
              became={object.became}
            />
          );
        })}
      </div>

      {/* Explore Button and link */}
      <div className="flex flex-col items-center gap-5">
        <a
          href="https://www.codingninjas.com/review"
          className="text-orange-500 font-medium underline hover:text-orange-400 md:hidden"
        >
          Read all success stories
        </a>
        <button
          onClick={() => scroll("offerings")}
          className="h-14 max-w-72 w-72 min-w-72 py-3 px-6 text-white font-semibold flex items-center justify-center gap-x-2 bg-[#f66c3b] rounded-lg hover:bg-[#ff8254]"
        >
          Explore offerings
          <i className="bx bxs-chevrons-up text-xl translate-y-[1.75px]"></i>
        </button>
      </div>

    </div>
  );
}

export default Testimonial;
