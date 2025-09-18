// // TreatmentsSection.jsx
// import React, { useState, useRef } from "react";
// import { ArrowRight } from "lucide-react";
// import image1 from "./In-VitroFertilization.png";
// import image2 from "./EggFreezingand Preservation.png";
// import { motion, useScroll, useTransform } from "framer-motion";

// const Letter = ({ char, index, total, scrollYProgress }) => {
//   const start = index / total;
//   const end = (index + 1) / total;

//   const color = useTransform(
//     scrollYProgress,
//     [start, end],
//     ["rgba(44,44,44,0.25)", "#2C2C2C"]
//   );

//   return (
//     <motion.span
//       style={{ color }}
//       className="text-sm md:text-[32px] md:leading-[40px] leading-8 tracking-[-0.32px] md:tracking-[-0.64px] font-[Manrope] font-normal"
//     >
//       {char}
//     </motion.span>
//   );
// };

// const TreatmentsSection = () => {
//   const ref = useRef(null);

//   // Track scroll relative to this block
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   // Animate vertical background position
//   const backgroundPosition = useTransform(
//     scrollYProgress,
//     [0, 1],
//     ["0% 100%", "0% 0%"] // from bottom → top
//   );

//   const text =
//     "Our wide network of centers ensures you receive expert support closer to home, and closer to comfort. Our wide network of centers ensures you receive expert support closer to home, and closer to comfort. Our wide network of centers ensures you receive expert support closer to home, and closer to comfort.,";

//   const treatments = [
//     {
//       title: "In-Vitro Fertilization (IVF)",
//       description:
//         "We offer you more than a procedure. We offer a chance. A chance to hold, to cradle, to begin.",
//       image: image1,
//     },
//     {
//       title: "Egg Freezing and Preservation",
//       description:
//         "Your journey is uniquely yours. Whenever you feel ready, we’ll be right here waiting for you.",
//       image: image2,
//     },
//     {
//       title: "Multiple IVF & IUI Failures",
//       description:
//         "Advanced care and tailored treatments to give fresh hope after repeated failed attempts.",
//       image: image1,
//     },
//     {
//       title: "Intrauterine Insemination (IUI)",
//       description:
//         "For some, the gentlest nudge is all it takes. We guide you with care and precision.",
//       image: image2,
//     },
//     {
//       title: "Male Fertility Solutions",
//       description:
//         "Fertility is not just a woman’s story. We’re here for every partner, every question, every step.",
//       image: image1,
//     },
//     {
//       title: "Pregnancy after Menopause",
//       description:
//         "Advanced techniques that make motherhood possible, even beyond menopause.",
//       image: image1,
//     },
//   ];

//   const [selected, setSelected] = useState(0);

//   return (
//     <section className="w-full bg-blue-50 pt-[84px] mx-0 px-4 md:px-[80px] lg:px-[120px] pb-[60px]">
//       <div>
//         {/* Header */}
//         <div
//           className="flex flex-col xl:flex-row items-start justify-between gap-8 mb-12"
//           ref={ref}
//         >
//           {/* Left */}
//           <div className="w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
//             <span className="inline-block text-sm font-medium text-[#1656A5] bg-[#1656A5]/5 px-3 py-1 rounded-full mb-4">
//               Our Expertise
//             </span>
//             <h2 className="text-[48px] md:text-5xl font-light text-[#2c2c2c] mb-6">
//               Being India’s Best Fertility & IVF Center. We Specialize in:
//             </h2>
//             <button className="px-[14px] md:px-12 py-[12px] md:py-3 md:rounded-[16px] rounded-[8px] text-[12px] md:text-sm font-medium  border border-[#1656A5] text-[#1656A5]  hover:bg-[#1656A5] hover:text-white transition">
//               View all treatments
//             </button>
//           </div>

