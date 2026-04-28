import { FadeIn } from './FadeIn';

export function Shop() {
  return (
    <div className="pt-24 sm:pt-28 md:pt-32 pb-16 bg-white min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-16 sm:mb-24 text-center">
        <FadeIn>
          <div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase mb-6 bg-gray-100" style={{ color: 'var(--sage-green)' }}>
            Books & Resources
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight mb-6" style={{ color: 'var(--charcoal)' }}>
            Tangible tools for your transformation.
          </h1>
          <p className="text-xl sm:text-2xl font-light mb-10 max-w-3xl mx-auto" style={{ color: '#374151' }}>
            Choose the resource that matches your season — and start moving.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#resources" className="px-8 py-4 rounded-lg transition-all shadow-md hover:shadow-xl text-center" style={{ backgroundColor: 'var(--sage-green)', color: 'white' }}>
              Browse All Resources
            </a>
            <a href="#transitions" className="px-8 py-4 rounded-lg border-2 transition-all hover:bg-gray-50 text-center" style={{ borderColor: 'var(--charcoal)', color: 'var(--charcoal)' }}>
              Start With ‘Transitions’
            </a>
          </div>
        </FadeIn>
      </section>

      <section id="resources" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Transitions */}
          <FadeIn>
            <div id="transitions" className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-lg transition-shadow">
              <div className="aspect-[3/4] relative p-6 flex items-center justify-center bg-white border-b border-gray-100">
                <img
                  src="/images/book5.jpeg"
                  alt="Transitions Book"
                  className="w-full h-full object-cover rounded shadow-md"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-xs font-semibold uppercase tracking-wider mb-2 text-gray-500">Workbook</div>
                <h3 className="text-xl font-serif mb-2" style={{ color: 'var(--charcoal)' }}>Transitions</h3>
                <p className="text-gray-600 font-light text-sm mb-6 flex-grow">Navigating professional or personal disorientation. Find your divine orientation and alignment.</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200">
                  <span className="text-lg font-medium" style={{ color: 'var(--charcoal)' }}>R 250.00</span>
                  <button className="px-3 py-1.5 rounded-lg text-white text-sm font-medium transition-all hover:opacity-90" style={{ backgroundColor: 'var(--sage-green)' }}>
                    Add
                  </button>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Authentic Marketing Mastery */}
          <FadeIn>
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-lg transition-shadow">
              <div className="aspect-[3/4] relative p-6 flex items-center justify-center bg-white border-b border-gray-100">
                <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center text-gray-400 font-serif shadow-md" style={{ backgroundColor: 'var(--teu-yellow)', color: 'var(--charcoal)' }}>
                  Cover
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-xs font-semibold uppercase tracking-wider mb-2 text-gray-500">Workbook</div>
                <h3 className="text-xl font-serif mb-2" style={{ color: 'var(--charcoal)' }}>Authentic Marketing Mastery</h3>
                <p className="text-gray-600 font-light text-sm mb-6 flex-grow">Soul-led branding for entrepreneurs. Build structure, soul, and market visibility.</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200">
                  <span className="text-lg font-medium" style={{ color: 'var(--charcoal)' }}>R 300.00</span>
                  <button className="px-3 py-1.5 rounded-lg text-white text-sm font-medium transition-all hover:opacity-90" style={{ backgroundColor: 'var(--sage-green)' }}>
                    Add
                  </button>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* NaShe */}
          <FadeIn>
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-lg transition-shadow">
              <div className="aspect-[3/4] relative p-6 flex items-center justify-center bg-white border-b border-gray-100">
                <img
                  src="/images/book3.png"
                  alt="NaShe Book"
                  className="w-full h-full object-cover rounded shadow-md"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-xs font-semibold uppercase tracking-wider mb-2 text-gray-500">Book</div>
                <h3 className="text-xl font-serif mb-2" style={{ color: 'var(--charcoal)' }}>NaShe - With God</h3>
                <p className="text-gray-600 font-light text-sm mb-6 flex-grow">Spiritual awakening and healing. A testimony of grace and personal renewal.</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200">
                  <span className="text-lg font-medium" style={{ color: 'var(--charcoal)' }}>R 250.00</span>
                  <button className="px-3 py-1.5 rounded-lg text-white text-sm font-medium transition-all hover:opacity-90" style={{ backgroundColor: 'var(--sage-green)' }}>
                    Add
                  </button>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* AteBelle */}
          <FadeIn>
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-lg transition-shadow">
              <div className="aspect-[3/4] relative p-6 flex items-center justify-center bg-white border-b border-gray-100">
                <div className="w-full h-full rounded shadow-md flex items-center justify-center p-4 text-center font-serif text-white leading-tight" style={{ backgroundColor: 'var(--sage-green)' }}>
                  AteBelle<br/><span className="text-sm font-light">Kids</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-xs font-semibold uppercase tracking-wider mb-2 text-gray-500">Children's Book</div>
                <h3 className="text-xl font-serif mb-2" style={{ color: 'var(--charcoal)' }}>AteBelle</h3>
                <p className="text-gray-600 font-light text-sm mb-6 flex-grow">Character building and resilience for youth. Foundational stewardship and leadership.</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200">
                  <span className="text-lg font-medium" style={{ color: 'var(--charcoal)' }}>R 180.00</span>
                  <button className="px-3 py-1.5 rounded-lg text-white text-sm font-medium transition-all hover:opacity-90" style={{ backgroundColor: 'var(--sage-green)' }}>
                    Add
                  </button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
