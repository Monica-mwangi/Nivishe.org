// components/ui/Dropdown.tsx
import React, { useState } from 'react';
import Link from 'next/link';

interface DropdownItem {
    name: string;
    path: string;
}

interface DropdownProps {
    items: DropdownItem[];
    title: string;
    mainPath: string;
}

const Dropdown: React.FC<DropdownProps> = ({ items, title, mainPath }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div 
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <Link 
                href={mainPath}
                className="flex items-center px-4 py-2 text-white hover:text-yellow-400 transition-colors"
            >
                {title}
                <svg 
                    className={`ml-1 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </Link>
            
            {isOpen && (
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                    <div className="py-1">
                        {items.map((item, index) => (
                            <Link
                                key={index}
                                href={item.path}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;