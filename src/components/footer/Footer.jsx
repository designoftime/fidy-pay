import React from "react";
import styles from "./css/footer.module.css";
import heroImg from "@/assets/home/trustSecurityImages/backgroundImage.png";
import Image from "next/image";
import headerLogo from "@/assets/header/logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <section className={`relative w-[100%] bg-black ${styles.footer_section}`}>
      <div className="absolute top-0 bottom-0 inset-0 w-[100%] ">
        <Image
          src={heroImg}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
          priority
        />
      </div>
      <div className="relative z-10 flex flex-col gap-16 md:flex-row md:justify-between md:items-center mt-12">
        {/* Left Section */}
        <div className="text-white flex flex-col gap-4">
          <div>
            <Image src={headerLogo} alt="Logo" width={100} height={50} />
          </div>
          <div className="flex justify-start gap-20">
            <ul className={"mt-4 space-y-2"}>
              {[
                "Products",
                "Services",
                "Projects",
                "Expertise",
                "Case Studies",
              ].map((item) => (
                <li key={item} className={styles.navItem}>
                  {item}
                </li>
              ))}
            </ul>
            <ul className="mt-4 space-y-2">
              {["Careers", "Web Features", "FAQ", "Partners", "Contact Us"].map(
                (item) => (
                  <li key={item} className={styles.navItem}>
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="mt-4 flex space-x-4">
            <i className="fab fa-instagram text-lg"></i>
            <i className="fab fa-youtube text-lg"></i>
            <i className="fab fa-twitter text-lg"></i>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-[50%] mt-8 md:mt-0 relative">
          <h2 className={`absolute top-[-20%] ${styles.main_Heading}`}>
            get in touch
          </h2>
          <div className="relative z-10 text-left pb-4">
            <h3 className={`${styles.services_subHeading} `}>
              Ready to Discuss Your Project?
            </h3>
          </div>
          <form className="mt-6 space-y-4 flex flex-col md:ml-20">
            <input
              type="text"
              placeholder="Full Name*"
              className={styles.inputField}
            />
            <input
              type="email"
              placeholder="Your Email*"
              className={styles.inputField}
            />
            <Link href="">
            <button className="mt-6 px-6 py-2 bg-[rgba(239,59,38,1)] text-white font-[Rajdhani-Regular] rounded-full shadow-lg transition-transform hover:scale-105 ">
              Drop a message
            </button>
          </Link>
          </form>
        </div>
      </div>
      <p className={styles.bootomText}>
            All Rights Reserved © 2024 FidyPay
          </p>
    </section>
  );
};

export default Footer;
