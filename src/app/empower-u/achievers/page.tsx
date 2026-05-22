import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';

export const metadata = {
  title: 'Empower U Achievers (Ages 13–18) | Coach Tina',
  description:
    'Teen leadership, emotional intelligence, and identity development programme for ages 13–18.',
};

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <Navigation />

      <main className="flex-grow pt-32 pb-16">
        {/* HERO */}
        <section className="max-w-6xl mx-auto px-4 text-center mb-20">
          <h1
            className="text-4xl md:text-6xl font-serif mb-6"
            style={{ color: 'var(--charcoal)' }}
          >
            Empower U Achievers
          </h1>

          <p className="text-xl text-gray-600 font-light mb-8">
            Ages 13–18. Identity. Pressure. Purpose. Leadership. Helping teens
            build emotional strength and self-leadership in a high-pressure
            world.
          </p>

          <a
            href="https://calendly.com/tinamujera/30min"
            className="inline-block px-8 py-4 rounded-lg text-white"
            style={{ backgroundColor: 'var(--sage-green)' }}
          >
            Book a Teen Discovery Call
          </a>
        </section>

        <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-gray-200">
          <img
            src="/images/empower.jpeg"
            alt="Empower U Academy"
            className="w-full h-full object-cover"
          />
        </div>

        {/* CORE OUTCOMES */}
        <section className="bg-white py-16 border-y">
          <div className="max-w-6xl mx-auto px-4">
            <h2
              className="text-3xl font-serif text-center mb-12"
              style={{ color: 'var(--charcoal)' }}
            >
              Core Outcomes
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Identity Anchoring',
                  desc: 'Develop a stable sense of self not shaped by peer pressure or social media.',
                },
                {
                  title: 'Emotional Intelligence',
                  desc: 'Learn emotional regulation, communication, and conflict handling.',
                },
                {
                  title: 'Self-Leadership',
                  desc: 'Take responsibility for decisions, habits, and personal direction.',
                },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white border rounded-xl">
                  <h3 className="font-medium mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm font-light">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-20 max-w-3xl mx-auto px-4">
          <h2
            className="text-3xl font-serif mb-6"
            style={{ color: 'var(--charcoal)' }}
          >
            Help your teen lead themselves before the world does
          </h2>

          <a
            href="https://calendly.com/tinamujera/30min"
            className="px-10 py-4 rounded-lg text-white inline-block"
            style={{ backgroundColor: 'var(--sage-green)' }}
          >
            Enquire About Achievers
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
