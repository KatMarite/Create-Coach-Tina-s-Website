import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';

export const metadata = {
  title: 'Lead From Within Framework | Coach Tina',
  description:
    'A transformational coaching framework for leaders, professionals, entrepreneurs and high-capacity individuals ready to lead with greater self-awareness, emotional maturity and alignment.',
};

export default function Page() {
  const outcomes = [
    'Greater self-awareness and clarity around how you lead under pressure.',
    'Stronger emotional regulation, boundaries and decision-making.',
    'A practical personal leadership rhythm that supports sustainable growth.',
  ];

  const workThrough = [
    'Identity and self-awareness',
    'Emotional patterns and triggers',
    'Values and personal leadership',
    'Boundaries and communication',
    'Leadership presence',
    'Aligned execution and sustainable habits',
  ];

  const formats = [
    '1:1 executive and leadership coaching',
    'Team and leadership workshops',
    'Corporate facilitation programmes',
    'Keynotes and conference sessions',
  ];

  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <Navigation />

      <main className="flex-grow pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* Hero */}
          <section className="max-w-4xl mx-auto text-center mb-20">
            <h1
              className="text-4xl md:text-6xl font-serif mb-6"
              style={{ color: 'var(--charcoal)' }}
            >
              Lead From Within Framework
            </h1>

            <p className="text-xl font-light text-gray-600 mb-8 leading-relaxed">
              A transformational coaching framework designed to help you lead
              with greater self-awareness, emotional maturity, and alignment.
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
          </section>

          {/* Intro Section */}
          <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
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
                Who This Is For
              </h2>

              <p className="text-gray-600 font-light leading-relaxed text-lg">
                Leaders, professionals, entrepreneurs, and high-capacity
                individuals who want to lead with greater self-awareness,
                emotional maturity, and alignment.
              </p>
            </div>
          </section>

          {/* Problem It Solves */}
          <section className="max-w-4xl mx-auto mb-24">
            <h2
              className="text-3xl font-serif mb-6 text-center"
              style={{ color: 'var(--charcoal)' }}
            >
              The Problem It Solves
            </h2>

            <p className="text-lg text-gray-600 font-light leading-relaxed text-center">
              Many high performers appear successful on the outside, yet feel
              overwhelmed, emotionally reactive, disconnected from their values,
              or uncertain about how to lead sustainably. This framework helps
              you build the internal foundation needed to lead with clarity,
              confidence, and emotional intelligence.
            </p>
          </section>

          {/* What We Work Through */}
          <section className="mb-24">
            <h2
              className="text-3xl font-serif mb-10 text-center"
              style={{ color: 'var(--charcoal)' }}
            >
              What We Work Through
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {workThrough.map((item) => (
                <div
                  key={item}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
                >
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Outcomes */}
          <section className="mb-24">
            <h2
              className="text-3xl font-serif mb-10 text-center"
              style={{ color: 'var(--charcoal)' }}
            >
              Outcomes: What to Expect
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                >
                  <p className="text-gray-700 leading-relaxed">{outcome}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Format Options */}
          <section className="max-w-5xl mx-auto mb-24">
            <h2
              className="text-3xl font-serif mb-10 text-center"
              style={{ color: 'var(--charcoal)' }}
            >
              Format Options
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {formats.map((format) => (
                <div
                  key={format}
                  className="bg-gray-50 p-6 rounded-xl border border-gray-200"
                >
                  <p className="text-gray-700">{format}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section
            className="rounded-3xl px-8 py-16 text-center"
            style={{ backgroundColor: 'var(--sage-green)' }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
              Ready to Lead From Within?
            </h2>

            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              If you're ready to build the inner clarity, emotional maturity,
              and leadership rhythm needed for sustainable success, let’s begin.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/tinamujera/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-lg bg-white font-medium transition-all hover:scale-105"
                style={{ color: 'var(--sage-green)' }}
              >
                Book a Discovery Session
              </a>

              <a
                href="/contact"
                className="px-8 py-4 rounded-lg border-2 border-white text-white font-medium hover:bg-white/10 transition-all"
              >
                Contact Coach Tina
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
