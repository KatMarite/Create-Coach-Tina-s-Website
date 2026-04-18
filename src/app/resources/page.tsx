"use client";

import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Resources } from '../components/Resources';

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20 flex flex-col">
        <Resources />
      </main>
      <Footer />
    </div>
  );
}
