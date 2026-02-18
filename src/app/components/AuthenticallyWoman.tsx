import { Heart, Sparkles, Users } from 'lucide-react';

export function AuthenticallyWoman() {
  const pillars = [
    {
      icon: Heart,
      title: 'Self-Discovery',
      description: 'Explore who you are beneath societal expectations and embrace your authentic self.',
    },
    {
      icon: Sparkles,
      title: 'Empowerment',
      description: 'Cultivate confidence, set boundaries, and step into your power unapologetically.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Connect with like-minded women on a shared journey of growth and transformation.',
    },
  ];

  return (
    <section id="authentically woman" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
          {/* Left - Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full text-sm font-light tracking-wide" style={{ backgroundColor: 'var(--sage-green)', color: 'white' }}>
              For Women
            </div>

            <h2
              className="font-serif text-4xl md:text-5xl leading-tight"
              style={{ color: 'var(--charcoal)' }}
            >
              Authentically Woman
            </h2>

            <p className="text-xl font-light leading-relaxed" style={{ color: '#4b5563' }}>
              A sacred space for women to shed expectations, embrace their truth, and step into their power.
            </p>

            <div className="space-y-4 text-base font-light leading-relaxed" style={{ color: '#6b7280' }}>
              <p>
                Authentically Woman is a transformative program designed specifically for women ready to break free from limiting beliefs, silence their inner critic, and live authentically on their own terms.
              </p>
              <p>
                Through intimate group coaching, powerful reflection exercises, and a supportive sisterhood, you'll reconnect with your authentic self and create a life that honors who you truly are.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 mt-8">
              <h4 className="font-serif text-lg mb-4" style={{ color: 'var(--charcoal)' }}>This Program is For You If:</h4>
              <ul className="space-y-3">
                {[
                  'You\'re tired of people-pleasing and ready to prioritize yourself',
                  'You want to discover who you are beyond your roles and responsibilities',
                  'You\'re ready to set boundaries and honor your needs',
                  'You crave authentic connection with other growth-minded women',
                  'You\'re committed to showing up as your true self',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm font-light" style={{ color: '#4b5563' }}>
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--sage-green)' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                className="px-8 py-4 rounded-none transition-all hover:shadow-xl hover:scale-105"
                style={{ backgroundColor: 'var(--sage-green)', color: 'white' }}
              >
                Join the Waitlist
              </button>
              <button
                className="px-8 py-4 rounded-none border-2 transition-all hover:bg-gray-50"
                style={{ borderColor: 'var(--charcoal)', color: 'var(--charcoal)' }}
              >
                Download Info Guide
              </button>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative lg:order-last">
            <div className="relative aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1720874129553-1d2e66076b16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRoZW50aWMlMjB3b21hbiUyMGxlYWRlcnNoaXB8ZW58MXx8fHwxNzcxNDI0MTM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Authentically Woman"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div
              className="absolute -top-6 -left-6 w-40 h-40 rounded-full opacity-10"
              style={{ backgroundColor: 'var(--sage-green)' }}
            />
          </div>
        </div>

        {/* Three Pillars */}
        <div>
          <h3
            className="font-serif text-3xl text-center mb-12"
            style={{ color: 'var(--charcoal)' }}
          >
            Three Pillars of Transformation
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="text-center"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ backgroundColor: 'var(--sage-green)', opacity: 0.1 }}
                  >
                    <Icon className="w-8 h-8" style={{ color: 'var(--sage-green)' }} />
                  </div>

                  <h4 className="font-serif text-2xl mb-4" style={{ color: 'var(--charcoal)' }}>
                    {pillar.title}
                  </h4>

                  <p className="text-base font-light leading-relaxed max-w-xs mx-auto" style={{ color: '#6b7280' }}>
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
