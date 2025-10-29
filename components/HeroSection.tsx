import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-[#67C8FF] to-[#B3E5FC] text-white">
      <div className="container mx-auto px-6 py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 animate-fade-in-down">
              Empower Your Skills,
              <br />
              Build Your Future
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 animate-fade-in-up">
              Join thousands of learners and unlock your potential with our expert-led courses.
            </p>
            <a
              href="#courses"
              className="inline-block bg-white text-sky-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-transform transform hover:scale-105 duration-300 shadow-lg"
            >
              Explore Courses
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://picsum.photos/seed/elearning/600/400" 
              alt="Students learning online" 
              className="rounded-lg shadow-2xl w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
