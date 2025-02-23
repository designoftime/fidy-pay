import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"; // Importing menu and close icons
import Image from "next/image";
import Link from "next/link";
import headerLogo from "@/assets/header/image.png";

const MobileHeader = ({ navLinks }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-[rgba(255,255,255,1)] py-4 px-6 z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image src={headerLogo} alt="Logo" width={120} height={70} />
        </Link>

        {/* Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="text-[rgba(48,48,48,1)] text-3xl"
        >
          <RiMenu3Line />
        </button>
      </div>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-[rgba(255,255,255,1)] text-[rgba(48,48,48,1)] transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center p-6">
          {/* Logo */}
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Image src={headerLogo} alt="Logo" width={120} height={70} />
          </Link>
          {/* Close Button */}
          <button onClick={() => setIsOpen(false)} className="text-3xl">
            <RiCloseLine />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="mt-6">
          <ul className="flex flex-col space-y-6 text-lg px-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href} onClick={() => setIsOpen(false)}>
                  {link.isButton ? (
                    <button className="bg-[rgba(239,59,38,1)] text-[rgba(255,255,255,1)] px-4 py-2 rounded-full hover:bg-gray-200">
                      {link.name}
                    </button>
                  ) : (
                    <span className="hover:text-gray-400">{link.name}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MobileHeader;
