export function Hero() {
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
                className="px-8 py-4 rounded-none transition-all hover:shadow-xl hover:scale-105"
                style={{ backgroundColor: 'var(--sage-green)', color: 'white' }}
              >
                Book a Call
              </button>
              <button
                className="px-8 py-4 rounded-none border-2 transition-all hover:bg-gray-50"
                style={{ borderColor: 'var(--charcoal)', color: 'var(--charcoal)' }}
              >
                Get Free Tools
              </button>
            </div>

            <div className="flex gap-8 pt-8">
              <div>
                <div className="text-3xl font-serif mb-1" style={{ color: 'var(--sage-green)' }}>
                  500+
                </div>
                <div className="text-sm font-light" style={{ color: '#6b7280' }}>
                  Clients Coached
                </div>
              </div>
              <div className="w-px" style={{ backgroundColor: '#e5e7eb' }} />
              <div>
                <div className="text-3xl font-serif mb-1" style={{ color: 'var(--sage-green)' }}>
                  12+
                </div>
                <div className="text-sm font-light" style={{ color: '#6b7280' }}>
                  Years Experience
                </div>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative lg:order-last">
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:max-w-none">
              <div
                className="absolute -top-6 -left-6 w-full h-full rounded-2xl"
                style={{ backgroundColor: 'var(--sage-green)', opacity: 0.1 }}
              />
              <img
                src="https://images.unsplash.com/photo-1756699197303-e2badc2ae6df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsaWZlJTIwY29hY2glMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTQyMzcyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Coach Tina"
                className="relative rounded-2xl shadow-2xl object-cover w-full h-full"
              />
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
              <h3 className="font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>Leadership Coaching</h3>
              <p className="text-sm" style={{ color: '#6b7280' }}>1:1 executive coaching</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>Corporate Training</h3>
              <p className="text-sm" style={{ color: '#6b7280' }}>Team development</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="font-semibold mb-2" style={{ color: '#6b7280' }}>Speaking</h3>
              <p className="text-sm" style={{ color: '#6b7280' }}>Keynote presentations</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>Empower U</h3>
              <p className="text-sm" style={{ color: '#6b7280' }}>Kids & teens program</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
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
              <div className="w-12 h-12 rounded-full mx-auto mb-4" style={{ backgroundColor: 'var(--sage-green)' }}></div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>Self-Awareness</h3>
              <p className="text-sm" style={{ color: '#6b7280' }}>Discover your authentic leadership style</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full mx-auto mb-4" style={{ backgroundColor: 'var(--sage-green)' }}></div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>Emotional Intelligence</h3>
              <p className="text-sm" style={{ color: '#6b7280' }}>Lead with empathy and wisdom</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full mx-auto mb-4" style={{ backgroundColor: 'var(--sage-green)' }}></div>
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
              <h3 className="font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>Weekly Reset Guide</h3>
              <p className="text-sm mb-4" style={{ color: '#6b7280' }}>Start your week with intention</p>
              <button className="text-sm font-medium" style={{ color: 'var(--sage-green)' }}>Download →</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>Confidence Assessment</h3>
              <p className="text-sm mb-4" style={{ color: '#6b7280' }}>Identify your strengths</p>
              <button className="text-sm font-medium" style={{ color: 'var(--sage-green)' }}>Download →</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>Purpose Journal</h3>
              <p className="text-sm mb-4" style={{ color: '#6b7280' }}>Clarify your life direction</p>
              <button className="text-sm font-medium" style={{ color: 'var(--sage-green)' }}>Download →</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
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
              <button className="px-6 py-3 rounded-none transition-all hover:shadow-lg" style={{ backgroundColor: 'var(--sage-green)', color: 'white' }}>
                Listen Now
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="aspect-square bg-gray-200 rounded-lg mb-4"></div>
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
              <div className="aspect-[3/4] bg-gray-200 rounded-lg mb-4 max-w-xs mx-auto"></div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>Transitions</h3>
              <p className="text-sm mb-4" style={{ color: '#6b7280' }}>Navigate life's changes with purpose</p>
              <button className="px-4 py-2 border rounded-none" style={{ borderColor: 'var(--sage-green)', color: 'var(--sage-green)' }}>
                Learn More
              </button>
            </div>
            <div className="text-center">
              <div className="aspect-[3/4] bg-gray-200 rounded-lg mb-4 max-w-xs mx-auto"></div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>NaShe</h3>
              <p className="text-sm mb-4" style={{ color: '#6b7280' }}>Embrace your authentic self</p>
              <button className="px-4 py-2 border rounded-none" style={{ borderColor: 'var(--sage-green)', color: 'var(--sage-green)' }}>
                Learn More
              </button>
            </div>
            <div className="text-center">
              <div className="aspect-[3/4] bg-gray-200 rounded-lg mb-4 max-w-xs mx-auto"></div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--charcoal)' }}>Lead From Within</h3>
              <p className="text-sm mb-4" style={{ color: '#6b7280' }}>Your leadership framework guide</p>
              <button className="px-4 py-2 border rounded-none" style={{ borderColor: 'var(--sage-green)', color: 'var(--sage-green)' }}>
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
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
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
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
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
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
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
              className="flex-1 px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-gray-500"
            />
            <button className="px-6 py-3 rounded-none transition-all hover:shadow-lg" style={{ backgroundColor: 'var(--sage-green)', color: 'white' }}>
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
            <button className="px-8 py-4 rounded-none transition-all hover:shadow-xl hover:scale-105 text-lg" style={{ backgroundColor: 'var(--sage-green)', color: 'white' }}>
              Book Coach Tina
            </button>
            <button className="px-8 py-4 rounded-none border-2 transition-all hover:bg-gray-50 text-lg" style={{ borderColor: 'var(--charcoal)', color: 'var(--charcoal)' }}>
              Corporate Enquiries
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
