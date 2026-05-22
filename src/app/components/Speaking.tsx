import { FadeIn } from './FadeIn';

const keynoteThemes = [
  'Lead From Within',
  'The Emotionally Intelligent Leader',
  'Resilience in Disruption',
  'Women in Power',
  'From Burnout to Alignment',
  'Leading Through Transition',
  'Faith, Purpose and the Courage to Become',
  'The Leadership Reset',
];

const speakingFormats = [
  'Keynotes',
  'Panels',
  'Corporate Workshops',
  'Leadership Retreats',
  "Women's Events",
  'School Parent Talks',
  'Youth Leadership Sessions',
];

export function Speaking() {
  return (
    <div className="pt-24 sm:pt-28 md:pt-32 pb-16 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-16 sm:mb-24">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div
                className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase mb-2 bg-gray-100"
                style={{ color: 'var(--sage-green)' }}
              >
                Keynote Speaker & Facilitator
              </div>

              <h1
                className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight"
                style={{ color: 'var(--charcoal)' }}
              >
                Keynotes that move hearts — and shift culture.
              </h1>

              <p
                className="text-xl font-light leading-relaxed"
                style={{ color: '#374151' }}
              >
                Book Coach Tina for transformational keynotes and workshops on
                leadership, resilience, emotional intelligence, change
                management, women in leadership, and personal growth.
              </p>

              <p
                className="text-lg font-light leading-relaxed"
                style={{ color: '#6B7280' }}
              >
                Every speaking engagement is designed to deliver more than
                inspiration. Audiences leave with language, insight, and
                practical tools they can apply immediately.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://calendly.com/tinamujera/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-lg transition-all shadow-md hover:shadow-xl text-center"
                  style={{
                    backgroundColor: 'var(--sage-green)',
                    color: 'white',
                  }}
                >
                  Enquire to Book
                </a>

                <a
                  href="/free-tools"
                  className="px-8 py-4 rounded-lg border-2 transition-all hover:bg-gray-50 text-center flex items-center justify-center"
                  style={{
                    borderColor: 'var(--charcoal)',
                    color: 'var(--charcoal)',
                  }}
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download Speaker Topics (PDF)
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] max-w-lg mx-auto overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/images/serv3.jpeg"
                  alt="Coach Tina Speaking"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Popular Keynote Themes */}
      <section className="bg-gray-50 py-16 sm:py-24 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-12">
              <h2
                className="text-3xl sm:text-4xl font-serif mb-4"
                style={{ color: 'var(--charcoal)' }}
              >
                Popular Keynote Themes
              </h2>
              <p className="text-lg font-light max-w-3xl mx-auto text-gray-600">
                Signature talks that challenge perspectives, inspire growth, and
                equip audiences with practical tools for leadership and life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keynoteThemes.map((theme, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow text-center"
                >
                  <div
                    className="w-10 h-10 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-semibold"
                    style={{ backgroundColor: 'var(--sage-green)' }}
                  >
                    {index + 1}
                  </div>
                  <h3
                    className="text-lg font-medium"
                    style={{ color: 'var(--charcoal)' }}
                  >
                    {theme}
                  </h3>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Signature Topics */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-12">
              <h2
                className="text-3xl sm:text-4xl font-serif mb-4"
                style={{ color: 'var(--charcoal)' }}
              >
                Signature Topics
              </h2>
              <p className="text-lg font-light max-w-3xl mx-auto text-gray-600">
                Thought-provoking sessions designed to create meaningful,
                measurable transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Lead From Within',
                  description:
                    'Why the most powerful leadership begins with self-awareness, emotional maturity, and inner alignment.',
                },
                {
                  title: 'Resilience in Disruption',
                  description:
                    'Practical strategies to maintain wellbeing, focus, and performance during uncertainty and change.',
                },
                {
                  title: 'Women in Power',
                  description:
                    'A transformational keynote for women stepping into leadership with confidence, clarity, and authenticity.',
                },
              ].map((topic, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <h3
                    className="text-xl font-medium mb-4"
                    style={{ color: 'var(--charcoal)' }}
                  >
                    {topic.title}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Speaking Formats */}
      <section className="bg-gray-50 py-16 sm:py-24 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-12">
              <h2
                className="text-3xl sm:text-4xl font-serif mb-4"
                style={{ color: 'var(--charcoal)' }}
              >
                Available Formats
              </h2>
              <p className="text-lg font-light max-w-3xl mx-auto text-gray-600">
                Coach Tina tailors each engagement to suit your audience,
                objectives, and event format.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {speakingFormats.map((format, index) => (
                <div
                  key={index}
                  className="bg-white px-6 py-4 rounded-xl text-center border border-gray-100 shadow-sm"
                >
                  <span
                    className="font-medium"
                    style={{ color: 'var(--charcoal)' }}
                  >
                    {format}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Past Platforms / Trusted By */}
      <section className="py-16 sm:py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-12">
              <h2
                className="text-3xl sm:text-4xl font-serif mb-4"
                style={{ color: 'var(--charcoal)' }}
              >
                Past Platforms & Trusted By
              </h2>
              <p className="text-lg font-light max-w-3xl mx-auto text-gray-600">
                Coach Tina has delivered keynotes, facilitated workshops, and
                contributed to conversations on leadership, resilience,
                emotional intelligence, and transformation across respected
                corporate, educational, and media platforms.
              </p>
            </div>

            <div className="text-center">
              <p
                className="text-sm font-light mb-6 sm:mb-8"
                style={{ color: '#374151' }}
              >
                As seen on leading platforms. Trusted by respected organisations
                and brands across South Africa and beyond.
              </p>

              <div className="flex overflow-hidden w-full gap-10 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] py-4">
                <div className="flex gap-10 animate-marquee opacity-60 items-center shrink-0">
                  <img
                    src="/images/kfc.png"
                    alt="KFC Africa"
                    className="h-10 md:h-14 object-contain grayscale hover:grayscale-0 transition-all duration-300 shrink-0"
                  />
                  <img
                    src="/images/spur.png"
                    alt="Spur Group"
                    className="h-10 md:h-14 object-contain grayscale hover:grayscale-0 transition-all duration-300 shrink-0"
                  />
                  <span className="font-serif text-lg font-medium text-gray-500 uppercase tracking-widest shrink-0">
                    EduBridge
                  </span>
                  <img
                    src="/images/truworths.png"
                    alt="Truworths"
                    className="h-6 md:h-8 object-contain grayscale hover:grayscale-0 transition-all duration-300 shrink-0"
                  />
                  <img
                    src="/images/comensa.jpg"
                    alt="COMENSA"
                    className="h-10 md:h-14 object-contain grayscale hover:grayscale-0 transition-all duration-300 shrink-0"
                  />
                  <img
                    src="/images/sabc2.png"
                    alt="SABC 2"
                    className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300 shrink-0"
                  />
                  <img
                    src="/images/soweto tv.jpg"
                    alt="Soweto TV"
                    className="h-10 md:h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300 shrink-0"
                  />
                  <img
                    src="/images/safm.png"
                    alt="SAfm"
                    className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300 shrink-0"
                  />
                  <img
                    src="/images/radio pulpit.jpg"
                    alt="Radio Pulpit"
                    className="h-10 md:h-14 object-contain grayscale hover:grayscale-0 transition-all duration-300 shrink-0"
                  />
                </div>

                <div
                  className="flex gap-10 animate-marquee opacity-60 items-center shrink-0"
                  aria-hidden="true"
                >
                  <img
                    src="/images/kfc.png"
                    alt="KFC Africa"
                    className="h-10 md:h-14 object-contain grayscale hover:grayscale-0 transition-all duration-300 shrink-0"
                  />
                  <img
                    src="/images/spur.png"
                    alt="Spur Group"
                    className="h-10 md:h-14 object-contain grayscale hover:grayscale-0 transition-all duration-300 shrink-0"
                  />
                  <span className="font-serif text-lg font-medium text-gray-500 uppercase tracking-widest shrink-0">
                    EduBridge
                  </span>
                  <img
                    src="/images/truworths.png"
                    alt="Truworths"
                    className="h-6 md:h-8 object-contain grayscale hover:grayscale-0 transition-all duration-300 shrink-0"
                  />
                  <img
                    src="/images/comensa.jpg"
                    alt="COMENSA"
                    className="h-10 md:h-14 object-contain grayscale hover:grayscale-0 transition-all duration-300 shrink-0"
                  />
                  <img
                    src="/images/sabc2.png"
                    alt="SABC 2"
                    className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300 shrink-0"
                  />
                  <img
                    src="/images/soweto tv.jpg"
                    alt="Soweto TV"
                    className="h-10 md:h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300 shrink-0"
                  />
                  <img
                    src="/images/safm.png"
                    alt="SAfm"
                    className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300 shrink-0"
                  />
                  <img
                    src="/images/radio pulpit.jpg"
                    alt="Radio Pulpit"
                    className="h-10 md:h-14 object-contain grayscale hover:grayscale-0 transition-all duration-300 shrink-0"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <FadeIn>
            <h2
              className="text-3xl sm:text-4xl font-serif mb-6"
              style={{ color: 'var(--charcoal)' }}
            >
              Ready to Create a Transformational Experience?
            </h2>
            <p className="text-lg font-light text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you're planning a conference, leadership event, school
              talk, or women’s gathering, Coach Tina brings depth, warmth, and
              practical insight that resonates long after the event ends.
            </p>
            <a
              href="https://calendly.com/tinamujera/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 rounded-lg font-medium shadow-md hover:shadow-xl transition-all"
              style={{
                backgroundColor: 'var(--sage-green)',
                color: 'white',
              }}
            >
              Book Coach Tina
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
