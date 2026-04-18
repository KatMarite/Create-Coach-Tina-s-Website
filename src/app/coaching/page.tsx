"use client";

import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Coaching } from '../components/Coaching';

export default function CoachingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20">
        <Coaching />
      </main>
      <Footer />
    </div>
  );
}
