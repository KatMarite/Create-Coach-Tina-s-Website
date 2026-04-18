"use client";

import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Testimonials } from '../components/Testimonials';

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20 flex flex-col">
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
