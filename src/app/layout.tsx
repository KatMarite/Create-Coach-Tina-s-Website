import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '../styles/index.css';

export const metadata: Metadata = {
  title: 'Coach Tina',
  description: 'Transformational leadership coaching + practical tools for clarity, confidence & wholeness.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
