import React from 'react';
import { Calendar, User } from 'lucide-react';
import Image from 'next/image';
import LikeButton from '@/components/LikeButton';

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug.replace(/-/g, ' ');

  return (
    <div className="min-h-screen bg-[#111111] text-white font-sans p-4 md:p-8">
      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Article Hero - Bento Item 1 */}
        <div className="lg:col-span-2 bg-[#1e1e1e] rounded-3xl overflow-hidden border border-white/5">
          <div className="relative h-96 w-full">
            <Image
                src={`https://picsum.photos/seed/${slug}/1200/800`}
                alt={title}
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
            />
          </div>
          <div className="p-8">
            <div className="flex justify-between items-start">
              <h1 className="text-4xl font-extrabold mb-4 capitalize text-[#f9c938]">{title}</h1>
              <LikeButton slug={slug} />
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
                <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full"><User size={16} /> Admin</span>
                <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full"><Calendar size={16} /> July 18, 2026</span>
            </div>
          </div>
        </div>

        {/* Sidebar Info - Bento Item 2 */}
        <aside className="lg:col-span-1 space-y-8">
            <div className="bg-[#1e1e1e] rounded-3xl p-8 border border-white/5">
                <h3 className="font-bold text-lg mb-4 text-[#f9c938]">Quick Links</h3>
                <a href="/blog" className="block text-gray-400 hover:text-white mb-2 transition-colors">← Back to Blog</a>
                <a href="/contact" className="block text-gray-400 hover:text-white transition-colors">Contact Support</a>
            </div>
            <div className="bg-[#0b5c29] rounded-3xl p-8">
                <h3 className="font-bold text-xl mb-4">Need a Driving School?</h3>
                <a href="/" className="inline-block bg-white text-[#0b5c29] px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">Find One Now</a>
            </div>
        </aside>

        {/* Content - Bento Item 3 */}
        <article className="lg:col-span-3 bg-[#1e1e1e] rounded-3xl p-8 md:p-12 border border-white/5 prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8 border-l-4 border-[#f9c938] pl-6">
            Welcome to our deep dive into <strong className="text-[#f9c938] capitalize">{title}</strong>. 
            Navigating Jamaican roads requires skill, patience, and knowledge of the rules.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 items-center my-12">
              <div className="relative h-64 w-full rounded-2xl overflow-hidden">
                <Image
                    src={`https://picsum.photos/seed/${slug}-body/1200/600`}
                    alt="Contextual image"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-[#f9c938]">Key Takeaways</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-400">
                    <li>Understanding the road code is mandatory.</li>
                    <li>Practice makes perfect with mock exams.</li>
                    <li>Choose a certified school for structured learning.</li>
                </ul>
              </div>
          </div>
        </article>
      </main>
    </div>
  );
}
