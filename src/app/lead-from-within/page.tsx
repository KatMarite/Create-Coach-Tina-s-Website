"use client";

import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { LeadFromWithin } from '../components/LeadFromWithin';

export default function LeadFromWithinPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20 flex flex-col">
        <LeadFromWithin />
      </main>
      <Footer />
    </div>
  );
}
