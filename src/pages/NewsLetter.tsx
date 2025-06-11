import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // In a real app, this would send the email to a backend service
      console.log('Subscribing email:', email);
      setSubscribed(true);
      setEmail('');
    }
  };

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
          
          {subscribed ? (
            <div style={{
              backgroundColor: '#10B981',
              color: 'white',
              padding: '20px',
              borderRadius: '8px',
              fontSize: '18px',
              fontWeight: '500',
              animation: 'fadeIn 0.5s ease-in',
            }}>
              Thank you for subscribing! Your first newsletter will arrive soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              width: '100%',
            }}>
              <div style={{
                display: 'flex',
                gap: '10px',
                width: '100%',
                flexWrap: 'wrap',
              }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  style={{
                    flex: '1',
                    minWidth: '250px',
                    padding: '16px 20px',
                    fontSize: '16px',
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    outline: 'none',
                    transition: 'border-color 0.3s',
                    fontFamily: 'inherit',
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#EA580C'}
                  onBlur={(e) => e.target.style.borderColor = '#ddd'}
                />
                <button
                  type="submit"
                  style={{
                    backgroundColor: '#EA580C',
                    color: 'white',
                    fontWeight: '600',
                    padding: '16px 30px',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    transition: 'all 0.3s ease',
                    fontFamily: "'Montserrat', sans-serif",
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
                  Subscribe
                </button>
              </div>
              <p style={{
                fontSize: '14px',
                color: '#666',
                marginTop: '10px',
              }}>
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          )}
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
                excerpt: 'a celebration of the incredible women who nurture our world.',
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
        
        {/* <a
          href="#"
          style={{
            backgroundColor: 'transparent',
            color: '#EA580C',
            border: '2px solid #EA580C',
            borderRadius: '8px',
            padding: '14px 28px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            marginTop: '20px',
            transition: 'all 0.3s ease',
            fontFamily: "'Montserrat', sans-serif",
            textDecoration: 'none',
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#EA580C';
            e.target.style.color = 'white';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = '#EA580C';
          }}
        >
          View All Newsletters
        </a> */}
      </div>
    </div>
  );
};

export default Newsletter;