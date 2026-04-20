import { useEffect, useState } from 'react';
import { FadeIn } from './FadeIn';

const heroImages = [
  {
    src: '/images/hero-2.jpg',
    alt: 'Coach Tina leading a coaching session',
  },
  {
    src: '/images/hero-1.jpg',
    alt: 'Professional coaching consultation',
  },
  {
    src: '/images/hero-3.jpeg',
    alt: 'Coach Tina portrait',
  },
];

export function Hero() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((current) => (current + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="start-here" className="min-h-screen flex items-center pt-24 sm:pt-28 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 md:py-20 w-full">
        {/* Hero Section */}
        <FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 md:mb-20">
          {/* Left - Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1
                className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight"
                style={{ color: 'var(--charcoal)' }}
              >
                Reset. Realign. Rise.
              </h1>
              <p className="text-base sm:text-xl md:text-2xl font-light leading-relaxed max-w-xl" style={{ color: '#374151' }}>
                Transformational leadership coaching + practical tools for clarity, confidence & wholeness.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                className="px-8 py-4 rounded-lg transition-all hover:shadow-xl hover:scale-105"
                style={{ backgroundColor: 'var(--sage-green)', color: 'white' }}
              >
                Book a Call
              </button>
              <button
                className="px-8 py-4 rounded-lg border-2 transition-all hover:bg-gray-50"
                style={{ borderColor: 'var(--charcoal)', color: 'var(--charcoal)' }}
              >
                Get Free Tools
              </button>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative lg:order-last">
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:max-w-none overflow-hidden rounded-2xl shadow-2xl">
              <div
                className="absolute -top-6 -left-6 w-full h-full rounded-2xl"
                style={{ backgroundColor: 'var(--sage-green)', opacity: 0.1 }}
              />
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


        {/* As Seen / Trusted By */}
        <FadeIn>
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <p className="text-sm font-light mb-6 sm:mb-8" style={{ color: '#374151' }}>As Seen & Trusted By</p>
          <div className="flex justify-center items-center gap-6 sm:gap-10 md:gap-16 flex-wrap opacity-60">
            <img 
              src="/images/logos/truworths.png" 
              alt="Truworths" 
              className="h-6 md:h-8 object-contain grayscale hover:grayscale-0 transition-all duration-300" 
            />
            <img 
              src="/images/logos/comensa.jpeg" 
              alt="COMENSA" 
              className="h-10 md:h-14 object-contain grayscale hover:grayscale-0 transition-all duration-300" 
            />
            <img 
              src="/images/logos/kfc.png" 
              alt="KFC" 
              className="h-10 md:h-14 object-contain grayscale hover:grayscale-0 transition-all duration-300" 
            />
            <img 
              src="/images/logos/unjani-clinic.png" 
              alt="Unjani Clinic" 
              className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300" 
            />
          </div>
        </div>
        </FadeIn>




        {/* Meet Coach Tina */}
        <FadeIn>
        <div className="bg-gray-50 p-6 sm:p-10 md:p-16 rounded-2xl mb-12 sm:mb-16 md:mb-20 shadow-sm border border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            {/* Image Side */}
            <div className="relative">
              <div className="aspect-[4/5] max-w-md mx-auto lg:max-w-none overflow-hidden rounded-xl shadow-lg relative z-10">
                <img
                  src="/images/meet1.jpg"
                  alt="Coach Tina Portrait"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div 
                className="absolute top-6 -left-6 md:-left-8 w-full h-full rounded-xl opacity-20 z-0 hidden md:block" 
                style={{ backgroundColor: 'var(--sage-green)' }}
              />
            </div>
            
            {/* Text Side */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-4 sm:mb-6 leading-tight" style={{ color: 'var(--charcoal)' }}>
                Meet Coach Tina
              </h2>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg font-light leading-relaxed" style={{ color: '#374151' }}>
                <p>
                  With over a decade of experience bridging the gap between personal wholeness and professional excellence, I am deeply committed to helping leaders find their authentic voice.
                </p>
                <p>
                  My journey began where many of yours are now: navigating complex transitions, seeking purpose beyond the paycheck, and striving to build a legacy grounded in emotional intelligence and faith.
                </p>
                <p>
                  Today, I partner with executives, corporate teams, and driven individuals to <span className="font-medium italic" style={{ color: 'var(--charcoal)' }}>reset</span> their mindsets, <span className="font-medium italic" style={{ color: 'var(--charcoal)' }}>realign</span> with their core values, and <span className="font-medium italic" style={{ color: 'var(--charcoal)' }}>rise</span> to their fullest potential.
                </p>
              </div>

            </div>
          </div>
        </div>
        </FadeIn>


        {/* Services Section */}
        <FadeIn>
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4" style={{ color: 'var(--charcoal)' }}>
              Core Services
            </h2>
            <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: '#374151' }}>
              Tailored coaching and training designed to elevate your leadership, team, and organization.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Leadership Coaching */}
            <div className="bg-white group rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden flex flex-col">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/serv1.jpeg"
                  alt="Leadership coaching session"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>Leadership Coaching</h3>
                <p className="text-sm font-light flex-1 mb-4" style={{ color: '#374151' }}>1:1 executive coaching designed to unlock your authentic leadership style and strategic vision.</p>
                <div className="font-medium text-sm flex items-center transition-colors hover:text-gray-900" style={{ color: 'var(--sage-green)' }}>
                  Learn More <span className="ml-1">→</span>
                </div>
              </div>
            </div>

            {/* Corporate Training */}
            <div className="bg-white group rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden flex flex-col">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/serv2.jpeg"
                  alt="Team corporate training"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>Corporate Training</h3>
                <p className="text-sm font-light flex-1 mb-4" style={{ color: '#374151' }}>Interactive workshops for team development, emotional intelligence, and alignment.</p>
                <div className="font-medium text-sm flex items-center transition-colors hover:text-gray-900" style={{ color: 'var(--sage-green)' }}>
                  Learn More <span className="ml-1">→</span>
                </div>
              </div>
            </div>

            {/* Speaking */}
            <div className="bg-white group rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden flex flex-col">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/serv3.jpeg"
                  alt="Public speaking event"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>Speaking</h3>
                <p className="text-sm font-light flex-1 mb-4" style={{ color: '#374151' }}>Dynamic and transformative keynote presentations for conferences and events.</p>
                <div className="font-medium text-sm flex items-center transition-colors hover:text-gray-900" style={{ color: 'var(--sage-green)' }}>
                  Learn More <span className="ml-1">→</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </FadeIn>


        {/* Empower U Feature */}
        <FadeIn>
        <div className="p-6 sm:p-10 md:p-16 rounded-2xl mb-12 sm:mb-16 md:mb-20 shadow-lg text-white" style={{ backgroundColor: 'var(--sage-green)' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase mb-2 bg-white/20">
                Youth Program
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif leading-tight">
                Empower U: Equipping the Next Generation
              </h2>
              <p className="text-base sm:text-lg text-white/90 font-light leading-relaxed">
                Empower U is a specialized coaching program designed for kids and teens. We provide young minds with the essential tools to build confidence, develop emotional intelligence, and lead themselves before they lead others.
              </p>
              <ul className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
                <li className="flex items-start text-sm sm:text-base">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Build unshakeable self-confidence & self-worth</span>
                </li>
                <li className="flex items-start text-sm sm:text-base">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Develop healthy emotional regulation strategies</span>
                </li>
                <li className="flex items-start text-sm sm:text-base">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Learn essential soft skills for the modern world</span>
                </li>
              </ul>
              <div className="pt-4 sm:pt-8">
                <button 
                  className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg border-2 font-medium transition-all hover:bg-white/10 text-sm sm:text-base" 
                  style={{ borderColor: 'white', color: 'white' }}
                >
                  Discover Empower U
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative z-10">
                <img
                  src="/images/empower-u.png"
                  alt="Happy kids participating in Empower U program"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
        </FadeIn>


        {/* Podcast Spotlight */}
        <FadeIn>
        <div className="bg-gray-50 p-6 sm:p-10 md:p-12 rounded-2xl mb-12 sm:mb-16 md:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4 sm:mb-6" style={{ color: 'var(--charcoal)' }}>
                Faith in Action Podcast
              </h2>
              <p className="text-lg mb-6" style={{ color: '#374151' }}>
                Practical conversations about leadership, purpose, and living out your faith in everyday life.
              </p>
              <div className="flex gap-4 mb-6">
                <span className="px-3 py-1 bg-white rounded-full text-sm" style={{ color: 'var(--charcoal)' }}>Confidence</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm" style={{ color: 'var(--charcoal)' }}>Leadership</span>
                <span className="px-3 py-1 bg-white rounded-full text-sm" style={{ color: 'var(--charcoal)' }}>Relationships</span>
              </div>
              <button className="px-6 py-3 rounded-lg transition-all hover:shadow-lg" style={{ backgroundColor: 'var(--sage-green)', color: 'white' }}>
                Listen Now
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="aspect-square overflow-hidden rounded-lg mb-4">
                <img
                  src="/images/faith.png"
                  alt="Podcast recording setup"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>Latest Episode: Finding Your Voice</h3>
              <p className="text-sm mb-4" style={{ color: '#374151' }}>How to speak up with confidence in leadership roles</p>
              <div className="flex items-center gap-4 text-sm" style={{ color: '#374151' }}>
                <span>45 min</span>
                <span>•</span>
                <span>2 weeks ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* Books */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-center mb-8 sm:mb-12" style={{ color: 'var(--charcoal)' }}>
            Books & Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="aspect-[3/4] overflow-hidden rounded-lg mb-4 max-w-xs mx-auto">
                <img
                  src="/images/book5.jpeg"
                  alt="Book cover for transitions"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>Nashe-With-God</h3>
              <p className="text-sm mb-4" style={{ color: '#374151' }}>Navigate life's changes with purpose</p>
              <button className="px-4 py-2 border rounded-lg" style={{ borderColor: 'var(--sage-green)', color: 'var(--sage-green)' }}>
                Learn More
              </button>
            </div>
            <div className="text-center">
              <div className="aspect-[3/4] overflow-hidden rounded-lg mb-4 max-w-xs mx-auto">
                <img
                  src="/images/book3.png"
                  alt="Book cover for NaShe"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>AteBelle Children’s Book</h3>
              <p className="text-sm mb-4" style={{ color: '#374151' }}>Embrace your authentic self</p>
              <button className="px-4 py-2 border rounded-lg" style={{ borderColor: 'var(--sage-green)', color: 'var(--sage-green)' }}>
                Learn More
              </button>
            </div>
            <div className="text-center">
              <div className="aspect-[3/4] overflow-hidden rounded-lg mb-4 max-w-xs mx-auto">
                <img
                  src="/images/book4.jpeg"
                  alt="Book cover for Lead From Within"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>Authentic Marketing Mastery</h3>
              <p className="text-sm mb-4" style={{ color: '#374151' }}>Your leadership framework guide</p>
              <button className="px-4 py-2 border rounded-lg" style={{ borderColor: 'var(--sage-green)', color: 'var(--sage-green)' }}>
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-center mb-8 sm:mb-12" style={{ color: 'var(--charcoal)' }}>
            Real Results, Real Lives
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full mr-4 flex items-center justify-center text-white font-semibold text-lg" style={{ backgroundColor: 'var(--sage-green)' }}>
                  SM
                </div>
                <div>
                  <div className="font-semibold" style={{ color: 'var(--charcoal)' }}>Sarah M.</div>
                  <div className="text-sm" style={{ color: '#374151' }}>Executive Director</div>
                </div>
              </div>
              <p className="text-sm italic mb-4" style={{ color: '#374151' }}>
                &quot;From overwhelmed to confident leader in 6 months. Coach Tina helped me find my voice and lead with purpose.&quot;
              </p>
              <div className="text-sm font-medium" style={{ color: 'var(--sage-green)' }}>Before: Burned out → After: Leading with clarity</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full mr-4 flex items-center justify-center text-white font-semibold text-lg" style={{ backgroundColor: 'var(--charcoal)' }}>
                  MK
                </div>
                <div>
                  <div className="font-semibold" style={{ color: 'var(--charcoal)' }}>Michael K.</div>
                  <div className="text-sm" style={{ color: '#374151' }}>Team Lead</div>
                </div>
              </div>
              <p className="text-sm italic mb-4" style={{ color: '#374151' }}>
                &quot;The corporate training transformed our team&apos;s communication and productivity.&quot;
              </p>
              <div className="text-sm font-medium" style={{ color: 'var(--sage-green)' }}>Before: Conflict → After: Collaboration</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full mr-4 flex items-center justify-center text-white font-semibold text-lg" style={{ backgroundColor: '#6b7280' }}>
                  JL
                </div>
                <div>
                  <div className="font-semibold" style={{ color: 'var(--charcoal)' }}>Jennifer L.</div>
                  <div className="text-sm" style={{ color: '#374151' }}>Program Manager</div>
                </div>
              </div>
              <p className="text-sm italic mb-4" style={{ color: '#374151' }}>
                &quot;Authentically Woman gave me the tools to heal and step into my leadership role fully.&quot;
              </p>
              <div className="text-sm font-medium" style={{ color: 'var(--sage-green)' }}>Before: Self-doubt → After: Self-assured</div>
            </div>
          </div>
        </div>
        </FadeIn>


        {/* Newsletter / Community */}
        <FadeIn>
        <div className="bg-gray-50 p-6 sm:p-10 md:p-12 rounded-2xl mb-12 sm:mb-16 md:mb-20 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4 sm:mb-6" style={{ color: 'var(--charcoal)' }}>
            Get My Weekly Reset + Tools
          </h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto" style={{ color: '#374151' }}>
            Join thousands who start their week with intention, clarity, and practical tools for personal growth.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 sm:gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
            />
            <button className="px-6 py-3 rounded-lg transition-all hover:shadow-lg whitespace-nowrap" style={{ backgroundColor: 'var(--sage-green)', color: 'white' }}>
              Subscribe
            </button>
          </div>
        </div>
        </FadeIn>


        {/* Final CTA */}
        <FadeIn>
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4 sm:mb-6" style={{ color: 'var(--charcoal)' }}>
            Ready to Transform Your Leadership?
          </h2>
          <p className="text-base sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto" style={{ color: '#374151' }}>
            Book a discovery call to discuss your goals and see if we're a great fit to work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all hover:shadow-xl hover:scale-105 text-base sm:text-lg" style={{ backgroundColor: 'var(--sage-green)', color: 'white' }}>
              Book Coach Tina
            </button>
            <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg border-2 transition-all hover:bg-gray-50 text-base sm:text-lg" style={{ borderColor: 'var(--charcoal)', color: 'var(--charcoal)' }}>
              Corporate Enquiries
            </button>
          </div>
        </div>
        </FadeIn>
      </div>
    </section>
  );
}
