import React from "react";

// Image - { Professional Tag }
import Professional from "../../assets/Images/professional_tag.webp";

// Icons
import Learning from "../../assets/Images/Icons/doubt_support.png";
import Faculty from "../../assets/Images/Icons/faculty.png";
import Placement from "../../assets/Images/Icons/placement.png";

// Emoji
import Pointing from "../../assets/Images/Emoji/pointing.webp";

// Sub-Components
function SpecificationCard(props) {
  return (
    <div className="py-1.5 px-3 flex items-center gap-2 bg-[#2d2d2d] rounded-3xl">
      <img src={props.img} alt="" className="h-4" />
      <h3 className="text-xs text-gray-300 font-semibold">{props.title}</h3>
    </div>
  );
}
function AnalyticCard(props) {
  return (
    <div className="text-center text-white">
      <h1 className="text-[0.95rem] font-medium lg:text-xl">{props.heading}</h1>
      <h3 className="text-[0.6rem] font-normal lg:text-sm">
        {props.subHeading}
      </h3>
    </div>
  );
}

function AboutBootcamp(props) {
  return (
    <div
      id="webinar"
      className="w-full py-10 px-5 flex justify-center gap-14 bg-[radial-gradient(58.21%_100%_at_50%_0%,_#394966_0%,_#1b1d22_68.75%,_#141414_100%)] lg:p-10 lg:pt-16"
    >
      {/* Left Section */}
      <div className="max-w-[475px] w-full flex flex-col items-center gap-7 lg:items-start lg:mt-14">

        {/* Professional Tag */}
        <img
          src={Professional}
          alt=""
          className="hidden h-8 lg:block"
        />

        {/* Title */}
        <h1 className="text-3xl text-white font-semibold lg:text-[2.125rem] leading-10">
          {props.title} Job Bootcamp
        </h1>

        {/* Paragraph */}
        <p className="hidden text-gray-300/90 lg:block">{props.paragraph}</p>

        {/* Inline Form */}
        <form
          action=""
          className="py-6 px-4 flex flex-col gap-5 bg-white rounded-2xl lg:hidden"
        >
          {/* Form Heading */}
          <h1 className="text-lg font-semibold">
            Book a{" "}
            <span className="text-transparent bg-[linear-gradient(112deg,_#fa00ff_-3.21%,_#ff8a00_97.8%)] bg-clip-text">
              free live webinar
            </span>{" "}
            <span className="text-xs font-normal text-gray-500">
              to know more
            </span>
          </h1>
          {/* Name Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-xs">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter name"
              required
              className="py-2 px-3 outline-none border border-gray-400 rounded-lg placeholder:text-[#838485] focus:shadow-[0_0_5px_rgb(59,130,246,0.65)]"
            />
          </div>
          {/* Email Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-xs">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
              className="py-2 px-3 outline-none border border-gray-400 rounded-lg placeholder:text-[#838485] focus:shadow-[0_0_5px_rgb(59,130,246,0.65)]"
            />
          </div>
          {/* Phone Number Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="number" className="text-xs">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="number"
              id="number"
              placeholder="Phone Number"
              pattern="[0-9]{10}"
              required
              className="py-2 px-3 outline-none border border-gray-400 rounded-lg placeholder:text-[#838485] focus:shadow-[0_0_5px_rgb(59,130,246,0.65)]"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="py-3 px-5 text-white font-medium bg-[#f66c3b] rounded-lg hover:bg-[#ff8254]"
          >
            Continue booking webinar
          </button>
          {/* Terms & Conditions */}
          <p className="-mt-3 text-[0.65rem] text-gray-400 leading-[0.85rem]">
            I authorise Coding Ninjas to contact me with course updates & offers
            via Email/SMS/Whatsapp/Call. I have read and agree to Privacy Policy
            & Terms of use
          </p>
        </form>

        {/* Specifications */}
        <div className="flex flex-wrap items-center gap-1">
          <SpecificationCard img={Learning} title="Live Learning" />
          <SpecificationCard img={Faculty} title="Faculty from MAANG" />
          <SpecificationCard img={Placement} title="1:1 Mentorship" />
        </div>

        {/* Analytics */}
        <div className="w-full min-w-[315px] my-2.5 p-4 flex items-center justify-evenly bg-[#2b303c] rounded-2xl lg:my-7 lg:px-2">
          <AnalyticCard heading="100%" subHeading="Live Classes" />
          <div className="w-[1px] h-full bg-[#394871]"></div> {/* Divider */}
          <AnalyticCard heading="1200+" subHeading="Companies Hiring" />
          <div className="w-[1px] h-full bg-[#394871]"></div> {/* Divider */}
          <AnalyticCard heading="95%" subHeading="Placement Rate" />
          <div className="w-[1px] h-full bg-[#394871]"></div> {/* Divider */}
          <AnalyticCard heading="1.5 L+" subHeading="Learners" />
        </div>

        {/* Paragraph */}
        <p className="hidden text-gray-400 items-center justify-center gap-2.5 lg:flex">
          Know in-depth details in our free webinar
          <img src={Pointing} alt="" className="h-10" />
        </p>

      </div>

      {/* Right Section (Form) */}
      <form
        action=""
        className="hidden max-w-[450px] w-full h-fit p-6 flex-col gap-y-5 bg-white rounded-2xl lg:flex"
      >
        {/* Form Heading */}
        <h1 className="text-xl font-semibold">
          Book a{" "}
          <span className="text-transparent bg-[linear-gradient(112deg,_#fa00ff_-3.21%,_#ff8a00_97.8%)] bg-clip-text">
            free live webinar
          </span>{" "}
          <span className="text-xs font-normal text-gray-500">
            to know more
          </span>
        </h1>

        {/* Name Input */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-xs">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter name"
            required
            className="py-2 px-3 outline-none border border-gray-400 rounded-lg placeholder:text-[#838485] focus:shadow-[0_0_5px_rgb(59,130,246,0.65)]"
          />
        </div>

        {/* Email Input */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xs">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            className="py-2 px-3 outline-none border border-gray-400 rounded-lg placeholder:text-[#838485] focus:shadow-[0_0_5px_rgb(59,130,246,0.65)]"
          />
        </div>

        {/* Phone Number Input */}
        <div className="flex flex-col gap-2">
          <label htmlFor="number" className="text-xs">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="number"
            id="number"
            placeholder="Phone Number"
            pattern="[0-9]{10}"
            required
            className="py-2 px-3 outline-none border border-gray-400 rounded-lg placeholder:text-[#838485] focus:shadow-[0_0_5px_rgb(59,130,246,0.65)]"
          />
        </div>

        {/* Radio Inputs */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xs">
            Experience <span className="text-red-500">*</span>
          </h4>
          <div className="ml-2.5 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <input type="radio" name="exp" id="one" className="scale-125" />
              <label htmlFor="one" className="text-sm text-black/85">
                Working professional - Technical roles
              </label>
            </div>
            <div className="flex items-center gap-4">
              <input type="radio" name="exp" id="two" className="scale-125" />
              <label htmlFor="two" className="text-sm text-black/85">
                Working professional - Non technical
              </label>
            </div>
            <div className="flex items-center gap-4">
              <input type="radio" name="exp" id="three" className="scale-125" />
              <label htmlFor="three" className="text-sm text-black/85">
                College student - Final year
              </label>
            </div>
            <div className="flex items-center gap-4">
              <input type="radio" name="exp" id="four" className="scale-125" />
              <label htmlFor="four" className="text-sm text-black/85">
                College student - 1st to pre-final year
              </label>
            </div>
            <div className="flex items-center gap-4">
              <input type="radio" name="exp" id="five" className="scale-125" />
              <label htmlFor="five" className="text-sm text-black/85">
                Others
              </label>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="py-3 px-5 text-white font-medium bg-[#f66c3b] rounded-lg hover:bg-[#ff8254]"
        >
          Continue booking webinar
        </button>

        {/* Terms & Conditions */}
        <p className="-mt-2.5 text-[0.65rem] text-gray-400 leading-[0.85rem]">
          I authorise Coding Ninjas to contact me with course updates & offers
          via Email/SMS/Whatsapp/Call. I have read and agree to Privacy Policy &
          Terms of use
        </p>
        
      </form>

    </div>
  );
}

export default AboutBootcamp;
