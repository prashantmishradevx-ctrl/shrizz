import React from 'react';
import { motion } from 'framer-motion';
import { Home, Film, Store, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/portfolioConfig';

export const About: React.FC = () => {
  const { about } = siteConfig;

  const iconMap: Record<string, React.ReactNode> = {
    Home: <Home className="w-5 h-5" />,
    Film: <Film className="w-5 h-5" />,
    Store: <Store className="w-5 h-5" />,
    Sparkles: <Sparkles className="w-5 h-5" />,
  };

  return (
    <section id="about" className="relative py-28 md:py-36 bg-[#080808] border-t border-[#1a1a1a]">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#141414] rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-[#222222]/80 gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#737373] font-medium block mb-3">
              01 • About & Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#F5F2EB] max-w-2xl leading-[1.15]">
              {about.headline}
            </h2>
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#A9A9A9] max-w-xs font-light">
            {about.subheading}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-16 items-start">
          
          {/* Left Column: Portrait Photograph & Identity */}
          <div className="lg:col-span-5 flex flex-col items-center sm:items-start space-y-6">
            <div className="relative group w-full max-w-[340px] sm:max-w-[380px]">
              {/* Outer decorative ring */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#333333] bg-[#111111] p-2 shadow-2xl">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <img
                    src={about.profileImage}
                    alt={about.profileAlt}
                    className="w-full h-full object-cover object-top grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Floating Identity Card */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-[#050505]/85 backdrop-blur-md border border-[#333333]/80">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#A9A9A9] block">
                      Creator
                    </span>
                    <h3 className="font-serif text-xl text-[#F5F2EB] font-light">
                      {siteConfig.personalName}
                    </h3>
                    <p className="text-xs text-[#737373] mt-0.5 font-light">
                      {about.roleTitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Minimal tag under portrait */}
              <div className="flex items-center justify-between pt-3 px-1 text-[11px] text-[#737373] uppercase tracking-widest w-full">
                <span>Visual Director</span>
                <span className="text-[#A9A9A9]">Editorial Standard</span>
              </div>
            </div>
          </div>

          {/* Right Column: Personal Introduction, Work Types & Creative Approach */}
          <div className="lg:col-span-7 flex flex-col space-y-12">
            
            {/* Introduction Text */}
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] text-[#E8E4DA] font-medium block">
                The Vision
              </span>
              {about.introductionParagraphs.map((para, idx) => (
                <p
                  key={idx}
                  className="text-base sm:text-lg text-[#A9A9A9] font-light leading-relaxed"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* What kind of promotional work I create */}
            <div className="pt-6 border-t border-[#1f1f1f]">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs uppercase tracking-[0.2em] text-[#F5F2EB] font-medium">
                  What Promotional Work I Create
                </span>
                <span className="text-[11px] uppercase tracking-widest text-[#737373]">
                  04 Core Disciplines
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {about.promotionalWork.map((item) => (
                  <div
                    key={item.id}
                    className="p-5 rounded-xl bg-[#0d0d0d] border border-[#222222] hover:border-[#444444] transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#161616] text-[#E8E4DA] flex items-center justify-center mb-4 group-hover:bg-[#F5F2EB] group-hover:text-[#050505] transition-colors duration-300">
                      {iconMap[item.iconName] || <Sparkles className="w-5 h-5" />}
                    </div>
                    <h3 className="font-serif text-lg text-[#F5F2EB] font-medium group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#8c8c8c] mt-2 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* My Creative Approach */}
            <div className="pt-6 border-t border-[#1f1f1f]">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs uppercase tracking-[0.2em] text-[#F5F2EB] font-medium">
                  My Creative Approach
                </span>
                <span className="text-[11px] uppercase tracking-widest text-[#737373]">
                  Methodology
                </span>
              </div>

              <div className="space-y-4">
                {about.creativeApproach.map((step) => (
                  <div
                    key={step.number}
                    className="flex flex-col sm:flex-row sm:items-start gap-4 p-5 rounded-xl bg-[#0c0c0c]/60 border border-[#1e1e1e] hover:border-[#333333] transition-colors"
                  >
                    <span className="font-serif text-2xl text-[#E8E4DA] font-light min-w-[40px]">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="text-sm uppercase tracking-wider text-[#F5F2EB] font-medium">
                        {step.title}
                      </h3>
                      <p className="text-xs text-[#8c8c8c] mt-1.5 leading-relaxed font-light">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Link to Portfolio */}
            <div className="pt-4 flex items-center">
              <a
                href="#work"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#E8E4DA] hover:text-white group font-medium"
              >
                <span>View Selected Showcase</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
