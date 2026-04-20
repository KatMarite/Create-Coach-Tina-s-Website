"use client";

import React from 'react';
import { FadeIn } from './FadeIn';
import { Quote, Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      text: "Working with Tina fundamentally changed my approach to leadership. Her 'Lead From Within' framework opened my eyes to my own blind spots and radically improved how I communicate with my executive team.",
      author: "Sarah Jenkins",
      role: "VP of Operations, TechFlow Inc.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      text: "The resilience workshop our team attended was incredible. Morale has been consistently higher, and our burnout rates dropped significantly in the following quarter. Tina's energy is purely magnetic.",
      author: "Marcus T.",
      role: "HR Director",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      text: "As someone navigating a massive career shift, Tina's 1:1 coaching gave me the anchor I desperately needed. She doesn't just give you tools; she helps you build the unshakeable confidence needed to use them.",
      author: "Elena Rodriguez",
      role: "Founder, Bloom Creative",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      text: "The Authentically Woman healing circle was a turning point for me. Finding a safe space to be vulnerable while being pushed to step into my power is rare. Tina creates that space flawlessly.",
      author: "Naledi M.",
      role: "Marketing Manager",
      image: "https://images.unsplash.com/photo-1531123414780-f74244c2831a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <FadeIn>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full text-sm font-light tracking-wide bg-gray-100 text-gray-800">
            Client Success Stories
          </div>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight" style={{ color: 'var(--charcoal)' }}>
            Real Results from Real Leaders
          </h2>
          <p className="text-lg font-light leading-relaxed" style={{ color: '#4b5563' }}>
            Transformation isn't just an idea—it's a measurable outcome. Here is what recent clients 
            have to say about the impact of our partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-gray-50 p-8 md:p-10 rounded-3xl relative">
              <Quote className="absolute top-8 right-8 w-12 h-12 text-gray-200" />
              <div className="flex items-center gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-current" style={{ color: 'var(--sage-green)' }} />
                ))}
              </div>
              <p className="text-lg font-light italic leading-relaxed mb-8 relative z-10" style={{ color: '#4b5563' }}>
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.author} className="w-14 h-14 rounded-full object-cover shadow-md" />
                <div>
                  <h4 className="font-medium" style={{ color: 'var(--charcoal)' }}>{t.author}</h4>
                  <p className="text-sm font-light text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
    </section>
  );
}
