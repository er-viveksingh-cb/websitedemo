import React from "react";

const DifferenceSection = () => {
  const cards = [
    {
      number: "01",
      title: "World Class In-House ART Lab",
      subtitle:
        "We offer you more than a procedure. We offer a chance. A chance to hold, to cradle, to begin.",
    },
    {
      number: "02",
      title: "Compassionate Specialists",
      subtitle:
        "Our doctors and staff combine expertise with empathy, walking with you at every step.",
    },
    {
      number: "03",
      title: "Advanced Fertility Treatments",
      subtitle:
        "Cutting-edge techniques with proven success rates, making dreams of parenthood a reality.",
    },
  ];

  return (
    <section className="pt-20 md:py-20 ">
      <div className="md:max-w-4xl mx-auto text-center relative px-4 md:px-[80px] ">
        {/* Small Label */}
        <span className="inline-block text-sm font-medium text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-6">
          The Progenesis Difference
        </span>

        {/* Heading */}
        <h2 className="mt-6 md:mx-32 text-3xl md:text-5xl font-[Manrope] font-normal leading-[42px] md:leading-[56px] tracking-[-0.96px] text-[#94BA3D] text-center ">
          Choosing a fertility clinic means choosing the people <br />
          who’ll walk beside you. <br />
          At Progenesis, expert care meets heartfelt support, every step of the
          way.
        </h2>

        {/* Background container */}
        <div className="relative -mt-36 flex justify-center">
          <div className="relative">
            {/* Stacked Cards */}
            {cards.map((card, index) => (
              <div
                key={index}
                className={`relative w-[280px] h-[255px] md:w-[408px] md:h-[375px] rounded-[16px] bg-[#F9F9F9] shadow-md overflow-hidden p-8 text-left border-[2px] border-white`}
                style={{
                  transform: `rotate(${index === 0 ? -3 : index === 1 ? 4 : 2}deg) translateY(${
                    index * -60
                  }px)`,
                  marginTop:
                    index > 0
                      ? window.innerWidth < 768 // ✅ mobile condition
                        ? "-100px"
                        : "-200px"
                      : "0px",
                  zIndex: cards.length + index,
                }}
              >
                {/* Gradients INSIDE the card */}
                <div className="absolute -top-32 right-0 w-[210px] h-[210px] rounded-full bg-[#1656A5] blur-[65px]"></div>
                <div className="absolute -top-32 left-0 w-[210px] h-[210px] rounded-full bg-[#94BA3D] blur-[65px]"></div>
                <div className="absolute -bottom-10 -right-10 w-[220px] h-[220px] rounded-full bg-[#ffffff] blur-[25px]"></div>
                <div className="absolute -bottom-10 -left-10 w-[220px] h-[220px] rounded-full bg-[#ffffff] blur-[25px]"></div>

                {/* Content */}
                <span className="block text-[#2C2C2C] font-[Manrope] text-[32px] md:text-[48px] font-normal leading-[56px] tracking-[-0.96px] mb-2 md:mb-24 relative z-10">
                  {card.number}
                </span>
                <h3 className="text-[#2C2C2C] font-[Manrope] text-[24px] md:text-[32px] font-normal leading-[40px] tracking-[-0.64px] mb-1 md:mb-4 relative z-10">
                  {card.title}
                </h3>
                <p className="text-[#606060] font-[Manrope] text-[12px] md:text-[16px] font-normal leading-[24px] tracking-[-0.32px] relative z-10">
                  {card.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;
