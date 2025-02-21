"use client";
import { useState, useEffect } from "react";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

const Header = () => {
  // Define the header options dynamically
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about_us" },
    { name: "Services", href: "/" },
    { name: "Portfolio", href: "/" },
    { name: "Blog", href: "/" },
    { name: "Contact", href: "/", isButton: true },
  ];
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1025);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isDesktop ? (
    <DesktopHeader navLinks={navLinks} />
  ) : (
    <MobileHeader navLinks={navLinks} />
  );
};

export default Header;
