"use client";

import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { TrainingFacilitation } from '../components/TrainingFacilitation';

export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20">
        <TrainingFacilitation />
      </main>
      <Footer />
    </div>
  );
}
