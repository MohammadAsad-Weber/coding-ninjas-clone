import React from "react";

// Image - { Payment Partners }
import Partners from "../../assets/Images/Payments/partners.png";

// Sub-Component
function PriceCard(props) {
  return (
    <div
      style={{ backgroundColor: props.background, color: props.text }}
      className="aspect-video w-full p-5 flex flex-col items-center justify-center text-center font-semibold border border-[#4164bd] rounded"
    >
      <p className="text-xs sm:text-base">{props.title}</p>
      <h1 className="text-2xl sm:text-3xl">₹{props.price}</h1>
    </div>
  );
}

function JoinNow(props) {
  return (
    <div className="py-10 px-5 flex flex-col items-center gap-10 bg-[#f0f0f0]">
      
      {/* Heading */}
      <h1 className="text-2xl text-center font-medium sm:text-3xl">
        Join Now,
        <span className="text-[#4164bd]"> Limited </span>
        seats left
      </h1>

      {/* Content */}
      <div className="max-w-screen-lg w-full flex flex-col items-center justify-center gap-8 sm:flex-row">

        {/* Cards */}
        <div className="max-w-md w-full flex items-center justify-center gap-2.5 sm:max-w-52 sm:flex-col">
          <PriceCard
            text="#ffffff"
            background="#4164bd"
            title="Total Program Fee"
            price={props.programFees}
          />
          <PriceCard
            text="#4164bd"
            background="#ffffff"
            title="Book your seat now"
            price={props.bookSeat}
          />
        </div>

        {/* Details */}
        <div className="max-w-md w-full flex flex-col gap-4 sm:max-w-none sm:gap-2">

          {/* Heading */}
          <h1 className="text-lg font-medium sm:text-xl">
            Pay in instalments, as low as
            <br />
            <span className="text-2xl sm:text-3xl">
              ₹ {props.installment}/month
            </span>
          </h1>

          {/* Note */}
          <p className="text-xs font-medium text-gray-700 sm:text-sm">
            No Cost EMI available upto 6 months and Standard EMI available upto
            12 months
          </p>

          {/* Paragraph */}
          <p className="text-xs text-gray-900 sm:text-sm">
            We have partnered with the following financial companies to provide
            competitive finance options at as low as 0% interest.
          </p>

          {/* Image */}
          <img src={Partners} alt="" className="max-w-60 w-full sm:max-w-80" />

          {/* Button */}
          <button className="w-fit py-2 px-4 text-sm text-white bg-[#4164bd] rounded-md sm:text-sm sm:py-3 sm:px-6">
            Enroll Now
          </button>

        </div>

      </div>

    </div>
  );
}

export default JoinNow;
