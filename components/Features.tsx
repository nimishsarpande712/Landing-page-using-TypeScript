"use client";

import { useEffect, useRef } from 'react';
import { MessageSquare, GitBranch, Users } from 'lucide-react';

export default function Features() {
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
        {/* GitHub Sync Feature */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-2xl font-medium text-gray-400 mb-4">
              Live-sync with your GitHub issues, automatic branch management and more.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center animate-on-scroll">
            <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50 backdrop-blur-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <span className="text-sm font-semibold">D</span>
                </div>
                <span className="text-gray-300">Dimension</span>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-400 text-sm">Just wanted to try fleet out, but getting an error even though</p>
                
                <div className="bg-slate-900/50 rounded-lg p-3 text-sm font-mono">
                  <div className="text-orange-400 mb-1">⚠️ Generated Fleet Config</div>
                  <div className="text-green-400 mb-1">✓ Fleet is ready!</div>
                  <div className="text-red-400">error: failed to run `rustc` to learn about target-specific information</div>
                </div>

                <div>
                  <p className="text-gray-500 text-sm font-medium mb-2">To Reproduce</p>
                  <code className="text-gray-300 text-sm bg-slate-900/30 px-2 py-1 rounded">fleet build</code>
                </div>

                <div>
                  <p className="text-gray-500 text-sm font-medium mb-1">Info:</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• OS: macOS 10.15</li>
                    <li>• rustc: rustc 1.64.0-nightly (4d6d601c8 2022-07-26)</li>
                  </ul>
                </div>

                <div className="flex items-center space-x-3 pt-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500"></div>
                  <span className="text-sm text-gray-400">Tejas R • now</span>
                </div>
                <p className="text-pink-400 text-sm bg-pink-500/10 px-3 py-1 rounded-lg inline-block">
                  Synchronized and seamless!
                </p>
              </div>
            </div>

            <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50 backdrop-blur-sm">
              <div className="flex items-center space-x-3 mb-4">
                <GitBranch className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">GitHub</span>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-400 text-sm">Just wanted to try fleet out, but getting an error even though</p>
                
                <div className="bg-slate-900/50 rounded-lg p-3 text-sm font-mono">
                  <div className="text-orange-400 mb-1">⚠️ Generated Fleet Config</div>
                  <div className="text-green-400 mb-1">✓ Fleet is ready!</div>
                  <div className="text-red-400">error: failed to run `rustc` to learn about target-specific information</div>
                </div>

                <div>
                  <p className="text-gray-500 text-sm font-medium mb-2">To Reproduce</p>
                  <code className="text-gray-300 text-sm bg-slate-900/30 px-2 py-1 rounded">fleet build</code>
                </div>

                <div>
                  <p className="text-gray-500 text-sm font-medium mb-1">Info:</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• OS: macOS 10.15</li>
                    <li>• rustc: rustc 1.64.0-nightly (4d6d601c8 2022-07-26)</li>
                  </ul>
                </div>

                <div className="flex items-center space-x-3 pt-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500"></div>
                  <span className="text-sm text-gray-400">suptejas • commented now</span>
                </div>
                <p className="text-pink-400 text-sm bg-pink-500/10 px-3 py-1 rounded-lg inline-block">
                  Synchronized and seamless!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Comment Input */}
        <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50 backdrop-blur-sm mb-20 max-w-4xl mx-auto animate-on-scroll">
          <div className="flex space-x-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex-shrink-0"></div>
            <div className="flex-1">
              <input
                type="text"
                placeholder="Describe your comment..."
                className="w-full bg-transparent text-gray-300 placeholder-gray-500 border-none outline-none text-sm"
              />
            </div>
            <button className="px-4 py-2 bg-slate-700/50 text-gray-300 rounded-lg text-sm border border-slate-600 hover:bg-slate-600/50 transition-colors">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}