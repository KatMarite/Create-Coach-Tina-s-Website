import { Sparkles, Users2, Briefcase, Heart, CheckCircle2 } from 'lucide-react';

export function Coaching() {
  const coachingTypes = [
    {
      icon: Sparkles,
      title: 'Transformational Coaching',
      description: 'For executives, career changers, and aspiring leaders ready to make a significant shift.',
    },
    {
      icon: Users2,
      title: 'Group Coaching & Masterminds',
      description: 'Tailored sessions for corporate teams or women in leadership to grow together.',
    },
    {
      icon: Briefcase,
      title: 'Career Coaching',
      description: 'Support in navigating career transitions, discovering passion, and showing up powerfully.',
    },
    {
      icon: Heart,
      title: 'Authentically Woman Healing Circle',
      description: 'A safe space for women to reconnect with their truth, power, and voice.',
    },
  ];

  const techniques = [
    'GROW models',
    'StrengthsFinder profiling',
    'NLP reframing',
    'Future Self visualization',
    'Accountability systems',
  ];

  return (
    <section id="coaching" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
          {/* Left - Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full text-sm font-light tracking-wide" style={{ backgroundColor: 'var(--sage-green)', color: 'white' }}>
              Coaching
            </div>

            <h2
              className="font-serif text-4xl md:text-5xl leading-tight"
              style={{ color: 'var(--charcoal)' }}
            >
              Transform Your Life Through Personalized Coaching
            </h2>

            <div className="space-y-4 text-lg font-light leading-relaxed" style={{ color: '#4b5563' }}>
              <p>
                Coaching is a powerful partnership that helps you gain clarity, overcome obstacles, and achieve your most important goals. Through our work together, you'll develop the mindset, strategies, and confidence to create lasting transformation.
              </p>
              <p>
                Whether you're navigating a major life transition, seeking to elevate your leadership, or ready to step into your full potential, I'm here to guide and support you every step of the way.
              </p>
            </div>

            <div className="pt-6">
              <button
                className="px-8 py-4 rounded-none transition-all hover:shadow-xl hover:scale-105"
                style={{ backgroundColor: 'var(--sage-green)', color: 'white' }}
              >
                Schedule Discovery Call
              </button>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative lg:order-last">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1745970649913-2edb9dca4f74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvYWNoaW5nJTIwc2Vzc2lvbiUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzE0MjQxMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Coaching Session"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Coaching Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {coachingTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:shadow-xl transition-all h-full"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'var(--sage-green)', opacity: 0.1 }}
                >
                  <Icon className="w-7 h-7" style={{ color: 'var(--sage-green)' }} />
                </div>

                <h3 className="font-serif text-xl mb-4" style={{ color: 'var(--charcoal)' }}>
                  {type.title}
                </h3>

                <p className="text-sm font-light leading-relaxed" style={{ color: '#6b7280' }}>
                  {type.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Techniques Section */}
        <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3
                className="font-serif text-3xl mb-6"
                style={{ color: 'var(--charcoal)' }}
              >
                Our Proven Techniques
              </h3>
              <p className="text-lg font-light mb-8" style={{ color: '#6b7280' }}>
                We use a blend of evidence-based methodologies and intuitive guidance to support your growth journey, ensuring you have the right tools for every challenge.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {techniques.map((tech, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--sage-green)' }} />
                    <span className="font-light text-base" style={{ color: '#4b5563' }}>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-64 lg:h-full min-h-[300px] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBtZWV0aW5nJTIwd29ya3Nob3B8ZW58MXx8fHwxNzc4ODc3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Coaching Techniques"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
