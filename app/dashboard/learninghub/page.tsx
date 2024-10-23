'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion'; 

function LearningHub() {
    // List of content with categories and links
    const contentData = [
        {
            title: 'SEO Best Practices for Content Creators',
            description: 'Learn how to optimize your content for search engines with these essential SEO tips.',
            category: 'SEO',
            link: 'https://moz.com/beginners-guide-to-seo', 
            completed: false,
        },
        {
            title: 'Writing Engaging Blog Posts',
            description: 'Tips for writing blog posts that captivate your audience and drive traffic.',
            category: 'Writing',
            link: 'https://www.copyblogger.com/blog-post-writing/',
            completed: false,
        },
        {
            title: 'Content Marketing Strategies',
            description: 'Discover the latest content marketing strategies to boost your reach.',
            category: 'Marketing',
            link: 'https://contentmarketinginstitute.com/what-is-content-marketing/',
            completed: false,
        },
        {
            title: 'Using Artificial Intelligence for Content Creation',
            description: 'Learn how AI tools can streamline your content creation process.',
            category: 'Tools',
            link: 'https://www.copy.ai/',
            completed: false,
        },
        {
            title: 'Monetizing Your Content',
            description: 'Explore ways to monetize your content through ads, affiliate marketing, and more.',
            category: 'Monetization',
            link: 'https://blog.hubspot.com/marketing/content-monetization',
            completed: false,
        },
        {
            title: 'Creating Engaging Visual Content',
            description: 'Tips and tools for creating eye-catching visual content to enhance your articles.',
            category: 'Visuals',
            link: 'https://www.canva.com/create/graphics/',
            completed: false,
        },
    ];

    // State for search, category filter, and progress
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('All');
    const [progress, setProgress] = useState(contentData);

    // Filtering and Searching Content
    const filteredContent = contentData
        .filter(content => 
            (category === 'All' || content.category === category) && 
            content.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

    // Handle content completion
    const handleCompletion = (index: number) => { // Specify the type for index
        const updatedProgress = [...progress];
        updatedProgress[index].completed = !updatedProgress[index].completed;
        setProgress(updatedProgress);
    };

    // Calculate progress percentage
    const calculateProgress = () => {
        const completedItems = progress.filter(item => item.completed).length;
        return (completedItems / progress.length) * 100;
    };

    return (
        <div className=' p-10 bg-white min-h-screen'>
            <motion.h1 
    className='text-4xl font-bold mb-8 text-primary'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
>
    Learning Hub
</motion.h1>

            {/* Search Bar */}
            <motion.input 
                type="text"
                placeholder="Search content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='p-2 mb-6 w-full border rounded-lg shadow-md'
                whileFocus={{ scale: 1.02 }}
            />

            {/* Categories Filter */}
            <motion.div className='mb-6' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                <label className='text-lg mr-4'>Filter by Category:</label>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className='p-2 border rounded-lg'>
                    <option value="All">All</option>
                    <option value="SEO">SEO</option>
                    <option value="Writing">Writing</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Tools">Tools</option>
                    <option value="Monetization">Monetization</option>
                    <option value="Visuals">Visuals</option>
                </select>
            </motion.div>

            {/* Progress Tracker */}
            <motion.div className='mb-6' initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                <h2 className='text-lg font-bold'>Progress Tracker: {Math.round(calculateProgress())}%</h2>
                <div className='w-full bg-gray-300 rounded-full h-4'>
                    <div 
                        className='bg-primary h-4 rounded-full'
                        style={{ width: `${calculateProgress()}%` }}
                    />
                </div>
            </motion.div>

            {/* Content List */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {filteredContent.map((content, index) => (
                    <motion.div 
                        key={index} 
                        className='border p-6 rounded-lg shadow-md bg-gray-100'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                        <h2 className='text-2xl font-semibold mb-3'>{content.title}</h2>
                        <p className='mb-4'>{content.description}</p>

                        {/* "Learn More" links with animation */}
                        <motion.a 
                            href={content.link} 
                            className='text-blue-600 hover:underline'
                            whileHover={{ scale: 1.05, color: '#1D4ED8' }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn More
                        </motion.a>

                        {/* Completion Toggle */}
                        <div className='mt-4'>
                            <motion.button 
                                onClick={() => handleCompletion(index)}
                                className={`px-4 py-2 rounded-lg ${progress[index].completed ? 'bg-primary' : 'bg-gray-500'} text-white`} // Change color to primary
                                whileHover={{ scale: 1.05 }}
                            >
                                {progress[index].completed ? 'Mark as Incomplete' : 'Mark as Complete'}
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default LearningHub;
