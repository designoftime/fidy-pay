"use client";
import React, { useEffect, useRef } from "react";
import styles from "./css/servicesSection.module.css";
import Image from "next/image";
import nextBtn from "@/assets/svgs/servicesSection/nextArrow.svg";
import card1Img from "@/assets/svgs/servicesSection/card1.svg";
import card2Img from "@/assets/svgs/servicesSection/card2.svg";
import card3Img from "@/assets/svgs/servicesSection/card3.svg";
import card4Img from "@/assets/svgs/servicesSection/card4.svg";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import cornerImage from "@/assets/svgs/trustSecuritySection/square.svg";
gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const cardsRef = useRef([]);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  
  useEffect(() => {
    const heading = headingRef.current;
    const text = textRef.current;
    gsap.from(heading, {
      y: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: heading,
        start: "top 70%",
        scrub: true,
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from(text, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: text,
        start: "top 75%",
        scrub: true,
        toggleActions: "play reverse play reverse",
      },
    });
    cardsRef.current.forEach((el, index) => {
      gsap.from(el, {
        opacity: 0.5,
        x: 60,
        duration: 1,
        delay: index * 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          scrub: true,
          toggleActions: "play reverse play reverse",
        },
      });
    });
  }, []);
  

  const services = [
    { title: "API Banking", icon: card1Img },
    { title: "BBPS", icon: card2Img },
    { title: "UPI QR", icon: card3Img },
    { title: "eNACH", icon: card3Img },
    { title: "Sound Box", icon: card3Img },
    { title: "eKYC", icon: card4Img },
    { title: "Customized POS", icon: card4Img },
    { title: "Prepaid Cards", icon: card4Img },
  ];

  return (
    <section className={`relative bg-[rgba(246,249,248,1)] ${styles.servicesSection}`}>
       {/* Top Right Corner Design Element */}
            <div className="absolute top-0 left-0 z-20 w-[80px] md:w-[100px] lg:w-[120px]">
              <Image src={cornerImage} alt="Corner Design" className="w-full h-auto" />
            </div>
      <div className={`relative mt-10 flex justify-center items-center ${styles.gridContainerLayout}`}>
        <div className="flex flex-col justify-center">
          <h2 ref={headingRef} className={`absolute top-[25%] left-[0rem] ${styles.main_Heading}`}>Services</h2>
          <div ref={textRef} className="relative z-10 max-w-5xl text-left pb-8">
            <h3 className={`${styles.services_subHeading} text-[rgba(0,0,0,1)]`}>
              Let’s Have A Look At What We
            </h3>
            <h3 className={`${styles.services_subHeading} text-[rgba(0,0,0,1)]`}>
              Have to{" "}
              <span className="bg-gradient-to-br from-[#ef3b26] via-[#eb4624] to-[#f48752] text-transparent bg-clip-text">
                Offer!
              </span>
            </h3>
          </div>
          <p className={styles.services_content}>
          At FidyPay, we provide you with many different kinds of payment methods that you can use in order to enhance your financial services and grant yourself and your customers the quality of life you need to take your business to the next level! Some of our most popular options are:
          </p>
          <Link href="">
            <button className="mt-6 px-6 py-2 bg-[rgba(239,59,38,1)] text-white font-[Rajdhani-Regular] rounded-full shadow-lg transition-transform hover:scale-105">
              Get Started
            </button>
          </Link>
        </div>

        <div className={`${styles.gridContainer}`}>
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`${styles.serviceCard} ${styles[`card${index + 1}`]}`}
            >
              <div className="flex items-center gap-3">
                <Image src={service.icon} alt={service.title} className="w-14 h-14 text-xl" />
                <span className={styles.servicesCard_title}>{service.title}</span>
              </div>
              <button>
                <Image src={nextBtn} alt="Next" width={40} height={40} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
