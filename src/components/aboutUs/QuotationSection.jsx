"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./css/quotationSection.module.css";
import Image from "next/image";
import quatationImage1 from "@/assets/about/quotation1.png";
import quatationImage2 from "@/assets/about/quotation2.png";
import doubleQuote1Svg from "@/assets/about/doubleQuote.svg";
import doubleQuote2Svg from "@/assets/about/doubleQuote2.svg";
import gradientCOlorImage from "@/assets/svgs/about_us/gradientColorImage.svg";

gsap.registerPlugin(ScrollTrigger);

const QuotationSection = () => {
  const containerRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Image 1 Animation
      gsap.fromTo(
        image1Ref.current,
        { opacity: 0, x: 100, rotate: 15 },
        {
          opacity: 1,
          x: 0,
          rotate: 0,
          duration: 1,
          scrollTrigger: {
            trigger: image1Ref.current,
            start: "top 80%", // Trigger when it comes into view
            end: "top 20%",
            scrub: true,
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Text Animation
      gsap.fromTo(
        textRef.current,
        { opacity: 0, scale: 0.8, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Image 2 Animation
      gsap.fromTo(
        image2Ref.current,
        { opacity: 0, x: -100, rotate: -15, scale: 0.8 },
        {
          opacity: 1,
          x: 0,
          rotate: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: image2Ref.current,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert(); // Cleanup GSAP effects on component unmount
  }, []);

  return (
    <div
      ref={containerRef}
      className={`${styles.container} flex flex-col items-center text-center relative overflow-hidden`}
    >
      <Image src={gradientCOlorImage} alt="" className={styles.right_svg} />

      {/* Images in Grid */}
      <div className="flex flex-col gap-4 w-full max-w-7xl">
        {/* Top Right Image */}
        <div className="flex justify-end overflow-visible">
          <Image
            ref={image1Ref}
            src={quatationImage1}
            alt="Get Your Guide"
            className="rounded-lg shadow-lg"
            width={300}
            height={300}
          />
        </div>

        {/* Quote Text */}
        <div
          ref={textRef}
          className="col-span-2 flex flex-col items-center relative px-6"
        >
          <div className="flex items-center justify-center relative">
            {/* Left Double Quote */}
            <Image
              src={doubleQuote1Svg}
              alt="Left Quote"
              className="w-10 h-10 absolute left-0 top-[-10px]"
            />

            {/* Quote Content */}
            <p
              className={`${styles.quotation_content} text-lg font-medium px-8`}
            >
              With payments, the more you try to build in-house, the greater the
              risk of diverting focus and resources from your core competencies.
              That’s something we’ve strategically chosen to avoid by using
              Primer.
            </p>

            {/* Right Double Quote */}
            <Image
              src={doubleQuote2Svg}
              alt="Right Quote"
              className="w-10 h-10 absolute right-0 bottom-[-10px]"
            />
          </div>
        </div>

        {/* Bottom Left Image */}
        <div className="flex justify-start overflow-visible">
          <Image
            ref={image2Ref}
            src={quatationImage2}
            alt="Adventure Tour"
            className="rounded-lg shadow-lg"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default QuotationSection;
