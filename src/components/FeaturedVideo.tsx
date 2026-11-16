import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw, Sparkles, Film, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/portfolioConfig';

export const FeaturedVideo: React.FC = () => {
  const { featuredVideo } = siteConfig;
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false); // Can be unmuted by default or user choice
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('0:15');

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
    const dur = videoRef.current.duration || 15;
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
    videoRef.current.currentTime = pos * (videoRef.current.duration || 15);
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
    <section id="featured-video" className="py-28 md:py-36 bg-[#080808] border-t border-[#1a1a1a] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-[36rem] h-[36rem] bg-[#161616] rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-[#222222]/80 gap-6">
          <div>
            <div className="flex items-center space-x-2.5 mb-3">
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

        {/* Video Stage: Editorial Dual-Column Presentation */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (Desktop): Motion Narrative, Technical Specifications & Booking CTA */}
          <div className="lg:col-span-6 flex flex-col space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#121212] border border-[#2b2b2b] text-[10px] uppercase tracking-[0.2em] text-[#E8E4DA]">
                <Film className="w-3.5 h-3.5" />
                <span>{featuredVideo.badgeText}</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-[#F5F2EB] font-light leading-tight">
                Movement, Light & Atmosphere in Motion
              </h3>

              <p className="text-sm sm:text-base text-[#A9A9A9] font-light leading-relaxed">
                Short-form promotional video designed to immediately arrest visual attention. Combining graceful natural movement, cinematic lighting, and authentic texture to evoke genuine desire and connection.
              </p>
            </div>

            {/* Video Specs Grid */}
            <div className="grid grid-cols-2 gap-4 p-6 rounded-2xl bg-[#0d0d0d] border border-[#222222]">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#737373] block">
                  Duration & Format
                </span>
                <span className="text-sm text-[#F5F2EB] font-medium mt-0.5 block">
                  {featuredVideo.durationLabel}
                </span>
                <span className="text-[11px] text-[#A9A9A9] font-light">
                  9:16 Vertical Reel
                </span>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#737373] block">
                  Sound Design
                </span>
                <span className="text-sm text-[#F5F2EB] font-medium mt-0.5 block">
                  Original Audio Track
                </span>
                <span className="text-[11px] text-[#A9A9A9] font-light">
                  Stereo Spatial Mix
                </span>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#737373] block">
                  Framerate
                </span>
                <span className="text-sm text-[#F5F2EB] font-medium mt-0.5 block">
                  60 FPS High Dynamic
                </span>
                <span className="text-[11px] text-[#A9A9A9] font-light">
                  Smooth Fluid Playback
                </span>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#737373] block">
                  Commission Use
                </span>
                <span className="text-sm text-[#F5F2EB] font-medium mt-0.5 block">
                  Social & Digital Screens
                </span>
                <span className="text-[11px] text-[#A9A9A9] font-light">
                  Instagram, Showrooms & Web
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full bg-[#F5F2EB] hover:bg-white text-[#050505] text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 flex items-center space-x-2"
              >
                <span>Commission Video Promo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={togglePlay}
                className="px-6 py-3.5 rounded-full border border-[#333333] hover:border-[#E8E4DA] bg-[#0c0c0c] text-[#F5F2EB] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 flex items-center space-x-2"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                <span>{isPlaying ? 'Pause Video' : 'Play Showcase'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Custom Vertical Cinema Video Player */}
          <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[9/16] rounded-3xl overflow-hidden bg-[#050505] border border-[#333333] shadow-[0_25px_60px_rgba(0,0,0,0.95)] group">
              
              {/* Blurred Ambient Glow Halo Behind Phone Frame */}
              <div
                className="absolute inset-0 scale-110 filter blur-2xl opacity-40 -z-10 pointer-events-none"
                style={{
                  backgroundImage: `url(${featuredVideo.posterImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />

              <video
                ref={videoRef}
                src={featuredVideo.videoUrl}
                poster={featuredVideo.posterImage}
                playsInline
                loop
                muted={isMuted}
                onTimeUpdate={handleTimeUpdate}
                onClick={togglePlay}
                className="w-full h-full object-cover cursor-pointer"
              />

              {/* Ambient Vignette */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none transition-opacity duration-300 ${
                  isPlaying ? 'opacity-30 group-hover:opacity-60' : 'opacity-80'
                }`}
              />

              {/* Big Center Play Button (When Paused) */}
              {!isPlaying && (
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={togglePlay}
                    aria-label="Play promotional video"
                    className="pointer-events-auto relative p-6 rounded-full bg-[#050505]/85 backdrop-blur-md border border-[#E8E4DA]/50 shadow-2xl text-[#F5F2EB] hover:text-[#050505] hover:bg-[#F5F2EB] transition-all duration-300 flex items-center justify-center"
                  >
                    <span className="absolute -inset-2.5 rounded-full border border-white/25 animate-ping opacity-35" />
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </motion.button>
                  <span className="text-xs uppercase tracking-[0.25em] text-[#E8E4DA] mt-4 font-light drop-shadow-md">
                    Tap to Play Reel
                  </span>
                </div>
              )}

              {/* Top Badges */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between pointer-events-none z-10">
                <span className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-[#F5F2EB]">
                  {featuredVideo.badgeText}
                </span>
                <span className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-[#A9A9A9]">
                  {featuredVideo.durationLabel}
                </span>
              </div>

              {/* Bottom Custom Video Controls */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/95 to-transparent transition-opacity duration-300 opacity-90 group-hover:opacity-100 flex flex-col space-y-2.5 z-10">
                
                {/* Scrubber Progress Bar */}
                <div
                  onClick={handleSeek}
                  className="w-full h-1.5 bg-white/20 hover:h-2 rounded-full cursor-pointer relative transition-all"
                >
                  <div
                    className="h-full bg-[#E8E4DA] rounded-full relative"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white shadow-md" />
                  </div>
                </div>

                {/* Buttons Row */}
                <div className="flex items-center justify-between text-xs text-[#F5F2EB] pt-1">
                  <div className="flex items-center space-x-3">
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
                      {isMuted ? <VolumeX className="w-4 h-4 text-[#A9A9A9]" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                    </button>
                  </div>

                  <div className="flex items-center space-x-3">
                    <span className="text-[10px] tracking-wider text-[#A9A9A9] font-mono">
                      {currentTime} / {duration}
                    </span>

                    <button
                      onClick={handleFullscreen}
                      aria-label="Fullscreen"
                      className="hover:text-[#E8E4DA] transition-colors p-1"
                    >
                      <Maximize className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
