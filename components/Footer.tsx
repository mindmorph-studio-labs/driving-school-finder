import React from 'react';

export default function Footer() {
  return (
    <footer className="px-8 py-12 bg-[#111] border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm max-w-7xl mx-auto">
        <div>
          <h4 className="font-bold mb-3">Company</h4>
          <a href="/" className="block text-gray-400 hover:text-white">Home</a>
        </div>
        <div>
          <h4 className="font-bold mb-3">Support</h4>
          <a href="/contact" className="block text-gray-400 hover:text-white">Contact</a>
        </div>
        <div>
          <h4 className="font-bold mb-3">Legal</h4>
          <a href="/legal" className="block text-gray-400 hover:text-white">Legal</a>
          <a href="/terms" className="block text-gray-400 hover:text-white">Terms of Service</a>
        </div>
        <div>
          <h4 className="font-bold mb-3">Resources</h4>
          <a href="/blog" className="block text-gray-400 hover:text-white">Blog</a>
        </div>
      </div>
      <div className="text-center text-xs text-gray-600 mt-12 border-t border-white/10 pt-8">
        © 2026 Jamaica Driving School Finder. Built for the Road.
      </div>
    </footer>
  );
}
