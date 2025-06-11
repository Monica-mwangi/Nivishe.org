import React, { useState } from 'react';
import Section from '../components/ui/Section';
import { fellows } from '../data/content';
import Button from '../components/ui/Button';

type Alumna = {
  name: string;
  testimonial?: string;
  country?: string;
  image?: string;
  bio?: string;
};

const FellowshipsPage: React.FC = () => {
  const [selectedAlumna, setSelectedAlumna] = useState<Alumna | null>(null);
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

  // Alumnae data
  const alumnae: Alumna[] = [
    {
      name: 'patience Achieng',
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
      const response = await fetch('https://nivisheserver.edeldigital.co.ke/api/community-form', {
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

      {/* Mental Health Fellowship Section */}
      <Section className="bg-white">
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '40px 20px',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '40px'
        }}>
          {/* Image Container with Overlay Card */}
          <div style={{
            position: 'relative',
            flex: '0 0 400px'
          }}>
            {/* Replace with your actual image */}
            <img 
              src="/images/graduation.jpg" 
              alt="Mental Health Fellowship"
              style={{
                width: '100%',
                height: '500px',
                objectFit: 'cover',
                borderRadius: '8px'
              }}
            />
            
            {/* Orange Card Overlay */}
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '20px',
              backgroundColor: '#F97316',
              padding: '20px',
              borderRadius: '8px',
              color: '#000',
              width: '180px',
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                lineHeight: '1'
              }}>280+</div>
              <div style={{
                fontSize: '1.2rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginTop: '5px'
              }}>Fellows</div>
            </div>
          </div>

          {/* Text Content */}
          <div style={{
            flex: '1',
            fontFamily: "'Arial', sans-serif",
            color: '#333',
            lineHeight: '1.6'
          }}>
            <h1 style={{
              fontSize: '2rem',
              marginBottom: '20px',
              color: '#2c3e50',
              fontWeight: '600'
            }}>Mental Health Fellowship</h1>
            
            <div style={{ marginBottom: '20px' }}>
              <p style={{ marginBottom: '16px' }}>
                This <strong style={{ fontWeight: '600' }}>program</strong> is a community-driven initiative designed to promote mental well-being, 
                resilience, and emotional healing among underserved and marginalized populations, 
                particularly youth, women, and vulnerable groups by training mental health advocates 
                across different professions. Grounded in a trauma-informed and culturally sensitive 
                approach, the program combines psychosocial support, mental health education, and 
                capacity-building to reduce stigma, increase awareness, and improve access to mental 
                health services. Through safe spaces, peer support, counseling, creative expression, 
                and skill-building training sessions, Nivishe empowers individuals to understand, 
                manage, and prioritize their mental health while fostering inclusive, supportive 
                communities that champion mental well-being as a fundamental human right.
              </p>
            </div>
            
            {/* Cards Section */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr)',
              gap: '20px',
              marginBottom: '40px'
            }}>
              {/* Nurturing Environment Card */}
              <div style={{
                backgroundColor: '#fff',
                borderRadius: '8px',
                padding: '20px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                borderTop: '4px solid #F97316'
              }}>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  marginBottom: '12px',
                  color: '#2c3e50'
                }}>Nurturing Environment</h3>
                <p style={{ color: '#666', lineHeight: '1.5' }}>
                  Our program provides a safe and supportive space for personal growth and community connection.
                </p>
              </div>

              {/* Personal Development Card */}
              <div style={{
                backgroundColor: '#fff',
                borderRadius: '8px',
                padding: '20px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                borderTop: '4px solid #F97316'
              }}>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  marginBottom: '12px',
                  color: '#2c3e50'
                }}>Personal Development</h3>
                <p style={{ color: '#666', lineHeight: '1.5' }}>
                  We focus on building skills and confidence to help individuals thrive in all aspects of life.
                </p>
              </div>

              {/* Mental Health Awareness Card */}
              <div style={{
                backgroundColor: '#fff',
                borderRadius: '8px',
                padding: '20px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                borderTop: '4px solid #F97316'
              }}>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  marginBottom: '12px',
                  color: '#2c3e50'
                }}>Mental Health Awareness</h3>
                <p style={{ color: '#666', lineHeight: '1.5' }}>
                  Our program educates and reduces stigma around mental health issues in the community.
                </p>
              </div>

              {/* Community Building Card */}
              <div style={{
                backgroundColor: '#fff',
                borderRadius: '8px',
                padding: '20px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                borderTop: '4px solid #F97316'
              }}>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  marginBottom: '12px',
                  color: '#2c3e50'
                }}>Community Building</h3>
                <p style={{ color: '#666', lineHeight: '1.5' }}>
                  We create strong support networks that foster connection and collective well-being.
                </p>
              </div>
            </div>
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
                className={`px-6 py-3 rounded-md font-medium transition-all cursor-pointer ${
                  selectedAlumna?.name === alumna.name 
                    ? 'bg-orange-600 text-white' 
                    : 'bg-orange-500 text-black hover:bg-orange-400'
                }`}
              >
                {alumna.name}
              </button>
            ))}
          </div>

          {/* Selected Alumna Display */}
          {selectedAlumna && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Alumna Image */}
                <div className="flex-shrink-0 w-full md:w-1/3">
                  <img 
                    src={selectedAlumna.image || '/images/default-profile.jpg'} 
                    alt={selectedAlumna.name}
                    className="w-full h-auto max-h-96 object-cover rounded-lg"
                  />
                </div>
                
                {/* Alumna Bio */}
                <div>
                  <h3 className="text-2xl font-bold mb-2">{selectedAlumna.name}</h3>
                  {selectedAlumna.country && (
                    <p className="text-orange-600 font-medium mb-4">{selectedAlumna.country}</p>
                  )}
                  <p className="mb-4 text-gray-700">{selectedAlumna.bio}</p>
                  {selectedAlumna.testimonial && (
                    <blockquote className="border-l-4 border-orange-500 pl-4 italic text-gray-600">
                      "{selectedAlumna.testimonial}"
                    </blockquote>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </Section>
    </div>
  );
};

export default FellowshipsPage;