import { FadeIn } from './FadeIn';

export function HealingCircles() {
  return (
    <div className="pt-24 sm:pt-28 md:pt-32 pb-16 bg-white min-h-screen flex items-center">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 w-full text-center">
        <FadeIn>
          <div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase mb-6 bg-gray-100" style={{ color: 'var(--sage-green)' }}>
            Authentically Woman
          </div>
          
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight mb-8" style={{ color: 'var(--charcoal)' }}>
            Spaces for restoration. Because healing changes everything.
          </h1>
          
          <p className="text-xl sm:text-2xl font-light mb-12" style={{ color: '#374151' }}>
            A safe, faith-led space to speak, release, rebuild, and re-enter life with a steadier spirit.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-4 rounded-lg transition-all shadow-md hover:shadow-xl text-center" style={{ backgroundColor: 'var(--sage-green)', color: 'white' }}>
              Join the Next Circle
            </a>
            <a href="/contact" className="px-8 py-4 rounded-lg border-2 transition-all hover:bg-gray-50 text-center" style={{ borderColor: 'var(--charcoal)', color: 'var(--charcoal)' }}>
              Enquire About Private Circles
            </a>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
