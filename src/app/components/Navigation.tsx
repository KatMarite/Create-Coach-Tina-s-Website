"use client";

import { ShoppingBag } from 'lucide-react';
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

  const isActive = (path: string) => pathname === path;
  const isDropdownActive = (paths: string[]) => paths.some(p => pathname?.startsWith(p));

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <span className="font-serif text-2xl" style={{ color: 'var(--charcoal)' }}>
                Coach Tina
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
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

              <button 
                onClick={toggleCart}
                className="md:hidden relative p-2"
                style={{ color: 'var(--charcoal)' }}
              >
                <ShoppingBag className="w-6 h-6" />
                {cartItemCount > 0 && (
                  <span 
                    className="absolute top-1 right-1 transform text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm"
                    style={{ backgroundColor: 'var(--terracotta)' }}
                  >
                    {cartItemCount}
                  </span>
                )}
              </button>

            <button className="md:hidden p-2" aria-label="Menu">
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
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}