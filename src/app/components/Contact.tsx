"use client";

import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

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
    <section id="contact" className="py-16 sm:py-20 lg:py-32 bg-gray-50">
      <FadeIn>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full text-sm font-light tracking-wide mb-4" style={{ backgroundColor: 'var(--sage-green)', color: 'white' }}>
            Get In Touch
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl" style={{ color: 'var(--charcoal)' }}>
            Let's Start Your Journey
          </h2>
          <p className="mt-4 text-lg font-light max-w-2xl mx-auto" style={{ color: '#4b5563' }}>
            Whether you are looking for 1:1 coaching, corporate training, or just have a question, I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 item-center">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="font-serif text-2xl" style={{ color: 'var(--charcoal)' }}>Contact Information</h3>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--sage-green)', opacity: 0.1 }}>
                <Mail className="w-6 h-6" style={{ color: 'var(--sage-green)' }} />
              </div>
              <div>
                <h4 className="font-medium" style={{ color: 'var(--charcoal)' }}>Email</h4>
                <a href="mailto:hello@coachtina.com" className="text-sm font-light hover:underline" style={{ color: '#374151' }}>hello@coachtina.com</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--sage-green)', opacity: 0.1 }}>
                <Phone className="w-6 h-6" style={{ color: 'var(--sage-green)' }} />
              </div>
              <div>
                <h4 className="font-medium" style={{ color: 'var(--charcoal)' }}>Phone</h4>
                <a href="tel:+27123456789" className="text-sm font-light hover:underline" style={{ color: '#374151' }}>+27 (12) 345 6789</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--sage-green)', opacity: 0.1 }}>
                <MapPin className="w-6 h-6" style={{ color: 'var(--sage-green)' }} />
              </div>
              <div>
                <h4 className="font-medium" style={{ color: 'var(--charcoal)' }}>Office Base</h4>
                <p className="text-sm font-light" style={{ color: '#374151' }}>Pretoria, South Africa<br />(Available virtually worldwide)</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl">
            <form onSubmit={onSubmit} className="space-y-6">
              <input type="hidden" name="subject" value="New Submission from Coach Tina Website" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--sage-green)] focus:ring-opacity-50" placeholder="Jane Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--sage-green)] focus:ring-opacity-50" placeholder="jane@example.com" />
                </div>
              </div>
              
              <div>
                <label htmlFor="inquiry" className="block text-sm font-medium text-gray-700 mb-1">I am interested in...</label>
                <select id="inquiry" name="inquiry" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 focus:outline-none text-gray-700">
                  <option value="1:1 Coaching">1:1 Coaching</option>
                  <option value="Corporate Training">Corporate Training</option>
                  <option value="Speaking Engagement">Speaking Engagement</option>
                  <option value="Other">Other Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                <textarea id="message" name="message" required rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 focus:outline-none resize-none" placeholder="Tell me a bit about what you're looking for..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-white font-medium transition-all hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100"
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
  );
}
