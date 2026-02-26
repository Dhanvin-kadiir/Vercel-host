import React from 'react';
import { Github, Linkedin, Mail, Globe } from 'lucide-react';
import content from '../data/content.json';

const Footer: React.FC = () => {
  const { personal, social } = content;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'github': return Github;
      case 'linkedin': return Linkedin;
      case 'globe': return Globe;
      default: return Mail;
    }
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {personal.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {personal.tagline}
            </p>
          </div>

          <div className="flex space-x-6">
            {social.map((link, index) => {
              const IconComponent = getIcon(link.icon);
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label={link.name}
                >
                  <IconComponent size={24} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;