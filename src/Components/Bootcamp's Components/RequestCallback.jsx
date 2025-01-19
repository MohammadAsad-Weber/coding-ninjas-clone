import React from "react";

// SVGs - { Holding Phone Image }
import PhoneBG from "../../assets/SVGs/phone.svg";

function RequestCallback() {
  return (
    <div id="callback" className="p-10 pt-16 flex flex-col items-center justify-center gap-10 bg-[#fff6f3] lg:flex-row">

      {/* Image */}
      <img src={PhoneBG} alt="" className="max-w-md w-full" />

      {/* Call Request Form */}
      <form
        action=""
        
        className="max-w-[450px] w-full h-fit flex flex-col gap-5"
      >
        {/* Form Heading */}
        <h1 className="text-xl text-center font-semibold">
          Have questions? <br />
          Request a call from our counselors.
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
          <div className="ml-2 flex flex-col gap-4">
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
          Request callback
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

export default RequestCallback;
