import { Mail, Instagram, Linkedin, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <img 
              src="/images/logo.png" 
              alt="Coach Tina Logo" 
              className="h-24 md:h-32 w-auto object-contain -ml-2" 
            />
            <p className="text-sm font-light max-w-md leading-relaxed" style={{ color: '#374151' }}>
              Empowering individuals to discover their purpose, unlock their potential, and create lives that truly matter.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-current transition-colors group" style={{ '--hover-bg': 'var(--sage-green)' } as React.CSSProperties}>
                <Instagram className="w-5 h-5 group-hover:text-white" style={{ color: 'var(--charcoal)' }} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-current transition-colors group">
                <Linkedin className="w-5 h-5 group-hover:text-white" style={{ color: 'var(--charcoal)' }} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-current transition-colors group">
                <Youtube className="w-5 h-5 group-hover:text-white" style={{ color: 'var(--charcoal)' }} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-current transition-colors group">
                <Mail className="w-5 h-5 group-hover:text-white" style={{ color: 'var(--charcoal)' }} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif mb-4" style={{ color: 'var(--charcoal)' }}>
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {['Coaching', 'Training & Facilitation', 'Empower U', 'Podcast', 'Books & Resources', 'Authentically Woman'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm font-light hover:opacity-70 transition-opacity"
                    style={{ color: '#374151' }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif mb-4" style={{ color: 'var(--charcoal)' }}>
              Get in Touch
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:hello@coachtina.com"
                  className="text-sm font-light hover:opacity-70 transition-opacity"
                  style={{ color: '#374151' }}
                >
                  hello@coachtina.com
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-light hover:opacity-70 transition-opacity"
                  style={{ color: '#374151' }}
                >
                  Schedule a Call
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-light hover:opacity-70 transition-opacity"
                  style={{ color: '#374151' }}
                >
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-light" style={{ color: '#9ca3af' }}>
            © 2026 Coach Tina. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm font-light hover:opacity-70 transition-opacity" style={{ color: '#9ca3af' }}>
              Privacy Policy
            </a>
            <a href="#" className="text-sm font-light hover:opacity-70 transition-opacity" style={{ color: '#9ca3af' }}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}