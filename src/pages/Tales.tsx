import React, { useState } from 'react';

// Sample data for tales
const tales = [
  {
    id: 1,
    title: "The Garden of Thoughts",
    author: "Elena Winters",
    coverImage: "https://images.pexels.com/photos/5560240/pexels-photo-5560240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    excerpt: "An allegorical tale about a woman who discovers she can visit a magical garden where her thoughts grow as plants, teaching her about nurturing positive thinking.",
    readTime: 12,
    category: "Metaphorical",
    theme: "Mindfulness",
    content: `
      <p>In a small cottage at the edge of a forgotten forest lived Eliza, a woman whose mind was often crowded with worries. Each morning, she would wake with a heaviness in her chest, her thoughts tangling like vines around her heart.</p>
      
      <p>One particularly difficult morning, as dawn broke through her window, Eliza noticed something unusual—a small golden key on her bedside table that she was certain hadn't been there the night before. Attached to it was a tag with elegant script that simply read: "For the garden."</p>
      
      <p>Puzzled but intrigued, Eliza took the key and wandered into her backyard. There, hidden behind the overgrown rosebushes, she discovered a door she had never seen before—a door in the middle of her garden wall, with no building attached to it.</p>
      
      <p>The key fit perfectly. As Eliza turned it, the door swung open to reveal not her neighbor's yard as expected, but an expansive, magnificent garden unlike anything she had ever seen. The garden seemed to stretch endlessly, divided into countless unique sections, each with different plants, flowers, and trees.</p>
      
      <p>As she stepped through the doorway, an elderly gardener approached her with a warm smile.</p>
      
      <p>"Welcome to your Garden of Thoughts," he said. "I've been tending it for quite some time, but it's best cared for by its owner."</p>
      
      <p>"My garden?" Eliza asked, confused. "I don't understand."</p>
      
      <p>"Every thought you've ever had grows here," the gardener explained, gesturing around them. "Some grow as flowers, others as trees, some as weeds or thorny bushes. They grow according to how you nurture them."</p>
      
      <p>He led her through the garden, showing her different sections. In one area, beautiful wildflowers grew in abundance—her moments of joy and gratitude. In another, strong oak trees stood tall—her convictions and values. But there were also areas overrun with thorny weeds—her fears and self-doubts—and withering plants—dreams she had abandoned.</p>
      
      <p>"Today, I'll show you how to tend this garden," the gardener said, handing her a set of tools. "For it is not the thoughts themselves that shape your life, but how you care for them."</p>
      
      <p>Throughout the day, the gardener taught Eliza how to prune back the thorny vines of anxiety, how to uproot the deep-seated weeds of negative self-talk, and how to plant seeds of new possibilities. He showed her how to water the flowers of gratitude and how to provide support for the tender shoots of new confidence.</p>
      
      <p>"The garden needs daily tending," he explained as the sun began to set. "Even a few minutes each day makes a difference. And remember, even the most overgrown gardens can be restored with patience and care."</p>
      
      <p>As Eliza prepared to leave, she turned to thank the gardener, but he was gone. Instead, she found a small journal and a pen on a nearby bench. The first page was titled "Garden Notes" with a simple message: "Record what you've tended to today and what you hope to nurture tomorrow."</p>
      
      <p>Eliza returned to the garden each morning after that. Some days she had only a few minutes to tend to it, pulling a weed here or watering a flower there. Other days, she spent hours cultivating new areas, planting seeds of projects she had always wanted to pursue or nurturing budding relationships that needed attention.</p>
      
      <p>Over time, the garden transformed—and so did Eliza. The areas of thorns and weeds became smaller, while the flowers and fruit-bearing trees flourished. She found that changes in the garden reflected in her daily life: as she cultivated calm in the garden, she felt more peace in challenging situations; as she nurtured confidence, she found herself speaking up more at work.</p>
      
      <p>The gardener would appear occasionally, offering guidance when she faced a particularly stubborn weed or when a storm had damaged a beloved section. "Remember," he told her during one visit, "gardens, like minds, are never finished. They are always growing, always changing with the seasons. The joy is in the tending."</p>
      
      <p>Years passed, and Eliza became skilled at garden-keeping. One day, while helping her young niece through a difficult time, she noticed a small golden key appearing on the girl's bookshelf.</p>
      
      <p>With a smile, Eliza realized it was her turn to become the guide, to teach another how thoughts, like plants, can be cultivated with care and attention—how with the right tending, even the wildest mental gardens can become places of beauty, strength, and peace.</p>
    `,
    audio: true,
    featured: true
  },
  {
    id: 2,
    title: "The Echo Chamber",
    author: "Marcus Lee",
    coverImage: "https://images.pexels.com/photos/3277468/pexels-photo-3277468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    excerpt: "A modern parable about a man who discovers that the voices in his head are echoes of past encounters, and learns to change the conversation.",
    readTime: 15,
    category: "Parable",
    theme: "Self-Talk",
    content: `A modern parable about a man who discovers that the voices in his head are echoes of past encounters, and learns to change the conversation.`,
    audio: true,
    featured: false
  },
  {
    id: 3,
    title: "The Weight Collector",
    author: "Sophia Chen",
    coverImage: "https://images.pexels.com/photos/4101142/pexels-photo-4101142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    excerpt: "In a city where everyone carries visible burdens, a mysterious figure teaches people how to set down weights that aren't truly theirs to bear.",
    readTime: 18,
    category: "Fantasy",
    theme: "Boundaries",
    content: `In a city where everyone carries visible burdens, a mysterious figure teaches people how to set down weights that aren't truly theirs to bear.`,
    audio: false,
    featured: true
  },
  {
    id: 4,
    title: "The Curator of Memories",
    author: "Aiden Johnson",
    coverImage: "https://images.pexels.com/photos/4240498/pexels-photo-4240498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    excerpt: "An elderly man with memory loss creates a museum of his life's moments, discovering that what we choose to remember shapes who we become.",
    readTime: 20,
    category: "Realistic Fiction",
    theme: "Memory & Identity",
    content: `An elderly man with memory loss creates a museum of his life's moments, discovering that what we choose to remember shapes who we become.`,
    audio: true,
    featured: false
  },
  {
    id: 5,
    title: "The Color Thief",
    author: "Natalie Rivera",
    coverImage: "https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    excerpt: "A tale about depression depicted as a world where a mysterious entity steals colors, and the journey to reclaim them one shade at a time.",
    readTime: 14,
    category: "Metaphorical",
    theme: "Depression",
    content: `A tale about depression depicted as a world where a mysterious entity steals colors, and the journey to reclaim them one shade at a time.`,
    audio: true,
    featured: false
  },
  {
    id: 6,
    title: "The Bridge Builder",
    author: "Thomas Wilson",
    coverImage: "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    excerpt: "A story about a woman who specializes in building bridges between people who have become islands, and her hardest project—reconnecting with herself.",
    readTime: 16,
    category: "Contemporary",
    theme: "Connection",
    content: `A story about a woman who specializes in building bridges between people who have become islands, and her hardest project—reconnecting with herself.`,
    audio: false,
    featured: true
  }
];

