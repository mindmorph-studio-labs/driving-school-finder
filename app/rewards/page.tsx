'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { useXP } from '@/components/XPProvider';

const MIN_XP = 3000;

export default function RewardsPage() {
  const { xp } = useXP();
  const [isStudent, setIsStudent] = useState(false);
  const [hasParticipated, setHasParticipated] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    setHasParticipated(localStorage.getItem('hasParticipated') === 'true');
    setIsStudent(localStorage.getItem('userType') === 'student');
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate server validation to prevent easy client-side bypass, though true security requires backend
    const uniqueEntryId = Math.random().toString(36).substring(7);
    localStorage.setItem('hasParticipated', 'true');
    localStorage.setItem('participatedEntryId', uniqueEntryId);
    setHasParticipated(true);
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#111111] text-white font-sans">
      <Navbar />
      <main className="max-w-2xl mx-auto p-8">
        <h1 className="text-4xl font-extrabold mb-8 text-[#f9c938]">Earn Rewards & Win</h1>
        
        <div className="bg-[#1e1e1e] p-8 rounded-3xl border border-white/5 mb-8">
          <p className="text-lg mb-4">Your current XP: <strong className="text-[#f9c938] text-2xl">{xp}</strong></p>
          <p className="text-gray-400">Required for contest participation: <strong>{MIN_XP} XP</strong></p>
        </div>

        <div className="bg-[#1e1e1e] p-8 rounded-3xl border border-white/5 mb-8">
          <h2 className="text-2xl font-bold mb-6">How to Earn XP</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-400">
            <li><strong>Passing tests:</strong> Earn XP by completing road code practice tests.</li>
            <li><strong>Leaving reviews:</strong> Share your experience with driving schools.</li>
            <li><strong>Exploring sheets:</strong> Discover new driving schools.</li>
            <li><strong>Interacting with partners:</strong> Engage with our partner driving schools.</li>
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-[#1e1e1e] p-6 rounded-3xl border border-white/5">
            <h3 className="font-bold text-lg mb-4 text-[#f9c938]">Badges</h3>
            <ul className="text-sm text-gray-400 space-y-1">
                <li>🏅 Rookie Driver</li>
                <li>🏆 Road Code Master</li>
                <li>🌟 Premium Reviewer</li>
                <li>💎 Jamaica Expert</li>
            </ul>
          </div>
          <div className="bg-[#1e1e1e] p-6 rounded-3xl border border-white/5">
            <h3 className="font-bold text-lg mb-4 text-[#f9c938]">Leaderboard</h3>
            <p className="text-sm text-gray-400">See our <a href="/leaderboard" className="underline text-white">Top Contributors</a>!</p>
          </div>
        </div>

        <div className="bg-[#1e1e1e] p-8 rounded-3xl border border-white/5 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-[#f9c938]">Quarterly Contest</h2>
          <p className="text-gray-400">Join our contest held every quarter! The next drawing takes place on <strong>September 30th</strong>. Ensure you have reached the minimum XP to participate.</p>
        </div>

        {hasParticipated || formSubmitted ? (
          <div className="bg-green-900/20 border border-green-500/50 p-6 rounded-2xl text-center">
            <h2 className="text-2xl font-bold text-green-400 mb-2">Entry Received!</h2>
            <p>Thank you for participating in our contest. Good luck!</p>
          </div>
        ) : !isStudent ? (
          <div className="bg-red-900/20 border border-red-500/50 p-6 rounded-2xl text-center">
            <h2 className="text-2xl font-bold text-red-400 mb-2">Not Eligible</h2>
            <p>Only students can participate in this contest.</p>
          </div>
        ) : xp >= MIN_XP ? (
          <div className="bg-[#1e1e1e] p-8 rounded-3xl border border-white/5">
            <h2 className="text-2xl font-bold mb-6">Enter the Contest</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input required type="text" className="w-full bg-black/50 p-3 rounded-xl border border-white/10" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input required type="email" className="w-full bg-black/50 p-3 rounded-xl border border-white/10" />
              </div>
              <button type="submit" className="w-full bg-[#f9c938] text-black font-bold py-3 rounded-xl hover:bg-yellow-300 transition-colors">
                Submit Entry
              </button>
            </form>
          </div>
        ) : (
          <div className="bg-red-900/20 border border-red-500/50 p-6 rounded-2xl text-center">
            <h2 className="text-2xl font-bold text-red-400 mb-2">Not Yet Eligible</h2>
            <p>You need {MIN_XP - xp} more XP to participate in this contest. Keep practicing!</p>
          </div>
        )}
      </main>
    </div>
  );
}
