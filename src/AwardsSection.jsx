// AwardsSection.jsx
import React, { useState } from "react";
import Awards from "./awards.png";
import Awards1 from "./awards.png";
import Awards2 from "./awardsb.png";
import Awards3 from "./awardsc.png";

const tabs = ["Awards & Certifications", "Knowledge Center"];

const awards = [
  {
    year: "2022-23",
    title: "Best Hospital for Reproductive Medicine...",
    subtitle: "Business Excellence and Research Group (BERG) Singapore.",
    image: Awards,
  },
  {
    year: "2016-17",
    title: "World's Greatest Brand & World's Greatest Leaders",
    subtitle: "URS and ASIA ONE in Dubai.",
    image: Awards1,
  },
  {
    year: "2017-18",
    title: "India's Fastest Growing Brand in IVF",
    subtitle: "URS and ASIA ONE in Dubai.",
    image: Awards2,
  },
  {
    year: "2023-24",
    title: "The Number 1 IVF Centre for Emerging IVF Centre Category",
    subtitle: "The Times of India.",
    image: Awards3,
  },
];

export default function AwardsSection() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="bg-gray-50 pt-[42px] md:pt-[84px] mx-0 px-4 md:px-[80px] lg:px-[120px] pb-[60px]">
      <div className=" mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left column: heading + tabs (always first visually) */}
          <div>
            <span className="inline-block bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full">
              Featured News & Media
            </span>

            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
              In the News <br /> On the Web
            </h2>

          {/* Tabs */}
          <div className="mt-6 space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`block font-[Manrope] text-[18px] md:text-[32px] font-normal leading-[40px] tracking-[-0.64px] ${
                  activeTab === tab
                    ? "text-[#1656A5] border-b-2 border-[#1656A5] pb-1"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

          {/* Right column: tab content */}
          <div>
            {activeTab === "Awards & Certifications" ? (
              <div className="mt-2">
                {/* Grid: single column on mobile, two columns from sm/md */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {awards.map((award, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl shadow-sm overflow-hidden transition hover:shadow-md"
                    >
                      <div className="w-full h-44 sm:h-40 md:h-44 lg:h-48 overflow-hidden">
                        <img
                          src={award.image}
                          alt={award.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="p-4 sm:p-5">
                        <div className="flex justify-between text-xs text-gray-400 mb-2">
                          <span>{award.year}</span>
                          <span>Awards</span>
                        </div>

                        <h3 className="text-sm md:text-base lg:20 font-regular text-[000000] mb-2">
                          {award.title}
                        </h3>

                        <p className="text-sm text-[#606060]">{award.subtitle}</p>
                      </div>
                    </article>
                  ))}
                </div>
                {/* simple pager / arrows for mobile if desired (kept minimal) */}
                {/* <div className="mt-6 flex items-center gap-3">
                  <button className="w-10 h-10 rounded-lg border border-blue-600 text-blue-600 bg-white flex items-center justify-center">
                    ←
                  </button>
                  <button className="w-10 h-10 rounded-lg border border-blue-600 text-blue-600 bg-white flex items-center justify-center">
                    →
                  </button>
                </div> */}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Knowledge Center</h4>
                <p className="text-sm text-gray-600">
                  Articles, guides and patient resources will appear here. (Replace this
                  placeholder with your real content.)
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
