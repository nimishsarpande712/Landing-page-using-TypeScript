import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CommandPalette from '@/components/CommandPalette';
import Collaboration from '@/components/Collaboration';
import Integrations from '@/components/Integrations';
import Roadmaps from '@/components/Roadmaps';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <div className="relative">
        {/* Background dot pattern */}
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:24px_24px] pointer-events-none" />
        
        <Header />
        <Hero />
        <Features />
        <CommandPalette />
        <Collaboration />
        <Integrations />
        <Roadmaps />
      </div>
    </main>
  );
}