"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import heroImg from "@/assets/home/heroImage.png";
import styles from "./css/heroSection.module.css";
import HeroSectionContent from "./HeroSectionContent";

const HeroSection = () => {
  const orangeSquareRef = useRef(null);

  useEffect(() => {
    // GSAP animation - Fade in from bottom
    gsap.fromTo(
      orangeSquareRef.current,
      { opacity: 0, y: 50 }, // Start hidden and below the viewport
      { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" } // Animate to visible
    );
  }, []);

  const data = [
    { value: "4L+", label: "Daily API calls" },
    { value: "50M+", label: "Indirect Merchant" },
    { value: "500+", label: "B2B Clients" },
    { value: "65M+", label: "Customer Served" },
  ];

  return (
    <div className={`relative w-full h-full bg-black flex items-center py-32 ${styles.heroSection}`}>
      {/* Background Image */}
      <div className="absolute z-0 w-full h-full">
        <Image
          src={heroImg}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
          priority
        />
      </div>

      {/* Content */}
      <div className={styles.heroSectionContent}>
        <HeroSectionContent />
      </div>

      {/* Bottom Orange Square (Fade-in Effect) */}
      <div ref={orangeSquareRef} className={styles.orangeSquare}>
        {data.map((item, index) => (
          <div key={index} className={styles.heroSection_work}>
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
