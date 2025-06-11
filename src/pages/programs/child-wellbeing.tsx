// pages/programs/child-wellbeing.tsx

import React from 'react';
import PageLayout from '../../components/layout/PageLayout';

const ChildAndAdolescentWellbeing: React.FC = () => {
  return (
    <PageLayout
      coverImage="/images/child.jpg"
      title="Child and Adolescent Well-being Program"
      subtitle="Building a stronger future through early, trauma-informed mental health care"
    >
      <section className="bg-orange-50 py-16 px-4 md:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white p-10 rounded-xl shadow-xl border-l-8 border-orange-500">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 text-center">
              Child and Adolescent Well-being Program
            </h2>
            <p className="italic text-lg text-center text-gray-600 mb-8">
              “Prevention is the first act of healing.”
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Many of the children we serve are the sons and daughters of the young mothers coming to our center a new generation carrying invisible burdens from poverty, violence, displacement, or family trauma.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-orange-100 p-6 rounded-lg shadow-sm">
                <h4 className="font-bold text-orange-700 mb-2">🎲 Play-based Therapy</h4>
                <p>Children process emotions through play long before they can express them with words.</p>
              </div>
              <div className="bg-orange-100 p-6 rounded-lg shadow-sm">
                <h4 className="font-bold text-orange-700 mb-2">🎨 Trauma Healing Activities</h4>
                <p>We use art, drama, music, and movement to help children express and release emotions safely.</p>
              </div>
              <div className="bg-orange-100 p-6 rounded-lg shadow-sm">
                <h4 className="font-bold text-orange-700 mb-2">💬 Emotional Literacy</h4>
                <p>Helping children identify their feelings and develop coping strategies early in life.</p>
              </div>
              <div className="bg-orange-100 p-6 rounded-lg shadow-sm">
                <h4 className="font-bold text-orange-700 mb-2">🤝 Parental Support Linkages</h4>
                <p>We support healing in children by involving mothers and caregivers in their mental health journey.</p>
              </div>
            </div>
            <div className="bg-orange-500 text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Why this matters</h3>
              <p className="text-md">
                Early, trauma-informed mental health care is critical. Without intervention, children exposed to toxic stress face increased risk of lifelong physical and mental health issues. Our program ensures they receive the nurturing support they need for a healthier, stronger future.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Watch Child and Adolescent Well-being in Action</h3>
              <div className="w-full max-w-4xl mx-auto aspect-video">
                <iframe
                  src="https://drive.google.com/file/d/1gbraVh23g4_uwOuMLSY3SxgNevp_2qO_/preview"
                  title="Child and Adolescent Well-being Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg shadow-md border-0"
                ></iframe>
              </div>
</div>

          </div>

        </div>
      </section>

    </PageLayout>
  );
};

export default ChildAndAdolescentWellbeing;
