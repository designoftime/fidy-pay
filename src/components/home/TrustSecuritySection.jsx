import React from "react";
import styles from "./css/trustSecuritySection.module.css";
import heroImg from "@/assets/home/trustSecurityImages/backgroundImage.png";
import Image from "next/image";
import trustworthyIcon from "@/assets/svgs/trustSecuritySection/trustworthyIcon.svg";
import youTubeVideoScreenShot from "@/assets/home/trustSecurityImages/image.png";
import cornerImage from "@/assets/svgs/trustSecuritySection/square.svg";

const TrustSecuritySection = () => {
  return (
    <section className={`${styles.trustSecuritySection} relative w-full bg-black mb-8`}>
      {/* Background Image */}
      <div className="absolute inset-0 w-full">
        <Image
          src={heroImg}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
          priority
        />
      </div>

      {/* Top Right Corner Design Element */}
      <div className="absolute top-0 right-0 z-20 w-[80px] md:w-[100px] lg:w-[120px]">
        <Image src={cornerImage} alt="Corner Design" className="w-full h-auto" />
      </div>

      {/* Tag Label */}
      <div className="relative z-10 flex flex-col gap-2 mb-8 md:items-start">
        <div className={`${styles.label} flex`}>
          <Image src={trustworthyIcon} alt="Trust Icon" width={20} height={20} />
          <h3 className="text-sm md:text-base">trustworthiness</h3>
        </div>

        {/* Heading */}
        <p className={`${styles.heading} md:text-left text-2xl md:text-4xl lg:text-5xl`}>
          We Value Trust And Security
        </p>
      </div>

      {/* Embedded YouTube Video */}
      <div className={`relative z-10 ${styles.videoContainer} w-full max-w-[900px] mx-auto px-4 md:px-0`}>
        <Image src={youTubeVideoScreenShot} alt="Video Thumbnail" className="w-full h-auto" />
      </div>
    </section>
  );
};

export default TrustSecuritySection;
