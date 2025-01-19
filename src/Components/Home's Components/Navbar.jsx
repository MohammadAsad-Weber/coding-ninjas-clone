import React, { useContext, useState } from "react";
import { CodingNinjasContext } from "../../Context/ContextAPI"; // Context API

// SVGs - { Logos & Icons}
import Logo from "../../assets/SVGs/logo.svg";
import Job from "../../assets/SVGs/job.svg";
import Certification from "../../assets/SVGs/certification.svg";
import Google from "../../assets/SVGs/google.svg";
import Naukri from "../../assets/SVGs/naukri.svg";

// Sub-Component
function Hamburger(props) {
  return (
    <div
      style={props.toggleNavbar ? { right: "0%" } : { right: "-100%" }}
      className="h-dvh w-full fixed top-0 z-40 bg-white transition-all duration-500"
    >
      {/* Inner Navbar */}
      <nav className="h-16 flex items-center justify-between px-4">
        <img src={Logo} alt="" />
        <button
          onClick={() => {
            props.setToggleNavbar(false);
          }}
        >
          <i className="bx bx-x text-3xl"></i>
        </button>
      </nav>

      {/* Container */}
      <div className="p-8 flex flex-col gap-10 border-y border-gray-200">

        {/* Job Section Starts From Here */}
        <div className="w-full flex items-start gap-5">
          <img
            className="translate-y-[2px] p-2 rounded-lg shadow-[0_0_5px_lightgray]"
            src={Job}
            alt=""
          />
          <div className="w-fit flex flex-col gap-5">
            <h5 className="font-semibold">Job Bootcamp</h5>
            <a
              href="/bootcamp-web-development"
              className="w-fit text-sm text-blue-800 hover:underline"
            >
              Full Stack Web Development
            </a>
            <a
              href="/bootcamp-data-analytics"
              className="w-fit text-sm text-blue-800 hover:underline"
            >
              Data Analytics
            </a>
          </div>
        </div>

        {/* Certificates Section Starts From Here */}
        <div className="w-full flex items-start gap-5">
          <img
            className="translate-y-[2px] p-2 rounded-lg shadow-[0_0_5px_lightgray]"
            src={Certification}
            alt=""
          />
          <div className="w-fit flex flex-col gap-5">
            <h5 className="font-semibold">IIT Certifications</h5>
            <a
              href="/data-analytics-iitg-certification"
              className="w-fit text-sm text-blue-800 hover:underline"
            >
              PG Certificate in Data Analytics
            </a>
            <a
              href="/student-training-cum-internship-certification-dsa"
              className="w-fit text-sm text-blue-800 hover:underline"
            >
              Training and Internship Certificate in Advanced DSA
            </a>
            <a
              href="/student-training-cum-internship-certification-data-analytics"
              className="w-fit text-sm text-blue-800 hover:underline"
            >
              Training and Internship Certificate in Advanced Data Analytics
            </a>
          </div>
        </div>

      </div>

      {/* Contact Section */}
      <div className="text-sm text-gray-500 flex flex-col gap-2.5 p-8">
        <div className="flex items-center gap-5">
          <i className="bx bx-phone-call text-lg translate-y-[1.6px]"></i>
          <a href="tel:18001233598">
            Call us at <span className="underline">1800-123-3598</span>
          </a>
        </div>
        <div className="flex items-center gap-5">
          <i className="bx bx-envelope text-lg translate-y-[1.6px]"></i>
          <a href="mailto:contact@codingninjas.com" className="underline">
            contact@codingninjas.com
          </a>
        </div>
      </div>

      {/* Login Button */}
      <button
        onClick={() => props.setToggleLogin(true)}
        className="w-[90%] py-3 absolute bottom-5 left-1/2 -translate-x-1/2 text-white text-sm font-semibold bg-[#f66c3b] rounded-xl"
      >
        Login
      </button>

    </div>
  );
}
function LogIn(props) {
  return (
    <div
      style={props.toggleLogin ? { right: "0" } : { right: "-100%" }}
      className="w-full h-dvh fixed top-0 z-40 bg-black/45"
    >
      {/* Inner div */}
      <div
        style={props.toggleLogin ? { right: "0" } : { right: "-100%" }}
        className="max-w-lg w-full h-full absolute top-0 bg-white transition-all duration-500 delay-100"
      >
        {/* Inner Navbar */}
        <nav className="h-16 px-5 flex items-center justify-between">
          <img src={Logo} alt="" className="h-6" />
          <button
            onClick={() => props.setToggleLogin(false)}
            className="text-sm font-bold flex items-center justify-center text-[#999999]"
          >
            Close
            <i className="bx bx-x text-xl"></i>
          </button>
        </nav>

        {/* Login Content */}
        <div className="p-5 flex flex-col gap-8">

          {/* Heading */}
          <h2 className="mt-6 text-2xl font-bold"> Login with</h2>

          {/* Login with */}
          <div className="flex flex-col gap-2.5">
            <div className="w-full py-3 font-semibold flex items-center justify-center gap-2.5 border-2 border-black rounded-lg">
              <img src={Google} alt="" className="aspect-square h-7" />
              Google
            </div>
            <div className="w-full py-3 font-semibold flex items-center justify-center gap-2.5 border-2 border-black rounded-lg">
              <img src={Naukri} alt="" className="aspect-square h-7" />
              Naukri
            </div>
          </div>

          {/* OR Heading */}
          <div className="my-2.5 w-full flex items-center gap-2.5">
            <p className="text-sm text-gray-400">OR</p>
            <div className="h-[1px] w-full bg-gray-300"></div>
          </div>

          {/* Input Area */}
          <form action="" className="w-full flex flex-col items-center gap-5">
            {/* Email Input */}
            <div className="w-full flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs text-gray-900">
                Enter email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter email here"
                required
                className="p-3 pt-4 text-sm outline-none border border-[#141414] rounded focus:border-blue-500"
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2.5 flex justify-center items-center font-semibold text-white bg-[coral] rounded-md"
            >
              Continue
              <i className="bx bx-right-arrow-alt text-2xl translate-y-[1px]"></i>
            </button>
          </form>

        </div>

      </div>

    </div>
  );
}

