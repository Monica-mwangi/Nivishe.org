import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';

const ImpactStats: React.FC = () => {
  // Data for key indicators
  const keyIndicators = [
    { name: 'Mothers Supported', value: 1200, description: 'Teen and young mothers receiving mental health support' },
    { name: 'Adolescent Girls', value: 700, description: 'Girls engaged in safe healing spaces' },
    { name: 'Children Benefited', value: 800, description: 'Children receiving play-based mental health support' },
    { name: 'Reported Improvement', value: 95, description: 'Participants feeling better able to manage emotions' },
  ];

  // Data for impact graphs
  const impactData = [
    { name: 'Mothers', value: 1200, fill: '#F97316' },
    { name: 'Adolescent Girls', value: 700, fill: '#EC4899' },
    { name: 'Children', value: 800, fill: '#8B5CF6' },
  ];

  // Data for program effectiveness
  const programData = [
    { subject: 'Emotional Support', A: 95, fullMark: 100 },
    { subject: 'Parenting Skills', A: 85, fullMark: 100 },
    { subject: 'Economic Empowerment', A: 75, fullMark: 100 },
    { subject: 'Peer Support', A: 90, fullMark: 100 },
    { subject: 'Trauma Healing', A: 80, fullMark: 100 },
  ];

  // Benefits data
  const benefits = [
    {
      title: "For Mothers",
      items: [
        "Reduced depression and anxiety symptoms",
        "Improved parenting skills",
        "Economic empowerment through micro-financing",
        "Stronger support networks"
      ]
    },
    {
      title: "For Children",
      items: [
        "Better emotional regulation",
        "Improved social skills",
        "Early trauma intervention",
        "Healthier attachment to caregivers"
      ]
    },
    {
      title: "For Adolescents",
      items: [
        "Increased self-esteem",
        "Better coping mechanisms",
        "Safe spaces for expression",
        "Reduced isolation"
      ]
    }
  ];

  const scrollToNextSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="w-full h-screen relative">
        <img
          src="/images/cute.jpg" 
          // alt="Community mental health support"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-white text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Healing <span className="text-orange-400">Communities</span>,<br />
            One <span className="text-orange-400">Life</span> at a Time
          </motion.h2>
        </div>
      </div>

      {/* Key Indicators Section */}
      <section id="key-indicators" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Key <span className="text-orange-500">Indicators</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyIndicators.map((indicator, index) => (
              <motion.div
                key={indicator.name}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-orange-500 mb-2">
                  {indicator.value}{indicator.name === 'Reported Improvement' ? '%' : '+'}
                </div>
                <h3 className="text-xl font-semibold mb-2">{indicator.name}</h3>
                <p className="text-gray-600">{indicator.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Image Divider Section */}
      <div className="w-full h-96 md:h-[500px] relative">
        <img
          src="/images/good-impact.jpg" 
          // alt="Community mental health support"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-white text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Healing <span className="text-orange-400">Communities</span>,<br />
            One <span className="text-orange-400">Life</span> at a Time */}
          </motion.h2>
        </div>
      </div>

      {/* Direct Impact Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Direct <span className="text-orange-500">Impact</span>
          </h2>
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-semibold mb-6">Numbers That Speak</h3>
              <p className="mb-6 text-gray-300">
                Our programs have reached thousands of mothers, children, and adolescents in marginalized communities, 
                providing critical mental health support and creating lasting change.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-medium text-orange-400">1 in 5 women</h4>
                  <p className="text-gray-300">
                    in low- and middle-income countries experience mental health disorders during pregnancy or after childbirth.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-orange-400">50% of mental health conditions</h4>
                  <p className="text-gray-300">
                    start by the age of 14, yet most remain undetected and untreated in marginalized communities.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-orange-400">70% of incarcerated individuals</h4>
                  <p className="text-gray-300">
                    live with a mental health condition, highlighting the critical need for our justice system interventions.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={impactData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                  <XAxis dataKey="name" stroke="#D1D5DB" />
                  <YAxis stroke="#D1D5DB" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151' }}
                    itemStyle={{ color: '#F3F4F6' }}
                  />
                  <Bar dataKey="value">
                    {impactData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Benefits to <span className="text-orange-500">Individuals & Families</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-4 text-orange-600">{benefit.title}</h3>
                <ul className="space-y-2">
                  {benefit.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-orange-500 mr-2">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infographics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Program <span className="text-orange-500">Effectiveness</span>
          </h2>
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={impactData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {impactData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151' }}
                    itemStyle={{ color: '#F3F4F6' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="lg:w-1/2 h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={programData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" stroke="#4B5563" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#4B5563" />
                  <Radar
                    name="Program Effectiveness"
                    dataKey="A"
                    stroke="#F97316"
                    fill="#F97316"
                    fillOpacity={0.6}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151' }}
                    itemStyle={{ color: '#F3F4F6' }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="mt-12 max-w-3xl mx-auto text-center text-gray-600">
            <p>
              Our programs show high effectiveness across all measured areas, with particular strength in providing 
              emotional support (95%) and building peer support networks (90%). The radar chart demonstrates our 
              comprehensive approach to mental health support.
            </p>
          </div>
        </div>
      </section>

      {/* News Section */}
      {/* <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Latest <span className="text-orange-500">News</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                viewport={{ once: true }}
              >
                <img 
                  src={`/images/news-${item}.jpg`} 
                  alt="News" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-orange-500 mb-2">May {10 + item}, 2024</div>
                  <h3 className="text-xl font-semibold mb-2">Nivishe Expands Mental Health Support to New Communities</h3>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <button className="text-orange-500 font-medium hover:underline">
                    Read More →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Newsletter Section */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl mb-8">
              Subscribe to our newsletter to receive updates on our programs, impact stories, and how you can get involved.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-300"
                required
              />
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors"
              >
                Subscribe
              </button>
            </form>
            
            <p className="mt-4 text-orange-100 text-sm">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImpactStats;