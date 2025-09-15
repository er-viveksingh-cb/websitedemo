import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import image1 from "./In-VitroFertilization.png"
import image2 from "./EggFreezingand Preservation.png"

const TreatmentsSection = () => {
  const treatments = [
    {
      title: "In-Vitro Fertilization (IVF)",
      description:
        "We offer you more than a procedure. We offer a chance. A chance to hold, to cradle, to begin.",
      image: image1,
    },
    {
      title: "Egg Freezing and Preservation",
      description:
        "Your journey is uniquely yours. Whenever you feel ready, we’ll be right here waiting for you.",
      image: image2,
    },
    {
      title: "Multiple IVF & IUI Failures",
      description:
        "Advanced care and tailored treatments to give fresh hope after repeated failed attempts.",
      image: image1,
    },
    {
      title: "Intrauterine Insemination (IUI)",
      description:
        "For some, the gentlest nudge is all it takes. We guide you with care and precision.",
      image: image2,
    },
    {
      title: "Male Fertility Solutions",
      description:
        "Fertility is not just a woman’s story. We’re here for every partner, every question, every step.",
      image: image1,
    },
    {
      title: "Pregnancy after Menopause",
      description:
        "Advanced techniques that make motherhood possible, even beyond menopause.",
      image: image1,
    },
  ];

  const [selected, setSelected] = useState(0);

  return (
    <section className="w-full bg-blue-50 pt-[84px] px-[120px] pb-[60px]">
      <div >
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-12">
          {/* Left */}
          <div className="max-w-2xl">
            <span className="inline-block text-sm font-medium text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-4">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Being India’s Best Fertility & IVF Center. We Specialize in:
            </h2>
            <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition">
              View all treatments
            </button>
          </div>

          {/* Right */}
          <div className="flex-1 pl-10">
  <p className="text-[#2C2C2C] text-[32px] leading-[40px] tracking-[-0.64px] font-[Manrope] font-normal">
    Our wide network of centers ensures you receive expert support closer to
    home, and closer to comfort. Our wide network of centers ensures
    <span className="text-[rgba(44,44,44,0.25)] text-[32px] leading-[40px] tracking-[-0.64px] font-[Manrope] font-normal">
      {" "}
      you receive expert support closer to home, and closer to comfort. Our wide
      network of centers ensures you receive expert support closer to home, and
      closer to comfort.
    </span>
  </p>
</div>

        </div>

        {/* Treatments Custom Layout */}
<div className="flex flex-wrap gap-6">
  {treatments.map((item, index) => {
    // ✅ custom widths from Figma
    const widths = [
      "w-[495px]", // card 1
      "w-[495px]", // card 2
      "w-[395px]", // card 3
      "w-[395px]", // card 4
      "w-[496px]", // card 5
      "w-[495px]", // card 6
    ];

    return (
     <div
  key={index}
  onClick={() => setSelected(index)}
  className={`relative cursor-pointer rounded-2xl p-6 h-[350px] flex items-center justify-between transition ${
    selected === index
      ? "border border-[#1656A5] bg-white"
      : "border border-transparent bg-white"
  } ${widths[index]}`} 
>
  {/* Left Side (Text) */}
  <div className="flex flex-col max-w-[250px] pt-[100px]">
    {/* Title */}
    <h3 className="text-[#2C2C2C] font-semibold font-[Manrope] text-[32px] leading-[40px] tracking-[-0.64px] mb-2">
      {item.title}
    </h3>

    {/* Description */}
    <p className="text-gray-600 text-sm leading-6">{item.description}</p>
  </div>

  {/* Right Side (Image) */}
  <div className="flex-shrink-0 -mt-[150px]">
    <img
      src={item.image}
      alt={item.title}
      className="max-h-[180px] w-[150px] object-contain"
    />
  </div>

  {/* Arrow Button */}
  <div
    className={`absolute top-4 left-4 w-8 h-8 flex items-center justify-center rounded-lg ${
      selected === index ? "bg-[#1656A5]" : "bg-gray-100"
    }`}
  >
    <ArrowRight
      className={`w-4 h-4 ${
        selected === index ? "text-white" : "text-gray-600"
      }`}
    />
  </div>
</div>

    );
  })}
</div>

      </div>
    </section>
  );
};

export default TreatmentsSection;
