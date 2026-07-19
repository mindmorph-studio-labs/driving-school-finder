import React from 'react';
import Image from 'next/image';

export default function BlogPage() {
  const posts = [
    { title: 'Road Code Tips', excerpt: 'Essential tips for driving safely in Jamaica...', size: 'md' },
    { title: 'How to Pass Your Exam', excerpt: 'Master the test with these proven strategies...', size: 'lg' },
    { title: 'Jamaica Traffic Rules', excerpt: 'Stay compliant and drive with confidence...', size: 'md' },
  ];

  return (
    <div className="min-h-screen bg-[#111111] text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 border-b border-white/10 pb-8">
            <h1 className="text-5xl font-extrabold text-[#f9c938]">Driving Tips & Advice</h1>
            <p className="text-gray-400 mt-4 text-lg">Essential knowledge for Jamaican roads.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
          {posts.map((post, i) => (
            <div key={post.title} className={`bg-[#1e1e1e] rounded-3xl overflow-hidden border border-white/5 hover:border-[#f9c938]/30 transition-all ${post.size === 'lg' ? 'md:col-span-2 lg:row-span-2' : ''}`}>
              <div className="relative w-full h-64">
                <Image
                  src={`https://picsum.photos/seed/${post.title}/800/600`}
                  alt={post.title}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-[#0b5c29] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Tips</div>
              </div>
              <div className="p-8">
                <h3 className="font-bold text-2xl mb-3 text-[#f9c938]">{post.title}</h3>
                <p className="text-gray-400 mb-6">{post.excerpt}</p>
                <a href={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`} className="inline-block bg-white/5 hover:bg-[#0b5c29] text-white px-6 py-3 rounded-xl font-bold transition-colors">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
