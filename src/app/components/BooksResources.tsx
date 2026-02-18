import { BookOpen, Download, FileText, Star } from 'lucide-react';

export function BooksResources() {
  const resources = [
    {
      type: 'Guide',
      title: '10 Steps to Discovering Your Purpose',
      description: 'A practical workbook to help you uncover your unique purpose and passion.',
    },
    {
      type: 'Worksheet',
      title: 'Values Clarification Exercise',
      description: 'Identify your core values and align your life with what matters most.',
    },
    {
      type: 'Audio',
      title: 'Morning Mindfulness Meditation',
      description: 'A 15-minute guided meditation to start your day with clarity and intention.',
    },
  ];

  return (
    <section id="books & resources" className="py-24 lg:py-32" style={{ backgroundColor: '#fafafa' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Featured Book Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          {/* Left - Book Image */}
          <div className="relative">
            <div className="relative max-w-sm mx-auto">
              <div className="aspect-[3/4] rounded-2xl shadow-2xl overflow-hidden bg-white">
                <img
                  src="https://images.unsplash.com/photo-1707142979946-a745d1d0092c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwYm9vayUyMHJlYWRpbmclMjBjb2ZmZWV8ZW58MXx8fHwxNzcxNDIzODM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Book Cover"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20" />
              </div>
              <div
                className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full opacity-20"
                style={{ backgroundColor: 'var(--sage-green)' }}
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full text-sm font-light tracking-wide" style={{ backgroundColor: 'var(--sage-green)', color: 'white' }}>
              Bestselling Book
            </div>

            <h2
              className="font-serif text-4xl md:text-5xl leading-tight"
              style={{ color: 'var(--charcoal)' }}
            >
              Awakening Your Purpose
            </h2>

            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" style={{ color: 'var(--sage-green)' }} />
              ))}
              <span className="ml-2 text-sm font-light" style={{ color: '#6b7280' }}>
                4.9 out of 5 (2,847 reviews)
              </span>
            </div>

            <div className="space-y-4 text-base font-light leading-relaxed" style={{ color: '#6b7280' }}>
              <p>
                A transformative guide to discovering your unique purpose and creating a life that reflects your deepest values and aspirations.
              </p>
              <p>
                In this powerful book, I share the proven framework I've used with hundreds of clients to help them break free from limiting beliefs, gain clarity on their path, and step into their fullest potential.
              </p>
            </div>

            <div className="pt-4">
              <blockquote className="border-l-4 pl-6 py-2 italic text-base font-light" style={{ borderColor: 'var(--sage-green)', color: '#4b5563' }}>
                "This book changed my life. Coach Tina's wisdom and practical exercises helped me finally understand what I'm meant to do in this world."
                <footer className="text-sm mt-2 not-italic" style={{ color: '#9ca3af' }}>— Sarah M., Reader</footer>
              </blockquote>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                className="px-8 py-4 rounded-none transition-all hover:shadow-xl hover:scale-105"
                style={{ backgroundColor: 'var(--sage-green)', color: 'white' }}
              >
                Order Now
              </button>
              <button
                className="px-8 py-4 rounded-none border-2 transition-all hover:bg-white"
                style={{ borderColor: 'var(--charcoal)', color: 'var(--charcoal)' }}
              >
                Read Sample Chapter
              </button>
            </div>
          </div>
        </div>

        {/* Free Resources Section */}
        <div className="bg-white rounded-3xl p-8 lg:p-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3
              className="font-serif text-3xl md:text-4xl leading-tight mb-4"
              style={{ color: 'var(--charcoal)' }}
            >
              Free Resources
            </h3>
            <p className="text-lg font-light" style={{ color: '#6b7280' }}>
              Download these complimentary tools to support your personal growth journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="border-2 border-gray-100 rounded-2xl p-6 hover:border-current hover:shadow-lg transition-all group cursor-pointer"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: 'var(--sage-green)', opacity: 0.1 }}
                >
                  <FileText className="w-6 h-6" style={{ color: 'var(--sage-green)' }} />
                </div>

                <div className="text-xs font-light tracking-wide uppercase mb-2" style={{ color: 'var(--sage-green)' }}>
                  {resource.type}
                </div>

                <h4 className="font-serif text-lg mb-3" style={{ color: 'var(--charcoal)' }}>
                  {resource.title}
                </h4>

                <p className="text-sm font-light mb-4 leading-relaxed" style={{ color: '#6b7280' }}>
                  {resource.description}
                </p>

                <div className="flex items-center gap-2 text-sm font-light" style={{ color: 'var(--charcoal)' }}>
                  <Download className="w-4 h-4" />
                  <span>Download Free</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
