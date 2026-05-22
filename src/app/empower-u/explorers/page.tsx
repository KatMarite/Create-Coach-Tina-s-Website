import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';

export const metadata = {
  title: 'Empower U Explorers (Ages 6–12) | Coach Tina',
  description:
    'A fun, emotionally intelligent life skills programme for children building confidence, resilience, and self-awareness.',
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
            Empower U Explorers
          </h1>

          <p className="text-xl text-gray-600 font-light mb-8">
            Ages 6–12. Building emotional intelligence, confidence, kindness,
            and resilience through fun, guided learning experiences.
          </p>

          <a
            href="https://calendly.com/tinamujera/30min"
            className="inline-block px-8 py-4 rounded-lg text-white"
            style={{ backgroundColor: 'var(--sage-green)' }}
          >
            Book a Parent Discovery Call
          </a>
        </section>

        <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-gray-200">
          <img
            src="/images/explorers.jpeg"
            alt="Empower U Academy"
            className="w-full h-full object-cover"
          />
        </div>

        {/* OUTCOMES */}
        <section className="bg-white py-16 border-y">
          <div className="max-w-6xl mx-auto px-4">
            <h2
              className="text-3xl font-serif text-center mb-12"
              style={{ color: 'var(--charcoal)' }}
            >
              What Children Develop
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Emotional Literacy',
                  desc: 'Children learn to name and express emotions safely and clearly.',
                },
                {
                  title: 'Confidence & Self-Worth',
                  desc: 'Building a strong, positive sense of identity and capability.',
                },
                {
                  title: 'Resilience & Growth Mindset',
                  desc: 'Learning how to handle mistakes, challenges, and change.',
                },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-stone-50 rounded-xl">
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
            Give your child a strong emotional foundation
          </h2>

          <a
            href="https://calendly.com/tinamujera/30min"
            className="px-10 py-4 rounded-lg text-white inline-block"
            style={{ backgroundColor: 'var(--sage-green)' }}
          >
            Enquire About Explorers
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
