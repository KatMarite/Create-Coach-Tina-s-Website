"use client";

import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}
