"use client";

import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Speaking } from '../components/Speaking';

export default function SpeakingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Speaking />
      </main>
      <Footer />
    </div>
  );
}
