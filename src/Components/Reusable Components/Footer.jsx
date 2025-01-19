import React from "react";

// Images - { Payments Apps or Methods }
import Visa from "../../assets/Images/Payments/visa.webp";
import PayPal from "../../assets/Images/Payments/paypal.webp";
import UPI from "../../assets/Images/Payments/upi.webp";
import EMI from "../../assets/Images/Payments/emi.webp";
import Safe from "../../assets/Images/Payments/safe.webp";
import RazorPay from "../../assets/Images/Payments/razorpay.webp";

function Hyperlink(props) {
  return (
    <a
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-fit text-sm text-gray-400 hover:underline"
    >
      {props.text}
    </a>
  );
}

function Footer() {
  // Links
  const links01 = [
    {
      text: "Careers",
      url: "https://codingninjas.darwinbox.in/ms/candidate/careers",
    },
    {
      text: "Privacy policy",
      url: "https://www.codingninjas.com/policy/privacy.pdf",
    },
    {
      text: "Terms & conditions",
      url: "https://www.codingninjas.com/policy/tnc.pdf",
    },
    {
      text: "Pricing & refund policy",
      url: "https://www.codingninjas.com/policy/pricing-and-refund.pdf",
    },
    {
      text: "Bug bounty",
      url: "https://www.codingninjas.com/bug-bounty",
    },
    {
      text: "Review",
      url: "https://www.codingninjas.com/review",
    },
    {
      text: "Press release",
      url: "https://www.codingninjas.com/press-release",
    },
  ];
  const links02 = [
    {
      text: "Job Bootcamp",
      url: "/bootcamp-web-development",
    },
    {
      text: "Code 360",
      url: "https://www.naukri.com/code360/",
    },
  ];
  const links03 = [
    {
      text: "10X Club",
      url: "https://www.codingninjas.com/landing/10x-club/?utm_source=internal&utm_medium=internal&utm_campaign=sitewide_footer",
    },
    {
      text: "Student Chapters",
      url: "https://www.codingninjas.com/landing/10x-club-student-chapters/?utm_source=internal&utm_medium=internal&utm_campaign=sitewide_footer",
    },
    {
      text: "Hire from us",
      url: "https://placements.codingninjas.com/",
    },
  ];

  // Social Media Links
  const instagramUrl = "https://www.instagram.com/coding.ninjas/";
  const facebookUrl = "https://www.facebook.com/codingninjas";
  const linkedinUrl = "https://www.linkedin.com/company/coding-ninjas-india/";
  const twitterUrl = "https://twitter.com/CodingNinjasOff";
  const youtubeUrl = "https://www.youtube.com/c/CodingNinjasIndia";

  return (
    <footer>

      {/* Upper Footer */}
      <div className="flex justify-center bg-[linear-gradient(286deg,_#262121_9.3%,_#ae8975_331.33%)]">
        
        {/* Inner div */}
        <div className="max-w-screen-xl w-full py-14 px-10 flex flex-col gap-10 min-[550px]:flex-row min-[550px]:flex-wrap min-[780px]:justify-evenly">

          {/* Coding Ninjas Section */}
          <div className="flex flex-col gap-2.5">
            <h3 className="w-fit text-white font-medium">Coding Ninjas</h3>
            {links01.map((data, index) => {
              return <Hyperlink key={index} url={data.url} text={data.text} />;
            })}
          </div>

          {/* Products Section */}
          <div className="flex flex-col gap-2.5">
            <h3 className="w-fit text-white font-medium">Products</h3>
            {links02.map((data, index) => {
              return <Hyperlink key={index} url={data.url} text={data.text} />;
            })}
          </div>

          {/* Community Section */}
          <div className="flex flex-col gap-2.5">
            <h3 className="w-fit text-white font-medium">Community</h3>
            {links03.map((data, index) => {
              return <Hyperlink key={index} url={data.url} text={data.text} />;
            })}
          </div>

          {/* Copyrights and Social Media Links */}
          <div className="flex flex-col gap-5">
            <div className="text-sm text-gray-400">
              Copyright © Sunrise Mentors Pvt. Ltd.
            </div>
            <div className="flex items-center gap-2.5">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-gray-400"
              >
                <i className="bx bxl-instagram-alt"></i>
              </a>
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-gray-400"
              >
                <i className="bx bxl-facebook-square"></i>
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-gray-400"
              >
                <i className="bx bxl-linkedin-square"></i>
              </a>
              <a
                href={twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-gray-400"
              >
                <i className="bx bxl-twitter"></i>
              </a>
              <a
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-gray-400"
              >
                <i className="bx bxl-youtube"></i>
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* Lower Footer */}
      <div className="flex justify-center bg-[linear-gradient(110deg,_#262121_24.84%,_#15181a_100%)]">

        {/* Inner div */}
        <div className="max-w-[1080px] w-full py-14 px-10 flex flex-col gap-10">

          {/* Heading */}
          <h2 className="text-xl text-gray-200 font-medium">Important Links</h2>

          {/* Details */}
          <div className="flex flex-col gap-10">

            {/* Jobs bootcamp section */}
            <div className="flex flex-col gap-5 lg:flex-row lg:gap-8">
              <h3 className="text-sm text-gray-200 font-medium">
                Job Bootcamps for <br /> professional
              </h3>
              <div className="text-sm text-gray-400 font-medium flex flex-col gap-2.5 md:flex-row">
                <a href="/bootcamp-web-development" className="underline">
                  Web Development Bootcamp (Mern & Springboot)
                </a>
                <span className="hidden md:inline">|</span>
                <a href="/bootcamp-data-analytics" className="underline">
                  Data Analytics job Bootcamps
                </a>
              </div>
            </div>

            {/* Payment section */}
            <div className="flex flex-wrap items-center gap-2.5 md:gap-5">
              <h3 className="text-sm text-gray-200 font-medium">
                We accept payment using:
              </h3>
              <div className="flex flex-wrap gap-2 md:gap-2.5">
                <img
                  className="h-6 aspect-auto rounded-md md:h-8"
                  src={Visa}
                  alt=""
                />
                <img
                  className="h-6 aspect-auto rounded-md md:h-8"
                  src={PayPal}
                  alt=""
                />
                <img
                  className="h-6 aspect-auto rounded-md md:h-8"
                  src={UPI}
                  alt=""
                />
                <img
                  className="h-6 aspect-auto rounded-md md:h-8"
                  src={EMI}
                  alt=""
                />
                <img
                  className="h-6 aspect-auto rounded-md md:h-8"
                  src={Safe}
                  alt=""
                />
                <img
                  className="h-6 aspect-auto rounded-md md:h-8"
                  src={RazorPay}
                  alt=""
                />
              </div>
            </div>
            
          </div>

          {/* Animated Title */}
          <div className="mt-4 bg-[linear-gradient(180deg,_rgba(94,_79,_79,_.42)_0%,_rgba(11,_15,_19,_0)_113.42%)] bg-clip-text text-transparent">
            <h1 className="text-center text-4xl font-bold bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(217,_217,_217,_.4)_0%,_rgba(217,_217,_217,_0)_100%)] bg-clip-text bg-[-4rem_ top] bg-no-repeat bg-[length:125px_100%] animate-left_right min-[500px]:text-[3.25rem] sm:text-7xl lg:text-8xl xl:text-9xl">
              Coding Ninjas
            </h1>
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
