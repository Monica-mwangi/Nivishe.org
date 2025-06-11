import React, { useState } from 'react';

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: "Finding Calm in Chaos: Mindfulness Practices for Everyday Life",
    author: {
      name: "Dr. Sarah Chen",
      role: "Clinical Psychologist",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    date: "June 10, 2025",
    readTime: 8,
    image: "https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    excerpt: "Discover practical mindfulness techniques that can help you find moments of peace even during your busiest days.",
    content: `
      <p>In our fast-paced world, finding moments of calm can seem like an impossible task. Yet, the practice of mindfulness offers a pathway to peace that's accessible to everyone, regardless of how busy your schedule may be.</p>
      
      <h3>What is Mindfulness?</h3>
      <p>At its core, mindfulness is the practice of bringing your attention to the present moment with openness, curiosity, and acceptance. It's about noticing what's happening right now—in your body, your mind, and your surroundings—without judgment.</p>
      
      <p>Research has consistently shown that regular mindfulness practice can reduce stress, improve focus, enhance emotional regulation, and even strengthen immune function. But how do we incorporate this practice into our already overflowing lives?</p>
      
      <h3>Simple Mindfulness Practices for Busy Days</h3>
      
      <h4>1. Mindful Breathing (2 minutes)</h4>
      <p>The simplest mindfulness practice is simply noticing your breath. Try this: Pause what you're doing and take three deep breaths. Feel the sensation of air entering your nostrils, filling your lungs, and then leaving your body. That's it. You've just practiced mindfulness.</p>
      
      <h4>2. Sensory Awareness (1 minute)</h4>
      <p>Take a moment to notice five things you can see, four things you can touch, three things you can hear, two things you can smell, and one thing you can taste. This simple exercise grounds you in the present moment through your senses.</p>
      
      <h4>3. Mindful Transitions (30 seconds)</h4>
      <p>Use the transitions in your day—getting into your car, walking to a meeting, waiting for an elevator—as mindfulness triggers. During these brief moments, check in with yourself. How are you feeling? What sensations are present in your body? This transforms "wasted" time into valuable moments of self-awareness.</p>
      
      <h3>The Challenge of Consistency</h3>
      <p>The biggest challenge with mindfulness isn't the practice itself—it's remembering to do it. Here are some strategies to build mindfulness into your routine:</p>
      
      <ul>
        <li>Set reminders on your phone</li>
        <li>Associate mindfulness with existing habits (like brushing your teeth or waiting for coffee)</li>
        <li>Start with just one minute per day</li>
        <li>Practice self-compassion when you forget</li>
      </ul>
      
      <p>Remember that mindfulness is not about achieving a particular state of mind. It's about noticing whatever is already happening. There's no way to "fail" at mindfulness—the only failure is forgetting to practice.</p>
      
      <h3>A Mindful Approach to Challenges</h3>
      <p>Perhaps the most powerful application of mindfulness is in how we respond to difficulties. When faced with a challenging situation, try this approach:</p>
      
      <ol>
        <li>Pause and take a breath</li>
        <li>Notice your thoughts and feelings without judgment</li>
        <li>Remind yourself that thoughts are not facts</li>
        <li>Choose a response rather than reacting automatically</li>
      </ol>
      
      <p>This simple process creates space between stimulus and response—the space where our freedom to choose resides.</p>
      
      <h3>Starting Your Journey</h3>
      <p>Mindfulness is a skill that develops with practice. Begin with just a few minutes daily, and you'll gradually discover its transformative power in your life. The chaos around you may not change, but your relationship to it will.</p>
      
      <p>In the words of Jon Kabat-Zinn, "You can't stop the waves, but you can learn to surf." Mindfulness helps us learn to surf the inevitable waves of life with greater ease, balance, and even joy.</p>
    `,
    tags: ["Mindfulness", "Stress Management", "Self-care", "Mental Wellness"],
    likes: 248,
    comments: 42
  },
  {
    id: 2,
    title: "The Science of Sleep: Why Rest Is Critical for Mental Health",
    author: {
      name: "Dr. Michael Torres",
      role: "Neuropsychologist",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    date: "May 28, 2025",
    readTime: 12,
    image: "https://images.pexels.com/photos/1028741/pexels-photo-1028741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    excerpt: "Learn how quality sleep directly impacts your mental health and discover evidence-based strategies for improving your sleep habits.",
    content: `<p>Sleep is the foundation of mental health, yet it's often the first thing we sacrifice in our busy lives.</p>`,
    tags: ["Sleep", "Neuroscience", "Mental Health", "Wellness"],
    likes: 312,
    comments: 56
  },
  {
    id: 3,
    title: "Breaking the Stigma: Men's Mental Health Conversations",
    author: {
      name: "James Wilson",
      role: "Mental Health Advocate",
      avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    date: "May 15, 2025",
    readTime: 10,
    image: "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    excerpt: "Exploring the unique challenges men face in mental health and how we can create more supportive environments for open conversations.",
    content: `<p>Men are often taught to be strong and silent. This cultural expectation comes at a steep cost to mental health.</p>`,
    tags: ["Men's Health", "Mental Health", "Stigma", "Emotional Wellbeing"],
    likes: 187,
    comments: 38
  },
  {
    id: 4,
    title: "Digital Boundaries: Protecting Your Mental Space in a Connected World",
    author: {
      name: "Sophia Martinez",
      role: "Digital Wellbeing Specialist",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    date: "April 30, 2025",
    readTime: 7,
    image: "https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    excerpt: "How to establish healthy boundaries with technology to reduce anxiety and reclaim your time and attention.",
    content: `<p>Our devices keep us connected, but they can also hijack our attention and mental resources.</p>`,
    tags: ["Digital Wellbeing", "Technology", "Boundaries", "Anxiety"],
    likes: 204,
    comments: 31
  },
  {
    id: 5,
    title: "The Power of Community in Healing",
    author: {
      name: "Dr. Ama Osei",
      role: "Community Psychologist",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    date: "April 18, 2025",
    readTime: 9,
    image: "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    excerpt: "Examining how social connections and community support play a vital role in mental health recovery and resilience.",
    content: `<p>Humans are inherently social creatures. Our connections with others play a critical role in our mental health.</p>`,
    tags: ["Community", "Social Support", "Healing", "Resilience"],
    likes: 251,
    comments: 45
  },
  {
    id: 6,
    title: "Nutrition and Mood: The Food-Mind Connection",
    author: {
      name: "Lisa Chen, RD",
      role: "Nutritional Psychiatry Specialist",
      avatar: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    date: "April 5, 2025",
    readTime: 11,
    image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    excerpt: "Understanding how what you eat affects how you feel, and simple dietary changes that can improve your mental wellbeing.",
    content: `<p>The connection between diet and mental health is becoming increasingly clear through scientific research.</p>`,
    tags: ["Nutrition", "Diet", "Mental Health", "Wellness"],
    likes: 189,
    comments: 27
  }
];

const PerspectiveBlog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [activeTag, setActiveTag] = useState(null);
  
  // Get all unique tags from blog posts
  const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];
  
  // Filter posts by tag if a tag is selected
  const filteredPosts = activeTag 
    ? blogPosts.filter(post => post.tags.includes(activeTag))
    : blogPosts;
  
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
        color: '#2A5082',
        textAlign: 'center',
        marginBottom: '30px',
        fontFamily: "'Montserrat', sans-serif",
        letterSpacing: '0.5px',
      }}>Perspective Blogs</h1>
      
      <p style={{
        fontSize: '18px',
        lineHeight: '1.8',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto 40px',
        color: '#555',
      }}>
        Explore diverse perspectives on mental health, wellness, and personal growth through expert insights and lived experiences.
      </p>
      
      {selectedPost ? (
        <div style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          padding: '40px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
        }}>
          <button
            onClick={() => setSelectedPost(null)}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: '#6AA5DE',
              fontSize: '16px',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '30px',
              cursor: 'pointer',
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            ← Back to all posts
          </button>
          
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              marginBottom: '25px',
            }}>
              <img
                src={selectedPost.author.avatar}
                alt={selectedPost.author.name}
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
              />
              
              <div>
                <p style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#2A5082',
                  marginBottom: '5px',
                  fontFamily: "'Montserrat', sans-serif",
                }}>
                  {selectedPost.author.name}
                </p>
                
                <p style={{
                  fontSize: '14px',
                  color: '#666',
                }}>
                  {selectedPost.author.role}
                </p>
              </div>
            </div>
            
            <h2 style={{
              fontSize: '36px',
              fontWeight: '700',
              color: '#2A5082',
              marginBottom: '20px',
              lineHeight: '1.3',
              fontFamily: "'Montserrat', sans-serif",
            }}>
              {selectedPost.title}
            </h2>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              color: '#666',
              fontSize: '14px',
              marginBottom: '30px',
            }}>
              <span>{selectedPost.date}</span>
              <span>•</span>
              <span>{selectedPost.readTime} min read</span>
            </div>
            
            <div style={{
              width: '100%',
              height: '400px',
              borderRadius: '12px',
              overflow: 'hidden',
              marginBottom: '30px',
            }}>
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
            
            <div
              style={{
                fontSize: '17px',
                lineHeight: '1.8',
                color: '#333',
              }}
              dangerouslySetInnerHTML={{ __html: selectedPost.content }}
            />
            
            <div style={{
              marginTop: '40px',
              paddingTop: '30px',
              borderTop: '1px solid #eee',
            }}>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                marginBottom: '30px',
              }}>
                {selectedPost.tags.map(tag => (
                  <span
                    key={tag}
                    style={{
                      backgroundColor: '#F0F5FA',
                      color: '#2A5082',
                      padding: '8px 16px',
                      borderRadius: '50px',
                      fontSize: '14px',
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  fontSize: '15px',
                  color: '#666',
                }}>
                  <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                  }}>
                    <span>❤️</span>
                    <span>{selectedPost.likes}</span>
                  </span>
                  <span>•</span>
                  <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                  }}>
                    <span>💬</span>
                    <span>{selectedPost.comments} comments</span>
                  </span>
                </div>
                
                <div style={{
                  display: 'flex',
                  gap: '15px',
                }}>
                  <button
                    style={{
                      backgroundColor: '#6AA5DE',
                      color: 'white',
                      border: 'none',
                      borderRadius: '50px',
                      padding: '10px 20px',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'background-color 0.3s ease',
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = '#5789C0';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = '#6AA5DE';
                    }}
                  >
                    Share Post
                  </button>
                  
                  <button
                    style={{
                      backgroundColor: 'transparent',
                      color: '#2A5082',
                      border: '2px solid #6AA5DE',
                      borderRadius: '50px',
                      padding: '10px 20px',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
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
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '40px',
          }}>
            <button
              onClick={() => setActiveTag(null)}
              style={{
                backgroundColor: activeTag === null ? '#6AA5DE' : 'transparent',
                color: activeTag === null ? 'white' : '#2A5082',
                border: `2px solid ${activeTag === null ? '#6AA5DE' : '#d0d0d0'}`,
                borderRadius: '50px',
                padding: '10px 20px',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: "'Montserrat', sans-serif",
              }}
              onMouseOver={(e) => {
                if (activeTag !== null) {
                  e.target.style.borderColor = '#6AA5DE';
                  e.target.style.color = '#6AA5DE';
                }
              }}
              onMouseOut={(e) => {
                if (activeTag !== null) {
                  e.target.style.borderColor = '#d0d0d0';
                  e.target.style.color = '#2A5082';
                }
              }}
            >
              All Topics
            </button>
            
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                style={{
                  backgroundColor: activeTag === tag ? '#6AA5DE' : 'transparent',
                  color: activeTag === tag ? 'white' : '#2A5082',
                  border: `2px solid ${activeTag === tag ? '#6AA5DE' : '#d0d0d0'}`,
                  borderRadius: '50px',
                  padding: '10px 20px',
                  fontSize: '15px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontFamily: "'Montserrat', sans-serif",
                }}
                onMouseOver={(e) => {
                  if (activeTag !== tag) {
                    e.target.style.borderColor = '#6AA5DE';
                    e.target.style.color = '#6AA5DE';
                  }
                }}
                onMouseOut={(e) => {
                  if (activeTag !== tag) {
                    e.target.style.borderColor = '#d0d0d0';
                    e.target.style.color = '#2A5082';
                  }
                }}
              >
                {tag}
              </button>
            ))}
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '30px',
          }}>
            {filteredPosts.map((post, index) => (
              <div
                key={post.id}
                onClick={() => setSelectedPost(post)}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
                  display: 'grid',
                  gridTemplateColumns: index === 0 ? '1fr' : '1fr 2fr',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
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
                {index === 0 ? (
                  <>
                    <div style={{
                      height: '350px',
                      overflow: 'hidden',
                    }}>
                      <img
                        src={post.image}
                        alt={post.title}
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
                      padding: '30px',
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px',
                        marginBottom: '20px',
                      }}>
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                          }}
                        />
                        
                        <div>
                          <p style={{
                            fontSize: '16px',
                            fontWeight: '600',
                            color: '#2A5082',
                            fontFamily: "'Montserrat', sans-serif",
                          }}>
                            {post.author.name}
                          </p>
                          
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            fontSize: '14px',
                            color: '#666',
                            marginTop: '4px',
                          }}>
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.readTime} min read</span>
                          </div>
                        </div>
                      </div>
                      
                      <h2 style={{
                        fontSize: '28px',
                        fontWeight: '700',
                        marginBottom: '15px',
                        color: '#2A5082',
                        fontFamily: "'Montserrat', sans-serif",
                        lineHeight: '1.3',
                      }}>
                        {post.title}
                      </h2>
                      
                      <p style={{
                        fontSize: '17px',
                        lineHeight: '1.7',
                        color: '#555',
                        marginBottom: '20px',
                      }}>
                        {post.excerpt}
                      </p>
                      
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '10px',
                        marginBottom: '20px',
                      }}>
                        {post.tags.map(tag => (
                          <span
                            key={tag}
                            style={{
                              backgroundColor: '#F0F5FA',
                              color: '#2A5082',
                              padding: '6px 12px',
                              borderRadius: '50px',
                              fontSize: '13px',
                              fontFamily: "'Montserrat', sans-serif",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '15px',
                          fontSize: '14px',
                          color: '#666',
                        }}>
                          <span style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                          }}>
                            <span>❤️</span>
                            <span>{post.likes}</span>
                          </span>
                          
                          <span style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                          }}>
                            <span>💬</span>
                            <span>{post.comments}</span>
                          </span>
                        </div>
                        
                        <span style={{
                          color: '#6AA5DE',
                          fontWeight: '600',
                          fontSize: '16px',
                          fontFamily: "'Montserrat', sans-serif",
                        }}>
                          Read More →
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div style={{
                      height: '100%',
                      minHeight: '250px',
                      overflow: 'hidden',
                    }}>
                      <img
                        src={post.image}
                        alt={post.title}
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
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}>
                      <div>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          marginBottom: '15px',
                        }}>
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            style={{
                              width: '40px',
                              height: '40px',
                              borderRadius: '50%',
                              objectFit: 'cover',
                            }}
                          />
                          
                          <div>
                            <p style={{
                              fontSize: '15px',
                              fontWeight: '600',
                              color: '#2A5082',
                              fontFamily: "'Montserrat', sans-serif",
                            }}>
                              {post.author.name}
                            </p>
                            
                            <div style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              fontSize: '13px',
                              color: '#666',
                            }}>
                              <span>{post.date}</span>
                              <span>•</span>
                              <span>{post.readTime} min read</span>
                            </div>
                          </div>
                        </div>
                        
                        <h3 style={{
                          fontSize: '22px',
                          fontWeight: '700',
                          marginBottom: '12px',
                          color: '#2A5082',
                          fontFamily: "'Montserrat', sans-serif",
                          lineHeight: '1.3',
                        }}>
                          {post.title}
                        </h3>
                        
                        <p style={{
                          fontSize: '16px',
                          lineHeight: '1.6',
                          color: '#555',
                          marginBottom: '15px',
                        }}>
                          {post.excerpt}
                        </p>
                      </div>
                      
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                        <div style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '8px',
                        }}>
                          {post.tags.slice(0, 2).map(tag => (
                            <span
                              key={tag}
                              style={{
                                backgroundColor: '#F0F5FA',
                                color: '#2A5082',
                                padding: '5px 10px',
                                borderRadius: '50px',
                                fontSize: '12px',
                                fontFamily: "'Montserrat', sans-serif",
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                          {post.tags.length > 2 && (
                            <span style={{
                              fontSize: '12px',
                              color: '#666',
                            }}>
                              +{post.tags.length - 2}
                            </span>
                          )}
                        </div>
                        
                        <span style={{
                          color: '#6AA5DE',
                          fontWeight: '600',
                          fontSize: '15px',
                          fontFamily: "'Montserrat', sans-serif",
                        }}>
                          Read More →
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '40px 20px',
              backgroundColor: '#f9f9f9',
              borderRadius: '12px',
              marginTop: '20px',
            }}>
              <h3 style={{
                fontSize: '22px',
                color: '#2A5082',
                marginBottom: '15px',
                fontFamily: "'Montserrat', sans-serif",
              }}>No posts found</h3>
              <p style={{
                fontSize: '16px',
                color: '#555',
              }}>Try selecting a different topic.</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PerspectiveBlog;