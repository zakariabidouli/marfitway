"use client";

import React from 'react';
import { Icon } from '@/once-ui/components';
import { PricingButton } from './PricingButton';
import { style } from '@/app/resources';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  icon?: string;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  isPopular = false,
  buttonText,
  icon,
}) => {
  return (
    <div className={`relative flex flex-col items-center p-6 rounded-xl transition-all duration-300 hover:scale-105 w-[360px] max-w-[360px] ${
      isPopular 
        ? 'border-2 border-[#bced09] shadow-lg shadow-[#bced09]/30' 
        : 'border border-[#1d1d1d]/80 hover:border-[#bced09]/40'
    }`} style={{ 
      padding: 24,
      width: "25em",
      borderRadius: 16,
      textAlign: "center",
      alignItems: "center",
      boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.1)",
      backdropFilter: "blur(10px)",
      overflow: "hidden",
      background: isPopular 
        ? `linear-gradient(to top left, #bced09 0%, #1d1d1d 60%, #1d1d1d 100%)`
        : `linear-gradient(to bottom right, #1d1d1d 0%, #1d1d1d 60%, #1d1d1d 100%)`
    }}>
      {isPopular && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
          <div className="p-12 rounded-full text-2xl shadow-lg mb-6 text-[#1d1d1d] font-bold">
            Most Popular
          </div>
        </div>
      )}      
        <div className="flex items-center justify-center gap-2 mb-3">
          {/* {icon && <span className="text-2xl text-[#bced09]">{icon}</span>} */}
          <h3 className="text-xl font-bold font-bold text-[#1d1d1d]">{title}</h3>
        </div> 
      {/* <div className="flex items-baseline justify-center mb-3 pb-6">
        <span className="text-4xl font-black text-[#fffcf9]">${price}</span>
        {price !== "97" && <span className="text-[#fffcf9]/60 ml-2">/3 Months</span>}
        {price === "97" && <span className="text-[#fffcf9]/60 ml-2">One-Time</span>}
      </div> */}
      
      <p className="text-2xl font-bold text-[#CFD1D3]/60 mb-12 p-8">{description}</p>
      
      <ul className="w-full space-y-1 mb-6 flex" style={{ textAlign: "left" }}>
        {features.map((feature, index) => (
          <li key={index} className="flex items-start justify-start text-sm text-[#fffcf9] gap-1">
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
        <PricingButton text={buttonText} isPopular={isPopular}/>
    </div>
  );
}; 