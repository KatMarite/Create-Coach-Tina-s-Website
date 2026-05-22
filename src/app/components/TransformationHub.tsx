import { FadeIn } from './FadeIn';

export function TransformationHub() {
  return (
    <div className="pt-24 sm:pt-28 md:pt-32 pb-16 bg-white min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-16 sm:mb-24 text-center">
        <FadeIn>
          <h1
            className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight mb-6"
            style={{ color: 'var(--charcoal)' }}
          >
            The Transformation Hub
          </h1>

          <p
            className="text-xl sm:text-2xl font-light max-w-3xl mx-auto mb-6"
            style={{ color: '#374151' }}
          >
            The Transformation Hub is where inner work becomes practical
            movement.
          </p>

          <p className="text-lg font-light max-w-3xl mx-auto mb-16 text-gray-600">
            Whether you are leading a team, navigating a personal transition,
            rebuilding after emotional heaviness, or seeking clarity in your
            next season — this is where we begin the work of realignment.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h2
              className="text-2xl sm:text-3xl font-serif mb-6"
              style={{ color: 'var(--charcoal)' }}
            >
              Which doorway is for you?
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Corporate Leadership */}
          <FadeIn>
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all h-full flex flex-col text-left">
              <h2
                className="text-2xl font-serif mb-4"
                style={{ color: 'var(--charcoal)' }}
              >
                Choose Corporate Leadership if:
              </h2>

              <p className="text-gray-600 mb-4">
                Best for HR leaders, executives, founders, school leaders, and
                teams navigating change, culture shifts, burnout, or performance
                pressure.
              </p>

              <p className="text-gray-500 mb-6 text-sm">
                Focus: emotional intelligence, leadership development,
                resilience, organisational change management, and team
                alignment.
              </p>
              <a
                href="/corporate-leadership"
                className="inline-block px-6 py-3 rounded-lg transition-all hover:bg-gray-200 bg-white border border-gray-200 text-center font-medium w-full"
                style={{ color: 'var(--charcoal)' }}
              >
                Explore Corporate Leadership
              </a>
            </div>
          </FadeIn>

          {/* Life & Purpose */}
          <FadeIn>
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all h-full flex flex-col text-left">
              <h2
                className="text-2xl font-serif mb-4"
                style={{ color: 'var(--charcoal)' }}
              >
                Choose Life & Purpose if:
              </h2>

              <p className="text-gray-600 mb-4">
                You are personally navigating transition, burnout, identity
                questions, career shifts, emotional fatigue or a sense that your
                life needs deeper alignment.
              </p>

              <p className="text-gray-500 mb-6 text-sm">
                Focus: clarity, confidence, emotional patterns, decision-making,
                healing, and alignment with purpose.
              </p>
              <a
                href="/life-and-purpose"
                className="inline-block px-6 py-3 rounded-lg transition-all hover:bg-gray-200 bg-white border border-gray-200 text-center font-medium w-full"
                style={{ color: 'var(--charcoal)' }}
              >
                Explore Life & Purpose
              </a>
            </div>
          </FadeIn>

          {/* Healing Circles */}
          <FadeIn>
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all h-full flex flex-col text-left">
              <h2
                className="text-2xl font-serif mb-4"
                style={{ color: 'var(--charcoal)' }}
              >
                Choose Healing Circles if:
              </h2>

              <p className="text-gray-600 mb-4">
                You need a safe, faith-led space for honest conversation,
                restoration, sisterhood, emotional release and rebuilding.
              </p>

              <p className="text-gray-500 mb-6 text-sm">
                Focus: guided reflection, emotional release, sisterhood, faith
                integration, and inner rebuilding.
              </p>
              <a
                href="/healing-circles"
                className="inline-block px-6 py-3 rounded-lg transition-all hover:bg-gray-200 bg-white border border-gray-200 text-center font-medium w-full"
                style={{ color: 'var(--charcoal)' }}
              >
                Explore Healing Circles
              </a>
            </div>
          </FadeIn>
        </div>

        <FadeIn>
          <div className="mt-20 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/tinamujera/30min"
              className="px-8 py-4 rounded-lg transition-all shadow-md hover:shadow-xl text-center"
              style={{ backgroundColor: 'var(--sage-green)', color: 'white' }}
            >
              Book a Discovery Session
            </a>
            <a
              href="/contact"
              className="px-8 py-4 rounded-lg border-2 transition-all hover:bg-gray-50 text-center"
              style={{
                borderColor: 'var(--charcoal)',
                color: 'var(--charcoal)',
              }}
            >
              Inquire for Corporate Facilitation
            </a>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
