import React, { useState } from 'react';
import Section from '../components/ui/Section';
import { fellows } from '../data/content';
import Button from '../components/ui/Button';

type Fellow = {
  name: string;
  cohort: string | number;
  testimonial?: string;
  country?: string;
  image?: string;
};

const FellowshipsPage: React.FC = () => {
  const [activeCohort, setActiveCohort] = useState<string | null>(null);
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

  // Process and enhance fellows data
  const enhancedFellows = [
    ...fellows.map(fellow => ({
      ...fellow,
      cohort: `Cohort ${fellow.cohort.toString().replace('Cohort ', '').trim()}`
    })),
    // Additional cohort members
    { name: 'Aisha Mohamed', cohort: 'Cohort 4' },
    { name: 'Mary Kaeni', cohort: 'Cohort 4' },
    { name: 'Grace Akinyi', cohort: 'Cohort 4' },
    { name: 'Fatoumata Diallo', cohort: 'Cohort 3' },
    { name: 'David Omondi', cohort: 'Cohort 3' },
    { name: 'Amina Hassan', cohort: 'Cohort 3' },
    { name: 'John Bosco', cohort: 'Cohort 2' },
    { name: 'Mercy Johnson', cohort: 'Cohort 2' },
    { name: 'Sarah Chibale', cohort: 'Cohort 1' },
    { name: 'Michael Abebe', cohort: 'Cohort 1' }
  ];

  // Group fellows by cohort
  const cohorts = enhancedFellows.reduce((acc, fellow) => {
    const cohortKey = `Cohort ${fellow.cohort.toString().replace('Cohort ', '').trim()}`;
    if (!acc[cohortKey]) {
      acc[cohortKey] = [];
    }
    acc[cohortKey].push(fellow);
    return acc;
  }, {} as Record<string, typeof enhancedFellows>);

  // Extract and sort cohort names
  const cohortNames = Object.keys(cohorts).sort((a, b) => {
    const numA = parseInt(a.replace('Cohort ', ''));
    const numB = parseInt(b.replace('Cohort ', ''));
    return numB - numA;
  });

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
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setSubmitSuccess(true);
    } catch (error) {
      console.error('Submission error:', error);
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

      {/* Hero Section with Cover Image */}
      <Section
        title="Nivishe Mental Health Fellowship"
        subtitle="Building the next generation of mental health leaders across Africa"
        className="bg-black bg-[url('/images/fellowship.jpg')] bg-cover bg-center bg-blend-overlay"
        dark
      >
        <div className="bg-black p-8 rounded-lg mt-12 max-w-2xl mx-auto border border-gray-700">
          <h3 className="text-2xl font-bold mb-4 text-white">Join Our Community</h3>
          <p className="text-lg mb-6 text-gray-200">
            Become part of our growing network of mental health professionals and advocates working to transform mental healthcare in Africa.
          </p>
          <Button 
            variant="secondary"
            size="lg"
            className="bg-orange-400 hover:bg-orange-500 text-white" 
            onClick={() => setShowApplicationForm(true)}
          >
            Join Now
          </Button>
        </div>
      </Section>

      {/* Fellows Display Section */}
      <Section 
        title="Our Fellowship Graduates" 
        subtitle="Meet the mental health leaders from previous cohorts"
        className="bg-orange-50"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {cohortNames.map(cohort => (
              <button
                key={cohort}
                onClick={() => setActiveCohort(activeCohort === cohort ? null : cohort)}
                className={`px-4 py-2 rounded-full font-medium transition-all cursor-pointer ${
                  activeCohort === cohort 
                    ? 'bg-orange-600 text-white' 
                    : 'bg-orange-100 text-gray-800 hover:bg-orange-200'
                }`}
              >
                {cohort}
              </button>
            ))}
          </div>

          {activeCohort && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center">
                {activeCohort} Fellows
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cohorts[activeCohort].map((fellow, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-4 rounded-lg shadow-sm text-center"
                  >
                    {fellow.image && (
                      <img 
                        src={fellow.image} 
                        alt={fellow.name} 
                        className="w-32 h-32 rounded-full mx-auto mb-4"
                      />
                    )}
                    <p className="text-lg font-medium">{fellow.name}</p>
                    {fellow.testimonial && (
                      <p className="mt-2 text-gray-600 italic text-sm">
                        "{fellow.testimonial}"
                      </p>
                    )}
                    {fellow.country && (
                      <p className="mt-2 text-gray-500 text-sm">
                        {fellow.country}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Section>
    </div>
  );
};

export default FellowshipsPage;