//           {/* Right */}
//           {/* <div className="flex-1 ">
//             <p className="text-[#2C2C2C] text-sm md:text-[32px] md:leading-[40px] leading-8 tracking-[-0.32px] md:tracking-[-0.64px] font-[Manrope] font-normal">
//               Our wide network of centers ensures you receive expert support
//               closer to home, and closer to comfort. Our wide network of centers
//               ensures
//               <span className="text-[rgba(44,44,44,0.25)] text-sm md:text-[32px] md:leading-[40px] leading-7 tracking-[-0.32px] md:tracking-[-0.64px]] font-[Manrope] font-normal">
//                 {" "}
//                 you receive expert support closer to home, and closer to
//                 comfort. Our wide network of centers ensures you receive expert
//                 support closer to home, and closer to comfort.
//               </span>
//             </p>
//           </div> */}
//           <div className="flex-1">
//             {/*       
//           <motion.p
//             style={{
                
//               backgroundImage:
//                 "linear-gradient(to top,rgba(44,44,44,0.25) 50% ,  #2C2C2C  50%)",
//               backgroundSize: "100% 200%",  // very important for vertical sliding
//               backgroundPosition,
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//             }}
//             className="text-sm md:text-[32px] md:leading-[40px] leading-8 tracking-[-0.32px] md:tracking-[-0.64px] font-[Manrope] font-normal"
//           >
//             {text}
//           </motion.p> */}

//             {text.split("").map((char, i) => (
//               <Letter
//                 key={i}
//                 char={char}
//                 index={i}
//                 total={text.length}
//                 scrollYProgress={scrollYProgress}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Treatments Custom Layout */}
//         <div className="flex flex-wrap gap-6 w-full">
//           {treatments.map((item, index) => {
//             // ✅ make 3rd & 4th cards smaller, rest bigger
//             const isSmall = index === 2 || index === 3;
//             const widthClass = isSmall
//               ? "xl:w-[26%] md:w-[47%] sm:[30%] min-w-[280px]" // small cards (approx 395px)
//               : "xl:w-[35%] md:w-[47%] sm:[30%] min-w-[280px]"; // large cards (approx 495px)

//             return (
//               <div
//                 key={index}
//                 onClick={() => setSelected(index)}
//                 className={`
//           relative cursor-pointer rounded-2xl p-6 h-[350px]
//           flex flex-col md:flex-row items-center justify-between transition
//           ${
//             selected === index
//               ? "border border-[#1656A5] bg-white"
//               : "border border-transparent bg-white"
//           }
//           w-full ${widthClass}
//         `}
//               >
//                 {/* Left Side (Text) */}
//                 <div className="flex flex-col w-[260px] md:w-[350px] pt-[50px] md:pt-[100px]">
//                   <h3 className="text-[#2c2c2c] font-semibold font-[Manrope] md:text-[32px] text-[20px] leading-[40px] tracking-[-0.64px] mb-2">
//                     {item.title}
//                   </h3>
//                   <p className="text-[#606060] text-sm leading-6">
//   {item.description}
// </p>
//                 </div>

//                 {/* Right Side (Image) */}
//                 <div className="flex-shrink-0 md:-mt-[150px] ">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="max-h-[180px] w-[150px] object-contain"
//                   />
//                 </div>

//                 {/* Arrow Button */}
//                 <div
//                   className={`absolute top-4 left-4 w-8 h-8 flex items-center justify-center rounded-lg ${
//                     selected === index ? "bg-[#1656A5]" : "bg-gray-100"
//                   }`}
//                 >
//                   <ArrowRight
//                     className={`w-4 h-4 ${
//                       selected === index ? "text-white" : "text-gray-600"
//                     }`}
//                   />
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TreatmentsSection;

// TreatmentsSection.jsx
import React, { useState, useRef } from "react";
import { ArrowRight } from "lucide-react";
import image1 from "./In-VitroFertilization.png";
import image2 from "./EggFreezingand Preservation.png";
import { motion, useScroll, useTransform } from "framer-motion";

