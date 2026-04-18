import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '../styles/index.css';

export const metadata: Metadata = {
  title: 'Coach Tina',
  description: 'Transformational leadership coaching + practical tools for clarity, confidence & wholeness.',
};

import { CartProvider } from './context/CartContext';
import { CartDrawer } from './components/CartDrawer';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
