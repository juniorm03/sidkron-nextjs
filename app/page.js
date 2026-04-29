'use client';

import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import Program from '@/components/sections/Program';
import Schedule from '@/components/sections/Schedule';

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-dark text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      <main>
        <Hero />
        <Program />
        <Problem />
        <Schedule />
      </main>
    </div>
  );
}