import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Pause, ChevronLeft, ChevronRight, CheckCircle, Info, Calendar, MapPin, Tag } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    setActiveImageIndex(0);
    setShowVideo(false);
    setIsVideoPlaying(false);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const images = project.gallery && project.gallery.length > 0 ? project.gallery : [project.coverImage];

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#050505]/90 backdrop-blur-xl transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl max-h-[92vh] bg-[#0c0c0c] border border-[#2b2b2b] rounded-2xl shadow-2xl overflow-y-auto z-10 flex flex-col"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0c0c0c]/90 backdrop-blur-md border-b border-[#222222]">
            <div className="flex items-center space-x-3">
              {project.isDemo && (
                <span className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-widest bg-[#1a1a1a] text-[#E8E4DA] border border-[#333333]">
                  <Info className="w-3 h-3 text-[#E8E4DA]" />
                  <span>Sample Showcase • Demo</span>
                </span>
              )}
              <span className="text-xs uppercase tracking-widest text-[#737373] hidden sm:inline">
                {project.categoryLabel} / {project.subCategory}
              </span>
            </div>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 text-[#A9A9A9] hover:text-[#F5F2EB] bg-[#161616] hover:bg-[#222222] rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 md:p-8 space-y-8">
            
            {/* Visual Media Viewer (Images or Video) */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden bg-[#050505] border border-[#222222]">
              {showVideo && project.videoUrl ? (
                <div className="w-full h-full relative flex items-center justify-center bg-black">
                  <video
                    src={project.videoUrl}
                    poster={project.videoPoster || images[0]}
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                  />
                  <button
                    onClick={() => setShowVideo(false)}
                    className="absolute top-4 right-4 text-xs uppercase tracking-widest bg-black/70 hover:bg-black text-white px-3 py-1.5 rounded-full border border-white/20 transition-colors"
                  >
                    View Photos
                  </button>
                </div>
              ) : (
                <div className="w-full h-full relative group">
                  <img
                    src={images[activeImageIndex]}
                    alt={`${project.title} - view ${activeImageIndex + 1}`}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  
                  {/* Photo Navigation Arrows */}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        aria-label="Previous image"
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-sm border border-white/10 transition-all opacity-80 group-hover:opacity-100"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        aria-label="Next image"
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-sm border border-white/10 transition-all opacity-80 group-hover:opacity-100"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}

                  {/* Optional Video Toggle Button */}
                  {project.videoUrl && (
                    <button
                      onClick={() => setShowVideo(true)}
                      className="absolute bottom-4 right-4 flex items-center space-x-2 bg-black/80 hover:bg-black text-[#F5F2EB] px-4 py-2 rounded-full border border-[#333333] text-xs uppercase tracking-wider backdrop-blur-md transition-colors"
                    >
                      <Play className="w-3.5 h-3.5 fill-current text-[#E8E4DA]" />
                      <span>Watch Motion Reel</span>
                    </button>
                  )}

                  {/* Counter badge */}
                  <div className="absolute bottom-4 left-4 text-[11px] tracking-widest bg-black/75 px-3 py-1 rounded-full border border-white/10 text-[#A9A9A9]">
                    {activeImageIndex + 1} / {images.length}
                  </div>
                </div>
              )}
            </div>

            {/* Thumbnail Strip */}
            {images.length > 1 && !showVideo && (
              <div className="flex items-center space-x-3 overflow-x-auto pb-2">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIndex(i)}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden flex-shrink-0 border transition-all ${
                      activeImageIndex === i
                        ? 'border-[#E8E4DA] scale-105'
                        : 'border-[#222222] opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Thumb ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Project Title & Metadata */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-[#A9A9A9]">
                <span className="flex items-center space-x-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#737373]" />
                  <span>{project.year}</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#737373]" />
                  <span>{project.location}</span>
                </span>
                <span>•</span>
                <span className="text-[#E8E4DA]">{project.subCategory}</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F2EB] font-light leading-tight">
                {project.title}
              </h2>

              <p className="text-base sm:text-lg text-[#F5F2EB]/90 font-light leading-relaxed">
                {project.summary}
              </p>

              <p className="text-sm text-[#A9A9A9] font-light leading-relaxed pt-2">
                {project.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] uppercase tracking-wider px-3 py-1 rounded-full bg-[#141414] text-[#A9A9A9] border border-[#222222]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Scope & Deliverables */}
            <div className="p-6 rounded-xl bg-[#111111] border border-[#222222] space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] text-[#E8E4DA] font-medium block">
                Deliverables & Production Scope
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.deliverables.map((deliv, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5">
                    <CheckCircle className="w-4 h-4 text-[#E8E4DA] mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-xs text-[#F5F2EB] font-medium block">
                        {deliv.label}
                      </span>
                      <span className="text-xs text-[#737373] font-light">
                        {deliv.detail}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inquire Footer CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-[#1e1e1e] gap-4">
              <div className="text-xs text-[#737373] text-center sm:text-left">
                Interested in editorial photography or video coverage for your property?
              </div>
              <a
                href="#contact"
                onClick={() => onClose()}
                className="px-6 py-3 rounded-full bg-[#F5F2EB] hover:bg-white text-[#050505] text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300"
              >
                Inquire For This Service
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
