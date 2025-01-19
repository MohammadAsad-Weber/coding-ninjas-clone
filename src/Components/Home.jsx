import React from "react";

// Components
import Navbar from "./Home's Components/Navbar";
import Introduction from "./Home's Components/Introduction";
import ExploreCourses from "./Home's Components/ExploreCourses";
import Transform from "./Home's Components/Transform";
import WhyUs from "./Home's Components/WhyUs";
import Advantage from "./Home's Components/Advantage";
import Testimonial from "./Home's Components/Testimonial";
import SocialRating from "./Home's Components/SocialRating";
import Spotlight from "./Home's Components/Spotlight";
import Certificate from "./Reusable Components/Certificate";
import Footer from "./Reusable Components/Footer";

function Home() {
  // Changing the Title Dynamically
  document.title = "Coding Ninjas";

  return (
    <>
      <Navbar />
      <Introduction />
      <ExploreCourses />
      <Transform />
      <WhyUs />
      <Advantage />
      <Testimonial />
      <SocialRating />
      <Spotlight />
      <Certificate />
      <Footer />
    </>
  );
}

export default Home;
