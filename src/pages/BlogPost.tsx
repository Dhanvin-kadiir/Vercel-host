import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import content from '../data/content.json';

const BlogPost: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const post = content.blogPosts.find(p => p.id === id);

    if (!post) {
        return (
            <div className="min-h-screen py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="text-6xl mb-4">🔍</div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Post Not Found
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                        The blog post you're looking for doesn't exist.
                    </p>
                    <Link
                        to="/blog"
                        className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                    >
                        <ArrowLeft size={18} className="mr-2" />
                        Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

    // Simple markdown-like renderer for the blog content
    const renderContent = (text: string) => {
        const lines = text.split('\n');
        const elements: React.ReactNode[] = [];
        let listItems: string[] = [];
        let orderedListItems: string[] = [];

        const flushUnorderedList = () => {
            if (listItems.length > 0) {
                elements.push(
                    <ul key={`ul-${elements.length}`} className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6 ml-4">
                        {listItems.map((item, i) => (
                            <li key={i} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
                        ))}
                    </ul>
                );
                listItems = [];
            }
        };

        const flushOrderedList = () => {
            if (orderedListItems.length > 0) {
                elements.push(
                    <ol key={`ol-${elements.length}`} className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6 ml-4">
                        {orderedListItems.map((item, i) => (
                            <li key={i} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
                        ))}
                    </ol>
                );
                orderedListItems = [];
            }
        };

        const formatInline = (text: string): string => {
            // Bold
            text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            // Inline code
            text = text.replace(/`(.*?)`/g, '<code class="px-1.5 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-sm font-mono text-emerald-600 dark:text-emerald-400">$1</code>');
            return text;
        };

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];

            if (line.startsWith('### ')) {
                flushUnorderedList();
                flushOrderedList();
                elements.push(
                    <h3 key={`h3-${i}`} className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                        {line.replace('### ', '')}
                    </h3>
                );
            } else if (line.startsWith('## ')) {
                flushUnorderedList();
                flushOrderedList();
                elements.push(
                    <h2 key={`h2-${i}`} className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                        {line.replace('## ', '')}
                    </h2>
                );
            } else if (line.startsWith('- ')) {
                flushOrderedList();
                listItems.push(line.replace('- ', ''));
            } else if (/^\d+\.\s/.test(line)) {
                flushUnorderedList();
                orderedListItems.push(line.replace(/^\d+\.\s/, ''));
            } else if (line.trim() === '') {
                flushUnorderedList();
                flushOrderedList();
            } else {
                flushUnorderedList();
                flushOrderedList();
                elements.push(
                    <p
                        key={`p-${i}`}
                        className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4"
                        dangerouslySetInnerHTML={{ __html: formatInline(line) }}
                    />
                );
            }
        }

        flushUnorderedList();
        flushOrderedList();

        return elements;
    };

    return (
        <div className="min-h-screen py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <Link
                    to="/blog"
                    className="inline-flex items-center text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors mb-8 group"
                >
                    <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to all posts
                </Link>

                {/* Article Header */}
                <article className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 md:p-12">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="inline-flex items-center px-3 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 text-sm rounded-full"
                            >
                                <Tag size={12} className="mr-1.5" />
                                {tag}
                            </span>
                        ))}
                        {post.featured && (
                            <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-sm rounded-full">
                                ⭐ Featured
                            </span>
                        )}
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        {post.title}
                    </h1>

                    {/* Meta */}
                    <div className="flex items-center text-gray-500 dark:text-gray-400 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm">
                            {new Date(post.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </span>
                        <span className="mx-3">·</span>
                        <span className="text-sm">
                            {Math.ceil(post.content.split(' ').length / 200)} min read
                        </span>
                    </div>

                    {/* Content */}
                    <div className="prose-content">
                        {renderContent(post.content)}
                    </div>
                </article>

                {/* Navigation */}
                <div className="mt-12 flex justify-center">
                    <Link
                        to="/blog"
                        className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors shadow-md hover:shadow-lg"
                    >
                        <ArrowLeft size={18} className="mr-2" />
                        Back to Blog
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
