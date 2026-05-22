import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';

export const metadata = {
  title: 'High-Functioning Anxiety Reset | Coach Tina',
  description:
    'Support for high achievers experiencing overwhelm, pressure, and emotional burnout.',
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
              High-Functioning Anxiety Reset
            </h1>

            <p className="text-xl font-light text-gray-600 mb-8">
              For high achievers who are holding it together on the outside —
              but feel overwhelmed, overthinking, and emotionally exhausted
              inside.
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
                High-performing individuals, leaders, professionals, and
                entrepreneurs who appear capable and successful externally, but
                internally feel constant pressure, overthinking, emotional
                fatigue, and difficulty switching off.
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
              High-functioning anxiety often hides behind productivity,
              perfectionism, and success. It looks like being “on top of things”
              — but feels like internal chaos, constant pressure, and never
              being able to fully rest or switch off.
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
                <li>• Nervous system awareness and regulation</li>
                <li>• Overthinking and mental overload</li>
                <li>• Perfectionism and control patterns</li>
                <li>• Pressure to constantly perform</li>
              </ul>

              <ul className="space-y-3">
                <li>• Boundaries and emotional capacity</li>
                <li>• Rest without guilt</li>
                <li>• Emotional regulation tools for daily life</li>
                <li>• Identity beyond achievement</li>
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
                • Clear awareness of the hidden patterns driving anxiety and
                over-performance.
              </p>
              <p>
                • Practical tools to regulate stress and emotional overload in
                daily life.
              </p>
              <p>
                • A healthier rhythm that supports both productivity and peace.
              </p>
              <p>
                • Increased emotional stability, presence, and internal calm.
              </p>
            </div>
          </div>

          {/* DISCLAIMER */}
          <div className="max-w-4xl mx-auto mb-16 bg-amber-50 border border-amber-200 rounded-xl p-6">
            <p className="text-sm text-gray-700 font-light leading-relaxed">
              <strong>Important:</strong> This coaching programme is for
              personal development, reflection, and support. It is not a
              substitute for therapy, psychological treatment, diagnosis, or
              medical care.
            </p>
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
              <p>• 1:1 Coaching Intensive (6–10 sessions)</p>
              <p>• Weekly or bi-weekly support sessions</p>
              <p>• Online or in-person (where available)</p>
              <p>• Practical tools + guided reflection exercises</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2
              className="text-3xl font-serif mb-6"
              style={{ color: 'var(--charcoal)' }}
            >
              You don’t have to keep holding it all together alone
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
