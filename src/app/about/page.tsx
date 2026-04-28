"use client";

import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { About } from '../components/About';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <About />
      </main>
      <Footer />
    </div>
  );
}
