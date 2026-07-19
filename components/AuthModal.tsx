'use client';
import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function AuthModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [userType, setUserType] = useState('student');
  const [pseudo, setPseudo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const finalPseudo = userType === 'student' ? `Driver_${Math.floor(100 + Math.random() * 900)}` : pseudo;
    localStorage.setItem('isUserLoggedIn', 'true');
    localStorage.setItem('userType', userType);
    localStorage.setItem('userPseudo', finalPseudo);
    if (userType === 'student') {
        alert(`Welcome! Your student pseudonym is: ${finalPseudo}`);
    }
    onClose();
    window.location.reload();
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1e1e1e] p-8 rounded-3xl border border-white/5 w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white"><X size={20}/></button>
        <h2 className="text-2xl font-bold mb-6">Login / Sign Up</h2>
        <div className="flex gap-4 mb-6">
          <label className={`flex-1 p-3 rounded-xl border ${userType === 'student' ? 'border-[#f9c938]' : 'border-white/5'} bg-[#2a2a2a] text-center cursor-pointer`}>
            <input type="radio" name="userType" value="student" checked={userType === 'student'} onChange={() => setUserType('student')} className="hidden" />
            Student
          </label>
          <label className={`flex-1 p-3 rounded-xl border ${userType === 'partner' ? 'border-[#f9c938]' : 'border-white/5'} bg-[#2a2a2a] text-center cursor-pointer`}>
            <input type="radio" name="userType" value="partner" checked={userType === 'partner'} onChange={() => setUserType('partner')} className="hidden" />
            Partner
          </label>
        </div>
        {userType !== 'student' && (
          <input type="text" placeholder="Pseudo" value={pseudo} onChange={(e) => setPseudo(e.target.value)} className="w-full p-3 bg-[#2a2a2a] rounded-xl mb-4 border border-white/5"/>
        )}
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 bg-[#2a2a2a] rounded-xl mb-4 border border-white/5"/>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3 bg-[#2a2a2a] rounded-xl mb-6 border border-white/5"/>
        <button onClick={handleLogin} className="w-full bg-[#f9c938] text-black py-3 rounded-xl font-bold hover:bg-yellow-300">Submit</button>
      </div>
    </div>
  );
}
