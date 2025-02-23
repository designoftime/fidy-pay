"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./css/aboutSection.module.css";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);

  useEffect(() => {
    const animateSection = (element, xValue) => {
      gsap.fromTo(
        element,
        { opacity: 0, x: xValue },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power2.in",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "top 30%",
            scrub: true, 
            toggleActions: "play reverse play reverse", 
          },
        }
      );
    };

    animateSection(leftContentRef.current, -150); 
    animateSection(rightContentRef.current, 150); 
  }, []);

  return (
    <section className={`bg-[rgba(246,249,248,1)] ${styles.about_section}`}>
      <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-10">
        {/* Left Content (Heading & Button) */}
        <div ref={leftContentRef} className={styles.aboutSection_MainHeading}>
          <h3 className={styles.aboutSection_heading}>
            Welcome to FidyPay As a{" "}
            <span className="bg-gradient-to-br from-[#ef3b26] via-[#eb4624] to-[#f48752] text-transparent bg-clip-text">
              BaaS Platform
            </span>
          </h3>
          <Link href="#">
            <button
              className={`mt-6 px-6 py-3 rounded-full shadow-lg transition-transform hover:scale-105 ${styles.readMore_btn}`}
            >
              READ MORE
            </button>
          </Link>
        </div>

        {/* Right Content (Paragraph) */}
        <div ref={rightContentRef} className={styles.aboutSection_Data}>
          <p className={styles.aboutSection_content}>
            With the trust of numerous businesses across India, FidyPay boasts
            its seamless banking API integration services to meet all your
            financial service offering needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
