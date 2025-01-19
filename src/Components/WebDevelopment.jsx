import React from "react";

// Emojis
import Rocket from "../assets/Images/Emoji/rocket.webp";
import Cool from "../assets/Images/Emoji/cool.webp";
import Angel from "../assets/Images/Emoji/angel.webp";
import Serious from "../assets/Images/Emoji/serious.webp";
import Star from "../assets/Images/Emoji/star.webp";

// Icons
import Learner from "../assets/Images/Icons/doubt_support.png";
import FacultyPNG from "../assets/Images/Icons/faculty.png";
import CaseStudy from "../assets/SVGs/case_study.svg";
import Doubt from "../assets/SVGs/doubt.svg";
import LiveClass from "../assets/SVGs/live_class.svg";

// Profile Pictures of Teachers
import Ankush from "../assets/Images/Teachers/ankush.webp";
import Nidhi from "../assets/Images/Teachers/nidhi.png";
import Manisha from "../assets/Images/Teachers/manisha.png";

// Logos
import IIT from "../assets/Images/Logos/iit_delhi.png";
import Amazon from "../assets/Images/Logos/amazon.webp";
import Facebook from "../assets/Images/Logos/facebook.webp";
import Stanford from "../assets/Images/Logos/stanford.png";
import IIITD from "../assets/Images/Logos/iiit_delhi.png";
import Google from "../assets/Images/Logos/google.webp";

// Background
import Temple from "../assets/Images/temple_bg.webp";

// Components
import Navbar from "./Bootcamp's Components/Navbar";
import AboutBootcamp from "./Bootcamp's Components/AboutBootcamp";
import CourseJourney from "./Bootcamp's Components/CourseJourney";
import Benefit from "./Bootcamp's Components/Benefit";
import Faculty from "./Bootcamp's Components/Faculty";
import StudentsData from "./Bootcamp's Components/StudentsData";
import Pricing from "./Bootcamp's Components/Pricing";
import RequestCallback from "./Bootcamp's Components/RequestCallback";
import FAQ from "./Bootcamp's Components/FAQ";

// Reusable Components
import Certificate from "./Reusable Components/Certificate";
import Footer from "./Reusable Components/Footer";

