import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation , Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Testimonial from "./testimonial.png";

const TestimonialsSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const testimonials = [
    {
      text: "I came in with questions, doubts, and a heart full of fear. But I left with answers, reassurance, and hope. Today... I have someone who calls me ‘Mom.’",
      author: "Rhea Deshapnde, Progenesis Mom, Nashik",
    },
    {
      text: "The team was so supportive throughout my journey. Their care and expertise gave me hope again.",
      author: "Priya Sharma, Progenesis Mom, Pune",
    },
    {
      text: "Every visit gave me more confidence. Today, I’m blessed with the family I always dreamed of.",
      author: "Anjali Mehta, Progenesis Mom, Mumbai",
    },
    {},
  ];

  const rating = 4.5;

  return (
    <section className="w-full h-[700px] bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 h-[700px]">
        {/* Left Rating Panel */}
        <div className="bg-blue-700 text-white p-10 flex flex-col justify-between h-full md:col-span-1 pt-[128px] pl-[120px]">
          <div>
            {/* Google Rating */}
            <div className="flex items-end space-x-2 mb-2">
              <img
                src="https://www.gstatic.com/images/branding/product/2x/google_g_48dp.png"
                alt="Google"
                className="w-6 h-6"
              />
              <span className="text-[48px] font-[Manrope] font-semibold leading-[56px] tracking-[-0.96px] text-[#F9F9F9] text-center">
                4.9
              </span>

              <span className="text-lg">/5</span>
            </div>

            {/* Stars */}
            <div className="flex items-center text-yellow-400 text-xl mb-2">
              {Array.from({ length: 5 }).map((_, i) => {
                const full = i + 1 <= Math.floor(rating); // full star
                const half = rating - i === 0.5; // half star

                return (
                  <span key={i} className="mr-1">
                    {full ? "★" : half ? "☆" : "☆"}
                  </span>
                );
              })}
            </div>

            {/* Review Count */}
            <p className="text-sm text-gray-200 mb-6">
              Based on <span className="font-bold">14,570</span> reviews
            </p>

            {/* Heading */}
            <h2 className="text-[48px] font-[Manrope] font-normal leading-[56px] text-[#F9F9F9]">
              What our patient’s are saying  
            </h2>
          </div>

          {/* Arrows */}
          <div className="flex flex-col space-x-4 mt-10 mb-[100px]">

            {/* <div className="custom-progressbar bg-white/30 rounded-[10px] overflow-hidden">
      <div className="swiper-pagination-progressbar-fill !bg-white rounded-[10px]" />
    </div> */}

    <div className="flex space-x-4">
            <button
              ref={prevRef}
              className="w-12 h-12 flex items-center justify-center border border-white rounded-lg hover:bg-white hover:text-blue-700 transition"
            >
              ←
            </button>
            <button
              ref={nextRef}
              className="w-12 h-12 flex items-center justify-center border border-white rounded-lg hover:bg-white hover:text-blue-700 transition"
            >
              →
            </button>
          </div></div>
        </div>

        {/* Right Testimonials Carousel */}
        <div
          className="md:col-span-2 relative bg-cover bg-center h-full pt-[82px]"
          style={{ backgroundImage: `url(${Testimonial})` }}
        >
          <Swiper
            modules={[Navigation]}
            spaceBetween={40}
            slidesPerView={1.2}
            breakpoints={{
              768: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2 },
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
          >
{/* 
          <Swiper
  modules={[Navigation, Pagination]}
  spaceBetween={40}
  slidesPerView={1.2}
  loop={true}
  navigation={{
    prevEl: prevRef.current,
    nextEl: nextRef.current,
  }}
  pagination={{
    el: ".custom-progressbar", // ✅ use our custom container
    type: "progressbar",
  }}
  onBeforeInit={(swiper) => {
    swiper.params.navigation.prevEl = prevRef.current;
    swiper.params.navigation.nextEl = nextRef.current;
    swiper.params.pagination.el = ".custom-progressbar"; // ✅ override default
  }}
> */}

            {testimonials.map((t, i) => (
              <SwiperSlide key={i + 1}>
                {({ isActive }) => (
                  <div
                    className={`flex flex-col text-left transition-all duration-500 ml-[82px] mr-[82px] ${
                      isActive
                        ? "w-[510px] h-[520px] px-[83px] py-[96px] bg-[#F9F9F9] rounded-2xl"
                        : "w-[510px] h-[520px] px-[83px] py-[96px] bg-[#F9F9F9] rounded-2xl opacity-50 "
                    }`}
                  >
                    {/* Testimonial Text */}
                    <p className="text-[#1656A5] font-[Manrope] text-[32px] leading-[40px] tracking-[-0.64px] font-normal">
                      {t.text}
                    </p>

                    {/* Author */}
                    <span className="mt-auto text-[rgba(44,44,44,0.5)] font-[Manrope] text-[16px] leading-[24px] tracking-[-0.32px]">
                      {t.author}
                    </span>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
