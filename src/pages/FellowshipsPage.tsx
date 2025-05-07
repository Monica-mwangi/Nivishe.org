import React, { useState } from 'react';
import Section from '../components/ui/Section';
import { fellows } from '../data/content';
import Button from '../components/ui/Button';

const FellowshipsPage: React.FC = () => {
  const [activeCohort, setActiveCohort] = useState<string | null>(null);
  const [showAllCohorts, setShowAllCohorts] = useState(false);
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

  // Group fellows by cohort
  const cohorts = fellows.reduce((acc, fellow) => {
    if (!acc[fellow.cohort]) {
      acc[fellow.cohort] = [];
    }
    acc[fellow.cohort].push(fellow);
    return acc;
  }, {} as Record<string, typeof fellows>);

  // Extract and sort cohort names
  const cohortNames = Object.keys(cohorts).sort((a, b) => {
    const numA = parseInt(a.replace('Cohort ', ''));
    const numB = parseInt(b.replace('Cohort ', ''));
    return numB - numA; // Newest first
  });

  const displayedCohorts = showAllCohorts ? cohortNames : cohortNames.slice(0, 3);

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
    
    // Here you would typically send the data to your backend
    try {
      // Simulate API call
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
            {/* Close button */}
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
                  <p className="mb-6">Thank you for applying to the Nivishe Fellowship. We'll review your application and get back to you soon.</p>
                  <Button onClick={resetForm}>Close</Button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-6 text-center">Cohort 6 Application</h3>
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
                      <label className="block text-sm font-medium text-gray-700 mb-1">Motivation for Applying*</label>
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
                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                      </Button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Page Content */}
      <Section
        title="Nivishe Mental Health Fellowship"
        subtitle="Building the next generation of mental health leaders across Africa"
        className="bg-black bg-[url('/images/fellowship.jpg')] bg-cover bg-center bg-blend-overlay"
        dark
      >
        <div className="bg-orange-500 p-8 rounded-lg mt-12 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Now Accepting Applications</h3>
          <p className="text-lg mb-6">
            Join Cohort 6 of our transformative fellowship program and become part of a growing network of mental health leaders.
          </p>
          <Button 
            variant="secondary"
            size="lg"
            className="text-white" 
            onClick={() => setShowApplicationForm(true)}
          >
            Apply Now
          </Button>
        </div>
      </Section>

      {/* Fellows Display Section */}
      <Section 
        title="Our Fellowship Graduates" 
        subtitle="Meet the mental health leaders from previous cohorts"
        className="bg-orange-50" // Light orange background
      >
        <div className="max-w-6xl mx-auto">
          {/* Cohort selection tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {displayedCohorts.map(cohort => (
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

          {/* Display fellows for the selected cohort */}
          {activeCohort && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center">
                {activeCohort} Fellows
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cohorts[activeCohort].map((fellow, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-6 rounded-lg shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
                  >
                    <h4 className="text-xl font-bold mb-2">{fellow.name}</h4>
                    <p className="text-gray-600 mb-2">
                      {fellow.title || 'Mental Health Fellow'}
                    </p>
                    {fellow.country && (
                      <p className="text-sm text-gray-500">
                        <span className="inline-block w-4 h-4 mr-1">🇰🇪</span>
                        {fellow.country}
                      </p>
                    )}
                    {fellow.bio && (
                      <p className="mt-4 text-gray-700">{fellow.bio}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Show all cohorts button */}
          {cohortNames.length > 3 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllCohorts(!showAllCohorts)}
                className={`font-medium text-orange-600 hover:underline ${
                  showAllCohorts ? 'no-underline' : 'underline'
                }`}
              >
                {showAllCohorts ? 'Show Less' : `Show All Cohorts (${cohortNames.length})`}
              </button>
            </div>
          )}
        </div>
      </Section>
    </div>
  );
};

export default FellowshipsPage;