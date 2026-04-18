"use client";

import React from 'react';
import { HeartPulse, Brain, BatteryCharging, ShieldCheck } from 'lucide-react';

export function WellnessWorkshops() {
  const offerings = [
    {
      icon: HeartPulse,
      title: "Resilience in Action",
      desc: "Equipping teams with practical tools to bounce back from setbacks, manage stress dynamically, and maintain high performance during challenging periods."
    },
    {
      icon: Brain,
      title: "Emotional Intelligence Masterclass",
      desc: "Developing self-awareness, empathy, and constructive communication to build psychologically safe and highly collaborative workspaces."
    },
    {
      icon: BatteryCharging,
      title: "Burnout Prevention & Recovery",
      desc: "Identifying early signs of burnout, establishing healthy boundaries, and creating sustainable work habits that protect both energy and ambition."
    },
    {
      icon: ShieldCheck,
      title: "Wellbeing & Inner Wholeness",
      desc: "A holistic approach combining mental and emotional strategies with physical grounding techniques to foster complete personal wellness."
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full text-sm font-light tracking-wide bg-blue-50 text-blue-700">
            Corporate Wellness
          </div>
          <h2 className="font-serif text-4xl md:text-5xl" style={{ color: 'var(--charcoal)' }}>
            Empower Your Team with Wellness & Resilience
          </h2>
          <p className="text-lg font-light leading-relaxed" style={{ color: '#4b5563' }}>
            In today's fast-paced corporate environment, mental wellbeing is not a luxury—it is 
            the foundation of sustainable success. My workshops are designed to equip leaders 
            and their teams with the emotional and psychological tools needed to thrive under pressure.
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {offerings.map((offering, idx) => {
            const Icon = offering.icon;
            return (
              <div key={idx} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow border border-gray-100">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'white', color: 'var(--sage-green)' }}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-serif mb-3" style={{ color: 'var(--charcoal)' }}>{offering.title}</h3>
                <p className="font-light text-gray-600 leading-relaxed">{offering.desc}</p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Team Workshop" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          </div>
          
          <div className="relative p-12 lg:p-20 text-center">
            <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">
              Ready to transform your workplace culture?
            </h3>
            <p className="text-gray-200 font-light max-w-2xl mx-auto mb-10 text-lg">
              Book a discovery call today, and let's design a custom workshop that addresses 
              your team's specific wellbeing and resilience needs.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-medium text-white transition-transform hover:scale-105"
              style={{ backgroundColor: 'var(--sage-green)' }}
            >
              Inquire About Workshops
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
