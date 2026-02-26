import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Tag } from 'lucide-react';
import content from '../data/content.json';

const Blog: React.FC = () => {
  const { blogPosts } = content;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const allTags = ['all', ...Array.from(new Set(blogPosts.flatMap(post => post.tags)))];
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === 'all' || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Blog & Updates
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Thoughts on development, technology, and learning
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
            
            {/* Tag Filter */}
            <div className="relative">
              <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white appearance-none cursor-pointer"
              >
                {allTags.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag === 'all' ? 'All Topics' : tag}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Tag Pills */}
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedTag === tag
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-gray-600'
                }`}
              >
                {tag === 'all' ? 'All' : tag}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts */}
        {filteredPosts.length > 0 ? (
          <div className="space-y-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
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
                  {post.featured && (
                    <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-sm rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Link to={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 dark:text-gray-500">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              No posts found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search terms or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;