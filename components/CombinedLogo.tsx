import React from 'react';

interface CombinedLogoProps {
  className?: string
}

export function CombinedLogo({ className = "" }: CombinedLogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* 
        OPTION A: UNCOMMENT BELOW IF YOU UPLOADED A LOGO IMAGE TO YOUR PUBLIC FOLDER
        <img 
          src="/my-logo.png" 
          alt="Marketplace Logo" 
          className="h-6 w-auto object-contain" 
        /> 
      */}

      {/* OPTION B: CLEAN TEXT PLACEHOLDER */}
      <span className="font-bold text-lg tracking-tight text-neutral-900 dark:text-white">
        market.com
      </span>
    </div>
  )
}
