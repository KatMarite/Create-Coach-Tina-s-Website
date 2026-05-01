import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';

export const metadata = {
  title: 'Coaching Framework | Empower U Kids Coaching',
  description: 'Our methodology, expected outcomes, and how our coaching sessions work.',
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
              The Coaching Framework
            </h1>
            <p className="text-xl font-light text-gray-600 mb-8">
              A proven, inside-out methodology that creates lasting behavioral change rather than temporary compliance.
            </p>
            <a
              href="https://calendly.com/tinamujera/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-lg text-white font-medium transition-all hover:scale-105 shadow-lg"
              style={{ backgroundColor: 'var(--sage-green)' }}
            >
              Book a Discovery Session
            </a>
          </div>
        </section>

        {/* METHODOLOGY SECTION */}
        <section className="bg-white py-16 mb-20 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif" style={{ color: 'var(--charcoal)' }}>Our Methodology</h2>
              <p className="text-gray-500 mt-2">How we facilitate real transformation.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Neuro-Linguistic Programming (NLP)", desc: "Using advanced NLP techniques to rewire limiting beliefs and build empowering new neural pathways." },
                { title: "Faith-Rooted Identity", desc: "Anchoring children and teens in a strong, divine sense of self-worth that exists independent of their performance." },
                { title: "Systemic Integration", desc: "Treating the child as part of a whole family system, ensuring the home environment supports the changes." }
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

        {/* HOW SESSIONS WORK & MEDIA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-gray-200 relative group">
              <img src="/images/meet1.jpg" alt="Coaching Session Framework" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
            </div>
            <div>
              <h2 className="text-3xl font-serif mb-6" style={{ color: 'var(--charcoal)' }}>How the Sessions Work</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-8">
                Every journey is unique, but our process provides a reliable structure for success, ensuring parents are kept in the loop while maintaining the child's psychological safety.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ backgroundColor: 'var(--sage-green)' }} />
                  <div>
                    <strong className="block text-gray-800">1. Intake & Assessment (Parent + Coach)</strong>
                    <span className="text-gray-600 font-light text-sm">We begin by diagnosing the core issues, setting clear goals, and aligning on the desired outcomes.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ backgroundColor: 'var(--sage-green)' }} />
                  <div>
                    <strong className="block text-gray-800">2. The 1:1 Intensive (Child + Coach)</strong>
                    <span className="text-gray-600 font-light text-sm">A safe, confidential space where the child works through the methodology using age-appropriate tools.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ backgroundColor: 'var(--sage-green)' }} />
                  <div>
                    <strong className="block text-gray-800">3. The Integration Loop (Family)</strong>
                    <span className="text-gray-600 font-light text-sm">Regular feedback cycles where parents are equipped with the specific language and tools needed to support the child at home.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="text-center max-w-3xl mx-auto px-4 ct-card p-12 bg-white">
          <h2 className="text-3xl font-serif mb-6" style={{ color: 'var(--charcoal)' }}>Experience the Framework</h2>
          <p className="text-gray-600 mb-8">Ready to see how this methodology can transform your child's trajectory?</p>
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
