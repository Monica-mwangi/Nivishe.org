import React from 'react';

const Newsletter = () => {
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
      }}>Nivishe Newsletter</h1>
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '40px',
        background: 'linear-gradient(135deg, #fef3e7 0%, #ffedd5 100%)',
        borderRadius: '16px',
        padding: '40px',
        boxShadow: '0 10px 30px rgba(234, 88, 12, 0.1)',
      }}>
        <div style={{
          maxWidth: '600px',
          textAlign: 'center',
        }}>
          <h2 style={{
            fontSize: '28px',
            fontWeight: '600',
            color: '#EA580C',
            marginBottom: '20px',
            fontFamily: "'Montserrat', sans-serif",
          }}>Stay Connected on Your Mental Health Journey</h2>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.8',
            marginBottom: '30px',
          }}>
            Subscribe to our monthly newsletter for expert advice, inspiring stories, 
            mindfulness techniques, and updates on our latest resources to support your wellbeing.
          </p>

          <a
            href="https://mailchi.mp/a744b87ddacc/nivishe-community"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#EA580C',
              color: 'white',
              fontWeight: '600',
              padding: '16px 30px',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              fontFamily: "'Montserrat', sans-serif",
              textAlign: 'center',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#C2410C';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#EA580C';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            Subscribe to Newsletter
          </a>
        </div>

        <div style={{ width: '100%', marginTop: '20px' }}>
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
                id: 5,
                title: 'Fellowships, Partnerships & Healing Language in Mental Health Advocacy.',
                date: 'July 2025',
                excerpt: "Nivishe launched a stigma-busting Kiswahili Mental Health Lexicon, expanded fellowships for refugees, drove key partnerships in peacebuilding and girls' empowerment, and championed digital-age mental health advocacy propelling culturally rooted care across East Africa.",
                image: '/images/july.png',
                link: 'https://us19.campaign-archive.com/?u=4415a2c09926577da0dc2a67d&id=df7874177b',
                linkLabel: 'Read Newsletter'
              },
              {
                id: 4,
                title: 'Significant strides made in advancing mental health awareness and support through the Nivishe network.',
                date: 'June 2025',
                excerpt: 'Nivishe Foundation celebrates major strides in mental health advocacy, partnerships, and youth empowerment, while unveiling a refreshed, impact-driven website.',
                image: '/images/june.png', // Fixed image path
                link: 'https://us19.campaign-archive.com/?u=4415a2c09926577da0dc2a67d&id=2e51a80165',

                linkLabel: 'Read Newsletter'
              },
              {
                id: 1,
                title: 'Fellowship Milestones, Partnerships & Mental Health Advocacy.',
                date: 'May 2025',
                excerpt: 'Nivishe Foundation celebrated a successful May 2025 with fellowship milestones, strategic partnerships, a podcast feature, and impactful events while gearing up for a dynamic June ahead.',
                image: '/images/May.png',
                link: 'https://us19.campaign-archive.com/?u=4415a2c09926577da0dc2a67d&id=214599c6ba',
              },
              {
                id: 2,
                title: 'Nurturing women globally.',
                date: 'April 2025',
                excerpt: 'A celebration of the incredible women who nurture our world.',
                image: '/images/News.jpg',
                link: 'https://us19.campaign-archive.com/?u=4415a2c09926577da0dc2a67d&id=f4da8e5704',
              },
              {
                id: 3,
                title: 'Women’s empowerment and community resilience.',
                date: 'March 2025',
                excerpt: 'We are Back, Stronger Than Ever!',
                image: '/images/Newsletter-2.jpg',
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
                <div style={{ height: '180px', overflow: 'hidden' }}>
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
                <div style={{ padding: '25px' }}>
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
                      textDecoration: 'none',
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    Read Newsletter
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
