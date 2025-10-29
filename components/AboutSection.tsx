import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/seed/team/500/500" 
              alt="Expert Academy Team" 
              className="rounded-xl shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Expert Academy</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At Expert Academy, our mission is to make high-quality tech education accessible to everyone, everywhere. We believe that learning new skills is the key to unlocking potential and creating opportunities.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our courses are designed by industry experts to be practical, engaging, and up-to-date. Whether you're a complete beginner or looking to advance your career, we're here to support you on your learning journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
