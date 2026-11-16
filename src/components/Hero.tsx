import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Compass, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/portfolioConfig';

export const Hero: React.FC = () => {
  const images = siteConfig.heroCircularImages;

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#050505] text-[#F5F2EB] flex flex-col justify-between pt-28 md:pt-36 pb-12 overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#161616] rounded-full blur-3xl opacity-40 pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-[32rem] h-[32rem] bg-[#111111] rounded-full blur-3xl opacity-50 pointer-events-none -z-10" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ========================================================= */}
          {/* LEFT SIDE: Large Personal Name, Headline, Supporting Text & CTAs */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col space-y-6 md:space-y-8 z-10">
            {/* Top Minimal Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center space-x-2.5 self-start px-3.5 py-1.5 rounded-full border border-[#2a2a2a] bg-[#0c0c0c]/80 backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8E4DA] animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#A9A9A9] font-medium">
                {siteConfig.heroBadge}
              </span>
            </motion.div>

            {/* Personal Name & Portfolio Subtitle */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl font-light tracking-tight text-[#F5F2EB] leading-[0.92]"
              >
                {siteConfig.personalName}
              </motion.h1>

              {/* Under the name: "Real Estate & Business Portfolio" */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs sm:text-sm md:text-base uppercase tracking-[0.25em] text-[#A9A9A9] font-light pl-1"
              >
                {siteConfig.tagline}
              </motion.p>
            </div>

            {/* Main Editorial Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="pt-2 border-t border-[#222222]/80"
            >
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#E8E4DA] leading-[1.15] italic">
                {siteConfig.heroHeadline}
              </h2>
            </motion.div>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm md:text-base text-[#A9A9A9] font-light leading-relaxed max-w-xl"
            >
              {siteConfig.heroSupportingText}
            </motion.p>

            {/* Action Buttons: Minimal Contact Me with thin white border + Explore My Work */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              {/* Explore My Work CTA */}
              <button
                onClick={() => scrollToSection('#work')}
                className="group relative px-7 py-3.5 rounded-full bg-[#F5F2EB] text-[#050505] text-xs uppercase tracking-[0.2em] font-semibold overflow-hidden transition-all duration-300 hover:bg-white hover:shadow-[0_0_25px_rgba(245,242,235,0.25)] flex items-center space-x-2"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
              </button>

              {/* Minimal Contact Me button with thin white border */}
              <button
                onClick={() => scrollToSection('#contact')}
                className="group px-7 py-3.5 rounded-full border border-[#F5F2EB]/40 bg-transparent text-[#F5F2EB] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:border-[#F5F2EB] hover:bg-[#F5F2EB]/5 hover:text-white flex items-center space-x-2"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
              </button>
            </motion.div>

            {/* Disciplines Index Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[#1a1a1a] text-[11px] uppercase tracking-[0.18em] text-[#737373]"
            >
              <div>
                <span className="text-[#A9A9A9] block font-medium">01 • Real Estate</span>
                <span>Homes & Penthouses</span>
              </div>
              <div>
                <span className="text-[#A9A9A9] block font-medium">02 • Showrooms</span>
                <span>Flagship Retail</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-[#A9A9A9] block font-medium">03 • Motion</span>
                <span>4K Architectural Reels</span>
              </div>
            </motion.div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT SIDE: Artistic Collage of 3-4 Overlapping Circular Photos */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 relative mt-8 lg:mt-0">
            {/* Desktop Composition Container */}
            <div className="relative w-full h-[460px] sm:h-[560px] lg:h-[620px] xl:h-[660px] hidden md:block">
              {/* Subtle aesthetic backdrop orbit ring */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] lg:w-[500px] h-[420px] lg:h-[500px] rounded-full border border-[#222222]/40 pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] lg:w-[320px] h-[280px] lg:h-[320px] rounded-full border border-[#333333]/30 pointer-events-none" />

              {/* Circle 1 - Upper Left: Exterior Villa with pool */}
              {images[0] && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.85, x: -30 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.04, zIndex: 40 }}
                  className="group absolute top-[4%] left-[4%] w-[240px] lg:w-[290px] xl:w-[320px] aspect-square rounded-full overflow-hidden p-1.5 bg-[#0e0e0e] border border-[#333333] shadow-2xl shadow-black/80 transition-all duration-500 cursor-pointer"
                  onClick={() => scrollToSection('#work')}
                >
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <img
                      src={images[0].url}
                      alt={images[0].alt}
                      className="w-full h-full object-cover grayscale-[15%] contrast-[1.08] transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 text-center">
                      <span className="text-[10px] tracking-widest uppercase bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 text-[#F5F2EB]">
                        {images[0].badge}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Circle 2 - Upper Right Centerpiece: Sculptural Luxury Living Room Interior */}
              {images[1] && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.85, y: -30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.05, zIndex: 45 }}
                  className="group absolute top-[16%] right-[2%] w-[260px] lg:w-[310px] xl:w-[350px] aspect-square rounded-full overflow-hidden p-1.5 bg-[#0e0e0e] border border-[#444444] shadow-[0_20px_50px_rgba(0,0,0,0.9)] z-30 transition-all duration-500 cursor-pointer"
                  onClick={() => scrollToSection('#work')}
                >
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <img
                      src={images[1].url}
                      alt={images[1].alt}
                      className="w-full h-full object-cover grayscale-[10%] contrast-[1.08] transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 text-center">
                      <span className="text-[10px] tracking-widest uppercase bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 text-[#F5F2EB]">
                        {images[1].badge}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Circle 3 - Lower Left: Minimalist Boutique Showroom / Store Interior */}
              {images[2] && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.85, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.05, zIndex: 40 }}
                  className="group absolute bottom-[6%] left-[12%] w-[220px] lg:w-[260px] xl:w-[290px] aspect-square rounded-full overflow-hidden p-1.5 bg-[#0e0e0e] border border-[#333333] shadow-2xl shadow-black/80 z-20 transition-all duration-500 cursor-pointer"
                  onClick={() => scrollToSection('#work')}
                >
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <img
                      src={images[2].url}
                      alt={images[2].alt}
                      className="w-full h-full object-cover grayscale-[15%] contrast-[1.08] transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 text-center">
                      <span className="text-[10px] tracking-widest uppercase bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 text-[#F5F2EB]">
                        {images[2].badge}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Circle 4 - Lower Right: Geometric Concrete Villa Pavilion */}
              {images[3] && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.85, x: 30 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.06, zIndex: 40 }}
                  className="group absolute bottom-[14%] right-[10%] w-[190px] lg:w-[220px] xl:w-[250px] aspect-square rounded-full overflow-hidden p-1.5 bg-[#0e0e0e] border border-[#333333] shadow-2xl shadow-black/80 z-10 transition-all duration-500 cursor-pointer"
                  onClick={() => scrollToSection('#work')}
                >
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <img
                      src={images[3].url}
                      alt={images[3].alt}
                      className="w-full h-full object-cover grayscale-[15%] contrast-[1.08] transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 text-center">
                      <span className="text-[10px] tracking-widest uppercase bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 text-[#F5F2EB]">
                        {images[3].badge}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Central Floating Editorial Monogram */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-35 pointer-events-none">
                <div className="w-14 h-14 rounded-full bg-[#050505]/90 backdrop-blur-md border border-[#333333] flex items-center justify-center shadow-2xl">
                  <span className="font-serif text-sm tracking-widest text-[#E8E4DA] italic">
                    SP
                  </span>
                </div>
              </div>
            </div>

            {/* ======================================================= */}
            {/* MOBILE COMPOSITION: Clean, Overlapping Circular Collage */}
            {/* ======================================================= */}
            <div className="md:hidden relative w-full h-[360px] sm:h-[420px] flex items-center justify-center">
              {/* Central Primary Circle */}
              {images[1] && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="absolute z-20 w-56 sm:w-64 aspect-square rounded-full overflow-hidden p-1 bg-[#111111] border border-[#444444] shadow-2xl"
                >
                  <img
                    src={images[1].url}
                    alt={images[1].alt}
                    className="w-full h-full rounded-full object-cover"
                  />
                </motion.div>
              )}

              {/* Overlapping Top-Left Circle */}
              {images[0] && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="absolute top-2 left-2 z-10 w-36 sm:w-44 aspect-square rounded-full overflow-hidden p-1 bg-[#0a0a0a] border border-[#333333] shadow-xl"
                >
                  <img
                    src={images[0].url}
                    alt={images[0].alt}
                    className="w-full h-full rounded-full object-cover grayscale-[15%]"
                  />
                </motion.div>
              )}

              {/* Overlapping Bottom-Right Circle */}
              {images[2] && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute bottom-2 right-2 z-30 w-36 sm:w-44 aspect-square rounded-full overflow-hidden p-1 bg-[#0a0a0a] border border-[#333333] shadow-xl"
                >
                  <img
                    src={images[2].url}
                    alt={images[2].alt}
                    className="w-full h-full rounded-full object-cover grayscale-[15%]"
                  />
                </motion.div>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Minimal Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-8 flex items-center justify-between border-t border-[#1a1a1a]/80 text-[#737373] text-[11px] uppercase tracking-[0.2em]">
        <div className="flex items-center space-x-2">
          <Compass className="w-3.5 h-3.5 text-[#A9A9A9]" />
          <span>Curated Real Estate & Showroom Visuals</span>
        </div>
        <button
          onClick={() => scrollToSection('#about')}
          className="flex items-center space-x-1.5 hover:text-[#F5F2EB] transition-colors focus:outline-none"
        >
          <span>Scroll</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};
