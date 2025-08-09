"use client";

import { useEffect, useRef } from 'react';
import { Users, MessageSquare, Settings } from 'lucide-react';

export default function Collaboration() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Collaborate */}
          <div className="animate-on-scroll">
            <div className="mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl mb-4 flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Collaborate on everything.</h2>
              <p className="text-gray-400 text-lg">
                From deployments to tasks, work with your team every step of the way.
              </p>
            </div>

            {/* Collaboration Interface */}
            <div className="bg-slate-800/30 rounded-2xl border border-slate-700/50 backdrop-blur-sm overflow-hidden">
              {/* Header */}
              <div className="p-4 border-b border-slate-700/50">
                <div className="text-sm text-gray-300 mb-2">Follow up not highlighted in the block at the 2nd level</div>
                <div className="text-xs text-gray-500 mb-4">The 2nd level comment block does not highlight the follow up button.</div>
                
                {/* Tags */}
                <div className="flex items-center space-x-2 text-xs">
                  <span className="bg-slate-700/50 text-gray-300 px-2 py-1 rounded">iOS-21</span>
                  <span className="bg-slate-700/50 text-gray-300 px-2 py-1 rounded">📱 Mobile</span>
                  <span className="bg-orange-500/20 text-orange-300 px-2 py-1 rounded">🎨 Art</span>
                  <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded">⏳ In Progress</span>
                  <span className="bg-red-500/20 text-red-300 px-2 py-1 rounded">🚨 Urgent</span>
                </div>
              </div>

              {/* Comment */}
              <div className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-medium text-white">Tejas</span>
                      <span className="text-xs text-gray-500">1:16 PM</span>
                    </div>
                    <p className="text-sm text-gray-300 mb-3">
                      Awesome! Make sure it looks as close to the Figma as possible ✨
                    </p>
                    
                    {/* Figma embed */}
                    <div className="bg-slate-900/50 rounded-lg p-3 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-red-500/20 rounded flex items-center justify-center">
                          <span className="text-red-400 text-xs font-bold">F</span>
                        </div>
                        <span className="text-sm text-gray-300">Figma</span>
                      </div>
                      <Settings className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Preview image placeholder */}
                <div className="mt-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg h-32 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl opacity-60"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Tools Integration */}
          <div className="animate-on-scroll">
            <div className="mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mb-4 flex items-center justify-center">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Crafted for your favorite tools</h2>
              <p className="text-gray-400 text-lg">
                Connect your tools - we'll handle the rest. Many integrations, with more to come.
              </p>
            </div>

            {/* Tools Integration Visualization */}
            <div className="bg-slate-800/30 rounded-2xl border border-slate-700/50 backdrop-blur-sm p-8 h-96 relative overflow-hidden">
              {/* Central hub */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded opacity-90"></div>
                </div>
              </div>

              {/* Tool icons positioned around the central hub */}
              <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">S</span>
              </div>
              
              <div className="absolute top-1/2 right-12 transform -translate-y-1/2 w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <span className="text-white text-sm">⚫</span>
              </div>
              
              <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">N</span>
              </div>
              
              <div className="absolute top-1/2 left-12 transform -translate-y-1/2 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">L</span>
              </div>
              
              <div className="absolute top-20 right-20 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">G</span>
              </div>
              
              <div className="absolute bottom-20 right-20 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">F</span>
              </div>
              
              <div className="absolute bottom-20 left-20 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">☁</span>
              </div>
              
              <div className="absolute top-20 left-20 w-10 h-10 bg-slate-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">▲</span>
              </div>

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full">
                <line x1="50%" y1="50%" x2="50%" y2="20%" stroke="rgba(147, 51, 234, 0.4)" strokeWidth="2" className="animate-pulse" />
                <line x1="50%" y1="50%" x2="80%" y2="50%" stroke="rgba(147, 51, 234, 0.4)" strokeWidth="2" className="animate-pulse" />
                <line x1="50%" y1="50%" x2="50%" y2="80%" stroke="rgba(147, 51, 234, 0.4)" strokeWidth="2" className="animate-pulse" />
                <line x1="50%" y1="50%" x2="20%" y2="50%" stroke="rgba(147, 51, 234, 0.4)" strokeWidth="2" className="animate-pulse" />
                <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="rgba(147, 51, 234, 0.3)" strokeWidth="1" />
                <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="rgba(147, 51, 234, 0.3)" strokeWidth="1" />
                <line x1="50%" y1="50%" x2="25%" y2="75%" stroke="rgba(147, 51, 234, 0.3)" strokeWidth="1" />
                <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="rgba(147, 51, 234, 0.3)" strokeWidth="1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}