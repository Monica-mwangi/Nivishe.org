import React from 'react';
import { Link } from 'react-router-dom';

type NewsItem = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
  slug: string;
};

const NewsPage: React.FC = () => {
  // Sample news data - replace with your actual data source
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: 'Nivishe Foundation Launches New Mental Health Initiative',
      excerpt: 'We are proud to announce our new community mental health program starting in Nairobi this month.',
      date: 'May 15, 2024',
      category: 'Announcements',
      imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      slug: 'new-mental-health-initiative'
    },
    {
      id: 2,
      title: 'Our Impact: 2024 Year in Review',
      excerpt: 'See how our programs have helped over 5,000 individuals access mental health services last year.',
      date: 'February 2, 2023',
      category: 'Impact',
      imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      slug: '2022-year-in-review'
    },
    {
      id: 3,
      title: 'Partner Spotlight: Wellness Together',
      excerpt: 'Learn about our collaboration with Wellness Together to expand services in rural communities.',
      date: 'January 18, 2025',
      category: 'Partnerships',
      imageUrl: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      slug: 'wellness-together-partnership'
    },
    {
      id: 4,
      title: 'Mental Health Awareness Month Events',
      excerpt: 'Join us for a series of workshops and community discussions throughout May.',
      date: 'April 28, 2024',
      category: 'Events',
      imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      slug: 'mental-health-awareness-month'
    }
  ];

  // Categories for filtering
  const categories = ['All', 'Announcements', 'Impact', 'Partnerships', 'Events', 'Research'];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-orange-400 text-white py-20">
        {/* <div className="absolute inset-0 bg-black opacity-40"></div> */}
        <div className="text-center px-4">
        <div className="text-center px-4">
  <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
    News & Insights
  </h1>
  <p className="text-xl md:text-2xl max-w-2xl mx-auto text-white">
    Stay updated with our latest announcements, impact stories, and mental health insights
  </p>
</div>

        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Category Filters */}
        {/* <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Browse by Category</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-white border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div> */}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-blue-600">{item.category}</span>
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <Link 
                  to={`/news/${item.slug}`}
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
                >
                  Read More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Stay Updated</h2>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter to receive the latest news and insights directly to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;