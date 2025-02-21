"use client";
import React from "react";
import styles from "./css/partenersSection.module.css";
import partener1Img from "@/assets/home/partenersImages/partener1.png";
import partener2Img from "@/assets/home/partenersImages/partener2.png";
import partener3Img from "@/assets/home/partenersImages/partener3.png";
import partener4Img from "@/assets/home/partenersImages/partener4.png";
import partener5Img from "@/assets/home/partenersImages/partener5.jpg";
import partener6Img from "@/assets/home/partenersImages/partener6.png";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PartenersSection = () => {
  const partners = [
    { name: "YES BANK", img: partener1Img },
    { name: "NPCI", img: partener2Img },
    { name: "Kotak", img: partener3Img },
    { name: "Signzy", img: partener4Img },
    { name: "Pine Labs", img: partener5Img },
    { name: "World Line", img: partener6Img },
  ];

  const settings = {
    infinite: true,
    speed: 5000, // Slower and smooth movement
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Ensures continuous movement
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 5 } },
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="bg-[rgba(246,249,248,1)] py-8 px-2 md:px-8 lg:px-8">
      <h2 className={`${styles.partenersSection_Heading} text-center mb-6`}>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF3B26] via-[#EB4624] to-[#F48752]">
          Our Partners
        </span>
      </h2>

      <Slider {...settings} className={`${styles.partnerSlider}`}>
        {partners.map((partner, index) => (
          <div key={index} className="slick-slide">
            <div className={`p-3 border rounded-md ${styles.partnerCard}`}>
              <Image
                src={partner.img}
                alt={partner.name}
                className="w-full h-20 bg-white p-2 rounded-md"
                width={200}
                height={20}
              />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default PartenersSection;
