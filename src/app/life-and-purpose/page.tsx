"use client";

import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { LifeAndPurpose } from '../components/LifeAndPurpose';

export default function LifeAndPurposePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <LifeAndPurpose />
      </main>
      <Footer />
    </div>
  );
}
