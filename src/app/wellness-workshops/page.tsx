"use client";

import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { WellnessWorkshops } from '../components/WellnessWorkshops';

export default function WellnessWorkshopsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20 flex flex-col">
        <WellnessWorkshops />
      </main>
      <Footer />
    </div>
  );
}
