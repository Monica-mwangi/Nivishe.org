import React, { useState } from 'react';

// Sample data for news and announcements
const newsItems = [
  {
    id: 1,
    title: 'Nivishe Opens New Virtual Support Groups',
    date: 'June 15, 2025',
    category: 'Programs',
    image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    excerpt: 'We\'re excited to announce the launch of six new virtual support groups focused on specific mental health needs and communities.',
    content: 'Nivishe is expanding its community support with six new specialized virtual groups launching next month. These groups will focus on anxiety management, grief support, LGBTQ+ mental health, teen wellbeing, parenting challenges, and workplace mental health. Each group will be facilitated by licensed therapists with expertise in these areas.'
  },
  {
    id: 2,
    title: 'Mental Health Awareness Month Activities',
    date: 'May 5, 2025',
    category: 'Events',
    image: 'https://images.pexels.com/photos/6551097/pexels-photo-6551097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    excerpt: 'Join us for a month of special workshops, panels, and community events celebrating mental health awareness.',
    content: 'This May, Nivishe is hosting a series of free virtual and in-person events to mark Mental Health Awareness Month. Activities include expert panels, mindfulness workshops, community art projects, and educational webinars. All events are designed to reduce stigma, increase awareness, and provide practical tools for mental wellbeing.'
  },
  {
    id: 3,
    title: 'New Mobile App Features Released',
    date: 'April 22, 2025',
    category: 'Technology',
    image: 'https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    excerpt: 'Version 2.0 of the Nivishe app includes mood tracking, guided meditations, and personalized resource recommendations.',
    content: 'We\'ve just released a major update to the Nivishe mobile app with several powerful new features to support your mental health journey. The update includes an advanced mood tracking system, a library of guided meditations, personalized resource recommendations based on your needs, and improved community support features.'
  },
  {
    id: 4,
    title: 'Nivishe Partners with Local Schools',
    date: 'March 10, 2025',
    category: 'Community',
    image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    excerpt: 'New initiative brings mental health education and resources to 25 schools in underserved communities.',
    content: 'Nivishe has launched a new partnership with the Regional School District to bring mental health resources to 25 schools in underserved communities. The program includes teacher training, parent workshops, student support groups, and age-appropriate mental health curriculum materials.'
  },
  {
    id: 5,
    title: 'Research Study Participants Needed',
    date: 'February 18, 2025',
    category: 'Research',
    image: 'https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    excerpt: 'Join our latest study examining the impact of digital mental health interventions on daily wellbeing.',
    content: 'Nivishe Research Division is seeking participants for a new study examining how digital mental health tools affect daily wellbeing and stress management. Participants will use our digital tools for 8 weeks and complete brief assessments. Compensation is provided, and all data will remain confidential.'
  },
  {
    id: 6,
    title: 'Annual Conference Registration Now Open',
    date: 'January 30, 2025',
    category: 'Events',
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    excerpt: 'Early bird registration is now available for the 2025 Nivishe Mental Health Conference.',
    content: 'Registration is now open for our annual conference, "Building Resilient Communities," scheduled for September 15-17, 2025. The conference features keynote speakers Dr. Maya Henderson and Dr. James Liu, plus over 50 workshops on the latest mental health research, treatment approaches, and community initiatives. Early bird pricing is available until March 31.'
  }
];

const NewsAnnouncements = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedItemId, setExpandedItemId] = useState(null);
  
  const categories = ['All', 'Events', 'Programs', 'Technology', 'Community', 'Research'];

  const filteredNews = selectedCategory === 'All' 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory);

  const toggleExpand = (id) => {
    setExpandedItemId(expandedItemId === id ? null : id);
  };

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
      fontFamily: "'Merriweather', serif",
      color: '#333',
    }}>
      <h1 style={{
        fontSize: '64px',
        fontWeight: '700',
        color: '#D35400',
        textAlign: 'center',
        marginBottom: '30px',
        fontFamily: "'Montserrat', sans-serif",
        letterSpacing: '0.5px',
      }}>News & Announcements</h1>
      
      <p style={{
        fontSize: '18px',
        lineHeight: '1.8',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto 40px',
        color: '#555',
      }}>
        Stay updated with the latest news, events, and initiatives from Nivishe as we continue our mission to support mental health and wellbeing in our communities.
      </p>
      
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '10px',
        marginBottom: '40px',
      }}>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              backgroundColor: selectedCategory === category ? '#E67E22' : 'transparent',
              color: selectedCategory === category ? 'white' : '#D35400',
              border: `2px solid ${selectedCategory === category ? '#E67E22' : '#d0d0d0'}`,
              borderRadius: '50px',
              padding: '10px 20px',
              fontSize: '15px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontFamily: "'Montserrat', sans-serif",
            }}
            onMouseOver={(e) => {
              if (selectedCategory !== category) {
                e.target.style.borderColor = '#E67E22';
                e.target.style.color = '#E67E22';
              }
            }}
            onMouseOut={(e) => {
              if (selectedCategory !== category) {
                e.target.style.borderColor = '#d0d0d0';
                e.target.style.color = '#D35400';
              }
            }}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '30px',
      }}>
        {filteredNews.map(item => (
          <div
            key={item.id}
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.08)';
            }}
          >
            <div style={{
              height: '200px',
              overflow: 'hidden',
              position: 'relative',
            }}>
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'scale(1.1)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'scale(1)';
                }}
              />
              <div style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                backgroundColor: '#E67E22',
                color: 'white',
                padding: '6px 12px',
                borderRadius: '50px',
                fontSize: '12px',
                fontWeight: '600',
                fontFamily: "'Montserrat', sans-serif",
              }}>
                {item.category}
              </div>
              <div style={{
                position: 'absolute',
                bottom: '16px',
                right: '16px',
                backgroundColor: 'rgba(255, 255, 255, 0.85)',
                padding: '6px 12px',
                borderRadius: '50px',
                fontSize: '12px',
                fontWeight: '600',
                color: '#D35400',
                fontFamily: "'Montserrat', sans-serif",
              }}>
                {item.date}
              </div>
            </div>
            
            <div style={{
              padding: '25px',
            }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '700',
                marginBottom: '15px',
                color: '#D35400',
                fontFamily: "'Montserrat', sans-serif",
                lineHeight: '1.4',
              }}>
                {item.title}
              </h3>
              
              <p style={{
                fontSize: '15px',
                lineHeight: '1.7',
                color: '#555',
                marginBottom: '20px',
              }}>
                {expandedItemId === item.id ? item.content : item.excerpt}
              </p>
              
              <button
                onClick={() => toggleExpand(item.id)}
                style={{
                  backgroundColor: 'transparent',
                  color: '#E67E22',
                  border: 'none',
                  fontSize: '15px',
                  fontWeight: '600',
                  padding: '5px 0',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                {expandedItemId === item.id ? 'Read Less' : 'Read More'}
                <span style={{
                  marginLeft: '5px',
                  transition: 'transform 0.3s ease',
                  transform: expandedItemId === item.id ? 'rotate(180deg)' : 'rotate(0deg)',
                }}>
                  ↓
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {filteredNews.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '40px 20px',
          backgroundColor: '#f9f9f9',
          borderRadius: '12px',
          marginTop: '20px',
        }}>
          <h3 style={{
            fontSize: '22px',
            color: '#D35400',
            marginBottom: '15px',
            fontFamily: "'Montserrat', sans-serif",
          }}>No items found in this category</h3>
          <p style={{
            fontSize: '16px',
            color: '#555',
          }}>Please try selecting a different category.</p>
        </div>
      )}
    </div>
  );
};

export default NewsAnnouncements;