import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';

export const metadata = {
  title: 'Workplace Wellness & Resilience | Coach Tina',
  description:
    'Corporate wellness programs focused on resilience, emotional fitness, and sustainable performance.',
};

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <Navigation />

      <main className="flex-grow pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* HERO SECTION */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1
              className="text-4xl md:text-6xl font-serif mb-6"
              style={{ color: 'var(--charcoal)' }}
            >
              Workplace Wellness & Resilience
            </h1>

            <p className="text-xl font-light text-gray-600 mb-8">
              Supporting teams to thrive under pressure through emotional
              fitness, resilience, and sustainable performance systems.
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

          {/* CONTENT GRID */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-24">
            {/* IMAGE */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/meet1.jpg"
                alt="Coach Tina facilitating transformational leadership coaching"
                className="w-full h-[450px] object-cover"
              />
            </div>

            {/* CONTENT */}
            <div>
              {/* WHO IT IS FOR */}
              <h2
                className="text-3xl font-serif mb-4"
                style={{ color: 'var(--charcoal)' }}
              >
                Who this is for
              </h2>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Teams, organisations, and departments experiencing burnout, high
                pressure environments, low morale, change fatigue, or emotional
                disconnection in the workplace.
              </p>

              {/* PROBLEM */}
              <h2
                className="text-2xl font-serif mb-4 mt-10"
                style={{ color: 'var(--charcoal)' }}
              >
                The problem it solves
              </h2>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Many workplaces prioritise output over wellbeing, leading to
                burnout, disengagement, conflict, and declining team
                performance. This programme restores balance between
                productivity and emotional sustainability.
              </p>

              {/* WHAT WE WORK THROUGH */}
              <h2
                className="text-2xl font-serif mb-4 mt-10"
                style={{ color: 'var(--charcoal)' }}
              >
                What we work through
              </h2>
              <ul className="space-y-3 text-gray-700 font-light">
                <li>• Stress awareness and burnout prevention patterns</li>
                <li>• Emotional regulation in high-pressure environments</li>
                <li>• Psychological safety and trust within teams</li>
                <li>• Resilience building and recovery tools</li>
                <li>• Energy management and sustainable performance habits</li>
                <li>• Rebuilding connection and team cohesion</li>
              </ul>

              {/* OUTCOMES */}
              <h2
                className="text-2xl font-serif mb-4 mt-10"
                style={{ color: 'var(--charcoal)' }}
              >
                Outcomes / what to expect
              </h2>
              <ul className="space-y-3 text-gray-700 font-light">
                <li>• Early awareness of burnout and stress signals</li>
                <li>• Practical tools for emotional regulation</li>
                <li>• Healthier communication and reduced workplace tension</li>
                <li>• Improved morale and team engagement</li>
                <li>• Sustainable performance without emotional exhaustion</li>
              </ul>

              {/* FORMAT */}
              <h2
                className="text-2xl font-serif mb-4 mt-10"
                style={{ color: 'var(--charcoal)' }}
              >
                Format options
              </h2>
              <ul className="space-y-3 text-gray-700 font-light">
                <li>• Corporate workshops (half-day or full-day sessions)</li>
                <li>• Team wellness & resilience training programmes</li>
                <li>• Leadership support and coaching sessions</li>
                <li>• Organisational wellness consulting</li>
              </ul>

              {/* DISCLAIMER */}
              <div className="mt-10 p-6 rounded-xl bg-gray-100 border border-gray-200">
                <p className="text-sm text-gray-600 font-light">
                  This programme supports workplace wellbeing and resilience. It
                  does not replace medical care, diagnosis, or clinical therapy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
