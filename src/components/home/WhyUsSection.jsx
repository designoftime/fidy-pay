"use client";
import React, { useEffect, useRef } from "react";
import styles from "./css/whyUsSection.module.css";
import Image from "next/image";
import whyUsCard1Img from "@/assets/home/whyUsImages/card1Img.png";
import card1Svg from "@/assets/svgs/whyUsSection/card1.svg";
import whyUsCard2Img from "@/assets/home/whyUsImages/card2Img.png";
import whyUsCard3Img from "@/assets/home/whyUsImages/card3Img.png";
import whyUsCard4Img from "@/assets/home/whyUsImages/card4Img.png";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import cornerImage from "@/assets/svgs/trustSecuritySection/square.svg";

gsap.registerPlugin(ScrollTrigger);
const WhyUsSection = () => {
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const cardRefs = useRef([]);
  useEffect(() => {
    const heading = headingRef.current;
    const text = textRef.current;
    if (heading && text) {
      gsap.from(heading, {
        x: 100,
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
        x: -100,
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
    }
  
    const animations = [
      {  scale: 0.5, opacity: 0 }, 
      { opacity: 0, x: -70, rotate: -20, scale: 0.8 }, 
      { opacity: 0, x: 70, rotate: 20, scale: 0.8 }, 
      { scale: 0.7, opacity: 0 }, 
      { y: 50, opacity: 0 }, 
      { scale: 0.7, opacity: 0 }, 
    ];

    cardRefs.current.forEach((card, index) => {
      gsap.from(card, {
        ...animations[index],
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 60%",
          toggleActions: "play reverse play reverse",
        },
      });
    });
  }, []);
  return (
    <section className={`relative ${styles.whyUs_section}`}>
      {/* Top Right Corner Design Element */}
            <div className="absolute top-0 right-0 z-20 w-[80px] md:w-[100px] lg:w-[120px]">
              <Image src={cornerImage} alt="Corner Design" className="w-full h-auto" />
            </div>
      <h2
        ref={headingRef}
        className={`absolute top-12 left-10 ${styles.main_Heading}`}
      >
        Why Us?
      </h2>
      <div
        ref={textRef}
        className="relative z-10 max-w-5xl text-left pb-8 pt-12 lg:pt-16"
      >
        <h3 className="text-[2rem] md:text-4xl lg:text-4xl font-[Rajdhani-Regular] font-[600] text-black">
          <span className="text-[rgba(0,0,0,1)]">
            Choose FidyPay to Adopt <br />{" "}
          </span>
          <span className="bg-gradient-to-br from-[#ef3b26] via-[#eb4624] to-[#f48752] text-transparent bg-clip-text">
            Seamless Fintech Solutions
          </span>
        </h3>
      </div>
      <div className={styles.whyUsCard_content}>
        <div className={styles.whyUsCard_section1} ref={(el) => (cardRefs.current[0] = el)}>
          <div className="w-[375px]">
            <Image src={whyUsCard1Img} alt="" width="100%" height="100%" />
          </div>
          <div className={styles.whyUsCard1Content}>
            <Image src={card1Svg} alt="" width={42} height={42} />
            <h3>Secure Services</h3>
            <p>
              We make certain that the products made by us are not only
              compliant with all industry standards, but also go above and
              beyond to make sure that there is no breach of security or threat
              to the client or customer’s private data by periodically updating
              our services with the latest security measures.
            </p>
          </div>
        </div>
        <div className={styles.whyUsCard_section2}>
          <div className={styles.whyUsCard_section2_card1} ref={(el) => (cardRefs.current[1] = el)}>
            <div className={styles.whyUsCard_section2_card1_content}>
              <Image src={card1Svg} alt="" width={42} height={42} />
              <h3>Immediate Solutions for Developers Around India</h3>
              <p>
                We have ready made, instantly available API services that can
                suit your needs and be deployed at the drop of a hat without
                wasting time so that your customers can make financial
                transactions without any roadblocks and your business can begin
                thriving.
              </p>
            </div>

            <Image src={whyUsCard2Img} alt="" width="100%" height="100%" />
          </div>
          <div className={styles.whyUsCard_section2_card2} ref={(el) => (cardRefs.current[2] = el)}>
            <div className={styles.whyUsCard_section2_card2_content}>
              <Image src={card1Svg} alt="" width={42} height={42} />
              <h3>Scalable Products</h3>
              <p>
                Our products are created to be malleable and flexible enough to
                change in scope and scale on demand so that we can accommodate
                for all of your needs even if your business goals and objectives
                change overtime.
              </p>
            </div>
            <div>
              <Image src={whyUsCard3Img} alt="" width="100%" height="100%" />
            </div>
          </div>
        </div>
        <div className={styles.whyUsCard_section3}>
          <div className={styles.whyUsCard_section3_card1} ref={(el) => (cardRefs.current[3] = el)}>
            <div className={styles.whyUsCard_section3_card1_content}>
              <h3>100%</h3>
              <h3>Customizable Solutions</h3>
              <p>
                We further ensure that our APIs are capable of being 100%
                personalized and fine tuned at the point of inception to meet
                any unique need your business may have so that it can flourish
                as naturally as possible.
              </p>
            </div>
          </div>
          <div className={styles.whyUsCard_section3_card2} ref={(el) => (cardRefs.current[4] = el)}>
            <div className={styles.whyUsCard_section3_card2_content}>
              <Image src={card1Svg} alt="" width={42} height={42} />
              <h3>Commercial Payment</h3>
              <p>
                Additionally, we have ensured that our services can be moulded
                to suit your needs in case your business finds itself making
                regular payments to employees or other businesses for anything
                from salaries, wages and employee expenses to superannuation
                alike.
              </p>
            </div>
            <div>
              <Image src={whyUsCard4Img} alt="" width="100%" height="400px" />
            </div>
          </div>
          <div className={styles.whyUsCard_section3_card3} ref={(el) => (cardRefs.current[5] = el)}>
            <div className={styles.whyUsCard_section3_card3_content}>
              <h3>Visit Our Services page</h3>
              <Link href="#" className="mx-auto">
                <button
                  className={`mt-6 px-6 py-3 rounded-full shadow-lg transition-transform hover:scale-105 ${styles.readMore_btn}`}
                >
                  READ MORE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
