"use client";

import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { AuthenticallyWoman } from '../components/AuthenticallyWoman';

export default function AuthenticallyWomanPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20">
        <AuthenticallyWoman />
      </main>
      <Footer />
    </div>
  );
}
