import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  Instagram, 
  MessageSquare, 
  ArrowUpRight, 
  Copy, 
  Check, 
  Send, 
  Calendar,
  Sparkles 
} from 'lucide-react';
import { siteConfig } from '../config/portfolioConfig';

export const Contact: React.FC = () => {
  const { contact } = siteConfig;
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Real Estate Photography & Home Tour',
    propertyType: '',
    message: '',
  });

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(contact.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.whatsappMessage)}`;
  const mailtoUrl = `mailto:${contact.email}?subject=${encodeURIComponent('Visual Project Inquiry • ' + formData.service)}&body=${encodeURIComponent(
    `Hello ${siteConfig.personalName},\n\nI would like to discuss a promotional shoot.\nName: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\nSpace / Location: ${formData.propertyType}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-28 md:py-36 bg-[#050505] text-[#F5F2EB] relative border-t border-[#1a1a1a]">
      {/* Background ambient lighting */}
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-[#161616] rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-[#222222]/80 gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#737373] font-medium block mb-3">
              04 • Direct Commission
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-[#F5F2EB] max-w-2xl leading-[1.1]">
              {contact.headline}
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end space-y-1">
            <span className="text-xs uppercase tracking-widest text-[#E8E4DA]">
              {contact.availability}
            </span>
            <span className="text-xs text-[#737373] font-light">
              {contact.location}
            </span>
          </div>
        </div>

        {/* Quick Action Button Bar: Contact Me, Instagram, Send Email */}
        <div className="py-8 border-b border-[#181818] flex flex-wrap items-center gap-4">
          {/* WhatsApp Direct Action Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-full bg-[#F5F2EB] text-[#050505] text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 hover:bg-white hover:shadow-[0_0_20px_rgba(245,242,235,0.2)] flex items-center space-x-2"
          >
            <MessageSquare className="w-4 h-4 text-emerald-700" />
            <span>Contact Me (WhatsApp)</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Instagram Action Button */}
          <a
            href={contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-full border border-[#333333] hover:border-[#E8E4DA] bg-[#0c0c0c] hover:bg-[#161616] text-[#F5F2EB] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 flex items-center space-x-2"
          >
            <Instagram className="w-4 h-4 text-[#E8E4DA]" />
            <span>Instagram</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
          </a>

          {/* Send Email Action Button */}
          <a
            href={`mailto:${contact.email}?subject=Project%20Commission%20Inquiry`}
            className="px-6 py-3.5 rounded-full border border-[#333333] hover:border-[#E8E4DA] bg-[#0c0c0c] hover:bg-[#161616] text-[#F5F2EB] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 flex items-center space-x-2"
          >
            <Mail className="w-4 h-4 text-[#E8E4DA]" />
            <span>Send Email</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>

        {/* Main 2-Column Grid: Contact Information & Interactive Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 items-start">
          
          {/* Left Column: Direct Configurable Contact Details */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div>
              <h3 className="font-serif text-2xl text-[#F5F2EB] font-light">
                Direct Inquiries
              </h3>
              <p className="text-xs text-[#A9A9A9] mt-1 font-light leading-relaxed">
                Connect directly via telephone, encrypted WhatsApp chat, or editorial email. Response within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              
              {/* Phone Card */}
              <div className="p-5 rounded-xl bg-[#0d0d0d] border border-[#222222] hover:border-[#444444] transition-all flex items-center justify-between group">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-[#161616] text-[#E8E4DA] flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#737373] block">
                      Direct Telephone
                    </span>
                    <a
                      href={`tel:${contact.phone}`}
                      className="text-sm text-[#F5F2EB] hover:text-[#E8E4DA] font-mono tracking-wider transition-colors"
                    >
                      {contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  title="Copy Phone Number"
                  className="p-2 text-[#737373] hover:text-[#F5F2EB] transition-colors"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Email Card */}
              <div className="p-5 rounded-xl bg-[#0d0d0d] border border-[#222222] hover:border-[#444444] transition-all flex items-center justify-between group">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-[#161616] text-[#E8E4DA] flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#737373] block">
                      Editorial Email
                    </span>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-sm text-[#F5F2EB] hover:text-[#E8E4DA] font-light transition-colors"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  title="Copy Email"
                  className="p-2 text-[#737373] hover:text-[#F5F2EB] transition-colors"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* WhatsApp Card */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl bg-[#0d0d0d] border border-[#222222] hover:border-[#444444] transition-all flex items-center justify-between group block"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-[#161616] text-[#E8E4DA] flex items-center justify-center">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#737373] block">
                      Instant WhatsApp Chat
                    </span>
                    <span className="text-sm text-[#F5F2EB] group-hover:text-[#E8E4DA] font-light transition-colors">
                      Start Chat on WhatsApp
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#737373] group-hover:text-[#F5F2EB] transition-colors" />
              </a>

              {/* Instagram Card */}
              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl bg-[#0d0d0d] border border-[#222222] hover:border-[#444444] transition-all flex items-center justify-between group block"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-[#161616] text-[#E8E4DA] flex items-center justify-center">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#737373] block">
                      Visual Journal
                    </span>
                    <span className="text-sm text-[#F5F2EB] group-hover:text-[#E8E4DA] font-light transition-colors">
                      {contact.instagramHandle}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#737373] group-hover:text-[#F5F2EB] transition-colors" />
              </a>
            </div>

            <div className="p-5 rounded-xl bg-[#090909] border border-[#1f1f1f] text-xs text-[#737373] leading-relaxed">
              <span className="text-[#A9A9A9] font-medium block mb-1">Production Booking Note:</span>
              On-location shoots are booked by appointment. Twilight exterior and architectural drone captures depend on weather conditions.
            </div>
          </div>

          {/* Right Column: Interactive Editorial Project Inquiry Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#0c0c0c] border border-[#262626]">
            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center text-center space-y-4"
              >
                <div className="w-14 h-14 rounded-full bg-[#181818] border border-[#333333] flex items-center justify-center text-emerald-400">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-3xl text-[#F5F2EB] font-light">
                  Inquiry Received
                </h3>
                <p className="text-xs sm:text-sm text-[#A9A9A9] max-w-md font-light leading-relaxed">
                  Thank you, <span className="text-[#F5F2EB] font-medium">{formData.name}</span>. Your project details have been prepared. You can also send this note directly via email or WhatsApp below:
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <a
                    href={mailtoUrl}
                    className="px-5 py-2.5 rounded-full bg-[#F5F2EB] text-[#050505] text-xs uppercase tracking-widest font-semibold hover:bg-white transition-colors"
                  >
                    Open in Email App
                  </a>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-5 py-2.5 rounded-full border border-[#333333] text-[#A9A9A9] hover:text-[#F5F2EB] text-xs uppercase tracking-widest transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#E8E4DA] font-medium block">
                    Commission Inquiry
                  </span>
                  <h3 className="font-serif text-2xl text-[#F5F2EB] font-light mt-1">
                    Describe Your Space or Campaign
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[11px] uppercase tracking-widest text-[#A9A9A9] block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Julian Ross"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#141414] border border-[#2b2b2b] text-sm text-[#F5F2EB] focus:outline-none focus:border-[#E8E4DA] transition-colors placeholder-[#555555]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] uppercase tracking-widest text-[#A9A9A9] block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="julian@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#141414] border border-[#2b2b2b] text-sm text-[#F5F2EB] focus:outline-none focus:border-[#E8E4DA] transition-colors placeholder-[#555555]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[11px] uppercase tracking-widest text-[#A9A9A9] block">
                      Service Discipline
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#141414] border border-[#2b2b2b] text-sm text-[#F5F2EB] focus:outline-none focus:border-[#E8E4DA] transition-colors"
                    >
                      <option value="Real Estate Photography & Home Tour">
                        Real Estate Photography & Home Tour
                      </option>
                      <option value="Property Promotional Video (4K Motion)">
                        Property Promotional Video (4K Motion)
                      </option>
                      <option value="Shop & Showroom Showcase">
                        Shop & Showroom Showcase
                      </option>
                      <option value="Local Business Brand Promotion">
                        Local Business Brand Promotion
                      </option>
                      <option value="Architectural Retouching & Drone Stills">
                        Architectural Retouching & Drone Stills
                      </option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] uppercase tracking-widest text-[#A9A9A9] block">
                      Location / Property Details
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Modern Villa, Coastal Bay"
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#141414] border border-[#2b2b2b] text-sm text-[#F5F2EB] focus:outline-none focus:border-[#E8E4DA] transition-colors placeholder-[#555555]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-widest text-[#A9A9A9] block">
                    Project Narrative & Timelines *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about the scale of the space, key architectural features, target delivery dates, or specific promotional goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#141414] border border-[#2b2b2b] text-sm text-[#F5F2EB] focus:outline-none focus:border-[#E8E4DA] transition-colors placeholder-[#555555] resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between pt-2 gap-4">
                  <span className="text-[11px] text-[#737373] tracking-wider text-center sm:text-left">
                    Direct communication • No automated marketing spam
                  </span>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#F5F2EB] hover:bg-white text-[#050505] text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Submit Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
