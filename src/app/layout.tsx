import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '../styles/index.css';

export const metadata: Metadata = {
  title: 'Coach Tina',
  description: 'Transformational leadership coaching + practical tools for clarity, confidence & wholeness.',
};

import { CartProvider } from './context/CartContext';
import { CartDrawer } from './components/CartDrawer';

const IS_COMING_SOON = true;

function ComingSoon() {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden" style={{ backgroundColor: 'var(--charcoal)' }}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-2.jpg" 
          alt="Background overlay" 
          className="w-full h-full object-cover object-center opacity-20 scale-105"
          style={{ filter: 'blur(8px)' }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t" style={{ backgroundImage: 'linear-gradient(to top, var(--charcoal), transparent)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto space-y-10">
        <div className="font-serif text-3xl md:text-5xl font-bold tracking-widest" style={{ color: 'var(--sage-green)' }}>
          ct.
        </div>
        
        <h1 className="text-5xl md:text-7xl font-serif font-medium leading-tight text-white mb-6">
          We are <span className="italic" style={{ color: 'var(--sage-green)' }}>launching soon.</span>
        </h1>
        
        <p className="text-lg md:text-2xl font-light text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Reset. Realign. Rise.<br/>
          <span className="text-base md:text-lg opacity-80 mt-4 block leading-relaxed">
            Transformational leadership coaching + practical tools for clarity, confidence & wholeness.
          </span>
        </p>

        <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md">
          <a
            href="mailto:bookings@coachtina.co.za" 
            className="flex-1 py-4 px-6 rounded-lg text-white transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-xl"
            style={{ backgroundColor: 'var(--sage-green)' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default function RootLayout({ children }: { children: ReactNode }) {
  if (IS_COMING_SOON) {
    return (
      <html lang="en">
        <body className="antialiased">
          <ComingSoon />
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className="antialiased">
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
