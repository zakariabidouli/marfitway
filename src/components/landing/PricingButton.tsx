"use client";

import React from 'react';
import { Button, Icon } from '@/once-ui/components';

interface PricingButtonProps {
  text: string;
  isPopular?: boolean;
}

export const PricingButton: React.FC<PricingButtonProps> = ({ text, isPopular }) => {
  const handleClick = () => {
    // Handle click action here
    console.log('Clicked pricing button');
  };

  return (
    <button
      className={`w-full relative overflow-hidden rounded-2xl transition-all duration-300 font-bold text-3xl p-8 ${
        isPopular 
          ? 'bg-[#bced09] text-[#1d1d1d] hover:bg-[#bced09]/90 shadow-lg shadow-[#bced09]/20 hover:shadow-xl hover:shadow-[#bced09]/30 hover:-translate-y-1' 
          : 'bg-[#1d1d1d] border border-[#bced09] text-[#bced09] hover:bg-[#1d1d1d]/80 hover:border-[#bced09]/80 hover:-translate-y-1'
      }`}
      onClick={handleClick}
      style={{ 
        fontSize: "16px",
        textAlign: "center", 
        borderRadius: "8px",
        alignItems: "right",
      }}

    >
      <span className="relative z-10 flex items-center justify-center">
        {text}
        <Icon 
          name="arrow-right"
          className={`w-4 h-4 ml-2 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110 ${isPopular ? 'text-[#1d1d1d]' : 'text-[#bced09]'}`} 
        />
      </span>
      <span className={`absolute inset-0 w-full h-full transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 ${
        isPopular ? 'bg-[#d6ff00]' : 'bg-[#2a2a2a]'
      }`}></span>
    </button>
  );
}; 