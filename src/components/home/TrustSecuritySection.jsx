"use client"
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./css/trustSecuritySection.module.css";
import heroImg from "@/assets/home/trustSecurityImages/backgroundImage.png";
import Image from "next/image";
import trustworthyIcon from "@/assets/svgs/trustSecuritySection/trustworthyIcon.svg";
import youTubeVideoScreenShot from "@/assets/home/trustSecurityImages/image.png";
import cornerImage from "@/assets/svgs/trustSecuritySection/square.svg";

gsap.registerPlugin(ScrollTrigger);

const TrustSecuritySection = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const el = videoRef.current;
    
    gsap.fromTo(
      el,
      { opacity: 0, filter: "blur(20px)", scale: 1.3 },
      {
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
    
  }, []);

  return (
    <section ref={sectionRef} className={`${styles.trustSecuritySection} relative w-full bg-black mb-8`}>
      {/* Background Image */}
      <div className="absolute inset-0 w-full">
        <Image
          src={heroImg}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
          priority
        />
      </div>

      {/* Top Right Corner Design Element */}
      <div className="absolute top-0 right-0 z-20 w-[80px] md:w-[100px] lg:w-[120px]">
        <Image src={cornerImage} alt="Corner Design" className="w-full h-auto" />
      </div>

      {/* Tag Label */}
      <div className="relative z-10 flex flex-col gap-2 mb-8 md:items-start">
        <div className={`${styles.label} flex`}>
          <Image src={trustworthyIcon} alt="Trust Icon" width={20} height={20} />
          <h3 className="text-sm md:text-base">trustworthiness</h3>
        </div>

        {/* Heading */}
        <p className={`${styles.heading} md:text-left text-2xl md:text-4xl lg:text-5xl`}>
          We Value Trust And Security
        </p>
      </div>

      {/* Embedded YouTube Video with GSAP Animation */}
      <div
        ref={videoRef}
        className={`relative z-10 ${styles.videoContainer} w-full max-w-[900px] mx-auto px-4 md:px-0`}
      >
        <Image src={youTubeVideoScreenShot} alt="Video Thumbnail" className="w-full h-auto" />
      </div>
    </section>
  );
};

export default TrustSecuritySection;
