import React from 'react';
import { CheckCircle, Zap, TrendingUp, Users, MapPin } from 'lucide-react';

export default function PartnerPricingPage() {
  const benefits = [
    { title: 'Local Visibility', icon: <MapPin />, desc: 'Appear at the top of searches in your parish.' },
    { title: 'Qualified Leads', icon: <Users />, desc: 'Receive inquiries from motivated students.' },
    { title: 'Integrated Quotes', icon: <Zap />, desc: 'Manage price requests directly on your profile.' },
    { title: 'Performance Stats', icon: <TrendingUp />, desc: 'Track your growth and reach.' },
  ];

  return (
    <div className="min-h-screen bg-[#111111] text-white font-sans">
      <main className="max-w-7xl mx-auto p-8">
        <header className="text-center mb-16">
          <h1 className="text-6xl font-extrabold mb-6 text-[#f9c938]">Grow Your Driving School</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Join Jamaica's premier directory and start getting more students today.</p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((b) => (
            <div key={b.title} className="bg-[#1e1e1e] p-8 rounded-3xl border border-white/5">
              <div className="text-[#f9c938] mb-4">{b.icon}</div>
              <h3 className="font-bold text-lg mb-2">{b.title}</h3>
              <p className="text-sm text-gray-400">{b.desc}</p>
            </div>
          ))}
        </section>

        <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">Choose Your Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { 
                        title: 'Basic Listing', 
                        price: 'Free',
                        desc: 'Perfect for small driving schools wanting basic visibility.',
                        items: ['1 photo or logo', 'Short description', 'Contact information', 'Appears in search results', 'WhatsApp Direct button'] 
                    },
                    { 
                        title: 'Standard Partner', 
                        price: 'JMD 2,500/mo',
                        desc: 'For schools wanting control over their listing and better visibility.',
                        items: ['Full Partner Dashboard', 'Manage school profile', 'Manage photos (up to 5)', 'Manage opening hours', 'Manage services & pricing', 'Manage offers', 'Basic statistics', 'Priority placement'] 
                    },
                    { 
                        title: 'Premium Partner', 
                        price: 'JMD 6,000/mo',
                        desc: 'For schools wanting maximum visibility, leads, and full analytics.',
                        items: ['Everything in Standard', 'Unlimited photos', 'Lead generation (quote requests)', 'Detailed statistics', 'Review management', 'Highlighted placement', 'Featured Partner ribbon', 'Priority support'] 
                    }
                ].map(plan => (
                    <div key={plan.title} className="bg-[#1e1e1e] p-8 rounded-3xl border border-white/5 flex flex-col">
                        <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
                        <p className="text-3xl font-extrabold mb-2 text-[#f9c938]">{plan.price}</p>
                        <p className="text-gray-400 mb-6 text-sm">{plan.desc}</p>
                        <ul className="space-y-4 mb-8 flex-grow">
                            {plan.items.map(item => (
                                <li key={item} className="flex items-center gap-2 text-sm"><CheckCircle className="text-[#0b5c29]" size={18} /> {item}</li>
                            ))}
                        </ul>
                        <a href="/contact" className="w-full text-center bg-white/10 hover:bg-[#0b5c29] py-3 rounded-xl font-bold transition-colors">Select Plan</a>
                    </div>
                ))}
            </div>
        </section>

        <section className="bg-[#0f8a3b] rounded-3xl p-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8 opacity-90">List your driving school and connect with thousands of local students.</p>
          <a href="/contact" className="bg-[#111] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-black">List My Driving School</a>
        </section>
      </main>
    </div>
  );
}
