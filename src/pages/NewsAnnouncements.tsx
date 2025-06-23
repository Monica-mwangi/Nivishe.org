import React, { useState } from 'react';

const NewsAnnouncements: React.FC = () => {
  // Track expanded state for each card individually
  const [expandedStates, setExpandedStates] = useState<{[key: number]: boolean}>({});

  const toggleCard = (id: number) => {
    setExpandedStates(prev => ({
      ...prev,
      [id]: !prev[id] // Toggle only the clicked card's state
    }));
  };

  const newsItems = [
    {
      id: 1,
      title: 'Nivishe Foundation & IREX Partner to Tackle Technology-Facilitated Gender-Based Violence',
      date: 'June 2025',
      excerpt: 'A critical new initiative addressing the urgent mental health challenges of Technology-Facilitated GBV through a survivor-centered approach.',
      fullContent: (
        <div className="text-gray-700 space-y-4">
          <p>Nairobi, Kenya – Nivishe Foundation is thrilled to announce a significant new partnership with IREX, an international non-profit dedicated to building more just, prosperous, and inclusive societies.</p>
          <p>Over the coming weeks, Nivishe and IREX will embark on a crucial initiative aimed at addressing one of the most urgent and often overlooked mental health challenges of our time: Technology-Facilitated Gender-Based Violence (TFGBV).</p>
          <p>This collaboration comes at a critical juncture as digital spaces increasingly become arenas where harmful experiences manifest. TFGBV encompasses a wide range of abusive behaviors including cyberbullying, image-based abuse, deepfakes, cyberstalking, and online sexual harassment. These are not merely digital threats; they are real, deeply impactful experiences that severely compromise the mental health and well-being of survivors, particularly women, girls, and marginalized communities.</p>
          <p>At Nivishe Foundation, we firmly believe that mental health support must evolve to meet the challenges of the digital age. This strategic partnership with IREX is therefore paramount. It underscores our conviction that effectively addressing TFGBV demands a comprehensive, multi-stakeholder, and crucially, a survivor-centered approach.</p>
          <p>We invite the public, stakeholders, and community members to stay tuned as we roll out a series of impactful activities including webinars, engaging conversations, and comprehensive resources designed to build understanding, offer pathways to healing for survivors, and demand collective action against TFGBV.</p>
          <p>Join us as we work to create safer digital spaces and ensure that mental health support is accessible to those impacted by online harms.</p>
        </div>
      ),
      image: '/images/irex-partner.png',
      hasExpandableContent: true
    },
    {
      id: 2,
      title: 'Nivishe Foundation & Basic Needs Basic Rights Kenya Announce Partnership to Bolster Mental Health Support for Displaced Communities',
      date: 'June 2025',
      excerpt: 'A new partnership to expand mental health and psychosocial support for displaced communities in Kenya.',
      fullContent: (
        <div className="text-gray-700 space-y-4">
          <p>Nairobi, Kenya</p>
          <p>In a significant announcement made today in honour of World Refugee Day, Nivishe Foundation proudly unveiled a new, impactful partnership with Basic Needs Basic Rights Kenya. This collaboration marks a crucial step forward in expanding vital mental health and psychosocial support for displaced communities.</p>
          <p>World Refugee Day serves as a poignant reminder of the immense strength, courage, and resilience exhibited by individuals forced to flee their homes due to conflict, persecution, or natural disasters. For years, Nivishe Foundation has been a steadfast ally to these communities, providing essential services such as Mental Health and Psychosocial Support (MHPSS), trauma healing interventions, and culturally sensitive emotional literacy programs. Our foundational belief is that every person, regardless of their origin, deserves the fundamental right to heal, to thrive, and to belong.</p>
          <p>This new strategic project with Basic Needs Basic Rights Kenya will significantly expand the reach and depth of our efforts, delivering comprehensive support through:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Trauma-informed MHPSS support: Tailored interventions designed to address the unique psychological impacts of displacement.</li>
            <li>Mental health literacy workshops: Empowering individuals and communities with knowledge and tools to understand and manage mental well-being.</li>
            <li>Livelihood and resilience-building programs: Integrating mental health support with initiatives that foster self-reliance and empower individuals to rebuild their lives.</li>
            <li>Safe, inclusive spaces for healing and growth: Creating environments where displaced individuals can find solace, share experiences, and embark on their healing journeys.</li>
          </ul>
          <p>This partnership is more than just a collaboration; it is a profound promise to uphold dignity, instill hope, and create tangible opportunities for refugees, asylum seekers, and all displaced persons. Nivishe Foundation reaffirms its message to every individual in these communities: "We see you. We hear you. And we are walking with you."</p>
          <p>Stay tuned for more details regarding this transformative project, including our upcoming Call for Applications for participation in these vital programs.</p>
        </div>
      ),
      image: '/images/Nairobi.png',
      hasExpandableContent: true
    },
    {
      id: 3,
      title: 'Linkages Series',
      date: 'June 2025',
      excerpt: 'Improving mental health care in the global south. Workship Series 3, June 20th 12:00 - 12:45 ET',
      image: '/images/linkage-cropped.png',
      link: 'https://www.neidonors.org/copy-of-linkages-series-1',
      linkLabel: 'Click here to register',
      hasExpandableContent: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">News & Announcements</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news and announcements from Nivishe Foundation.
          </p>
          <div className="w-24 h-1 bg-orange-400 mx-auto mt-6"></div>
        </div>

        <div className="w-full mt-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {newsItems.map(newsletter => (
              <div
                key={newsletter.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={newsletter.image}
                    alt={newsletter.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-orange-500 text-sm font-medium mb-2">
                    {newsletter.date}
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-orange-500 font-montserrat leading-snug">
                    {newsletter.title}
                  </h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {newsletter.excerpt}
                  </p>

                  {/* Expanded content shows only for this specific card */}
                  {newsletter.hasExpandableContent && expandedStates[newsletter.id] && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      {newsletter.fullContent}
                    </div>
                  )}

                  <div className="flex justify-between items-center">
                    {newsletter.link ? (
                      <a
                        href={newsletter.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-500 font-semibold relative group"
                      >
                        {newsletter.linkLabel}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    ) : <div></div>}

                    {/* Expand button only for expandable cards */}
                    {newsletter.hasExpandableContent && (
                      <button
                        onClick={() => toggleCard(newsletter.id)}
                        className="text-orange-500 font-semibold relative group"
                      >
                        {expandedStates[newsletter.id] ? 'Read Less' : 'Read More'}
                        <span 
                          className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${expandedStates[newsletter.id] ? 'w-full' : 'w-0 group-hover:w-full'}`}
                        ></span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsAnnouncements;