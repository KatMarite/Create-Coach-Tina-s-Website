'use client';

import { useState, useEffect } from 'react';
import { ShoppingBag, X, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const { items, toggleCart } = useCart();
  const pathname = usePathname();
  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileSection, setExpandedMobileSection] = useState<
    string | null
  >(null);

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    setMobileMenuOpen(false);
    setExpandedMobileSection(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleMobileSection = (section: string) => {
    setExpandedMobileSection((prev) => (prev === section ? null : section));
  };

  const mobileNavSections = [
    { label: 'About Coach Tina', href: '/about', children: null },

    {
      label: 'Work With Me',
      href: null,
      children: [
        { label: '1:1 Coaching', href: '/life-and-purpose' },
        { label: 'Corporate Facilitation', href: '/corporate-leadership' },
        { label: 'Healing Circles', href: '/healing-circles' },
        { label: 'Speaking', href: '/speaking' },
      ],
    },

    {
      label: 'Empower U Academy',
      href: null,
      children: [
        { label: 'Explorers (6–12)', href: '/empower-u/explorers' },
        { label: 'Achievers (13–18)', href: '/empower-u/achievers' },
        { label: 'Parents', href: '/empower-u/parents' },
      ],
    },

    { label: 'Books & Resources', href: '/shop', children: null },
    { label: 'Media & Podcast', href: '/media', children: null },
    { label: 'Contact / Book', href: '/contact', children: null },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 sm:h-24 md:h-28">
            {/* Logo */}
            <a href="/" className="flex items-center -ml-2">
              <img
                src="/images/logo.png"
                alt="Coach Tina"
                className="h-16 sm:h-20 md:h-28 w-auto"
              />
            </a>

            {/* Desktop */}
            <div className="hidden lg:flex items-center gap-8">
              <a
                href="/about"
                className="text-sm font-light"
                style={{ color: 'var(--charcoal)' }}
              >
                About
              </a>

              {/* WORK WITH ME */}
              <div className="relative group">
                <button
                  className="text-sm font-light flex items-center gap-1"
                  style={{ color: 'var(--charcoal)' }}
                >
                  Work With Me
                  <ChevronDown className="w-3 h-3" />
                </button>

                <div className="absolute top-full left-0 pt-2 hidden group-hover:block w-56">
                  <div className="bg-white shadow-lg border rounded-lg py-1">
                    <a
                      className="block px-4 py-2 hover:bg-gray-50"
                      href="/life-and-purpose"
                    >
                      1:1 Coaching
                    </a>
                    <a
                      className="block px-4 py-2 hover:bg-gray-50"
                      href="/corporate-leadership"
                    >
                      Corporate Facilitation
                    </a>
                    <a
                      className="block px-4 py-2 hover:bg-gray-50"
                      href="/healing-circles"
                    >
                      Healing Circles
                    </a>
                    <a
                      className="block px-4 py-2 hover:bg-gray-50"
                      href="/speaking"
                    >
                      Speaking
                    </a>
                  </div>
                </div>
              </div>

              {/* EMP U */}
              <div className="relative group">
                <button
                  className="text-sm font-light flex items-center gap-1"
                  style={{ color: 'var(--charcoal)' }}
                >
                  Empower U
                  <ChevronDown className="w-3 h-3" />
                </button>

                <div className="absolute top-full left-0 pt-2 hidden group-hover:block w-64">
                  <div className="bg-white shadow-lg border rounded-lg py-1">
                    <a
                      className="block px-4 py-2 hover:bg-gray-50"
                      href="/empower-u/explorers"
                    >
                      Explorers (6–12)
                    </a>
                    <a
                      className="block px-4 py-2 hover:bg-gray-50"
                      href="/empower-u/achievers"
                    >
                      Achievers (13–18)
                    </a>
                    <a
                      className="block px-4 py-2 hover:bg-gray-50"
                      href="/empower-u/parents"
                    >
                      Parents
                    </a>
                  </div>
                </div>
              </div>

              <a
                href="/shop"
                className="text-sm font-light"
                style={{ color: 'var(--charcoal)' }}
              >
                Books & Resources
              </a>

              <a
                href="/media"
                className="text-sm font-light"
                style={{ color: 'var(--charcoal)' }}
              >
                Media & Podcast
              </a>

              <a
                href="/contact"
                className="px-6 py-2.5 rounded-lg text-white"
                style={{ backgroundColor: 'var(--sage-green)' }}
              >
                Contact / Book
              </a>

              <button onClick={toggleCart}>
                <ShoppingBag className="w-5 h-5" />
                {cartItemCount > 0 && (
                  <span className="ml-1 text-xs">{cartItemCount}</span>
                )}
              </button>
            </div>

            {/* Mobile button */}
            <div className="lg:hidden flex items-center gap-3">
              <button onClick={toggleCart}>
                <ShoppingBag className="w-5 h-5" />
              </button>

              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? (
                  <X />
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[45]"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[85vw] max-w-sm bg-white z-[50] transform transition-transform ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-5 border-b">
          <span className="font-serif">Menu</span>
        </div>

        <div className="overflow-y-auto h-full">
          {mobileNavSections.map((section) => (
            <div key={section.label} className="border-b">
              {section.children ? (
                <>
                  <button
                    onClick={() => toggleMobileSection(section.label)}
                    className="w-full flex justify-between p-4"
                  >
                    {section.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        expandedMobileSection === section.label
                          ? 'rotate-180'
                          : ''
                      }`}
                    />
                  </button>

                  {expandedMobileSection === section.label && (
                    <div className="bg-gray-50">
                      {section.children.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          className="block px-6 py-3 text-sm"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={section.href!}
                  className="block p-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {section.label}
                </a>
              )}
            </div>
          ))}

          <div className="p-5">
            <a
              href="/contact"
              className="block text-center py-3 rounded-lg text-white"
              style={{ backgroundColor: 'var(--sage-green)' }}
            >
              Contact / Book
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
