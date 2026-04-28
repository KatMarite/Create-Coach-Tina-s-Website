"use client";

import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { EmpowerU } from '../components/EmpowerU';

export default function EmpowerUPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <EmpowerU />
      </main>
      <Footer />
    </div>
  );
}
