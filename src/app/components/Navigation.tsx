export function Navigation() {
  const navItems = ['Coaching', 'Training & Facilitation', 'Empower U', 'Podcast', 'Books & Resources', 'Authentically Woman'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
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
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group"
              >
                <span className="text-sm font-light tracking-wide transition-colors hover:opacity-70" style={{ color: 'var(--charcoal)' }}>
                  {item}
                </span>
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: 'var(--sage-green)' }}
                />
              </a>
            ))}
            <button
              className="px-6 py-2.5 rounded-none transition-all hover:shadow-lg hover:scale-105"
              style={{ backgroundColor: 'var(--sage-green)', color: 'white' }}
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
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
  );
}