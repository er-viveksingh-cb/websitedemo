import React, { useState } from "react";
import { Play } from "lucide-react";
import Stories1 from "./stories1.png"
import Stories2 from "./stories2.png"



const stories = [
  { id: 1, thumbnail: Stories1, title: "Story 1" },
  { id: 2, thumbnail: Stories2, title: "Story 2" },
  { id: 3, thumbnail: Stories1, title: "Story 3" },
  { id: 4, thumbnail: Stories2, title: "Story 4" },
  { id: 5, thumbnail: Stories1, title: "Story 5" },
  { id: 6, thumbnail: Stories2, title: "Story 6" },
];

const StoriesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 2; // show 4 cards at once
  const totalCards = stories.length;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalCards - visibleCards : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= totalCards - visibleCards ? 0 : prev + 1
    );
  };

  return (
    <section className="py-20 bg-white px-[120px]">
      <div className=" mx-auto px-6">
        {/* Heading */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <span className="text-sm px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-medium">
              Real Stories. Real Miracles.
            </span>
           <h2 className="mt-4 text-[48px] font-[Manrope] font-normal leading-[56px] tracking-[-0.96px] text-[#2C2C2C]">
  Inspiring stories of strength & Victories
</h2>

          </div>
          <div className="flex items-center space-x-3">
           <button className="px-6 py-2 bg-blue-600 text-[#F9F9F9] font-[Manrope] text-[14px] font-medium leading-[24px] tracking-[-0.28px] rounded-lg hover:bg-blue-700 transition">
  See all
</button>

            <button
              onClick={prevSlide}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              →
            </button>
          </div>
        </div>

        {/* Stories Carousel */}
        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * (293 + 24)}px)` }} // 293px card + 24px gap
          >
            {stories.map((story) => (
             <div
  key={story.id}
  className="relative flex-shrink-0 w-[503px] h-[618px] rounded-[16px] overflow-hidden bg-[rgba(22,86,165,0.05)]"
>
  <img
    src={story.thumbnail}
    alt={story.title}
    className="w-full h-full object-cover rounded-[16px]"
  />
  {/* Play Button */}
  <button className="absolute bottom-4 left-4 w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-gray-200 shadow">
    <Play size={20} className="text-blue-600" />
  </button>
</div>

            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
