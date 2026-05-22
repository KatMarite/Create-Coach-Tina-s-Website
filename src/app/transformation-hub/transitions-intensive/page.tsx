import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';

export const metadata = {
  title: 'Transitions Intensive | Coach Tina',
  description:
    'Navigate identity shifts, grief, and life transitions with clarity and grounded support.',
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
              Transitions Intensive
            </h1>

            <p className="text-xl font-light text-gray-600 mb-8">
              Navigate identity shifts, grief, and life transitions with
              clarity, grounding, and direction.
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

          {/* WHO IT IS FOR + IMAGE */}
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
                Individuals navigating a life, career, leadership, relationship,
                or identity transition who feel disoriented, emotionally
                stretched, or uncertain about what comes next.
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

            <p className="text-gray-700 font-light leading-relaxed text-lg text-center">
              Most people try to push through transition without language for
              what they are actually experiencing. This leads to confusion,
              emotional fatigue, grief suppression, and decision paralysis. This
              work helps you name the season so you can move through it with
              clarity instead of resistance.
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
                <li>• Disorientation and emotional overwhelm</li>
                <li>• Grief and letting go</li>
                <li>• Identity shifts and self-concept rebuilding</li>
                <li>• Decision-making under uncertainty</li>
              </ul>

              <ul className="space-y-3">
                <li>• Faith, purpose, and internal grounding</li>
                <li>• Emotional release and regulation</li>
                <li>• Clarity around next steps</li>
                <li>• Rebuilding direction and confidence</li>
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
              <p>• Language for the season you are in.</p>
              <p>
                • Clarity on what needs to be released, rebuilt, or realigned.
              </p>
              <p>• A practical 30–90 day transition map for your next steps.</p>
              <p>• Emotional grounding and reduced internal chaos.</p>
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
              <p>• 1:1 Coaching Intensive (6–12 sessions)</p>
              <p>• Weekly or bi-weekly sessions</p>
              <p>• Online or in-person (where available)</p>
              <p>• Reflection tools + guided exercises included</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2
              className="text-3xl font-serif mb-6"
              style={{ color: 'var(--charcoal)' }}
            >
              Ready to find clarity in your transition?
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
