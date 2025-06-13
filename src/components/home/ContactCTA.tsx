import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactCTA: React.FC = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://server.nivishefoundation.org/api/contact-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Submission failed');
      await response.json();
      setSuccessPopup(true);
      setFormData({ Name: '', Email: '', Message: '' });
    } catch (error) {
      setErrorMessage('Failed to submit form. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setSuccessPopup(false);
    setFormData({ Name: '', Email: '', Message: '' });
  };

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="bg-black rounded-xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Contact Info */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6 text-orange-400"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Get in Touch With Us
              </motion.h2>
              <motion.p 
                className="text-lg md:text-xl text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Whether you're interested in our programs, want to support our mission, or need more information, we'd love to hear from you.
              </motion.p>
              <motion.div className="space-y-4 mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}>
                <div className="flex items-start">
                  <Mail className="mr-3 text-orange-500 mt-1" size={20} />
                  <div>
                    <p className="font-bold text-white">Email</p>
                    <p className="text-gray-300">info@nivishefoundation.org</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="mr-3 text-orange-500 mt-1" size={20} />
                  <div>
                    <p className="font-bold text-white">Phone</p>
                    <p className="text-gray-300">+254 741 706 638</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="mr-3 text-orange-500 mt-1" size={20} />
                  <div>
                    <p className="font-bold text-white">Location</p>
                    <p className="text-gray-300">Nairobi, Kenya</p>
                  </div>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 }}>
                <Button className="bg-black text-white">Contact Us</Button>
              </motion.div>
            </div>

            {/* Right Form Section */}
            <div className="bg-orange-500 p-8 md:p-12 relative">
              <motion.form
                className="space-y-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                onSubmit={handleSubmit}
              >
                <h3 className="text-2xl font-bold mb-6 text-white">Send us a message</h3>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-black mb-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="Name"
                    value={formData.Name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="Email"
                    value={formData.Email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black mb-1">Message</label>
                  <textarea
                    id="message"
                    name="Message"
                    rows={4}
                    value={formData.Message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                    required
                  ></textarea>
                </div>
                {errorMessage && (
                  <div className="text-red-100 bg-red-700 p-2 rounded-md text-sm">
                    {errorMessage}
                  </div>
                )}
                <div>
                  <Button variant="secondary" className="w-full" type="submit" disabled={submitting}>
                    {submitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </motion.form>

              {/* Popup on Success */}
              {successPopup && (
                <div className="absolute inset-0 bg-white bg-opacity-95 z-20 flex items-center justify-center rounded-lg shadow-lg">
                  <button 
                    onClick={resetForm}
                    className="absolute top-4 left-4 text-gray-500 z-30"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <div className="text-center p-6 bg-white rounded-lg shadow-lg max-w-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                    <p className="mb-6">Thank you for reaching out. We'll get back to you soon.</p>
                    <Button onClick={resetForm}>Close</Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
