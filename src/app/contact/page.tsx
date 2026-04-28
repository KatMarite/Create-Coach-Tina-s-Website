"use client";

import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Contact } from '../components/Contact';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
