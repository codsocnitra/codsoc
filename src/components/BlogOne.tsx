"use client";
import React from "react";
import CountUp from "react-countup";

const ImpactAchievements: React.FC = () => {
  const stats = [
    { value: 27000, suffix: "+", label: "Lines of Code Written by Members" },
    { value: 88, suffix: "%", label: "Student Participation in Coding Events" },
    { value: 3, suffix: "x", label: "Growth in Hackathon Participation since 2023" },
    { value: 50, suffix: "+", label: "Research Papers Published by Members" },
    { value: 95, suffix: "%", label: "Members Industry-Ready with Advanced Skills" },
    { value: 1500, suffix: "+", label: "Hours of Coding & Training Conducted" },
  ];

  return (
    <section className="impact py-20">
      <div className="container">
        <div className="bg-white common-shadow-five py-16 px-10 rounded-2xl">
          <span className="line w-20 h-1 bg-main-600 block mb-6" />
          <h2 className="text-3xl font-bold mb-12 text-center">
            Impact & Achievements
          </h2>

          {/* Row based layout */}
          <div className="flex flex-wrap justify-center gap-8">
            {stats.map((item, index) => (
              <div
                key={index}
                className="w-[280px] p-6 border rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-4xl font-extrabold text-main-600 mb-3 group-hover:scale-105 transition-transform">
                  <CountUp end={item.value} duration={2} /> {item.suffix}
                </h3>
                <p className="text-gray-700 text-lg">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactAchievements;
