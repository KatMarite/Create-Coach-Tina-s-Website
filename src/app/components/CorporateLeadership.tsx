import { FadeIn } from './FadeIn';

export function CorporateLeadership() {
  return (
    <div className="pt-24 sm:pt-28 md:pt-32 pb-16 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-16 sm:mb-24 text-center">
        <FadeIn>
          <div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase mb-6 bg-gray-100" style={{ color: 'var(--sage-green)' }}>
            Corporate Leadership (B2B)
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight mb-8" style={{ color: 'var(--charcoal)' }}>
            Culture transformation for modern teams.
          </h1>
          <p className="text-xl sm:text-2xl font-medium mb-6" style={{ color: 'var(--sage-green)' }}>
            If you want better performance, start with better people systems.
          </p>
          <p className="text-lg font-light max-w-3xl mx-auto mb-10" style={{ color: '#374151' }}>
            I work with leaders and teams navigating pressure, transition, or culture fatigue—building psychological safety, emotional intelligence, and clear execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-4 rounded-lg transition-all shadow-md hover:shadow-xl text-center" style={{ backgroundColor: 'var(--sage-green)', color: 'white' }}>
              Request a Corporate Proposal
            </a>
            <a href="/contact" className="px-8 py-4 rounded-lg border-2 transition-all hover:bg-gray-50 text-center" style={{ borderColor: 'var(--charcoal)', color: 'var(--charcoal)' }}>
              Book a Corporate Discovery Call
            </a>
          </div>
        </FadeIn>
      </section>

      {/* Signature Workshops */}
      <section className="bg-gray-50 py-16 sm:py-24 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-serif mb-12 text-center" style={{ color: 'var(--charcoal)' }}>
              Signature Workshops & Programmes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 rounded-full mb-6 flex items-center justify-center text-white" style={{ backgroundColor: 'var(--sage-green)' }}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-xl font-medium mb-3" style={{ color: 'var(--charcoal)' }}>Organisational Change Management (OCM)</h3>
                <p className="text-gray-600 font-light">Navigating transitions with strategic alignment and emotional support.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 rounded-full mb-6 flex items-center justify-center text-white" style={{ backgroundColor: 'var(--charcoal)' }}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                </div>
                <h3 className="text-xl font-medium mb-3" style={{ color: 'var(--charcoal)' }}>Emotional Intelligence (EQ) for Leaders</h3>
                <p className="text-gray-600 font-light">Enhancing self-awareness and empathy for effective leadership.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 rounded-full mb-6 flex items-center justify-center text-white" style={{ backgroundColor: 'var(--sage-green)' }}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                </div>
                <h3 className="text-xl font-medium mb-3" style={{ color: 'var(--charcoal)' }}>Women in Leadership Programmes</h3>
                <p className="text-gray-600 font-light">Empowering female leaders to break barriers and lead authentically.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 rounded-full mb-6 flex items-center justify-center text-white" style={{ backgroundColor: 'var(--charcoal)' }}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </div>
                <h3 className="text-xl font-medium mb-3" style={{ color: 'var(--charcoal)' }}>Workplace Wellness & Resilience</h3>
                <p className="text-gray-600 font-light">Building sustainable habits and emotional fitness to prevent burnout.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 rounded-full mb-6 flex items-center justify-center text-white" style={{ backgroundColor: 'var(--sage-green)' }}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
                </div>
                <h3 className="text-xl font-medium mb-3" style={{ color: 'var(--charcoal)' }}>Team Communication & Collaboration</h3>
                <p className="text-gray-600 font-light">Fostering psychological safety and clear dialogue within teams.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 rounded-full mb-6 flex items-center justify-center text-white" style={{ backgroundColor: 'var(--charcoal)' }}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-xl font-medium mb-3" style={{ color: 'var(--charcoal)' }}>Leadership Retreat Facilitation</h3>
                <p className="text-gray-600 font-light">Immersive off-sites to realign vision, strategy, and team dynamics.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-serif mb-12 text-center" style={{ color: 'var(--charcoal)' }}>
            How It Works
          </h2>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2" style={{ color: 'var(--sage-green)' }}>
                1
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <h3 className="font-medium text-xl mb-1" style={{ color: 'var(--charcoal)' }}>Discovery & needs analysis</h3>
                <p className="text-gray-500 font-light">We begin by understanding your team's unique challenges and objectives.</p>
              </div>
            </div>
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2" style={{ color: 'var(--sage-green)' }}>
                2
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <h3 className="font-medium text-xl mb-1" style={{ color: 'var(--charcoal)' }}>Custom programme design</h3>
                <p className="text-gray-500 font-light">Tailored curriculum and systems built to address your specific goals.</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2" style={{ color: 'var(--sage-green)' }}>
                3
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <h3 className="font-medium text-xl mb-1" style={{ color: 'var(--charcoal)' }}>Delivery</h3>
                <p className="text-gray-500 font-light">In-person or virtual facilitation led by Coach Tina.</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2" style={{ color: 'var(--sage-green)' }}>
                4
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <h3 className="font-medium text-xl mb-1" style={{ color: 'var(--charcoal)' }}>Impact review + next steps</h3>
                <p className="text-gray-500 font-light">Measuring success and establishing systems for sustained alignment.</p>
              </div>
            </div>

          </div>
        </FadeIn>
      </section>
    </div>
  );
}
