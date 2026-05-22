import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';

export const metadata = {
  title: 'Women in Leadership | Coach Tina',
  description:
    'Leadership development for women stepping into clarity, confidence, and influence.',
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
              Women in Leadership
            </h1>

            <p className="text-xl font-light text-gray-600 mb-8">
              Lead without shrinking, over-explaining, or performing — and step
              fully into your voice, influence, and authority.
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
                Women in corporate, business, ministry, entrepreneurship, or
                community leadership who are ready to lead with confidence,
                presence, and emotional intelligence — without shrinking
                themselves or overworking to be seen.
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
              Many capable women struggle not with ability — but with
              visibility, voice, and confidence. They overthink, over-explain,
              and over-perform to be taken seriously, while internally battling
              imposter syndrome, self-doubt, and emotional fatigue.
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
                <li>• Voice, visibility, and confidence</li>
                <li>• Imposter syndrome and self-doubt</li>
                <li>• Boundaries and emotional overextension</li>
                <li>• Leadership identity and presence</li>
              </ul>

              <ul className="space-y-3">
                <li>• Emotional intelligence in leadership</li>
                <li>• Influence without force or performance</li>
                <li>• Communication and executive presence</li>
                <li>• Identity alignment and authenticity</li>
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
                • Stronger leadership identity rooted in clarity and confidence.
              </p>
              <p>
                • Practical tools for communication, influence, and
                boundary-setting.
              </p>
              <p>• Reduced self-doubt and increased internal authority.</p>
              <p>• A renewed sense of presence without losing authenticity.</p>
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
              <p>• 1:1 Coaching (6–10 sessions)</p>
              <p>• Leadership intensives for high-performance women</p>
              <p>• Virtual or in-person sessions</p>
              <p>• Reflection tools and leadership exercises included</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2
              className="text-3xl font-serif mb-6"
              style={{ color: 'var(--charcoal)' }}
            >
              Step into your full leadership presence
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
