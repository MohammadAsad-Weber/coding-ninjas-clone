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
import Trisha from "../assets/Images/Teachers/trisha.webp";
import Ashwin from "../assets/Images/Teachers/ashwin.webp";
import Maaheen from "../assets/Images/Teachers/maaheen.webp";

// Logos
import CNLogo from "../assets/Images/Logos/cn_logo.png";
import HRS from "../assets/Images/Logos/hrs.webp";
import Google from "../assets/Images/Logos/google.webp";

// Background
import Temple from "../assets/Images/temple_bg.webp";

// Components
import Navbar from "./IIT Graduates's Components/Navbar";
import AboutIIT from "./IIT Graduates's Components/AboutIIT";
import Curriculum from "./IIT Graduates's Components/Curriculum";
import IIT_Certificate from "./IIT Graduates's Components/IIT_Certificate";
import Benefit from "./IIT Graduates's Components/Benefits";
import Pricing from "./IIT Graduates's Components/Pricing";

// Borrowing Components From (Bootcamp's Component) Folder
import Faculty from "./Bootcamp's Components/Faculty";
import StudentsData from "./Bootcamp's Components/StudentsData";
import RequestCallback from "./Bootcamp's Components/RequestCallback";
import CourseJourney from "./Bootcamp's Components/CourseJourney";
import FAQ from "./Bootcamp's Components/FAQ";

// Reusable Components
import Certificate from "./Reusable Components/Certificate";
import Footer from "./Reusable Components/Footer";

