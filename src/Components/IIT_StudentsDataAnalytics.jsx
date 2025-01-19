import React from "react";

// Components
import Navbar from "./IIT Student's Component/Navbar";
import AboutProgram from "./IIT Student's Component/AboutProgram";
import FeelLikeElite from "./IIT Student's Component/FeelLikeElite";
import SucceedLike from "./IIT Student's Component/SucceedLike";
import IIT_Certificate from "./IIT Student's Component/IIT_Certificate";
import ProgramModules from "./IIT Student's Component/ProgramModules";
import Hackathon from "./IIT Student's Component/Hackathon";
import DoubtResolution from "./IIT Student's Component/DoubtResolution";
import JoinNow from "./IIT Student's Component/JoinNow";
import Services from "./IIT Student's Component/Services";
import FAQ from "./IIT Student's Component/FAQ";
import Footer from "./IIT Student's Component/Footer";

// DATA OF IIT DATA ANALYTICS FOR STUDENTS PAGE
const Modules_Data = [
  {
    title: "Introduction to Data Analytics",
    array: [
      "Introduction to Data",
      "Type of Data Analysis",
      "Framework of Data Analysis",
      "Project – National Air Quality",
    ],
  },
  {
    title: "Data Analytics with Excel",
    array: [
      "Basics of Excel",
      "Business Problem Introduction",
      "Data Preparation",
      "Data Analysis",
      "Art of Story Telling",
      "Case Study 1: US Healthcare Dataset",
      "Case Study 2: India CPI Inflation",
    ],
  },
  {
    title: "Data Visualization",
    array: [
      "Introduction to Data Visualization",
      "Introduction to PowerBI",
      "PowerBI Visualizations",
      "Project: IT Department PowerBI Dashboard",
    ],
  },
  {
    title: "Data Analytics with SQL",
    array: [
      "Database and SQL",
      "Retrieve Data",
      "Filtering Data",
      "SQL Joins",
      "Case Study 1: Retail Store",
      "Case Study 2: E-Com Business",
    ],
  },
  {
    title: "Python Programming",
    array: [
      "Introduction to Python",
      "Conditional Statements",
      "Loops",
      "Case Study 1: Covid 19",
      "Case Study 2: PhonePe Digital Payments",
    ],
  },
  {
    title: "Data Types",
    array: ["Strings, List and 2D List", "Tuples, Dictionaries, and Sets"],
  },
  {
    title: "Python Data Libraries",
    array: ["NumPy (Library)", "Matplotlib (Library)", "Pandas (Library)"],
  },
  {
    title: "Generative Ai",
    array: [
      "Introduction to Generative AI",
      "Prompt Engineering",
      "Generative AI in Excel",
      "Python with Generative AI",
      "Generative AI for SQL",
      "Data Analysis with Generative AI",
    ],
  },
];
const Dropdown_Data = [
  {
    heading: "Accident Hotspot Detector",
    paragraph:
      "Identify areas prone to road accidents and recommend safety measures.",
  },
  {
    heading: "Sentiment Analysis for Reviews",
    paragraph:
      "Analyze customer reviews to identify product improvement areas.",
  },
  {
    heading: "Skill Gap Analyzer",
    paragraph:
      "Identify industry skill gaps based on job market trends and course enrollment data.",
  },
];
const FAQ_Data = [
  {
    question: "What is the eligibility criteria?",
    answer:
      "To enrol, you must have completed standard 12th or pursuing undergraduation.",
  },
  {
    question: "Do I need a Computer Science degree or a B.Tech to apply?",
    answer:
      "Your educational background does not need to be in any specific field.",
  },
  {
    question: "What is the program duration?",
    answer:
      "The program lasts 6 months, but you’ll have access to the course content for 21 months from your batch start date.",
  },
  {
    question: "What is the mode of learning?",
    answer:
      "Classes will be conducted online. Weekly three live classes, 2 hours each on Monday, Wednesday, and Friday from 8 to 10 PM. Recordings for each will be provided after class.",
  },
  {
    question:
      "What kind of support will I get if I have queries while learning?",
    answer:
      "Over 1,000 teaching assistants are available 7 days a week from 10 AM to 12 midnight. You can reach them via chat, call, or screen sharing for personalized 1:1 doubt support.",
  },
  {
    question: "What if I face problems/issues during the program?",
    answer:
      "A dedicated Relationship Manager will be assigned to you. They’ll assist with queries, connect you with trainers and experts, track your progress, keep you motivated, and provide career guidance.",
  },
  {
    question: "Who is an industry mentor and how will they help me?",
    answer:
      "Industry mentors are seasoned professionals from top companies who bring valuable experience and insights. They will guide you through your career journey, offering one-on-one mock interviews and detailed feedback to help you prepare for the industry.",
  },
  {
    question:
      "Which roles will I be eligible for after completing the program?",
    answer:
      "This certification opens doors to a variety of roles, such as Data Analyst, Business Analyst, Data Visualization Analyst, and other analytical positions in the industry.",
  },
  {
    question: "Is Data Analytics a good career?",
    answer:
      "Absolutely! Data Analytics is in high demand, with over 140,000 job openings in India alone and a skills gap of 51%, according to McKinsey’s “Digital India” report. Data analysts earn average salaries of up to 12 LPA, making it an excellent career choice.",
  },
  {
    question: "What is the typical batch size for the program?",
    answer:
      "Our typical batch size ranges from 100 to 150 learners, allowing for collaborative learning while still ensuring personalized attention from instructors.",
  },
  {
    question: "Can I get a refund if I change my mind after enrolling?",
    answer:
      "Yes! You can request a full refund within the first 7 days of the batch start date. Both the initial booking fee and the remaining tuition will be refunded. After the 7-day window, refunds will no longer be available.",
  },
  {
    question:
      "How does generative AI apply to data analytics, and does the curriculum cover this topic?",
    answer:
      "Generative AI enhances data analytics by automating insights and simplifying workflows in tools like Excel, SQL, Power BI, and more. It analyzes datasets for summary insights in Excel, converts natural language to queries in SQL, and suggests optimal visualizations in Power BI. This Certification program covers all these and many other applications of generative AI in data analytics.",
  },
  {
    question: "Will this program cover Python in detail?",
    answer:
      "Yes! It covers Python from basics to advanced concepts, with hands-on projects mirroring real business scenarios. By the end, you’ll be proficient in Python.",
  },
  {
    question:
      "Are there any projects or case studies included in the curriculum?",
    answer:
      "Yes, the curriculum includes 10 engaging case studies, that will be reviewed by certified experts to ensure you receive valuable feedback and guidance.",
  },
  {
    question:
      "Will I receive a job offer or placement after completing the program?",
    answer:
      "Neither Coding Ninjas nor E&ICT Academy, IIT Guwahati, is responsible for getting you placement or job offers upon completion of the program. However, as a valuable benefit, you will get Coding Ninjas Career Services which includes access to Coding Ninjas’ Job Cell, 10 1:1 sessions with industry experts, 10 mock interviews, profile-building support, and resume reviews. These resources are designed to support your career growth and improve your job prospects.",
  },
  {
    question:
      "Who will cover the travel and accommodation expenses for the E&ICT, IIT Guwahati campus visit?",
    answer:
      "The travel and accommodation costs for Orientation, Graduation ceremony & 2-day hackathon will be borne by the learner and neither Coding Ninjas nor IIT Guwahati.",
  },
];

function IIT_StudentsDataAnalytics() {
  // Changing the Title Dynamically
  document.title = "Student Training cum Internship Certification - Data Analytics - Career Camp by Coding Ninjas";

  return (
    <div className="font-['Roboto_Slab',_serif]">
      <Navbar />
      <AboutProgram program="Data Analytics" />
      <FeelLikeElite />
      <SucceedLike />
      <IIT_Certificate />
      <ProgramModules array={Modules_Data} />
      <Hackathon array={Dropdown_Data} />
      <DoubtResolution />
      <JoinNow programFees="75,000" bookSeat="2,500" installment="4,678" />
      <Services />
      <FAQ array={FAQ_Data} />
      <Footer />
    </div>
  );
}

export default IIT_StudentsDataAnalytics;
