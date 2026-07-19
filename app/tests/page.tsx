import React from 'react';
import Navbar from '@/components/Navbar';

export default function TestsPage() {
  const tests = [
    { title: "Road Signs", desc: "Test your knowledge of Jamaican road signs." },
    { title: "Road Rules", desc: "Common traffic regulations in Jamaica." },
    { title: "Defensive Driving", desc: "Stay safe on the road." },
    { title: "Hazard Perception", desc: "Spot hazards before they happen." },
    { title: "Final Exam (75%)", desc: "The ultimate challenge to get certified." },
  ];

  return (
    <div className="min-h-screen bg-[#111111] text-white font-sans">
      <Navbar />
      <main className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-extrabold mb-8 text-[#f9c938]">Free Practice Test – Train before the exam</h1>
        
        <div className="prose prose-invert mb-12 text-gray-300">
          <p>Before taking the Jamaican written driving permit exam, it is essential to start with the official manual <strong>The Art of Driving</strong>. This guide collects all the traffic rules, signs, best practices, and obligations to know for driving in Jamaica. Take the time to study it: it is your foundation for passing the theory test.</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">The written exam has two parts:</h2>
          <ul className="list-disc pl-5 mb-4">
            <li>Recognition of signs and signals,</li>
            <li>Understanding of road rules.</li>
          </ul>
          
          <p>Since Jamaica applies over a hundred rules, thorough preparation is essential. Questions are pulled at random on the day of the exam, which makes regular review even more important.</p>
          
          <p className="mt-4">Our free practice tests allow you to train under the same conditions as the learner&rsquo;s permit and full driver&rsquo;s license exam. They are accessible to everyone: new drivers, people wishing to review the rules, or students taking defensive driving courses.</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">How to prepare properly?</h2>
          <ul className="list-decimal pl-5 mb-4">
            <li>Repeat the tests as often as necessary.</li>
            <li>Analyze your errors.</li>
            <li>Review frequently asked questions.</li>
            <li>Complete your learning with the manual The Art of Driving.</li>
          </ul>
          
          <p>These tests do not replace the official exam, but they group together the most common questions and essential notions that every driver must know. To pass our tests, you must obtain at least 90% correct answers. At the end of each session, you can view your results and restart immediately.</p>
          <p className="mt-4 font-semibold italic">Train at your own pace, from your phone, tablet, or computer.</p>
        </div>

        <h2 className="text-3xl font-bold mb-6">Full access to tests and the guide</h2>
        <div className="bg-[#1e1e1e] p-8 rounded-3xl border border-white/5 mb-12">
            <p className="mb-6">You can obtain our ebook, our 6 interactive practice tests, or our full pack. The guide is available in major bookstores, pharmacies, and authorized driving schools on the island.</p>
            <a href="/buy-ebook-guide" className="bg-[#f9c938] text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition-colors inline-block">Buy the full guide</a>
        </div>

        <h2 className="text-2xl font-bold mb-6">Practice now</h2>
        <div className="grid gap-4">
          {tests.map(test => (
            <div key={test.title} className="bg-[#1e1e1e] p-6 rounded-2xl flex justify-between items-center border border-white/5">
              <div>
                <h3 className="font-bold text-lg">{test.title}</h3>
                <p className="text-gray-400 text-sm">{test.desc}</p>
              </div>
              <a href={`/test-run?type=${test.title.toLowerCase().replace(' ', '-')}`} className="bg-[#0f8a3b] text-white px-6 py-2 rounded-xl font-bold hover:bg-[#0b5c29]">Start Test</a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
