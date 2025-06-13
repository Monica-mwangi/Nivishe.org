import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from './ui/Button';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);
  const [openThirdDropdown, setOpenThirdDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
        setOpenSubDropdown(null);
        setOpenThirdDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    {
      name: 'What we do',
      path: '/programs',
      dropdown: [
        {
          name: 'Maternal, Child & Adolescent Mental Health',
          submenu: [
            { name: 'Her Healing Journey (HHJ)', path: '/programs/hhj' },
            { name: 'Binti Wellness Circles', path: '/programs/binti' },
            { name: 'Child & Adolescent Well-being Program', path: '/programs/child-wellbeing' },
          ]
        },
        {
          name: 'Nivishe Institute for Mental Health Learning',
          submenu: [
            { name: 'Nivishe Mental Health Fellowship', path: '/institute/fellowship' },
            { name: 'Nivishe Thematic Fellowship: Refugees and Displaced Youth', path: '/programs/nivishe' },
            { name: 'Community Capacity Buidling', path:'/capacity-building' },
            { name: 'Research and knowledge production', path:'/knowledge-research' },
          ]
        },
        {
          name: 'Systems Change: Health, Justice, Reform & Policy Advocacy',
          submenu: [
            { name: 'Criminal and Health Justice Nexus Program', path: '/Criminal' },
            { name: 'Policy and Advocacy for Mental Health Justice', path:'/policy' },
          ]
        },
        {
          name: 'Community-Centred Healing & Innovation',
          path: '/community-innovation',
          submenu: [
            { name: 'Healing through Play and Creative Expression', path:'/healing' },
            { name: 'Nivishe Digital & Innovation Lab', path:'/Digital' },
            { name: 'Safe Healing Spaces', path:'/safe-healing' }
          ]
        }
      ]
    },
    {
      name: 'Impact',
      path: '/impact',
    },
    { name: 'Fellowships', path: '/fellowships' },
    {
      name: 'News and Insights',
      path: '/news',
      dropdown: [
        {
          name: 'Newsroom',
          submenu: [
            { name: 'Newsletters', path: '/news-letter' },
            { name: 'News and announcements', path: '/announcements' }
          ]
        },
        {
          name: 'Reports and Publications',
          submenu: [
            // { name: 'Annual Reports', path: '/reports' },
            { name: 'Comic Book Publication', path: '/publication' },
            { name: 'Resources', path:'/resources' },
            // {
            //   name: 'Insights and stories',
            //   submenu: [
            //     { name: 'Perspective Blog', path: '/blogs' },
            //     { name: 'Grantee Impact Stories', path: '/impact-stories' },
            //     { name: 'Tales', path: '/tales' }
            //   ]
            // }
          ]
        }
      ]
    },
    { name: 'Contact', path: '/contact' }
  ];

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
    setOpenSubDropdown(null);
    setOpenThirdDropdown(null);
  };

  const toggleSubDropdown = (name: string) => {
    setOpenSubDropdown(openSubDropdown === name ? null : name);
    setOpenThirdDropdown(null);
  };

  const toggleThirdDropdown = (name: string) => {
    setOpenThirdDropdown(openThirdDropdown === name ? null : name);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-3" ref={dropdownRef}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        {/* Logo */}
<Link to="/" className="flex items-center gap-2">
  {/* Add your logo image here */}
  <img 
    src="/images/logo.png"  // Update this path to your actual logo
    alt="Nivishe Logo"
    className="h-16 w-auto"  // Adjust height as needed
  />
  {/* <span className="text-2xl font-bold text-orange-600">
    Nivishe
  </span> */}
</Link>

        {/* Right-aligned Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(link.name)}
                      className={`flex items-center font-medium hover:text-orange-500 transition-colors ${
                        openDropdown === link.name ? 'text-orange-500' : 'text-gray-800'
                      }`}
                    >
                      {link.name}
                      <ChevronDown size={16} className="ml-1" />
                    </button>

                    {openDropdown === link.name && (
                      <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                        <div className="py-1">
                          {link.dropdown.map((item) => (
                            <div key={item.name} className="relative">
                              {item.submenu ? (
                                <>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      toggleSubDropdown(item.name);
                                    }}
                                    className="w-full text-left flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                  >
                                    {item.name}
                                    <ChevronDown size={14} />
                                  </button>

                                  {openSubDropdown === item.name && (
                                    <div className="absolute right-full top-0 mr-1 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                                      <div className="py-1">
                                        {item.submenu.map((subItem) => (
                                          <div key={subItem.name} className="relative">
                                            {subItem.submenu ? (
                                              <>
                                                <button
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          toggleThirdDropdown(subItem.name);
                                        }}
                                        className="w-full flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                      >
                                        {subItem.name}
                                        <ChevronDown size={12} />
                                      </button>
                                                
                                                {openThirdDropdown === subItem.name && (
                                                  <div className="absolute right-full top-0 mr-1 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                                                    <div className="py-1">
                                                      {subItem.submenu.map((thirdItem) => (
                                                        <Link
                                                          key={thirdItem.name}
                                                          to={thirdItem.path}
                                                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                          onClick={() => {
                                                            setOpenDropdown(null);
                                                            setOpenSubDropdown(null);
                                                            setOpenThirdDropdown(null);
                                                          }}
                                                        >
                                                          {thirdItem.name}
                                                        </Link>
                                                      ))}
                                                    </div>
                                                  </div>
                                                )}
                                              </>
                                            ) : (
                                              <Link
                                                to={subItem.path}
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                onClick={() => setOpenDropdown(null)}
                                              >
                                                {subItem.name}
                                              </Link>
                                            )}
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </>
                              ) : (
                                <Link
                                  to={item.path}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                  onClick={() => setOpenDropdown(null)}
                                >
                                  {item.name}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={`font-medium hover:text-orange-500 transition-colors ${
                      isActive(link.path) ? 'text-orange-500' : 'text-gray-800'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          {/* <Button variant="primary">Donate</Button> */}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600 hover:text-orange-500 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
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
                        openDropdown === link.name ? 'text-orange-500' : 'text-gray-800'
                      }`}
                      aria-expanded={openDropdown === link.name}
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
                          <div key={item.name}>
                            {item.submenu ? (
                              <>
                                <button
                                  onClick={() => toggleSubDropdown(item.name)}
                                  className="flex items-center justify-between w-full py-2 text-sm text-gray-700"
                                  aria-expanded={openSubDropdown === item.name}
                                >
                                  {item.name}
                                  <ChevronDown
                                    size={14}
                                    className={`transform ${
                                      openSubDropdown === item.name ? 'rotate-180' : ''
                                    }`}
                                  />
                                </button>
                                {openSubDropdown === item.name && (
                                  <div className="pl-4">
                                    {item.submenu.map((subItem) => (
                                      <div key={subItem.name}>
                                        {subItem.submenu ? (
                                          <>
                                            <button
                                              onClick={() => toggleThirdDropdown(subItem.name)}
                                              className="flex items-center justify-between w-full py-2 text-sm text-gray-700"
                                              aria-expanded={openThirdDropdown === subItem.name}
                                            >
                                              {subItem.name}
                                              <ChevronDown
                                                size={12}
                                                className={`transform ${
                                                  openThirdDropdown === subItem.name ? 'rotate-180' : ''
                                                }`}
                                              />
                                            </button>
                                            {openThirdDropdown === subItem.name && (
                                              <div className="pl-4">
                                                {subItem.submenu.map((thirdItem) => (
                                                  <Link
                                                    key={thirdItem.name}
                                                    to={thirdItem.path}
                                                    className="block py-2 text-sm text-gray-700"
                                                    onClick={() => setIsOpen(false)}
                                                  >
                                                    {thirdItem.name}
                                                  </Link>
                                                ))}
                                              </div>
                                            )}
                                          </>
                                        ) : (
                                          <Link
                                            to={subItem.path}
                                            className="block py-2 text-sm text-gray-700"
                                            onClick={() => setIsOpen(false)}
                                          >
                                            {subItem.name}
                                          </Link>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </>
                            ) : (
                              <Link
                                to={item.path}
                                className="block py-2 text-sm text-gray-700"
                                onClick={() => setIsOpen(false)}
                              >
                                {item.name}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={`py-3 font-medium border-b border-gray-100 ${
                      isActive(link.path) ? 'text-orange-500' : 'text-gray-800'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            {/* <div className="mt-4">
              <Button variant="primary" className="w-full">Donate</Button>
            </div> */}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;