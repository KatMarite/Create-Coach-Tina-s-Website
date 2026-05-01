"use client";

import { useState, useEffect } from 'react';
import { ShoppingBag, X, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { usePathname } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export function Navigation() {
  const { items, toggleCart } = useCart();
  const pathname = usePathname();
  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);

  const isActive = (path: string) => pathname === path;
  const isDropdownActive = (paths: string[]) => paths.some(p => pathname?.startsWith(p));

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setExpandedMobileSection(null);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleMobileSection = (section: string) => {
    setExpandedMobileSection(prev => prev === section ? null : section);
  };

  const mobileNavSections = [
    {
      label: 'About',
      href: '/about',
      children: null,
    },
    {
      label: 'Transformation Hub',
      href: null,
      children: [
        { label: 'Hub Overview', href: '/transformation-hub' },
        { label: 'Lead From Within Framework', href: '/transformation-hub/lead-from-within' },
        { label: 'Transitions Intensive', href: '/transformation-hub/transitions-intensive' },
        { label: 'High-Functioning Anxiety Reset', href: '/transformation-hub/high-functioning-anxiety' },
        { label: 'Women in Leadership', href: '/transformation-hub/women-in-leadership' },
        { label: 'Workplace Wellness & Resilience', href: '/transformation-hub/workplace-wellness' },
        { label: 'Organisational Change Management', href: '/transformation-hub/organisational-change' },
        { label: 'Emotional Intelligence for Leaders', href: '/transformation-hub/emotional-intelligence' },
      ],
    },
    {
      label: 'Empower U Kids Coaching',
      href: null,
      children: [
        { label: 'Empower U Explorers (Ages 6–12)', href: '/empower-u/explorers' },
        { label: 'Empower U Achievers (Ages 13–18)', href: '/empower-u/achievers' },
        { label: 'Empowering Parents', href: '/empower-u/parents' },
        { label: 'Workshops', href: '/empower-u/workshops' },
        { label: 'Coaching Framework', href: '/empower-u/framework' },
      ],
    },
    {
      label: 'Shop',
      href: '/shop',
      children: null,
    },
    {
      label: 'Media & Podcast',
      href: '/media',
      children: null,
    },
    {
      label: 'Speaking',
      href: '/speaking',
      children: null,
    },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 sm:h-24 md:h-28">
            {/* Logo */}
            <a href="/" className="flex items-center group -ml-2 flex-shrink-0">
              <img 
                src="/images/logo.png" 
                alt="Coach Tina Logo" 
                className="h-16 sm:h-20 md:h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              <a
                href="/about"
                className="relative group"
                aria-current={isActive('/about') ? 'page' : undefined}
              >
                <span className={`text-sm tracking-wide transition-colors hover:opacity-70 ${isActive('/about') ? 'font-semibold' : 'font-light'}`} style={{ color: 'var(--charcoal)' }}>
                  About
                </span>
                <span
                  className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full'}`}
                  style={{ backgroundColor: 'var(--sage-green)' }}
                />
              </a>

              <DropdownMenu>
                <DropdownMenuTrigger className="relative group">
                  <span className={`text-sm tracking-wide transition-colors hover:opacity-70 flex items-center gap-1 ${isDropdownActive(['/transformation-hub', '/corporate-leadership', '/life-and-purpose', '/healing-circles']) ? 'font-semibold' : 'font-light'}`} style={{ color: 'var(--charcoal)' }}>
                    Transformation Hub
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${isDropdownActive(['/transformation-hub', '/corporate-leadership', '/life-and-purpose', '/healing-circles']) ? 'w-full' : 'w-0 group-hover:w-full'}`}
                    style={{ backgroundColor: 'var(--sage-green)' }}
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuItem>
                    <a href="/transformation-hub" className="w-full">Hub Overview</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/transformation-hub/lead-from-within" className="w-full">Lead From Within Framework</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/transformation-hub/transitions-intensive" className="w-full">Transitions Intensive</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/transformation-hub/high-functioning-anxiety" className="w-full">High-Functioning Anxiety Reset</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/transformation-hub/women-in-leadership" className="w-full">Women in Leadership</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/transformation-hub/workplace-wellness" className="w-full">Workplace Wellness & Resilience</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/transformation-hub/organisational-change" className="w-full">Organisational Change Management</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/transformation-hub/emotional-intelligence" className="w-full">Emotional Intelligence for Leaders</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="relative group">
                  <span className={`text-sm tracking-wide transition-colors hover:opacity-70 flex items-center gap-1 ${isDropdownActive(['/empower-u']) ? 'font-semibold' : 'font-light'}`} style={{ color: 'var(--charcoal)' }}>
                    Empower U Kids Coaching
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${isDropdownActive(['/empower-u']) ? 'w-full' : 'w-0 group-hover:w-full'}`}
                    style={{ backgroundColor: 'var(--sage-green)' }}
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64">
                  <DropdownMenuItem>
                    <a href="/empower-u/explorers" className="w-full">Empower U Explorers (Ages 6–12)</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/empower-u/achievers" className="w-full">Empower U Achievers (Ages 13–18)</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/empower-u/parents" className="w-full">Empowering Parents</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/empower-u/workshops" className="w-full">Workshops</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/empower-u/framework" className="w-full">Coaching Framework</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <a
                href="/shop"
                className="relative group"
              >
                <span className={`text-sm tracking-wide transition-colors hover:opacity-70 ${isActive('/shop') ? 'font-semibold' : 'font-light'}`} style={{ color: 'var(--charcoal)' }}>
                  Shop
                </span>
                <span
                  className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${isActive('/shop') ? 'w-full' : 'w-0 group-hover:w-full'}`}
                  style={{ backgroundColor: 'var(--sage-green)' }}
                />
              </a>

              <a
                href="/media"
                className="relative group"
              >
                <span className={`text-sm tracking-wide transition-colors hover:opacity-70 ${isActive('/media') ? 'font-semibold' : 'font-light'}`} style={{ color: 'var(--charcoal)' }}>
                  Media & Podcast
                </span>
                <span
                  className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${isActive('/media') ? 'w-full' : 'w-0 group-hover:w-full'}`}
                  style={{ backgroundColor: 'var(--sage-green)' }}
                />
              </a>

              <a
                href="/speaking"
                className="relative group"
              >
                <span className={`text-sm tracking-wide transition-colors hover:opacity-70 ${isActive('/speaking') ? 'font-semibold' : 'font-light'}`} style={{ color: 'var(--charcoal)' }}>
                  Speaking
                </span>
                <span
                  className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${isActive('/speaking') ? 'w-full' : 'w-0 group-hover:w-full'}`}
                  style={{ backgroundColor: 'var(--sage-green)' }}
                />
              </a>

              <a
                href="/contact"
                className="px-6 py-2.5 rounded-lg transition-all hover:shadow-lg hover:scale-105 block text-center"
                style={{ backgroundColor: 'var(--sage-green)', color: 'white' }}
              >
                Contact / Book
              </a>

              <button 
                onClick={toggleCart}
                className="relative p-2 transition-colors hover:opacity-70"
                style={{ color: 'var(--charcoal)' }}
                aria-label="View cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartItemCount > 0 && (
                  <span 
                    className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm"
                    style={{ backgroundColor: 'var(--terracotta)' }}
                  >
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <button 
                onClick={toggleCart}
                className="relative p-2"
                style={{ color: 'var(--charcoal)' }}
                aria-label="View cart"
              >
                <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
                {cartItemCount > 0 && (
                  <span 
                    className="absolute top-0.5 right-0.5 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm"
                    style={{ backgroundColor: 'var(--terracotta)' }}
                  >
                    {cartItemCount}
                  </span>
                )}
              </button>

              <button 
                className="p-2" 
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" style={{ color: 'var(--charcoal)' }} />
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: 'var(--charcoal)' }}
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

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-[45] lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-[85vw] max-w-sm bg-white z-[50] lg:hidden transform transition-transform duration-300 ease-in-out shadow-2xl ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-100">
          <span className="font-serif text-lg" style={{ color: 'var(--charcoal)' }}>Menu</span>
          <button 
            onClick={() => setMobileMenuOpen(false)} 
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" style={{ color: 'var(--charcoal)' }} />
          </button>
        </div>

        {/* Mobile Menu Links */}
        <div className="overflow-y-auto h-[calc(100vh-80px)] pb-safe">
          <div className="py-4">
            {mobileNavSections.map((section) => (
              <div key={section.label} className="border-b border-gray-50">
                {section.children ? (
                  <>
                    <button
                      onClick={() => toggleMobileSection(section.label)}
                      className="w-full flex items-center justify-between px-6 py-4 text-left transition-colors hover:bg-gray-50"
                    >
                      <span 
                        className={`text-[15px] tracking-wide ${
                          isDropdownActive(section.children.map(c => c.href)) ? 'font-semibold' : 'font-light'
                        }`} 
                        style={{ color: 'var(--charcoal)' }}
                      >
                        {section.label}
                      </span>
                      <ChevronDown 
                        className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                          expandedMobileSection === section.label ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        expandedMobileSection === section.label ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="bg-gray-50/60 py-2">
                        {section.children.map((child) => (
                          <a
                            key={child.href}
                            href={child.href}
                            className={`block px-10 py-3 text-sm transition-colors hover:bg-gray-100 ${
                              isActive(child.href) ? 'font-medium' : 'font-light'
                            }`}
                            style={{ color: isActive(child.href) ? 'var(--sage-green)' : '#374151' }}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <a
                    href={section.href!}
                    className={`block px-6 py-4 text-[15px] tracking-wide transition-colors hover:bg-gray-50 ${
                      isActive(section.href!) ? 'font-semibold' : 'font-light'
                    }`}
                    style={{ color: isActive(section.href!) ? 'var(--sage-green)' : 'var(--charcoal)' }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {section.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="px-6 py-6 space-y-3">
            <a
              href="/contact"
              className="block w-full py-3.5 rounded-lg text-center text-white font-medium transition-all hover:shadow-lg text-[15px]"
              style={{ backgroundColor: 'var(--sage-green)' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Coach Tina
            </a>
          </div>
        </div>
      </div>
    </>
  );
}