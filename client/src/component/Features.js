// components/Features.jsx
import React from "react";

const features = [
  {
    title: "ATS-Friendly Suggestions",
    desc: "Get personalized tips to make your resume ATS-compliant.",
    icon: "🧠",
  },
  {
    title: "Keyword Optimization",
    desc: "Match your resume with job descriptions effectively.",
    icon: "🔍",
  },
  {
    title: "Real-Time Feedback",
    desc: "Upload and instantly see your score & areas of improvement.",
    icon: "⚡",
  },
];

const Features = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Why Use Our ATS Checker?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
