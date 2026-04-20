import { FadeIn } from './FadeIn';
import { useState } from 'react';
import { BookOpen, Download, FileText, Star, ShoppingBag, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';

export function BooksResources() {
  const { addToCart } = useCart();
  const [selectedBook, setSelectedBook] = useState<{
    title: string;
    price: string;
    description: string;
    image: string;
  } | null>(null);

  const books = [
    {
      title: 'Nashe-With-God Book',
      price: 'R200,00',
      description: 'A transformative spiritual journey guiding you towards a deeper connection and purpose.',
      image: '/images/book5.jpeg',
    },
    {
      title: 'AteBelle Children’s Book',
      price: 'R200,00',
      description: 'Inspiring stories for the young at heart, teaching valuable life lessons through improved storytelling.',
      image: '/images/book3.png',
    },
    {
      title: 'Authentic Marketing Mastery',
      price: 'R350,00',
      description: 'Master the art of marketing with authenticity and impact, perfect for entrepreneurs and coaches.',
      image: '/images/book4.jpeg',
    },
  ];

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
      <FadeIn>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Books for Purchase Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full text-sm font-light tracking-wide mb-6" style={{ backgroundColor: 'var(--sage-green)', color: 'white' }}>
            Books & Store
          </div>
          <h2
            className="font-serif text-4xl md:text-5xl leading-tight mb-6"
            style={{ color: 'var(--charcoal)' }}
          >
            Resources for Your Journey
          </h2>
          <p className="text-lg font-light" style={{ color: '#374151' }}>
            Empower yourself with these carefully curated books designed to inspire growth and transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 mb-24">
          {books.map((book, index) => (
            <div key={index} className="group flex flex-col h-full">
              <div className="relative aspect-[3/4] mb-8 rounded-2xl overflow-hidden shadow-xl transition-all group-hover:shadow-2xl">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <button
                    onClick={() => setSelectedBook(book)}
                    className="w-full py-3 bg-white/90 backdrop-blur-sm rounded-lg font-medium text-sm transition-transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 cursor-pointer hover:bg-white"
                    style={{ color: 'var(--charcoal)' }}
                  >
                    View Details
                  </button>
                </div>
              </div>

              <div className="space-y-3 flex-1 flex flex-col">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="font-serif text-2xl leading-tight" style={{ color: 'var(--charcoal)' }}>
                    {book.title}
                  </h3>
                  <span className="font-medium text-lg whitespace-nowrap" style={{ color: 'var(--sage-green)' }}>
                    {book.price}
                  </span>
                </div>

                <p className="text-sm font-light leading-relaxed line-clamp-2 mb-4" style={{ color: '#374151' }}>
                  {book.description}
                </p>

                <div className="mt-auto pt-2">
                  <button
                    onClick={() => addToCart(book)}
                    className="flex items-center gap-2 text-sm font-medium hover:underline"
                    style={{ color: 'var(--charcoal)' }}
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
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
            <p className="text-lg font-light" style={{ color: '#374151' }}>
              Download these complimentary tools to support your personal growth journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="border-2 border-gray-200 rounded-2xl p-6 hover:border-current hover:shadow-lg transition-all group cursor-pointer"
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

                <p className="text-sm font-light mb-4 leading-relaxed" style={{ color: '#374151' }}>
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

        {/* Book Details Dialog */}
        <Dialog open={!!selectedBook} onOpenChange={(open) => !open && setSelectedBook(null)}>
          <DialogContent className="max-w-2xl p-0 overflow-hidden bg-white gap-0 border-none">
            {selectedBook && (
              <div className="flex flex-col md:flex-row h-full">
                <div className="w-full md:w-2/5 relative h-64 md:h-auto">
                  <img
                    src={selectedBook.image}
                    alt={selectedBook.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="w-full md:w-3/5 p-8 flex flex-col">
                  <DialogHeader className="mb-4">
                    <DialogTitle className="font-serif text-2xl mb-2" style={{ color: 'var(--charcoal)' }}>
                      {selectedBook.title}
                    </DialogTitle>
                    <div className="text-xl font-medium" style={{ color: 'var(--sage-green)' }}>
                      {selectedBook.price}
                    </div>
                  </DialogHeader>

                  <DialogDescription className="text-base font-light leading-relaxed mb-8 flex-1" style={{ color: '#4b5563' }}>
                    {selectedBook.description}
                    <br /><br />
                    Experience the profound impact of {selectedBook.title} and discover the tools you need to elevate your journey. This essential resource is designed to provide actionable insights and lasting value.
                  </DialogDescription>

                  <div className="mt-auto">
                    <button
                      onClick={() => {
                        addToCart(selectedBook);
                        setSelectedBook(null);
                      }}
                      className="w-full py-3.5 rounded-lg font-medium text-white transition-all hover:shadow-lg hover:scale-[1.02]"
                      style={{ backgroundColor: 'var(--sage-green)' }}
                    >
                      Add to Cart - {selectedBook.price}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </FadeIn>
    </section>
  );
}
