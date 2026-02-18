import { Users, Presentation, Award } from 'lucide-react';

export function TrainingFacilitation() {
  const offerings = [
    {
      icon: Presentation,
      title: 'Workshops & Seminars',
      description: 'Interactive learning experiences designed to inspire, educate, and empower your team or organization.',
      features: ['Half-day & full-day formats', 'Customized content', 'Up to 50 participants'],
    },
    {
      icon: Users,
      title: 'Team Development',
      description: 'Build high-performing teams through facilitated sessions focused on communication, collaboration, and trust.',
      features: ['Team assessments', 'Action planning', 'Follow-up support'],
    },
    {
      icon: Award,
      title: 'Leadership Training',
      description: 'Develop confident, authentic leaders who inspire others and drive organizational success.',
      features: ['Leadership frameworks', 'Practical tools', 'Ongoing coaching'],
    },
  ];

  return (
    <section id="training & facilitation" className="py-24 lg:py-32" style={{ backgroundColor: '#fafafa' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full text-sm font-light tracking-wide mb-6" style={{ backgroundColor: 'var(--sage-green)', color: 'white' }}>
            Training & Facilitation
          </div>
          <h2
            className="font-serif text-4xl md:text-5xl leading-tight mb-6"
            style={{ color: 'var(--charcoal)' }}
          >
            Empower Your Team to Excel
          </h2>
          <p className="text-lg font-light" style={{ color: '#6b7280' }}>
            Dynamic training programs and facilitation services that drive real results for organizations and teams
          </p>
        </div>

        {/* Image */}
        <div className="mb-16">
          <div className="relative aspect-[21/9] max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1768796370577-c6e8b708b980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0cmFpbmluZyUyMHdvcmtzaG9wJTIwZmFjaWxpdGF0aW9ufGVufDF8fHx8MTc3MTQyNDEzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Training and Facilitation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {offerings.map((offering, index) => {
            const Icon = offering.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:shadow-xl transition-all"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'var(--sage-green)', opacity: 0.1 }}
                >
                  <Icon className="w-7 h-7" style={{ color: 'var(--sage-green)' }} />
                </div>

                <h3 className="font-serif text-2xl mb-4" style={{ color: 'var(--charcoal)' }}>
                  {offering.title}
                </h3>

                <p className="text-base font-light mb-6 leading-relaxed" style={{ color: '#6b7280' }}>
                  {offering.description}
                </p>

                <ul className="space-y-3">
                  {offering.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm font-light" style={{ color: '#4b5563' }}>
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--sage-green)' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            className="px-8 py-4 rounded-none transition-all hover:shadow-xl hover:scale-105"
            style={{ backgroundColor: 'var(--charcoal)', color: 'white' }}
          >
            Request a Proposal
          </button>
        </div>
      </div>
    </section>
  );
}
