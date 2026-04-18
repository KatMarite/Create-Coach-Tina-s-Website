"use client";

import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { FreeTools } from '../components/FreeTools';

export default function FreeToolsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20 flex flex-col">
        <FreeTools />
      </main>
      <Footer />
    </div>
  );
}
