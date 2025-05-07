import React from 'react';
import Section from '../components/ui/Section';
import { Mail, MapPin, Phone } from 'lucide-react';
import Button from '../components/ui/Button';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-16">
      <Section
        title="Contact Us"
        subtitle="Get in touch with us for any inquiries or support"
        className="text-White"
        dark
      >
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="bg-yellow-400 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 bg-white">Send us a message</h3>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              
              <Button variant="secondary" type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="mr-3 text-yellow-400 mt-1" size={24} />
                  <div>
                    <p className="font-bold">Email</p>
                    <p className="text-gray-600">info@nivishe.org</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="mr-3 text-yellow-400 mt-1" size={24} />
                  <div>
                    <p className="font-bold">Phone</p>
                    <p className="text-gray-600">+254 700 000 000</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="mr-3 text-yellow-400 mt-1" size={24} />
                  <div>
                    <p className="font-bold">Location</p>
                    <p className="text-gray-600">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default ContactPage;