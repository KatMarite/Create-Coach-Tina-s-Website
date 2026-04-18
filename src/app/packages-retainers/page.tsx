"use client";

import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Packages } from '../components/Packages';

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20 flex flex-col">
        <Packages />
      </main>
      <Footer />
    </div>
  );
}