// DATA OF IIT DATA ANALYTICS FOR GRADUATES PAGE
const Journey_Data = [
  {
    image: Rocket,
    feelingBackground: "#ffe9bf",
    feeling: "Excited!",
    title: "Kickstart at E&ICT, IITG",
    array: [
      "Orientation at IIT Guwahati",
      "Meet your program instructors",
      "Connect with your peers",
    ],
  },
  {
    image: Cool,
    feelingBackground: "#fcccba",
    feeling: "Confident",
    title: "Feel like the Elite",
    array: [
      "Admission letter, ID & T-Shirt",
      "E&ICT IITG alumni status",
      "IITG faculty guest lectures",
    ],
  },
  {
    image: Angel,
    feelingBackground: "#c9e4ca",
    feeling: "Supported",
    title: "Experts help always",
    array: [
      "1000+ Teaching Assistants",
      "20 industry-expert sessions",
      "Dedicated Relationship Manager",
    ],
  },
  {
    image: Serious,
    feelingBackground: "#e3e3e3",
    feeling: "Resilient",
    title: "Master Data Analytics",
    array: [
      "AI-infused curriculum",
      "Work on real-world case studies",
      "Get 1:1 doubt resolution",
    ],
  },
  {
    image: Star,
    feelingBackground: "#c4d3f7",
    feeling: "Over the moon",
    title: "Succeed like the top 1%",
    array: [
      "Prestigious PG certification", 
      "IITG Graduation & immersion",
      "Get industry-ready as an expert",
  ],
  },
];
const BootcampBenefit_Data = [
  {
    img: FacultyPNG,
    title: "Expert faculty with 15+ years of experience",
    paragraph:
      "Top-tier education enriched by practical knowledge and innovation",
  },
  {
    img: Doubt,
    title: "Quick doubt support",
    paragraph: "Personalised assistance for a clear understanding of concepts",
  },
  {
    img: CaseStudy,
    title: "Case studies to make you industry-ready",
    paragraph: "Hands-on learning to spark creative problem-solving",
  },
  {
    img: Learner,
    title: "Blended classes",
    paragraph:
      "Learn at your pace with instant doubt support",
  },
  {
    img: LiveClass,
    title: "Live classes",
    paragraph: "Live learning with instant doubt support",
  },
];
const Faculty_Data = [
  {
    profile: Trisha,
    background: "#5780e9",
    name: "Trisha Jagtiani",
    role: "Manager, Data Analytics",
    logos: [CNLogo],
    subjects: ["Introduction to Data Analytics", "Excel", "PowerBI"],
    link: "https://www.linkedin.com/in/trisha-jagtiani-25654410/",
  },
  {
    profile: Ashwin,
    background: "#ef6292",
    name: "Ashwin Goyal",
    role: "Product Manager",
    logos: [HRS],
    subjects: ["Excel, PowerBI", "SQL, Python", "Statistics, EDA"],
    link: "https://www.linkedin.com/in/ashwin-goyal1/",
  },
  {
    profile: Maaheen,
    background: "#ffc147",
    name: "Maaheen Jaiswal",
    role: "Data Analyst",
    logos: [Google],
    subjects: ["Excel, PowerBI", "SQL, Python", "Statistics, EDA"],
    link: "https://www.linkedin.com/in/maaheen-jaiswal/",
  },
];
const FAQ_Data = [
  {
    question:
      "What are the benefits of joining the E&ICT, IIT-Guwahati PG Certification?",
    answer:
      "Earn your Data Analytics PG Certification from IIT Guwahati in just 6 months and get an Alumni Status. Learn through an advanced, AI-focused curriculum designed with IIT faculty. Enjoy benefits like an on-campus orientation, Graduation ceremony and access to guest lectures from IIT professors.",
  },
  {
    question: "What is the eligibility criteria?",
    answer: "To enroll, you’ll need a bachelor’s degree in any field.",
  },
  {
    question: "Is a background in Computer Science required to apply?",
    answer:
      "A bachelor’s degree in any discipline is required, but it does not need to be in Computer Science or any specific field.",
  },
  {
    question:
      "What is the duration of the E&ICT, IIT-Guwahati PG Certification?",
    answer:
      "The program duration is 6 months, but you'll have access to the course content for 21 months from your batch start date.",
  },
  {
    question: "What is the mode of learning?",
    answer:
      "Classes are conducted online, offering two modes of learning. The *Live Learning* mode includes three live sessions per week along with access to class recordings. The *Blended Learning* mode provides full access to pre-recorded materials, allowing for more flexible learning. Both modes feature regular assignments, tests, and unlimited 1:1 doubt support to ensure a personalized learning experience.",
  },
  {
    question:
      "What kind of support will I get if I have queries while learning?",
    answer:
      "You’ll have over 1,000 teaching assistants available 7 days a week from 10 AM to 12 midnight. You can reach them via chat, call, or screen sharing for personalized 1:1 doubt support.",
  },
  {
    question: "What if I face problems/issues during the program?",
    answer:
      "A Relationship Manager will be assigned to you. They’ll assist with queries, connect you with trainers and experts, track your progress, keep you motivated, and provide career guidance.",
  },
  {
    question: "Will a PG Certificate make me employable?",
    answer:
      "Absolutely! The PG Certification gives you valuable, industry-recognized skills. You'll work on real-world projects that build your experience and show employers your abilities.",
  },
  {
    question: "Who is an industry mentor and how will they help me?",
    answer:
      "Industry mentors are experienced professionals from top companies. They will guide you through your career, offering one-on-one mock interviews and detailed feedback to help you prepare for the industry.",
  },
  {
    question:
      "Which roles will I be eligible for after completing the program?",
    answer:
      "After completing the PG certification, you can explore roles available in the job market such as Data Analyst, Business Analyst, Data Visualization Analyst, Statistical Analyst, Data Scientist, Operations Analyst, Market Research Analyst, and other data-driven positions.",
  },
  {
    question: "Is Data Analytics a good career?",
    answer:
      "Absolutely! Data Analytics is in high demand, with over 140,000 job openings in India and a 51% skills gap, as per McKinsey’s “Digital India” report. Data analysts can earn average salaries of up to 12 LPA, making it a great career choice.",
  },
  {
    question: "What is the typical batch size for the program?",
    answer:
      "Our typical batch size ranges from 75 to 100 learners, allowing for collaborative learning while still ensuring personalized attention from instructors.",
  },
  {
    question: "Can I get a refund if I change my mind after enrolling?",
    answer:
      "Yes! You can request a full refund only within the first 7 days from the batch start date. Both the INR 5000 booking fee and the remaining fees will be refunded. No refund requests will be accepted after 7 days from the batch start date.",
  },
  {
    question:
      "How does generative AI apply to data analytics, and does the curriculum cover this topic?",
    answer:
      "Generative AI improves data analytics by automating insights and streamlining workflows in tools like Excel, SQL, Power BI, and more. It helps analyze datasets for summary insights in Excel, converts natural language into SQL queries, and suggests the best visualizations in Power BI. The PG Certification program covers these and many other applications of generative AI in data analytics.",
  },
  {
    question: "Will this program cover Python in detail?",
    answer:
      "Yes! It covers Python from basics to advanced concepts, with hands-on projects that reflect real business scenarios. By the end, you’ll be proficient in Python.",
  },
  {
    question:
      "Are there any projects or case studies included in the curriculum?",
    answer:
      "Yes, the curriculum includes 10+ engaging case studies, which will be reviewed by certified experts to provide valuable feedback and guidance.",
  },
  {
    question:
      "Will I receive a job offer or placement after completing the program?",
    answer:
      "Neither Coding Ninjas nor E&ICT Academy, IIT Guwahati, is responsible for getting you placement or job offer upon completion of the program. However, as a valuable benefit, we provide you with access to Coding Ninjas' Job Cell. This includes job opening alerts(to which you may or may not apply), 1:1 sessions with industry experts, mock interviews, profile-building support, and resume reviews. These resources are designed to support your career growth and improve your job prospects.",
  },
  {
    question:
      "Who will cover the travel and accommodation expenses for the E&ICT, IIT Guwahati campus visit?",
    answer:
      "The travel and accommodation costs for Orientation, Graduation ceremony & campus immersion will be borne by the learner and neither Coding Ninjas nor IIT Guwahati.",
  },
];

function IIT_Graduates() {
  // Changing the Title Dynamically
  document.title = "Certified IIT Data Analytics Course by E&ICT Guwahati";

  return (
    <>
      <Navbar />
      <AboutIIT />
      <Curriculum />
      <IIT_Certificate />
      <CourseJourney program="Program" array={Journey_Data} />
      <Benefit array={BootcampBenefit_Data} />
      <Faculty array={Faculty_Data} />
      <StudentsData />
      <Pricing />
      <img src={Temple} alt="" className="w-full bg-no-repeat bg-contain" />
      <RequestCallback />
      <FAQ array={FAQ_Data} />
      <Certificate />
      <Footer />
    </>
  );
}

export default IIT_Graduates;
