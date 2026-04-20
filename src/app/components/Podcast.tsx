import { FadeIn } from './FadeIn';
import { Mic, Play } from 'lucide-react';

export function Podcast() {
  const episodes = [
    {
      number: '47',
      title: 'Finding Clarity in Chaos: A Guide to Life Transitions',
      duration: '42 min',
    },
    {
      number: '46',
      title: 'The Power of Setting Boundaries',
      duration: '38 min',
    },
    {
      number: '45',
      title: 'Overcoming Imposter Syndrome',
      duration: '51 min',
    },
  ];

  return (
    <section id="podcast" className="py-24 lg:py-32" style={{ backgroundColor: '#fafafa' }}>
      <FadeIn>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full text-sm font-light tracking-wide" style={{ backgroundColor: 'var(--sage-green)', color: 'white' }}>
              Podcast
            </div>

            <h2
              className="font-serif text-4xl md:text-5xl leading-tight"
              style={{ color: 'var(--charcoal)' }}
            >
              The Purposeful Life Podcast
            </h2>

            <p className="text-lg font-light leading-relaxed" style={{ color: '#374151' }}>
              Join me every week for honest conversations about personal growth, mindset shifts, and creating a life aligned with your values. Available on all major platforms.
            </p>

            {/* Recent Episodes */}
            <div className="space-y-4 pt-4">
              {episodes.map((episode, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-5 border border-gray-200 hover:shadow-md transition-all group cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform"
                      style={{ backgroundColor: 'var(--sage-green)' }}
                    >
                      <Play className="w-5 h-5 text-white fill-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-light mb-1" style={{ color: 'var(--sage-green)' }}>
                        Episode {episode.number}
                      </div>
                      <h4 className="font-serif text-lg mb-1 line-clamp-2" style={{ color: 'var(--charcoal)' }}>
                        {episode.title}
                      </h4>
                      <div className="text-sm font-light" style={{ color: '#9ca3af' }}>
                        {episode.duration}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                className="px-8 py-3 rounded-lg transition-all hover:shadow-lg hover:scale-105"
                style={{ backgroundColor: 'var(--charcoal)', color: 'white' }}
              >
                View All Episodes
              </button>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative lg:order-last">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/pod.jpeg"
                alt="Podcast"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-3">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'var(--sage-green)' }}
                  >
                    <Mic className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-serif text-xl">The Purposeful Life</div>
                    <div className="text-white/80 text-sm font-light">with Coach Tina</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
    </section>
  );
}
