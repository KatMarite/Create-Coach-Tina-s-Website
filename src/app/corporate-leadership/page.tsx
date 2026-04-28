"use client";

import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { CorporateLeadership } from '../components/CorporateLeadership';

export default function CorporateLeadershipPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <CorporateLeadership />
      </main>
      <Footer />
    </div>
  );
}
