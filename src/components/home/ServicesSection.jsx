import React from "react";
import styles from "./css/servicesSection.module.css";
import Image from "next/image";
import nextBtn from "@/assets/svgs/servicesSection/nextArrow.svg";
import card1Img from "@/assets/svgs/servicesSection/card1.svg";
import card2Img from "@/assets/svgs/servicesSection/card2.svg";
import card3Img from "@/assets/svgs/servicesSection/card3.svg";
import card4Img from "@/assets/svgs/servicesSection/card4.svg";
import Link from "next/link";
const ServicesSection = () => {
  const services = [
    { title: "API Banking", icon: card1Img },
    { title: "BBPS", icon: card2Img },
    { title: "UPI QR", icon: card3Img },
    { title: "eNACH", icon: card3Img },
    { title: "Sound Box", icon: card3Img },
    { title: "eKYC", icon: card4Img },
    { title: "Customized POS", icon: card4Img },
    { title: "Prepaid Cards", icon: card4Img },
    { title: "Prepaid Cards", icon: card2Img },
  ];

  return (
    <section className={`bg-[rgba(246,249,248,1)] ${styles.servicesSection}`}>
      {/* Services List */}
      <div className={`relative mt-10 flex justify-center items-center ${styles.gridContainerLayout}`}>
        <div className="flex flex-col justify-center">
          <h2 className={`absolute top-[21%] left-[7rem] ${styles.main_Heading}`}>
            Services
          </h2>
          <div className="relative z-10 max-w-5xl text-left pb-8">
            <h3 className={`${styles.services_subHeading} text-[rgba(0,0,0,1)]`}>
              <span className="text-[rgba(0,0,0,1)]">
                Let’s Have A Look At What We
              </span>{" "}
            </h3>
            <h3 className={`${styles.services_subHeading} text-[rgba(0,0,0,1)]`}>
              Have to{" "}
              <span className="bg-gradient-to-br from-[#ef3b26] via-[#eb4624] to-[#f48752] text-transparent bg-clip-text">
                Offer!
              </span>
            </h3>
          </div>
          {/* Description Text */}
          <p className={styles.services_content}>
            FidyPay is among the stand-out BaaS platform providers for your
            business to enable financial services through the plug & play APIs.
            It means your app will be ready to deliver the desired services
            quickly! Let’s see what we have to offer for your business idea:
          </p>
          <Link href="">
            <button className="mt-6 px-6 py-2 bg-[rgba(239,59,38,1)] text-white font-[Rajdhani-Regular] rounded-full shadow-lg transition-transform hover:scale-105 ">
              Get Started
            </button>
          </Link>
        </div>

        {/* Services List */}
        <div className={`${styles.gridContainer}`}>
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className={`${styles.serviceCard} ${
                  styles[`card${index + 1}`]
                }`}
              >
                <div className="flex items-center gap-3">
                  <Image src={service.icon} alt="" className="w-14 h-14 text-xl" />
                  <span className={styles.servicesCard_title}>
                    {service.title}
                  </span>
                </div>
                <button>
                  <Image src={nextBtn} alt="Previous" width={40} height={40} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
