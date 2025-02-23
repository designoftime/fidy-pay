"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import card1Img from "@/assets/home/servicesImages/card1Img.jpg";
import styles from "./css/bankingApiIntegration.module.css";
import cardImage from "@/assets/home/servicesImages/bankingApiImg.png";
import Image from "next/image";
import gradientCOlorImage from "@/assets/svgs/bankingApiIntegration/gradientColorImage.svg";
gsap.registerPlugin(ScrollTrigger);

const BankingAPIIntegration = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const servicesRef = useRef([]);
  const imageRef = useRef(null);
  const progressBarRef = useRef([]);

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [heights, setHeights] = useState([]);

  useEffect(() => {
    const updateHeights = () => {
      const newHeights = servicesRef.current.map((el) => el?.offsetHeight || 0);
      setHeights(newHeights);
    };

    updateHeights();
    window.addEventListener("resize", updateHeights);

    return () => window.removeEventListener("resize", updateHeights);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const text = textRef.current;
    const image = imageRef.current;

    if (section && heading && text && image) {
      gsap.from(heading, {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heading,
          start: "top 90%",
          scrub: true,
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.from(text, {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: text,
          start: "top 85%",
          scrub: true,
          toggleActions: "play reverse play reverse",
        },
      });

      servicesRef.current.forEach((el, index) => {
        gsap.from(el, {
          opacity: 1,
          y: 60,
          duration: 1,
          delay: index * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            scrub: true,
            toggleActions: "play reverse play reverse",
          },
        });
      });

      gsap.from(image, {
        x: 100,
        scale: 0.9,
        opacity: 0.7,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: image,
          start: "top 90%",
          scrub: true,
          toggleActions: "play reverse play reverse",
        },
      });
    }

    const updateHeights = () => {
      const newHeights = servicesRef.current.map((el) => el?.offsetHeight || 0);
      setHeights(newHeights);
    };

    updateHeights();
    window.addEventListener("resize", updateHeights);

    return () => window.removeEventListener("resize", updateHeights);
  }, []);

  const services = [
    {
      id: 1,
      title: "Technology Advancement",
      description: "Our services are backed by qualified and capable professionals as well as the latest technological advancements in order to make sure that our platforms remain a cut above the rest of the competition, and provide the most seamless experience for both the customer and the business.",
    },
    {
      id: 2,
      title: "Customer Support",
      description: "We also ensure that our dedicated support staff is always available to assist you in the implementation and usage of our Fintech services through our banking APIs so that you and your customers may have the smoothest possible experience.",
      image: card1Img,
    },
    {
      id: 3,
      title: "Fintech API Platform",
      description: "Our specialty lies in the creation of unique API integrations for all businesses that are crafted with the express purpose of streamlining and upgrading every customer’s experiences and interactions with the brand and merchants."

    },
    {
      id: 4,
      title: "Digital Options",
      description: "In addition to our main APIs, we also deploy other digital options that enhance the businesses experiences and show consumers a whole new world of payment receiving benefits.",
    },
  ];

  return (
    <section ref={sectionRef} className={`relative ${styles.bankingApiIntegration_section}`}>
      <Image src={gradientCOlorImage} alt="" className={styles.right_svg} />
      {/* Heading */}
      <h2 ref={headingRef} className={`absolute top-12 left-[7rem] ${styles.main_Heading}`}>
        Expertise
      </h2>

      {/* Subheading & Content */}
      <div ref={textRef} className="relative z-10 text-left pb-8">
        <h3 className="text-4xl font-[Rajdhani-Regular] font-[600] text-black">
          <span>Streamline</span> <span>Faster</span>
        </h3>
        <h3 className="text-4xl font-[Rajdhani-Regular] font-[600] text-black mt-1">
          Integrations of{" "}
          <span className="bg-gradient-to-br from-[#ef3b26] via-[#eb4624] to-[#f48752] text-transparent bg-clip-text">
            Banking
          </span>{" "}
          <span className="bg-gradient-to-br from-[#ef3b26] via-[#eb4624] to-[#f48752] text-transparent bg-clip-text">
            API’s
          </span>
        </h3>
      </div>

      {/* Cards Section */}
      <div className={`flex flex-col md:flex-row gap-6 justify-between items-center ${styles.bankingApiIntegration_section_cards}`}>
        <div className="flex items-center justify-center md:flex-row gap-4 w-full mx-auto relative">
          {/* Progress Bar */}
          <div className={styles.services_Progressbar}>
            {services.map((_, index) => (
              <div
                key={index}
                ref={(el) => (progressBarRef.current[index] = el)}
                className={`${styles.progress_bar_segment} ${
                  hoveredIndex === index ? styles.active : ""
                }`}
                style={{ height: `${heights[index]}px`, transition: "background 0.3s ease-in-out" }}
              />
            ))}
          </div>

          {/* Services Cards */}
          <div className={styles.servicesCard_section}>
            {services.map((service, index) => (
              <div
                key={service.id}
                ref={(el) => (servicesRef.current[index] = el)}
                className={styles.servicesCard}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Animated Image */}
        <div className="w-full flex justify-center">
          <Image ref={imageRef} src={cardImage} alt="Banking API" width={424} height={424} className="max-w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default BankingAPIIntegration;
