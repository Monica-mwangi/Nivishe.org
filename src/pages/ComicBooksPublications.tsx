import React from 'react';

const ComicBooksPublications = () => {
  return (
    <div 
      id="newsletter"
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '80px 20px 40px',
        fontFamily: "'Merriweather', serif",
        color: '#333',
        scrollMarginTop: '80px',
      }}
    >
      <h1 style={{
        fontSize: '42px',
        fontWeight: '700',
        color: '#EA580C',
        textAlign: 'center',
        marginBottom: '40px',
        fontFamily: "'Montserrat', sans-serif",
        letterSpacing: '0.5px',
        paddingTop: '20px',
      }}>Comic Book</h1>
      
      <p style={{
        fontSize: '18px',
        lineHeight: '1.8',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto 40px',
        fontFamily: "'Montserrat', sans-serif",
        color: '#555',
      }}>
        Our comic book is a powerful visual storytelling tool that combines engaging illustrations 
        with narratives that reflect the lived experiences of youth and communities. Through vibrant artwork 
        and relatable content, it aims to spark conversations around mental health, resilience, and healing.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '30px',
      }}>
        {[
          {
            id: 1,
            title: 'Comic Book.',
            excerpt: 'A visually-driven Comic Book with impactful storytelling',
            image: '/images/book.png',
            link: 'https://nivishefoundation.org/wp-content/uploads/2025/04/Understanding-Emotions_02_PRINT_14dec24-1_compressed.pdf', // update with real link if available
          },
        ].map(item => (
          <div
            key={item.id}
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
            <div style={{ height: '180px', overflow: 'hidden' }}>
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                }}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
              />
            </div>
            <div style={{ padding: '25px' }}>
              <h4 style={{
                fontSize: '20px',
                fontWeight: '600',
                marginBottom: '12px',
                color: '#EA580C',
                fontFamily: "'Montserrat', sans-serif",
                lineHeight: '1.4',
              }}>
                {item.title}
              </h4>
              <p style={{
                fontSize: '15px',
                lineHeight: '1.6',
                color: '#555',
                marginBottom: '20px',
              }}>
                {item.excerpt}
              </p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '15px',
                  fontWeight: '600',
                  color: '#EA580C',
                  display: 'inline-block',
                  fontFamily: "'Montserrat', sans-serif",
                  textDecoration: 'none',
                }}
              >
                View Comic Book
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComicBooksPublications;
