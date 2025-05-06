// pages/programs/hhj.tsx
import React from 'react';
import PageLayout from '../../components/layout/PageLayout';

const HHJProgram: React.FC = () => {
  return (
    <PageLayout
      coverImage="/images/her-healing-journey.jpg"
      title="Her Healing Journey (HHJ)"
      subtitle="“Healing is not a destination — it’s a journey.”"
    >
      <section className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        {/* Intro Section */}
        <div className="bg-orange-50 border-l-4 border-orange-400 p-8 rounded-xl shadow-md text-center">
          <h2 className="text-3xl font-bold text-orange-600 mb-4">Why Her Healing Journey Matters</h2>
          <p className="text-gray-700 text-lg">
            Her Healing Journey is Nivishe’s signature mental health and psychosocial support program for teen and young mothers in underserved communities.
            We walk alongside them — offering healing, hope, and empowerment.
          </p>
        </div>

        {/* Importance Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border-l-4 border-yellow-400 p-6 rounded-lg shadow text-center">
            <h4 className="text-xl font-bold text-yellow-500 mb-2">Mental Health Risk</h4>
            <p className="text-gray-700">
              Teen mothers are <strong>twice as likely</strong> to face depression and anxiety compared to their peers.
            </p>
          </div>
          <div className="bg-white border-l-4 border-yellow-400 p-6 rounded-lg shadow text-center">
            <h4 className="text-xl font-bold text-yellow-500 mb-2">Empowering Futures</h4>
            <p className="text-gray-700">
              Strengthening a mother’s mental well-being <strong>supports her independence, dignity, and future stability</strong>.
            </p>
          </div>
          <div className="bg-white border-l-4 border-yellow-400 p-6 rounded-lg shadow text-center">
            <h4 className="text-xl font-bold text-yellow-500 mb-2">Healthier Generations</h4>
            <p className="text-gray-700">
              Mentally supported mothers raise <strong>healthier, more resilient children</strong>, improving entire communities.
            </p>
          </div>
        </div>

        {/* Systemic Barriers */}
        <div className="bg-yellow-100 p-8 rounded-lg shadow-md text-center">
          <h4 className="text-xl font-semibold text-gray-800">
            Beneath these realities lie <strong>broken healthcare systems</strong> and <strong>under-trained providers</strong> — women deserve better.
          </h4>
        </div>

        {/* About Section - Enhanced */}
        <div className="bg-gradient-to-br from-orange-50 to-white p-10 rounded-2xl shadow-lg space-y-8 border border-orange-200">
          <div className="text-center">
            <span className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full uppercase tracking-widest text-sm font-medium">
              About Her Healing Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-orange-600 mt-4">
              Empowering Mothers. Healing Generations.
            </h2>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
              HHJ is a transformative program focused on maternal mental health for teen and young mothers in marginalized communities.
              We walk with them through healing, education, and empowerment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <span className="text-orange-500 mt-1">💬</span>
                <p><strong>Gender-sensitive mental health support:</strong> Therapy, trauma healing circles, peer support.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-500 mt-1">🌱</span>
                <p><strong>Life skills development:</strong> Confidence, emotional intelligence, leadership.</p>
              </div>
            </div>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <span className="text-orange-500 mt-1">👶</span>
                <p><strong>Parenting education:</strong> Positive parenting for secure, nurturing homes.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-500 mt-1">💼</span>
                <p><strong>Economic empowerment:</strong> Savings groups, micro-finance, and entrepreneurship skills.</p>
              </div>
            </div>
          </div>

          <div className="bg-white border-l-4 border-orange-400 p-6 rounded-md shadow text-center mt-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Why this matters</h3>
            <p className="text-md text-gray-700">
              Teen mothers are <strong>twice as likely</strong> to experience depression and anxiety. Supporting their mental health not only helps them heal, but builds stronger, more resilient children and communities.
            </p>
          </div>
        </div>

        {/* Impact */}
        <div className="bg-orange-100 p-8 rounded-xl shadow text-center">
          <h3 className="text-2xl font-bold text-orange-700 mb-2">Impact</h3>
          <p className="text-lg text-gray-800">
            Since its inception, HHJ has served over <strong>5,000 women</strong> in 3 countries — improving mental wellness and quality of life.
          </p>
        </div>

        {/* YouTube Section */}
        <div className="bg-white p-8 rounded-lg shadow text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Watch Her Healing Journey in Action</h3>
          <div className="aspect-w-16 aspect-h-9 w-full max-w-3xl mx-auto">
          <iframe
                src="https://www.youtube.com/embed/l04Gae5jjIc?list=PLmioQB3tcdRpDRow07UlAqymhcK7NU-ix"
                title="Binti Wellness Circles Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-[315px] rounded-md"
                ></iframe>
          </div>
        </div>

        {/* Donate Button */}
        <div className="text-center">
          <a
            href="/donate" // Replace with your actual donation link
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white text-lg font-semibold py-3 px-6 rounded-full shadow-md transition duration-300"
          >
            Donate Now
          </a>
        </div>
      </section>
    </PageLayout>
  );
};

export default HHJProgram;
