"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import subHeroImg from "@/assets/home/subHeroImage.png";
import styles from "./css/heroSection.module.css";

// Define a dynamic object to hold the content
const heroContent = {
  title: "Banking as a service platform",
  heading: "Built for Everyone",
  description:
    "We help you transform your revenue generation systems through intelligent, and frictionless user experiences that outperform your competition and drive more demand.",
  buttonText: "GET STARTED",
  buttonLink: "/",
};

const HeroSectionContent = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0.1, x: -150 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      imageRef.current,
      { opacity: 0.1, x: 150 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out", delay: 0.3 }
    );
  }, []);

  return (
    <div
      className="flex flex-col gap-4 md:flex-row lg:flex-row !justify-between items-center"
      style={{ justifyContent: "space-between" }}
    >
      {/* Left Side - Text Content */}
      <div ref={textRef} className="relative z-10 text-white px-10">
        <h2 className={`absolute top-[15%] ${styles.main_Heading}`}>Expert</h2>
        <h2 className="text-3xl md:text-5xl font-[Rajdhani-Regular] leading-tight">
          {heroContent.title}
        </h2>
        <h1 className="text-4xl md:text-7xl font-[Rajdhani-bold] bg-gradient-to-br from-[#ef3b26] via-[#eb4624] to-[#f48752] text-transparent bg-clip-text mt-3">
          {heroContent.heading}
        </h1>
        <p className="text-gray-300 mt-4 text-lg md:text-xl leading-relaxed font-[Rajdhani-Regular]">
          {heroContent.description}
        </p>
        <Link href={heroContent.buttonLink}>
          <button className="mt-6 px-6 py-3 bg-[rgba(239,59,38,1)] text-white font-[Rajdhani-semiBold] rounded-full shadow-lg transition-transform hover:scale-105">
            {heroContent.buttonText}
          </button>
        </Link>
      </div>

      {/* Right Side - Image */}
      <div
        ref={imageRef}
        className="z-10 w-[50%] flex justify-end"
      >
        <Image
          src={subHeroImg}
          alt="Hero Image"
          width={400}
          height={600}
          className={styles.heroSectionImg}
        />
      </div>
    </div>
  );
};

export default HeroSectionContent;
