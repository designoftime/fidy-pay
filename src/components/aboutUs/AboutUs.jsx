import React from "react";
import HeroSection from "./HeroSection";
import AboutContent from "./AboutContent";
import TextAnimation from "./TextAnimation";
import QuotationSection from "./QuotationSection";
import PartenersSection from "../home/PartenersSection";
import StickyCards from "./stickyCards";

const AboutUs = () => {
  return (
    <>
      <section className="bg-[#f9f5ff]">
        <HeroSection />
        <AboutContent />
        <TextAnimation />
        <QuotationSection />
        <PartenersSection />
        <StickyCards />
      </section>
    </>
  );
};

export default AboutUs;
