import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Play, Eye } from 'lucide-react';
import { siteConfig } from '../config/portfolioConfig';
import { MainCategory, Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export const Work: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<MainCategory>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Works' },
    { id: 'real-estate', label: 'Real Estate' },
    { id: 'business-promotions', label: 'Business Promotions' },
  ];

  const filteredProjects = siteConfig.projects.filter((p) => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  return (
    <section id="work" className="py-28 md:py-36 bg-[#050505] text-[#F5F2EB] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 border-b border-[#222222]/80 gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#737373] font-medium block mb-3">
              02 • Selected Projects
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-[#F5F2EB] leading-[1.1]">
              Architectural & Commercial Stills
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <span className="text-xs uppercase tracking-widest text-[#A9A9A9] mb-3">
              Filter By Discipline
            </span>
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 p-1 rounded-full bg-[#111111] border border-[#262626]">
              {filterTabs.map((tab) => {
                const isActive = selectedCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedCategory(tab.id as MainCategory)}
                    className={`px-4 sm:px-5 py-2 rounded-full text-xs uppercase tracking-[0.18em] transition-all duration-300 font-medium ${
                      isActive
                        ? 'bg-[#F5F2EB] text-[#050505] shadow-lg'
                        : 'text-[#A9A9A9] hover:text-[#F5F2EB] hover:bg-[#1a1a1a]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Category Description Banner */}
        <div className="py-6 flex flex-wrap items-center justify-between text-xs text-[#737373] uppercase tracking-wider border-b border-[#181818]">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8E4DA]" />
            <span>
              {selectedCategory === 'all'
                ? 'Displaying Real Estate & Business Promotions'
                : selectedCategory === 'real-estate'
                ? 'Villas, Penthouses, Estates & Interior Tours'
                : 'Flagship Showrooms, Boutiques & Local Business Promotions'}
            </span>
          </div>
          <span className="text-[11px] text-[#A9A9A9]">
            {filteredProjects.length} Projects Shown • Click to view details
          </span>
        </div>

        {/* Asymmetrical Editorial Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 pt-12 items-stretch"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => {
              // Create an asymmetrical cadence:
              // idx % 3 === 0: 7-columns, idx % 3 === 1: 5-columns, idx % 3 === 2: 12-columns or 6-cols
              let colSpan = 'md:col-span-6 lg:col-span-6';
              let aspectClass = 'aspect-[16/10]';

              if (idx % 4 === 0) {
                colSpan = 'md:col-span-7 lg:col-span-7';
                aspectClass = 'aspect-[16/11]';
              } else if (idx % 4 === 1) {
                colSpan = 'md:col-span-5 lg:col-span-5';
                aspectClass = 'aspect-[4/3]';
              } else if (idx % 4 === 2) {
                colSpan = 'md:col-span-5 lg:col-span-5';
                aspectClass = 'aspect-[4/3]';
              } else {
                colSpan = 'md:col-span-7 lg:col-span-7';
                aspectClass = 'aspect-[16/11]';
              }

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, delay: 0.05 * idx, ease: [0.16, 1, 0.3, 1] }}
                  className={`${colSpan} group flex flex-col cursor-pointer`}
                  onClick={() => setActiveProject(project)}
                >
                  {/* Image Card Container */}
                  <div className={`relative w-full ${aspectClass} rounded-2xl overflow-hidden bg-[#111111] border border-[#222222] group-hover:border-[#555555] transition-all duration-500 shadow-xl`}>
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                      loading="lazy"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[#F5F2EB]">
                        {project.categoryLabel}
                      </span>

                      <div className="flex items-center space-x-2">
                        {project.videoUrl && (
                          <span className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-center text-[#E8E4DA]">
                            <Play className="w-3.5 h-3.5 fill-current" />
                          </span>
                        )}
                        <span className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-center text-[#F5F2EB] group-hover:bg-[#F5F2EB] group-hover:text-[#050505] transition-colors duration-300">
                          <ArrowUpRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>

                    {/* Bottom Preview Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <div className="text-[11px] uppercase tracking-widest text-[#A9A9A9] mb-1 font-light">
                        {project.location} • {project.year}
                      </div>
                      <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F2EB] font-light leading-snug group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    {/* Hover Hint */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="px-4 py-2 rounded-full bg-[#050505]/90 backdrop-blur-md border border-white/20 text-xs uppercase tracking-widest text-[#F5F2EB] flex items-center space-x-2">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect Project</span>
                      </div>
                    </div>
                  </div>

                  {/* Minimal Metadata Below Card */}
                  <div className="pt-3 px-1 flex items-start justify-between">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#A9A9A9] font-light">
                        {project.subCategory}
                      </span>
                    </div>
                    {project.isDemo && (
                      <span className="text-[10px] uppercase tracking-widest text-[#737373]">
                        Demo Content
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Portfolio Footer Note */}
        <div className="mt-16 p-8 rounded-2xl bg-[#0c0c0c] border border-[#222222] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-serif text-xl sm:text-2xl text-[#F5F2EB] font-light">
              Looking for tailored visual coverage of your space?
            </h4>
            <p className="text-xs text-[#A9A9A9] mt-1 font-light">
              Custom packages available for real estate agencies, interior architects, and retail business owners.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-[#333333] hover:border-[#E8E4DA] bg-transparent hover:bg-[#F5F2EB] hover:text-[#050505] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 whitespace-nowrap"
          >
            Request Rate Sheet
          </a>
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
