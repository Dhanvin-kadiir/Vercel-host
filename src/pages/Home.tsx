import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import content from '../data/content.json';

const Home: React.FC = () => {
  const { personal, social, projects, blogPosts } = content;
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);
  const featuredPosts = blogPosts.filter(p => p.featured).slice(0, 2);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  {personal.name}
                </span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                {personal.tagline}
              </p>
              <p className="text-lg mb-8 text-blue-50 leading-relaxed">
                {personal.bio}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  to="/projects"
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                >
                  View My Work
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <button className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                  <Download className="mr-2" size={20} />
                  Download CV
                </button>
              </div>

              <div className="flex space-x-4">
                {social.map((link, index) => {
                  const IconComponent = link.icon === 'github' ? Github : 
                                       link.icon === 'linkedin' ? Linkedin : Mail;
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                      aria-label={link.name}
                    >
                      <IconComponent size={24} />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="lg:flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white/20 shadow-2xl">
                  <img
                    src={personal.avatar}
                    alt={personal.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-green-500 w-16 h-16 rounded-full border-4 border-white flex items-center justify-center">
                  <span className="text-2xl">👋</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Some of my recent work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:underline"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Projects
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Latest Blog Posts
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Thoughts on development and technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-500">
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-flex items-center px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
            >
              View All Posts
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;