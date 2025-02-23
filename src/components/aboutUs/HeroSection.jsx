"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./css/heroSection.module.css";
import Image from "next/image";
import backgroundImage1 from "@/assets/svgs/about_us/background1.svg";
import backgroundImage2 from "@/assets/svgs/about_us/background2.svg";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const containerRef = useRef(null);
  const svg1Ref = useRef(null);
  const svg2Ref = useRef(null);

  useEffect(() => {
    gsap.to(svg1Ref.current, {
      x: "5vw",
      y: "3vh",
      duration: 3,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(svg2Ref.current, {
      x: "-5vw",
      y: "-3vh",
      duration: 3,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.set(text1Ref.current, { opacity: 1, y: 0 });
    gsap.set(text2Ref.current, { opacity: 0, y: 300 });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=300px",
        scrub: true,
        pin: true,
      },
    });

    tl.to(text1Ref.current, { opacity: 0, y: 0, duration: 1.5 })
      .to(text2Ref.current, { opacity: 1, y: 0, duration: 1.5 }, "-=0")
      .add(() => splitTextAndAnimate(text2Ref.current), "-=1.5");

    const splitTextAndAnimate = (element) => {
      const text = element.innerText.split("").map((char) =>
        char === " " ? "&nbsp;" : `<span class="${styles.char}">${char}</span>`
      );
      element.innerHTML = text.join("");

      const chars = element.querySelectorAll(`.${styles.char}`);

      gsap.from(chars, {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: { amount: 0.7, from: "random" },
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    };

    splitTextAndAnimate(text1Ref.current);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.heroContainer}>
      <Image src={backgroundImage1} className={styles.svg1} ref={svg1Ref} alt="SVG 1" />
      <Image src={backgroundImage2} className={styles.svg2} ref={svg2Ref} alt="SVG 2" />
      
      <div className={styles.textWrapper}>
        <h1 ref={text1Ref} className={styles.text}>
          A new vision for payments
        </h1>
        <h1 ref={text2Ref} className={`${styles.text} ${styles.hidden}`}>
          Unified payment infrastructure
        </h1>
      </div>

      
    </div>
  );
};

export default HeroSection;