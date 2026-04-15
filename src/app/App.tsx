"use client";

import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
