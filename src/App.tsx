import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Work } from './components/Work';
import { FeaturedVideo } from './components/FeaturedVideo';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { SlidersHorizontal, Check, X, ArrowUpRight } from 'lucide-react';
import { siteConfig } from './config/portfolioConfig';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [showConfigHelper, setShowConfigHelper] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'work', 'featured-video', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F2EB] selection:bg-[#E8E4DA] selection:text-[#050505] relative selection:font-medium">
      {/* Editorial Custom Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main>
        {/* Section 2: Hero */}
        <Hero />

        {/* Section 4: About Me */}
        <About />

        {/* Section 5: My Work — Main Portfolio */}
        <Work />

        {/* Section 6: Featured 10s Video Showcase */}
        <FeaturedVideo />

        {/* Section 7: Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick Customization Helper Button (Floating in bottom-right corner) */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setShowConfigHelper(!showConfigHelper)}
          aria-label="Portfolio configuration helper"
          className="group flex items-center space-x-2 px-3.5 py-2 rounded-full bg-[#141414]/90 hover:bg-[#1f1f1f] border border-[#333333] hover:border-[#E8E4DA] backdrop-blur-md shadow-2xl text-[11px] uppercase tracking-widest text-[#A9A9A9] hover:text-[#F5F2EB] transition-all duration-300"
        >
          <SlidersHorizontal className="w-3.5 h-3.5 text-[#E8E4DA]" />
          <span className="hidden sm:inline">Config Guide</span>
        </button>
      </div>

      {/* Customization Modal Guide */}
      {showConfigHelper && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-xl bg-[#0d0d0d] border border-[#333333] rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[88vh] overflow-y-auto">
            <button
              onClick={() => setShowConfigHelper(false)}
              className="absolute top-5 right-5 p-2 text-[#737373] hover:text-[#F5F2EB] bg-[#1a1a1a] rounded-full transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#E8E4DA] block font-medium">
                Centralized Configuration System
              </span>
              <h3 className="font-serif text-2xl text-[#F5F2EB] font-light">
                How to Customize This Portfolio
              </h3>
              <p className="text-xs text-[#A9A9A9] font-light leading-relaxed">
                All branding, photos, project cards, MP4 video links, and contact channels are centralized in a single file:
              </p>

              <div className="p-3.5 rounded-lg bg-[#050505] border border-[#222222] font-mono text-xs text-[#E8E4DA]">
                src/config/portfolioConfig.ts
              </div>

              <div className="space-y-3 pt-2 text-xs text-[#8c8c8c]">
                <div className="flex items-start space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8E4DA] mt-1.5 flex-shrink-0" />
                  <div>
                    <strong className="text-[#F5F2EB]">Personal Name & Title:</strong> Change <code className="text-[#E8E4DA]">personalName</code> and <code className="text-[#E8E4DA]">tagline</code>.
                  </div>
                </div>
                <div className="flex items-start space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8E4DA] mt-1.5 flex-shrink-0" />
                  <div>
                    <strong className="text-[#F5F2EB]">Hero Circular Photos:</strong> Update <code className="text-[#E8E4DA]">heroCircularImages</code> array (supports 3-4 images).
                  </div>
                </div>
                <div className="flex items-start space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8E4DA] mt-1.5 flex-shrink-0" />
                  <div>
                    <strong className="text-[#F5F2EB]">Featured 10s Video:</strong> Place your video in <code className="text-[#E8E4DA]">public/promo.mp4</code> and set <code className="text-[#E8E4DA]">featuredVideo.videoUrl = "/promo.mp4"</code>.
                  </div>
                </div>
                <div className="flex items-start space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8E4DA] mt-1.5 flex-shrink-0" />
                  <div>
                    <strong className="text-[#F5F2EB]">Contact & Social:</strong> Configure <code className="text-[#E8E4DA]">phone</code>, <code className="text-[#E8E4DA]">whatsappNumber</code>, <code className="text-[#E8E4DA]">instagramUrl</code>, and <code className="text-[#E8E4DA]">email</code>.
                  </div>
                </div>
                <div className="flex items-start space-x-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8E4DA] mt-1.5 flex-shrink-0" />
                  <div>
                    <strong className="text-[#F5F2EB]">Add New Projects:</strong> Simply append a new project object into the <code className="text-[#E8E4DA]">projects</code> list.
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setShowConfigHelper(false)}
                  className="px-6 py-2.5 rounded-full bg-[#F5F2EB] text-[#050505] text-xs uppercase tracking-widest font-semibold hover:bg-white transition-colors"
                >
                  Got It
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
