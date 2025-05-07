import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from './ui/Button';
import { Link, useLocation } from 'react-router-dom';
import Dropdown from './ui/Dropdown';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'About', path: '/' },
    { 
      name: 'Programs', 
      path: '/programs',
      dropdown: [
        { name: 'Her Healing Journey (HHJ)', path: '/programs/hhj' },
        { name: 'Binti Wellness Circles', path: '/programs/binti' },
        { name: 'Child and Adolescent Well-being Program', path: '/programs/child-wellbeing' },
        { name: 'Nivishe Institute for Mental Health Learning and Research', path: '/programs/nivishe' }
      ]
    },
    { name: 'Impact',
      path: '/impact', 
      dropdown: [
        { name:'OverView', path:'/impact'},
        { name:'Quarterly Reports', path:'/reports'},
        { name:'Research Papers', path:'/research'},
        { name:'News and Insights', path:'/news-insights'}
      ]
    
    },
    { name: 'Fellowships', path: '/fellowships' },
   
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const isDropdownActive = (dropdownItems: Array<{path: string}>) => {
    return dropdownItems.some(item => location.pathname === item.path);
  };

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white bg-orange-500 px-3 py-2 rounded">
              Nivishe
            </span>
            <span className="ml-1 text-2xl font-bold text-black">Foundation</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.dropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(link.name)}
                    className={`flex items-center font-medium hover:text-orange-500 transition-colors ${
                      isDropdownActive(link.dropdown) ? 'text-orange-500' : 'text-black'
                    }`}
                  >
                    {link.name}
                    <ChevronDown size={16} className="ml-1" />
                  </button>
                  {openDropdown === link.name && (
                    <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                      <div className="py-1">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className={`block px-4 py-2 text-sm ${
                              isActive(item.path)
                                ? 'bg-orange-50 text-orange-600'
                                : 'text-gray-700 hover:bg-gray-100'
                            }`}
                            onClick={() => setOpenDropdown(null)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={link.path}
                  className={`font-medium hover:text-orange-500 transition-colors ${
                    isActive(link.path) ? 'text-orange-500' : 'text-black'
                  }`}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <Button variant="primary">Donate</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(link.name)}
                      className={`flex items-center justify-between w-full py-3 font-medium border-b border-gray-100 ${
                        isDropdownActive(link.dropdown) ? 'text-orange-500' : 'text-black'
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          openDropdown === link.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openDropdown === link.name && (
                      <div className="pl-4">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className={`block py-2 text-sm ${
                              isActive(item.path)
                                ? 'text-orange-500'
                                : 'text-gray-700'
                            }`}
                            onClick={() => {
                              setIsOpen(false);
                              setOpenDropdown(null);
                            }}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={`py-3 font-medium border-b border-gray-100 ${
                      isActive(link.path) ? 'text-orange-500' : 'text-black'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-4">
              <Button variant="primary" className="w-full">Donate</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;