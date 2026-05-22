import { FadeIn } from './FadeIn';
import { TestimonialSlider } from './TestimonialSlider';

export function About() {
  return (
    <div className="pt-24 sm:pt-28 md:pt-32 pb-16 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-16 sm:mb-24">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1
                className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight"
                style={{ color: 'var(--charcoal)' }}
              >
                Hey, it’s your friend, Coach Tina.
              </h1>
              <p
                className="text-xl sm:text-2xl font-light"
                style={{ color: 'var(--sage-green)' }}
              >
                Bridging corporate strategy and soulful restoration—so you can
                lead from within.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] max-w-md mx-auto overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/images/img1.jpg"
                  alt="Coach Tina warm portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* The Story */}
      <section className="bg-gray-50 py-16 sm:py-24 border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <FadeIn>
            <h2
              className="text-3xl sm:text-4xl font-serif mb-8 text-center"
              style={{ color: 'var(--charcoal)' }}
            >
              The Story
            </h2>

            <div className="space-y-6 text-lg font-light leading-relaxed text-gray-700">
              <p
                className="text-xl font-medium"
                style={{ color: 'var(--sage-green)' }}
              >
                Hey, I’m Coach Tina — but before the title, I’m a woman who
                understands transition.
              </p>

              <p>
                I know what it feels like to carry responsibility, lead through
                uncertainty, rebuild after life shifts, and still be expected to
                show up with strength. My work was born from that intersection —
                the place where strategy meets soul, where leadership meets
                healing, and where purpose has to become practical.
              </p>

              <p>
                With a Master’s in Commerce, over 13 years of brand, marketing
                and leadership experience, and deep training in transformational
                coaching and NLP, I bring both structure and soul into the room.
                I am not here to motivate people for a moment. I am here to help
                them build the internal systems, emotional clarity and practical
                tools required to lead from within.
              </p>

              <p>
                My journey into coaching was not a career pivot. It was a
                calling shaped through seasons of transition, faith, identity,
                motherhood, leadership and rebuilding. That is why my work
                speaks to the whole person — not just the role they perform.
              </p>

              <p
                className="font-medium text-xl mt-8 italic"
                style={{ color: 'var(--charcoal)' }}
              >
                Whether I am working with a corporate team, a woman in
                transition, a parent, a young person, or a leader under
                pressure, the heart of the work remains the same: helping people
                reset, realign and rise with clarity, courage and conviction.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Credentials & My Method */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Credentials */}
          <FadeIn>
            <div>
              <h2
                className="text-3xl font-serif mb-8"
                style={{ color: 'var(--charcoal)' }}
              >
                Credentials & Experience
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center text-lg text-gray-700">
                  <span
                    className="w-2 h-2 rounded-full mr-4"
                    style={{ backgroundColor: 'var(--sage-green)' }}
                  ></span>
                  Master’s in Commerce (M.Com)
                </li>
                <li className="flex items-center text-lg text-gray-700">
                  <span
                    className="w-2 h-2 rounded-full mr-4"
                    style={{ backgroundColor: 'var(--sage-green)' }}
                  ></span>
                  Accredited NLP & Life Coach
                </li>
                <li className="flex items-center text-lg text-gray-700">
                  <span
                    className="w-2 h-2 rounded-full mr-4"
                    style={{ backgroundColor: 'var(--sage-green)' }}
                  ></span>
                  Transformational Leadership Coach
                </li>
                <li className="flex items-center text-lg text-gray-700">
                  <span
                    className="w-2 h-2 rounded-full mr-4"
                    style={{ backgroundColor: 'var(--sage-green)' }}
                  ></span>
                  Author | Podcaster (Faith in Action)
                </li>
                <li className="flex items-center text-lg text-gray-700">
                  <span
                    className="w-2 h-2 rounded-full mr-4"
                    style={{ backgroundColor: 'var(--sage-green)' }}
                  ></span>
                  Founder: Authentically Woman & Empower U Academy
                </li>
                <li className="flex items-center text-lg text-gray-700">
                  <span
                    className="w-2 h-2 rounded-full mr-4"
                    style={{ backgroundColor: 'var(--sage-green)' }}
                  ></span>
                  13+ years of leadership and strategy experience
                </li>
              </ul>
            </div>
          </FadeIn>

          {/* My Method */}
          <FadeIn>
            <div>
              <h2
                className="text-3xl font-serif mb-8"
                style={{ color: 'var(--charcoal)' }}
              >
                My Method{' '}
                <span className="text-lg font-light text-gray-500 block mt-2">
                  Lead From Within
                </span>
              </h2>
              <div className="space-y-6">
                <div className="p-6 rounded-xl border border-gray-100 bg-gray-50 shadow-sm">
                  <h3
                    className="font-medium text-lg mb-2"
                    style={{ color: 'var(--charcoal)' }}
                  >
                    Stage 1: Radical Self-Awareness
                  </h3>
                  <p className="text-gray-600 font-light">
                    Naming patterns, triggers, and truth.
                  </p>
                </div>
                <div className="p-6 rounded-xl border border-gray-100 bg-gray-50 shadow-sm">
                  <h3
                    className="font-medium text-lg mb-2"
                    style={{ color: 'var(--charcoal)' }}
                  >
                    Stage 2: Strategic Alignment
                  </h3>
                  <p className="text-gray-600 font-light">
                    Aligning values, purpose, and decisions.
                  </p>
                </div>
                <div className="p-6 rounded-xl border border-gray-100 bg-gray-50 shadow-sm">
                  <h3
                    className="font-medium text-lg mb-2"
                    style={{ color: 'var(--charcoal)' }}
                  >
                    Stage 3: Empathetic Expansion
                  </h3>
                  <p className="text-gray-600 font-light">
                    Healthier relationships and emotional intelligence.
                  </p>
                </div>
                <div className="p-6 rounded-xl border border-gray-100 bg-gray-50 shadow-sm">
                  <h3
                    className="font-medium text-lg mb-2"
                    style={{ color: 'var(--charcoal)' }}
                  >
                    Stage 4: Aligned Execution
                  </h3>
                  <p className="text-gray-600 font-light">
                    Systems, habits, and courageous action.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16">
          <a
            href="/contact"
            className="px-8 py-4 rounded-lg transition-all shadow-md hover:shadow-xl text-center"
            style={{ backgroundColor: 'var(--sage-green)', color: 'white' }}
          >
            Work With Me
          </a>
          <a
            href="/transformation-hub"
            className="px-8 py-4 rounded-lg border-2 transition-all hover:bg-gray-50 text-center"
            style={{ borderColor: 'var(--charcoal)', color: 'var(--charcoal)' }}
          >
            Explore the Transformation Hub
          </a>
        </div>
      </section>

      {/* Visual Timeline */}
      <section className="py-16 sm:py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <FadeIn>
            <h2
              className="text-3xl font-serif mb-10"
              style={{ color: 'var(--charcoal)' }}
            >
              The Journey Behind the Work
            </h2>
          </FadeIn>

          <div className="space-y-4 text-lg font-light text-gray-700">
            <FadeIn delay={100}><p>Corporate Strategy</p></FadeIn>
            <FadeIn delay={200}><p>↓</p></FadeIn>
            <FadeIn delay={300}><p>Coaching & Facilitation</p></FadeIn>
            <FadeIn delay={400}><p>↓</p></FadeIn>
            <FadeIn delay={500}><p>Books & Podcast</p></FadeIn>
            <FadeIn delay={600}><p>↓</p></FadeIn>
            <FadeIn delay={700}><p>Empower U Academy</p></FadeIn>
            <FadeIn delay={800}><p>↓</p></FadeIn>
            <FadeIn delay={900}><p>Authentically Woman</p></FadeIn>
            <FadeIn delay={1000}><p>↓</p></FadeIn>
            <FadeIn delay={1100}><p className="font-medium text-black">Transformation Hub</p></FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSlider
        title="In Their Own Words"
        subtitle="Leaders, professionals, and families share the impact of working with Coach Tina."
        showCaseStudies={true}
        bgClassName="bg-gray-50 border-t border-gray-200"
      />
    </div>
  );
}
