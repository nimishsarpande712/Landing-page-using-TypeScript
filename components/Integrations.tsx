"use client";

import { useEffect, useRef } from 'react';

export default function Integrations() {
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
        {/* Notification Card */}
        <div className="max-w-2xl mx-auto mb-16 animate-on-scroll">
          <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50 backdrop-blur-sm">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex-shrink-0 flex items-center justify-center">
                <span className="text-white text-sm font-bold">T</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-sm font-medium text-white">Tejas</span>
                  <span className="text-xs text-gray-500">1:14 PM</span>
                </div>
                <p className="text-sm text-gray-300 mb-3">
                  Our Command K menu doesn't trigger when I'm focused on a text field.
                </p>
                
                <button className="bg-slate-700/50 hover:bg-slate-600/50 transition-colors text-gray-300 px-3 py-1.5 rounded-lg text-xs flex items-center space-x-2 border border-slate-600">
                  <span>🔗</span>
                  <span>Create issue on Linear</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tool Integration Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {/* Meet Card */}
          <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50 backdrop-blur-sm animate-on-scroll">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">M</span>
              </div>
              <span className="text-white font-medium">Meet</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Start a new meeting on Google Meet - all participants will receive an invite.
            </p>
            <div className="mt-4">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">Z</span>
                </div>
                <span className="text-white font-medium text-sm">Zoom</span>
              </div>
              <p className="text-gray-400 text-xs ml-9">
                Start a new meeting on Zoom - all participants will receive an invite.
              </p>
            </div>
          </div>

          {/* Linear Card */}
          <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50 backdrop-blur-sm animate-on-scroll">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-purple-400 text-sm">🔗</span>
              <span className="text-white font-medium">Linear</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Follow up not highlighted in the block at the 2nd level comment block does...
            </p>
            <div className="space-y-2 text-xs">
              <div className="flex items-center space-x-2">
                <span className="bg-slate-700/50 text-gray-300 px-2 py-1 rounded">iOS-21</span>
                <span className="bg-slate-700/50 text-gray-300 px-2 py-1 rounded">📱 Mobile</span>
                <span className="bg-orange-500/20 text-orange-300 px-2 py-1 rounded">🎨 Art</span>
                <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded">⏳ In Progress</span>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-700/50">
              <div className="flex items-center space-x-2">
                <span className="text-gray-500 text-xs">▲</span>
                <span className="text-gray-400 text-xs">Vercel</span>
              </div>
            </div>
          </div>

          {/* Deployment Status Card */}
          <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50 backdrop-blur-sm animate-on-scroll">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <span className="text-white text-sm font-medium">website-1-4f17m213ha8-ogu...</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-400 text-xs">● Ready</span>
                  <span className="text-purple-400 text-xs">🔗 Main</span>
                </div>
              </div>
              
              <div className="text-xs text-gray-400 flex justify-between">
                <span>Production</span>
                <span>31s • p47571 - Initial</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <span className="text-white text-sm font-medium">production-2-v727zkf30f48-...</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-400 text-xs">● Ready</span>
                  <span className="text-purple-400 text-xs">🔗 Main</span>
                </div>
              </div>
              
              <div className="text-xs text-gray-400 flex justify-between">
                <span>Production</span>
                <span>1m • a58221 - Initial</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <span className="text-white text-sm font-medium">website-1-fjhx17K892A-oqu...</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-400 text-xs">● Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}