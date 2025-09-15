import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Footerimage from "./footer.png";

const Footer = () => {
  return (
    <footer
      className="relative w-full bg-cover bg-center text-white pt-20 pb-10 px-10 md:px-20"
      style={{
        backgroundImage: `url(${Footerimage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 z-10 mb-[300px]">
        {/* Left - Logo + Tagline */}
        <div>
          <img
            src="/logo.png"
            alt="Progenesis Logo"
            className="h-14 mb-6"
          />
         
        </div>

        {/* Right - Links */}
        <div className="grid grid-cols-2 gap-10">
          <div>
            <h3 className="text-white font-[Manrope] text-[18px] font-semibold leading-[24px] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-200">
              <li><a href="#" className="hover:text-white">International Patients</a></li>
              <li><a href="#" className="hover:text-white">EMI Options</a></li>
              <li><a href="#" className="hover:text-white">Our Centers</a></li>
              <li><a href="#" className="hover:text-white">About Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-[Manrope] text-[18px] font-semibold leading-[24px] mb-4">
              Additional Links
            </h3>
            <ul className="space-y-3 text-gray-200">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Fellowships</a></li>
              <li><a href="#" className="hover:text-white">Second Opinion</a></li>
              <li><a href="#" className="hover:text-white">Blogs</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
       <p className=" text-gray-200 font-[Manrope] text-[20px] font-normal leading-[28px] tracking-[-0.32px] max-w-md">
            Aiming to be the benchmark for reproductive health care services.
          </p>
      <div className="relative border-t border-white/30 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between z-10">
        {/* Copyright */}
        <p className="ext-white font-[Manrope] text-[14px] leading-[24px] tracking-[-0.28px] text-center md:text-left">
          © 2025 All Rights Reserved. Progenesis Fertility Center
        </p>

        {/* Social Icons */}
        <div className="flex items-center space-x-6 mt-4 md:mt-0 text-gray-200">
          <a href="#" className="hover:text-white"><Linkedin size={22} /></a>
          <a href="#" className="hover:text-white"><Instagram size={22} /></a>
          <a href="#" className="hover:text-white"><Facebook size={22} /></a>
          <a href="#" className="hover:text-white"><Twitter size={22} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
