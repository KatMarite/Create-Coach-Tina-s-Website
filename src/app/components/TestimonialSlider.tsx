"use client";

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, ArrowRight } from 'lucide-react';

/* ─────────────────────────────────────────────
   Shared type definitions
   ───────────────────────────────────────────── */
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  category?: 'corporate' | 'life' | 'youth';
  rating?: number;
}

export interface CaseStudy {
  id: string;
  title: string;
  problem: string;
  intervention: string;
  result: string;
  category?: 'corporate' | 'life' | 'youth';
}

/* ─────────────────────────────────────────────
   Master testimonial bank (10 testimonials)
   ───────────────────────────────────────────── */
export const allTestimonials: Testimonial[] = [
  // ── Corporate ──
  {
    id: 'c1',
    name: 'Sarah M.',
    role: 'Corporate Executive',
    category: 'corporate',
    rating: 5,
    content:
      "Coach Tina's Lead From Within framework completely transformed our executive team's dynamic. We shifted from working in silos to leading with deep empathy and emotional intelligence. The ROI on our team cohesion has been immeasurable.",
  },
  {
    id: 'c2',
    name: 'David L.',
    role: 'Senior Manager, Financial Services',
    category: 'corporate',
    rating: 5,
    content:
      "The Workplace Wellness and Resilience program was exactly what our organisation needed during a season of intense restructuring. Tina's ability to navigate complex organisational trauma while providing practical tools for leaders is unparalleled.",
  },
  {
    id: 'c3',
    name: 'Lerato K.',
    role: 'Head of People & Culture',
    category: 'corporate',
    rating: 5,
    content:
      "We brought Tina in for a two-day leadership intensive. Six months later, our 360-feedback scores had improved across every single metric. She doesn't do surface-level—she rewires how leaders think.",
  },
  {
    id: 'c4',
    name: 'Nomsa D.',
    role: 'COO, Retail Group',
    category: 'corporate',
    rating: 5,
    content:
      "Tina facilitated our executive offsite and the impact was immediate. Team trust went up, and the decision-making bottleneck we'd been stuck in for months dissolved within weeks. She is the real deal.",
  },
  // ── Life & Purpose ──
  {
    id: 'l1',
    name: 'Elena R.',
    role: 'Entrepreneur & Founder',
    category: 'life',
    rating: 5,
    content:
      "Working with Tina 1-on-1 gave me the clarity I didn't even know I was missing. Her coaching helped me regulate my nervous system and finally quiet the high-functioning anxiety that had been driving me for years. I'm a different, more grounded person today.",
  },
  {
    id: 'l2',
    name: 'Jessica W.',
    role: 'Creative Director',
    category: 'life',
    rating: 5,
    content:
      "The Transitions Intensive gave me the exact scaffolding I needed to pivot in my career. Tina creates such a safe, expansive container to explore your identity and step boldly into your next season.",
  },
  {
    id: 'l3',
    name: 'Naledi M.',
    role: 'Marketing Manager',
    category: 'life',
    rating: 5,
    content:
      "The Authentically Woman healing circle was a turning point for me. Finding a safe space to be vulnerable while being pushed to step into my power is rare. Tina creates that space flawlessly.",
  },
  {
    id: 'l4',
    name: 'Thabo S.',
    role: 'Tech Lead & Father of Two',
    category: 'life',
    rating: 5,
    content:
      "I came to Tina burned out and disillusioned. After four sessions I had a personal operating system that actually worked—boundaries, clarity, and a restored sense of purpose. My family noticed the change before I did.",
  },
  // ── Youth / Empower U ──
  {
    id: 'y1',
    name: 'Michael T.',
    role: 'Parent of Achiever (Age 14)',
    category: 'youth',
    rating: 5,
    content:
      "Empower U has been a game-changer for my 14-year-old son. He has gained so much confidence and emotional vocabulary. Watching him apply the tools he learns in his coaching sessions to his daily life has been incredible to witness.",
  },
  {
    id: 'y2',
    name: 'Zanele P.',
    role: 'Parent of Explorer (Age 9)',
    category: 'youth',
    rating: 5,
    content:
      "My daughter used to shut down at the first sign of conflict. After just one term with Empower U Explorers she's articulating her feelings, setting little boundaries with her siblings, and her teacher says she's become a quiet leader in class.",
  },
];

/* ─────────────────────────────────────────────
   Master case-study bank (2 case studies)
   ───────────────────────────────────────────── */
export const allCaseStudies: CaseStudy[] = [
  {
    id: 'cs1',
    title: 'From Burnout to Boardroom Breakthrough',
    category: 'corporate',
    problem:
      'A mid-level executive at a national retail chain was experiencing chronic burnout, declining team performance, and had been flagged in two consecutive performance reviews for poor interpersonal leadership.',
    intervention:
      'Coach Tina facilitated a 6-session 1-on-1 coaching engagement using the Lead From Within framework—focusing on radical self-awareness, nervous-system regulation, and empathetic expansion. Parallel team workshops addressed trust and communication.',
    result:
      "Within 90 days the leader's 360-feedback scores improved by 34 %, team attrition dropped to zero for the following two quarters, and she was promoted to Regional Director within the year.",
  },
  {
    id: 'cs2',
    title: "A Mother's Reset—Finding Wholeness After Loss",
    category: 'life',
    problem:
      'A professional woman and mother of three was navigating career transition, grief after losing a parent, and a growing sense of purposelessness—functioning on autopilot while her relationships suffered.',
    intervention:
      'Through a 12-week Transitions Intensive, Coach Tina combined NLP reframing, faith-rooted identity work, and practical habit-architecture. The client also joined the Authentically Woman circle for community support.',
    result:
      "The client launched a side venture aligned with her values, rebuilt her relationship with her eldest daughter, and reported—for the first time in years—feeling 'fully alive, not just functioning.'",
  },
];

