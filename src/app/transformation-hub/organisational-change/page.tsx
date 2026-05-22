import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';

export const metadata = {
  title: 'Organisational Change Management | Coach Tina',
  description:
    'Guiding organisations through change with clarity, alignment, and emotional intelligence.',
};

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <Navigation />

      <main className="flex-grow pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* HERO */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1
              className="text-4xl md:text-6xl font-serif mb-6"
              style={{ color: 'var(--charcoal)' }}
            >
              Organisational Change Management
            </h1>

            <p className="text-xl font-light text-gray-600 mb-8">
              Supporting organisations, teams, and leaders through complex
              transitions with clarity, trust, and emotional alignment.
            </p>

            <a
              href="https://calendly.com/tinamujera/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-lg text-white font-medium transition-all hover:scale-105 shadow-lg"
              style={{ backgroundColor: 'var(--sage-green)' }}
            >
              Book a Consultation
            </a>
          </div>

          {/* WHO IT IS FOR */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/meet1.jpg"
                alt="Coach Tina facilitating transformational leadership coaching"
                className="w-full h-[450px] object-cover"
              />
            </div>

            <div>
              <h2
                className="text-3xl font-serif mb-6"
                style={{ color: 'var(--charcoal)' }}
              >
                Who this is for
              </h2>

              <p className="text-gray-700 font-light leading-relaxed">
                Organisations, schools, and teams navigating restructuring,
                leadership changes, culture shifts, system implementations, or
                periods of uncertainty that require human-centered change
                support.
              </p>
            </div>
          </div>

          {/* PROBLEM */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2
              className="text-3xl font-serif mb-6 text-center"
              style={{ color: 'var(--charcoal)' }}
            >
              The Problem It Solves
            </h2>

            <p className="text-lg text-gray-700 font-light text-center leading-relaxed">
              Most organisational change fails not because of strategy — but
              because of people. Change fatigue, resistance, miscommunication,
              and emotional disengagement often block implementation even when
              the systems are sound.
            </p>
          </div>

          {/* WHAT WE WORK THROUGH */}
          <div className="bg-white border border-gray-200 rounded-2xl p-10 mb-16 shadow-sm">
            <h2
              className="text-3xl font-serif mb-8 text-center"
              style={{ color: 'var(--charcoal)' }}
            >
              What We Work Through
            </h2>

            <div className="grid md:grid-cols-2 gap-6 text-gray-700 font-light">
              <ul className="space-y-3">
                <li>• Change fatigue and resistance</li>
                <li>• Leadership alignment and clarity</li>
                <li>• Communication breakdowns</li>
                <li>• Role confusion during transitions</li>
              </ul>

              <ul className="space-y-3">
                <li>• Trust and psychological safety</li>
                <li>• Emotional buy-in from teams</li>
                <li>• Culture shifts and adaptation</li>
                <li>• Human behaviour during uncertainty</li>
              </ul>
            </div>
          </div>

          {/* OUTCOMES */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2
              className="text-3xl font-serif mb-8 text-center"
              style={{ color: 'var(--charcoal)' }}
            >
              Outcomes
            </h2>

            <div className="space-y-4 text-lg text-gray-700 font-light">
              <p>
                • Clear understanding of the human side of organisational
                change.
              </p>
              <p>• Improved communication between leadership and teams.</p>
              <p>
                • Increased trust, engagement, and participation during
                transitions.
              </p>
              <p>
                • Practical tools to support smoother, more sustainable
                implementation.
              </p>
            </div>
          </div>

          {/* FORMAT */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-10 mb-16">
            <h2
              className="text-3xl font-serif mb-6 text-center"
              style={{ color: 'var(--charcoal)' }}
            >
              Format Options
            </h2>

            <div className="text-center text-gray-700 font-light space-y-2">
              <p>• Organisational consulting engagements</p>
              <p>• Leadership alignment workshops</p>
              <p>• Team change readiness sessions</p>
              <p>• Short-term or long-term transformation support</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2
              className="text-3xl font-serif mb-6"
              style={{ color: 'var(--charcoal)' }}
            >
              Make change work with your people — not against them
            </h2>

            <a
              href="https://calendly.com/tinamujera/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 rounded-lg text-white font-medium transition-all hover:scale-105 shadow-lg"
              style={{ backgroundColor: 'var(--sage-green)' }}
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
