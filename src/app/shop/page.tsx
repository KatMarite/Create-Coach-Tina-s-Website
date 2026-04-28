"use client";

import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Shop } from '../components/Shop';

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Shop />
      </main>
      <Footer />
    </div>
  );
}
