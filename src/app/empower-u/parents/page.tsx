import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';

export const metadata = {
  title: 'Empowering Parents | Coach Tina',
  description: 'Equipping parents to raise emotionally fit kids and break generational cycles.',
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
              Empowering Parents
            </h1>
            <p className="text-xl font-light text-gray-600 mb-8">
              Because you cannot lead your child to a place of emotional fitness if you haven't been there yourself. Break cycles. Lead from within.
            </p>
            <a
              href="https://calendly.com/tinamujera/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-lg text-white font-medium transition-all hover:scale-105 shadow-lg"
              style={{ backgroundColor: 'var(--sage-green)' }}
            >
              Book a Parent Discovery Session
            </a>
          </div>
        </section>

        {/* OUTCOMES SECTION */}
        <section className="bg-white py-16 mb-20 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif" style={{ color: 'var(--charcoal)' }}>Core Outcomes</h2>
              <p className="text-gray-500 mt-2">What happens when parents commit to their own inside-out transformation.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Cycle Breaking", desc: "Identifying and dismantling generational parenting patterns that provoke anxiety or rebellion." },
                { title: "Co-Regulation", desc: "Learning how to manage your own nervous system so you can act as an anchor for your child's storms." },
                { title: "Aligned Authority", desc: "Parenting from a place of connected authority rather than fear-based control." }
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
              <img src="/images/meet1.jpg" alt="Parent Coaching" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
            </div>
            <div>
              <h2 className="text-3xl font-serif mb-6" style={{ color: 'var(--charcoal)' }}>Programme Structure</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-8">
                Parenting coaching is offered as both 1:1 intensive sessions and group masterclasses. It is designed to run parallel to your child's Empower U journey or as a standalone intervention.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ backgroundColor: 'var(--sage-green)' }} />
                  <div>
                    <strong className="block text-gray-800">The Mirror Effect</strong>
                    <span className="text-gray-600 font-light text-sm">Understanding how your child's behavior is often reflecting your own unresolved emotional states.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ backgroundColor: 'var(--sage-green)' }} />
                  <div>
                    <strong className="block text-gray-800">Communication Frameworks</strong>
                    <span className="text-gray-600 font-light text-sm">Scripts and strategies for talking *with* your child rather than *at* them.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ backgroundColor: 'var(--sage-green)' }} />
                  <div>
                    <strong className="block text-gray-800">Ongoing Integration</strong>
                    <span className="text-gray-600 font-light text-sm">Practical homework and check-ins to ensure the new family dynamic becomes permanent.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="text-center max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-serif mb-6" style={{ color: 'var(--charcoal)' }}>Transform Your Home</h2>
          <p className="text-gray-600 mb-8">It starts with you. Equip yourself to lead your family with wisdom and grace.</p>
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
