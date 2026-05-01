"use client";

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  category?: 'corporate' | 'life' | 'youth';
}

const placeholderTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah M.',
    role: 'Corporate Executive',
    category: 'corporate',
    content: "Coach Tina's Lead From Within framework completely transformed our executive team's dynamic. We shifted from working in silos to leading with deep empathy and emotional intelligence. The ROI on our team cohesion has been immeasurable."
  },
  {
    id: '2',
    name: 'David L.',
    role: 'Senior Manager',
    category: 'corporate',
    content: "The Workplace Wellness and Resilience program was exactly what our organization needed during a season of intense change. Tina's ability to navigate complex organizational trauma while providing practical tools for leaders is unparalleled."
  },
  {
    id: '3',
    name: 'Elena R.',
    role: 'Entrepreneur',
    category: 'life',
    content: "Working with Tina 1-on-1 gave me the clarity I didn't even know I was missing. Her coaching helped me regulate my nervous system and finally quiet the high-functioning anxiety that had been driving me for years. I am a different, more grounded person today."
  },
  {
    id: '4',
    name: 'Michael T.',
    role: 'Parent of Achiever',
    category: 'youth',
    content: "Empower U has been a game-changer for my 14-year-old son. He has gained so much confidence and emotional vocabulary. Watching him apply the tools he learns in his coaching sessions to his daily life has been incredible to witness."
  },
  {
    id: '5',
    name: 'Jessica W.',
    role: 'Creative Director',
    category: 'life',
    content: "The Transitions Intensive gave me the exact scaffolding I needed to pivot in my career. Tina creates such a safe, expansive container to explore your identity and step boldly into your next season."
  }
];

interface TestimonialSliderProps {
  categoryFilter?: 'corporate' | 'life' | 'youth';
  title?: string;
}

export function TestimonialSlider({ categoryFilter, title = "Stories of Transformation" }: TestimonialSliderProps) {
  const testimonials = categoryFilter 
    ? placeholderTestimonials.filter(t => t.category === categoryFilter)
    : placeholderTestimonials;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(interval);
  }, [currentIndex, testimonials.length]);

  const handleNext = () => {
    if (isAnimating || testimonials.length <= 1) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating || testimonials.length <= 1) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  if (testimonials.length === 0) return null;

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Decorative CT Watermark */}
      <div className="ct-watermark opacity-[0.03]">ct.</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif mb-4" style={{ color: 'var(--charcoal)' }}>
            {title}
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: 'var(--sage-green)' }} />
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="ct-card p-8 md:p-12 relative min-h-[300px] flex flex-col justify-center">
            <Quote className="absolute top-8 left-8 w-12 h-12 opacity-10" style={{ color: 'var(--sage-green)' }} />
            
            <div 
              className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
            >
              <p className="text-xl md:text-2xl font-light text-gray-700 leading-relaxed mb-8 italic relative z-10">
                "{testimonials[currentIndex].content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-serif text-xl" style={{ backgroundColor: 'var(--sage-green)' }}>
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold" style={{ color: 'var(--charcoal)' }}>{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-gray-500">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          {testimonials.length > 1 && (
            <div className="flex justify-center items-center gap-6 mt-10">
              <button 
                onClick={handlePrev}
                className="w-12 h-12 rounded-full flex items-center justify-center border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      if (!isAnimating && idx !== currentIndex) {
                        setIsAnimating(true);
                        setCurrentIndex(idx);
                        setTimeout(() => setIsAnimating(false), 500);
                      }
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? 'w-8 bg-sage-green' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    style={idx === currentIndex ? { backgroundColor: 'var(--sage-green)' } : {}}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>

              <button 
                onClick={handleNext}
                className="w-12 h-12 rounded-full flex items-center justify-center border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
