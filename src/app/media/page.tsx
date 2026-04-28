"use client";

import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Media } from '../components/Media';

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Media />
      </main>
      <Footer />
    </div>
  );
}
