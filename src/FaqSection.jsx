import React, { useState } from "react";

const categories = [
  "General",
  "Pricing & Packages",
  "Treatment-Specific",
  "Fertility-Related",
  "Others",
];

const faqs = {
  General: [
    {
      q: "What is infertility?",
      a: "Inability to get pregnant after a year under 35, or 6 months over 35, may indicate infertility. Consult a fertility specialist to determine the cause and get treatment.",
    },
    {
      q: "What causes infertility?",
      a: "It can be caused by issues in either partner or both. Medical evaluation is required.",
    },
    {
      q: "What can cause infertility in Women?",
      a: "Common causes include ovulation disorders, blocked fallopian tubes, endometriosis, and age-related factors.",
    },
    {
      q: "How Common is Infertility?",
      a: "Roughly 1 in 8 couples experience infertility issues globally.",
    },
    {
      q: "What can cause infertility in Men?",
      a: "Low sperm count, poor motility, lifestyle factors, and hormonal imbalances.",
    },
    {
      q: "When should I seek consultation for infertility?",
      a: "If you’ve been trying for over a year (or 6 months if over 35), it’s time to consult a specialist.",
    },
  ],
  "Pricing & Packages": [
    {
      q: "Do you offer EMI options?",
      a: "Yes, flexible EMI options are available for most treatments.",
    },
    {
      q: "What is included in a treatment package?",
      a: "Packages usually include consultations, medications, lab tests, and procedures. Details vary.",
    },
  ],
  "Treatment-Specific": [
    {
      q: "What is IVF?",
      a: "IVF is In-Vitro Fertilization, a process where eggs are fertilized outside the body and implanted into the uterus.",
    },
    {
      q: "Is IUI different from IVF?",
      a: "Yes, IUI (Intrauterine Insemination) is less invasive and involves placing sperm directly into the uterus.",
    },
  ],
  "Fertility-Related": [
    {
      q: "Does age affect fertility?",
      a: "Yes, fertility declines significantly after age 35 for women and after 40 for men.",
    },
  ],
  Others: [
    {
      q: "Do you provide counseling?",
      a: "Yes, emotional and psychological support is part of our care approach.",
    },
  ],
};

const FaqSection = () => {
  const [activeCategory, setActiveCategory] = useState("General");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50 px-[120px]">
      <div className=" mx-auto px-6 grid lg:grid-cols-2 gap-12">
        {/* Left Text */}
        <div className="w-[410px]"> 
          <span
  className="text-[14px] px-3 py-1 
             rounded-[50px] 
             bg-[rgba(22,86,165,0.05)] 
             text-[#1656A5] 
             font-[Manrope] font-normal leading-[24px] tracking-[-0.28px]"
>
  FAQ’s
</span>

          <h2 className="mt-4 font-[Manrope] text-[48px] font-normal leading-[56px] tracking-[-0.96px] text-[#2C2C2C]">
            Quick answers to the{" "}
            <span className="text-[#94BA3D] font-[Manrope] text-[48px] font-normal leading-[56px] tracking-[-0.96px]">
              most common fertility-related questions.
            </span>
          </h2>

          <p className="mt-4 font-[Manrope] text-[16px] font-normal leading-[24px] tracking-[-0.32px] text-[rgba(44,44,44,0.50)]">
            Didn’t find what you are looking for? <br/> Checkout{" "}
            <a
              href="#"
              className="text-[#1656A5] font-[Manrope] text-[16px] font-semibold leading-[24px] tracking-[-0.32px] underline"
            >
              Patient Resources
            </a>{" "}
            section to know more.
          </p>
        </div>

        {/* Right FAQ */}
        <div>
          {/* Tabs */}
<div className="flex flex-wrap gap-3 mb-6">
  {categories.map((cat) => (
    <button
      key={cat}
      onClick={() => {
        setActiveCategory(cat);
        setOpenIndex(null);
      }}
      className={`px-5 py-2 rounded-[16px] transition font-[Manrope] text-[14px] leading-[24px] tracking-[-0.28px] 
        ${
          activeCategory === cat
            ? "bg-[#1656A5] text-white backdrop-blur-[7.5px]"
            : "border border-[#1656A5] text-[#1656A5] hover:bg-blue-50"
        }`}
    >
      {cat}
    </button>
  ))}
</div>


       {/* Accordion */}
<div className="space-y-3">
  {faqs[activeCategory].map((item, idx) => (
    <div
      key={idx}
      className="bg-white rounded-[16px]"
    >
      {/* Question */}
      <button
        onClick={() => toggleFaq(idx)}
        className="w-full flex justify-between items-center px-6 py-4 text-left 
                   text-[#2C2C2C] font-[Manrope] text-[16px] font-normal 
                   leading-[24px] tracking-[-0.32px]"
      >
        {item.q}
        <span className="ml-2">{openIndex === idx ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M9 13L12 10L15 13" stroke="#2C2C2C" stroke-linecap="square" stroke-linejoin="round"/>
</svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M9 11L12 14L15 11" stroke="#2C2C2C" stroke-linecap="square" stroke-linejoin="round"/>
</svg>}</span>
      </button>

      {/* Answer */}
{openIndex === idx && (
  <div
    className="px-6 pb-4 mt-2 
               rounded-[50px] bg-white 
               text-[#2C2C2C] font-[Manrope] text-[16px] 
               font-normal leading-[24px] tracking-[-0.32px]"
  >
    {item.a}
  </div>
)}


    </div>
  ))}
</div>

        </div>
      </div>
    </section>
  );
};

export default FaqSection;
