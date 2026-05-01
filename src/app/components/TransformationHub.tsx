import { FadeIn } from './FadeIn';

export function TransformationHub() {
  return (
    <div className="pt-24 sm:pt-28 md:pt-32 pb-16 bg-white min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-16 sm:mb-24 text-center">
        <FadeIn>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight mb-6" style={{ color: 'var(--charcoal)' }}>
            Choose your doorway into transformation.
          </h1>
          <p className="text-xl sm:text-2xl font-light max-w-3xl mx-auto mb-16" style={{ color: '#374151' }}>
            Select the path that matches your season:
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Corporate Leadership */}
          <FadeIn>
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all h-full flex flex-col text-left">
              <h2 className="text-2xl font-serif mb-4" style={{ color: 'var(--charcoal)' }}>Corporate Leadership</h2>
              <p className="text-gray-600 mb-8 flex-grow">
                Culture transformation, EQ, resilience, and change management for teams.
              </p>
              <a href="/corporate-leadership" className="inline-block px-6 py-3 rounded-lg transition-all hover:bg-gray-200 bg-white border border-gray-200 text-center font-medium w-full" style={{ color: 'var(--charcoal)' }}>
                Explore Corporate Leadership
              </a>
            </div>
          </FadeIn>

          {/* Life & Purpose */}
          <FadeIn>
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all h-full flex flex-col text-left">
              <h2 className="text-2xl font-serif mb-4" style={{ color: 'var(--charcoal)' }}>Life & Purpose</h2>
              <p className="text-gray-600 mb-8 flex-grow">
                Coaching for clarity, confidence, identity, and career transitions.
              </p>
              <a href="/life-and-purpose" className="inline-block px-6 py-3 rounded-lg transition-all hover:bg-gray-200 bg-white border border-gray-200 text-center font-medium w-full" style={{ color: 'var(--charcoal)' }}>
                Explore Life & Purpose
              </a>
            </div>
          </FadeIn>

          {/* Healing Circles */}
          <FadeIn>
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all h-full flex flex-col text-left">
              <h2 className="text-2xl font-serif mb-4" style={{ color: 'var(--charcoal)' }}>Healing Circles</h2>
              <p className="text-gray-600 mb-8 flex-grow">
                Safe spaces for restoration through community, faith, and emotional healing.
              </p>
              <a href="/healing-circles" className="inline-block px-6 py-3 rounded-lg transition-all hover:bg-gray-200 bg-white border border-gray-200 text-center font-medium w-full" style={{ color: 'var(--charcoal)' }}>
                Explore Healing Circles
              </a>
            </div>
          </FadeIn>
        </div>

        <FadeIn>
          <div className="mt-20 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/tinamujera/30min" className="px-8 py-4 rounded-lg transition-all shadow-md hover:shadow-xl text-center" style={{ backgroundColor: 'var(--sage-green)', color: 'white' }}>
              Book a Discovery Session
            </a>
            <a href="/contact" className="px-8 py-4 rounded-lg border-2 transition-all hover:bg-gray-50 text-center" style={{ borderColor: 'var(--charcoal)', color: 'var(--charcoal)' }}>
              Inquire for Corporate Facilitation
            </a>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
