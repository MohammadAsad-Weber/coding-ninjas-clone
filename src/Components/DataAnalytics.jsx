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

// DATA OF DATA ANALYTICS PAGE
const Journey_Data = [
  {
    image: Rocket,
    feelingBackground: "#ffe9bf",
    feeling: "Excited!",
    title: "Kickstart your journey",
    array: [
      "Orientation and welcome session",
      "Meet your peers",
      "Profile review",
    ],
  },
  {
    image: Cool,
    feelingBackground: "#fcccba",
    feeling: "Confident",
    title: "Master data analytics by solving real problems",
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
    array: ["Resume and profile creation", "Mock interviews", "Project review"],
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
    paragraph: "Expanded job search with a vast network of companies.",
  },
  {
    icon: "bxl-telegram",
    title: "800+ monthly job openings",
    paragraph: "Complete the program faster and apply for job opportunities.",
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
    title: "Expert faculty with 15+ years of experience",
    paragraph:
      "Top-tier education enriched by practical knowledge and innovation",
  },
  {
    img: CaseStudy,
    title: "Case studies to make you job-ready",
    paragraph: "Hands-on learning to spark creative problem-solving",
  },
  {
    img: Doubt,
    title: "Quick doubt support",
    paragraph: "Personalised assistance for a clear understanding of concepts",
  },
  {
    img: LiveClass,
    title: "Live classes",
    paragraph: "Learn by practice with instant feedback",
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
      "Where will the classes take place, and what are the class timings?",
    answer:
      "The classes will be conducted online. There will be three live classes each week, lasting 2 hours from 9 to 11 PM on MWF (Monday, Wednesday, Friday) for batches starting on the 10th, and on TTS (Tuesday, Thursday, Saturday) for batches starting on the 24th of each month. Additionally, regular assignments and unlimited doubt support will be provided.",
  },
  {
    question: "What is the typical batch size for the program?",
    answer:
      "Our typical batch size ranges from 75 to 100 learners, allowing for collaborative learning while still ensuring personalized attention from instructors.",
  },
  {
    question: "What if I miss my live class?",
    answer:
      "Although classes are scheduled in such a way that it should not be an issue but if you are unable to attend a class for any reason, we provide recordings of all classes on your dashboard for you to access after the session.",
  },
  {
    question: "When can I start appearing for placements?",
    answer:
      "After completing the program with the minimum requirement and clearing the placement eligibility criteria, you can start applying for all relevant opportunities.",
  },
  
  {
    question: "Will this program provide in-depth coverage of Python?",
    answer:
      "Yes, this program covers Python, starting with the basics of Python programming and encompassing all data analytics concepts using Python. You will undertake multiple Python data analysis projects to demonstrate how data analysts use Python to solve real business problems. By the end of the program, you will be a Python expert.",
  },
  
  {
    question: "Are there any projects or case studies included in the curriculum?",
    answer:
      "Yes, the curriculum includes 10+ engaging case studies, that will be reviewed by certified experts to ensure you receive valuable feedback and guidance.",
  },
  
  {
    question: "Will this program include Machine Learning concepts?",
    answer:
      "Yes, we offer Machine Learning as an optional module in a pre-recorded format, accessible 7 days after the batch start date. Projects and teaching assistance support are also available. Please note that there will be no placement opportunities related to this module.",
  },
];

function DataAnalytics() {
  // Changing the Title Dynamically
  document.title = "Data Analytics Job Bootcamp";

  return (
    <>
      <Navbar />
      <AboutBootcamp
        title="Data Analytics"
        paragraph="Get years ahead in just six months through practice-based learning and real-world projects."
      />
      <CourseJourney program="Bootcamp" array={Journey_Data} />
      <Benefit
        placementArray={PlacementBenefit_Data}
        bootcampArray={BootcampBenefit_Data}
      />
      <Faculty array={Faculty_Data} />
      <StudentsData />
      <Pricing price={5911} />
      <img src={Temple} alt="" className="w-full bg-no-repeat bg-contain" />
      <RequestCallback />
      <FAQ array={FAQ_Data} />
      <Certificate />
      <Footer />
    </>
  );
}

export default DataAnalytics;
