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
    <div style={{ paddingTop: '64px' }}>
      {/* Application Form Modal */}
      {showApplicationForm && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          zIndex: 50
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '0.5rem',
            maxWidth: '42rem',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            position: 'relative'
          }}>
            {/* Close button at top left */}
            <button 
              onClick={resetForm}
              style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                color: '#6b7280',
                zIndex: 10
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '1.5rem', width: '1.5rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div style={{ padding: '1.5rem', paddingTop: '3rem' }}>
              {submitSuccess ? (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '4rem', width: '4rem', color: '#10B981', margin: '0 auto 1rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Application Submitted!</h4>
                  <p style={{ marginBottom: '1.5rem' }}>Thank you for applying to the Nivishe Fellowship. We'll review your application and get back to you soon.</p>
                  <Button onClick={resetForm}>Close</Button>
                </div>
              ) : (
                <>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center' }}>Cohort 5 Application</h3>
                  <form onSubmit={handleSubmit}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#374151', marginBottom: '0.25rem' }}>Full Name*</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          style={{
                            width: '100%',
                            padding: '0.5rem 1rem',
                            border: '1px solid #e5e7eb',
                            borderRadius: '0.5rem',
                            outline: 'none',
                            boxShadow: '0 0 0 2px rgba(0, 0, 0, 1)'
                          }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#374151', marginBottom: '0.25rem' }}>Email*</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          style={{
                            width: '100%',
                            padding: '0.5rem 1rem',
                            border: '1px solid #e5e7eb',
                            borderRadius: '0.5rem',
                            outline: 'none',
                            boxShadow: '0 0 0 2px rgba(0, 0, 0, 1)'
                          }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#374151', marginBottom: '0.25rem' }}>Phone Number*</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          style={{
                            width: '100%',
                            padding: '0.5rem 1rem',
                            border: '1px solid #e5e7eb',
                            borderRadius: '0.5rem',
                            outline: 'none',
                            boxShadow: '0 0 0 2px rgba(0, 0, 0, 1)'
                          }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#374151', marginBottom: '0.25rem' }}>Country*</label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          required
                          style={{
                            width: '100%',
                            padding: '0.5rem 1rem',
                            border: '1px solid #e5e7eb',
                            borderRadius: '0.5rem',
                            outline: 'none',
                            boxShadow: '0 0 0 2px rgba(0, 0, 0, 1)'
                          }}
                        />
                      </div>
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#374151', marginBottom: '0.25rem' }}>Education Background*</label>
                      <input
                        type="text"
                        name="education"
                        value={formData.education}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: '100%',
                          padding: '0.5rem 1rem',
                          border: '1px solid #e5e7eb',
                          borderRadius: '0.5rem',
                          outline: 'none',
                          boxShadow: '0 0 0 2px rgba(0, 0, 0, 1)'
                        }}
                      />
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#374151', marginBottom: '0.25rem' }}>Relevant Experience*</label>
                      <textarea
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        required
                        rows={3}
                        style={{
                          width: '100%',
                          padding: '0.5rem 1rem',
                          border: '1px solid #e5e7eb',
                          borderRadius: '0.5rem',
                          outline: 'none',
                          boxShadow: '0 0 0 2px rgba(0, 0, 0, 1)'
                        }}
                      />
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#374151', marginBottom: '0.25rem' }}>Motivation for Applying*</label>
                      <textarea
                        name="motivation"
                        value={formData.motivation}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        style={{
                          width: '100%',
                          padding: '0.5rem 1rem',
                          border: '1px solid #e5e7eb',
                          borderRadius: '0.5rem',
                          outline: 'none',
                          boxShadow: '0 0 0 2px rgba(0, 0, 0, 1)'
                        }}
                      />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
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
        <div style={{
          backgroundColor: '#F97316',
          padding: '2rem',
          borderRadius: '0.5rem',
          marginTop: '3rem',
          maxWidth: '42rem',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Now Accepting Applications</h3>
          <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem' }}>
            Join Cohort 5 of our transformative fellowship program and become part of a growing network of mental health leaders.
          </p>
          <Button 
            variant="secondary" 
            onClick={() => setShowApplicationForm(true)}
          >
            Apply Now
          </Button>
        </div>
      </Section>

      {/* Fellows Display Section */}
      <Section title="Our Fellowship Graduates" subtitle="Meet the mental health leaders from previous cohorts">
        <div style={{ maxWidth: '72rem', marginLeft: 'auto', marginRight: 'auto' }}>
          {/* Cohort selection tabs */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '2rem'
          }}>
            {cohortNames.map(cohort => (
              <button
                key={cohort}
                onClick={() => setActiveCohort(activeCohort === cohort ? null : cohort)}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '9999px',
                  fontWeight: 500,
                  backgroundColor: activeCohort === cohort ? '#F97316' : '#F3F4F6',
                  color: activeCohort === cohort ? 'white' : 'black',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                  border: 'none'
                }}
                onMouseOver={(e) => {
                  if (activeCohort !== cohort) {
                    e.currentTarget.style.backgroundColor = '#E5E7EB';
                  }
                }}
                onMouseOut={(e) => {
                  if (activeCohort !== cohort) {
                    e.currentTarget.style.backgroundColor = '#F3F4F6';
                  }
                }}
              >
                {cohort}
              </button>
            ))}
          </div>

          {/* Display fellows for the selected cohort */}
          {activeCohort && (
            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center' }}>
                {activeCohort} Fellows
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '1.5rem'
              }}>
                {cohorts[activeCohort].map((fellow, index) => (
                  <div key={index} style={{
                    backgroundColor: 'white',
                    padding: '1.5rem',
                    borderRadius: '0.5rem',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  >
                    <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{fellow.name}</h4>
                    <p style={{ color: '#4B5563', marginBottom: '0.5rem' }}>
                      {fellow.title || 'Mental Health Fellow'}
                    </p>
                    {fellow.country && (
                      <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>
                        <span style={{ display: 'inline-block', width: '1rem', height: '1rem', marginRight: '0.25rem' }}>🇰🇪</span>
                        {fellow.country}
                      </p>
                    )}
                    {fellow.bio && (
                      <p style={{ marginTop: '0.75rem', color: '#374151' }}>{fellow.bio}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Show all cohorts button */}
          {cohortNames.length > 3 && (
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <button
                onClick={() => setShowAllCohorts(!showAllCohorts)}
                style={{
                  color: '#F97316',
                  fontWeight: 500,
                  cursor: 'pointer',
                  border: 'none',
                  background: 'none',
                  textDecoration: showAllCohorts ? 'none' : 'underline'
                }}
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