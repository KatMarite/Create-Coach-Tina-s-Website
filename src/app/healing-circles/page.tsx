"use client";

import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { HealingCircles } from '../components/HealingCircles';

export default function HealingCirclesPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <HealingCircles />
      </main>
      <Footer />
    </div>
  );
}
