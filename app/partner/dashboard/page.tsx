'use client';
import React from 'react';
import { BarChart, Users, Eye, Mail, Star, Settings, Image as ImageIcon, Clock, Tag, MessageSquare } from 'lucide-react';

export default function PartnerDashboardPage() {
  const stats = [
    { title: 'Total Visits', value: '1,240', icon: <Eye className="text-[#f9c938]" /> },
    { title: 'Clicks', value: '380', icon: <BarChart className="text-[#f9c938]" /> },
    { title: 'Leads Received', value: '45', icon: <Mail className="text-[#f9c938]" /> },
  ];

  return (
    <div className="min-h-screen bg-[#111111] text-white p-8">
      <h1 className="text-4xl font-extrabold mb-8 text-[#f9c938]">Partner Dashboard</h1>
      
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {stats.map(s => (
          <div key={s.title} className="bg-[#1e1e1e] p-6 rounded-3xl border border-white/5 flex items-center gap-4">
            <div className="p-4 bg-[#2a2a2a] rounded-full">{s.icon}</div>
            <div>
              <p className="text-gray-400 text-sm">{s.title}</p>
              <p className="text-3xl font-bold">{s.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Management Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {[
          { title: 'Manage Profile', icon: <Settings /> },
          { title: 'Upload Photos', icon: <ImageIcon /> },
          { title: 'Operating Hours', icon: <Clock /> },
          { title: 'Services & Pricing', icon: <Tag /> },
          { title: 'Special Offers', icon: <Tag /> },
          { title: 'Customer Reviews', icon: <Star /> },
          { title: 'WhatsApp Direct', icon: <MessageSquare /> },
        ].map(item => (
          <button key={item.title} className="flex items-center gap-4 p-6 bg-[#1e1e1e] rounded-2xl border border-white/5 hover:border-[#f9c938]/30 transition-all text-left">
            <div className="p-3 bg-[#2a2a2a] rounded-xl">{item.icon}</div>
            <span className="font-bold text-lg">{item.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
