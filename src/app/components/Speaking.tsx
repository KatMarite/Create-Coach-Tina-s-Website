"use client";

import React from 'react';
import { FadeIn } from './FadeIn';
import { Mic, Globe, Users, Target } from 'lucide-react';

export function Speaking() {
  const topics = [
    {
      title: "The Authentic Leader: Leading from Within",
      desc: "An exploration into why the most powerful leadership starts with radical self-awareness and how to cultivate it daily."
    },
    {
      title: "Resilience in the Face of Disruption",
      desc: "Actionable strategies for maintaining team morale, focus, and mental wellness during periods of intense organizational change."
    },
    {
      title: "Women in Power: Owning Your Voice",
      desc: "A passionate keynote aimed at women stepping into executive roles, breaking through imposter syndrome, and commanding rooms with grace."
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <FadeIn>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full text-sm font-light tracking-wide mb-6" style={{ backgroundColor: 'var(--sage-green)', color: 'white' }}>
              Keynote Speaker
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight" style={{ color: 'var(--charcoal)' }}>
              Inspire, Engage & Transform Your Audience
            </h2>
            <p className="text-lg font-light leading-relaxed mb-8" style={{ color: '#4b5563' }}>
              Coach Tina is a dynamic, sought-after speaker known for delivering thought-provoking, 
              high-energy keynotes that leave audiences not just inspired, but equipped with practical 
              frameworks for immediate application.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex items-center gap-3">
                <Globe className="w-6 h-6" style={{ color: 'var(--sage-green)' }} />
                <span className="font-medium text-gray-800">Global Audiences</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6" style={{ color: 'var(--sage-green)' }} />
                <span className="font-medium text-gray-800">Corporate Teams</span>
              </div>
              <div className="flex items-center gap-3">
                <Mic className="w-6 h-6" style={{ color: 'var(--sage-green)' }} />
                <span className="font-medium text-gray-800">Virtual & Live</span>
              </div>
              <div className="flex items-center gap-3">
                <Target className="w-6 h-6" style={{ color: 'var(--sage-green)' }} />
                <span className="font-medium text-gray-800">Action-Oriented</span>
              </div>
            </div>
            <a 
              href="/contact" 
              className="inline-flex px-8 py-4 rounded-lg text-white font-medium transition-transform hover:scale-105"
              style={{ backgroundColor: 'var(--charcoal)' }}
            >
              Book Coach Tina to Speak
            </a>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/images/serv3.jpeg" 
                alt="Coach Tina Speaking" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative block */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-3xl -z-10" style={{ backgroundColor: 'var(--sage-green)', opacity: 0.2 }} />
          </div>
        </div>

        <div className="bg-white rounded-3xl p-10 lg:p-16 shadow-lg border border-gray-200">
          <h3 className="font-serif text-3xl mb-12 text-center" style={{ color: 'var(--charcoal)' }}>Signature Keynote Topics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {topics.map((topic, i) => (
              <div key={i} className="space-y-4">
                <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center font-serif text-xl" style={{ color: 'var(--sage-green)' }}>
                  0{i + 1}
                </div>
                <h4 className="text-xl font-medium" style={{ color: 'var(--charcoal)' }}>{topic.title}</h4>
                <p className="font-light text-gray-600 leading-relaxed">{topic.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
    </section>
  );
}
