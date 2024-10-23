'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image'; // Import the Image component

const isUserSignedIn = () => {
  return false; // Update this as per your authentication logic
};

const LandingPage = () => {
  const router = useRouter();

  const handleDashboardRedirect = () => {
    if (!isUserSignedIn()) {
      router.push('/dashboard');
    } else {
      router.push('/dashboard');
    }
  };

  // Smooth scrolling effect
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className='bg-gray-100 text-gray-900 font-sans'>
      {/* Sticky Navigation Bar */}
      <nav className='fixed w-full bg-white shadow-lg py-4 z-10'>
        <div className='container mx-auto flex justify-between items-center'>
          <Image src={'/logo.svg'} alt='logo' width={130} height={100} />
          <ul className='flex space-x-8'>
            <li><a href="#hero" className='hover:text-[#624E88]'>Home</a></li>
            <li><a href="#features" className='hover:text-[#624E88]'>Features</a></li>
            <li><a href="#how-it-works" className='hover:text-[#624E88]'>How It Works</a></li>
            <li><a href="/dashboard" className='hover:text-[#624E88]'>Go to Dashboard</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="hero" className='bg-gradient-to-r from-[#624E88] to-[#8B5FBF]
       text-white h-screen flex flex-col justify-center items-center text-center'>
        <h1 className='text-6xl font-extrabold mb-4 animate-fadeIn'>
          Welcome to PENBOT AI!
        </h1>
        <p className='text-2xl mb-6 animate-fadeIn'>
          The Ultimate AI Content Generator.
        </p>
        <a href="#how-it-works" className='bg-white text-[#624E88] px-8 py-4 rounded-full
         text-lg font-bold shadow-lg hover:bg-gray-200 transition-transform duration-300 transform hover:scale-105'>
          Explore More
        </a>
      </header>

      {/* Features Section */}
      <section id="features" className='py-20 bg-gray-50'>
        <div className='container mx-auto text-center'>
          <h2 className='text-4xl font-bold text-gray-900 mb-12 animate-fadeIn'>
            Key Features of PENBOT AI
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Feature 1 */}
            <div className='p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-500'>
              <h3 className='text-2xl font-semibold text-[#624E88] mb-4'>Instant Content</h3>
              <p className='text-gray-700'>
                Generate content in seconds with AI-powered algorithms tailored to your needs.
              </p>
            </div>
            {/* Feature 2 */}
            <div className='p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-500'>
              <h3 className='text-2xl font-semibold text-[#624E88] mb-4'>Custom Templates</h3>
              <p className='text-gray-700'>
                Choose or create your own templates for blogs, ads, and social media.
              </p>
            </div>
            {/* Feature 3 */}
            <div className='p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-500'>
              <h3 className='text-2xl font-semibold text-[#624E88] mb-4'>SEO Optimized</h3>
              <p className='text-gray-700'>
                AI-generated content that ranks higher in search engines and reaches more audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className='bg-white py-20'>
        <div className='container mx-auto text-center'>
          <h2 className='text-4xl font-bold text-gray-900 mb-12'>
            How It Works
          </h2>
          <div className='flex flex-col md:flex-row justify-center gap-12'>
            <div className='md:w-1/3'>
              <h3 className='text-2xl font-semibold text-[#624E88] mb-4'>
                Step 1: Choose a Template
              </h3>
              <p className='text-gray-700'>
                Start by selecting from a variety of ready-to-use templates for various content types.
              </p>
            </div>
            <div className='md:w-1/3'>
              <h3 className='text-2xl font-semibold text-[#624E88] mb-4'>
                Step 2: Input Your Data
              </h3>
              <p className='text-gray-700'>
                Provide the keywords or context, and let AI craft content that fits your needs.
              </p>
            </div>
            <div className='md:w-1/3'>
              <h3 className='text-2xl font-semibold text-[#624E88] mb-4'>
                Step 3: Generate & Edit
              </h3>
              <p className='text-gray-700'>
                Review, edit, and fine-tune the content as per your preferences, all within minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="cta" className='bg-[#624E88] text-white py-20'>
        <div className='container mx-auto text-center'>
          <h2 className='text-4xl font-bold mb-6'>
            Ready to Supercharge Your Content Creation?
          </h2>
          <p className='text-xl mb-8'>
            Join PENBOT AI today and start creating powerful content effortlessly.
          </p>
          <button
            onClick={handleDashboardRedirect}
            className='bg-white text-[#624E88] px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:bg-gray-200 transition-transform duration-300 transform hover:scale-105'>
            Go to Dashboard
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-900 text-white py-6'>
        <div className='container mx-auto text-center'>
          <p>PENBOT AI | Developed by Anag Aggarwal</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
