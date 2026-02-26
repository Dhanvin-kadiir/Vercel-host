import React from 'react';
import { Calendar, MapPin, Mail, Phone } from 'lucide-react';
import content from '../data/content.json';

const About: React.FC = () => {
  const { personal, experience, education } = content;

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Get to know me better
          </p>
        </div>

        {/* Personal Info */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <img
                src={personal.avatar}
                alt={personal.name}
                className="w-64 h-64 rounded-full object-cover mx-auto border-8 border-blue-100 dark:border-blue-900"
              />
            </div>
            
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {personal.name}
              </h2>
              <p className="text-xl text-blue-600 dark:text-blue-400 mb-6">
                {personal.tagline}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {personal.bio}
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Mail className="mr-3" size={20} />
                  <a href={`mailto:${personal.email}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {personal.email}
                  </a>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Phone className="mr-3" size={20} />
                  <span>{personal.phone}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <MapPin className="mr-3" size={20} />
                  <span>{personal.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border-l-4 border-blue-500"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {job.position}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {job.company}
                    </p>
                  </div>
                  <div className="flex items-center mt-2 md:mt-0">
                    <Calendar className="mr-2" size={16} />
                    <span className="text-gray-500 dark:text-gray-400">
                      {job.duration}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border-l-4 border-emerald-500"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-emerald-600 dark:text-emerald-400 font-medium">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="flex items-center mt-2 md:mt-0">
                    <Calendar className="mr-2" size={16} />
                    <span className="text-gray-500 dark:text-gray-400">
                      {edu.year}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;