const Letter = ({ char, index, total, scrollYProgress }) => {
  // Each letter animates in its slice of scroll progress
  const start = index / total;
  const end = (index + 1) / total;

  const color = useTransform(
    scrollYProgress,
    [start, end],
    ["rgba(44,44,44,0.25)", "#2C2C2C"]
  );

  return (
    <motion.span
      style={{ color }}
      className="text-sm md:text-[32px] md:leading-[40px] leading-8 tracking-[-0.32px] md:tracking-[-0.64px] font-[Manrope] font-normal"
    >
      {char}
    </motion.span>
  );
};

const TreatmentsSection = () => {
  const ref = useRef(null);

  // Track scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const text =
    "Our wide network of centers ensures you receive expert support closer to home, and closer to comfort. Our wide network of centers ensures you receive expert support closer to home, and closer to comfort. Our wide network of centers ensures you receive expert support closer to home, and closer to comfort.,";

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
    <section ref={ref} className="w-full bg-blue-50">
      {/* Sticky Header + Animated Text */}
      <div
        className="px-4 md:px-[80px] lg:px-[120px] pt-10"
        style={{
          position: "sticky",
          top: 0,
          height: "50vh", // stick full screen
          overflow: "hidden",
        }}
      >
        <motion.div
          className="flex flex-col justify-center h-full"
          style={{
    // Wider range = slower movement
    y: useTransform(scrollYProgress, [0.9, 1], [50, -200]),
    opacity: useTransform(scrollYProgress, [0.9, 1], [1, 0]),
  }}
          
        >
          <div className="flex flex-col xl:flex-row items-start justify-between gap-8">
            {/* Left */}
            <div className="w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
              <span className="inline-block text-sm font-medium text-[#1656A5] bg-[#1656A5]/5 px-3 py-1 rounded-full mb-4">
                Our Expertise
              </span>
              <h2 className="text-[48px] md:text-5xl font-light text-[#2c2c2c] mb-6">
                Being India’s Best Fertility & IVF Center. We Specialize in:
              </h2>
              <button className="px-[14px] md:px-12 py-[12px] md:py-3 md:rounded-[16px] rounded-[8px] text-[12px] md:text-sm font-medium border border-[#1656A5] text-[#1656A5] hover:bg-[#1656A5] hover:text-white transition">
                View all treatments
              </button>
            </div>

            {/* Right (Animated Text) */}
            <div className="flex-1">
              {text.split("").map((char, i) => (
                <Letter
                  key={i}
                  char={char}
                  index={i}
                  total={text.length}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Treatments Cards (scrolls after sticky block) */}
      <div className="px-4 md:px-[80px] lg:px-[120px] pt-[60px] pb-[60px]">
        <div className="flex flex-wrap gap-6 w-full">
          {treatments.map((item, index) => {
            const isSmall = index === 2 || index === 3;
            const widthClass = isSmall
              ? "xl:w-[26%] md:w-[47%] sm:[30%] min-w-[280px]"
              : "xl:w-[35%] md:w-[47%] sm:[30%] min-w-[280px]";

            return (
              <div
                key={index}
                onClick={() => setSelected(index)}
                className={`
                  relative cursor-pointer rounded-2xl p-6 h-[350px]
                  flex flex-col md:flex-row items-center justify-between transition
                  ${
                    selected === index
                      ? "border border-[#1656A5] bg-white"
                      : "border border-transparent bg-white"
                  }
                  w-full ${widthClass}
                `}
              >
                {/* Left Side (Text) */}
                <div className="flex flex-col w-[260px] md:w-[350px] pt-[50px] md:pt-[100px]">
                  <h3 className="text-[#2c2c2c] font-semibold font-[Manrope] md:text-[32px] text-[20px] leading-[40px] tracking-[-0.64px] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#606060] text-sm leading-6">
                    {item.description}
                  </p>
                </div>

                {/* Right Side (Image) */}
                <div className="flex-shrink-0 md:-mt-[150px]">
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
