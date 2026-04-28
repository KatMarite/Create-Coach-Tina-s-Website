import { FadeIn } from './FadeIn';

export function EmpowerU() {
  return (
    <div className="pt-24 sm:pt-28 md:pt-32 pb-16 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-16 sm:mb-24">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase mb-2 bg-gray-100" style={{ color: 'var(--sage-green)' }}>
                Children & Teens Academy
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight" style={{ color: 'var(--charcoal)' }}>
                Shaping the next generation of conscious, confident, value-driven leaders.
              </h1>
              <p className="text-xl font-light leading-relaxed" style={{ color: '#374151' }}>
                Empower U strengthens confidence, emotional literacy, resilience, and leadership—through age-appropriate neuroscience techniques and play-based strategy. We focus on <span className="font-medium text-gray-800">Family Resilience</span>, offering integrated workshops where parents and children build a strong foundation together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="/contact" className="px-8 py-4 rounded-lg transition-all shadow-md hover:shadow-xl text-center font-medium" style={{ backgroundColor: 'var(--teu-yellow)', color: 'var(--charcoal)' }}>
                  Enquire for a Programme
                </a>
                <a href="/free-tools" className="px-8 py-4 rounded-lg border-2 transition-all hover:bg-gray-50 text-center" style={{ borderColor: 'var(--charcoal)', color: 'var(--charcoal)' }}>
                  Download the Children's Confidence Toolkit
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square max-w-md mx-auto overflow-hidden rounded-full shadow-xl border-8 border-gray-50">
                <img
                  src="/images/empower-u.png"
                  alt="Empower U Kids and Teens"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Programmes */}
      <section className="bg-gray-50 py-16 sm:py-24 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-serif mb-12 text-center" style={{ color: 'var(--charcoal)' }}>
              Our Programmes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
              
              {/* Explorers */}
              <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2" style={{ backgroundColor: 'var(--sage-green)' }}></div>
                <h3 className="text-2xl font-serif mb-2" style={{ color: 'var(--charcoal)' }}>Empower U Explorers</h3>
                <p className="text-gray-500 font-medium mb-6 uppercase tracking-wider text-sm">(Ages 6–12)</p>
                <ul className="space-y-4">
                  <li className="flex items-center text-lg text-gray-700">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--sage-green)' }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    Confidence building
                  </li>
                  <li className="flex items-center text-lg text-gray-700">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--sage-green)' }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    EQ basics
                  </li>
                  <li className="flex items-center text-lg text-gray-700">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--sage-green)' }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    Friendship and empathy
                  </li>
                  <li className="flex items-center text-lg text-gray-700">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--sage-green)' }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    Growth mindset
                  </li>
                </ul>
              </div>

              {/* Achievers */}
              <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2" style={{ backgroundColor: 'var(--charcoal)' }}></div>
                <h3 className="text-2xl font-serif mb-2" style={{ color: 'var(--charcoal)' }}>Empower U Achievers</h3>
                <p className="text-gray-500 font-medium mb-6 uppercase tracking-wider text-sm">(Ages 13–18)</p>
                <ul className="space-y-4">
                  <li className="flex items-center text-lg text-gray-700">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--charcoal)' }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    Identity and values
                  </li>
                  <li className="flex items-center text-lg text-gray-700">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--charcoal)' }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    Leadership
                  </li>
                  <li className="flex items-center text-lg text-gray-700">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--charcoal)' }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    Resilience
                  </li>
                  <li className="flex items-center text-lg text-gray-700">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--charcoal)' }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    Stewardship and future readiness
                  </li>
                </ul>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
