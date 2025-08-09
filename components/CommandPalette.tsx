"use client";

import { useEffect, useRef } from 'react';
import { Search, Globe, Settings, Cloud, MessageSquare, Users, Inbox } from 'lucide-react';

export default function CommandPalette() {
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Command Palette */}
          <div className="animate-on-scroll">
            <div className="text-center lg:text-left mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mb-4 mx-auto lg:mx-0 flex items-center justify-center">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Global search</h2>
              <p className="text-gray-400 text-lg">
                Access the command palette by pressing CMD+K and type your query for results.
              </p>
            </div>

            {/* Command Palette UI */}
            <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 backdrop-blur-sm overflow-hidden">
              {/* Top bar */}
              <div className="flex items-center space-x-4 p-4 border-b border-slate-700/50">
                <Inbox className="w-5 h-5 text-gray-400" />
                <MessageSquare className="w-5 h-5 text-gray-400" />
                <Users className="w-5 h-5 text-gray-400" />
                <Cloud className="w-5 h-5 text-gray-400" />
                <Settings className="w-5 h-5 text-gray-400" />
              </div>

              {/* Navigation */}
              <div className="p-4 space-y-2">
                <div className="text-gray-300 font-medium text-sm">Home</div>
                <div className="text-gray-500 text-sm">What do you need?</div>
                
                <div className="pt-4 space-y-1">
                  <div className="text-gray-400 text-sm">Inbox</div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                      <span className="text-gray-300">Clear inbox</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                      <span className="text-gray-300">Mark all as read</span>
                    </div>
                    <span className="text-gray-500 text-xs">⌘ M</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                      <span className="text-gray-300">Mark all as unread</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 space-y-1">
                  <div className="text-gray-400 text-sm">General</div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <Search className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-300">Navigation</span>
                    </div>
                    <span className="text-gray-500 text-xs">⌘ P</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-4 h-4 text-gray-400 flex items-center justify-center">
                      <span className="text-xs">✨</span>
                    </div>
                    <span className="text-gray-300">Change status</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Network visualization */}
          <div className="animate-on-scroll">
            <div className="text-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl mb-4 mx-auto flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Global network</h2>
              <p className="text-gray-400 text-lg">
                An instant in-platform experience - powered by our global edge.
              </p>
            </div>

            {/* Network visualization */}
            <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-sm h-96 relative overflow-hidden">
              {/* Central node */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
              </div>

              {/* Orbital lines */}
              <div className="absolute inset-4">
                <div className="w-full h-full border border-slate-700/30 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-8 w-auto h-auto border border-slate-600/30 rounded-full animate-spin-reverse-slow"></div>
                <div className="absolute inset-16 w-auto h-auto border border-slate-500/30 rounded-full animate-spin-slow"></div>
              </div>

              {/* Floating nodes */}
              <div className="absolute top-8 left-12 w-8 h-8 bg-slate-600 rounded-full"></div>
              <div className="absolute top-16 right-16 w-6 h-6 bg-blue-500/50 rounded-full"></div>
              <div className="absolute bottom-12 left-20 w-10 h-10 bg-purple-500/30 rounded-full"></div>
              <div className="absolute bottom-20 right-12 w-8 h-8 bg-pink-500/40 rounded-full"></div>
              <div className="absolute top-1/3 left-8 w-6 h-6 bg-green-500/40 rounded-full"></div>
              <div className="absolute top-1/4 right-8 w-8 h-8 bg-orange-500/40 rounded-full"></div>

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full">
                <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="rgba(147, 51, 234, 0.3)" strokeWidth="1" />
                <line x1="50%" y1="50%" x2="80%" y2="30%" stroke="rgba(219, 39, 119, 0.3)" strokeWidth="1" />
                <line x1="50%" y1="50%" x2="25%" y2="75%" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" />
                <line x1="50%" y1="50%" x2="75%" y2="80%" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}