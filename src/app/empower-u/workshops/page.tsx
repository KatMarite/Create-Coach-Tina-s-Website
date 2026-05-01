import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';

export const metadata = {
  title: 'Workshops & Programmes | Coach Tina',
  description: 'Interactive workshops for schools, holiday programmes, and parent-child bonding.',
};

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-16">
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-20 relative">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase mb-6 bg-white shadow-sm" style={{ color: 'var(--sage-green)' }}>
              Group Impact
            </div>
            <h1 className="text-4xl md:text-6xl font-serif mb-6" style={{ color: 'var(--charcoal)' }}>
              Workshops & Programmes
            </h1>
            <p className="text-xl font-light text-gray-600 mb-8">
              High-energy, high-impact group interventions designed for schools, holiday camps, and parent-child connection.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 rounded-lg text-white font-medium transition-all hover:scale-105 shadow-lg"
              style={{ backgroundColor: 'var(--sage-green)' }}
            >
              Request a Workshop Proposal
            </a>
          </div>
        </section>

        {/* OUTCOMES SECTION */}
        <section className="bg-white py-16 mb-20 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif" style={{ color: 'var(--charcoal)' }}>Workshop Offerings</h2>
              <p className="text-gray-500 mt-2">Tailored group experiences for collective transformation.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "School Programmes", desc: "Anti-bullying, leadership development, and emotional intelligence modules integrated into the school curriculum." },
                { title: "Holiday Camps", desc: "Immersive multi-day experiences where children build resilience through team challenges and reflection." },
                { title: "Parent-Child Workshops", desc: "Bridging the gap. Interactive sessions that give parents and children a shared language for their emotions." }
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
              <h2 className="text-3xl font-serif mb-6" style={{ color: 'var(--charcoal)' }}>How We Facilitate</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-8">
                Group dynamics require a specific type of facilitation. We don't just lecture; we create environments where real psychological shifts happen through experiential learning.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ backgroundColor: 'var(--sage-green)' }} />
                  <div>
                    <strong className="block text-gray-800">Customised Curriculum</strong>
                    <span className="text-gray-600 font-light text-sm">Every workshop is tailored to the specific demographic, age group, and prevailing challenges of the institution.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ backgroundColor: 'var(--sage-green)' }} />
                  <div>
                    <strong className="block text-gray-800">Experiential Learning</strong>
                    <span className="text-gray-600 font-light text-sm">Moving away from desk-learning to active, physical, and highly engaging activities that anchor the lessons.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ backgroundColor: 'var(--sage-green)' }} />
                  <div>
                    <strong className="block text-gray-800">Measurable Impact</strong>
                    <span className="text-gray-600 font-light text-sm">Pre and post-workshop assessments to track the shift in group dynamics and individual awareness.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-gray-200 relative group">
              <img src="/images/empower-u.png" alt="Group Workshops" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all" />
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="text-center max-w-3xl mx-auto px-4 ct-card p-12 bg-white">
          <h2 className="text-3xl font-serif mb-6" style={{ color: 'var(--charcoal)' }}>Bring Empower U to Your Institution</h2>
          <p className="text-gray-600 mb-8">Let's discuss how we can partner to transform the culture of your school or organisation.</p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 rounded-lg font-bold transition-all shadow-md hover:shadow-xl"
            style={{ backgroundColor: 'var(--teu-yellow)', color: 'var(--charcoal)' }}
          >
            Contact to Enquire
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
