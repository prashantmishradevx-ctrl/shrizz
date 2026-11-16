import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/portfolioConfig';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'My Work', href: '#work' },
    { name: 'Video Showcase', href: '#featured-video' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#050505]/85 backdrop-blur-md border-b border-[#222222]/80 py-4 shadow-2xl'
            : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Name on the Left */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="group flex flex-col items-start cursor-pointer focus:outline-none"
          >
            <span className="font-serif text-2xl md:text-3xl font-light tracking-wider text-[#F5F2EB] group-hover:text-white transition-colors duration-300">
              {siteConfig.personalName}
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#A9A9A9] font-light -mt-1 group-hover:text-[#E8E4DA] transition-colors duration-300">
              Visual Portfolio
            </span>
          </a>

          {/* Desktop Navigation Links on the Right */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative text-xs uppercase tracking-[0.2em] transition-all duration-300 py-1 font-medium ${
                    isActive
                      ? 'text-[#F5F2EB]'
                      : 'text-[#A9A9A9] hover:text-[#F5F2EB]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#E8E4DA]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}

            {/* Direct Contact Button */}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="text-xs uppercase tracking-[0.2em] px-4 py-2 border border-[#333333] rounded-full text-[#F5F2EB] hover:border-[#E8E4DA] hover:bg-[#F5F2EB] hover:text-[#050505] transition-all duration-300 inline-flex items-center space-x-1.5"
            >
              <span>Book Shoot</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </nav>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 text-[#F5F2EB] hover:text-[#E8E4DA] focus:outline-none focus:ring-1 focus:ring-[#333333] rounded"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-[#050505]/98 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28 md:hidden"
          >
            <div className="flex flex-col space-y-8">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#737373]">
                Navigation Index
              </span>
              <nav className="flex flex-col space-y-6">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.3 }}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="font-serif text-3xl font-light text-[#F5F2EB] hover:text-[#E8E4DA] transition-colors flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs font-sans tracking-widest text-[#737373]">
                      0{idx + 1}
                    </span>
                  </motion.a>
                ))}
              </nav>
            </div>

            <div className="pt-8 border-t border-[#222222] flex flex-col space-y-4">
              <div className="text-xs text-[#A9A9A9] tracking-wider">
                {siteConfig.contact.location}
              </div>
              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-widest text-[#E8E4DA] hover:underline"
              >
                {siteConfig.contact.instagramHandle}
              </a>
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="w-full text-center py-3 text-xs uppercase tracking-[0.2em] bg-[#F5F2EB] text-[#050505] font-medium rounded-full mt-2"
              >
                Inquire for Commissions
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
