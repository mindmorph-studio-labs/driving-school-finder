'use client';
import React, { useEffect, useState } from 'react';
import { useXP } from '@/components/XPProvider';
import { Trophy, History, Heart, Star, BookOpen, CheckCircle } from 'lucide-react';
import Leaderboard from '@/components/Leaderboard';

export default function DashboardPage() {
  const { xp } = useXP();
  const [isStudent, setIsStudent] = useState(false);
  const [pseudo, setPseudo] = useState('');

  useEffect(() => {
    setIsStudent(localStorage.getItem('userType') === 'student');
    setPseudo(localStorage.getItem('userPseudo') || '');
  }, []);

  if (!isStudent) {
    return <div className="p-8 text-center">Please log in as a student to access the dashboard.</div>;
  }

  const missions = [
    { title: 'Leave a review', icon: <Star size={20}/>, completed: false },
    { title: 'Pass a practice test', icon: <BookOpen size={20}/>, completed: false },
    { title: 'Complete your profile', icon: <CheckCircle size={20}/>, completed: true },
  ];

  return (
    <div className="min-h-screen bg-[#111] text-white p-8">
      <h1 className="text-4xl font-extrabold mb-8 text-[#f9c938]">Welcome back, {pseudo}!</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-[#1e1e1e] p-6 rounded-3xl border border-white/5">
            <h3 className="text-gray-400 font-medium mb-2">Current XP</h3>
            <div className="text-5xl font-black">{xp}</div>
        </div>
        <div className="bg-[#1e1e1e] p-6 rounded-3xl border border-white/5 col-span-2">
            <h3 className="font-bold mb-4 flex items-center gap-2"><Trophy className="text-[#f9c938]" /> Your Progress</h3>
            <div className="w-full bg-[#111] h-4 rounded-full overflow-hidden">
                <div className="bg-[#f9c938] h-full" style={{ width: `${Math.min((xp / 3000) * 100, 100)}%` }}></div>
            </div>
            <p className="text-sm text-gray-400 mt-2">{xp} / 3000 XP for next contest</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
            <div className="bg-[#1e1e1e] p-6 rounded-3xl border border-white/5">
                <h3 className="font-bold mb-6">Daily Missions</h3>
                <div className="space-y-4">
                    {missions.map((m, i) => (
                        <div key={i} className={`p-4 rounded-2xl flex items-center justify-between ${m.completed ? 'bg-[#0b5c29]' : 'bg-[#2a2a2a]'}`}>
                            <div className="flex items-center gap-3">{m.icon} {m.title}</div>
                            {m.completed ? <CheckCircle size={20} /> : <div className="w-5 h-5 border-2 border-white rounded-full" />}
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-[#1e1e1e] p-6 rounded-3xl border border-white/5">
                <h3 className="font-bold mb-6">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-4">
                    <a href="/dashboard/history" className="p-4 bg-[#2a2a2a] rounded-2xl flex flex-col items-center gap-2 hover:bg-[#333]"><History /> History</a>
                    <a href="/dashboard/favorites" className="p-4 bg-[#2a2a2a] rounded-2xl flex flex-col items-center gap-2 hover:bg-[#333]"><Heart /> Favorites</a>
                </div>
            </div>
        </div>
        <div className="lg:col-span-1">
            <Leaderboard />
        </div>
      </div>
    </div>
  );
}
