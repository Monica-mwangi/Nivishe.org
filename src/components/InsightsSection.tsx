import React from 'react';
import { Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react';

const InsightsSection = () => {
  const insights = [
    {
      title: "The Future of Digital Marketing in 2024",
      excerpt: "Discover the latest trends and technologies shaping the digital marketing landscape this year.",
      author: "Sarah Mitchell",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "Digital Marketing",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      featured: true
    },
    {
      title: "AI-Powered Design: Revolutionizing Creative Workflows",
      excerpt: "How artificial intelligence is transforming the way we approach design and creativity.",
      author: "Alex Thompson",
      date: "December 12, 2024",
      readTime: "6 min read",
      category: "Design & Technology",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      title: "E-commerce Growth Strategies That Actually Work",
      excerpt: "Proven tactics to boost your online store's performance and increase conversions.",
      author: "Maria Garcia",
      date: "December 10, 2024",
      readTime: "10 min read",
      category: "E-commerce",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      title: "Building Authentic Brand Communities",
      excerpt: "Learn how to create meaningful connections with your audience and foster brand loyalty.",
      author: "David Chen",
      date: "December 8, 2024",
      readTime: "7 min read",
      category: "Brand Strategy",
      image: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      title: "The ROI of Investing in Digital Education",
      excerpt: "Why continuous learning is essential for business success in the digital age.",
      author: "Jennifer Lee",
      date: "December 5, 2024",
      readTime: "5 min read",
      category: "Education",
      image: "https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      title: "Social Media Analytics: Beyond Vanity Metrics",
      excerpt: "Focus on the metrics that truly matter for your business growth and success.",
      author: "Robert Johnson",
      date: "December 3, 2024",
      readTime: "9 min read",
      category: "Analytics",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    }
  ];

  const categories = ["All", "Digital Marketing", "Design & Technology", "E-commerce", "Brand Strategy", "Education", "Analytics"];

  return (
    <section id="insights" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Latest Insights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead of the curve with expert insights, industry trends, and actionable 
            strategies from our team of digital professionals.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                index === 0
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden card-hover">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative">
                <img
                  src={insights[0].image}
                  alt={insights[0].title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                  <TrendingUp size={16} className="mr-2" />
                  Featured
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="text-sm text-blue-600 font-medium mb-4">{insights[0].category}</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{insights[0].title}</h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">{insights[0].excerpt}</p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>By {insights[0].author}</span>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {insights[0].date}
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      {insights[0].readTime}
                    </div>
                  </div>
                </div>
                
                <button className="btn-primary flex items-center space-x-2 w-fit">
                  <span>Read Full Article</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Other Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {insights.slice(1).map((insight, index) => (
            <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
              <div className="relative">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-white bg-opacity-90 px-3 py-1 rounded-full text-xs font-medium text-gray-800">
                  {insight.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{insight.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{insight.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>By {insight.author}</span>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {insight.date.split(',')[0]}
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {insight.readTime}
                    </div>
                  </div>
                </div>
                
                <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200 flex items-center">
                  Read More
                  <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <button className="btn-secondary">View All Insights</button>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;