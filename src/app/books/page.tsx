"use client";

import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { BooksResources } from '../components/BooksResources';

export default function BooksPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20">
        <BooksResources />
      </main>
      <Footer />
    </div>
  );
}
