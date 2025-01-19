import React from "react";

// Logos
import CNLogo from "../../assets/SVGs/logo.svg";
import IITLogo from "../../assets/Images/Logos/iit.png";

function AboutProgram(props) {
  return (
    <div className="p-5 flex justify-center items-center gap-14 bg-[radial-gradient(at_top_center,_#394966_0,_#1b1d22_100%)] lg:pt-10">

      {/* Left Section */}
      <div className="max-w-md w-full flex flex-col gap-2 sm:gap-4 lg:gap-5">

        {/* Sub-Heading */}
        <h2 className="font-semibold text-white lg:text-xl">
          India’s first and only,
        </h2>

        {/* Heading */}
        <h1 className="text-xl font-semibold text-white leading-6 lg:text-[1.75rem] lg:leading-8">
          Student Training cum Internship Programme in{" "}
          <span className="text-[#d5977e]">{props.program}</span>
        </h1>

        {/* Inner Form */}
        <form
          action=""
          className="w-full py-5 px-4 flex flex-col gap-2 bg-white rounded-xl sm:gap-2.5 lg:hidden"
        >
          {/* Title */}
          <div>
            <h3 className="font-bold">Book a FREE Webinar. NOW!</h3>
            <p className="text-xs font-semibold text-red-600">
              Last few seats left!
            </p>
          </div>
          {/* Name Input */}
          <input
            type="text"
            placeholder="Enter your Name"
            required
            className="py-2 px-3 text-sm text-[#4d4d62] outline-none bg-[#f4f4f4] border rounded focus:border-[#b2b6ba]"
          />
          {/* Email Input */}
          <input
            type="email"
            placeholder="Enter your email ID"
            required
            className="py-2 px-3 text-sm text-[#4d4d62] outline-none bg-[#f4f4f4] border rounded focus:border-[#b2b6ba]"
          />
          {/* Mobile Number Input */}
          <input
            type="tel"
            placeholder="Enter your Mobile Number"
            pattern="[0-9]{10}"
            required
            className="py-2 px-3 text-sm text-[#4d4d62] outline-none bg-[#f4f4f4] border rounded focus:border-[#b2b6ba]"
          />
          {/* Experience DropBox */}
          <select
            required
            className="py-2 px-3 text-sm text-[#4d4d62] outline-none bg-[#f4f4f4] border rounded focus:border-[#b2b6ba]"
          >
            <option className="text-[#4d4d62]">Experience</option>
            <option className="text-[#4d4d62]">
              College student - 1st year
            </option>
            <option className="text-[#4d4d62]">
              College student - 2nd year
            </option>
            <option className="text-[#4d4d62]">
              College student - 3rd year
            </option>
            <option className="text-[#4d4d62]">
              College student - 4th year / Final year
            </option>
            <option className="text-[#4d4d62]">
              Graduate / Working professional
            </option>
          </select>
          {/* Submit Button */}
          <button
            type="submit"
            className="p-4 text-sm text-white bg-[#4164bd] rounded-md"
          >
            Continue booking webinar
          </button>
          {/* Terms & Condition */}
          <p className="text-[0.5rem] text-gray-500">
            I authorise Coding Ninjas to contact me with course updates & offers
            via Email /SMS /WhatsApp/ Call. I have read and agree to the{" "}
            <span className="text-red-500">Privacy Policy & Terms of use</span>.
          </p>
        </form>

        {/* BY Tag */}
        <h1 className="hidden w-fit py-2.5 px-3 text-2xl font-semibold text-white bg-[#4164bd] rounded-full lg:block">
          by
        </h1>

        {/* IIT's Name */}
        <h1 className="hidden text-3xl font-semibold text-white lg:block">
          E&ICT Academy, IIT Guwahati
        </h1>

        {/* Collabration */}
        <div className="w-fit hidden items-center gap-3 lg:flex">
          <img src={IITLogo} alt="" className="h-12 p-3 bg-white rounded-xl" />
          <h1 className="text-2xl font-extrabold font-sans text-white">X</h1>
          <img src={CNLogo} alt="" className="h-12 p-3 bg-white rounded-xl" />
        </div>

      </div>

      {/* Form */}
      <form
        action=""
        className="hidden max-w-lg w-full py-6 px-10 flex-col gap-2.5 bg-white rounded-xl lg:flex"
      >
        {/* Title */}
        <div>
          <h3 className="text-xl font-bold">Book a FREE Webinar. NOW!</h3>
          <p className="text-sm font-semibold text-red-600">
            Last few seats left!
          </p>
        </div>
        {/* Name Input */}
        <input
          type="text"
          placeholder="Enter your Name"
          required
          className="p-3 text-[#4d4d62] outline-none bg-[#f4f4f4] border rounded focus:border-[#b2b6ba]"
        />
        {/* Email Input */}
        <input
          type="email"
          placeholder="Enter your email ID"
          required
          className="p-3 text-[#4d4d62] outline-none bg-[#f4f4f4] border rounded focus:border-[#b2b6ba]"
        />
        {/* Mobile Number Input */}
        <input
          type="tel"
          placeholder="Enter your Mobile Number"
          pattern="[0-9]{10}"
          required
          className="p-3 text-[#4d4d62] outline-none bg-[#f4f4f4] border rounded focus:border-[#b2b6ba]"
        />
        {/* Experience DropBox */}
        <select
          required
          className="p-3 text-[#4d4d62] outline-none bg-[#f4f4f4] border rounded focus:border-[#b2b6ba]"
        >
          <option className="text-[#4d4d62]">Experience</option>
          <option className="text-[#4d4d62]">College student - 1st year</option>
          <option className="text-[#4d4d62]">College student - 2nd year</option>
          <option className="text-[#4d4d62]">College student - 3rd year</option>
          <option className="text-[#4d4d62]">College student - 4th year / Final year</option>
          <option className="text-[#4d4d62]">Graduate / Working professionals</option>
        </select>
        {/* Submit Button */}
        <button
          type="submit"
          className="p-4 text-sm text-white bg-[#4164bd] rounded-md"
        >
          Continue booking webinar
        </button>
        {/* Terms & Condition */}
        <p className="text-[0.65rem] text-gray-500">
          I authorise Coding Ninjas to contact me with course updates & offers
          via Email /SMS /WhatsApp/ Call. I have read and agree to the{" "}
          <span className="text-red-500">Privacy Policy & Terms of use</span>.
        </p>
      </form>

    </div>
  );
}

export default AboutProgram;
