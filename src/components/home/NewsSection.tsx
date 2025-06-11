import React from 'react';
import { motion } from 'framer-motion';
import { newsItems } from '../../data/content';
import Button from '../ui/Button';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom'; 

const NewsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">News & Insights</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news, publications, and stories from Nivishe Foundation.
          </p>
          <div className="w-24 h-1 bg-orange-400 mx-auto mt-6"></div>
        </div>

        <div style={{
          width: '100%',
          marginTop: '20px',
        }}>
          <h3 style={{
            fontSize: '24px',
            fontWeight: '600',
            color: '#EA580C',
            marginBottom: '30px',
            textAlign: 'center',
            fontFamily: "'Montserrat', sans-serif",
          }}>Recent Newsletters</h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '30px',
          }}>
            {[
              {
                id: 1,
                title: 'Nurturing women globally.',
                date: 'April 2025',
                excerpt: 'A celebration of the incredible women who nurture our world.',
                image: '/images/News.jpg', // Fixed image path
                link: 'https://us19.campaign-archive.com/?u=4415a2c09926577da0dc2a67d&id=f4da8e5704',
              },
              {
                id: 2,
                title: 'women’s empowerment and community resilience.',
                date: 'March 2025',
                excerpt: 'We are Back, Stronger Than Ever!',
                image: '/images/Newsletter-2.jpg', // Fixed image path
                link: 'https://mailchi.mp/628e9743c58d/nivishe-march-newsletter-157',
              },
            ].map(newsletter => (
              <div
                key={newsletter.id}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 5px 15px rgba(234, 88, 12, 0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(234, 88, 12, 0.15)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(234, 88, 12, 0.1)';
                }}
              >
                <div style={{
                  height: '180px',
                  overflow: 'hidden',
                }}>
                  <img
                    src={newsletter.image}
                    alt={newsletter.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                    }}
                    onMouseOver={(e) => {
                      e.target.style.transform = 'scale(1.05)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.transform = 'scale(1)';
                    }}
                  />
                </div>
                <div style={{
                  padding: '25px',
                }}>
                  <div style={{
                    color: '#EA580C',
                    fontSize: '14px',
                    marginBottom: '8px',
                    fontWeight: '500',
                  }}>
                    {newsletter.date}
                  </div>
                  <h4 style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    marginBottom: '12px',
                    color: '#EA580C',
                    fontFamily: "'Montserrat', sans-serif",
                    lineHeight: '1.4',
                  }}>
                    {newsletter.title}
                  </h4>
                  <p style={{
                    fontSize: '15px',
                    lineHeight: '1.6',
                    color: '#555',
                    marginBottom: '20px',
                  }}>
                    {newsletter.excerpt}
                  </p>
                  <a
                    href={newsletter.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '15px',
                      fontWeight: '600',
                      color: '#EA580C',
                      display: 'inline-block',
                      position: 'relative',
                      cursor: 'pointer',
                      fontFamily: "'Montserrat', sans-serif",
                      textDecoration: 'none',
                    }}
                  >
                    Read Newsletter
                    <div style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: '0',
                      width: '0',
                      height: '2px',
                      backgroundColor: '#EA580C',
                      transition: 'width 0.3s ease',
                    }}></div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

       {/* <div className="text-center">
  <Link to="/news-letter">
    <Button variant="primary">View All News</Button>
  </Link>
</div> */}
      </div>
    </section>
  );
};

export default NewsSection;