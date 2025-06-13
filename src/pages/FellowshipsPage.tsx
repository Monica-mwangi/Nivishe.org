import React, { useState } from 'react';
import Section from '../components/ui/Section';
import { fellows } from '../data/content';
import Button from '../components/ui/Button';
import Cohorts from "../components/Cohorts"

type Alumna = {
  name: string;
  testimonial?: string;
  country?: string;
  image?: string;
  bio?: string;
};

const FellowshipsPage: React.FC = () => {
  // Alumnae data
  const alumnae: Alumna[] = [
    {
      name: 'Patience Achieng',
      image: '/images/graduate-5.jpg',
      bio: 'Patience Achieng is a dedicated youth disability advocate, mental health champion, and social change enthusiast hailing from Kenya. As a person with a physical disability, her advocacy centers on inclusive education, disability rights, and mental health awareness, with a particular focus on the often-overlooked traumas experienced by persons with disabilities and their caregivers. A recent graduate of the Nivishe Fellowship as a certified mental health advocate, she specialized in the mental health challenges faced by learners with disabilities in higher education. Her work encompasses policy engagement, online advocacy, and community training programs. Through collaborations with organizations like UNICEF, GCC, and Nguvu Collective, she amplifies the voices of learners with disabilities, advocating for education, menstrual equity, and mental health. Her initiative on mental health awareness for persons with disabilities has played a key role in bridging gaps in counseling services and dismantling stereotypes surrounding disability and mental well-being. She actively engages in public speaking, digital campaigns, and policy recommendations, striving to cultivate a more inclusive society.',
    },
    {
      name: 'Georgina Ann Njonyo',
      image: '/images/graduate-4.jpg',
      bio: 'Meet our Alumna, Georgina Ann Jonyo, psychologist and assistant project manager within the USAID Tumikia Mtoto project, working in Kamenu Ward.She is deeply passionate about empowering adolescent girls, young women, and the broader community. Georgina leads impactful initiatives designed to foster sustainable change, focusing on the design and implementation of programs that drive long-term transformation.Her commitment to economic empowerment and sexual and reproductive health (SRH) is evident in her integration of mental health sessions into the projects curriculum. Through targeted training and discussions, she promotes a holistic service approach, providing support to beneficiaries, staff, and the community in both group and individual settings.',
    },
    {
      name: 'Sally Ndwiga',
      image: '/images/graduate-3.jpg',
      bio: 'Sally Ndwiga is a passionate social impact advocate and the founder and executive director at The Femiscope Initiative, an intersectional, youth and women-led Community-Based Organization (CBO) based in Githurai 44, Nairobi. Since its establishment in 2021, Femiscope Initiative has impacted over 1,500 adolescent girls and young women, addressing critical areas such as Sexual and Reproductive Health and Rights (SRHR), mental health management, Sexual Gender-Based Violence and Economic Empowerment."Sallys innovative approach to mentorship emphasizes intersectionality, ensuring programs are tailored to the unique needs of vulnerable groups, including young mothers, girls with disabilities, and those from low-income households.Under her leadership, Femiscope Initiative has co-created lasting solutions that promote educational equality and empower adolescent girls to thrive.Notably, Sally work has expanded through partnerships with local and international organizations, amplifying awareness and solutions for Gender-Based Violence (GBV) and mental health challenges.Her dedication to empowering vulnerable girls and fostering sustainable development continues to transform lives across Kenya.',
    },
    {
      name: 'Vickie Bonyonga',
      image: '/images/graduate-1.jpg',
      bio: 'Esther Bonyonga is a womens rights activist, human rights defender, and climate justice advocate from Malawi. She is the Founder and Executive Director of Ladies in Tertiary Education (LAITE), an organization empowering young women in higher education through leadership, mentorship, and advocacy. Esther also serves as the Vice Chair of the Women Human Rights Defenders Coalition Malawi and is the Professional Director for the Next Generation Leadership Academy (NEGLA).With a background in public health and extensive experience in advocacy, she champions gender equality, mental health SRHR, and social justice. Through storytelling, public speaking, and mentorship, she continues to inspire and drive change in her community.',
    }
  ];

  // Set Patience Achieng as the default selected alumna
  const [selectedAlumna, setSelectedAlumna] = useState<Alumna | null>(alumnae[0]);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    education: '',
    experience: '',
    motivation: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://server.nivishefoundation.org/api/community-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      const result = await response.json();
      console.log('Success:', result);

      setSubmitSuccess(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      country: '',
      education: '',
      experience: '',
      motivation: ''
    });
    setSubmitSuccess(false);
    setShowApplicationForm(false);
  };

  return (
    <div className="pt-16">
      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={resetForm}
              className="absolute top-4 left-4 text-gray-500 z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-6 pt-12">
              {submitSuccess ? (
                <div className="text-center py-8">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <h4 className="text-xl font-bold mb-2">Application Submitted!</h4>
                  <p className="mb-6">Thank you for joining our community. We'll review your application and get back to you soon.</p>
                  <Button onClick={resetForm}>Close</Button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-6 text-center">Join Our Community</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Country*</label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Education Background*</label>
                      <input
                        type="text"
                        name="education"
                        value={formData.education}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Relevant Experience*</label>
                      <textarea
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        required
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Motivation for Joining*</label>
                      <textarea
                        name="motivation"
                        value={formData.motivation}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>

                    <div className="flex justify-end gap-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={resetForm}
                        disabled={isSubmitting}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Submitting...' : 'Join Community'}
                      </Button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Nivishe Mental Health Fellowship Section */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Image with Impact Badge */}
            <div className="relative w-full lg:w-1/2">
              <img
                src="/images/graduation.jpg"
                alt="Nivishe Fellowship participants"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white px-6 py-4 rounded-lg shadow-lg">
                <div className="text-3xl font-bold">300+</div>
                <div className="text-sm uppercase tracking-wider">Fellows Empowered</div>
              </div>
            </div>

            {/* Fellowship Content */}
            <div className="w-full lg:w-1/2">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                The Nivishe Mental Health Fellowship
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Our flagship program equips passionate youth leaders with the knowledge and tools to become mental health change-makers within their communities. We cultivate a network of advocates who bridge gaps in mental health awareness and access across Sub-Saharan Africa.
              </p>
            </div>
          </div>
          <div className="mt-20">
            {/* Unique Features */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
                What Makes Our Fellowship Unique
              </h2>
              <div className="grid-cols-1 md:grid-cols-2 grid gap-6">
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Cultural Roots</h3>
                    <p className="text-gray-600">
                      Fellows study mental health, counseling psychology, and neuroscience grounded in their local languages and cultural contexts, ensuring relevance and accessibility.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Peer Empowerment</h3>
                    <p className="text-gray-600">
                      Our model trains fellows to become community mental health champions and referral pathways, connecting individuals with professional care when needed.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Community Impact</h3>
                    <p className="text-gray-600">
                      Each fellow designs and delivers culturally resonant mental health sessions using art, storytelling, or other creative methods tailored to their community's needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Pan-African Network</h3>
                    <p className="text-gray-600">
                      We bring together diverse voices from across Sub-Saharan Africa, creating a powerful collective of mental health advocates driving change continent-wide.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Highlight */}
            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
              <h3 className="font-bold text-gray-800 mb-2">Our Impact</h3>
              <p className="text-gray-700">
                Since launching, the Fellowship has empowered <span className="font-semibold">300+ advocates</span> across <span className="font-semibold">10 African countries</span>, directly reaching <span className="font-semibold">40,000+ community members</span> through peer-led mental health initiatives.
              </p>
              <Button className="mt-4" onClick={() => setShowApplicationForm(true)}>
                Apply for the Fellowship
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Thematic Fellowship Section */}
      <Section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Content */}
            <div className="w-full lg:w-1/2">
              <div className="sticky top-24">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Nivishe Thematic Fellowship: <span className="text-orange-600">Refugees and Displaced Youth</span>
                </h2>
                <p className="text-xl italic text-gray-700 mb-6">
                  "Healing in exile. Hope in belonging."
                </p>
                <p className="text-gray-700 mb-8">
                  Our specialized program trains displaced and refugee youth to address the unique layers of trauma, loss, and resilience within their communities. Recognizing the profound mental health challenges of displacement, we equip fellows with culturally sensitive tools to foster healing and hope.
                </p>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start">
                    <div className="bg-orange-100 p-2 rounded-full mr-4 mt-1">
                      <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Specialized Trauma Support</h3>
                      <p className="text-gray-600">
                        Fellows receive training in trauma-informed mental health first aid, resilience building, and navigating psychosocial support systems for displaced populations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-orange-100 p-2 rounded-full mr-4 mt-1">
                      <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Cultural Preservation</h3>
                      <p className="text-gray-600">
                        Healing processes incorporate native languages, cultural traditions, and storytelling practices to maintain identity and heritage while processing trauma.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-orange-100 p-2 rounded-full mr-4 mt-1">
                      <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">From Healing to Leadership</h3>
                      <p className="text-gray-600">
                        Fellows transform personal experiences into community impact, leading mental health initiatives in refugee camps, settlements, and urban displaced communities.
                      </p>
                    </div>
                  </div>
                </div>

                {/* <div className="bg-gray-100 p-5 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">Impact Highlight</h4>
                  <p className="text-gray-700">
                    Our inaugural cohort has already supported <span className="font-semibold">500+ displaced youth and families</span> with trauma-sensitive mental health education and peer support networks.
                  </p>
                </div> */}
              </div>
            </div>

            {/* Image - aligned with heading */}
            <div className="w-full lg:w-1/2">
              <div className="relative lg:sticky lg:top-24">
                <img
                  src="/images/graduate-6.jpg"
                  alt="Refugee youth participating in fellowship activities"
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                  style={{ minHeight: '500px' }}
                />
                <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white px-6 py-4 rounded-lg shadow-lg">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-sm uppercase tracking-wider">Supported displaced youth</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500 mt-8">
            <h4 className="font-bold text-gray-800 mb-2">Impact Highlight</h4>
            <p className="text-gray-700">
              Our inaugural cohort has already supported <span className="font-semibold">500+ displaced youth and families</span> with trauma-sensitive mental health education and peer support networks.
            </p>
          </div>
        </div>
      </Section>

      {/* Alumnae Display Section */}
      <Section
        title="Meet Our Fellowship Alumnae"
        className="bg-orange-50 py-12"
      >
        <div className="max-w-6xl mx-auto px-4">
          {/* Alumnae Names in Orange Rectangles */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {alumnae.map((alumna, index) => (
              <button
                key={index}
                onClick={() => setSelectedAlumna(alumna)}
                className={`px-6 py-3 rounded-md font-medium transition-all cursor-pointer ${selectedAlumna?.name === alumna.name
                    ? 'bg-orange-600 text-white'
                    : 'bg-orange-500 text-black hover:bg-orange-400'
                  }`}
              >
                {alumna.name}
              </button>
            ))}
          </div>

          {/* Always show the selected alumna (Patience by default) */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Alumna Image */}
              <div className="flex-shrink-0 w-full md:w-1/3">
                <img
                  src={selectedAlumna?.image || '/images/default-profile.jpg'}
                  alt={selectedAlumna?.name || 'Alumna'}
                  className="w-full h-auto max-h-96 object-cover rounded-lg"
                />
              </div>

              {/* Alumna Bio */}
              <div>
                <h3 className="text-2xl font-bold mb-2">{selectedAlumna?.name}</h3>
                {selectedAlumna?.country && (
                  <p className="text-orange-600 font-medium mb-4">{selectedAlumna.country}</p>
                )}
                <p className="mb-4 text-gray-700 text-justify">{selectedAlumna?.bio}</p>
                {selectedAlumna?.testimonial && (
                  <blockquote className="border-l-4 border-orange-500 pl-4 italic text-gray-600">
                    "{selectedAlumna.testimonial}"
                  </blockquote>
                )}
              </div>
            </div>
          </div>
        </div>
        <div>
          <Cohorts />
        </div>
      </Section>
    </div>
  );
};

export default FellowshipsPage;