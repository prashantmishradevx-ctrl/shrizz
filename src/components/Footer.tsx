import React from 'react';
import { ArrowUp, Instagram, Mail, Phone, MessageSquare } from 'lucide-react';
import { siteConfig } from '../config/portfolioConfig';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'My Work', href: '#work' },
    { name: 'Motion Reel', href: '#featured-video' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#050505] text-[#F5F2EB] border-t border-[#1a1a1a] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#1c1c1c] items-start">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-serif text-3xl sm:text-4xl font-light tracking-wider text-[#F5F2EB]">
              {siteConfig.personalName}
            </h3>
            <p className="text-xs uppercase tracking-[0.25em] text-[#A9A9A9] font-light">
              {siteConfig.tagline}
            </p>
            <p className="text-xs sm:text-sm text-[#737373] max-w-sm font-light leading-relaxed pt-2">
              Spaces. Stories. Visual Experiences. Dedicated to showcasing fine architectural residences, luxury home tours, boutique showrooms, and local enterprises with high-fashion editorial art direction.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A9A9A9] font-medium block mb-4">
              Directory
            </span>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs uppercase tracking-wider text-[#737373] hover:text-[#F5F2EB] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A9A9A9] font-medium block mb-4">
              Connect & Licensing
            </span>
            <div className="flex flex-col space-y-2.5 text-xs text-[#737373]">
              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F5F2EB] transition-colors flex items-center space-x-2"
              >
                <Instagram className="w-3.5 h-3.5 text-[#E8E4DA]" />
                <span>{siteConfig.contact.instagramHandle}</span>
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:text-[#F5F2EB] transition-colors flex items-center space-x-2"
              >
                <Mail className="w-3.5 h-3.5 text-[#E8E4DA]" />
                <span>{siteConfig.contact.email}</span>
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="hover:text-[#F5F2EB] transition-colors flex items-center space-x-2 font-mono"
              >
                <Phone className="w-3.5 h-3.5 text-[#E8E4DA]" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </a>
            </div>

            <div className="pt-4">
              <span className="text-[10px] uppercase tracking-widest text-[#555555] block">
                Central Configuration:
              </span>
              <span className="text-[10px] text-[#888888] font-mono">
                src/config/portfolioConfig.ts
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#555555] tracking-wider gap-4">
          <div>
            © {new Date().getFullYear()} {siteConfig.personalName}. All visual rights reserved. Sample projects clearly marked for demo demonstration.
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center space-x-2 text-[#A9A9A9] hover:text-[#F5F2EB] transition-colors group"
          >
            <span className="uppercase tracking-[0.2em]">Back to Top</span>
            <div className="p-1.5 rounded-full border border-[#2b2b2b] group-hover:border-[#E8E4DA] transition-colors">
              <ArrowUp className="w-3 h-3" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
