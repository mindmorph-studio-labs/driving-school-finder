'use client';
import React, { useState } from 'react';
import AuthModal from './AuthModal';

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isStudent, setIsStudent] = useState(false);

  React.useEffect(() => {
    setIsStudent(localStorage.getItem('userType') === 'student');
  }, []);

  return (
    <>
      <nav className="flex items-center justify-between px-8 py-4 bg-[#0b5c29] border-b border-[#f9c938]/20">
        <a href="/" className="font-bold text-lg tracking-tight uppercase">
          Jamaica <span className="text-[#f9c938]">Driving School Finder</span>
        </a>
        <div className="flex items-center gap-8 text-sm font-medium">
          <a href="/" className="hover:text-[#f9c938]">Home</a>
          <a href="/blog" className="hover:text-[#f9c938]">Blog</a>
          <a href="/tests" className="hover:text-[#f9c938]">Road Code</a>
          {isStudent && (
            <>
              <a href="/rewards" className="hover:text-[#f9c938]">Rewards</a>
              <a href="/dashboard" className="hover:text-[#f9c938]">Dashboard</a>
            </>
          )}
          <div className="h-4 w-[1px] bg-white/20"></div>
          <button onClick={() => setIsModalOpen(true)} className="hover:text-[#f9c938]">LOGIN / SIGN UP</button>
          <a href="/partner-pricing" className="bg-[#f9c938] text-black px-5 py-2 rounded-full font-bold hover:bg-yellow-300 transition-colors">List My Driving School</a>
        </div>
      </nav>
      <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
