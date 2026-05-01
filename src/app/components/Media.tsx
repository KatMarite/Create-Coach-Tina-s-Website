import { FadeIn } from './FadeIn';

export function Media() {
  return (
    <div className="pt-24 sm:pt-28 md:pt-32 pb-16 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-16 sm:mb-24">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase mb-2 bg-gray-100" style={{ color: 'var(--sage-green)' }}>
                Faith in Action Podcast & Media
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight" style={{ color: 'var(--charcoal)' }}>
                The Voice of Transformation.
              </h1>
              <p className="text-xl font-light leading-relaxed" style={{ color: '#374151' }}>
                Faith in Action is where real-life stories and spiritual principles converge—so you can lead, live, and love with depth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-8 py-4 rounded-lg transition-all shadow-md hover:shadow-xl text-center flex items-center justify-center" style={{ backgroundColor: 'var(--sage-green)', color: 'white' }}>
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                  Listen to the Podcast
                </button>
                <a href="https://calendly.com/tinamujera/30min" className="px-8 py-4 rounded-lg border-2 transition-all hover:bg-gray-50 text-center" style={{ borderColor: 'var(--charcoal)', color: 'var(--charcoal)' }}>
                  Book Coach Tina to Speak
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] max-w-lg mx-auto overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/images/faith.png"
                  alt="Faith in Action Podcast"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Latest Episodes placeholder */}
      <section className="bg-gray-50 py-16 sm:py-24 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-serif mb-12" style={{ color: 'var(--charcoal)' }}>
              Latest Episodes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                  <div className="aspect-video bg-gray-200 rounded-lg mb-4 overflow-hidden relative group">
                    <img src="/images/hero-2.jpg" alt="Episode cover" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg" style={{ color: 'var(--sage-green)' }}>
                        <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                    <span>Episode {10 - item}</span>
                    <span>•</span>
                    <span>45 min</span>
                  </div>
                  <h3 className="text-xl font-medium mb-2" style={{ color: 'var(--charcoal)' }}>Navigating Leadership Transitions with Grace</h3>
                  <p className="text-gray-600 font-light flex-grow mb-4 text-sm line-clamp-2">In this episode, Coach Tina breaks down the emotional and strategic steps required to transition into higher leadership roles without losing your authentic self.</p>
                  <button className="text-sm font-medium flex items-center hover:opacity-70 transition-opacity" style={{ color: 'var(--sage-green)' }}>
                    Listen Now <span className="ml-1">→</span>
                  </button>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <button className="px-6 py-3 rounded-lg border transition-all hover:bg-gray-50" style={{ borderColor: 'var(--charcoal)', color: 'var(--charcoal)' }}>
                View All Episodes
              </button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
