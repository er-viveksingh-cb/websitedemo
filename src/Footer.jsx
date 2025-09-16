// Footer.jsx
import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Footerimage from "./footer.png";
import Logo from "./logo.svg"; // replace or keep '/logo.png' if you serve it from public/

export default function Footer() {
  return (
    <footer
      className="relative w-full bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${Footerimage})` }}
      aria-labelledby="footer-heading"
    >
      {/* dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* Top content: Logo + Tagline + Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo + Tagline (spans 1 col on mobile, 1 col on md) */}
          <div className="flex flex-col items-start md:items-start">
            <img src={Logo} alt="Progenesis Logo" className="h-10 mb-4" />
            <p
              className="text-sm md:text-base text-white/90 max-w-md leading-relaxed"
              id="footer-heading"
            >
              Aiming to be the benchmark for reproductive health care services.
            </p>
          </div>

          {/* Link columns: show as two columns on md+; on mobile they stack below logo */}
          <div className="md:col-span-2 grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-white text-sm font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3 text-white/80 text-sm">
                <li><a href="#" className="hover:text-white">International Patients</a></li>
                <li><a href="#" className="hover:text-white">EMI Options</a></li>
                <li><a href="#" className="hover:text-white">Our Centers</a></li>
                <li><a href="#" className="hover:text-white">About Us</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-sm font-semibold mb-4">Additional Links</h3>
              <ul className="space-y-3 text-white/80 text-sm">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Fellowships</a></li>
                <li><a href="#" className="hover:text-white">Second Opinion</a></li>
                <li><a href="#" className="hover:text-white">Blogs</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* separator */}
        <div className="border-t border-white/10 my-8" />

        {/* bottom row: social + copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-white/80 text-center md:text-left">
            © {new Date().getFullYear()} All Rights Reserved. Progenesis Fertility Center.
          </p>

          <div className="flex items-center gap-5">
            <a href="#" aria-label="LinkedIn" className="text-white/80 hover:text-white">
              <Linkedin size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="text-white/80 hover:text-white">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="Facebook" className="text-white/80 hover:text-white">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="text-white/80 hover:text-white">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* small bottom band to mirror screenshot shadowed footer base */}
      <div className="absolute left-0 right-0 bottom-0 h-8 bg-black/25" />
    </footer>
  );
}
