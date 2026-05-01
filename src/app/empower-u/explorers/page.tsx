import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';

export const metadata = {
  title: 'Empower U Explorers (Ages 6-12) | Coach Tina',
  description: 'Building emotional intelligence, resilience, and foundational confidence for children ages 6-12.',
};

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-16">
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-serif mb-6" style={{ color: 'var(--charcoal)' }}>
              Empower U Explorers
            </h1>
            <p className="text-xl font-light text-gray-600 mb-8">
              Ages 6–12. Giving children the language to understand their emotions and the tools to navigate their world with unshakeable confidence.
            </p>
            <a
              href="https://calendly.com/tinamujera/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-lg text-white font-medium transition-all hover:scale-105 shadow-lg"
              style={{ backgroundColor: 'var(--sage-green)' }}
            >
              Book a Parent Discovery Call
            </a>
          </div>
        </section>

        {/* OUTCOMES SECTION */}
        <section className="bg-white py-16 mb-20 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif" style={{ color: 'var(--charcoal)' }}>Core Outcomes</h2>
              <p className="text-gray-500 mt-2">What your child will gain from the Explorers programme.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Emotional Literacy", desc: "Moving from tantrums and frustration to articulating exactly how they feel." },
                { title: "Resilience Building", desc: "Learning how to bounce back from playground setbacks and academic challenges." },
                { title: "Self-Regulation", desc: "Practical tools to calm their nervous system when 'big emotions' hit." }
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
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-gray-200 relative group">
              <img src="/images/empower.png" alt="Empower U Kids" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
            </div>
            <div>
              <h2 className="text-3xl font-serif mb-6" style={{ color: 'var(--charcoal)' }}>Programme Structure</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-8">
                The Explorers programme is designed to be highly interactive, deeply engaging, and safe. We use storytelling, role-play, and practical exercises that children can easily grasp and apply at home or school.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ backgroundColor: 'var(--sage-green)' }} />
                  <div>
                    <strong className="block text-gray-800">Initial Assessment</strong>
                    <span className="text-gray-600 font-light text-sm">A joint session with parents to understand the child's unique emotional landscape.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ backgroundColor: 'var(--sage-green)' }} />
                  <div>
                    <strong className="block text-gray-800">1:1 Coaching Modules</strong>
                    <span className="text-gray-600 font-light text-sm">4 to 8 tailored sessions focusing on self-awareness, emotional control, and social dynamics.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ backgroundColor: 'var(--sage-green)' }} />
                  <div>
                    <strong className="block text-gray-800">Parent Integration</strong>
                    <span className="text-gray-600 font-light text-sm">Post-session feedback loops equipping parents to reinforce the tools at home.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="text-center max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-serif mb-6" style={{ color: 'var(--charcoal)' }}>Set Your Child Up for Success</h2>
          <p className="text-gray-600 mb-8">Because emotional intelligence is the greatest advantage you can give them.</p>
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
