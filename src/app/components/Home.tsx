import { useEffect, useState } from 'react';
import { FadeIn } from './FadeIn';

const heroImages = [
  { src: '/images/hero-2.jpg', alt: 'Coach Tina leading a coaching session' },
  { src: '/images/hero-1.jpg', alt: 'Professional coaching consultation' },
  { src: '/images/hero-3.jpeg', alt: 'Coach Tina portrait' },
];

export function Home() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((current) => (current + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-24 sm:pt-28 md:pt-32 pb-12">
      {/* HERO SECTION */}
      <section id="hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 md:py-20 w-full">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 md:mb-20">
            {/* Left - Text Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight" style={{ color: 'var(--charcoal)' }}>
                  Reset. Realign. Rise.
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed max-w-xl" style={{ color: '#374151' }}>
                  Transformational coaching and practical tools for clarity, confidence, and wholeness—backed by 13+ years of commercial leadership experience, a Master's in Commerce, and accredited NLP mastery.
                </p>
                <p className="text-base sm:text-lg font-medium italic" style={{ color: 'var(--sage-green)' }}>
                  If you’ve been functioning… but not flourishing—this is your reset point.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="text-center px-8 py-4 rounded-lg transition-all hover:shadow-xl hover:scale-105 font-medium" style={{ backgroundColor: 'var(--teu-yellow)', color: 'var(--charcoal)' }}>
                  Book Your Discovery Session
                </a>
                <a href="/transformation-hub" className="text-center px-8 py-4 rounded-lg border-2 transition-all hover:bg-gray-50" style={{ borderColor: 'var(--charcoal)', color: 'var(--charcoal)' }}>
                  Explore the Transformation Hub
                </a>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative lg:order-last">
              <div className="relative aspect-[3/4] max-w-md mx-auto lg:max-w-none overflow-hidden rounded-2xl shadow-2xl">
                <div className="absolute -top-6 -left-6 w-full h-full rounded-2xl" style={{ backgroundColor: 'var(--sage-green)', opacity: 0.1 }} />
                {heroImages.map((image, index) => (
                  <img
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      index === activeImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Authority Strip */}
        <FadeIn>
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <p className="text-sm font-light mb-6 sm:mb-8" style={{ color: '#374151' }}>
              As seen on leading platforms. Trusted by respected organisations and brands across South Africa and beyond.
            </p>
            <div className="flex justify-center items-center gap-6 sm:gap-10 md:gap-14 flex-wrap opacity-60 font-serif text-lg font-medium text-gray-500 uppercase tracking-widest">
              <span>KFC Africa</span>
              <span>Spur Group</span>
              <span>EduBridge</span>
              <span>Truworths</span>
              <span>COMENSA</span>
              <span>SABC 2</span>
              <span>Soweto TV</span>
              <span>SAfm</span>
              <span>Radio Pulpit</span>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* SECTION 1 — What I Do */}
      <section className="bg-gray-50 py-16 sm:py-20 md:py-24 border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-8" style={{ color: 'var(--charcoal)' }}>
              I help high-capacity people stop living in performance mode.
            </h2>
            <div className="space-y-6 text-lg sm:text-xl font-light mb-10" style={{ color: '#374151' }}>
              <p>I work with:</p>
              <ul className="list-disc text-left inline-block space-y-4">
                <li><span className="font-medium">Leaders and teams</span> who need culture transformation, EQ and resilience.</li>
                <li><span className="font-medium">High achievers in transitions</span> who need clarity and alignment.</li>
                <li><span className="font-medium">Women and families</span> ready to heal deeply and live whole.</li>
              </ul>
              <p className="mt-8 font-medium">This is not hype.</p>
              <p>It’s inside-out transformation—practical systems, faith-rooted clarity, and measurable movement.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/transformation-hub" className="px-8 py-4 rounded-lg transition-all hover:shadow-xl hover:scale-105" style={{ backgroundColor: 'var(--sage-green)', color: 'white' }}>
                See Services
              </a>
              <a href="/contact" className="px-8 py-4 rounded-lg border-2 transition-all hover:bg-white bg-transparent" style={{ borderColor: 'var(--charcoal)', color: 'var(--charcoal)' }}>
                Request a Corporate Proposal
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 2 — Transformation From the Inside Out */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 md:py-24">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-square max-w-md mx-auto overflow-hidden rounded-full shadow-xl border-8 border-gray-50">
                <img src="/images/meet1.jpg" alt="Coach Tina Portrait" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <p className="text-xl font-medium uppercase tracking-wide" style={{ color: 'var(--sage-green)' }}>
                True leadership isn’t a role; it’s a frequency.
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight" style={{ color: 'var(--charcoal)' }}>
                Transformation From the Inside Out
              </h2>
              <div className="space-y-4 text-lg font-light" style={{ color: '#374151' }}>
                <p>
                  Most people try to change their lives from the outside in—chasing goals while ignoring the silent wounds that keep them stuck.
                </p>
                <p>
                  Sustainable change happens when your internal operating system aligns with your divine orientation.
                </p>
                <p className="font-medium pt-4">
                  We don’t just set goals.
                  <br />
                  We build the systems, identity, and emotional fitness to sustain them.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="/contact" className="px-6 py-3 rounded-lg transition-all shadow-md hover:shadow-xl text-center" style={{ backgroundColor: 'var(--charcoal)', color: 'white' }}>
                  Start With a Discovery Call
                </a>
                <a href="/free-tools" className="px-6 py-3 rounded-lg border transition-all hover:bg-gray-50 text-center" style={{ borderColor: 'var(--sage-green)', color: 'var(--sage-green)' }}>
                  Download the Free Reset Guide
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* SECTION 3 — Before & After */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif mb-4" style={{ color: 'var(--charcoal)' }}>
                What Changes
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
                <span className="text-gray-400 line-through text-lg">Burned out, overwhelmed, and leading from a place of performance</span>
                <span className="mx-4 text-gray-300">→</span>
                <span className="text-lg font-medium" style={{ color: 'var(--sage-green)' }}>Leading with radical self-awareness, clarity, and sustainable systems</span>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
                <span className="text-gray-400 line-through text-lg">Navigating a career transition with disorientation and fear</span>
                <span className="mx-4 text-gray-300">→</span>
                <span className="text-lg font-medium" style={{ color: 'var(--sage-green)' }}>Divine orientation, aligned to purpose, and walking in unshakeable confidence</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="px-8 py-4 rounded-lg transition-all shadow-md hover:shadow-xl text-center" style={{ backgroundColor: 'var(--sage-green)', color: 'white' }}>
                Book a Session
              </a>
              <a href="/shop" className="px-8 py-4 rounded-lg border-2 transition-all hover:bg-gray-50 text-center" style={{ borderColor: 'var(--charcoal)', color: 'var(--charcoal)' }}>
                Explore ‘Transitions’ (Book)
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 4 — Featured Work */}
      <section className="bg-gray-50 py-16 sm:py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif mb-4" style={{ color: 'var(--charcoal)' }}>
                Featured Work
              </h2>
              <p className="text-lg" style={{ color: '#374151' }}>Start with the tool that matches your season:</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">
                <img src="/images/book5.jpeg" alt="Transitions Book" className="w-full h-64 object-cover object-top" />
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2">Transitions</h3>
                  <p className="text-gray-600">From disorientation to divine orientation.</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">
                <img src="/images/book3.png" alt="NaShe Book" className="w-full h-64 object-cover object-top" />
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2">NaShe</h3>
                  <p className="text-gray-600">Healing, wholeness and becoming.</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">
                <img src="/images/book4.jpeg" alt="Workbooks" className="w-full h-64 object-cover object-top" />
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2">Workbooks + Resources</h3>
                  <p className="text-gray-600">Tools for leadership, identity and resilience.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/shop" className="px-8 py-4 rounded-lg transition-all shadow-md hover:shadow-xl text-center" style={{ backgroundColor: 'var(--charcoal)', color: 'white' }}>
                Visit the Shop
              </a>
              <a href="/media" className="px-8 py-4 rounded-lg border-2 transition-all hover:bg-white text-center" style={{ borderColor: 'var(--sage-green)', color: 'var(--sage-green)' }}>
                Listen to Faith in Action
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 5 — How to Work With Me */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif mb-4" style={{ color: 'var(--charcoal)' }}>
                How to Work With Me
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              <div className="p-6 rounded-xl border-2 hover:shadow-lg transition-all text-center" style={{ borderColor: 'var(--sage-green)' }}>
                <h3 className="text-xl font-medium mb-2">1:1 Coaching</h3>
                <p className="text-gray-500">(60 mins)</p>
              </div>
              <div className="p-6 rounded-xl border-2 hover:shadow-lg transition-all text-center" style={{ borderColor: 'var(--sage-green)' }}>
                <h3 className="text-xl font-medium mb-2">Corporate Facilitation</h3>
                <p className="text-gray-500">(OCM, EQ, wellness, leadership)</p>
              </div>
              <div className="p-6 rounded-xl border-2 hover:shadow-lg transition-all text-center" style={{ borderColor: 'var(--sage-green)' }}>
                <h3 className="text-xl font-medium mb-2">Healing Circles</h3>
                <p className="text-gray-500">(Authentically Woman)</p>
              </div>
              <div className="p-6 rounded-xl border-2 hover:shadow-lg transition-all text-center" style={{ borderColor: 'var(--sage-green)' }}>
                <h3 className="text-xl font-medium mb-2">Empower U Academy</h3>
                <p className="text-gray-500">(Children + teens)</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="px-8 py-4 rounded-lg transition-all shadow-md hover:shadow-xl text-center" style={{ backgroundColor: 'var(--sage-green)', color: 'white' }}>
                Book a Discovery Session
              </a>
              <a href="/contact" className="px-8 py-4 rounded-lg border-2 transition-all hover:bg-gray-50 text-center" style={{ borderColor: 'var(--charcoal)', color: 'var(--charcoal)' }}>
                Inquire for Corporate Facilitation
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 6 — Closing Invitation */}
      <section className="bg-charcoal py-20 text-center" style={{ backgroundColor: 'var(--charcoal)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12 text-white">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-6 leading-tight text-white">
              You don’t need to push harder.<br /> You need to realign.
            </h2>
            <p className="text-xl font-light mb-10 text-gray-300">
              If you’re ready, let’s start.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl text-center font-bold" style={{ backgroundColor: 'var(--teu-yellow)', color: 'var(--charcoal)' }}>
                Book Now
              </a>
              <a href="/contact" className="px-8 py-4 rounded-lg border-2 transition-all hover:bg-white/10 text-center text-white border-white">
                Contact Me
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
