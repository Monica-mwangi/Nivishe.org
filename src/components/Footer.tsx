import React from 'react';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="mb-4">
            <span className="text-2xl font-bold text-white bg-orange-500 px-2 py-1 rounded">
  Nivishe
</span>

              <span className="ml-1 text-2xl font-bold text-white">Foundation</span>
            </div>
            <p className="mb-4 text-gray-300">
              Clothing Communities in Care and Healing — transforming mental health access, one community at a time.
            </p>
            <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 text-white hover:bg-orange-600 p-2 rounded-full transition-colors"
            >
              <Facebook size={20} />
            </a>

              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-orange-500 text-white hover:bg-orange-600 p-2 rounded-full transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-orange-500 text-white hover:bg-orange-600 p-2 rounded-full transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-yellow-400">About Us</Link></li>
              <li><Link to="/programs/child-wellbeing" className="text-gray-300 hover:text-yellow-400">Our Programs</Link></li>
              <li><Link to="/fellowships" className="text-gray-300 hover:text-yellow-400">Fellowships</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-yellow-400">News & Insights</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-yellow-400">Contact Us</Link></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-400">Get Involved</h3>
            <ul className="space-y-2">
              <li><Link to="/donate" className="text-gray-300 hover:text-yellow-400">Donate</Link></li>
              <li><Link to="/volunteer" className="text-gray-300 hover:text-yellow-400">Volunteer</Link></li>
              <li><Link to="/partnerships" className="text-gray-300 hover:text-yellow-400">Become a Partner</Link></li>
              <li><Link to="/fellowships" className="text-gray-300 hover:text-yellow-400">Apply for Fellowship</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-400">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-yellow-400" />
                <span className="text-gray-300">Nairobi, Kenya</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-yellow-400" />
                <span className="text-gray-300">+254 700 000 000</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-yellow-400" />
                <span className="text-gray-300">info@nivishe.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Nivishe Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;