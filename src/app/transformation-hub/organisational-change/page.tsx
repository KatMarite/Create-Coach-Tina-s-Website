import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';

export const metadata = {
  title: 'Organisational Change Management | Coach Tina',
  description: 'Corporate change management coaching.',
};

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-serif mb-6" style={{ color: 'var(--charcoal)' }}>
              Organisational Change Management
            </h1>
            <p className="text-xl font-light text-gray-600 mb-8">
              Guiding teams and leaders through complex organisational transitions.
            </p>
            <a
              href="https://calendly.com/tinamujera/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-lg text-white font-medium transition-all hover:scale-105 shadow-lg"
              style={{ backgroundColor: 'var(--sage-green)' }}
            >
              Book a Consultation
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="rounded-2xl overflow-hidden shadow-xl h-[400px] bg-gray-200">
               <div className="w-full h-full flex items-center justify-center text-gray-400 font-medium">
                 [Visual Placeholder]
               </div>
            </div>
            <div>
              <h2 className="text-3xl font-serif mb-6" style={{ color: 'var(--charcoal)' }}>Program Overview</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Detailed information and curriculum overview will be placed here. This content is a placeholder for the actual copy.
              </p>
              <ul className="space-y-4">
                {['Core outcome 1', 'Core outcome 2', 'Core outcome 3'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--terracotta)' }} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