/* ─────────────────────────────────────────────
   <TestimonialSlider />
   ───────────────────────────────────────────── */
interface TestimonialSliderProps {
  categoryFilter?: 'corporate' | 'life' | 'youth';
  title?: string;
  subtitle?: string;
  showCaseStudies?: boolean;
  customTestimonials?: Testimonial[];
  customCaseStudies?: CaseStudy[];
  bgClassName?: string;
}

export function TestimonialSlider({
  categoryFilter,
  title = 'Stories of Transformation',
  subtitle,
  showCaseStudies = false,
  customTestimonials,
  customCaseStudies,
  bgClassName = 'bg-white',
}: TestimonialSliderProps) {
  const testimonials = customTestimonials
    ? customTestimonials
    : categoryFilter
      ? allTestimonials.filter((t) => t.category === categoryFilter)
      : allTestimonials;

  const caseStudies = customCaseStudies
    ? customCaseStudies
    : categoryFilter
      ? allCaseStudies.filter((cs) => cs.category === categoryFilter)
      : allCaseStudies;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = useCallback(() => {
    if (isAnimating || testimonials.length <= 1) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, testimonials.length]);

  const handlePrev = useCallback(() => {
    if (isAnimating || testimonials.length <= 1) return;
    setIsAnimating(true);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, testimonials.length]);

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const interval = setInterval(handleNext, 7000);
    return () => clearInterval(interval);
  }, [currentIndex, testimonials.length, handleNext]);

  if (testimonials.length === 0) return null;

  const current = testimonials[currentIndex];

  return (
    <section className={`py-20 sm:py-28 relative overflow-hidden ${bgClassName}`}>
      {/* Decorative CT Watermark */}
      <div className="ct-watermark opacity-[0.03]">ct.</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <h2
            className="text-3xl md:text-5xl font-serif mb-4"
            style={{ color: 'var(--charcoal)' }}
          >
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg font-light max-w-2xl mx-auto text-gray-500">
              {subtitle}
            </p>
          )}
          <div
            className="w-24 h-1 mx-auto rounded-full mt-6"
            style={{ backgroundColor: 'var(--sage-green)' }}
          />
        </div>

        {/* ── Slider Card ── */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-12 relative min-h-[300px] flex flex-col justify-center">
            <Quote
              className="absolute top-8 left-8 w-12 h-12 opacity-10"
              style={{ color: 'var(--sage-green)' }}
            />

            <div
              className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
            >
              {/* Stars */}
              {current.rating && (
                <div className="flex items-center gap-1 mb-5">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-current"
                      style={{ color: 'var(--teu-yellow)' }}
                    />
                  ))}
                </div>
              )}

              <p className="text-xl md:text-2xl font-light text-gray-700 leading-relaxed mb-8 italic relative z-10">
                &ldquo;{current.content}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-serif text-xl shrink-0"
                  style={{ backgroundColor: 'var(--sage-green)' }}
                >
                  {current.name.charAt(0)}
                </div>
                <div>
                  <h4
                    className="font-semibold"
                    style={{ color: 'var(--charcoal)' }}
                  >
                    {current.name}
                  </h4>
                  <p className="text-sm text-gray-500">{current.role}</p>
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
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? 'w-8' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                    }`}
                    style={
                      idx === currentIndex
                        ? { backgroundColor: 'var(--sage-green)' }
                        : {}
                    }
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

        {/* ── Case Studies ── */}
        {showCaseStudies && caseStudies.length > 0 && (
          <div className="max-w-5xl mx-auto">
            <h3
              className="text-2xl md:text-3xl font-serif text-center mb-10"
              style={{ color: 'var(--charcoal)' }}
            >
              Real Outcomes, Real People
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((cs) => (
                <div
                  key={cs.id}
                  className="bg-gray-50 rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Accent bar */}
                  <div
                    className="h-2 w-full"
                    style={{ backgroundColor: 'var(--sage-green)' }}
                  />
                  <div className="p-8 md:p-10 space-y-6">
                    <h4
                      className="text-xl font-serif"
                      style={{ color: 'var(--charcoal)' }}
                    >
                      {cs.title}
                    </h4>

                    {/* Problem */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                          style={{
                            backgroundColor: 'rgba(42,89,52,0.1)',
                            color: 'var(--sage-green)',
                          }}
                        >
                          Problem
                        </span>
                      </div>
                      <p className="text-gray-600 font-light leading-relaxed">
                        {cs.problem}
                      </p>
                    </div>

                    {/* Arrow Divider */}
                    <div className="flex justify-center">
                      <ArrowRight
                        className="w-5 h-5 rotate-90"
                        style={{ color: 'var(--sage-green)' }}
                      />
                    </div>

                    {/* Intervention */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                          style={{
                            backgroundColor: 'rgba(255,215,0,0.15)',
                            color: '#b8860b',
                          }}
                        >
                          Intervention
                        </span>
                      </div>
                      <p className="text-gray-600 font-light leading-relaxed">
                        {cs.intervention}
                      </p>
                    </div>

                    {/* Arrow Divider */}
                    <div className="flex justify-center">
                      <ArrowRight
                        className="w-5 h-5 rotate-90"
                        style={{ color: 'var(--sage-green)' }}
                      />
                    </div>

                    {/* Result */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                          style={{
                            backgroundColor: 'rgba(42,89,52,0.15)',
                            color: 'var(--sage-green)',
                          }}
                        >
                          Result
                        </span>
                      </div>
                      <p
                        className="font-medium leading-relaxed"
                        style={{ color: 'var(--charcoal)' }}
                      >
                        {cs.result}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
