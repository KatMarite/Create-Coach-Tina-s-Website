import { FadeIn } from './FadeIn';

export function HealingCircles() {
  return (
    <div className="pt-24 sm:pt-28 md:pt-32 pb-16 bg-white min-h-screen">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-16 sm:mb-24 text-center">
        <FadeIn>
          <div
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase mb-6 bg-gray-100"
            style={{ color: 'var(--sage-green)' }}
          >
            Authentically Woman
          </div>

          <h1
            className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight mb-8"
            style={{ color: 'var(--charcoal)' }}
          >
            Spaces for restoration. Because healing changes everything.
          </h1>

          <p
            className="text-xl sm:text-2xl font-light mb-12 max-w-3xl mx-auto"
            style={{ color: '#374151' }}
          >
            Authentically Woman is not a motivational gathering. It is a sacred,
            emotionally safe space where women can be honest without performing
            strength.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 rounded-lg transition-all shadow-md hover:shadow-xl text-center"
              style={{ backgroundColor: 'var(--sage-green)', color: 'white' }}
            >
              Join the Next Circle
            </a>

            <a
              href="/contact"
              className="px-8 py-4 rounded-lg border-2 transition-all hover:bg-gray-50 text-center"
              style={{
                borderColor: 'var(--charcoal)',
                color: 'var(--charcoal)',
              }}
            >
              Enquire About Private Circles
            </a>
          </div>
        </FadeIn>
      </section>

      {/* WHO IT IS FOR */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 mb-20">
        <FadeIn>
          <h2
            className="text-3xl font-serif mb-6 text-center"
            style={{ color: 'var(--charcoal)' }}
          >
            Who It Is For
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 text-gray-700 font-light">
            <p>Women navigating transition, grief, or identity shifts.</p>
            <p>
              Single mothers carrying emotional and practical pressure alone.
            </p>
            <p>Women experiencing emotional fatigue or burnout.</p>
            <p>
              Those in leadership or responsibility roles feeling overwhelmed.
            </p>
            <p>Women rebuilding spiritually, emotionally, or personally.</p>
            <p>Anyone who needs a safe space to be fully honest again.</p>
          </div>
        </FadeIn>
      </section>

      {/* WHAT HAPPENS IN THE CIRCLE */}
      <section className="bg-gray-50 py-16 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-gray-200 relative group">
                <img src="/images/hcircle.jpeg" alt="Healing Circle" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all" />
              </div>
              
              <div>
                <h2
                  className="text-3xl font-serif mb-8"
                  style={{ color: 'var(--charcoal)' }}
                >
                  What Happens in the Circle
                </h2>

                <div className="space-y-4 text-gray-700 font-light">
                  <p>Guided reflection and gentle coaching prompts.</p>
                  <p>Honest, safe conversation without judgement or pressure.</p>
                  <p>Faith-rooted encouragement and grounding.</p>
                  <p>Journaling exercises for emotional clarity.</p>
                  <p>Optional sharing in a supportive, non-performative space.</p>
                  <p>Prayer, grounding, and emotional reset practices.</p>
                  <p>Practical tools to help you re-enter life with steadiness.</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 py-20">
        <FadeIn>
          <h2
            className="text-3xl font-serif mb-10 text-center"
            style={{ color: 'var(--charcoal)' }}
          >
            Outcomes
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 text-gray-700 font-light">
            <p>A safe space to be fully seen and heard without judgement.</p>
            <p>Emotional release of what you have been carrying silently.</p>
            <p>Language for your emotions, grief, and internal experiences.</p>
            <p>A renewed sense of identity and inner grounding.</p>
            <p>Strength that is no longer performative but authentic.</p>
            <p>Community and connection with other women in similar seasons.</p>
          </div>
        </FadeIn>
      </section>

      {/* OPTIONAL IMAGE SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 mb-20">
        <FadeIn>
          <h2
            className="text-3xl font-serif mb-8 text-center"
            style={{ color: 'var(--charcoal)' }}
          >
            Circle Moments
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-md bg-gray-200 h-64 flex items-center justify-center text-gray-400">
              <img
                src="/images/circle1.jpeg"
                alt="Coach Tina Portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md bg-gray-200 h-64 flex items-center justify-center text-gray-400">
              <img
                src="/images/circle2.jpeg"
                alt="Coach Tina Portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md bg-gray-200 h-64 flex items-center justify-center text-gray-400">
              <img
                src="/images/circle3.jpeg"
                alt="Coach Tina Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
