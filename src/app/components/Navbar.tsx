"use client";
import React, { useState } from "react";
import { FaCoffee } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#menu", label: "Menu" },
    { href: "#about", label: "About" },
    { href: "#products", label: "Products" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 right-0 bg-gradient-to-r z-50 from-[#4b2e2b] via-[#8a664c] to-[#fdf6e3] text-white ">
      <div className="w-full max-w-7xl mx-auto px-4 h-18 flex items-center justify-between">
        {/*logo*/}
        <div className="flex items-center gap-3">
          <FaCoffee className="text-white size-5 md:size-7" />
          <p className="text-lg md:text-2xl font-bold font-mono">Caffinity</p>
        </div>

        {/*mobile button*/}
        <button
          className="absolute top-5 right-4 md:hidden text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX size={25} /> : <HiMenu size={25} />}
        </button>

        {/*nav links*/}
        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((link, key) => (
            <a
              key={key}
              className={`text:xl font-bold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0
                          hover:after:w-full after:bg-white after:transition-all ${
                            activeLink === link.href
                              ? "text-white after:w-full text-lg"
                              : "text-black text-lg"
                          }`}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>
        {/*login button*/}
        <button className="hidden md:flex bg-[#4b2e2b] px-5 py-2 text-white rounded-2xl font-bold hover:bg-[#573936] border-white border-2">
          Register
        </button>
      </div>

      {/*mobile menu*/}
      {isMenuOpen && (
        <div className="md:hidden w-full bg-gradient-to-b from-[#4b2e2b] via-[#b68c6d] to-[#fdf6e3] text-black p-3">
          <div className="w-full max-w-6xl mx-auto px-4 flex flex-col space-y-4">
            {navLinks.map((link, key) => (
              <a
                key={key}
                href={link.href}
                className={`block text-md font-medium py-1 ${
                  activeLink === link.href ? "black" : "text-black"
                }`}
                onClick={() => {
                  setActiveLink(link.href), setIsMenuOpen(false);
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
