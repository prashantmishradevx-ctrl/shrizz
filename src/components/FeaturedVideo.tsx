import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw, Sparkles, FileVideo } from 'lucide-react';
import { siteConfig } from '../config/portfolioConfig';

export const FeaturedVideo: React.FC = () => {
  const { featuredVideo } = siteConfig;
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('0:10');

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const curr = videoRef.current.currentTime;
    const dur = videoRef.current.duration || 10;
    setProgress((curr / dur) * 100);

    const format = (secs: number) => {
      const m = Math.floor(secs / 60);
      const s = Math.floor(secs % 60);
      return `${m}:${s < 10 ? '0' : ''}${s}`;
    };

    setCurrentTime(format(curr));
    if (!isNaN(dur)) {
      setDuration(format(dur));
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * (videoRef.current.duration || 10);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const handleRestart = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  };

  return (
    <section id="featured-video" className="py-28 md:py-36 bg-[#080808] border-t border-[#1a1a1a] relative">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#181818] rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-[#222222]/80 gap-6">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8E4DA] animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#737373] font-medium">
                03 • {featuredVideo.sectionTitle}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#F5F2EB] max-w-2xl leading-[1.15]">
              {featuredVideo.headline}
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#A9A9A9] max-w-sm font-light leading-relaxed">
            {featuredVideo.supportingText}
          </p>
        </div>

        {/* Video Player Card */}
        <div className="mt-12 relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9] rounded-2xl overflow-hidden bg-[#050505] border border-[#2b2b2b] shadow-2xl group">
          
          <video
            ref={videoRef}
            src={featuredVideo.videoUrl}
            poster={featuredVideo.posterImage}
            playsInline
            muted={isMuted}
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => setIsPlaying(false)}
            onClick={togglePlay}
            className="w-full h-full object-cover cursor-pointer"
          />

          {/* Ambient Video Vignette Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none transition-opacity duration-300 ${
              isPlaying ? 'opacity-30 group-hover:opacity-60' : 'opacity-80'
            }`}
          />

          {/* Big Center Custom Play Button (When Paused) */}
          {!isPlaying && (
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={togglePlay}
                aria-label="Play 10-second promo video"
                className="pointer-events-auto relative group/btn p-6 rounded-full bg-[#050505]/80 backdrop-blur-md border border-[#E8E4DA]/40 shadow-2xl text-[#F5F2EB] hover:text-[#050505] hover:bg-[#F5F2EB] transition-all duration-300 flex items-center justify-center"
              >
                {/* Outer animated ripple */}
                <span className="absolute -inset-3 rounded-full border border-white/20 animate-ping opacity-30" />
                <Play className="w-8 h-8 fill-current ml-1" />
              </motion.button>
              <span className="text-xs uppercase tracking-[0.25em] text-[#E8E4DA] mt-4 font-light drop-shadow-md">
                Play 10s Motion Reel
              </span>
            </div>
          )}

          {/* Top Info Badges */}
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between pointer-events-none">
            <span className="text-[10px] uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-[#F5F2EB]">
              {featuredVideo.badgeText}
            </span>
            <span className="text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-[#A9A9A9]">
              {featuredVideo.durationLabel}
            </span>
          </div>

          {/* Bottom Custom Video Controls Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/95 to-transparent transition-opacity duration-300 opacity-90 group-hover:opacity-100 flex flex-col space-y-3">
            
            {/* Scrubber / Progress Bar */}
            <div
              onClick={handleSeek}
              className="w-full h-1.5 bg-white/20 hover:h-2.5 rounded-full cursor-pointer relative transition-all"
            >
              <div
                className="h-full bg-[#E8E4DA] rounded-full relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-md" />
              </div>
            </div>

            {/* Controls Row */}
            <div className="flex items-center justify-between text-xs text-[#F5F2EB]">
              <div className="flex items-center space-x-4">
                <button
                  onClick={togglePlay}
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  className="hover:text-[#E8E4DA] transition-colors p-1"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                </button>

                <button
                  onClick={handleRestart}
                  aria-label="Restart video"
                  className="hover:text-[#E8E4DA] transition-colors p-1"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                <button
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                  className="hover:text-[#E8E4DA] transition-colors p-1"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>

                <span className="text-[11px] tracking-wider text-[#A9A9A9] font-mono">
                  {currentTime} / {duration}
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={handleFullscreen}
                  aria-label="Fullscreen"
                  className="hover:text-[#E8E4DA] transition-colors p-1"
                >
                  <Maximize className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Easy Customization Instructions Card */}
        <div className="mt-8 p-5 sm:p-6 rounded-xl bg-[#0e0e0e] border border-[#222222] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start space-x-3">
            <div className="p-2.5 rounded-lg bg-[#161616] text-[#E8E4DA] border border-[#2b2b2b] mt-0.5">
              <FileVideo className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-[#F5F2EB] font-medium block">
                Easy MP4 Customization
              </span>
              <p className="text-xs text-[#8a8a8a] mt-0.5 font-light leading-relaxed">
                {featuredVideo.instructionsNote}
              </p>
            </div>
          </div>

          <div className="text-[11px] uppercase tracking-widest text-[#E8E4DA] bg-[#1a1a1a] px-3 py-1.5 rounded-md border border-[#333333] whitespace-nowrap self-end sm:self-center font-mono">
            src/config/portfolioConfig.ts
          </div>
        </div>

      </div>
    </section>
  );
};