function Navbar() {
  // Using Context API
  const { scroll } = useContext(CodingNinjasContext);

  // State For Hamburger Menu
  const [toggleNavbar, setToggleNavbar] = useState(false);

  // State For Login Menu
  const [toggleLogin, setToggleLogin] = useState(false);

  return (
    <>
      <nav className="h-14 w-full sticky z-30 top-0 left-0 px-5 flex items-center justify-between bg-white shadow-lg lg:h-16 lg:px-0 lg:justify-around">

        {/* Logo for screens smaller than 1024px */}
        <img className="h-6 md:h-7 lg:hidden" src={Logo} alt="" />

        {/* Logo for screens larger than 1024px */}
        <div className="hidden items-center gap-10 lg:flex">
          <img className="h-7" src={Logo} alt="" />
          <div
            onClick={() => scroll("job-bootcamp")}
            className="text-blue-950 font-medium cursor-pointer"
          >
            Job Bootcamp
          </div>
          <div
            onClick={() => scroll("iit-certification")}
            className="text-blue-950 font-medium cursor-pointer"
          >
            IIT Certifications
          </div>
        </div>

        {/* Login Button */}
        <button
          onClick={() => setToggleLogin(true)}
          className="hidden py-2.5 px-5 text-white text-sm font-medium bg-[#f66c3b] rounded-lg hover:bg-[#ff8254] lg:inline-block"
        >
          Login
        </button>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => {
            setToggleNavbar(true);
          }}
          className="py-1.5 px-3 flex items-center justify-center gap-1 text-white text-sm font-medium bg-gray-950 rounded-lg lg:hidden"
        >
          Courses
          <i className="bx bx-menu text-base translate-y-[0.75px]"></i>
        </button>

      </nav>

      {/* Hamburger Component */}
      <Hamburger
        toggleNavbar={toggleNavbar}
        setToggleNavbar={setToggleNavbar}
        setToggleLogin={setToggleLogin}
      />

      {/* LogIn Component */}
      <LogIn 
        toggleLogin={toggleLogin} 
        setToggleLogin={setToggleLogin} 
      />
    </>
  );
}

export default Navbar;
