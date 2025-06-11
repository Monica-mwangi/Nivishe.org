import React, { useState } from 'react';

// Sample impact stories data
const stories = [
  {
    id: 1,
    name: "Maya Wilson",
    age: 28,
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    challenge: "Anxiety and Panic Attacks",
    title: "Finding Peace After Years of Anxiety",
    excerpt: "After struggling with debilitating anxiety for over a decade, Maya found support through Nivishe's community program.",
    beforeStory: "For as long as I can remember, anxiety was my constant companion. It started in high school with occasional panic attacks, but by my mid-twenties, it had taken over my life. I couldn't ride public transportation, avoided social gatherings, and eventually had to take a leave of absence from my job. I tried various medications and traditional therapy, but nothing seemed to provide lasting relief. My world was getting smaller and smaller.",
    afterStory: "Through Nivishe's holistic anxiety program, I learned that recovery isn't just about managing symptoms—it's about addressing the whole person. The combination of cognitive-behavioral techniques, mindfulness practices, and community support helped me understand my anxiety triggers and develop effective coping strategies. The peer support group was particularly transformative; knowing I wasn't alone made all the difference. Today, I still experience anxiety occasionally, but it no longer controls my life. I've returned to work, rebuilt relationships, and even started volunteering as a peer mentor to help others on their journey.",
    program: "Anxiety Support Group & Holistic Recovery Program",
    duration: "8 months",
    quote: "I never thought I'd be able to say this, but anxiety is now just a part of my life, not the defining feature of it."
  },
  {
    id: 2,
    name: "James Rodriguez",
    age: 42,
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    challenge: "Depression & Work Burnout",
    title: "Rebuilding After Burnout",
    excerpt: "When depression and burnout forced James to reevaluate his life, Nivishe's workplace wellness program provided a path forward.",
    beforeStory: "I spent twenty years building my career in finance, working 70+ hour weeks and taking pride in my 'hustle.' When the pandemic hit and we shifted to remote work, the boundaries between work and home disappeared completely. I was answering emails at 2 AM and taking calls during family dinners. Within six months, I crashed. I couldn't get out of bed, lost interest in everything, and felt like a complete failure. My doctor diagnosed me with severe depression and burnout.",
    afterStory: "Through my company's partnership with Nivishe, I joined their executive wellness program. What made this program different was its focus on sustainable success rather than just getting me back to work. I learned to establish healthy boundaries, reconnect with personal values, and recognize that my worth isn't tied to my productivity. The cognitive restructuring techniques helped me challenge perfectionistic thinking patterns that had driven my burnout. Most importantly, I developed a new definition of success that includes wellbeing, relationships, and joy—not just professional achievements.",
    program: "Executive Mental Health & Workplace Wellness",
    duration: "12 months",
    quote: "I thought burnout was the price of success. Now I understand that true success includes wellbeing."
  },
  {
    id: 3,
    name: "Sophia Chen",
    age: 19,
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    challenge: "Social Anxiety & Academic Pressure",
    title: "Finding My Voice and Purpose",
    excerpt: "Balancing academic excellence with mental health seemed impossible until Sophia discovered Nivishe's youth program.",
    beforeStory: "As the daughter of immigrants with high expectations, I always felt enormous pressure to succeed academically. By the time I started university, my perfectionism had evolved into paralyzing anxiety. I'd spend hours rewriting assignments, have panic attacks before exams, and avoid class discussions for fear of saying something 'wrong.' I was maintaining a perfect GPA, but at a terrible cost to my mental health. I felt isolated, exhausted, and began having thoughts of dropping out.",
    afterStory: "Through my university's partnership with Nivishe, I joined their student mental health initiative. The program helped me understand how my cultural background, family dynamics, and personal temperament all contributed to my anxiety. I learned practical techniques for managing perfectionism and speaking up in class. The cultural sensitivity of the program was crucial—they understood the complex expectations I navigated as a first-generation student. Gradually, I built confidence in my voice and developed a healthier relationship with achievement. I'm still academically successful, but now success includes my wellbeing too.",
    program: "Young Adult Mental Health Initiative",
    duration: "6 months",
    quote: "I used to think vulnerability was weakness. Now I know it's the source of my strongest connections."
  },
  {
    id: 4,
    name: "Michael Johnson",
    age: 35,
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    challenge: "PTSD & Substance Use",
    title: "Reclaiming My Life After Trauma",
    excerpt: "After military service left Michael with PTSD and substance use issues, Nivishe's integrated treatment program helped him rebuild.",
    beforeStory: "After two tours in Afghanistan, I came home a different person. The nightmares started immediately, along with flashbacks that could be triggered by the smallest things—a car backfiring, crowded spaces, even certain smells. I turned to alcohol to numb the memories and help me sleep. Within a year, I was drinking daily and had pushed away most of my friends and family. I lost my job, my marriage was falling apart, and I felt completely hopeless.",
    afterStory: "Nivishe's veteran program took a dual approach to my recovery, addressing both PTSD and substance use simultaneously. The trauma-focused therapy helped me process experiences I'd been avoiding, while mindfulness practices gave me tools to ground myself during flashbacks. The peer support component was crucial—connecting with other veterans who truly understood made me feel less alone. Recovery hasn't been linear, and I still have difficult days, but I now have effective coping strategies and a supportive community. I've been sober for three years, repaired relationships with my family, and found purpose in mentoring other veterans.",
    program: "Veterans Mental Health & Recovery",
    duration: "18 months",
    quote: "I thought seeking help meant I was weak. Now I know it was the strongest thing I've ever done."
  },
  {
    id: 5,
    name: "Aisha Williams",
    age: 31,
    image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    challenge: "Postpartum Depression",
    title: "From Darkness to Joy: My Postpartum Journey",
    excerpt: "When motherhood wasn't what she expected, Aisha found support through Nivishe's maternal mental health program.",
    beforeStory: "I had always wanted to be a mother, and my pregnancy was planned and joyful. But after my daughter was born, I felt nothing like the blissful mom I expected to be. I was exhausted, anxious, and overwhelmed by simple tasks. Worst of all, I didn't feel the immediate bond with my baby that everyone talked about. Instead, I felt detached and then guilty for feeling that way. I was ashamed to admit my struggles, thinking it meant I was a bad mother. By the time my daughter was three months old, I was barely functioning.",
    afterStory: "My doctor recognized the signs of postpartum depression and connected me with Nivishe's maternal mental health program. The first relief came from simply hearing that my experience was common and treatable. The program combined medical treatment with therapy, practical support, and connection with other new mothers facing similar challenges. They helped me address not just the depression, but also the identity shift and relationship changes that come with motherhood. Gradually, I began to enjoy time with my daughter and develop confidence as a parent. The bond I worried about grew stronger each day. Now she's three, and I've become an advocate for maternal mental health.",
    program: "Maternal Mental Health Initiative",
    duration: "10 months",
    quote: "Motherhood didn't come naturally to me, and that's okay. Growth takes time, and now our connection is stronger for having been consciously built."
  },
  {
    id: 6,
    name: "David Kim",
    age: 45,
    image: "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    challenge: "Grief & Loss",
    title: "Learning to Live After Loss",
    excerpt: "After losing his wife to cancer, David found a way forward through Nivishe's grief support community.",
    beforeStory: "When my wife died after a two-year battle with cancer, I felt like my world had ended. We had been together for twenty years, building a life, raising our son, and making plans for the future. Suddenly, I was a single parent trying to support a grieving teenager while barely functioning myself. I couldn't sleep, had no appetite, and felt disconnected from everything. Well-meaning friends suggested I needed to 'move on,' but I had no idea how to even begin living in a world without her.",
    afterStory: "Nivishe's grief support program helped me understand that grief isn't something you 'get over'—it's something you learn to carry. The group therapy connected me with others who truly understood the depth of loss, while individual sessions helped me process my specific experience. They supported me in finding ways to honor my wife's memory while still building a meaningful future. Perhaps most importantly, they helped me support my son through his own grief journey. Three years later, I still miss her every day, but I've developed a new relationship with grief. We've created new traditions, found joy again, and built a life that carries her legacy forward.",
    program: "Grief & Loss Support Network",
    duration: "14 months",
    quote: "Grief is the price we pay for love, and I wouldn't trade our years together to avoid this pain."
  }
];

