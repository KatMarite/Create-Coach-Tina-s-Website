import { FadeIn } from './FadeIn';

export function LifeAndPurpose() {
  return (
    <div className="pt-24 sm:pt-28 md:pt-32 pb-16 bg-white min-h-screen">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-16 sm:mb-24">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* TEXT */}
            <div className="space-y-6">
              <div
                className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase bg-gray-100"
                style={{ color: 'var(--sage-green)' }}
              >
                1:1 Coaching
              </div>

              <h1
                className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight"
                style={{ color: 'var(--charcoal)' }}
              >
                For the high-achiever who’s tired of surviving.
              </h1>

              <div
                className="text-xl sm:text-2xl font-light italic mt-6"
                style={{ color: 'var(--sage-green)' }}
              >
                <p>You can be successful and still feel lost.</p>
                <p>You can be strong and still feel exhausted.</p>
              </div>

              <p
                className="text-lg font-light leading-relaxed"
                style={{ color: '#374151' }}
              >
                This is a space for slowing down, gaining clarity, and
                rebuilding your life from a place of emotional honesty, faith,
                and aligned direction.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://calendly.com/tinamujera/30min"
                  className="px-8 py-4 rounded-lg transition-all shadow-md hover:shadow-xl text-center"
                  style={{
                    backgroundColor: 'var(--sage-green)',
                    color: 'white',
                  }}
                >
                  Book a Discovery Session
                </a>

                <a
                  href="/transformation-hub"
                  className="px-8 py-4 rounded-lg border-2 transition-all hover:bg-gray-50 text-center"
                  style={{
                    borderColor: 'var(--charcoal)',
                    color: 'var(--charcoal)',
                  }}
                >
                  Explore Other Paths
                </a>
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative">
              <div className="aspect-[4/5] max-w-md mx-auto overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/images/hero-1.jpg"
                  alt="Life and Purpose Coaching"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* THIS IS FOR YOU IF */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 mb-20">
        <FadeIn>
          <h2
            className="text-3xl font-serif mb-10 text-center"
            style={{ color: 'var(--charcoal)' }}
          >
            This is for you if…
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div className="p-6 bg-gray-50 rounded-2xl">
              You are successful but feel emotionally tired or disconnected.
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl">
              You are in a transition and need clarity about your next season.
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl">
              You are tired of performing strength and holding everything
              together.
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl">
              You know something needs to shift, but you need guided support.
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl md:col-span-2">
              You want faith-rooted, practical coaching that helps you move
              forward with peace and direction.
            </div>
          </div>
        </FadeIn>
      </section>

      {/* WHAT WE WORK THROUGH */}
      <section className="bg-gray-50 py-20 border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <FadeIn>
            <h2
              className="text-3xl font-serif mb-10 text-center"
              style={{ color: 'var(--charcoal)' }}
            >
              What we work through
            </h2>

            <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
              This is a structured coaching process that helps you understand
              yourself more deeply and move with clarity instead of confusion.
            </p>

            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              {[
                'Identity and self-understanding',
                'Purpose and direction',
                'Emotional patterns and triggers',
                'Boundaries and self-leadership',
                'Decision-making under pressure',
                'Confidence and self-trust',
                'Healing past emotional experiences',
                'Resilience and emotional regulation',
                'Faith integration in daily life',
                'Practical next-step planning',
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-5 bg-white rounded-xl border border-gray-100"
                >
                  {item}
                </div>
              ))}
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
            Coaching outcomes
          </h2>

          <div className="space-y-6 text-gray-700">
            <div className="p-6 rounded-2xl bg-gray-50">
              Clarity on where you are and what season you are in.
            </div>

            <div className="p-6 rounded-2xl bg-gray-50">
              Emotional language for understanding patterns, wounds, and
              triggers.
            </div>

            <div className="p-6 rounded-2xl bg-gray-50">
              Practical tools for boundaries, decision-making, and aligned
              action.
            </div>

            <div className="p-6 rounded-2xl bg-gray-50">
              A renewed sense of confidence, peace, and purpose in how you live
              and lead.
            </div>
          </div>
        </FadeIn>
      </section>

      {/* FINAL CTA */}
      <section className="text-center py-20">
        <FadeIn>
          <h2
            className="text-3xl font-serif mb-6"
            style={{ color: 'var(--charcoal)' }}
          >
            You don’t need to keep figuring it out alone
          </h2>

          <a
            href="https://calendly.com/tinamujera/30min"
            className="px-8 py-4 rounded-lg text-white shadow-md hover:shadow-xl transition-all"
            style={{ backgroundColor: 'var(--sage-green)' }}
          >
            Book a Discovery Session
          </a>
        </FadeIn>
      </section>
    </div>
  );
}
