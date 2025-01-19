import React from "react";

// SVGs - { Logos & Icons }
import JobBootcamp from "../../assets/SVGs/job_bootcamp.svg";
import FullStack from "../../assets/SVGs/full_stack.svg";
import DataAnalytics from "../../assets/SVGs/data_analytics.svg";
import IITCertification from "../../assets/SVGs/iit_certification.svg";
import CollegeIcon from "../../assets/SVGs/college_icon.svg";

// Images - { College Image }
import CollegeImg from "../../assets/Images/college.png";

// Tools & Technologies
import ChatGPT from "../../assets/Images/Tech/chatgpt.png";
import Meta from "../../assets/SVGs/meta.svg";
import Network from "../../assets/SVGs/network.svg";
import DSA from "../../assets/Images/Tech/dsa.png";
import UserAuth from "../../assets/Images/Tech/user_auth.png";
import DataBase from "../../assets/Images/Tech/database.png";
import C_Plus_Plus from "../../assets/Images/Tech/c++.png";
import Excel from "../../assets/Images/Tech/excel.png";
import SQL from "../../assets/Images/Tech/sql.png";
import Python from "../../assets/Images/Tech/python.png";
import Unknown from "../../assets/Images/Tech/unknown.png";

// Sub-Components
function CourseCard(props) {
  return (
    <a
      href={props.url}
      className="max-w-screen-sm w-full flex flex-col rounded-lg shadow-xl"
    >
      {/* Title with the Picture */}
      <div className="p-4 flex items-center gap-5 bg-blue-100/70 rounded-t-lg sm:p-5">
        <img
          className="p-2 bg-white rounded-full sm:p-4"
          src={props.img}
          alt=""
        />
        <p className="font-medium sm:text-lg">{props.title}</p>
      </div>

      {/* Specifications of the Course */}
      <div className="p-3 text-xs text-gray-500 flex items-center justify-evenly gap-4 rounded-b-lg sm:p-4 sm:text-sm">
        <span>{props.contents}+ Hrs of content</span>
        <span>{props.problems}+ Problems</span>
        <span>{props.learners}k+ Learners</span>
      </div>
    </a>
  );
}
function CertificateCard(props) {
  // List of Image Elements
  const images = props.array.map((src, index) => (
    <img className="h-6" key={index} src={src} alt="" />
  ));

  return (
    <a
      href={props.url}
      className="max-w-72 w-full min-w-72 min-h-fit p-4 flex flex-col gap-10 bg-white border-2 border-gray-200 rounded-xl"
    >
      {/* Images Section */}
      <div className="relative">
        <img className="w-full aspect-video" src={CollegeImg} alt="" />
        <img
          className="absolute left-5 top-[85%] p-2 bg-white border border-gray-300 rounded-lg"
          src={CollegeIcon}
          alt=""
        />
      </div>

      {/* Details of Certificate Course */}
      <div className="px-2.5">
        <h2 className="text-xl font-semibold">{props.course}</h2>
        <p className="text-sm text-gray-500 font-medium mt-2.5">
          E&ICT Academy, IIT Guwahati
        </p>
      </div>

      {/* Specifications of Certificate Course */}
      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">{images}</div>
        <p className="text-sm text-gray-600 font-medium">6 months</p>
      </div>
    </a>
  );
}

function ExploreCourses() {
  return (
    <div id="offerings">

      {/* Job Bootcamp */}
      <div id="job-bootcamp" className="p-10 pt-20 flex justify-center">

        {/* Inner div */}
        <div className="max-w-screen-sm w-full flex flex-col gap-16 lg:max-w-screen-lg">

          {/* Introduction */}
          <h1 className="text-center text-5xl text-gray-300 font-semibold uppercase sm:text-7xl lg:text-8xl">
            Our offerings
          </h1>

          {/* Job Bootcamp Courses */}
          <div className="flex flex-col gap-5">

            {/* Heading */}
            <div className="w-fit flex items-center gap-3">
              <img
                className="aspect-square p-2.5 border border-gray-300 rounded-lg"
                src={JobBootcamp}
                alt=""
              />
              <div>
                <h3 className="text-lg font-semibold">Job Bootcamp</h3>
                <p className="text-sm text-blue-500">(For Graduates)</p>
              </div>
            </div>

            {/* Courses */}
            <div className="flex flex-col gap-5 lg:flex-row">
              <CourseCard
                url="/bootcamp-web-development"
                img={FullStack}
                title="Full Stack Web Development"
                contents={140}
                problems={600}
                learners={10}
              />
              <CourseCard
                url="/bootcamp-data-analytics"
                img={DataAnalytics}
                title="Data Analytics"
                contents={100}
                problems={300}
                learners={2}
              />
            </div>

          </div>

        </div>

      </div>

      {/* IIT Certifications */}
      <div
        id="iit-certification"
        className="p-10 pt-20 flex justify-center bg-[#fffbf5]"
      >
        {/* Inner div */}
        <div className="max-w-screen-lg w-full flex flex-col gap-10">

          {/* Heading */}
          <div className="w-fit flex items-center gap-3">
            <img
              className="aspect-square p-2.5 border border-gray-300 rounded-lg"
              src={IITCertification}
              alt=""
            />
            <h3 className="text-lg font-semibold">IIT Certifications</h3>
          </div>

          {/* IIT Certification for graduates */}
          <div className="flex flex-col gap-5">
            <p className="w-fit py-1.5 px-3 text-xs text-white font-medium bg-[#745e39] rounded-3xl">
              For graduates
            </p>
            <CertificateCard
              url="/data-analytics-iitg-certification"
              course="PG Certification in Data Analytics"
              array={[ChatGPT, Meta, Network]}
            />
          </div>

          {/* IIT Certification for students */}
          <div className="flex flex-col gap-5">
            <p className="w-fit py-1.5 px-3 text-xs text-white font-medium bg-[#745e39] rounded-3xl">
              For college students
            </p>
            <div className="flex items-center gap-5 overflow-x-auto bar-none">
              <CertificateCard
                url="/student-training-cum-internship-certification-dsa"
                course="Training and Internship Certification in Advanced DSA"
                array={[DSA, UserAuth, DataBase, C_Plus_Plus]}
              />
              <CertificateCard
                url="/student-training-cum-internship-certification-data-analytics"
                course="Training and Internship Certification in Data Analytics"
                array={[Excel, SQL, Python, Unknown]}
              />
            </div>
          </div>
          
        </div>

      </div>

    </div>
  );
}

export default ExploreCourses;
