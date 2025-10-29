import React from 'react';
import type { Course } from '../types';
import CourseCard from './CourseCard';
import CodeIcon from './icons/CodeIcon';
import GlobeIcon from './icons/GlobeIcon';
import MonitorIcon from './icons/MonitorIcon';

const courses: Course[] = [
  {
    icon: GlobeIcon,
    title: 'Website Building',
    description: 'Learn to build beautiful, responsive websites from scratch with no prior coding knowledge.',
  },
  {
    icon: CodeIcon,
    title: 'Web Development',
    description: 'Master front-end and back-end technologies to become a full-stack web developer.',
  },
  {
    icon: MonitorIcon,
    title: 'Basic Computer Skills',
    description: 'Gain confidence with essential computer skills for work, school, and daily life.',
  },
];

const CoursesSection: React.FC = () => {
  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Start Your Learning Journey</h2>
          <p className="text-gray-600 mt-2">Choose from our most popular courses to get started.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