const ImpactStories = () => {
  const [selectedStory, setSelectedStory] = useState(null);
  const [storyView, setStoryView] = useState('grid'); // 'grid' or 'list'
  
  // Function to truncate text
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
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
        fontSize: '72px',
        fontWeight: '700',
        color: '#2A5082',
        textAlign: 'center',
        marginBottom: '20px',
        fontFamily: "'Montserrat', sans-serif",
        letterSpacing: '0.5px',
      }}>Impact Stories</h1>
      
      <p style={{
        fontSize: '18px',
        lineHeight: '1.8',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto 40px',
        color: '#555',
      }}>
        Real stories from real people whose lives have been transformed through their mental health journey with Nivishe. These testimonials offer hope, insight, and inspiration.
      </p>
      
      {selectedStory ? (
        <div style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
          marginBottom: '40px',
        }}>
          <button
            onClick={() => setSelectedStory(null)}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: '#6AA5DE',
              fontSize: '16px',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              margin: '30px',
              cursor: 'pointer',
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            ← Back to all stories
          </button>
          
          <div style={{
            height: '400px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <img
              src={selectedStory.image}
              alt={selectedStory.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
              padding: '40px',
              color: 'white',
            }}>
              <h2 style={{
                fontSize: '36px',
                fontWeight: '700',
                marginBottom: '10px',
                fontFamily: "'Montserrat', sans-serif",
                lineHeight: '1.3',
              }}>
                {selectedStory.title}
              </h2>
              <p style={{
                fontSize: '18px',
                fontStyle: 'italic',
              }}>
                {selectedStory.name}, {selectedStory.age}
              </p>
            </div>
          </div>
          
          <div style={{
            padding: '40px',
          }}>
            <div style={{
              display: 'inline-block',
              backgroundColor: '#E5F0FA',
              color: '#2A5082',
              padding: '8px 16px',
              borderRadius: '50px',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '25px',
              fontFamily: "'Montserrat', sans-serif",
            }}>
              {selectedStory.challenge}
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '30px',
              marginBottom: '40px',
            }}>
              <div style={{
                backgroundColor: '#F9F4F0',
                borderRadius: '12px',
                padding: '30px',
              }}>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: '600',
                  color: '#2A5082',
                  marginBottom: '20px',
                  fontFamily: "'Montserrat', sans-serif",
                }}>
                  Before
                </h3>
                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.8',
                }}>
                  {selectedStory.beforeStory}
                </p>
              </div>
              
              <div style={{
                backgroundColor: '#F0F7F4',
                borderRadius: '12px',
                padding: '30px',
              }}>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: '600',
                  color: '#2A5082',
                  marginBottom: '20px',
                  fontFamily: "'Montserrat', sans-serif",
                }}>
                  After
                </h3>
                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.8',
                }}>
                  {selectedStory.afterStory}
                </p>
              </div>
            </div>
            
            <div style={{
              backgroundColor: '#F0F5FA',
              borderRadius: '12px',
              padding: '30px',
              marginBottom: '30px',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute',
                top: '-15px',
                left: '30px',
                fontSize: '60px',
                color: '#6AA5DE',
                fontFamily: 'serif',
                lineHeight: '1',
              }}>
                "
              </div>
              <p style={{
                fontSize: '20px',
                lineHeight: '1.7',
                color: '#2A5082',
                fontStyle: 'italic',
                marginTop: '20px',
                marginBottom: '20px',
                paddingLeft: '20px',
                paddingRight: '20px',
              }}>
                {selectedStory.quote}
              </p>
              <div style={{
                position: 'absolute',
                bottom: '-5px',
                right: '30px',
                fontSize: '60px',
                color: '#6AA5DE',
                fontFamily: 'serif',
                lineHeight: '1',
              }}>
                "
              </div>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
              marginBottom: '30px',
            }}>
              <div>
                <h4 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#2A5082',
                  marginBottom: '8px',
                  fontFamily: "'Montserrat', sans-serif",
                }}>
                  Program
                </h4>
                <p>{selectedStory.program}</p>
              </div>
              
              <div>
                <h4 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#2A5082',
                  marginBottom: '8px',
                  fontFamily: "'Montserrat', sans-serif",
                }}>
                  Duration
                </h4>
                <p>{selectedStory.duration}</p>
              </div>
            </div>
            
            <div style={{
              borderTop: '1px solid #eee',
              paddingTop: '30px',
              textAlign: 'center',
            }}>
              <p style={{
                fontSize: '16px',
                marginBottom: '20px',
              }}>
                Inspired by this story? Learn more about our programs or share your own journey.
              </p>
              <div style={{
                display: 'flex',
                gap: '15px',
                justifyContent: 'center',
              }}>
                <button
                  style={{
                    backgroundColor: '#7AC7A9',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '14px 26px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#68B596';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#7AC7A9';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  Explore Programs
                </button>
                
                <button
                  style={{
                    backgroundColor: 'transparent',
                    color: '#2A5082',
                    border: '2px solid #6AA5DE',
                    borderRadius: '8px',
                    padding: '14px 26px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#6AA5DE';
                    e.target.style.color = 'white';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#2A5082';
                  }}
                >
                  Share Your Story
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '30px',
          }}>
            <p style={{
              fontSize: '16px',
            }}>
              Showing <span style={{ fontWeight: '600' }}>{stories.length}</span> stories
            </p>
            
            <div style={{
              display: 'flex',
              gap: '10px',
            }}>
              <button
                onClick={() => setStoryView('grid')}
                style={{
                  backgroundColor: storyView === 'grid' ? '#6AA5DE' : 'transparent',
                  color: storyView === 'grid' ? 'white' : '#2A5082',
                  border: `1px solid ${storyView === 'grid' ? '#6AA5DE' : '#d0d0d0'}`,
                  borderRadius: '4px',
                  padding: '8px 12px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  transition: 'all 0.3s ease',
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                Grid View
              </button>
              
              <button
                onClick={() => setStoryView('list')}
                style={{
                  backgroundColor: storyView === 'list' ? '#6AA5DE' : 'transparent',
                  color: storyView === 'list' ? 'white' : '#2A5082',
                  border: `1px solid ${storyView === 'list' ? '#6AA5DE' : '#d0d0d0'}`,
                  borderRadius: '4px',
                  padding: '8px 12px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  transition: 'all 0.3s ease',
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                List View
              </button>
            </div>
          </div>
          
          {storyView === 'grid' ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
              gap: '30px',
            }}>
              {stories.map(story => (
                <div
                  key={story.id}
                  onClick={() => setSelectedStory(story)}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
                    cursor: 'pointer',
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
                    height: '250px',
                    overflow: 'hidden',
                    position: 'relative',
                  }}>
                    <img
                      src={story.image}
                      alt={story.name}
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
                    <div style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      backgroundColor: '#6AA5DE',
                      color: 'white',
                      padding: '6px 12px',
                      borderRadius: '50px',
                      fontSize: '12px',
                      fontWeight: '600',
                      fontFamily: "'Montserrat', sans-serif",
                    }}>
                      {story.challenge}
                    </div>
                  </div>
                  
                  <div style={{
                    padding: '25px',
                  }}>
                    <h3 style={{
                      fontSize: '20px',
                      fontWeight: '700',
                      marginBottom: '10px',
                      color: '#2A5082',
                      fontFamily: "'Montserrat', sans-serif",
                      lineHeight: '1.4',
                    }}>
                      {story.title}
                    </h3>
                    
                    <p style={{
                      fontSize: '15px',
                      color: '#666',
                      marginBottom: '15px',
                    }}>
                      {story.name}, {story.age}
                    </p>
                    
                    <p style={{
                      fontSize: '15px',
                      lineHeight: '1.7',
                      color: '#555',
                      marginBottom: '20px',
                    }}>
                      {story.excerpt}
                    </p>
                    
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                      <div style={{
                        backgroundColor: '#F0F5FA',
                        color: '#2A5082',
                        padding: '6px 12px',
                        borderRadius: '50px',
                        fontSize: '13px',
                        fontFamily: "'Montserrat', sans-serif",
                      }}>
                        {story.program.split('&')[0].trim()}
                      </div>
                      
                      <span style={{
                        color: '#6AA5DE',
                        fontWeight: '600',
                        fontSize: '15px',
                        fontFamily: "'Montserrat', sans-serif",
                      }}>
                        Read Story →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}>
              {stories.map(story => (
                <div
                  key={story.id}
                  onClick={() => setSelectedStory(story)}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
                    display: 'grid',
                    gridTemplateColumns: '250px 1fr',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.08)';
                  }}
                >
                  <div style={{
                    height: '100%',
                    overflow: 'hidden',
                    position: 'relative',
                  }}>
                    <img
                      src={story.image}
                      alt={story.name}
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
                    <div style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      backgroundColor: '#6AA5DE',
                      color: 'white',
                      padding: '6px 12px',
                      borderRadius: '50px',
                      fontSize: '12px',
                      fontWeight: '600',
                      fontFamily: "'Montserrat', sans-serif",
                    }}>
                      {story.challenge}
                    </div>
                  </div>
                  
                  <div style={{
                    padding: '25px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}>
                    <div>
                      <h3 style={{
                        fontSize: '22px',
                        fontWeight: '700',
                        marginBottom: '10px',
                        color: '#2A5082',
                        fontFamily: "'Montserrat', sans-serif",
                        lineHeight: '1.3',
                      }}>
                        {story.title}
                      </h3>
                      
                      <p style={{
                        fontSize: '15px',
                        color: '#666',
                        marginBottom: '12px',
                      }}>
                        {story.name}, {story.age}
                      </p>
                      
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '20px',
                        marginBottom: '15px',
                      }}>
                        <div>
                          <h4 style={{
                            fontSize: '14px',
                            fontWeight: '600',
                            color: '#2A5082',
                            marginBottom: '5px',
                            fontFamily: "'Montserrat', sans-serif",
                          }}>
                            Before
                          </h4>
                          <p style={{
                            fontSize: '14px',
                            lineHeight: '1.6',
                            color: '#555',
                          }}>
                            {truncateText(story.beforeStory, 120)}
                          </p>
                        </div>
                        
                        <div>
                          <h4 style={{
                            fontSize: '14px',
                            fontWeight: '600',
                            color: '#2A5082',
                            marginBottom: '5px',
                            fontFamily: "'Montserrat', sans-serif",
                          }}>
                            After
                          </h4>
                          <p style={{
                            fontSize: '14px',
                            lineHeight: '1.6',
                            color: '#555',
                          }}>
                            {truncateText(story.afterStory, 120)}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: '10px',
                    }}>
                      <div style={{
                        backgroundColor: '#F0F5FA',
                        color: '#2A5082',
                        padding: '6px 12px',
                        borderRadius: '50px',
                        fontSize: '13px',
                        fontFamily: "'Montserrat', sans-serif",
                      }}>
                        {story.program.split('&')[0].trim()}
                      </div>
                      
                      <span style={{
                        color: '#6AA5DE',
                        fontWeight: '600',
                        fontSize: '15px',
                        fontFamily: "'Montserrat', sans-serif",
                      }}>
                        Read Full Story →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
      
      <div style={{
        textAlign: 'center',
        marginTop: '50px',
        padding: '40px',
        backgroundColor: '#F0F5FA',
        borderRadius: '12px',
      }}>
        <h2 style={{
          fontSize: '28px',
          fontWeight: '700',
          color: '#2A5082',
          marginBottom: '20px',
          fontFamily: "'Montserrat', sans-serif",
        }}>
          Share Your Journey
        </h2>
        
        <p style={{
          fontSize: '17px',
          lineHeight: '1.7',
          maxWidth: '700px',
          margin: '0 auto 30px',
        }}>
          Your story matters and could inspire others on their path to wellbeing. If you'd like to share your experience with the Nivishe community, we'd love to hear from you.
        </p>
        
        <button
          style={{
            backgroundColor: '#7AC7A9',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            padding: '14px 30px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontFamily: "'Montserrat', sans-serif",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#68B596';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#7AC7A9';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          Submit Your Story
        </button>
      </div>
    </div>
  );
};

export default ImpactStories;