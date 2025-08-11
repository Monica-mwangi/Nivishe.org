import React, { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const benefits = [
    "Weekly industry insights and trends",
    "Exclusive access to new courses and content",
    "Expert tips and actionable strategies",
    "Early bird discounts on services",
    "Free resources and templates"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-orange-400 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-300 rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-white rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mb-8">
            <Mail className="text-white" size={32} />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stay in the Loop
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our newsletter and be the first to know about industry insights, 
            new courses, exclusive offers, and digital marketing strategies that drive results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Benefits */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">What You'll Get:</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-blue-100">
                  <CheckCircle className="text-orange-400 mr-3 flex-shrink-0" size={20} />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Form */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Subscribe Now</h3>
            
            {isSubscribed ? (
              <div className="text-center">
                <CheckCircle className="text-green-400 mx-auto mb-4" size={48} />
                <h4 className="text-xl font-bold text-white mb-2">Thank You!</h4>
                <p className="text-blue-100">You've successfully subscribed to our newsletter.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Subscribe to Newsletter</span>
                </button>
                
                <p className="text-xs text-blue-200 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-white mb-2">25,000+</div>
            <div className="text-blue-100">Newsletter Subscribers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
            <div className="text-blue-100">Content Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">Weekly</div>
            <div className="text-blue-100">Fresh Content</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;