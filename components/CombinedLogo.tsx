import React from 'react';

interface CombinedLogoProps {
  className?: string
}

export function CombinedLogo({ className = "" }: CombinedLogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* 
        OPTION A: UNCOMMENT THIS IF YOU UPLOADED A LOGO IMAGE TO YOUR PUBLIC FOLDER
        (Just remove the "/*" and "*/" symbols to make it active)
        
        <img 
          src="/my-logo.png" 
          alt="Marketplace Logo" 
          className="h-6 w-auto object-contain" 
        /> 
      */}

      {/* OPTION B: CLEAN TEXT PLACEHOLDER (Change "market.com" to your real brand name) */}
      <span className="font-bold text-lg tracking-tight text-neutral-900 dark:text-white">
        market.com
      </span>
    </div>
  )
}
