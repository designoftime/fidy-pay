import React from "react";
import styles from "./css/whyUsSection.module.css";
import Image from "next/image";
import whyUsCard1Img from "@/assets/home/whyUsImages/card1Img.png";
import card1Svg from "@/assets/svgs/whyUsSection/card1.svg";
import whyUsCard2Img from "@/assets/home/whyUsImages/card2Img.png";
import whyUsCard3Img from "@/assets/home/whyUsImages/card3Img.png";
import whyUsCard4Img from "@/assets/home/whyUsImages/card4Img.png";
import Link from "next/link";
const WhyUsSection = () => {
  return (
    <section className={`relative ${styles.whyUs_section}`}>
      <h2 className={`absolute top-12 left-10 ${styles.main_Heading}`}>
        Why Us?
      </h2>
      <div className="relative z-10 max-w-5xl text-left pb-8">
        <h3 className="text-4xl font-bold text-[rgba(0,0,0,1)]">
          <span className="text-[rgba(0,0,0,1)]">
            Choose FidyPay to Adopt <br />{" "}
          </span>
          <span className="bg-gradient-to-br from-[#ef3b26] via-[#eb4624] to-[#f48752] text-transparent bg-clip-text">
            Seamless Fintech Solutions
          </span>
        </h3>
      </div>
      <div className={styles.whyUsCard_content}>
        <div className={styles.whyUsCard_section1}>
          <div className="w-[375px]">
            <Image src={whyUsCard1Img} alt="" width="100%" height="100%" />
          </div>
          <div className={styles.whyUsCard1Content}>
            <Image src={card1Svg} alt="" width={42} height={42} />
            <h3>Secure Services</h3>
            <p>
              All of the products we develop are compliant with the industry
              standards. Moreover, they are updated periodically with the latest
              security measures to ensure client and consumer data is safe over
              the platform.
            </p>
          </div>
        </div>
        <div className={styles.whyUsCard_section2}>
          <div className={styles.whyUsCard_section2_card1}>
            <div className={styles.whyUsCard_section2_card1_content}>
              <Image src={card1Svg} alt="" width={42} height={42} />
              <h3>Immediate Solutions for Developers Around India</h3>
              <p>
                We have APIs ready to deploy as soon as the need comes. These
                APIs have been designed in the best way to ensure that customers
                don’t have to go through the issues of finance while making
                their payments. We integrate technology and finance solutions to
                create the best options for clients. With our API solutions,
                your business can thrive and grow successfully.
              </p>
            </div>

            <Image src={whyUsCard2Img} alt="" width="100%" height="100%" />
          </div>
          <div className={styles.whyUsCard_section2_card2}>
            <div className={styles.whyUsCard_section2_card2_content}>
              <Image src={card1Svg} alt="" width={42} height={42} />
              <h3>Scalable Products</h3>
              <p>
                Our products are customisable and are aligned to meet your
                business goals. We understand your business objectives might
                change in the long run. No worries, as we can help upgrade the
                APIs to accommodate your new service needs on demand. 
              </p>
            </div>
            <div>
              <Image src={whyUsCard3Img} alt="" width="100%" height="100%" />
            </div>
          </div>
        </div>
        <div className={styles.whyUsCard_section3}>
          <div className={styles.whyUsCard_section3_card1}>
            <div className={styles.whyUsCard_section3_card1_content}>
              <h3>100%</h3>
              <h3>Customizable Solutions</h3>
              <p>
                To ensure your business stands out in the market, our APIs can
                be tuned to meet the purpose. 
              </p>
            </div>
          </div>
          <div className={styles.whyUsCard_section3_card2}>
            <div className={styles.whyUsCard_section3_card2_content}>
              <Image src={card1Svg} alt="" width={42} height={42} />
              <h3>Commercial Payment</h3>
            </div>
            <div>
              <Image src={whyUsCard4Img} alt="" width="100%" height="400px" />
            </div>
          </div>
          <div className={styles.whyUsCard_section3_card3}>
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
