import React, { useState } from "react";
import Doctor from "./doctorimage.png";

const doctors = [
  {
    name: "Dr. Narhari S. Malgaonkar",
    image: Doctor, // Replace with real image
    description:
      "Dr. Narhari S. Malgaonkar is the dedicated and exclusive chief fertility consultant.",
    experience: [
      "15+ Years of Experience",
      "MD, DNB, DGO, FCPS, DFP (Mumbai)",
      "Fellowship in Reproductive Medicine (Singapore)",
    ],
    location: "Mumbai",
    role: "Chief Fertility Consultant",
  },
  {
    name: "Dr. Jane Doe",
    image: Doctor,
    description:
      "Dr. Jane Doe specializes in advanced fertility treatments with global expertise.",
    experience: [
      "12+ Years of Experience",
      "MD, OBGYN, Harvard Medical School",
      "Certified Embryologist",
    ],
    location: "Pune",
    role: "Fertility Consultant",
  },
  {
    name: "Dr. John Smith",
    image: Doctor,
    description:
      "Dr. John Smith is passionate about helping families achieve their dreams.",
    experience: [
      "18+ Years of Experience",
      "MS, Obstetrics & Gynecology",
      "Fellowship in IVF & ART",
    ],
    location: "Nashik",
    role: "Senior Fertility Specialist",
  },
];

const DoctorsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevDoctor = () => {
    setCurrentIndex((prev) => (prev === 0 ? doctors.length - 1 : prev - 1));
  };

  const nextDoctor = () => {
    setCurrentIndex((prev) => (prev === doctors.length - 1 ? 0 : prev + 1));
  };

  const doctor = doctors[currentIndex];

  return (
    <section className="py-20 bg-[#F9FAFB] px-[120px]">
      <div>
        {/* Heading */}\
        <div className="flex flex-col md:flex-row items-start justify-between gap-[144px] mb-[144px]">
          {/* Left */}
          <div className="max-w-[560px]">
            <span className="inline-block text-sm font-medium text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-6">
              The Experts
            </span>
            <h2 className="text-[48px] font-[Manrope] font-normal leading-[56px] tracking-[-0.96px] text-[#2C2C2C] mb-8">
              Meet the Experts <br /> Behind the Magic
            </h2>
            <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg font-[Manrope] text-[14px] font-medium leading-[24px] tracking-[-0.28px] hover:bg-blue-50 transition">
              View all Doctors
            </button>
          </div>

          {/* Right */}
          <div className="max-w-[600px]">
            <p className="text-[#2C2C2C] text-[32px] leading-[40px] tracking-[-0.64px] font-[Manrope] font-normal">
              Our team of internationally trained fertility specialists,
              embryologists, and counselors are here to support y{" "}
              <span className="text-[rgba(44,44,44,0.25)]">
                ou medically and emotionally. Our team of internationally
                trained fertility specialists, embryologists.
              </span>
            </p>
          </div>
        </div>
        {/* Doctor Card */}
        <div className="relative flex items-center ">
          {/* Left Arrow */}
          <button
            onClick={prevDoctor}
            className="absolute l-14  w-12 h-12  flex items-center justify-center rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            ←
          </button>

          {/* Card */}
          {/* <div className="bg-white rounded-2xl shadow-md flex overflow-hidden border border-gray-200 mx-auto"> */}
          <div className="bg-white rounded-2xl flex w-3xl overflow-hidden p-10 border-gray-200 mx-[120px] relative">
            {/* Left Image */}

            <p className="absolute -top-6 right-6 text-[#606060] font-[Manrope] text-[16px] font-semibold leading-[24px] tracking-[-0.32px]">
              {String(currentIndex + 1).padStart(2, "0")} of{" "}
              {String(doctors.length).padStart(2, "0")}
            </p>
            <div className="inline-flex h-[444px] w-[340px] justify-center items-center flex-shrink-0 rounded-xl bg-[#27C3EB] overflow-hidden">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="h-full w-full object-cover rounded-xl"
              />
            </div>

            {/* Middle Section */}
            <div className="flex flex-col justify-start pl-10 pr-10 flex-1">
              {/* Heading */}
              <h3 className="text-[#1656A5] font-[Manrope] text-[48px] font-normal leading-[56px] tracking-[-0.96px]">
                {doctor.name}
              </h3>

              {/* Description */}
              <p className="mt-4 text-[#606060] font-[Manrope] text-[16px] leading-[24px] tracking-[-0.32px]">
                {doctor.description}
              </p>

              {/* Experience Boxes */}
              <div className="mt-[108px] flex flex-wrap gap-4">
                {doctor.experience.map((exp, idx) => (
                  <span
                    key={idx}
                    className="flex px-3 py-2 justify-center items-center rounded-xl bg-[rgba(22,86,165,0.05)] text-[#1656A5] font-[Manrope] text-[14px] font-normal leading-[24px] tracking-[-0.28px] backdrop-blur-[25px]"
                  >
                    {exp}
                  </span>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="w-[1px] h-[450px] opacity-25 bg-black"></div>

            {/* Right Section */}
            <div className="flex flex-col justify-end pl-10">
              <h4 className="text-[#2C2C2C] font-[Manrope] text-[48px] font-normal leading-[56px] tracking-[-0.96px]">
                {doctor.location}
              </h4>
              <p className="text-[#2C2C2C] font-[Manrope] text-[16px] font-normal leading-[24px] tracking-[-0.32px]">
                {doctor.role}
              </p>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextDoctor}
            className="absolute right-0 w-12 h-12 flex items-center justify-center rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
