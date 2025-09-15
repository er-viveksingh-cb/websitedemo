import React from "react";

const StatsSection = () => {
  const stats = [
    {
      label: "Families",
      description:
        "We've helped 32,500+ Families. That's more than just a number. Every one of them started where you are now.",
      value: "32,500+",
    },
    {
      label: "Specialists",
      description:
        "With over 400 specialists, Every heartbeat of this journey is supported by a team that listens and cares.",
      value: "400+",
    },
    {
      label: "Success Rate",
      description:
        "That’s not luck. It’s care, science, and faith, working together.",
      value: "87%",
    },
    {
      label: "Centers",
      description: "Because hope should never be out of reach.",
      value: "21+",
    },
  ];

  return (
    <section
      className="relative w-full bg-gradient-to-r from-white via-white to-blue-50 overflow-hidden"
      style={{
        paddingLeft: "120px",
        paddingRight: "120px",
        paddingTop: "84px",
        height: "800px",
      }}
    >
      {/* === Blurred Gradient Shapes === */}
      <div
        className="absolute top-0 right-0 rounded-[522.265px] blur-[250px]"
        style={{
          background: "#1656A5",
          width: "522.265px",
          height: "442.756px",
          transform: "rotate(-2deg)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 rounded-[348.282px] blur-[250px]"
        style={{
          background: "#94BA3D",
          width: "348.282px",
          height: "279.542px",
          transform: "rotate(-2deg)",
        }}
      />

      <div className="relative mx-0">
        {/* Badge */}
        <span className="inline-block text-sm font-medium text-blue-700 bg-blue-50 px-3 py-1 rounded-full mb-4">
          Stats and Metrics
        </span>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-12 max-w-3xl">
          Let the numbers<br/> reassure your heart.
        </h2>

        {/* Stats Rows */}
        <div className="divide-y divide-gray-200">
          {stats.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 items-center"
            >
              {/* Label */}
              <h3 className="text-xl font-medium text-gray-900">
                {item.label}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm md:text-base max-w-md">
                {item.description}
              </p>

              {/* Value */}
              <div className="text-2xl md:text-3xl font-semibold text-gray-900 md:text-right">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
