import { FadeIn } from './FadeIn';

export function CorporateLeadership() {
  return (
    <div className="pt-24 sm:pt-28 md:pt-32 pb-16 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-16 sm:mb-24 text-center">
        <FadeIn>
          <div
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase mb-6 bg-gray-100"
            style={{ color: 'var(--sage-green)' }}
          >
            Corporate Leadership (B2B)
          </div>

          <h1
            className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight mb-8"
            style={{ color: 'var(--charcoal)' }}
          >
            Culture transformation for modern teams.
          </h1>

          <p
            className="text-xl sm:text-2xl font-medium mb-6"
            style={{ color: 'var(--sage-green)' }}
          >
            If you want better performance, start with better people systems.
          </p>

          <p
            className="text-lg font-light max-w-3xl mx-auto mb-10"
            style={{ color: '#374151' }}
          >
            I work with leaders and teams navigating pressure, transition, or
            culture fatigue—building psychological safety, emotional
            intelligence, and clear execution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 rounded-lg transition-all shadow-md hover:shadow-xl text-center"
              style={{ backgroundColor: 'var(--sage-green)', color: 'white' }}
            >
              Request a Corporate Proposal
            </a>

            <a
              href="https://calendly.com/tinamujera/30min"
              className="px-8 py-4 rounded-lg border-2 transition-all hover:bg-gray-50 text-center"
              style={{
                borderColor: 'var(--charcoal)',
                color: 'var(--charcoal)',
              }}
            >
              Book a Corporate Discovery Call
            </a>
          </div>
        </FadeIn>
      </section>

      {/* Signature Workshops */}
      <section className="bg-gray-50 py-16 sm:py-24 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <FadeIn>
            <h2
              className="text-3xl sm:text-4xl font-serif mb-12 text-center"
              style={{ color: 'var(--charcoal)' }}
            >
              Signature Workshops & Programmes
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* OCM */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3
                  className="text-xl font-medium mb-3"
                  style={{ color: 'var(--charcoal)' }}
                >
                  Organisational Change Management
                </h3>

                <p className="text-gray-600 font-light mb-4">
                  Navigating organisational transitions with clarity, alignment,
                  and emotional intelligence.
                </p>

                <div className="text-sm text-gray-700 space-y-3">
                  <p>
                    <span className="font-medium">Best for:</span> Teams
                    navigating restructuring, new leadership, culture shifts, or
                    uncertainty.
                  </p>
                  <p>
                    <span className="font-medium">Typical format:</span>{' '}
                    Diagnostic sessions, leadership alignment workshops, and
                    facilitated change interventions.
                  </p>
                  <p>
                    <span className="font-medium">Core outcomes:</span> Improved
                    change readiness, clearer communication, stronger emotional
                    buy-in, and practical team alignment.
                  </p>
                  <p>
                    <span className="font-medium">Available as:</span> Keynote,
                    half-day, full-day, multi-session programme, or
                    organisational retreat.
                  </p>
                </div>
              </div>

              {/* EQ */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3
                  className="text-xl font-medium mb-3"
                  style={{ color: 'var(--charcoal)' }}
                >
                  Emotional Intelligence for Leaders
                </h3>

                <p className="text-gray-600 font-light mb-4">
                  Developing self-awareness, empathy, and emotional mastery for
                  modern leadership.
                </p>

                <div className="text-sm text-gray-700 space-y-3">
                  <p>
                    <span className="font-medium">Best for:</span> Managers and
                    executives who need to lead with clarity, empathy, and
                    emotional maturity.
                  </p>
                  <p>
                    <span className="font-medium">Typical format:</span>{' '}
                    Interactive workshops, reflective exercises, and applied
                    leadership coaching.
                  </p>
                  <p>
                    <span className="font-medium">Core outcomes:</span> Stronger
                    self-awareness, improved conflict handling, better trust,
                    and enhanced team communication.
                  </p>
                  <p>
                    <span className="font-medium">Available as:</span> Keynote,
                    half-day, full-day, or leadership development series.
                  </p>
                </div>
              </div>

              {/* Women in Leadership */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3
                  className="text-xl font-medium mb-3"
                  style={{ color: 'var(--charcoal)' }}
                >
                  Women in Leadership
                </h3>

                <p className="text-gray-600 font-light mb-4">
                  Empowering women to lead with confidence, authority, and
                  authenticity.
                </p>

                <div className="text-sm text-gray-700 space-y-3">
                  <p>
                    <span className="font-medium">Best for:</span> Women in
                    corporate, entrepreneurship, ministry, or community
                    leadership roles.
                  </p>
                  <p>
                    <span className="font-medium">Typical format:</span>{' '}
                    Leadership labs, group coaching, and reflective development
                    sessions.
                  </p>
                  <p>
                    <span className="font-medium">Core outcomes:</span> Stronger
                    leadership identity, increased confidence, improved
                    communication, and authentic executive presence.
                  </p>
                  <p>
                    <span className="font-medium">Available as:</span> Workshop
                    series, keynote, or leadership retreat module.
                  </p>
                </div>
              </div>

              {/* Wellness */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3
                  className="text-xl font-medium mb-3"
                  style={{ color: 'var(--charcoal)' }}
                >
                  Workplace Wellness & Resilience
                </h3>

                <p className="text-gray-600 font-light mb-4">
                  Building emotionally healthy, resilient, and sustainable
                  high-performing teams.
                </p>

                <div className="text-sm text-gray-700 space-y-3">
                  <p>
                    <span className="font-medium">Best for:</span> Teams
                    experiencing burnout, pressure, or change fatigue.
                  </p>
                  <p>
                    <span className="font-medium">Typical format:</span>{' '}
                    Wellness workshops, resilience training, and team reflection
                    sessions.
                  </p>
                  <p>
                    <span className="font-medium">Core outcomes:</span> Improved
                    stress awareness, emotional regulation tools, and stronger
                    team connection.
                  </p>
                  <p>
                    <span className="font-medium">Available as:</span> Workshop
                    series or organisational rollout programme.
                  </p>
                </div>
              </div>

              {/* Communication */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3
                  className="text-xl font-medium mb-3"
                  style={{ color: 'var(--charcoal)' }}
                >
                  Team Communication & Collaboration
                </h3>

                <p className="text-gray-600 font-light mb-4">
                  Strengthening psychological safety and improving communication
                  systems.
                </p>

                <div className="text-sm text-gray-700 space-y-3">
                  <p>
                    <span className="font-medium">Best for:</span> Teams
                    struggling with miscommunication or low trust.
                  </p>
                  <p>
                    <span className="font-medium">Typical format:</span>{' '}
                    Interactive workshops and communication mapping sessions.
                  </p>
                  <p>
                    <span className="font-medium">Core outcomes:</span> Improved
                    dialogue, stronger collaboration, and increased
                    psychological safety.
                  </p>
                  <p>
                    <span className="font-medium">Available as:</span> Half-day
                    or full-day team intervention.
                  </p>
                </div>
              </div>

              {/* Retreats */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3
                  className="text-xl font-medium mb-3"
                  style={{ color: 'var(--charcoal)' }}
                >
                  Leadership Retreat Facilitation
                </h3>

                <p className="text-gray-600 font-light mb-4">
                  Deep alignment experiences for leadership teams in transition
                  or growth.
                </p>

                <div className="text-sm text-gray-700 space-y-3">
                  <p>
                    <span className="font-medium">Best for:</span> Leadership
                    teams needing strategic reset or alignment.
                  </p>
                  <p>
                    <span className="font-medium">Typical format:</span>{' '}
                    Off-site immersive facilitation with reflection and strategy
                    work.
                  </p>
                  <p>
                    <span className="font-medium">Core outcomes:</span> Renewed
                    vision alignment, stronger cohesion, and clearer strategic
                    direction.
                  </p>
                  <p>
                    <span className="font-medium">Available as:</span> 1–3 day
                    leadership retreat.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
        <FadeIn>
          <h2
            className="text-3xl sm:text-4xl font-serif mb-12 text-center"
            style={{ color: 'var(--charcoal)' }}
          >
            How It Works
          </h2>

          <div className="space-y-8">
            <p className="text-gray-600 text-center font-light">
              Discovery → Design → Facilitation → Impact Review
            </p>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
