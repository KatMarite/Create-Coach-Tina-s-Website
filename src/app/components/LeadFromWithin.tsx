"use client";

import React from 'react';
import { FadeIn } from './FadeIn';
import { Eye, HeartHandshake, Compass, Zap } from 'lucide-react';

export function LeadFromWithin() {
  const steps = [
    {
      icon: Eye,
      title: "1. Radical Self-Awareness",
      desc: "It starts with looking inward. We uncover your intrinsic values, dominant leadership style, and the blind spots holding you back."
    },
    {
      icon: Compass,
      title: "2. Strategic Alignment",
      desc: "We align your newly discovered personal truths with your professional trajectory, ensuring your goals resonate deeply with who you are."
    },
    {
      icon: HeartHandshake,
      title: "3. Empathetic Expansion",
      desc: "True leadership extends outward. We build strategies for empathetic communication, creating psychological safety for those you lead."
    },
    {
      icon: Zap,
      title: "4. Aligned Execution",
      desc: "Finally, we bridge the gap between intention and action. You step into your environment making decisive, value-based actions with unshakeable confidence."
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <FadeIn>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="lg:order-2">
            <div className="inline-block px-4 py-1.5 rounded-full text-sm font-light tracking-wide bg-gray-100 text-gray-800 mb-6">
              Our Methodology
            </div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8" style={{ color: 'var(--charcoal)' }}>
              The 'Lead From Within' Framework
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed mb-10" style={{ color: '#4b5563' }}>
              <p>
                The most pervasive myth in corporate culture is that leadership is a role you step into. 
                In reality, true leadership is a frequency you operate from. It cannot be faked, and it cannot 
                be sustained if it isn't rooted securely in your authentic self.
              </p>
              <p>
                The <strong>Lead From Within</strong> framework is Coach Tina's proprietary methodology. It is a four-stage 
                journey designed to strip away the performance of leadership and replace it with genuine, 
                magnetic influence.
              </p>
            </div>

            <div className="space-y-8">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="flex gap-4">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 z-10 relative" style={{ backgroundColor: 'var(--sage-green)' }}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      {idx !== steps.length - 1 && (
                        <div className="absolute top-12 bottom-[-2rem] left-1/2 w-[2px] -translate-x-1/2 bg-gray-200 z-0" />
                      )}
                    </div>
                    <div className="pb-4">
                      <h3 className="text-xl font-serif mb-2" style={{ color: 'var(--charcoal)' }}>{step.title}</h3>
                      <p className="font-light text-gray-600 line-clamp-3 md:line-clamp-none">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:order-1 relative h-full min-h-[500px]">
             <div className="sticky top-32">
               <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl relative">
                 <img 
                   src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                   alt="Framework Visualization" 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-10">
                   <p className="text-white font-serif text-2xl leading-relaxed italic">
                     "You cannot lead others to a place you haven't been willing to go yourself."
                   </p>
                 </div>
               </div>
               
               {/* Decorative Element */}
               <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full mix-blend-multiply filter blur-xl opacity-70" style={{ backgroundColor: 'var(--sage-green)' }}></div>
             </div>
          </div>

        </div>
      </div>
    </FadeIn>
    </section>
  );
}
