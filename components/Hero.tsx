"use client";

import { useState } from 'react';

export default function Hero() {
  const [email, setEmail] = useState('');

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto text-center">
        {/* Announcement */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 mb-8 animate-fade-in">
          <span className="text-sm text-gray-300">Announcing our $1.4M Fundraise</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
          <span className="text-white">Dimension is the new</span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            standard
          </span>{' '}
          <span className="text-white">for </span>
          <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            collaboration
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
          Chat, code, cloud, deployments, and more.
        </p>

        {/* Email Signup */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto animate-fade-in-up animation-delay-400">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address..."
            className="w-full sm:flex-1 px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
          />
          <button className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 whitespace-nowrap">
            Join waitlist
          </button>
        </div>

        {/* Background Gradient */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl -z-10" />
      </div>
    </section>
  );
}