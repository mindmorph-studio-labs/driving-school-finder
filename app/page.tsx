'use client';
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';
import { schoolsData } from '@/lib/data';
import { useXP } from '@/components/XPProvider';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Leaderboard from '@/components/Leaderboard';


export default function Home() {
  const [availability, setAvailability] = useState<string | null>(null);
  const [premiumOnly, setPremiumOnly] = useState(false);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [cityFilter, setCityFilter] = useState('');
  const [maxPrice, setMaxPrice] = useState(15000);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { xp, resetXP } = useXP();

  const faqItems = [
    { q: "How do I find a driving school?", a: "Use our search filters by city or parish to find schools matching your needs." },
    { q: "Can I read reviews?", a: "Yes, you can read verified reviews from other students to make an informed choice." },
    { q: "Is this service free for students?", a: "Yes, our service is completely free for students looking for driving schools." },
    { q: "How does the contest work?", a: "Earn XP by passing tests, leaving reviews, and engaging with partners. Reach 3000 XP to participate in our quarterly contest." },
  ];

  const filteredSchools = schoolsData.filter(school => {
    if (availability && school.availability !== availability) return false;
    if (premiumOnly && !school.premium) return false;
    if (verifiedOnly && !school.verified) return false;
    if (cityFilter && !school.city.toLowerCase().includes(cityFilter.toLowerCase())) return false;
    if (school.price > maxPrice) return false;
    return true;
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is handled by cityFilter state updating filteredSchools
  };
  return (
    <div className="min-h-screen bg-[#111111] text-white font-sans overflow-hidden flex flex-col">
      <Navbar />

      {/* Main Bento Grid */}
      <main className="flex-1 p-6 grid grid-cols-12 gap-4">
        
        {/* HERO & SEARCH SECTION */}
        <section className="col-span-8 bg-[#0f8a3b] rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
          <h1 className="text-5xl font-extrabold leading-tight mb-6">Your License is Just <br/><span className="text-[#f9c938]">One Search Away.</span></h1>
          <form onSubmit={handleSearch} className="bg-white rounded-2xl p-2 flex gap-2 items-center shadow-2xl w-full">
            <div className="flex-1 flex flex-col px-4 border-r border-gray-200">
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">City or Parish</span>
              <input 
                type="text" 
                name="city" 
                placeholder="Kingston, Montego Bay..." 
                value={cityFilter}
                onChange={(e) => setCityFilter(e.target.value)}
                className="text-black focus:outline-none font-medium p-2"/>
            </div>
            <div className="flex-1 flex flex-col px-4">
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Category</span>
              <select name="category" className="text-black focus:outline-none font-medium bg-transparent p-2">
                <option value="manual">Manual Driving</option>
                <option value="automatic">Automatic</option>
                <option value="roadcode">Road Code Only</option>
              </select>
            </div>
            <button type="submit" className="bg-[#111] text-white px-8 py-3 rounded-xl font-bold hover:bg-black">Find Schools</button>
          </form>
        </section>

        {/* FILTERS BOX */}
        <aside className="col-span-4 bg-[#1e1e1e] rounded-3xl border border-white/5 p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg">Smart Filters</h3>
            <button onClick={() => {
              setAvailability(null);
              setPremiumOnly(false);
              setVerifiedOnly(false);
              setCityFilter('');
              setMaxPrice(15000);
            }} className="text-xs text-[#f9c938] underline cursor-pointer uppercase font-bold tracking-tighter">Clear All</button>
          </div>
          <div className="space-y-5">
            <div>
              <label className="text-[10px] uppercase text-gray-500 font-bold block mb-2">Availability</label>
              <div className="flex flex-wrap gap-2">
                {['Morning', 'Afternoon', 'Weekend'].map(av => (
                  <span 
                    key={av} 
                    onClick={() => setAvailability(availability === av ? null : av)}
                    className={`${availability === av ? 'bg-[#0f8a3b]' : 'bg-white/5'} text-[11px] px-3 py-1 rounded-full border border-white/10 cursor-pointer`}>
                      {av}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <label className="text-[10px] uppercase text-gray-500 font-bold block mb-2">Price Range</label>
              <input 
                  type="range" 
                  min="1000" 
                  max="15000" 
                  value={maxPrice} 
                  onChange={(e) => setMaxPrice(parseInt(e.target.value))} 
                  className="w-full accent-[#f9c938]"/>
              <div className="flex justify-between text-[11px] mt-1 text-gray-400">
                <span>$1,000 JMD</span>
                <span>${new Intl.NumberFormat('en-US').format(maxPrice)} JMD</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Premium Partners Only</span>
                <div onClick={() => setPremiumOnly(!premiumOnly)} className={`${premiumOnly ? 'bg-[#0f8a3b]' : 'bg-gray-600'} w-8 h-4 rounded-full relative cursor-pointer`}>
                   <div className={`absolute ${premiumOnly ? 'right-1' : 'left-1'} top-1 w-2 h-2 bg-white rounded-full`}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Verified Reviews Only</span>
                <div onClick={() => setVerifiedOnly(!verifiedOnly)} className={`${verifiedOnly ? 'bg-[#0f8a3b]' : 'bg-gray-600'} w-8 h-4 rounded-full relative cursor-pointer`}>
                   <div className={`absolute ${verifiedOnly ? 'right-1' : 'left-1'} top-1 w-2 h-2 bg-white rounded-full`}></div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* PREMIUM SCHOOLS LISTING */}
        <section className="col-span-8 bg-[#1e1e1e] rounded-3xl border border-white/5 p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-xl uppercase tracking-tight">Premium <span className="text-[#f9c938]">Partners</span></h3>
            <a href="/schools" className="text-xs text-gray-400 hover:text-white uppercase">View All 42 →</a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {filteredSchools.map(school => (
              <div key={school.id} className="bg-[#2a2a2a] rounded-2xl p-4 flex flex-col border border-white/5 relative overflow-hidden">
                <div className="absolute top-3 right-3 flex gap-2">
                  {school.premium && <span className="bg-[#f9c938] text-black text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">Premium</span>}
                  {school.verified && <span className="bg-emerald-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">Verified</span>}
                </div>
                <div className="h-24 w-full bg-[#111] rounded-xl mb-3 border border-white/5 flex items-center justify-center text-xs font-bold text-gray-400 italic">SCHOOL PHOTO</div>
                <h4 className="font-bold text-sm">{school.name}</h4>
                <p className="text-[10px] text-gray-400 mb-4">{school.city} • {school.category}</p>
                <div className="mt-auto flex justify-between items-center">
                  <div className="text-[#f9c938] text-[10px]">★★★★★ <span className="text-white font-bold">{school.rating}</span></div>
                  <a href={`/school/${school.id}`} className="bg-white text-black text-[10px] font-bold px-3 py-1.5 rounded-lg">View Profile</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* GAMIFICATION & ROAD CODE */}
        <div className="col-span-4 space-y-4">
          <div className="bg-gradient-to-br from-[#f9c938] to-yellow-600 rounded-3xl p-5 text-black">
            <h3 className="font-black text-lg uppercase leading-none mb-1">Earn Rewards & Win</h3>
            <p className="text-[10px] font-medium mb-4 opacity-80">Pass tests to earn badges. Next contest: Sept 30th!</p>
            <a href="/rewards" className="flex items-center gap-3 bg-black/10 p-3 rounded-2xl mb-4 hover:bg-black/20">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg text-lg">🏆</div>
              <div>
                <div className="text-[8px] font-bold uppercase tracking-widest opacity-60">Status</div>
                <div className="font-black text-xs">ROAD CODE MASTER</div>
              </div>
            </a>
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold uppercase">XP Progress</span>
              <button onClick={resetXP} className="text-[8px] underline hover:text-white transition-colors">Reset</button>
              <span className="text-[10px] font-bold">{xp} / 3000</span>
            </div>
            <div className="w-full bg-black/20 h-1.5 rounded-full overflow-hidden mt-1">
              <div className="bg-black h-full" style={{ width: `${Math.min((xp / 3000) * 100, 100)}%` }}></div>
            </div>
          </div>
          
          <Leaderboard teaser={true} />
        </div>

        {/* DIRECTORY FEATURES */}
        <section className="col-span-12 grid grid-cols-4 gap-4 mt-2">
          {[
            { title: "Smart Filters", icon: "🔍" },
            { title: "Verified Reviews", icon: "⭐" },
            { title: "Instant Quotes", icon: "📄" },
            { title: "WhatsApp Direct", icon: "💬" },
          ].map((feature, i) => (
            <div key={i} className="bg-[#1e1e1e] p-6 rounded-3xl border border-white/5 flex flex-col items-center gap-3">
              <span className="text-4xl">{feature.icon}</span>
              <h3 className="font-bold text-sm uppercase text-gray-300">{feature.title}</h3>
            </div>
          ))}
        </section>

        {/* WHY CHOOSE US */}
        <section className="col-span-12 bg-[#1e1e1e] rounded-3xl border border-white/5 p-8 mt-2">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#f9c938]">Why Driving Schools Choose Us</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            {["Local Visibility", "Qualified Leads", "Integrated Quotes", "Statistics"].map(item => (
              <div key={item} className="flex items-center gap-3 justify-center">
                <span className="bg-[#0f8a3b] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">✔</span> {item}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="/partner-pricing" className="bg-[#0f8a3b] text-white px-8 py-3 rounded-full font-bold hover:bg-[#0b5c29]">List My Driving School</a>
          </div>
        </section>
        {/* FAQ SECTION */}
        <section className="col-span-12 bg-[#1e1e1e] rounded-3xl border border-white/5 p-8 mt-2">
          <h2 className="text-2xl font-bold mb-8 text-center text-[#f9c938]">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-[#2a2a2a] rounded-2xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-4 flex justify-between items-center text-left font-bold"
                >
                  {item.q}
                  {openFaq === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {openFaq === i && <div className="p-4 text-gray-400 text-sm border-t border-white/5">{item.a}</div>}
              </div>
            ))}
          </div>
        </section>
      </main>

    </div>
  );
}
