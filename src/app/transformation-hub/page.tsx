"use client";

import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { TransformationHub } from '../components/TransformationHub';

export default function TransformationHubPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <TransformationHub />
      </main>
      <Footer />
    </div>
  );
}
