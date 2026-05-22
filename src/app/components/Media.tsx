import { FadeIn } from './FadeIn';

export function Media() {
  return (
    <div className="pt-24 sm:pt-28 md:pt-32 pb-16 bg-white min-h-screen">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-16 sm:mb-24">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div
                className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase bg-gray-100"
                style={{ color: 'var(--sage-green)' }}
              >
                Media & Podcast Hub
              </div>

              <h1
                className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight"
                style={{ color: 'var(--charcoal)' }}
              >
                Conversations, conversations, and conversations that shape
                transformation.
              </h1>

              <p
                className="text-xl font-light leading-relaxed"
                style={{ color: '#374151' }}
              >
                Explore podcast episodes, interviews, speaking features, and
                media appearances where faith, leadership, and emotional
                intelligence come alive in real time.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://open.spotify.com/show/6T2PQp6kkG2s1k3KoIphgv?si=0e02ee1ffcb644e4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-lg shadow-md hover:shadow-xl text-center flex items-center justify-center"
                  style={{
                    backgroundColor: 'var(--sage-green)',
                    color: 'white',
                  }}
                >
                  🎧 Listen on Spotify
                </a>

                <a
                  href="/contact"
                  className="px-8 py-4 rounded-lg border-2 hover:bg-gray-50 text-center"
                  style={{
                    borderColor: 'var(--charcoal)',
                    color: 'var(--charcoal)',
                  }}
                >
                  Book Media Feature
                </a>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img
                src="/images/faith.png"
                alt="Media Feature"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </FadeIn>
      </section>

      {/* PODCAST SECTION */}
      <section className="bg-gray-50 py-16 sm:py-24 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <FadeIn>
            <h2
              className="text-3xl sm:text-4xl font-serif mb-10"
              style={{ color: 'var(--charcoal)' }}
            >
              Faith in Action Podcast
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm border">
                <iframe
                  style={{ borderRadius: '12px' }}
                  src="https://open.spotify.com/embed/show/6T2PQp6kkG2s1k3KoIphgv"
                  width="100%"
                  height="352"
                  frameBorder={0}
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col justify-center">
                <h3
                  className="text-xl font-medium mb-4"
                  style={{ color: 'var(--charcoal)' }}
                >
                  A space where faith meets real life
                </h3>

                <p className="text-gray-600 font-light mb-6">
                  Faith in Action explores leadership, healing, identity,
                  emotional intelligence, and spiritual growth through honest
                  conversations with leaders, creators, and change-makers.
                </p>

                <a
                  href="https://open.spotify.com/show/6T2PQp6kkG2s1k3KoIphgv?si=0e02ee1ffcb644e4"
                  className="text-sm font-medium"
                  style={{ color: 'var(--sage-green)' }}
                >
                  Explore all episodes →
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* MEDIA SECTIONS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20">
        <FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border shadow-sm">
              <h3
                className="text-xl font-serif mb-3"
                style={{ color: 'var(--charcoal)' }}
              >
                Radio Features
              </h3>
              <p className="text-gray-600 font-light text-sm">
                Guest appearances and conversations on leading radio platforms
                sharing insights on leadership and transformation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border shadow-sm">
              <h3
                className="text-xl font-serif mb-3"
                style={{ color: 'var(--charcoal)' }}
              >
                TV Interviews
              </h3>
              <p className="text-gray-600 font-light text-sm">
                Broadcast conversations exploring purpose, emotional
                intelligence, and women in leadership.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border shadow-sm">
              <h3
                className="text-xl font-serif mb-3"
                style={{ color: 'var(--charcoal)' }}
              >
                Speaking Clips
              </h3>
              <p className="text-gray-600 font-light text-sm">
                Powerful keynote moments captured live from corporate and
                leadership events.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border shadow-sm">
              <h3
                className="text-xl font-serif mb-3"
                style={{ color: 'var(--charcoal)' }}
              >
                Article Features
              </h3>
              <p className="text-gray-600 font-light text-sm">
                Written features and thought leadership contributions on
                transformation and leadership.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border shadow-sm">
              <h3
                className="text-xl font-serif mb-3"
                style={{ color: 'var(--charcoal)' }}
              >
                Media Kit
              </h3>
              <p className="text-gray-600 font-light text-sm mb-4">
                Download official speaker bio, headshots, and booking
                information.
              </p>

              <a
                href="/media-kit.pdf"
                className="text-sm font-medium"
                style={{ color: 'var(--sage-green)' }}
              >
                Download Media Kit →
              </a>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
