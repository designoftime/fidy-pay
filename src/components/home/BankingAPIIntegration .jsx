"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import card1Img from "@/assets/home/servicesImages/card1Img.jpg";
import styles from "./css/bankingApiIntegration.module.css";
import cardImage from "@/assets/home/servicesImages/bankingApiImg.png";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const BankingAPIIntegration = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const servicesRef = useRef([]);
  const imageRef = useRef(null);

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
          start: "top 80%",scrub: true, // Ensures smooth entry and exit
          toggleActions: "play reverse play reverse", // Play on enter, reverse on leave
        },
      });

      gsap.from(text, {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: text,
          start: "top 85%",scrub: true, // Ensures smooth entry and exit
          toggleActions: "play reverse play reverse", // Play on enter, reverse on leave
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
            start: "top 90%",scrub: true, // Ensures smooth entry and exit
            toggleActions: "play reverse play reverse", // Play on enter, reverse on leave
          },
        });
      });

      gsap.from(image, {
        x: 100,
        scale: 0.9,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: image,
          start: "top 85%",scrub: true, // Ensures smooth entry and exit
          toggleActions: "play reverse play reverse", // Play on enter, reverse on leave
        },
      });
    }
  }, []);

  const services = [
    {
      id: 1,
      title: "Technology Advancement",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Customer Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: card1Img,
    },
    {
      id: 3,
      title: "Fintech API Platform",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 4,
      title: "Digital Options",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <section ref={sectionRef} className={`relative ${styles.bankingApiIntegration_section}`}>
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
        <div className="flex items-center justify-center md:flex-row gap-4 w-full mx-auto">
          <div className={styles.services_Progressbar}></div>
          <div className={styles.servicesCard_section}>
            {services.map((service, index) => (
              <div
                key={service.id}
                ref={(el) => (servicesRef.current[index] = el)}
                className={styles.servicesCard}
              >
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Animated Image */}
        <div className="w-full flex justify-center">
          <Image ref={imageRef} src={cardImage} alt="Banking API" width={524} height={524} className="max-w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default BankingAPIIntegration;
