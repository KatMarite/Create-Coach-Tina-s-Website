import { FadeIn } from './FadeIn';

const products = [
  {
    title: 'Transitions',
    type: 'Faith-Rooted Guide',
    image: '/images/book10.jpeg',
    price: 'R 250.00',
    status: 'Available Now',
    format: 'Physical book + workbook',
    delivery: 'Ships nationwide in South Africa',
    description:
      'A faith-rooted guide for anyone navigating change, uncertainty, or identity shifts — helping you move from disorientation to divine orientation.',
    cta: 'Order Now',
    featured: true,
    accent: 'var(--sage-green)',
  },
  {
    title: 'Authentic Marketing Mastery',
    type: 'Business Workbook',
    image: '/images/book4.jpeg',
    price: 'R 300.00',
    status: 'Coming Soon',
    format: 'Digital workbook (PDF)',
    delivery: 'Instant download upon release',
    description:
      'A practical, soul-led marketing workbook for entrepreneurs who want to build a brand with clarity, authenticity, and strategic visibility.',
    cta: 'Join Waitlist',
    featured: false,
    accent: 'var(--charcoal)',
  },
  {
    title: 'NaShe – With God',
    type: 'Book',
    image: '/images/book5.jpeg',
    price: 'R 250.00',
    status: 'Available Now',
    format: 'Physical book',
    delivery: 'Ships nationwide in South Africa',
    description:
      'A powerful testimony of healing, faith, and surrender — sharing how God restores identity and purpose through every season.',
    cta: 'Order Now',
    featured: false,
    accent: 'var(--sage-green)',
  },
  {
    title: "AtaBelle's Treasure Chest of Talents",
    type: "Children's Book",
    image: '/images/book2.jpeg',
    price: 'R 180.00',
    status: 'Pre-Order',
    format: 'Physical book',
    delivery: 'Expected dispatch within 2–3 weeks',
    description:
      'A joyful children’s book that helps young readers discover courage, creativity, confidence, empathy, resilience, and the sparkle within them.',
    cta: 'Pre-Order',
    featured: false,
    accent: 'var(--teu-yellow)',
  },
];

