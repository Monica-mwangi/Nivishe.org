import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, Globe, Radio, Book, BarChart3 } from "lucide-react";

const CommunityResearch = () => {
  const researchFocus = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Mental health needs",
      description: "In marginalized communities"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Cultural expressions",
      description: "Of trauma and healing"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Care access barriers",
      description: "To mental health services"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Community solutions",
      description: "Driven by local wisdom"
    }
  ];

  const materials = [
    {
      icon: <Book className="w-8 h-8" />,
      title: "Comic books",
      description: "Mental health stories in local languages"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Visual infographics",
      description: "For low literacy communities"
    },
    {
      icon: <Radio className="w-8 h-8" />,
      title: "Audio resources",
      description: "Through community radio"
    }
  ];

  const impactMetrics = [
    "300+ Fellows trained in mental health, counseling, and neuroscience across Africa",
    "40,000+ community members directly reached through Fellow-led activities",
    "500+ refugees and displaced youth engaged through our Thematic Fellowship",
    "300+ caregivers and teachers trained in child mental health support",
    "10+ localized educational tools (comics, podcasts, guides) developed",
    "5,000+ community members equipped with culturally relevant knowledge"
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-orange-400 to-orange-600">
      {/* Hero Section */}
      <div className="relative h-[100vh] min-h-[500px] flex items-center justify-center pt-16 overflow-hidden">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src="/images/Knowledge.jpg"
                  alt="Mental health champions"
                  className="w-full h-full object-cover object-center brightness-90 contrast-105 saturate-110 transition-transform duration-500 ease-in-out transform hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80 z-10" />
              </div>
      
              {/* Text Content */}
              <div className="container mx-auto px-4 relative z-20 text-center">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-md"
                > Research and Knowledge Production
                </motion.h1>
      
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto drop-shadow-sm"
                >
                Our realities, our stories, our solutions.
                </motion.p>
              </div>
            </div>
      

      {/* Research Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-orange-600">
              We conduct community-led research focusing on:
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {researchFocus.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-orange-50 p-6 rounded-xl shadow-sm border border-orange-100"
                >
                  <div className="text-orange-600 mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-orange-600">
                We produce accessible materials such as:
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {materials.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-amber-50 p-6 rounded-xl shadow-sm border border-amber-100"
                  >
                    <div className="text-amber-600 mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Highlight */}
      {/* <section className="py-16 bg-gradient-to-r from-orange-500 to-amber-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Impact Highlight
              </h2>
              <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
                Our research findings have informed policy dialogues, contributed to national conversations on mental health equity, and equipped over <span className="font-bold text-amber-200">5,000 community members</span> with culturally relevant mental health knowledge.
              </p>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      {/* <section className="py-16 bg-gradient-to-br from-amber-100 to-orange-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-orange-700">
            ❤️ In Their Words
          </h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-orange-200"
            >
              <blockquote className="text-gray-700 italic text-lg mb-4">
                "The Nivishe Fellowship taught me that healing is not just for therapists — it's for everyone. Now I am leading mental health circles in my refugee community."
              </blockquote>
              <p className="font-bold text-orange-700">— Awel, 24-year-old thematic fellow</p>
              <p className="text-gray-600">Sudanese refugee in Kenya</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-orange-200"
            >
              <blockquote className="text-gray-700 italic text-lg mb-4">
                "Training teachers saved lives in our village. Children who were once labeled 'bad' are now seen as grieving or hurting. That shift changed everything."
              </blockquote>
              <p className="font-bold text-orange-700">— Rebecca, caregiver</p>
              <p className="text-gray-600">Capacity building trainee</p>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Impact Section */}
      <section className="py-16 bg-black text-white">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
       Our Impact So Far
    </h2>
    
    <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {impactMetrics.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-gray-900 p-6 rounded-xl border border-orange-800/50 hover:border-amber-500 transition-all hover:shadow-lg hover:shadow-orange-400/10"
        >
          <p className="flex items-start">
            <span className="text-orange-400 mr-2 text-xl">•</span>
            <span className="text-gray-200">{item}</span>
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600 text-center"> {/* Changed here */}
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ scale: 0.95 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
        When we build local knowledge, we build collective healing.
      </h2>
      <p className="text-xl mb-10 text-white max-w-2xl mx-auto">
        Join us in creating a mental health revolution grounded in African wisdom, resilience, and community leadership.
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        {/* <a
          href="/fellowships"
          className="bg-white hover:bg-amber-100 text-orange-600 px-6 py-3 rounded-lg font-medium transition-colors shadow-lg"
        >
          Learn More About the Fellowship
        </a> */}
        <a
          href="/fellowships"
          className="bg-amber-800 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-lg"
        >
          Apply For Fellowships
        </a>
        {/* <a
          href="/donate"
          className="bg-orange-800 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-lg"
        >
          Support Our Research
        </a> */}
      </div>
    </motion.div>
  </div>
</section>
    </div>
  );
};

export default CommunityResearch;