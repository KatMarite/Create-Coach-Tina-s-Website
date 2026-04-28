import { FadeIn } from './FadeIn';

export function About() {
  return (
    <div className="pt-24 sm:pt-28 md:pt-32 pb-16 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-16 sm:mb-24">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight" style={{ color: 'var(--charcoal)' }}>
                Hey, it’s your friend, Coach Tina.
              </h1>
              <p className="text-xl sm:text-2xl font-light" style={{ color: 'var(--sage-green)' }}>
                Bridging corporate strategy and soulful restoration—so you can lead from within.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] max-w-md mx-auto overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/images/meet1.jpg"
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
            <h2 className="text-3xl sm:text-4xl font-serif mb-8 text-center" style={{ color: 'var(--charcoal)' }}>
              The Story
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed text-gray-700">
              <p className="text-xl font-medium" style={{ color: 'var(--sage-green)' }}>
                I know what it feels like to navigate the uncertain middle.
              </p>
              <p>
                With a Master’s in Commerce and over a decade in branding, marketing, and leadership strategy, I’ve seen high achievers lose their voice in the noise of performance.
              </p>
              <p>
                My journey into coaching wasn’t a pivot—it was a calling birthed in transition.<br/>
                Many people don’t need another title.<br/>
                They need alignment.<br/>
                They need healing.<br/>
                They need an internal operating system that can carry them through change.
              </p>
              <p>
                Today, I combine neuroscience-informed tools, accredited NLP coaching, and deep-rooted faith to help individuals and organisations move from disorientation to divine orientation.
              </p>
              <p className="font-medium text-xl mt-8 italic" style={{ color: 'var(--charcoal)' }}>
                My mission is simple: to help you lead from within—so your life reflects peace, purpose, and power.
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
              <h2 className="text-3xl font-serif mb-8" style={{ color: 'var(--charcoal)' }}>
                Credentials <span className="text-lg font-light text-gray-500 block mt-2">The Expert Voice</span>
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center text-lg text-gray-700">
                  <span className="w-2 h-2 rounded-full mr-4" style={{ backgroundColor: 'var(--sage-green)' }}></span>
                  Master’s in Commerce (M.Com)
                </li>
                <li className="flex items-center text-lg text-gray-700">
                  <span className="w-2 h-2 rounded-full mr-4" style={{ backgroundColor: 'var(--sage-green)' }}></span>
                  Accredited NLP & Life Coach
                </li>
                <li className="flex items-center text-lg text-gray-700">
                  <span className="w-2 h-2 rounded-full mr-4" style={{ backgroundColor: 'var(--sage-green)' }}></span>
                  Transformational Leadership Coach
                </li>
                <li className="flex items-center text-lg text-gray-700">
                  <span className="w-2 h-2 rounded-full mr-4" style={{ backgroundColor: 'var(--sage-green)' }}></span>
                  Author | Podcaster (Faith in Action)
                </li>
                <li className="flex items-center text-lg text-gray-700">
                  <span className="w-2 h-2 rounded-full mr-4" style={{ backgroundColor: 'var(--sage-green)' }}></span>
                  Founder: Authentically Woman & Empower U Academy
                </li>
                <li className="flex items-center text-lg text-gray-700">
                  <span className="w-2 h-2 rounded-full mr-4" style={{ backgroundColor: 'var(--sage-green)' }}></span>
                  13+ years of leadership and strategy experience
                </li>
              </ul>
            </div>
          </FadeIn>

          {/* My Method */}
          <FadeIn>
            <div>
              <h2 className="text-3xl font-serif mb-8" style={{ color: 'var(--charcoal)' }}>
                My Method <span className="text-lg font-light text-gray-500 block mt-2">Lead From Within</span>
              </h2>
              <div className="space-y-6">
                <div className="p-6 rounded-xl border border-gray-100 bg-gray-50 shadow-sm">
                  <h3 className="font-medium text-lg mb-2" style={{ color: 'var(--charcoal)' }}>Stage 1: Radical Self-Awareness</h3>
                  <p className="text-gray-600 font-light">Naming patterns, triggers, and truth.</p>
                </div>
                <div className="p-6 rounded-xl border border-gray-100 bg-gray-50 shadow-sm">
                  <h3 className="font-medium text-lg mb-2" style={{ color: 'var(--charcoal)' }}>Stage 2: Strategic Alignment</h3>
                  <p className="text-gray-600 font-light">Aligning values, purpose, and decisions.</p>
                </div>
                <div className="p-6 rounded-xl border border-gray-100 bg-gray-50 shadow-sm">
                  <h3 className="font-medium text-lg mb-2" style={{ color: 'var(--charcoal)' }}>Stage 3: Empathetic Expansion</h3>
                  <p className="text-gray-600 font-light">Healthier relationships and emotional intelligence.</p>
                </div>
                <div className="p-6 rounded-xl border border-gray-100 bg-gray-50 shadow-sm">
                  <h3 className="font-medium text-lg mb-2" style={{ color: 'var(--charcoal)' }}>Stage 4: Aligned Execution</h3>
                  <p className="text-gray-600 font-light">Systems, habits, and courageous action.</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16">
          <a href="/contact" className="px-8 py-4 rounded-lg transition-all shadow-md hover:shadow-xl text-center" style={{ backgroundColor: 'var(--sage-green)', color: 'white' }}>
            Work With Me
          </a>
          <a href="/transformation-hub" className="px-8 py-4 rounded-lg border-2 transition-all hover:bg-gray-50 text-center" style={{ borderColor: 'var(--charcoal)', color: 'var(--charcoal)' }}>
            Explore the Transformation Hub
          </a>
        </div>
      </section>
    </div>
  );
}
