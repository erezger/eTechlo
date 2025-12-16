// src/context/PricingContext.tsx

'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

// 1. הגדרת הטיפוסים
interface PricingContextType {
  selectedPackage: string | null; // שם החבילה שנבחרה
  setSelectedPackage: (packageName: string | null) => void;
}

// 2. יצירת ה-Context
const PricingContext = createContext<PricingContextType | undefined>(undefined);

// 3. ה-Provider (העוטף)
interface PricingProviderProps {
  children: ReactNode;
}

export const PricingProvider: React.FC<PricingProviderProps> = ({ children }) => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  return (
    <PricingContext.Provider value={{ selectedPackage, setSelectedPackage }}>
      {children}
    </PricingContext.Provider>
  );
};

// 4. Custom Hook לשימוש נוח
export const usePricingContext = () => {
  const context = useContext(PricingContext);
  if (context === undefined) {
    throw new Error('usePricingContext must be used within a PricingProvider');
  }
  return context;
};