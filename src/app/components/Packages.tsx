"use client";

import React from 'react';
import { FadeIn } from './FadeIn';
import { Check } from 'lucide-react';

export function Packages() {
  const packages = [
    {
      name: "Starter Momentum",
      price: "R4,500/mo",
      description: "Ideal for emerging leaders looking for foundational guidance and quick strategic wins.",
      features: [
        "Two 60-minute 1:1 sessions per month",
        "Email support between sessions",
        "Initial deep-dive discovery call",
        "Action plan & goal tracking board"
      ],
      highlighted: false
    },
    {
      name: "Executive Growth",
      price: "R8,500/mo",
      description: "Comprehensive support for seasoned professionals navigating complex transitions.",
      features: [
        "Four 60-minute 1:1 sessions per month",
        "Priority email and WhatsApp support",
        "Comprehensive personality & leadership assessment",
        "Strategic career mapping",
        "Access to all digital templates & tools"
      ],
      highlighted: true
    },
    {
      name: "Corporate Retainer",
      price: "Custom",
      description: "Full-scale partnership for organizations embedding coaching deeply into company culture.",
      features: [
        "Dedicated block of monthly hours",
        "Executive & mid-level management coaching",
        "Quarterly team strategy workshops",
        "Cultural alignment audits",
        "Priority scheduling"
      ],
      highlighted: false
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <FadeIn>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-serif text-4xl md:text-5xl mb-6" style={{ color: 'var(--charcoal)' }}>
            Investment Packages
          </h2>
          <p className="text-lg font-light" style={{ color: '#4b5563' }}>
            Choose the level of partnership that best fits your immediate goals and long-term vision. 
            All standard packages require a minimum 3-month commitment to ensure actionable transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-center">
          {packages.map((pkg, idx) => (
            <div 
              key={idx} 
              className={`rounded-2xl p-8 relative flex flex-col h-full bg-white transition-all
                ${pkg.highlighted 
                  ? 'shadow-2xl border-2 scale-100 md:scale-105 z-10' 
                  : 'shadow border border-gray-200'}`}
              style={pkg.highlighted ? { borderColor: 'var(--sage-green)' } : {}}
            >
              {pkg.highlighted && (
                <div 
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full text-xs font-bold text-white tracking-wider uppercase"
                  style={{ backgroundColor: 'var(--sage-green)' }}
                >
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-xl font-medium mb-4" style={{ color: 'var(--charcoal)' }}>{pkg.name}</h3>
                <div className="text-4xl font-serif mb-4" style={{ color: 'var(--charcoal)' }}>
                  {pkg.price}
                </div>
                <p className="text-sm font-light text-gray-500 min-h-[40px]">{pkg.description}</p>
              </div>

              <div className="flex-1">
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--sage-green)' }} />
                      <span className="text-sm font-light text-gray-700 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a 
                href="/contact"
                className={`w-full py-4 text-center rounded-lg font-medium transition-all hover:scale-[1.02] ${
                  pkg.highlighted ? 'text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
                style={pkg.highlighted ? { backgroundColor: 'var(--sage-green)' } : {}}
              >
                Inquire Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
    </section>
  );
}
