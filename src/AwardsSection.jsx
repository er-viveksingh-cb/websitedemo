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

const AwardsSection = () => {
  const [activeTab, setActiveTab] = useState("Awards & Certifications");

  return (
    <section className="py-20 bg-gray-50 pl-[120px] pr-[250px] ">
      <div className=" mx-auto px-6 grid lg:grid-cols-2 gap-12">
        {/* Left Side */}
        <div>
          <span className="text-sm px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-medium">
            Featured News & Media
          </span>
          <h2 className="mt-4 text-[#2C2C2C] font-[Manrope] text-[48px] font-normal leading-[56px] tracking-[-0.96px]">
            In the News & <br /> On the Web
          </h2>

          {/* Tabs */}
          <div className="mt-6 space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`block font-[Manrope] text-[32px] font-normal leading-[40px] tracking-[-0.64px] ${
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

        {/* Right Side Grid */}
        <div>
          {activeTab === "Awards & Certifications" ? (
            <div className="grid sm:grid-cols-2 gap-6">
              {awards.map((award, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-sm p-4 hover:shadow-lg transition"
                >
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-40 object-cover rounded-xl mb-4"
                  />
                  <div className="text-sm text-gray-500 flex justify-between">
                    <span>{award.year}</span>
                    <span>Awards</span>
                  </div>
                  <h3 className="mt-2 font-medium text-gray-900">
                    {award.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{award.subtitle}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 bg-white rounded-2xl shadow text-gray-600">
              📚 Knowledge Center content will go here...
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
