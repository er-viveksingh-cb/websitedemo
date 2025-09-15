import React, { useState, useEffect } from "react";
import video from "./6849063-uhd_3840_2160_24fps.mp4";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: video,
      title: "What would you like to know about your fertility journey?",
      buttons: ["Book Your Appointment", "Find My Right Treatment"],
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      title: "Your parenthood journey starts with us",
      buttons: ["Get Started", "Meet Our Experts"],
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      title: "Trusted care for every step of the way",
      buttons: ["Book Consultation", "See Success Stories"],
    },
  ];

  const goToSlide = (index) => setCurrentSlide(index);

  // // Optional autoplay (5s)
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % slides.length);
  //   }, 10000);
  //   return () => clearInterval(interval);
  // }, [slides.length]);

  return (
    <div className="relative w-full h-[850px] overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-[850px] transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {slide.image.endsWith(".mp4") ? (
            <video
              src={slide.image}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[850px] object-cover"
            />
          ) : (
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          )}
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-25" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute pt-[300px] pl-[120px] text-white max-w-[753px] z-10">
        <p className="font-[Manrope] text-[80px] font-semibold leading-[88px] tracking-[-1.6px]">
          {slides[currentSlide].title}
        </p>

        {/* Buttons */}
        <div className="flex gap-3 mt-12">
          {slides[currentSlide].buttons.map((btn, i) => (
            <button
              key={i}
              className={`px-12 py-3 rounded-[16px] text-sm font-medium font-[Manrope] leading-6 tracking-[-0.28px] ${
                i === 0
                  ? "bg-white text-[#2C2C2C] backdrop-blur-[7.5px]"
                  : "border border-white text-white backdrop-blur-[7.5px] pl-8 pr-12"
              }`}
            >
              {btn}
            </button>
          ))}
        </div>
         <div className="absolute pt-[60px] flex gap-4 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-[80px] h-[2px] transition-all ${
              index === currentSlide
                ? "bg-[#F9F9F9]"
                : "bg-[#F9F9F9] opacity-20"
            }`}
          />
        ))}
      </div>
      </div>

     
    </div>
  );
};

export default HeroCarousel;
