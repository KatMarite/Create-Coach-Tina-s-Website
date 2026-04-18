"use client";

import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Podcast } from '../components/Podcast';

export default function PodcastPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20">
        <Podcast />
      </main>
      <Footer />
    </div>
  );
}
