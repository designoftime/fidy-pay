import React from "react";
import TestimonialSection from "./TestimonialSection";
import ProfileCard from "./ProfileCard";
const AboutContent = () => {
  return (
    <div className="flex justify-center items-center px-6 pb-40">
      <div className="md:max-w-7xl w-full flex flex-col gap-4">
        <ProfileCard />
        <TestimonialSection />
      </div>
    </div>
  );
};

export default AboutContent;
