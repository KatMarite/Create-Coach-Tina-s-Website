import { FadeIn } from './FadeIn';

export function Speaking() {
  return (
    <div className="pt-24 sm:pt-28 md:pt-32 pb-16 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-16 sm:mb-24">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase mb-2 bg-gray-100" style={{ color: 'var(--sage-green)' }}>
                Keynote Speaker & Facilitator
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight" style={{ color: 'var(--charcoal)' }}>
                Keynotes that move hearts — and shift culture.
              </h1>
              <p className="text-xl font-light leading-relaxed" style={{ color: '#374151' }}>
                Book Coach Tina for dynamic keynotes and workshops on leadership, resilience, emotional intelligence, change management, and women in leadership.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="https://calendly.com/tinamujera/30min" className="px-8 py-4 rounded-lg transition-all shadow-md hover:shadow-xl text-center" style={{ backgroundColor: 'var(--sage-green)', color: 'white' }}>
                  Enquire to Book
                </a>
                <a href="/free-tools" className="px-8 py-4 rounded-lg border-2 transition-all hover:bg-gray-50 text-center flex items-center justify-center" style={{ borderColor: 'var(--charcoal)', color: 'var(--charcoal)' }}>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  Download Speaker Topics (PDF)
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] max-w-lg mx-auto overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/images/serv3.jpeg"
                  alt="Coach Tina Speaking"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Topics Overview */}
      <section className="bg-gray-50 py-16 sm:py-24 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-serif mb-12 text-center" style={{ color: 'var(--charcoal)' }}>
              Signature Topics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-medium mb-4" style={{ color: 'var(--charcoal)' }}>Lead From Within</h3>
                <p className="text-gray-600 font-light flex-grow">Why the most powerful leadership starts with radical self-awareness and how to cultivate it daily to lead authentic and resilient teams.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-medium mb-4" style={{ color: 'var(--charcoal)' }}>Resilience in Disruption</h3>
                <p className="text-gray-600 font-light flex-grow">Actionable strategies for maintaining team morale, focus, and mental wellness during periods of intense organizational change.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-medium mb-4" style={{ color: 'var(--charcoal)' }}>Women in Power</h3>
                <p className="text-gray-600 font-light flex-grow">A passionate keynote aimed at women stepping into executive roles, breaking through imposter syndrome, and commanding rooms with grace.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
