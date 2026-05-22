import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';

export const metadata = {
  title: 'Emotional Intelligence for Leaders | Coach Tina',
  description:
    'Develop emotional intelligence to lead with clarity, empathy, and impact.',
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
              Emotional Intelligence for Leaders
            </h1>

            <p className="text-xl font-light text-gray-600 mb-8">
              Develop the emotional intelligence required to lead with clarity,
              empathy, and grounded authority.
            </p>

            <a
              href="https://calendly.com/tinamujera/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-lg text-white font-medium transition-all hover:scale-105 shadow-lg"
              style={{ backgroundColor: 'var(--sage-green)' }}
            >
              Book a Discovery Session
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
                Managers, executives, founders, team leads, and emerging leaders
                who want to improve how they understand themselves and others in
                high-pressure environments.
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
              Many leaders are technically skilled but emotionally unprepared
              for the complexity of leading people. This leads to communication
              breakdowns, unresolved conflict, low trust, and teams that
              underperform despite capability.
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
                <li>• Self-awareness and leadership triggers</li>
                <li>• Empathy and perspective-taking</li>
                <li>• Communication under pressure</li>
                <li>• Conflict navigation and resolution</li>
              </ul>

              <ul className="space-y-3">
                <li>• Feedback delivery and reception</li>
                <li>• Emotional regulation in leadership roles</li>
                <li>• Building trust and psychological safety</li>
                <li>• Leadership presence and influence</li>
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
                • Increased awareness of personal leadership patterns and
                triggers.
              </p>
              <p>
                • Improved communication, empathy, and relational intelligence.
              </p>
              <p>
                • Stronger ability to manage conflict with clarity and calm.
              </p>
              <p>• More grounded, emotionally mature leadership presence.</p>
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
              <p>• 1:1 Executive Coaching</p>
              <p>• Leadership development sessions (6–12 weeks)</p>
              <p>• Team workshops for EQ development</p>
              <p>• Virtual or in-person delivery</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2
              className="text-3xl font-serif mb-6"
              style={{ color: 'var(--charcoal)' }}
            >
              Lead people better by understanding people better
            </h2>

            <a
              href="https://calendly.com/tinamujera/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 rounded-lg text-white font-medium transition-all hover:scale-105 shadow-lg"
              style={{ backgroundColor: 'var(--sage-green)' }}
            >
              Book Your Session
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
