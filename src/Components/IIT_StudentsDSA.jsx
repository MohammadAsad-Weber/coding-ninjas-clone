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

// DATA OF IIT DSA FOR STUDENTS PAGE
const Modules_Data = [
  {
    title: "Introduction to Programming (Java / C++ / Python)",
    array: [
      "Basics of Programming – Understand variables, data types, and basic input/output operations.",
      "Loops and Functions – Master iterative processes using loops and organize code with reusable functions.",
      "Arrays/Lists – Explore how to store, access, and manipulate collections of data efficiently.",
      "Strings and 2D Lists – Work with text data and multi-dimensional structures for advanced problem-solving.",
    ],
  },
  {
    title: "Data Structures & Algorithms",
    array: [
      "Problem Solving Techniques – Develop logical thinking and strategies to break down complex problems into manageable parts.",
      "Object Oriented Programming – Learn the principles of OOP, including classes, objects, inheritance, and polymorphism.",
      "Linear Data Structures – Master arrays, linked lists, stacks, and queues for efficient data storage and retrieval.",
      "Trees – Understand hierarchical data structures and perform operations like traversal, insertion, and deletion.",
      "Advanced Data Structures – Dive into heaps, graphs, and hash tables to solve complex computational problems.",
      "Dynamic Programming – Solve optimisation problems using techniques like memoization and tabulation to improve efficiency.",
    ],
  },
];
const Dropdown_Data = [
  {
    heading: "Predicting Stock Prices",
    paragraph:
      "Problem: Analyzing stock trends and predicting future movements. Solution: Use Sliding Window Algorithms for real-time analysis and Dynamic Programming for pattern recognition. Example: Stock market trend analysis systems.",
  },
  {
    heading: "Fraud Detection in Banking",
    paragraph:
      "Problem: Identifying unusual transactions that could indicate fraud. Solution: Use Hashing for transaction patterns and Sliding Window Algorithms for real-time monitoring. Example: Fraud detection systems in credit card transactions.",
  },
  {
    heading: "E-Commerce Delivery Optimization",
    paragraph:
      "Problem: Optimizing delivery routes to reduce costs and improve efficiency. Solution: Travelling Salesman Problem (Greedy, Dynamic Programming). Example: Delivery route planning for Swiggy.",
  },
];
const FAQ_Data = [
  {
    question: "What is the eligibility criteria?",
    answer:
      "To enroll, you must currently be pursuing an undergraduate degree.",
  },
  {
    question: "Do I need a Computer Science degree or a B.Tech to apply?",
    answer:
      "Your educational background does not need to be in any specific field.",
  },
  {
    question: "What is the program duration?",
    answer:
      "The program lasts 4 months, but you’ll have access to the course content for 8 months from your batch start date. Course Pause of 20 days is also available.",
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
    question: "Will this Certificate make me employable?",
    answer:
      "Absolutely! This Certification will equip you with industry-recognized skills and certifications highly valued in the job market. You’ll engage in real-world projects that enhance your practical experience and demonstrate your capabilities to potential employers.",
  },
  {
    question: "Who is an industry mentor and how will they help me?",
    answer:
      "Industry mentors are seasoned professionals from top companies who bring valuable experience and insights. They will guide you through your career journey, offering one-on-one mock interviews and detailed feedback to help you prepare for the industry.",
  },
  {
    question:
      "Why is Data Structures & Algorithms crucial for full-stack web development?",
    answer:
      "India’s tech industry is projected to double its revenue by 2030, fueled by innovation in software development. Developers skilled in DSA are pivotal for creating optimized, scalable solutions in this growing market.",
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
    question: "Are there any projects included in the curriculum?",
    answer:
      "Practical exposure is ensured through real-world projects such as Tic Tac Toe, Snake and Ladder, and 2048.",
  },
  {
    question:
      "Will I receive a job offer or placement after completing the program?",
    answer:
      "Neither Coding Ninjas nor IIT Guwahati is responsible for getting you placement or job offers upon completion of the program. However, as a valuable benefit, you will get Coding Ninjas Career Services which includes access to Coding Ninjas’ Job Cell, 10 1:1 sessions with industry experts, 10 mock interviews, profile-building support, and resume reviews. These resources are designed to support your career growth and improve your job prospects.",
  },
  {
    question:
      "Who will cover the travel and accommodation expenses for the IIT Guwahati campus visit?",
    answer:
      "The travel and accommodation costs for Orientation, Graduation ceremony & 2-day hackathon will be borne by the learner and neither Coding Ninjas nor IIT Guwahati.",
  },
];

function IIT_StudentsDSA() {
  // Changing the Title Dynamically
  document.title = "IITM Student Training and Internship Certification - DSA - Career Camp by Coding Ninjas";

  return (
    <div className="font-['Roboto_Slab',_serif]">
      <Navbar />
      <AboutProgram program="Advanced Data Structures and Algorithms" />
      <FeelLikeElite />
      <SucceedLike />
      <IIT_Certificate />
      <ProgramModules array={Modules_Data} />
      <Hackathon array={Dropdown_Data} />
      <DoubtResolution />
      <JoinNow programFees="35,000" bookSeat="2,500" installment="2,184" />
      <Services />
      <FAQ array={FAQ_Data} />
      <Footer />
    </div>
  );
}

export default IIT_StudentsDSA;
