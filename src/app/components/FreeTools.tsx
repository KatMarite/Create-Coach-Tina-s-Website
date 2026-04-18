"use client";

import React from 'react';
import { Download, FileText, CheckCircle2 } from 'lucide-react';

export function FreeTools() {
  const tools = [
    {
      title: "The Weekly Alignment Planner",
      desc: "A one-page template to help you structure your week around high-leverage activities and non-negotiable boundaries.",
      type: "PDF Template",
      image: "https://images.unsplash.com/photo-1507925922837-326f4660c531?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Core Values Audit",
      desc: "A meditative workbook designed to help you uncover your top 5 core values and assess if your current career aligns with them.",
      type: "Workbook",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "The Difficult Conversation Cheat Sheet",
      desc: "Step-by-step scripts and psychological framing to help you navigate high-stakes conversations with empathy and authority.",
      type: "Reference Guide",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full text-sm font-light tracking-wide bg-blue-50 text-blue-700">
            Free Resources
          </div>
          <h2 className="font-serif text-4xl md:text-5xl" style={{ color: 'var(--charcoal)' }}>
            Tools to Support Your Growth
          </h2>
          <p className="text-lg font-light leading-relaxed" style={{ color: '#4b5563' }}>
            I believe that foundational coaching tools should be accessible to everyone. 
            Download these free worksheets and guides to jumpstart your journey toward clearer leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, idx) => (
            <div key={idx} className="bg-gray-50 rounded-3xl overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 flex flex-col h-full">
              <div className="h-48 relative">
                <img src={tool.image} alt={tool.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full flex items-center gap-2 text-xs font-medium text-gray-800">
                  <FileText className="w-3 h-3" />
                  {tool.type}
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="font-serif text-xl mb-3" style={{ color: 'var(--charcoal)' }}>{tool.title}</h3>
                <p className="font-light text-gray-600 mb-8 leading-relaxed flex-1">
                  {tool.desc}
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--sage-green)' }}>
                    <CheckCircle2 className="w-4 h-4" /> Delivered instantly via email
                  </div>
                  <button 
                    className="w-full py-3 rounded-lg font-medium text-white flex justify-center items-center gap-2 transition-transform hover:scale-[1.02]"
                    style={{ backgroundColor: 'var(--charcoal)' }}
                  >
                    <Download className="w-4 h-4" />
                    Download Free
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
