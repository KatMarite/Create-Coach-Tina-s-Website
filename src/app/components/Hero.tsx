export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1
                className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight"
                style={{ color: 'var(--charcoal)' }}
              >
                I'm Coach Tina.
              </h1>
              <p className="text-xl md:text-2xl font-light leading-relaxed max-w-xl" style={{ color: '#6b7280' }}>
                Empowering you to discover your purpose, unlock your potential, and create a life that truly matters.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                className="px-8 py-4 rounded-none transition-all hover:shadow-xl hover:scale-105"
                style={{ backgroundColor: 'var(--sage-green)', color: 'white' }}
              >
                Get Started
              </button>
              <button
                className="px-8 py-4 rounded-none border-2 transition-all hover:bg-gray-50"
                style={{ borderColor: 'var(--charcoal)', color: 'var(--charcoal)' }}
              >
                Learn More
              </button>
            </div>

            <div className="flex gap-8 pt-8">
              <div>
                <div className="text-3xl font-serif mb-1" style={{ color: 'var(--sage-green)' }}>
                  500+
                </div>
                <div className="text-sm font-light" style={{ color: '#6b7280' }}>
                  Clients Coached
                </div>
              </div>
              <div className="w-px" style={{ backgroundColor: '#e5e7eb' }} />
              <div>
                <div className="text-3xl font-serif mb-1" style={{ color: 'var(--sage-green)' }}>
                  12+
                </div>
                <div className="text-sm font-light" style={{ color: '#6b7280' }}>
                  Years Experience
                </div>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative lg:order-last">
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:max-w-none">
              <div
                className="absolute -top-6 -left-6 w-full h-full rounded-2xl"
                style={{ backgroundColor: 'var(--sage-green)', opacity: 0.1 }}
              />
              <img
                src="https://images.unsplash.com/photo-1756699197303-e2badc2ae6df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsaWZlJTIwY29hY2glMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTQyMzcyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Coach Tina"
                className="relative rounded-2xl shadow-2xl object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