const categories = ["All", "Metaphorical", "Parable", "Fantasy", "Realistic Fiction", "Contemporary"];
const themes = ["All", "Mindfulness", "Self-Talk", "Boundaries", "Memory & Identity", "Depression", "Connection"];

const Tales = () => {
  const [selectedTale, setSelectedTale] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTheme, setActiveTheme] = useState("All");
  const [viewMode, setViewMode] = useState("card"); // card or list
  
  // Filter tales based on active filters
  const filteredTales = tales.filter(tale => {
    if (activeCategory !== "All" && tale.category !== activeCategory) return false;
    if (activeTheme !== "All" && tale.theme !== activeTheme) return false;
    return true;
  });
  
  // Featured tales for the hero section
  const featuredTales = tales.filter(tale => tale.featured);
  
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
        color: '#D35400', // Dark orange
        textAlign: 'center',
        marginBottom: '20px',
        fontFamily: "'Montserrat', sans-serif",
        letterSpacing: '0.5px',
      }}>Healing Tales</h1>
      
      <p style={{
        fontSize: '18px',
        lineHeight: '1.8',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto 40px',
        color: '#555',
      }}>
        Explore our collection of metaphorical stories, parables, and narratives that illuminate mental health concepts through the power of storytelling.
      </p>
      
      {selectedTale ? (
        <div style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
          marginBottom: '40px',
        }}>
          <button
            onClick={() => setSelectedTale(null)}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: '#F39C12', // Medium orange
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
            ← Back to all tales
          </button>
          
          <div style={{
            height: '400px',
            overflow: 'hidden',
            position: 'relative',
          }}>
            <img
              src={selectedTale.coverImage}
              alt={selectedTale.title}
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
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                marginBottom: '15px',
              }}>
                <span style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  padding: '5px 12px',
                  borderRadius: '50px',
                  fontSize: '14px',
                  fontFamily: "'Montserrat', sans-serif",
                }}>
                  {selectedTale.category}
                </span>
                <span style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  padding: '5px 12px',
                  borderRadius: '50px',
                  fontSize: '14px',
                  fontFamily: "'Montserrat', sans-serif",
                }}>
                  {selectedTale.theme}
                </span>
              </div>
              
              <h2 style={{
                fontSize: '36px',
                fontWeight: '700',
                marginBottom: '10px',
                fontFamily: "'Montserrat', sans-serif",
                lineHeight: '1.3',
              }}>
                {selectedTale.title}
              </h2>
              
              <p style={{
                fontSize: '18px',
              }}>
                By {selectedTale.author}
              </p>
            </div>
          </div>
          
          <div style={{
            padding: '40px',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '30px',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#666',
                  fontSize: '15px',
                }}>
                  <span style={{
                    fontSize: '18px',
                  }}>🕒</span>
                  <span>{selectedTale.readTime} min read</span>
                </div>
                
                {selectedTale.audio && (
                  <button
                    style={{
                      backgroundColor: '#FEF5E7', // Light orange
                      color: '#D35400', // Dark orange
                      border: 'none',
                      borderRadius: '8px',
                      padding: '10px 15px',
                      fontSize: '14px',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    <span style={{
                      fontSize: '18px',
                    }}>🔊</span>
                    Listen to Audio Version
                  </button>
                )}
              </div>
              
              <div style={{
                display: 'flex',
                gap: '10px',
              }}>
                <button
                  style={{
                    backgroundColor: 'transparent',
                    color: '#D35400', // Dark orange
                    border: 'none',
                    borderRadius: '8px',
                    padding: '10px',
                    fontSize: '14px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{
                    fontSize: '18px',
                  }}>⚙️</span>
                </button>
                
                <button
                  style={{
                    backgroundColor: 'transparent',
                    color: '#D35400', // Dark orange
                    border: 'none',
                    borderRadius: '8px',
                    padding: '10px',
                    fontSize: '14px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{
                    fontSize: '18px',
                  }}>📤</span>
                </button>
              </div>
            </div>
            
            <div
              style={{
                fontSize: '17px',
                lineHeight: '1.8',
                color: '#333',
              }}
              dangerouslySetInnerHTML={{ __html: selectedTale.content }}
            />
            
            <div style={{
              borderTop: '1px solid #eee',
              marginTop: '40px',
              paddingTop: '30px',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '30px',
              }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#D35400', // Dark orange
                  fontFamily: "'Montserrat', sans-serif",
                }}>
                  Reflection Questions
                </h3>
                
                <button
                  style={{
                    backgroundColor: 'transparent',
                    color: '#F39C12', // Medium orange
                    border: 'none',
                    fontSize: '15px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  Download Discussion Guide
                </button>
              </div>
              
              <ol style={{
                paddingLeft: '25px',
                marginBottom: '30px',
              }}>
                <li style={{
                  marginBottom: '15px',
                  fontSize: '16px',
                  lineHeight: '1.6',
                }}>
                  What metaphors or symbols in this tale resonated most with your own experiences?
                </li>
                <li style={{
                  marginBottom: '15px',
                  fontSize: '16px',
                  lineHeight: '1.6',
                }}>
                  How might the central character's journey reflect aspects of mental health challenges or growth?
                </li>
                <li style={{
                  marginBottom: '15px',
                  fontSize: '16px',
                  lineHeight: '1.6',
                }}>
                  What lessons from this story could be applied to everyday mental wellbeing practices?
                </li>
                <li style={{
                  marginBottom: '15px',
                  fontSize: '16px',
                  lineHeight: '1.6',
                }}>
                  If you were to continue this story, what might happen next for the characters?
                </li>
              </ol>
              
              <div style={{
                textAlign: 'center',
                marginTop: '30px',
              }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#D35400', // Dark orange
                  marginBottom: '20px',
                  fontFamily: "'Montserrat', sans-serif",
                }}>
                  Share Your Thoughts
                </h3>
                
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '15px',
                }}>
                  <button
                    style={{
                      backgroundColor: '#E67E22', // Orange
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
                      e.target.style.backgroundColor = '#D35400'; // Dark orange
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = '#E67E22'; // Orange
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    Join Discussion Group
                  </button>
                  
                  <button
                    style={{
                      backgroundColor: 'transparent',
                      color: '#D35400', // Dark orange
                      border: '2px solid #F39C12', // Medium orange
                      borderRadius: '8px',
                      padding: '14px 26px',
                      fontSize: '16px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = '#F39C12'; // Medium orange
                      e.target.style.color = 'white';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = '#D35400'; // Dark orange
                    }}
                  >
                    Write Your Response
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
            marginBottom: '40px',
            position: 'relative',
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1.5fr 1fr',
              minHeight: '400px',
            }}>
              <div style={{
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
                <h2 style={{
                  fontSize: '32px',
                  fontWeight: '700',
                  color: '#D35400', // Dark orange
                  marginBottom: '20px',
                  fontFamily: "'Montserrat', sans-serif",
                  lineHeight: '1.3',
                }}>
                  Featured Story: {featuredTales[0]?.title}
                </h2>
                
                <p style={{
                  fontSize: '17px',
                  lineHeight: '1.7',
                  color: '#555',
                  marginBottom: '25px',
                }}>
                  {featuredTales[0]?.excerpt}
                </p>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  marginBottom: '30px',
                }}>
                  <span style={{
                    backgroundColor: '#FEF5E7', // Light orange
                    color: '#D35400', // Dark orange
                    padding: '6px 12px',
                    borderRadius: '50px',
                    fontSize: '14px',
                    fontFamily: "'Montserrat', sans-serif",
                  }}>
                    {featuredTales[0]?.category}
                  </span>
                  
                  <span style={{
                    backgroundColor: '#FEF5E7', // Light orange
                    color: '#D35400', // Dark orange
                    padding: '6px 12px',
                    borderRadius: '50px',
                    fontSize: '14px',
                    fontFamily: "'Montserrat', sans-serif",
                  }}>
                    {featuredTales[0]?.theme}
                  </span>
                  
                  <span style={{
                    color: '#666',
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                  }}>
                    <span>🕒</span>
                    <span>{featuredTales[0]?.readTime} min read</span>
                  </span>
                </div>
                
                <button
                  onClick={() => setSelectedTale(featuredTales[0])}
                  style={{
                    backgroundColor: '#F39C12', // Medium orange
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '14px 26px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontFamily: "'Montserrat', sans-serif",
                    alignSelf: 'flex-start',
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#E67E22'; // Orange
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#F39C12'; // Medium orange
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  Read This Story
                </button>
              </div>
              
              <div style={{
                position: 'relative',
                overflow: 'hidden',
              }}>
                <img
                  src={featuredTales[0]?.coverImage}
                  alt={featuredTales[0]?.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                
                {featuredTales[0]?.audio && (
                  <div style={{
                    position: 'absolute',
                    bottom: '20px',
                    right: '20px',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    color: '#D35400', // Dark orange
                    borderRadius: '50px',
                    padding: '8px 16px',
                    fontSize: '14px',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontFamily: "'Montserrat', sans-serif",
                  }}>
                    <span>🔊</span>
                    <span>Audio Available</span>
                  </div>
                )}
              </div>
            </div>
            
            <div style={{
              padding: '30px',
              borderTop: '1px solid #eee',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
            }}>
              {featuredTales.slice(1, 4).map(tale => (
                <div
                  key={tale.id}
                  onClick={() => setSelectedTale(tale)}
                  style={{
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                  }}
                >
                  <div style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    flexShrink: 0,
                  }}>
                    <img
                      src={tale.coverImage}
                      alt={tale.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                  
                  <div>
                    <h4 style={{
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#D35400', // Dark orange
                      marginBottom: '5px',
                      fontFamily: "'Montserrat', sans-serif",
                    }}>
                      {tale.title}
                    </h4>
                    
                    <p style={{
                      fontSize: '13px',
                      color: '#666',
                    }}>
                      {tale.theme} • {tale.readTime} min
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '30px',
            gap: '20px',
          }}>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '15px',
            }}>
              <div>
                <label
                  htmlFor="category-filter"
                  style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#555',
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  Category
                </label>
                
                <select
                  id="category-filter"
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  style={{
                    padding: '10px 15px',
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '14px',
                    color: '#333',
                    minWidth: '150px',
                    cursor: 'pointer',
                  }}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label
                  htmlFor="theme-filter"
                  style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#555',
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  Theme
                </label>
                
                <select
                  id="theme-filter"
                  value={activeTheme}
                  onChange={(e) => setActiveTheme(e.target.value)}
                  style={{
                    padding: '10px 15px',
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '14px',
                    color: '#333',
                    minWidth: '150px',
                    cursor: 'pointer',
                  }}
                >
                  {themes.map(theme => (
                    <option key={theme} value={theme}>
                      {theme}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div style={{
              display: 'flex',
              gap: '10px',
            }}>
              <button
                onClick={() => setViewMode('card')}
                style={{
                  backgroundColor: viewMode === 'card' ? '#F39C12' : 'transparent', // Medium orange
                  color: viewMode === 'card' ? 'white' : '#D35400', // Dark orange
                  border: `1px solid ${viewMode === 'card' ? '#F39C12' : '#d0d0d0'}`, // Medium orange
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
                onClick={() => setViewMode('list')}
                style={{
                  backgroundColor: viewMode === 'list' ? '#F39C12' : 'transparent', // Medium orange
                  color: viewMode === 'list' ? 'white' : '#D35400', // Dark orange
                  border: `1px solid ${viewMode === 'list' ? '#F39C12' : '#d0d0d0'}`, // Medium orange
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
          
          {viewMode === 'card' ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
              gap: '30px',
            }}>
              {filteredTales.map(tale => (
                <div
                  key={tale.id}
                  onClick={() => setSelectedTale(tale)}
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
                    height: '200px',
                    overflow: 'hidden',
                    position: 'relative',
                  }}>
                    <img
                      src={tale.coverImage}
                      alt={tale.title}
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
                    
                    {tale.audio && (
                      <div style={{
                        position: 'absolute',
                        bottom: '15px',
                        right: '15px',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        color: '#D35400', // Dark orange
                        borderRadius: '50px',
                        padding: '5px 12px',
                        fontSize: '12px',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        fontFamily: "'Montserrat', sans-serif",
                      }}>
                        <span>🔊</span>
                        <span>Audio</span>
                      </div>
                    )}
                  </div>
                  
                  <div style={{
                    padding: '25px',
                  }}>
                    <div style={{
                      display: 'flex',
                      gap: '10px',
                      marginBottom: '15px',
                    }}>
                      <span style={{
                        backgroundColor: '#FEF5E7', // Light orange
                        color: '#D35400', // Dark orange
                        padding: '4px 10px',
                        borderRadius: '50px',
                        fontSize: '12px',
                        fontFamily: "'Montserrat', sans-serif",
                      }}>
                        {tale.category}
                      </span>
                      
                      <span style={{
                        backgroundColor: '#FEF5E7', // Light orange
                        color: '#D35400', // Dark orange
                        padding: '4px 10px',
                        borderRadius: '50px',
                        fontSize: '12px',
                        fontFamily: "'Montserrat', sans-serif",
                      }}>
                        {tale.theme}
                      </span>
                    </div>
                    
                    <h3 style={{
                      fontSize: '20px',
                      fontWeight: '700',
                      marginBottom: '10px',
                      color: '#D35400', // Dark orange
                      fontFamily: "'Montserrat', sans-serif",
                      lineHeight: '1.4',
                    }}>
                      {tale.title}
                    </h3>
                    
                    <p style={{
                      fontSize: '14px',
                      color: '#666',
                      marginBottom: '12px',
                    }}>
                      By {tale.author}
                    </p>
                    
                    <p style={{
                      fontSize: '15px',
                      lineHeight: '1.6',
                      color: '#555',
                      marginBottom: '15px',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}>
                      {tale.excerpt}
                    </p>
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                      <div style={{
                        color: '#666',
                        fontSize: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                      }}>
                        <span>🕒</span>
                        <span>{tale.readTime} min read</span>
                      </div>
                      
                      <span style={{
                        color: '#F39C12', // Medium orange
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
              {filteredTales.map(tale => (
                <div
                  key={tale.id}
                  onClick={() => setSelectedTale(tale)}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
                    display: 'grid',
                    gridTemplateColumns: '200px 1fr',
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
                      src={tale.coverImage}
                      alt={tale.title}
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
                    
                    {tale.audio && (
                      <div style={{
                        position: 'absolute',
                        bottom: '15px',
                        right: '15px',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        color: '#D35400', // Dark orange
                        borderRadius: '50px',
                        padding: '5px 12px',
                        fontSize: '12px',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        fontFamily: "'Montserrat', sans-serif",
                      }}>
                        <span>🔊</span>
                        <span>Audio</span>
                      </div>
                    )}
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
                        gap: '10px',
                        marginBottom: '15px',
                      }}>
                        <span style={{
                          backgroundColor: '#FEF5E7', // Light orange
                          color: '#D35400', // Dark orange
                          padding: '4px 10px',
                          borderRadius: '50px',
                          fontSize: '12px',
                          fontFamily: "'Montserrat', sans-serif",
                        }}>
                          {tale.category}
                        </span>
                        
                        <span style={{
                          backgroundColor: '#FEF5E7', // Light orange
                          color: '#D35400', // Dark orange
                          padding: '4px 10px',
                          borderRadius: '50px',
                          fontSize: '12px',
                          fontFamily: "'Montserrat', sans-serif",
                        }}>
                          {tale.theme}
                        </span>
                      </div>
                      
                      <h3 style={{
                        fontSize: '20px',
                        fontWeight: '700',
                        marginBottom: '10px',
                        color: '#D35400', // Dark orange
                        fontFamily: "'Montserrat', sans-serif",
                        lineHeight: '1.3',
                      }}>
                        {tale.title}
                      </h3>
                      
                      <p style={{
                        fontSize: '14px',
                        color: '#666',
                        marginBottom: '12px',
                      }}>
                        By {tale.author}
                      </p>
                      
                      <p style={{
                        fontSize: '15px',
                        lineHeight: '1.6',
                        color: '#555',
                        marginBottom: '15px',
                      }}>
                        {tale.excerpt}
                      </p>
                    </div>
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                      <div style={{
                        color: '#666',
                        fontSize: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                      }}>
                        <span>🕒</span>
                        <span>{tale.readTime} min read</span>
                      </div>
                      
                      <span style={{
                        color: '#F39C12', // Medium orange
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
          )}
          
          {filteredTales.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '40px 20px',
              backgroundColor: '#f9f9f9',
              borderRadius: '12px',
              marginTop: '20px',
            }}>
              <h3 style={{
                fontSize: '22px',
                color: '#D35400', // Dark orange
                marginBottom: '15px',
                fontFamily: "'Montserrat', sans-serif",
              }}>No stories found</h3>
              <p style={{
                fontSize: '16px',
                color: '#555',
              }}>Try adjusting your filters to see more results.</p>
            </div>
          )}
          
          <div style={{
            textAlign: 'center',
            marginTop: '50px',
            padding: '40px',
            backgroundColor: '#FEF5E7', // Light orange
            borderRadius: '12px',
          }}>
            <h2 style={{
              fontSize: '28px',
              fontWeight: '700',
              color: '#D35400', // Dark orange
              marginBottom: '20px',
              fontFamily: "'Montserrat', sans-serif",
            }}>
              Submit Your Story
            </h2>
            
            <p style={{
              fontSize: '17px',
              lineHeight: '1.7',
              maxWidth: '700px',
              margin: '0 auto 30px',
            }}>
              Are you a writer interested in exploring mental health themes through storytelling? We welcome submissions for our Healing Tales collection.
            </p>
            
            <button
              style={{
                backgroundColor: '#E67E22', // Orange
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
                e.target.style.backgroundColor = '#D35400'; // Dark orange
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#E67E22'; // Orange
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Submission Guidelines
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Tales;