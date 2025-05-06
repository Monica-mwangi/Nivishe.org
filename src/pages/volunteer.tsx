import React, { useState } from 'react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

const VolunteerPage: React.FC = () => {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    skills: '',
    availability: '',
    motivation: '',
    experience: ''
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
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Volunteer application submitted:', formData);
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
      address: '',
      skills: '',
      availability: '',
      motivation: '',
      experience: ''
    });
    setSubmitSuccess(false);
    setShowApplicationForm(false);
  };

  return (
    <div className="pt-16">
      {/* Cover Section with Image */}
      <Section
        title="Become a Volunteer"
        subtitle="Join our team and make a difference in mental health awareness"
        className="bg-black bg-[url('/images/volunteer.jpg')] bg-cover bg-center bg-blend-overlay min-h-[400px]"
        dark
      >
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl mb-8">
            We're looking for passionate individuals to help us expand our mental health initiatives across Africa.
          </p>
          <Button 
            onClick={() => setShowApplicationForm(true)}
            className="px-8 py-3 text-lg"
          >
            Apply to Volunteer
          </Button>
        </div>
      </Section>

      {/* Volunteer Information Section */}
      <Section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Volunteer Opportunities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Community Outreach</h3>
              <p className="text-gray-600">
                Help us organize and run mental health awareness campaigns in local communities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Online Support</h3>
              <p className="text-gray-600">
                Assist with our digital platforms, content creation, and online support groups.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Event Coordination</h3>
              <p className="text-gray-600">
                Help plan and execute our workshops, seminars, and fundraising events.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Professional Services</h3>
              <p className="text-gray-600">
                Offer your professional skills (counseling, design, IT, etc.) to support our mission.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            <button 
              onClick={resetForm}
              className="absolute top-4 left-4 text-gray-500 hover:text-gray-700 z-10"
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
                  <p className="mb-6">Thank you for your interest in volunteering with us. We'll review your application and get back to you soon.</p>
                  <Button onClick={resetForm}>Close</Button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-6 text-center">Volunteer Application</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
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
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
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
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Skills & Qualifications*</label>
                      <textarea
                        name="skills"
                        value={formData.skills}
                        onChange={handleInputChange}
                        required
                        rows={2}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="Please list any relevant skills, qualifications, or certifications"
                      />
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Availability*</label>
                      <textarea
                        name="availability"
                        value={formData.availability}
                        onChange={handleInputChange}
                        required
                        rows={2}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="When are you available to volunteer? (days, hours per week, etc.)"
                      />
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Relevant Experience</label>
                      <textarea
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="Describe any previous volunteer or work experience relevant to mental health"
                      />
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Motivation for Volunteering*</label>
                      <textarea
                        name="motivation"
                        value={formData.motivation}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="Why do you want to volunteer with us? What do you hope to contribute?"
                      />
                    </div>

                    <div className="flex justify-end space-x-4">
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
    </div>
  );
};

export default VolunteerPage;