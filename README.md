# PREMIUM MINIMALIST PERSONAL PORTFOLIO WEBSITE
### Real Estate Photography, Home Tours, Showroom & Business Promotions

An editorial-grade portfolio website built with **React**, **Vite**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed with a high-fashion art direction, deep black tones (`#050505`), off-white typography (`#F5F2EB`), and an asymmetrical circular collage hero layout inspired by luxury editorial print publications.

---

## ✦ Key Features & Architectural Highlights

1. **Editorial Design System**:
   - Primary Background: `#050505` (Deep Studio Black)
   - Secondary Background: `#111111` & `#0c0c0c`
   - Main Typography: `#F5F2EB` (Warm Editorial Off-White)
   - Secondary Text: `#A9A9A9` & `#737373`
   - Accent & Borders: `#E8E4DA` & `#333333`
   - Typographic Pairing: *Cormorant Garamond* / *Playfair Display* (Editorial Serif) paired with *Plus Jakarta Sans* (Modern Clean Sans-Serif).

2. **Hero Section (Asymmetrical Circular Collage)**:
   - **Left**: Prominent serif personal branding, tagline *"Real Estate & Business Portfolio"*, editorial statement *"Spaces. Stories. Visual Experiences."*, supporting narrative, and dual CTAs (*"Explore My Work"* & *"Contact Me"* with delicate white borders).
   - **Right**: An artistic collage of overlapping circular photographs highlighting luxury exteriors, sculptural interiors, and boutique retail spaces.
   - **Mobile View**: Automatically stacks vertically with responsive overlapping circular photo cluster and touch-friendly controls.

3. **Minimalist Navigation**:
   - Left-aligned personal name & brand mark.
   - Right-aligned navigation links with animated active-section indicator.
   - Mobile full-screen editorial drawer with staggered entrance animations.

4. **About Me**:
   - Headline: *"Creating Visual Stories That Leave an Impression."*
   - Profile photograph placeholder in an architectural framing.
   - Core disciplines: Real Estate Photography, Property Videos, Showroom Showcases, Local Business Promotions.
   - 3-step creative approach (*Spatial Understanding, Editorial Lighting & Tone, Cinematic Rhythm*).

5. **My Work (Main Portfolio)**:
   - Interactive category filter: *All Works*, *Real Estate*, and *Business Promotions*.
   - Asymmetrical editorial grid layout with subtle image zoom on hover (`scale-105`).
   - Detailed Project Modal featuring high-res photo gallery, optional motion reel player, production scope & deliverables list, and direct inquiry CTA.
   - Transparent demo badge (*"Sample Showcase • Demo"*) ensuring authentic presentation.

6. **Featured 10-Second Video Showcase**:
   - Dedicated motion spotlight section.
   - Custom video player with play/pause, scrubbable progress bar, time indicators, mute toggle, and fullscreen control.
   - Seamless MP4 file replacement.

7. **Contact Section**:
   - Headline: *"Have a Space or Business Worth Showcasing?"*
   - Direct quick-action buttons for WhatsApp, Instagram, and Email.
   - Click-to-call phone number with copy button.
   - Interactive project inquiry form with instant confirmation state.

8. **Centralized Configuration**:
   - Everything is configured in a single file: `src/config/portfolioConfig.ts`.

---

## ✦ Centralized Customization Guide

All personal data, photography, video files, and links can be modified in:
```
src/config/portfolioConfig.ts
```

### 1. Changing Your Personal Name & Branding
```typescript
export const siteConfig: SiteConfig = {
  personalName: "YOUR NAME",
  tagline: "Real Estate & Business Portfolio",
  heroBadge: "Visual Creative & Architectural Cinematographer",
  heroHeadline: "Spaces. Stories. Visual Experiences.",
  heroSupportingText: "Showcasing properties, beautiful homes and businesses through creative visual storytelling.",
  ...
};
```

### 2. Updating Hero Circular Photos
Replace the image URLs in `heroCircularImages` with your own photography:
```typescript
heroCircularImages: [
  {
    id: "hero-circle-1",
    url: "https://your-domain.com/villa-exterior.jpg", // or local '/images/circle-1.jpg'
    alt: "Modern Villa Exterior",
    caption: "Villa Seraphina",
    badge: "Architecture",
    ...
  },
  // Add up to 4 circular images
]
```

### 3. Replacing the 10-Second Promotional Video
1. Place your MP4 file in the `public/` directory (e.g. `public/promo.mp4`).
2. In `src/config/portfolioConfig.ts`, update:
```typescript
featuredVideo: {
  videoUrl: "/promo.mp4",
  posterImage: "https://your-domain.com/video-poster.jpg",
  durationLabel: "0:10 • 4K UHD",
  ...
}
```

### 4. Updating Contact Channels (WhatsApp, Instagram, Email, Phone)
```typescript
contact: {
  headline: "Have a Space or Business Worth Showcasing?",
  phone: "+1234567890",
  phoneDisplay: "+1 (234) 567-890",
  whatsappNumber: "1234567890", // Numbers only with country code
  whatsappMessage: "Hello! I would like to discuss a promotional shoot for my space.",
  instagramHandle: "@yourhandle",
  instagramUrl: "https://instagram.com/yourhandle",
  email: "your.email@example.com",
  location: "Available for on-location commissions",
  availability: "Currently booking select projects"
}
```

### 5. Adding a New Portfolio Project
Simply append an object to the `projects` array:
```typescript
{
  id: "new-estate-project",
  title: "The Horizon Villa • Private Architectural Estate",
  category: "real-estate", // or "business-promotions"
  categoryLabel: "Real Estate",
  subCategory: "Luxury Homes & Home Tours",
  tags: ["Luxury Villa", "Twilight Drone", "Architectural Stills"],
  year: "2025",
  location: "Pacific Coastline",
  summary: "A private architectural masterpiece overlooking the Pacific.",
  description: "Comprehensive 4K video walkthrough and 30 editorial plates.",
  coverImage: "https://images.unsplash.com/...",
  gallery: [
    "https://images.unsplash.com/...",
    "https://images.unsplash.com/..."
  ],
  videoUrl: "/my-estate-video.mp4",
  deliverables: [
    { label: "Deliverable", detail: "30 Retouched Architectural Stills" },
    { label: "Motion", detail: "60-Second 4K Walkthrough Reel" }
  ],
  isDemo: true // or false once real completed work
}
```

---

## ✦ Development & Deployment

### Run Locally (Development)
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
```
Generates an optimized bundle in the `dist/` folder ready for deployment on Vercel, Netlify, or any static hosting service.

### Preview Production Build
```bash
npm run preview
```