// DATA OF WEB DEVELOPMENT PAGE
const Journey_Data = [
  {
    image: Rocket,
    feelingBackground: "#ffe9bf",
    feeling: "Excited!",
    title: "Kickstart your journey",
    array: [
      "Orientation by Ankush Singla",
      "Meet your program instructors",
      "Meet your peers",
    ],
  },
  {
    image: Cool,
    feelingBackground: "#fcccba",
    feeling: "Confident",
    title: "Master full stack by solving real problems",
    array: [
      "Build real-world projects",
      "Get doubts resolved via 1:1 sessions",
      "Meet industry experts",
    ],
  },
  {
    image: Angel,
    feelingBackground: "#c9e4ca",
    feeling: "Supported",
    title: "Experts to help you prepare for interviews",
    array: ["Resume and profile creation", "Mock interviews", "Soft-skill training"],
  },
  {
    image: Serious,
    feelingBackground: "#e3e3e3",
    feeling: "Resilient",
    title: "Catch the eye of your dream companies",
    array: ["Daily jobs shared", "hirist.com highlights", "Alumni referrals"],
  },
  {
    image: Star,
    feelingBackground: "#c4d3f7",
    feeling: "Over the moon",
    title: "Nail the interview for your dream job",
    array: ["Gain company insights", "Apply for higher offers"],
  },
];
const PlacementBenefit_Data = [
  {
    icon: "bx-run",
    title: "Profiles highlighted on hirist.com",
    paragraph:
      "Make a distinct mark for yourself on India's leading job portal.",
  },
  {
    icon: "bxs-conversation",
    title: "1200+ Hiring partners",
    paragraph: "Expanded job search with a vast network of companies hiring.",
  },
  {
    icon: "bxl-telegram",
    title: "800+ monthly job openings",
    paragraph: "Get access to an abundance of job openings every month",
  },
  {
    icon: "bxs-group",
    title: "Dedicated placement team",
    paragraph: "Guiding and motivating you every step of the way.",
  },
  {
    icon: "bxs-briefcase",
    title: "50+ Members placement team",
    paragraph: "A dedicated team to help you get placed in your dream company.",
  },
  {
    icon: "bxl-whatsapp-square",
    title: "Jobs opening sent everyday",
    paragraph: "We send job openings daily to your WhatsApp directly.",
  },
];
const BootcampBenefit_Data = [
  {
    img: Learner,
    title: "1:1 expert session",
    paragraph:
      "Connects theoretical understanding with practical implementation through their insights",
  },
  {
    img: FacultyPNG,
    title: "Expert faculty from MAANG",
    paragraph:
      "Top-tier education enriched by practical knowledge and innovation",
  },
  {
    img: CaseStudy,
    title: "Projects & hackathons",
    paragraph: "Hands-on learning to spark creative problem-solving",
  },
  {
    img: Doubt,
    title: "Fastest doubt support",
    paragraph: "Personalised assistance for a clear understanding of concepts",
  },
  {
    img: LiveClass,
    title: "Self-paced classes",
    paragraph: "Learn at your pace with practice and instant feedback",
  },
];
const Faculty_Data = [
  {
    profile: Ankush,
    background: "#5780e9",
    name: "Ankush Singla",
    role: "Co-Founder & Instructor",
    logos: [IIT, Amazon, Facebook, Stanford],
    subjects: ["Basics of C++ with DSA", "Data Science & Machine Learning", "Competitive Programming"],
    link: "https://www.linkedin.com/in/ankushsingla/",
  },
  {
    profile: Nidhi,
    background: "#ef6292",
    name: "Nidhi Aggarwal",
    role: "Instructor",
    logos: [IIITD],
    subjects: ["Basics of C++ with DSA", "Basics of Java with DSA"],
    link: "https://www.linkedin.com/in/nidhiagarwal03/",
  },
  {
    profile: Manisha,
    background: "#ffc147",
    name: "Manisha Khattar",
    role: "Instructor",
    logos: [Google, IIITD],
    subjects: ["Excels in C++", "Excels in Java", "Android Development"],
    link: "https://www.linkedin.com/in/maaheen-jaiswal/",
  },
];
const FAQ_Data = [
  {
    question: "What is Job Bootcamp program?",
    answer:
      "The Data Analytics Job Bootcamp is an exclusive program aimed at transforming individuals from beginners to proficient Data Analysts in a span of 6 months.",
  },
  {
    question: "What is the refund policy for the program?",
    answer: "You can request a refund within 7 days of your batch start date.",
  },
  {
    question: "Who is eligible for the program?",
    answer:
      "The Job Bootcamp is open to working professionals, final-year college students, and fresher graduates from any industry or domain.",
  },
  {
    question: "What is the duration of the program?",
    answer:
      "The duration of the program is 6 months (learning phase), along with placement support until you secure your first job. Additionally, you will continue to have access to the content for 21 months from your batch start date.",
  },
  {
    question: "I have been working at a service-based MNC for 2 years with a 4 LPA CTC. Will I be able to get a job at a product-based company with a better package with the help of this program?",
    answer:
      "Yes, you are eligible to apply for the program. Once you are enrolled, our team will focus on upskilling you to help you land a better-paying job.",
  },
  {
    question: "How good is the placement record?",
    answer:
      "According to our records, 95% of learners who completed the program have secured suitable job opportunities. Coding Ninjas has consistently delivered on its promises and is a trusted name in the education industry, with experience in upskilling over 1,50,000 learners. We will create your profile, assist you in preparing your resume, conduct mock interviews, and do everything we can to help you land a job.",
  },
  {
    question: "How will I benefit from industry mentors?",
    answer:
      "Industry mentors are experts from reputed companies who have proven competencies in specific fields and are excellent guides to help you determine your next steps in the industry. They will conduct mock interviews with you on a one-on-one basis and provide detailed feedback.",
  },
  {
    question: "Which roles will I be eligible for?",
    answer:
      "After completing the program, you'll qualify for a range of job positions, such as Data Analyst, Business Analyst, Data Visualization Analyst, Statistical Analyst, and other related analytical roles in the industry.",
  },
  {
    question: "Where are Coding Ninjas alumni currently employed?",
    answer:
      "Our learners are employed at over 1,200 companies that have hired from us in the past. More than 1,400 of our alumni are placed in MAANG companies, and many are also employed in 103 out of 116 Indian unicorns.",
  },
  {
    question: "How do I get my doubts resolved?",
    answer:
      "Our team of over 1,000 teaching assistants is available 7 days a week from 10 AM to 12 AM to provide one-on-one support. You can connect with them via chat, audio call, or screen sharing to resolve your queries.",
  },
  {
    question: "Do I need a computer science degree to apply?",
    answer:
      "We believe that a degree is no substitute for determination and a passion for learning. That's why we welcome individuals from any and every background to join the program.",
  },
  {
    question: "Do I have to accept an offer from companies hiring ?",
    answer:
      "Yes, if you apply for a job opening through the Coding Ninjas placement cell and are selected, we expect you not to back out. However, you are welcome to apply for other job openings through our placement cell, but only if the minimum CTC offered is at least 50% higher than the job secured already by you through us. This policy applies specifically to the Coding Ninjas placement cell; you are free to apply for any opportunities outside of it without any restrictions.",
  },
  {
    question:
      "Where will the classes take place?",
    answer:
      "The classes will be conducted online. The program is designed to provide you with access to all pre-recorded content and materials, allowing you to learn from anywhere at any time. In addition to this, you will have two weekly live webinars, regular assignments and unlimited doubt support.",
  },
  {
    question:
      "What is the average salary hike after completing the program?",
    answer:
      "Our learners receive an average hike of 128% after completing the program.",
  },
  {
    question: "How many domain expert sessions and mock interviews will I have?",
    answer:
      "You will have 20 live interactive sessions with industry experts including mock interviews, project guidance and resume reviews.",
  },
  {
    question: "When can I start appearing for placements?",
    answer:
      "After completing the program with the minimum requirement and clearing the placement eligibility criteria, you can start applying for all relevant opportunities.",
  },
  {
    question: "Do we provide a job guarantee?",
    answer:
      "No, and please don’t believe anyone who says otherwise. However, can we help you find the right job? Yes, we do. Our placement team will support you throughout the program by helping you polish your portfolio and resume, practice interviewing, and land your first tech job after completing the program. That's why our track record speaks volumes, with our learners earning an average of 2.16 times more after completing the program.",
  },
];

function WebDevelopment() {
  // Changing the Title Dynamically
  document.title = "Full Stack Web Development Job Bootcamp";

  return (
    <>
      <Navbar />
      <AboutBootcamp
        title="Full Stack Web Development"
        paragraph="Choose MERN stack or Spring Boot and acquire expertise through practical application and real-world projects."
      />
      <CourseJourney program="Bootcamp" array={Journey_Data} />
      <Benefit
        placementArray={PlacementBenefit_Data}
        bootcampArray={BootcampBenefit_Data}
      />
      <Faculty array={Faculty_Data} />
      <StudentsData />
      <Pricing price={7204} />
      <img src={Temple} alt="" className="w-full bg-no-repeat bg-contain" />
      <RequestCallback />
      <FAQ array={FAQ_Data} />
      <Certificate />
      <Footer />
    </>
  );
}

export default WebDevelopment;
