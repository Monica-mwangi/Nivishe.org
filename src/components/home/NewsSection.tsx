import React from 'react';
import { motion } from 'framer-motion';
import { newsItems } from '../../data/content';
import Button from '../ui/Button';
import { Calendar } from 'lucide-react';

const NewsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">News & Insights</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news, publications, and stories from Nivishe Foundation.
          </p>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-0 right-0 bg-yellow-400 text-black px-3 py-1 text-sm font-bold">
                  {item.category}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <Calendar size={14} className="mr-1" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 line-clamp-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.excerpt}</p>
                <Button variant="outline" size="sm" className="!text-sm">
                  Read More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="primary">View All News</Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;