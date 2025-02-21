"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./css/textAnimation.module.css";

gsap.registerPlugin(ScrollTrigger);

const TextAnimation = () => {
  const headingRef = useRef(null);
  const primerRef = useRef(null);
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=100%",
        scrub: 1,
        pin: true,
      },
    });

    // Heading animation
    tl.fromTo(
      headingRef.current,
      { y: 0, opacity: 1 },
      { y: -100, opacity: 0, duration: 1.5 }
    );

    // "PRIMER" letter by letter animation
    const letters = primerRef.current.children;
    tl.fromTo(
      letters,
      { opacity: 0, x: 50, y: -50 },
      { opacity: 1, x: 0, y: 0, stagger: 0.2, ease: "power2.out" }
    );

    // Video animation: Fade in from bottom and scale
    tl.fromTo(
      videoRef.current,
      { opacity: 0, y: 100, scale: 0.5 },
      { opacity: 1, y: 0, scale: 1.5, duration: 2, ease: "power2.out" }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-[rgba(2,25,46,1)] text-white text-center overflow-hidden pt-12"
    >
      <div className={styles.textAnimationHeading}>
        <h3>They needed</h3>
        <h2 ref={headingRef}>
          an Infrastructure that could scale
          <br />
          with them
        </h2>
      </div>
      <div className={styles.primer} ref={primerRef}>
        {"Primer".split("").map((letter, index) => (
          <span key={index} className="inline-block opacity-0">
            {letter}
          </span>
        ))}
      </div>

      {/* Video Section */}
      <div className="flex justify-center md:mt-40 !w-full h-full">
        <video
          ref={videoRef}
          src="https://cdn.prod.website-files.com/65bcc4714739c54deeb9bac7%2F667d72de899cc4e122246017_SLOWER%20PRIMIGOS-transcode.mp4"
          className={`opacity-0 w-[100%] h-[100%] ${styles.video}`}
          width={"100%"}
          height={"100%"}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  );
};

export default TextAnimation;
