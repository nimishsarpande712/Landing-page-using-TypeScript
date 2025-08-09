"use client";

import { useEffect, useRef } from 'react';

export default function Roadmaps() {
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
      <div className="container mx-auto text-center">
        {/* Bottom Team Chat Interface */}
        <div className="max-w-4xl mx-auto mb-20 animate-on-scroll">
          <div className="bg-slate-800/30 rounded-2xl border border-slate-700/50 backdrop-blur-sm overflow-hidden">
            {/* Chat Header */}
            <div className="p-4 border-b border-slate-700/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-sm opacity-90" />
                  </div>
                  <span className="text-white font-medium">Dimension</span>
                  <span className="text-xs bg-slate-700/50 text-gray-300 px-2 py-1 rounded">1</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-orange-500"></div>
                  <span className="text-white text-sm">Core Team</span>
                </div>
              </div>
            </div>

            {/* Chat Content */}
            <div className="p-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400 text-sm">💬</span>
                  <span className="text-white text-sm">Chat</span>
                </div>
                <button className="text-gray-400 hover:text-white text-lg">+</button>
              </div>

              {/* Team members */}
              <div className="flex items-center justify-between text-sm mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400">👥</span>
                  <span className="text-white">Team</span>
                  <span className="text-gray-500">▼</span>
                </div>
                <span className="text-gray-400">Members - 3</span>
              </div>

              {/* Chat message */}
              <div className="bg-slate-900/30 rounded-lg p-3">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-sm font-medium text-white">Tejas</span>
                      <span className="text-xs text-gray-500">1:14 PM</span>
                    </div>
                    <p className="text-sm text-gray-300">
                      Hey Ari! I wanted to check in with you on the next release and bug list. Do you think we'll have everything completed by Friday?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Roadmaps Section */}
        <div className="animate-on-scroll">
          <div className="w-12 h-12 bg-slate-700/50 rounded-xl mb-6 mx-auto flex items-center justify-center">
            <div className="w-6 h-1 bg-gray-400 rounded"></div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-8">Roadmaps</h2>
        </div>
      </div>
    </section>
  );
}