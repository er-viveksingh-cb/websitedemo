import React, { useState } from "react";
import { Search, Menu, X, ChevronDown } from "lucide-react";

// Import your assets
import call from "./call.svg";
import image1001978364 from "./about-image.jpg";
import image from "./calla.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { label: "About Us", href: "#about", hasMegaMenu: true },
    { label: "Infertility", href: "#infertility" },
    { label: "Our Centers", href: "#centers" },
    { label: "Treatments", href: "#treatments" },
    { label: "Doctors", href: "#doctors" },
    { label: "Success Stories", href: "#success" },
    { label: "Patient Resources", href: "#resources" },
    { label: "Careers", href: "#careers" },
  ];

  const discoverUsItems = [
    "Our Story",
    "Our Approach",
    "Our Vision & Mission",
    "Why choose us",
    "Leadership Team",
    "Impact & Growth",
    "FAQs",
  ];

  const quickLinksItems = [
    { title: "Take a Quiz" },
    { title: "Our Specialists" },
    { title: "Online Consult" },
  ];

  const additionalLinksItems = [
    { title: "EMI Options" },
    { title: "Fellowship" },
    { title: "Our Centers" },
    { title: "Our Social Impact" },
  ];

  const phoneNumbers = [
    { number: "+91 94239 71260", icon: call },
    { number: "+91 70309 44041", icon: image },
  ];

  return (
    <header className="w-full bg-white border-b shadow-sm font-sans ">
      <div className=" mx-auto flex items-center justify-between h-20 px-4 md:px-[80px] lg:px-[120px]">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Progenesis Logo"
            className="w-[120px] h-[41.52px] md:w-[180px] md:h-[41.52px]   object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navigationItems.map((item, index) => (
            <div key={index} className="relative group">
              <button
                className={`flex items-center space-x-1 text-base font-medium px-1 py-2 rounded-md transition
                    ${
                      item.hasMegaMenu
                        ? "group-hover:bg-blue-600 group-hover:text-white"
                        : "hover:text-blue-600 text-gray-800"
                    }`}
              >
                {item.label}
                {item.hasMegaMenu && <ChevronDown size={16} />}
              </button>

              {/* Mega Menu for About Us */}
              {item.hasMegaMenu && (
            
<div
  className="absolute -left-28 top-[104px] mt-2 hidden group-hover:flex
             bg-white shadow-lg rounded-2xl p-6
             max-w-[1646px] h-[468px]"
>


                  {/* Left Image */}
                  <div className="w-[375px] h-[388px] rounded-lg overflow-hidden mr-8">
                    <img
                      src={image1001978364}
                      alt="About Us"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* Divider */}
                  <div
                    style={{
                      width: "1px",
                      height: "500px",
                      background: "rgba(22, 86, 165, 0.05)",
                    }}
                    className="mx-6"
                  />

                  {/* Discover Us */}
                  <div className="w-[232px] mr-8">
                    <h2 className="text-[28px] font-medium mb-6">
                      Discover Us
                    </h2>
                    <ul className="space-y-3">
                      {[
                        "Our Story",
                        "Our Approach",
                        "Our Vision & Mission",
                        "Why choose us",
                        "Leadership Team",
                        "Impact & Growth",
                        "FAQs",
                      ].map((title, i) => (
                        <li
                          key={i}
                          className={`text-sm hover:text-blue-600 ${
                            i === 0
                              ? "text-blue-600 font-semibold"
                              : "text-gray-800"
                          }`}
                        >
                          {title}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Divider */}
                  <div
                    style={{
                      width: "1px",
                      height: "500px",
                      background: "rgba(22, 86, 165, 0.05)",
                    }}
                    className="mx-6"
                  />

                  {/* Quick Links */}
                  <div className="w-[232px] mr-8">
                    <h2 className="text-[28px] font-medium mb-6">
                      Quick Links
                    </h2>

                    <button className="flex items-center justify-between w-full bg-blue-600 text-white px-4 py-2 rounded-lg mb-3">
                      Book Appointment
                      <div className="w-3 h-3" /> {/* placeholder for arrow */}
                    </button>

                    <div className="space-y-3 mb-4">
                      {[
                        { number: "+91 94239 71260", icon: call },
                        { number: "+91 70309 44041", icon: image },
                      ].map((phone, idx) => (
                        <a
                          key={idx}
                          href={`tel:${phone.number}`}
                          className="flex items-center gap-3 px-3 py-2 bg-gray-50 rounded-lg hover:bg-gray-100"
                        >
                          <img
                            src={phone.icon}
                            alt="call"
                            className="w-6 h-6"
                          />
                          <span>{phone.number}</span>
                        </a>
                      ))}
                    </div>

                    {["Take a Quiz", "Our Specialists", "Online Consult"].map(
                      (link, idx) => (
                        <button
                          key={idx}
                          className="flex items-center justify-between w-full px-3 py-2 rounded-full hover:bg-gray-50"
                        >
                          {link}
                          <div className="w-3 h-3" /> {/* placeholder */}
                        </button>
                      )
                    )}
                  </div>

                  {/* Divider */}
                  <div
                    style={{
                      width: "1px",
                      height: "500px",
                      background: "rgba(22, 86, 165, 0.05)",
                    }}
                    className="mx-6"
                  />

                  {/* Additional Links */}
                  <div className="w-[232px]">
                    {[
                      "EMI Options",
                      "Fellowship",
                      "Our Centers",
                      "Our Social Impact",
                    ].map((link, idx) => (
                      <button
                        key={idx}
                        className="flex items-center justify-between w-full px-3 py-2 rounded-full hover:bg-gray-50"
                      >
                        {link}
                        <div className="w-3 h-3" /> {/* placeholder */}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-1 px-3 py-2 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-800 text-sm font-medium">
            <span>En</span>
            <ChevronDown size={14} />
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-xl bg-gray-50 hover:bg-gray-100"
          >
            <Search size={20} className="text-gray-800" />
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-600"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
