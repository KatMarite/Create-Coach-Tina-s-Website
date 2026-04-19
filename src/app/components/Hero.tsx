import { useEffect, useState } from 'react';

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
    <section id="start-here" className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left - Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1
                className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight"
                style={{ color: 'var(--charcoal)' }}
              >
                Reset. Realign. Rise.
              </h1>
              <p className="text-xl md:text-2xl font-light leading-relaxed max-w-xl" style={{ color: '#6b7280' }}>
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

        {/* As Seen / Trusted By */}
        <div className="text-center mb-20">
          <p className="text-sm font-light mb-8" style={{ color: '#6b7280' }}>As Seen & Trusted By</p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            {/* Placeholder logos - replace with actual client logos */}
            <div className="text-lg font-semibold" style={{ color: 'var(--charcoal)' }}>Corporate Clients</div>
            <div className="text-lg font-semibold" style={{ color: 'var(--charcoal)' }}>NGO Partners</div>
            <div className="text-lg font-semibold" style={{ color: 'var(--charcoal)' }}>Media Features</div>
          </div>
        </div>

        {/* Choose Your Path */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12" style={{ color: 'var(--charcoal)' }}>
            Choose Your Path
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-6">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
                  alt="Leadership coaching session"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>Leadership Coaching</h3>
              <p className="text-sm" style={{ color: '#6b7280' }}>1:1 executive coaching</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-6">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                  alt="Team corporate training"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>Corporate Training</h3>
              <p className="text-sm" style={{ color: '#6b7280' }}>Team development</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-6">
                <img
                  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80"
                  alt="Public speaking event"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold mb-2" style={{ color: '#6b7280' }}>Speaking</h3>
              <p className="text-sm" style={{ color: '#6b7280' }}>Keynote presentations</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-6">
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80"
                  alt="Youth empowerment session"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>Empower U</h3>
              <p className="text-sm" style={{ color: '#6b7280' }}>Kids & teens program</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-6">
                <img
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80"
                  alt="Women empowerment coaching"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>Authentically Woman</h3>
              <p className="text-sm" style={{ color: '#6b7280' }}>Women's empowerment</p>
            </div>
          </div>
        </div>

        {/* Lead From Within Framework */}
        <div className="bg-gray-50 p-12 rounded-2xl mb-20">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-8" style={{ color: 'var(--charcoal)' }}>
            Lead From Within
          </h2>
          <p className="text-xl text-center mb-8 max-w-3xl mx-auto" style={{ color: '#6b7280' }}>
            Your signature framework for transformational leadership
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full mx-auto mb-4 bg-white flex items-center justify-center text-[var(--sage-green)] shadow-sm">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true">
                  <path d="M12 4.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15Zm0 2a5.5 5.5 0 0 0 0 11 5.5 5.5 0 0 0 0-11Zm0 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>Self-Awareness</h3>
              <p className="text-sm" style={{ color: '#6b7280' }}>Discover your authentic leadership style</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full mx-auto mb-4 bg-white flex items-center justify-center text-[var(--sage-green)] shadow-sm">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true">
                  <path d="M12 21s-6-4.35-6-8.25S8.25 5 12 5s6 3.1 6 7.75S12 21 12 21Zm0-16.75c-1.8 0-3.5.85-4.5 2.45C6 8.35 6 9.35 6 10.25c0 3.1 3 5.75 6 5.75s6-2.65 6-5.75c0-.9 0-1.9-1.5-3.05C15.5 4.75 13.8 4.25 12 4.25Z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>Emotional Intelligence</h3>
              <p className="text-sm" style={{ color: '#6b7280' }}>Lead with empathy and wisdom</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full mx-auto mb-4 bg-white flex items-center justify-center text-[var(--sage-green)] shadow-sm">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.75a9.25 9.25 0 1 0 9.25 9.25A9.26 9.26 0 0 0 12 2.75Zm0 15.5a6.25 6.25 0 1 1 6.25-6.25A6.26 6.26 0 0 1 12 18.25Zm.5-10.75h1.5v4.5h-4.5v-1.5h3V7.5Zm3.64 4.1-1.06 1.06L15.44 14l-1.06-1.06-1.06 1.06 1.06 1.06-1.06 1.06 1.06 1.06 1.06-1.06 1.06 1.06 1.06-1.06-1.06-1.06 1.06-1.06-1.06-1.06Z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>Purpose-Driven Action</h3>
              <p className="text-sm" style={{ color: '#6b7280' }}>Create meaningful impact</p>
            </div>
          </div>
        </div>

        {/* Featured Tools */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12" style={{ color: 'var(--charcoal)' }}>
            Start with These Free Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-6">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                  alt="Weekly reset guide"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>Weekly Reset Guide</h3>
              <p className="text-sm mb-4" style={{ color: '#6b7280' }}>Start your week with intention</p>
              <button className="text-sm font-medium" style={{ color: 'var(--sage-green)' }}>Download →</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-6">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
                  alt="Confidence assessment"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>Confidence Assessment</h3>
              <p className="text-sm mb-4" style={{ color: '#6b7280' }}>Identify your strengths</p>
              <button className="text-sm font-medium" style={{ color: 'var(--sage-green)' }}>Download →</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-6">
                <img
                  src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
                  alt="Purpose journal"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>Purpose Journal</h3>
              <p className="text-sm mb-4" style={{ color: '#6b7280' }}>Clarify your life direction</p>
              <button className="text-sm font-medium" style={{ color: 'var(--sage-green)' }}>Download →</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-6">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
                  alt="Leadership toolkit"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>Leadership Toolkit</h3>
              <p className="text-sm mb-4" style={{ color: '#6b7280' }}>Essential leadership exercises</p>
              <button className="text-sm font-medium" style={{ color: 'var(--sage-green)' }}>Download →</button>
            </div>
          </div>
        </div>

        {/* Podcast Spotlight */}
        <div className="bg-gray-50 p-12 rounded-2xl mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-6" style={{ color: 'var(--charcoal)' }}>
                Faith in Action Podcast
              </h2>
              <p className="text-lg mb-6" style={{ color: '#6b7280' }}>
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
                  src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
                  alt="Podcast recording setup"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>Latest Episode: Finding Your Voice</h3>
              <p className="text-sm mb-4" style={{ color: '#6b7280' }}>How to speak up with confidence in leadership roles</p>
              <div className="flex items-center gap-4 text-sm" style={{ color: '#6b7280' }}>
                <span>45 min</span>
                <span>•</span>
                <span>2 weeks ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* Books */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12" style={{ color: 'var(--charcoal)' }}>
            Books & Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="aspect-[3/4] overflow-hidden rounded-lg mb-4 max-w-xs mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80"
                  alt="Book cover for transitions"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>Transitions</h3>
              <p className="text-sm mb-4" style={{ color: '#6b7280' }}>Navigate life's changes with purpose</p>
              <button className="px-4 py-2 border rounded-lg" style={{ borderColor: 'var(--sage-green)', color: 'var(--sage-green)' }}>
                Learn More
              </button>
            </div>
            <div className="text-center">
              <div className="aspect-[3/4] overflow-hidden rounded-lg mb-4 max-w-xs mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80"
                  alt="Book cover for NaShe"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>NaShe</h3>
              <p className="text-sm mb-4" style={{ color: '#6b7280' }}>Embrace your authentic self</p>
              <button className="px-4 py-2 border rounded-lg" style={{ borderColor: 'var(--sage-green)', color: 'var(--sage-green)' }}>
                Learn More
              </button>
            </div>
            <div className="text-center">
              <div className="aspect-[3/4] overflow-hidden rounded-lg mb-4 max-w-xs mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?auto=format&fit=crop&w=800&q=80"
                  alt="Book cover for Lead From Within"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>Lead From Within</h3>
              <p className="text-sm mb-4" style={{ color: '#6b7280' }}>Your leadership framework guide</p>
              <button className="px-4 py-2 border rounded-lg" style={{ borderColor: 'var(--sage-green)', color: 'var(--sage-green)' }}>
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12" style={{ color: 'var(--charcoal)' }}>
            Real Results, Real Lives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
                  alt="Sarah M."
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold" style={{ color: 'var(--charcoal)' }}>Sarah M.</div>
                  <div className="text-sm" style={{ color: '#6b7280' }}>Executive Director</div>
                </div>
              </div>
              <p className="text-sm italic mb-4" style={{ color: '#6b7280' }}>
                "From overwhelmed to confident leader in 6 months. Coach Tina helped me find my voice and lead with purpose."
              </p>
              <div className="text-sm font-medium" style={{ color: 'var(--sage-green)' }}>Before: Burned out → After: Leading with clarity</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80"
                  alt="Michael K."
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold" style={{ color: 'var(--charcoal)' }}>Michael K.</div>
                  <div className="text-sm" style={{ color: '#6b7280' }}>Team Lead</div>
                </div>
              </div>
              <p className="text-sm italic mb-4" style={{ color: '#6b7280' }}>
                "The corporate training transformed our team's communication and productivity."
              </p>
              <div className="text-sm font-medium" style={{ color: 'var(--sage-green)' }}>Before: Conflict → After: Collaboration</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
                  alt="Jennifer L."
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold" style={{ color: 'var(--charcoal)' }}>Jennifer L.</div>
                  <div className="text-sm" style={{ color: '#6b7280' }}>Program Manager</div>
                </div>
              </div>
              <p className="text-sm italic mb-4" style={{ color: '#6b7280' }}>
                "Authentically Woman gave me the tools to heal and step into my leadership role fully."
              </p>
              <div className="text-sm font-medium" style={{ color: 'var(--sage-green)' }}>Before: Self-doubt → After: Self-assured</div>
            </div>
          </div>
        </div>

        {/* Newsletter / Community */}
        <div className="bg-gray-50 p-12 rounded-2xl mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6" style={{ color: 'var(--charcoal)' }}>
            Get My Weekly Reset + Tools
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#6b7280' }}>
            Join thousands who start their week with intention, clarity, and practical tools for personal growth.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
            />
            <button className="px-6 py-3 rounded-lg transition-all hover:shadow-lg" style={{ backgroundColor: 'var(--sage-green)', color: 'white' }}>
              Subscribe
            </button>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6" style={{ color: 'var(--charcoal)' }}>
            Ready to Transform Your Leadership?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: '#6b7280' }}>
            Book a discovery call to discuss your goals and see if we're a great fit to work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 rounded-lg transition-all hover:shadow-xl hover:scale-105 text-lg" style={{ backgroundColor: 'var(--sage-green)', color: 'white' }}>
              Book Coach Tina
            </button>
            <button className="px-8 py-4 rounded-lg border-2 transition-all hover:bg-gray-50 text-lg" style={{ borderColor: 'var(--charcoal)', color: 'var(--charcoal)' }}>
              Corporate Enquiries
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
