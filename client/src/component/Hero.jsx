import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#e0f7fa] to-[#fefefe] min-h-[90vh] flex flex-col justify-center px-6 md:px-20 py-10 overflow-hidden">
      {/* Decorative Circle */}
      <div className="absolute -bottom-20 right-[-10%] w-[500px] h-[500px] bg-pink-200 rounded-full z-0 opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight text-gray-800">
          Upload Your Resume for <br className="hidden sm:block" />
          <span className="text-teal-600">ATS Analysis 🚀</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          Beat the bots and get more interview calls. Our AI checks how well your resume performs against Applicant Tracking Systems.
        </p>

        <Link to="/upload">
          <button className="mt-8 px-6 py-3 bg-teal-600 text-white text-lg font-medium rounded-full shadow-lg hover:bg-teal-700 transition duration-300">
            Upload Resume
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
