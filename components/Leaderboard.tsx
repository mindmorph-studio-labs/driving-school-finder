'use client';
import React, { useEffect, useState } from 'react';
import { Award, User } from 'lucide-react';

const badges = ['Novice', 'Learner', 'Pro', 'Expert', 'Master'];
const generateFakeParticipants = () => {
  return Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    pseudo: `Driver_${Math.floor(Math.random() * 1000)}`,
    xp: Math.floor(Math.random() * 3000),
    badge: badges[Math.floor(Math.random() * badges.length)],
  })).sort((a, b) => b.xp - a.xp);
};

export default function Leaderboard({ teaser = false }: { teaser?: boolean }) {
  const [participants, setParticipants] = useState<any[]>([]);

  useEffect(() => {
    setParticipants(generateFakeParticipants());
  }, []);

  const displayParticipants = teaser ? participants.slice(0, 3) : participants;

  return (
    <div className="bg-[#1e1e1e] p-6 rounded-3xl border border-white/5">
      <h3 className="font-bold mb-6 flex items-center gap-2 text-xl text-[#f9c938]">
        <Award /> {teaser ? 'Top Drivers' : 'Global Leaderboard'}
      </h3>
      <div className={`space-y-4 ${teaser ? '' : 'max-h-[500px] overflow-y-auto pr-2 custom-scrollbar'}`}>
        {displayParticipants.map((p, i) => (
          <div key={p.id} className="flex items-center justify-between p-4 bg-[#2a2a2a] rounded-2xl">
            <div className="flex items-center gap-4">
              <span className={`font-black text-lg w-6 ${i < 3 ? 'text-[#f9c938]' : 'text-gray-500'}`}>
                {i + 1}.
              </span>
              <div className="bg-[#111] p-2 rounded-full">
                <User size={16} />
              </div>
              <span className="font-medium">{p.pseudo}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-gray-400 bg-[#111] px-2 py-1 rounded-md">{p.badge}</span>
              <span className="font-bold text-[#f9c938]">{p.xp} XP</span>
            </div>
          </div>
        ))}
        {teaser && (
            <a href="/dashboard" className="block text-center mt-4 text-[#f9c938] font-bold hover:underline">
                View Full Leaderboard →
            </a>
        )}
      </div>
    </div>
  );
}
