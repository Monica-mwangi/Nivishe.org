import React from "react";

const NivisheInstitute = () => {
  return (
    <div className="bg-cover bg-center min-h-screen text-white py-16 px-4 sm:px-8 md:px-16" style={{ backgroundImage: `url('/images/program-banner.jpg')` }}>
      <div className="bg-black bg-opacity-60 p-6 rounded-lg max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-orange-400">🧠 Nivishe Institute for Mental Health</h1>
        <p className="text-xl mb-8 italic text-gray-200">Learning and Research</p>

        <h2 className="text-2xl font-semibold mb-3 text-orange-300">🎯 Objective:</h2>
        <p className="mb-6 text-gray-100">
          Build African-centered mental health knowledge through education, fellowships, research, and publications — training youth, caregivers, and practitioners to lead mental health change from within their communities.
        </p>

        <h2 className="text-2xl font-semibold mb-3 text-orange-300">🌍 Why a Learning and Research Institute for Mental Health?</h2>
        <p className="mb-6 text-gray-100">
          For too long, mental health education in Africa has been foreign, inaccessible, and disconnected from the lived experiences of communities. Mental health interventions must speak the language, reflect the realities, and honor the resilience of our people. At Nivishe, we are reimagining mental health education and research — creating localized, trauma-informed, and culturally rooted learning spaces that empower communities to heal themselves.
        </p>

        <p className="mb-8 font-bold text-orange-200">Knowledge is power. Localized knowledge is liberation. ✊🏾</p>

        <div className="space-y-10">
          <section>
            <h3 className="text-xl font-semibold text-orange-300 mb-2">🌟 Nivishe Mental Health Fellowship</h3>
            <p className="text-gray-100 mb-2 italic">“Building the next generation of mental health champions across Africa.”</p>
            <ul className="list-disc ml-6 text-gray-100 space-y-1">
              <li>🌍 Localized learning grounded in culture and language</li>
              <li>👫 Peer-to-peer model promoting accessible support</li>
              <li>🎨 Culturally resonant community mental health sessions</li>
              <li>🤝 Pan-African network of young mental health advocates</li>
            </ul>
            <p className="mt-3 text-orange-200">
              📈 <strong>Impact:</strong> 300+ fellows across 10 African countries, 40,000+ lives impacted.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-orange-300 mb-2">🧳 Nivishe Thematic Fellowship: Refugees and Displaced Youth</h3>
            <p className="text-gray-100 mb-2 italic">“Healing in exile. Hope in belonging.”</p>
            <ul className="list-disc ml-6 text-gray-100 space-y-1">
              <li>🎯 Trauma-informed support tailored to displaced populations</li>
              <li>🌍 Integration of native languages, traditions, and peer models</li>
              <li>💬 Fellows lead healing within refugee settlements</li>
            </ul>
            <p className="mt-3 text-orange-200">
              📈 <strong>Impact:</strong> 500+ displaced youth supported.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-orange-300 mb-2">🏫 Community Capacity Building</h3>
            <p className="text-gray-100 mb-2">“When caregivers heal, children thrive.”</p>
            <ul className="list-disc ml-6 text-gray-100 space-y-1">
              <li>👩‍🏫 Training teachers and caregivers in emotional literacy</li>
              <li>🚸 Promoting emotionally safe schools and homes</li>
              <li>🧠 Building trauma-informed community response</li>
            </ul>
            <p className="mt-3 text-orange-200">
              📈 <strong>Impact:</strong> 300+ caregivers and teachers trained.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-orange-300 mb-2">📚 Research and Knowledge Production</h3>
            <p className="text-gray-100 mb-2">“Our realities, our stories, our solutions.”</p>
            <ul className="list-disc ml-6 text-gray-100 space-y-1">
              <li>📊 Community-led studies on mental health access and trauma</li>
              <li>📖 Comic books and infographics for youth and low-literacy communities</li>
              <li>📻 Audio storytelling via community radio</li>
            </ul>
            <p className="mt-3 text-orange-200">
              📈 <strong>Impact:</strong> 10+ tools developed, 5,000+ people reached with localized content.
            </p>
          </section>
        </div>

        <div className="mt-10 space-y-4">
          <blockquote className="bg-orange-800 bg-opacity-30 p-4 rounded-md border-l-4 border-orange-400 text-gray-100 italic">
            “The Nivishe Fellowship taught me that healing is not just for therapists — it’s for everyone. Now I am leading mental health circles in my refugee community.”<br />
            — <strong>Awel, 24, Sudanese refugee in Kenya</strong>
          </blockquote>
          <blockquote className="bg-orange-800 bg-opacity-30 p-4 rounded-md border-l-4 border-orange-400 text-gray-100 italic">
            “Training teachers saved lives in our village. Children who were once labeled ‘bad’ are now seen as grieving or hurting. That shift changed everything.”<br />
            — <strong>Rebecca, caregiver</strong>
          </blockquote>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold mb-4 text-orange-300">📢 Call to Action</h3>
          <p className="mb-4 text-gray-100">When we build local knowledge, we build collective healing.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/fellowship" className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-lg shadow-lg">Learn More About the Fellowship</a>
            <a href="/apply" className="bg-white hover:bg-gray-100 text-orange-600 py-2 px-6 rounded-lg shadow-lg">Apply or Nominate a Fellow</a>
            <a href="/support-research" className="bg-black border border-orange-400 hover:bg-orange-400 hover:text-black text-white py-2 px-6 rounded-lg shadow-lg">Support Our Research</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NivisheInstitute;
