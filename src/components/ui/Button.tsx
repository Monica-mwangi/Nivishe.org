import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  type = 'button',
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-md';
  
  const variantClasses = {
    primary: 'bg-orange-500 text-black hover:bg-orange-500 font-bold shadow-md hover:shadow-lg',
    secondary: 'bg-black text-orange-500 hover:bg-gray-800 font-bold shadow-md hover:shadow-lg',
    outline: 'bg-transparent border-2 border-orange-500 text-black hover:bg-orange-50',
  };
  
  const sizeClasses = {
    sm: 'text-sm py-2 px-3',
    md: 'text-base py-2.5 px-5',
    lg: 'text-lg py-3 px-6',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;