"use client";

import React from 'react';
import { FadeIn } from './FadeIn';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

export function Resources() {
  const articles = [
    {
      title: "Why 'Tough Love' Leadership is Dead",
      category: "Leadership",
      date: "Oct 15, 2023",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      excerpt: "The modern workforce doesn't respond to fear. Discover how leading with empathy and clear expectations generates higher ROI and retention."
    },
    {
      title: "Navigating Imposter Syndrome as a Female Executive",
      category: "Personal Growth",
      date: "Sep 28, 2023",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      excerpt: "You've earned your seat at the table. Here are 3 psychological reframes to help you own your voice when the stakes are high."
    },
    {
      title: "The Anatomy of a Perfect 1:1 Meeting",
      category: "Team Management",
      date: "Sep 12, 2023",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      excerpt: "Stop using 1:1s for status updates. Learn how to transform your weekly check-ins into powerful coaching and alignment sessions."
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <FadeIn>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-6 md:space-y-0">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1.5 rounded-full text-sm font-light tracking-wide bg-blue-50 text-blue-700 mb-6">
              Insights & Articles
            </div>
            <h2 className="font-serif text-4xl md:text-5xl mb-6" style={{ color: 'var(--charcoal)' }}>
              Latest Thinking
            </h2>
            <p className="text-lg font-light" style={{ color: '#4b5563' }}>
              Explore deep dives on leadership, corporate wellness, and mastering the art of authentic influence.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="flex bg-white rounded-lg p-1 shadow-sm border border-gray-200">
              <input type="email" placeholder="Subscribe to newsletter" className="px-4 py-2 outline-none text-sm w-64 bg-transparent" />
              <button className="px-4 py-2 rounded text-sm text-white font-medium" style={{ backgroundColor: 'var(--sage-green)' }}>Subscribe</button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((article, idx) => (
            <article key={idx} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200 group cursor-pointer flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center justify-between mt-2 mb-4">
                  <span className="text-xs font-bold tracking-wider uppercase" style={{ color: 'var(--sage-green)' }}>
                    {article.category}
                  </span>
                </div>
                <h3 className="font-serif text-2xl mb-4 group-hover:text-blue-700 transition-colors" style={{ color: 'var(--charcoal)' }}>
                  {article.title}
                </h3>
                <p className="font-light text-gray-600 mb-6 flex-1 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-400 font-light pb-4 border-b border-gray-200 mb-4">
                  <div className="flex items-center gap-1"><Calendar className="w-4 h-4"/> {article.date}</div>
                  <div className="flex items-center gap-1"><Clock className="w-4 h-4"/> {article.readTime}</div>
                </div>

                <div className="flex items-center text-sm font-medium gap-2 transition-colors" style={{ color: 'var(--charcoal)' }}>
                  Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </FadeIn>
    </section>
  );
}
