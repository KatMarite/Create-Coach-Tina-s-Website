"use client";

import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { Mail, Send, ExternalLink } from 'lucide-react';

export function Contact() {
  const [result, setResult] = useState("Send Message");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");

    const formData = new FormData(event.currentTarget);
    // TODO: Replace with actual Web3Forms Access Key
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully!");
        (event.target as HTMLFormElement).reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.log("Failed to submit form", error);
      setResult("Submission Failed. Please try again.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setResult("Send Message"), 3000); // Reset text after 3 seconds
    }
  };

  return (
    <div className="pt-24 sm:pt-28 md:pt-32 pb-16 bg-white min-h-screen">
      <section className="py-8 sm:py-12 bg-white">
        <FadeIn>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-10 sm:mb-16">
              <div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase mb-4 bg-gray-100" style={{ color: 'var(--sage-green)' }}>
                Contact / Book
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight mb-8" style={{ color: 'var(--charcoal)' }}>
                Ready to rise? Let’s start the conversation.
              </h1>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-lg transition-all shadow-md hover:shadow-xl text-center flex items-center justify-center font-medium" style={{ backgroundColor: 'var(--sage-green)', color: 'white' }}>
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Book via Calendly
                </a>
                <a href="mailto:bookings@coachtina.co.za" className="px-8 py-4 rounded-lg border-2 transition-all hover:bg-gray-50 text-center flex items-center justify-center font-medium" style={{ borderColor: 'var(--charcoal)', color: 'var(--charcoal)' }}>
                  <Mail className="w-5 h-5 mr-2" />
                  Email: bookings@coachtina.co.za
                </a>
              </div>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="bg-gray-50 p-8 sm:p-12 rounded-3xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-serif mb-6 text-center" style={{ color: 'var(--charcoal)' }}>Intake Form</h2>
                <p className="text-center text-gray-500 font-light mb-8">Fill out this form to inquire about coaching, corporate facilitation, or Empower U programmes.</p>
                <form onSubmit={onSubmit} className="space-y-6">
                  <input type="hidden" name="subject" value="New Intake Submission from Coach Tina Website" />
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                      <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--sage-green)] focus:border-transparent" placeholder="Jane Doe" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--sage-green)] focus:border-transparent" placeholder="jane@example.com" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="inquiry_type" className="block text-sm font-medium text-gray-700 mb-1">Are you inquiring for individual coaching or corporate facilitation?</label>
                    <select id="inquiry_type" name="inquiry_type" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--sage-green)] focus:border-transparent text-gray-700">
                      <option value="Individual Coaching">Individual Coaching</option>
                      <option value="Corporate Facilitation">Corporate Facilitation</option>
                      <option value="Empower U Academy">Empower U Academy</option>
                      <option value="Speaking">Speaking</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="challenge" className="block text-sm font-medium text-gray-700 mb-1">What is the primary challenge keeping you from your ‘Rise’ phase?</label>
                    <textarea id="challenge" name="challenge" required rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--sage-green)] focus:border-transparent resize-none" placeholder="Describe your challenge..."></textarea>
                  </div>

                  <div>
                    <label htmlFor="outcome" className="block text-sm font-medium text-gray-700 mb-1">What outcome do you want to be true 90 days from now?</label>
                    <textarea id="outcome" name="outcome" required rows={2} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--sage-green)] focus:border-transparent resize-none" placeholder="Your desired outcome..."></textarea>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Where are you based (city/country)?</label>
                      <input type="text" id="location" name="location" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--sage-green)] focus:border-transparent" placeholder="Johannesburg, South Africa" />
                    </div>
                    <div>
                      <label htmlFor="readiness" className="block text-sm font-medium text-gray-700 mb-1">On a scale of 1–10, how ready are you to invest in your transformation?</label>
                      <select id="readiness" name="readiness" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--sage-green)] focus:border-transparent text-gray-700">
                        <option value="1">1 - Not ready</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5 - Somewhat ready</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10 - Fully ready</option>
                      </select>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-lg text-white font-medium transition-all hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100 mt-4"
                    style={{ backgroundColor: 'var(--sage-green)' }}
                  >
                    <Send className="w-5 h-5" />
                    {result}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
