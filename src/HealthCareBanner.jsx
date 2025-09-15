import React from "react";

const HealthCareBanner = () => {
  return (
    <section className="relative w-full h-[300px] flex items-center justify-center">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-50 via-white to-blue-50" />

      {/* Text */}
      <h2 className="relative text-3xl md:text-4xl font-medium text-green-600 text-center px-4">
        Striving to set a new standard for <br className="hidden md:block" />
        reproductive health care services.
      </h2>
    </section>
  );
};

export default HealthCareBanner;
