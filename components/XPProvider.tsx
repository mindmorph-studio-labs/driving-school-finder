'use client';
import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';

const XPContext = createContext<{ xp: number; addXP: (amount: number) => void; resetXP: () => void } | null>(null);

export function XPProvider({ children }: { children: React.ReactNode }) {
  const [xp, setXp] = useState(0);

  const resetXP = useCallback(() => {
      setXp(0);
      localStorage.setItem('userXP', '0');
      localStorage.removeItem('hasParticipated');
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem('userXP');
    if (stored) {
        const parsed = parseInt(stored);
        if (!isNaN(parsed)) setXp(parsed);
    }

    // Contest reset check: Quarterly drawing dates
    const now = new Date();
    const year = now.getFullYear();
    const quarterlyDates = [
        `${year}-03-31`,
        `${year}-06-30`,
        `${year}-09-30`,
        `${year}-12-31`
    ];
    
    const lastResetDate = localStorage.getItem('lastResetContestDate');
    
    // Check if the latest contest date has passed
    const latestPassedContestDate = quarterlyDates
        .filter(d => now > new Date(d + 'T23:59:59'))
        .pop(); // Get the last one

    if (latestPassedContestDate && lastResetDate !== latestPassedContestDate) {
        resetXP();
        localStorage.setItem('lastResetContestDate', latestPassedContestDate);
    }
  }, [resetXP]);

  const addXP = useCallback((amount: number) => {
    // Role-based check
    const isStudent = localStorage.getItem('userType') === 'student';
    if (!isStudent) return;

    setXp(prev => {
      const newVal = Math.min(prev + amount, 3000);
      localStorage.setItem('userXP', newVal.toString());
      return newVal;
    });
  }, []);

  const value = useMemo(() => ({ xp, addXP, resetXP }), [xp, addXP, resetXP]);

  return <XPContext.Provider value={value}>{children}</XPContext.Provider>;
}

export const useXP = () => {
  const context = useContext(XPContext);
  if (!context) throw new Error('useXP must be used within XPProvider');
  return context;
};
