import React from 'react';
import type { Course } from '../types';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const Icon = course.icon;
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 flex flex-col items-center text-center transform hover:-translate-y-2">
      <div className="bg-sky-100 p-4 rounded-full mb-6">
        <Icon className="w-10 h-10 text-sky-500" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{course.title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{course.description}</p>
      <button className="mt-auto bg-sky-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-sky-600 transition-all duration-300">
        Enroll Now
      </button>
    </div>
  );
};

export default CourseCard;
