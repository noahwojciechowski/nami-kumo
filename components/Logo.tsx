import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      stroke="currentColor" 
      className={className}
      aria-labelledby="logoTitle"
    >
      <title id="logoTitle">Nami Kumo Logo</title>
      {/* Ensō-inspired Circle (slightly imperfect/open for organic feel) */}
      <path 
        d="M92 50 A42 42 0 1 1 50 8" 
        strokeWidth="1.5" 
        strokeLinecap="round"
        className="opacity-60"
      />
      
      {/* Kumo (Cloud) - Upper element */}
      <path 
        d="M28 44 C28 32 38 28 48 32 C54 28 66 30 68 42" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Nami (Wave) - Lower element */}
      <path 
        d="M26 56 C36 66 46 50 56 56 C64 60 70 53 70 53" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M36 68 C43 74 50 66 58 68" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="opacity-80"
      />
    </svg>
  );
};