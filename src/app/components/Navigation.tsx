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
      label: 'Start Here',
      href: '/',
      children: null,
    },
    {
      label: 'Work With Coach Tina',
      href: null,
      children: [
        { label: 'Leadership Coaching', href: '/coaching' },
        { label: 'Corporate Training & Facilitation', href: '/training' },
        { label: 'Wellness & Resilience Workshops', href: '/wellness-workshops' },
        { label: 'Packages / Retainers', href: '/packages-retainers' },
        { label: 'Testimonials / Results', href: '/testimonials' },
      ],
    },
    {
      label: 'Speaking',
      href: '/speaking',
      children: null,
    },
    {
      label: 'Podcast',
      href: '/podcast',
      children: null,
    },
    {
      label: 'Books & Tools',
      href: null,
      children: [
        { label: 'Books', href: '/books' },
        { label: 'Free Tools / Downloads', href: '/free-tools' },
        { label: 'Resources / Blog', href: '/resources' },
      ],
    },
    {
      label: 'Programs',
      href: null,
      children: [
        { label: 'Empower U Kids & Teens', href: '/empower-u' },
        { label: 'Authentically Woman', href: '/authentically-woman' },
        { label: 'Lead From Within Framework', href: '/lead-from-within' },
      ],
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
                href="/"
                className="relative group"
                aria-current={isActive('/') ? 'page' : undefined}
              >
                <span className={`text-sm tracking-wide transition-colors hover:opacity-70 ${isActive('/') ? 'font-semibold' : 'font-light'}`} style={{ color: 'var(--charcoal)' }}>
                  Start Here
                </span>
                <span
                  className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'}`}
                  style={{ backgroundColor: 'var(--sage-green)' }}
                />
              </a>

              <DropdownMenu>
                <DropdownMenuTrigger className="relative group">
                  <span className={`text-sm tracking-wide transition-colors hover:opacity-70 flex items-center gap-1 ${isDropdownActive(['/coaching', '/training', '/wellness-workshops', '/packages-retainers', '/testimonials']) ? 'font-semibold' : 'font-light'}`} style={{ color: 'var(--charcoal)' }}>
                    Work With Coach Tina
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${isDropdownActive(['/coaching', '/training', '/wellness-workshops', '/packages-retainers', '/testimonials']) ? 'w-full' : 'w-0 group-hover:w-full'}`}
                    style={{ backgroundColor: 'var(--sage-green)' }}
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64">
                  <DropdownMenuItem>
                    <a href="/coaching" className="w-full">Leadership Coaching (1:1 / Executive / Women in leadership)</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/training" className="w-full">Corporate Training & Facilitation</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/wellness-workshops" className="w-full">Wellness & Resilience Workshops</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/packages-retainers" className="w-full">Packages / Retainers</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/testimonials" className="w-full">Testimonials / Results</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

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
                href="/podcast"
                className="relative group"
              >
                <span className={`text-sm tracking-wide transition-colors hover:opacity-70 ${isActive('/podcast') ? 'font-semibold' : 'font-light'}`} style={{ color: 'var(--charcoal)' }}>
                  Podcast
                </span>
                <span
                  className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${isActive('/podcast') ? 'w-full' : 'w-0 group-hover:w-full'}`}
                  style={{ backgroundColor: 'var(--sage-green)' }}
                />
              </a>

              <DropdownMenu>
                <DropdownMenuTrigger className="relative group">
                  <span className={`text-sm tracking-wide transition-colors hover:opacity-70 flex items-center gap-1 ${isDropdownActive(['/books', '/free-tools', '/resources']) ? 'font-semibold' : 'font-light'}`} style={{ color: 'var(--charcoal)' }}>
                    Books & Tools
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${isDropdownActive(['/books', '/free-tools', '/resources']) ? 'w-full' : 'w-0 group-hover:w-full'}`}
                    style={{ backgroundColor: 'var(--sage-green)' }}
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                  <DropdownMenuItem>
                    <a href="/books" className="w-full">Books</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/free-tools" className="w-full">Free Tools / Downloads</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/resources" className="w-full">Resources / Blog</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="relative group">
                  <span className={`text-sm tracking-wide transition-colors hover:opacity-70 flex items-center gap-1 ${isDropdownActive(['/empower-u', '/authentically-woman', '/lead-from-within']) ? 'font-semibold' : 'font-light'}`} style={{ color: 'var(--charcoal)' }}>
                    Programs
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${isDropdownActive(['/empower-u', '/authentically-woman', '/lead-from-within']) ? 'w-full' : 'w-0 group-hover:w-full'}`}
                    style={{ backgroundColor: 'var(--sage-green)' }}
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuItem>
                    <a href="/empower-u" className="w-full">Empower U Kids & Teens</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/authentically-woman" className="w-full">Authentically Woman</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/lead-from-within" className="w-full">Lead From Within Framework</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <a
                href="/contact"
                className="px-6 py-2.5 rounded-lg transition-all hover:shadow-lg hover:scale-105 block text-center"
                style={{ backgroundColor: 'var(--sage-green)', color: 'white' }}
              >
                Contact
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