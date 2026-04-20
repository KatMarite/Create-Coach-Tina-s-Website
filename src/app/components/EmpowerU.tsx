import { FadeIn } from './FadeIn';
import { Sparkles, Calendar, Users2 } from 'lucide-react';

export function EmpowerU() {
  return (
    <section id="empower u" className="py-24 lg:py-32 bg-white">
      <FadeIn>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/empower.png"
                alt="Empower U Program"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <div
              className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full opacity-10"
              style={{ backgroundColor: 'var(--sage-green)' }}
            />
          </div>

          {/* Right - Content */}
          <div className="space-y-6 lg:order-first">
            <div className="inline-block px-4 py-1.5 rounded-full text-sm font-light tracking-wide" style={{ backgroundColor: 'var(--sage-green)', color: 'white' }}>
              Signature Program
            </div>

            <h2
              className="font-serif text-4xl md:text-5xl leading-tight"
              style={{ color: 'var(--charcoal)' }}
            >
              Empower U
            </h2>

            <p className="text-xl font-light leading-relaxed" style={{ color: '#4b5563' }}>
              A transformative 12-week group coaching program designed to help you step into your power, clarify your vision, and create the life you've always imagined.
            </p>

            <div className="space-y-4 text-base font-light leading-relaxed" style={{ color: '#374151' }}>
              <p>
                Empower U is more than a program—it's a journey of self-discovery and transformation. Through weekly group coaching sessions, powerful exercises, and a supportive community, you'll break through limiting beliefs and step into your authentic power.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                  <Calendar className="w-5 h-5" style={{ color: 'var(--sage-green)' }} />
                  <span className="font-serif text-2xl" style={{ color: 'var(--charcoal)' }}>12</span>
                </div>
                <div className="text-sm font-light" style={{ color: '#374151' }}>Weeks</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                  <Users2 className="w-5 h-5" style={{ color: 'var(--sage-green)' }} />
                  <span className="font-serif text-2xl" style={{ color: 'var(--charcoal)' }}>12-15</span>
                </div>
                <div className="text-sm font-light" style={{ color: '#374151' }}>Participants</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                  <Sparkles className="w-5 h-5" style={{ color: 'var(--sage-green)' }} />
                  <span className="font-serif text-2xl" style={{ color: 'var(--charcoal)' }}>∞</span>
                </div>
                <div className="text-sm font-light" style={{ color: '#374151' }}>Transformation</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 mt-8">
              <h4 className="font-serif text-lg mb-4" style={{ color: 'var(--charcoal)' }}>What's Included:</h4>
              <ul className="space-y-3">
                {[
                  'Weekly 90-minute group coaching calls',
                  'Comprehensive workbook and resources',
                  'Private community access',
                  'Guest expert sessions',
                  'Lifetime access to recordings',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm font-light" style={{ color: '#4b5563' }}>
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--sage-green)' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                className="px-8 py-4 rounded-lg transition-all hover:shadow-xl hover:scale-105"
                style={{ backgroundColor: 'var(--sage-green)', color: 'white' }}
              >
                Join Next Cohort
              </button>
              <button
                className="px-8 py-4 rounded-lg border-2 transition-all hover:bg-gray-50"
                style={{ borderColor: 'var(--charcoal)', color: 'var(--charcoal)' }}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
    </section>
  );
}
