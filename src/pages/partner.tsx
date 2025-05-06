import React, { useState } from 'react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

const PartnershipPage: React.FC = () => {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [formData, setFormData] = useState({
    organization: '',
    contactPerson: '',
    email: '',
    phone: '',
    website: '',
    partnershipType: '',
    organizationType: '',
    missionAlignment: '',
    resourcesOffered: '',
    expectations: '',
    previousPartnerships: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const partnershipTypes = [
    'Corporate Sponsorship',
    'Program Collaboration',
    'Research Partnership',
    'Community Outreach',
    'Media Partnership',
    'Technology Partnership',
    'Other'
  ];

  const organizationTypes = [
    'Corporate',
    'NGO/Non-profit',
    'Government Agency',
    'Educational Institution',
    'Healthcare Provider',
    'Community Organization',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      console.log('Partnership application submitted:', formData);
      setSubmitSuccess(true);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      organization: '',
      contactPerson: '',
      email: '',
      phone: '',
      website: '',
      partnershipType: '',
      organizationType: '',
      missionAlignment: '',
      resourcesOffered: '',
      expectations: '',
      previousPartnerships: ''
    });
    setSubmitSuccess(false);
    setShowApplicationForm(false);
  };

  return (
    <div className="pt-16">
      {/* Hero Section with Cover Image */}
      <Section
        title="Strategic Partnerships"
        subtitle="Join forces with us to amplify mental health impact across Africa"
        className="bg-black bg-[url('/images/partner.jpg')] bg-cover bg-center bg-blend-overlay min-h-[500px] flex items-center"
        dark
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Become a Partner</h1>
          <p className="text-xl md:text-2xl mb-8">
            Together we can create sustainable solutions for mental health challenges in our communities
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              onClick={() => setShowApplicationForm(true)}
              className="px-8 py-3 text-lg bg-orange-600 hover:bg-orange-700"
            >
              Apply for Partnership
            </Button>
            {/* <Button 
              variant="outline"
              className="px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-black"
            >
              Learn About Benefits
            </Button> */}
          </div>
        </div>
      </Section>

      {/* Partnership Benefits */}
      <Section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Partner With Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Amplify Your Impact</h3>
              <p className="text-gray-600">
                Leverage our established network and expertise to maximize the reach of your CSR initiatives.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-purple-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Strategic Collaboration</h3>
              <p className="text-gray-600">
                Co-create programs that align with your organizational goals and our mental health mission.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-green-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Measurable Outcomes</h3>
              <p className="text-gray-600">
                Receive comprehensive reporting on the impact of your partnership investment.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Current Partners Showcase */}
      <Section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Valued Partners</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-24 w-48 bg-gray-100 flex items-center justify-center rounded-lg">
                <span className="text-gray-400">Partner Logo {i}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Partnership Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            <button 
              onClick={resetForm}
              className="absolute top-4 left-4 text-gray-500 hover:text-gray-700 z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-8 pt-12">
              {submitSuccess ? (
                <div className="text-center py-8">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <h4 className="text-2xl font-bold mb-2">Application Received!</h4>
                  <p className="mb-6 text-lg">Thank you for your partnership interest. Our team will review your application and contact you within 5 business days.</p>
                  <Button onClick={resetForm} className="px-8 py-3">
                    Close
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="text-3xl font-bold mb-2 text-center">Partnership Application</h3>
                  <p className="text-center text-gray-600 mb-8">Please complete this form to begin our partnership conversation</p>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Organization Name*</label>
                        <input
                          type="text"
                          name="organization"
                          value={formData.organization}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Contact Person*</label>
                        <input
                          type="text"
                          name="contactPerson"
                          value={formData.contactPerson}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone*</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                        <input
                          type="url"
                          name="website"
                          value={formData.website}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="https://"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Organization Type*</label>
                        <select
                          name="organizationType"
                          value={formData.organizationType}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select type</option>
                          {organizationTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Partnership Type*</label>
                        <select
                          name="partnershipType"
                          value={formData.partnershipType}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select type</option>
                          {partnershipTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Mission Alignment*</label>
                      <textarea
                        name="missionAlignment"
                        value={formData.missionAlignment}
                        onChange={handleInputChange}
                        required
                        rows={3}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="How does your organization's mission align with ours?"
                      />
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Resources You Can Offer*</label>
                      <textarea
                        name="resourcesOffered"
                        value={formData.resourcesOffered}
                        onChange={handleInputChange}
                        required
                        rows={3}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="What resources (financial, expertise, networks, etc.) can you bring to this partnership?"
                      />
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Expectations from Partnership*</label>
                      <textarea
                        name="expectations"
                        value={formData.expectations}
                        onChange={handleInputChange}
                        required
                        rows={3}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="What do you hope to achieve through this partnership?"
                      />
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Previous Relevant Partnerships</label>
                      <textarea
                        name="previousPartnerships"
                        value={formData.previousPartnerships}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Describe any similar partnerships you've been involved with"
                      />
                    </div>

                    <div className="flex justify-end space-x-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={resetForm}
                        disabled={isSubmitting}
                        className="px-6 py-2"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-6 py-2 bg-blue-600 hover:bg-blue-700"
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Partnership Request'}
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

export default PartnershipPage;