export function Shop() {
  return (
    <div className="pt-24 sm:pt-28 md:pt-32 pb-16 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-16 sm:mb-24 text-center">
        <FadeIn>
          <div
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase mb-6 bg-gray-100"
            style={{ color: 'var(--sage-green)' }}
          >
            Books & Resources
          </div>

          <h1
            className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight mb-6"
            style={{ color: 'var(--charcoal)' }}
          >
            Tangible tools for your transformation.
          </h1>

          <p
            className="text-xl sm:text-2xl font-light mb-6 max-w-3xl mx-auto"
            style={{ color: '#374151' }}
          >
            Choose the resource that matches your season and begin your journey
            toward healing, clarity, leadership, and purpose.
          </p>

          <p className="text-sm text-gray-500 max-w-2xl mx-auto mb-10">
            Products include physical books, guided workbooks, and digital
            resources. Availability and delivery information are listed on each
            item.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#resources"
              className="px-8 py-4 rounded-lg transition-all shadow-md hover:shadow-xl text-center"
              style={{
                backgroundColor: 'var(--sage-green)',
                color: 'white',
              }}
            >
              Browse All Resources
            </a>

            <a
              href="#transitions"
              className="px-8 py-4 rounded-lg border-2 transition-all hover:bg-gray-50 text-center"
              style={{
                borderColor: 'var(--charcoal)',
                color: 'var(--charcoal)',
              }}
            >
              Start With Transitions
            </a>
          </div>
        </FadeIn>
      </section>

      {/* Products Grid */}
      <section
        id="resources"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <FadeIn key={index}>
              <div
                id={product.title === 'Transitions' ? 'transitions' : undefined}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-lg transition-shadow"
              >
                {/* Image */}
                <div className="aspect-[3/4] relative bg-white border-b border-gray-100 p-6">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase ${
                        product.status === 'Available Now'
                          ? 'bg-green-100 text-green-700'
                          : product.status === 'Coming Soon'
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {product.status}
                    </span>
                  </div>

                  {/* Featured Badge */}
                  {product.featured && (
                    <div className="absolute top-4 right-4">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase text-white"
                        style={{
                          backgroundColor: 'var(--sage-green)',
                        }}
                      >
                        Bestseller
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-xs font-semibold uppercase tracking-wider mb-2 text-gray-500">
                    {product.type}
                  </div>

                  <h3
                    className="text-2xl font-serif mb-3 leading-snug"
                    style={{ color: 'var(--charcoal)' }}
                  >
                    {product.title}
                  </h3>

                  <p className="text-gray-600 font-light text-sm leading-relaxed mb-6 flex-grow">
                    {product.description}
                  </p>

                  {/* Product Info */}
                  <div className="space-y-3 text-sm mb-6">
                    <div className="flex items-start gap-2">
                      <span className="font-medium text-gray-800">Format:</span>
                      <span className="text-gray-600">{product.format}</span>
                    </div>

                    <div className="flex items-start gap-2">
                      <span className="font-medium text-gray-800">
                        Delivery:
                      </span>
                      <span className="text-gray-600">{product.delivery}</span>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-auto pt-5 border-t border-gray-200 flex items-center justify-between">
                    <span
                      className="text-lg font-semibold"
                      style={{ color: 'var(--charcoal)' }}
                    >
                      {product.price}
                    </span>

                    <button
                      className="px-4 py-2 rounded-lg text-sm font-medium transition-all hover:opacity-90"
                      style={{
                        backgroundColor:
                          product.status === 'Coming Soon'
                            ? '#E5E7EB'
                            : product.accent,
                        color:
                          product.status === 'Coming Soon'
                            ? '#374151'
                            : product.accent === 'var(--teu-yellow)'
                              ? 'var(--charcoal)'
                              : 'white',
                      }}
                    >
                      {product.cta}
                    </button>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Delivery Information */}
      <section className="bg-gray-50 py-16 sm:py-20 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <FadeIn>
            <h2
              className="text-3xl sm:text-4xl font-serif mb-6"
              style={{ color: 'var(--charcoal)' }}
            >
              Delivery & Product Information
            </h2>

            <p className="text-gray-600 font-light leading-relaxed mb-8">
              Some products are available immediately, while others are offered
              as pre-orders or coming soon. Physical books are shipped within
              South Africa, and digital workbooks are delivered instantly via
              email.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 text-left">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3
                  className="font-medium mb-2"
                  style={{ color: 'var(--charcoal)' }}
                >
                  Physical Books
                </h3>
                <p className="text-sm text-gray-600 font-light">
                  Printed copies delivered to your door.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3
                  className="font-medium mb-2"
                  style={{ color: 'var(--charcoal)' }}
                >
                  Digital Downloads
                </h3>
                <p className="text-sm text-gray-600 font-light">
                  PDF resources sent instantly after purchase.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3
                  className="font-medium mb-2"
                  style={{ color: 'var(--charcoal)' }}
                >
                  Pre-Orders
                </h3>
                <p className="text-sm text-gray-600 font-light">
                  Reserve upcoming releases before they officially launch.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12 py-20 text-center">
        <FadeIn>
          <h2
            className="text-3xl sm:text-4xl font-serif mb-6"
            style={{ color: 'var(--charcoal)' }}
          >
            Not Sure Where to Start?
          </h2>

          <p className="text-lg text-gray-600 font-light mb-8 leading-relaxed">
            Start with <strong>Transitions</strong> if you are navigating
            change, seeking clarity, or rebuilding your identity and purpose.
          </p>

          <a
            href="https://calendly.com/tinamujera/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 rounded-lg font-medium shadow-md hover:shadow-xl transition-all"
            style={{
              backgroundColor: 'var(--sage-green)',
              color: 'white',
            }}
          >
            Book a Discovery Call
          </a>
        </FadeIn>
      </section>
    </div>
  );
}
