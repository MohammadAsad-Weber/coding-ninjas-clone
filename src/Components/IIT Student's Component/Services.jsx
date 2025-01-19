import React from "react";

// Icons
import JobInterview from "../../assets/Images/Icons/job_interview.png";
import Suitcase from "../../assets/Images/Icons/suitcase.png";
import Resume from "../../assets/Images/Icons/resume.png";
import CV from "../../assets/Images/Icons/cv.png";

// Sub-Component
function ServiceCard(props) {
  return (
    <div
      className={`w-1/2 py-5 px-2.5 flex flex-col gap-2.5 ${props.border} border-[#4164bd]`}
    >
      <img src={props.img} alt="" className="h-8 w-fit" />
      <h3 className="text-lg font-semibold">{props.title}</h3>
      <p className="hidden mt-2.5 text-sm sm:block">{props.description}</p>
    </div>
  );
}

function Services() {
  return (
    <div className="py-10 px-5 flex flex-col items-center gap-5">

      {/* Services Box */}
      <div className="max-w-screen-lg w-full py-5 px-2.5 bg-[#cfeafe] border border-[#4164bd] rounded-xl">

        {/* Heading */}
        <h1 className="mb-5 text-xl text-center font-medium">
          Coding Ninjas <span className="text-[#4164bd]">Career</span> Services
        </h1>

        {/* Services */}
        <div className="flex flex-col">
          <div className="flex gap-2.5">
            <ServiceCard
              border="border-r"
              img={JobInterview}
              title="1:1 Mock interviews"
              description="10 mock interviews and 10 domain expert sessions with industry experts from reputed companies who have proven competencies in specific fields and are excellent guides to help you determine your next steps in the industry."
            />
            <ServiceCard
              border="border-none"
              img={Suitcase}
              title="Access to job cell"
              description="Our placement cell is dedicated to supporting learners in their journey toward successful careers providing access top job openings."
            />
          </div>
          <div className="flex gap-2.5">
            <ServiceCard
              border="border-r"
              img={Resume}
              title="Profile building"
              description="Our Profile Building program is designed to help professionals create a compelling and market-ready profile that stands out to potential employers"
            />
            <ServiceCard
              border="border-none"
              img={CV}
              title="Resume review"
              description="Our Resume review service is designed to help you enhance your resume and increase your chances of landing interviews."
            />
          </div>
        </div>
        
      </div>

      {/* Note */}
      <p className="max-w-screen-lg text-sm text-red-500">
        Please note, neither Coding Ninjas nor E&ICT Academy, IIT Guwahati, is
        liable for getting you placement or job offer upon completion of the
        program. We also don’t guarantee a job upon program completion. However,
        as a valuable benefit, we provide you with access to Coding Ninjas’
        Career Services. These resources are designed to support your career
        growth and improve your job prospects.
      </p>

    </div>
  );
}

export default Services;
