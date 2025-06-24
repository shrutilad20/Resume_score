import React from 'react';
import Hero from './Hero';
import ResumeUploader from './ResumeUploader';

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-[#f0fbff] to-[#e6fffa] min-h-screen text-gray-800">
      {/* Hero Section */}
      <Hero />

      {/* Resume Upload Section */}
      <section className="py-20 px-4 flex justify-center items-center bg-white relative z-10">
        <div className="max-w-3xl w-full bg-[#f7fdfd] p-8 rounded-2xl shadow-lg border border-[#e2f0f0]">
          <ResumeUploader />
        </div>
      </section>

      {/* Future: Add Features, Testimonials, Newsletter, etc */}
    </div>
  );
};

export default Home;
