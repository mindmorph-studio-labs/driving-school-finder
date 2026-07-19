import React from 'react';
import { MapPin, Star, Phone, MessageSquare, CheckCircle, Clock } from 'lucide-react';

export default async function SchoolProfile({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className="min-h-screen bg-[#111111] text-white font-sans">
      {/* Simple Header */}
      <nav className="flex items-center justify-between px-8 py-4 bg-[#0b5c29] border-b border-[#f9c938]/20">
        <a href="/" className="font-bold text-lg tracking-tight uppercase">
          Jamaica <span className="text-[#f9c938]">Driving School Finder</span>
        </a>
      </nav>

      <main className="max-w-7xl mx-auto p-6 grid grid-cols-12 gap-8 mt-8">
        {/* Main Content */}
        <div className="col-span-8 space-y-8">
          {/* Profile Hero */}
          <div className="bg-[#1e1e1e] rounded-3xl p-8 border border-white/5">
            <div className="flex gap-6">
              <div className="w-32 h-32 bg-gray-700 rounded-2xl flex items-center justify-center text-4xl italic font-black text-gray-500">LOGO</div>
              <div>
                <h1 className="text-4xl font-extrabold text-white">Kingston Elite Academy</h1>
                <p className="flex items-center gap-2 text-gray-400 mt-2"><MapPin size={16} /> Kingston • Certified Premium Partner</p>
                <div className="flex gap-2 mt-4">
                  <span className="bg-[#f9c938] text-black text-xs font-bold px-3 py-1 rounded-full uppercase">Premium</span>
                  <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Verified</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="font-bold text-lg mb-2">About Us</h3>
              <p className="text-gray-400">Kingston's premier driving academy, dedicated to producing safe, confident drivers. Our expert instructors combine modern techniques with deep knowledge of Jamaica's road code.</p>
            </div>
          </div>

          {/* Services */}
          <div className="bg-[#1e1e1e] rounded-3xl p-8 border border-white/5">
            <h3 className="font-bold text-xl mb-6">Our Services</h3>
            <div className="grid grid-cols-2 gap-4">
              {['Manual driving lessons', 'Automatic driving lessons', 'Road Code preparation', 'Mock exams', 'Exam coaching'].map(service => (
                <div key={service} className="flex items-center gap-3 bg-[#2a2a2a] p-4 rounded-xl">
                  <CheckCircle className="text-[#0f8a3b]" size={20} />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-[#1e1e1e] rounded-3xl p-8 border border-white/5">
            <h3 className="font-bold text-xl mb-6">Pricing & Packages</h3>
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-500 text-sm border-b border-white/5">
                  <th className="pb-4">Package</th>
                  <th className="pb-4">Details</th>
                  <th className="pb-4">Price</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-white/5">
                  <td className="py-4 font-bold">Starter Pack</td>
                  <td className="py-4">5 Lessons</td>
                  <td className="py-4 text-[#f9c938] font-bold">$15,000 JMD</td>
                </tr>
                <tr>
                  <td className="py-4 font-bold">Full Course</td>
                  <td className="py-4">15 Lessons + Mock Exam</td>
                  <td className="py-4 text-[#f9c938] font-bold">$40,000 JMD</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="col-span-4 space-y-6">
          <div className="bg-[#0f8a3b] rounded-3xl p-6 text-white text-center">
            <h3 className="font-bold text-lg mb-4">Ready to drive?</h3>
            <a href="https://wa.me/18765550123" className="w-full bg-[#111] text-white py-3 rounded-xl font-bold hover:bg-black block flex items-center justify-center gap-2 mb-3">
              <MessageSquare size={20} /> WhatsApp Direct
            </a>
            <a href="/contact" className="w-full bg-[#f9c938] text-black py-3 rounded-xl font-bold hover:bg-yellow-300 block text-center">Request a Quote</a>
          </div>

          <div className="bg-[#1e1e1e] rounded-3xl p-6 border border-white/5">
            <h3 className="font-bold mb-4 flex items-center gap-2"><Clock size={20} /> Availability</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Morning, Afternoon, Evening, Weekends</p>
            </div>
          </div>

          <div className="bg-[#1e1e1e] rounded-3xl p-6 border border-white/5">
            <h3 className="font-bold mb-4 flex items-center gap-2"><Star size={20} /> Student Reviews</h3>
            <div className="bg-[#2a2a2a] p-4 rounded-xl mb-4 text-sm">
              <p className="text-[#f9c938] text-xs mb-2">★★★★★</p>
              <p className="text-gray-400 italic">"Best school in Kingston! Passed my exam on the first try."</p>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
