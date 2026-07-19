import React from 'react';
import { schoolsData } from '@/lib/data';
import Navbar from '@/components/Navbar';

export default function SchoolsPage() {
  return (
    <div className="min-h-screen bg-[#111111] text-white font-sans flex flex-col">
      <Navbar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">All Driving Schools</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schoolsData.map(school => (
            <div key={school.id} className="bg-[#1e1e1e] rounded-2xl p-6 border border-white/5">
              <h4 className="font-bold text-lg">{school.name}</h4>
              <p className="text-sm text-gray-400 mb-4">{school.city} • {school.category}</p>
              <div className="flex justify-between items-center">
                <div className="text-[#f9c938] text-sm">★★★★★ <span className="text-white font-bold">{school.rating}</span></div>
                <a href={`/school/${school.id}`} className="bg-white text-black text-xs font-bold px-4 py-2 rounded-lg">View Profile</a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
