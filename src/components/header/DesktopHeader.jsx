"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import headerLogo from "@/assets/header/image.png";

const DesktopHeader = ({ navLinks }) => {
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        gsap.to(headerRef.current, {
          scaleX: 0.85,
          left: "0",
          top: "2%",
          borderRadius: "10px",
          padding: "10px 20px",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
          duration: 0.5,
          ease: "power2.out",
        });
    
        gsap.to(logoRef.current, {
          width: 90, // Reduce logo size
          duration: 0.5,
          ease: "power2.out",
        });
    
        // Reduce font size of each nav link
        gsap.to(navRef.current.querySelectorAll("span"), {
          fontSize: "16px", // Reduce font size
          duration: 0.5,
          ease: "power2.out",
        });
      } else {
        gsap.to(headerRef.current, {
          scaleX: 1,
          left: "0",
          top: "0",
          borderRadius: "0px",
          padding: "20px 40px",
          backgroundColor: "#fff",
          boxShadow: "none",
          duration: 0.5,
          ease: "power2.out",
        });
    
        gsap.to(logoRef.current, {
          width: 120, // Normal logo size
          duration: 0.5,
          ease: "power2.out",
        });
    
        // Restore font size of nav links
        gsap.to(navRef.current.querySelectorAll("span"), {
          fontSize: "16px",
          duration: 0.5,
          ease: "power2.out",
        });
      }
    };
    

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 w-full bg-white py-5 px-8 lg:px-20 z-50 shadow-md"
    >
      <div className="flex items-center justify-between">
        <div ref={logoRef}>
          <Image src={headerLogo} alt="Logo" width={120} height={70} />
        </div>

        <nav ref={navRef} className="hidden md:block">
          <ul className="flex items-center space-x-6 text-gray-800 text-lg">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>
                  <span className="hover:text-gray-400 transition-transform duration-200 hover:scale-105 font-[Poppins]">
                    {link.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button className="bg-red-500 font-[Poppins] text-white px-5 py-2 rounded-full hover:bg-gray-200 transition-all duration-300 ease-in-out transform hover:scale-105">
          Contact Us
        </button>
      </div>
    </header>
  );
};

export default DesktopHeader;
