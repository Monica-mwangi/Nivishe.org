// pages/programs/binti-wellness.tsx
import React from 'react';
import PageLayout from '../../components/layout/PageLayout';

const BintiWellnessProgram: React.FC = () => {
  return (
    <PageLayout
      coverImage="/images/binti.jpg"
      title="Binti Wellness Circles"
      subtitle="“Every girl deserves a safe space to grow, play, and just be.”"
    >
      <section className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        {/* Intro Section */}
        <div className="bg-orange-50 border-l-4 border-orange-400 p-8 rounded-xl shadow-md text-center">
          <h2 className="text-3xl font-bold text-orange-600 mb-4">Why Binti Wellness Matters</h2>
          <p className="text-gray-700 text-lg">
            At Nivishe, we see every adolescent girl as a daughter a Binti worthy of protection, love, and empowerment.
            Binti Wellness Circles are weekly Saturday gatherings that provide safe and nurturing spaces for girls.
          </p>
        </div>

        {/* Importance Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border-l-4 border-orange-400 p-6 rounded-lg shadow text-center">
            <h4 className="text-xl font-bold text-orange-500 mb-2">Safe, Joyful Spaces</h4>
            <p className="text-gray-700">
              Play, art, dance, and storytelling are tools for healing and self-expression.
            </p>
          </div>
          <div className="bg-white border-l-4 border-orange-400 p-6 rounded-lg shadow text-center">
            <h4 className="text-xl font-bold text-orange-500 mb-2">Mental Health Literacy</h4>
            <p className="text-gray-700">
              Learning about emotions, coping strategies, and resilience building.
            </p>
          </div>
          <div className="bg-white border-l-4 border-orange-400 p-6 rounded-lg shadow text-center">
            <h4 className="text-xl font-bold text-orange-500 mb-2">Peer Support Networks</h4>
            <p className="text-gray-700">
              Reducing isolation and fostering a sense of belonging among girls.
            </p>
          </div>
        </div>

        {/* Systemic Barriers */}
        <div className="bg-orange-100 p-8 rounded-lg shadow-md text-center">
          <h4 className="text-xl font-semibold text-gray-800">
            Adolescent girls face numerous challenges that impact their mental health it's time to change that.
          </h4>
        </div>

        {/* About Section - Enhanced */}
        <div className="bg-gradient-to-br from-orange-50 to-white p-10 rounded-2xl shadow-lg space-y-8 border border-orange-200">
          <div className="text-center">
            <span className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full uppercase tracking-widest text-sm font-medium">
              About Binti Wellness Circles
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-orange-600 mt-4">
              Empowering Girls. Strengthening Communities.
            </h2>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
              Binti Wellness Circles are weekly gatherings focused on adolescent girls living in informal settlements.
              Here, girls build emotional resilience, strengthen their mental health, and support each other in a safe space.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <span className="text-orange-500 mt-1">🎨</span>
                <p className="text-justify"><strong>Safe, joyful spaces:</strong> Where play, art, dance, and storytelling are tools for healing.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-500 mt-1">🧠</span>
                <p className="text-justify"><strong>Mental health literacy:</strong> Learning about emotions, coping strategies, and building resilience.</p>
              </div>
            </div>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <span className="text-orange-500 mt-1">👯‍♀️</span>
                <p className="text-justify"><strong>Peer support networks:</strong> Reducing isolation and promoting a sense of belonging.</p>
              </div>
            </div>
          </div>

          <div className="bg-white border-l-4 border-orange-400 p-6 rounded-md shadow text-center mt-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Why this matters</h3>
            <p className="text-md text-gray-700 text-justify">
              Adolescence is a critical period for mental health. About 50% of mental health conditions begin by the age of 14 (WHO), yet many go undetected, especially in marginalized communities.
              Binti Wellness Circles offer early support to prevent future mental health struggles and help girls build emotional strength.
            </p>
          </div>
        </div>

        {/* Impact */}
        <div className="bg-orange-100 p-8 rounded-xl shadow text-center">
          <h3 className="text-2xl font-bold text-orange-700 mb-2">Impact</h3>
          <p className="text-lg text-gray-800 text-justify">
            Binti Wellness Circles have reached over <strong>1,500 girls</strong>, helping them build confidence and resilience in their communities.
          </p>
        </div>

        {/* YouTube Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
  <h3 className="text-2xl font-bold text-gray-800 mb-6">Watch Binti Wellness Circles in Action</h3>
  <div className="w-full max-w-4xl mx-auto h-[70vh] min-h-[450px]">
    <iframe
      src="https://drive.google.com/file/d/10LbRLTNwhhtc7nWee87fqzV1FpyXSgfS/preview"
      title="Binti Wellness Circles Video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-full rounded-xl shadow-md"
    ></iframe>
  </div>
</div>

        {/* Donate Button */}
        {/* <div className="text-center">
          <a
            href="/donate"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white text-lg font-semibold py-3 px-6 rounded-full shadow-md transition duration-300"
          >
            Donate Now
          </a>
        </div> */}
      </section>
    </PageLayout>
  );
};

export default BintiWellnessProgram;