import { FadeIn } from './FadeIn';

export function LifeAndPurpose() {
  return (
    <div className="pt-24 sm:pt-28 md:pt-32 pb-16 bg-white min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-16 sm:mb-24">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase mb-2 bg-gray-100" style={{ color: 'var(--sage-green)' }}>
                1:1 Coaching
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight text-gray-900" style={{ color: 'var(--charcoal)' }}>
                For the high-achiever who’s tired of surviving.
              </h1>
              
              <div className="text-xl sm:text-2xl font-light italic mt-6 mb-6" style={{ color: 'var(--sage-green)' }}>
                <p>You can be successful and still feel lost.</p>
                <p>You can be strong and still feel empty.</p>
              </div>

              <p className="text-lg font-light leading-relaxed mb-10" style={{ color: '#374151' }}>
                Together we work on identity, purpose, patterns, boundaries, and emotional resilience—so you can move with clarity and peace.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="https://calendly.com/tinamujera/30min" className="px-8 py-4 rounded-lg transition-all shadow-md hover:shadow-xl text-center" style={{ backgroundColor: 'var(--sage-green)', color: 'white' }}>
                  Book a Discovery Session
                </a>
                <a href="/shop" className="px-8 py-4 rounded-lg border-2 transition-all hover:bg-gray-50 text-center" style={{ borderColor: 'var(--charcoal)', color: 'var(--charcoal)' }}>
                  Explore Transitions (Book)
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] max-w-md mx-auto overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/images/hero-1.jpg"
                  alt="Coach Tina 1:1 Coaching"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
