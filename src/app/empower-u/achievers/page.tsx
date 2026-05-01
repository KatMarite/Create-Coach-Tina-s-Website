import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';

export const metadata = {
  title: 'Empower U Achievers (Ages 13-18) | Coach Tina',
  description: 'Identity, self-leadership, and performance resilience for teens ages 13-18.',
};

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-16">
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-20 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full ct-watermark opacity-5 pointer-events-none text-center">CT</div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-serif mb-6" style={{ color: 'var(--charcoal)' }}>
              Empower U Achievers
            </h1>
            <p className="text-xl font-light text-gray-600 mb-8">
              Ages 13–18. Navigating the transition to young adulthood with clarity, unshakeable identity, and self-leadership.
            </p>
            <a
              href="https://calendly.com/tinamujera/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-lg text-white font-medium transition-all hover:scale-105 shadow-lg"
              style={{ backgroundColor: 'var(--sage-green)' }}
            >
              Book a Teen Discovery Call
            </a>
          </div>
        </section>

        {/* OUTCOMES SECTION */}
        <section className="bg-white py-16 mb-20 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif" style={{ color: 'var(--charcoal)' }}>Core Outcomes</h2>
              <p className="text-gray-500 mt-2">Equipping teens for the pressures of modern adolescence.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Identity Anchoring", desc: "Building a core sense of self that isn't easily swayed by peer pressure or social media metrics." },
                { title: "Performance Resilience", desc: "Managing academic anxiety and sports pressure through effective stress-regulation strategies." },
                { title: "Self-Leadership", desc: "Taking extreme ownership of their choices, habits, and communication with parents and peers." }
              ].map((item, i) => (
                <div key={i} className="ct-card p-8 text-center">
                  <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: 'var(--teu-yellow)' }}>
                    <span className="font-bold text-xl" style={{ color: 'var(--charcoal)' }}>{i+1}</span>
                  </div>
                  <h3 className="text-xl font-medium mb-3" style={{ color: 'var(--sage-green)' }}>{item.title}</h3>
                  <p className="text-gray-600 font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROGRAMME STRUCTURE & MEDIA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-serif mb-6" style={{ color: 'var(--charcoal)' }}>Programme Structure</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-8">
                Teens need a safe, neutral space away from parental expectations to process their world. The Achievers programme provides this psychological safety while instilling high-performance habits.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ backgroundColor: 'var(--sage-green)' }} />
                  <div>
                    <strong className="block text-gray-800">The Discovery Phase</strong>
                    <span className="text-gray-600 font-light text-sm">Identifying limiting beliefs, academic stressors, and social dynamics currently affecting the teen.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ backgroundColor: 'var(--sage-green)' }} />
                  <div>
                    <strong className="block text-gray-800">The Core Coaching Sessions</strong>
                    <span className="text-gray-600 font-light text-sm">Targeted 1:1 sessions focusing on emotional intelligence, conflict resolution, and vision building.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ backgroundColor: 'var(--sage-green)' }} />
                  <div>
                    <strong className="block text-gray-800">The Blueprint</strong>
                    <span className="text-gray-600 font-light text-sm">Leaving the programme with a tangible action plan for managing their time, emotions, and goals.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-gray-200 relative group">
              <img src="/images/empower-u.png" alt="Empower U Achievers" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all" />
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="text-center max-w-3xl mx-auto px-4 ct-card p-12 bg-white">
          <h2 className="text-3xl font-serif mb-6" style={{ color: 'var(--charcoal)' }}>Secure Their Future</h2>
          <p className="text-gray-600 mb-8">Empower your teenager to lead themselves before they lead others.</p>
          <a
            href="https://calendly.com/tinamujera/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 rounded-lg font-bold transition-all shadow-md hover:shadow-xl"
            style={{ backgroundColor: 'var(--teu-yellow)', color: 'var(--charcoal)' }}
          >
            Enquire & Book Now
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
