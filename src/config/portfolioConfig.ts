import { SiteConfig } from '../types/portfolio';

/**
 * ==============================================================================
 * CENTRALIZED PORTFOLIO CONFIGURATION
 * ==============================================================================
 * Powered by your personal photography collection and promotional video.
 * All media is served directly from /public/media/
 * ==============================================================================
 */

export const siteConfig: SiteConfig = {
  // 1. BRANDING & HERO
  personalName: "SHRIZZ",
  tagline: "Real Estate & Business Portfolio",
  heroBadge: "Visual Creative & Architectural Cinematographer",
  heroHeadline: "Spaces. Stories. Visual Experiences.",
  heroSupportingText: "Showcasing properties, beautiful homes and businesses through creative visual storytelling.",

  // 2. HERO CIRCULAR COLLAGE (User's Curated Photography)
  // Recreating the reference: overlapping circular masks, staggered depths
  heroCircularImages: [
    {
      id: "hero-circle-1",
      url: "/media/hero-circle-1.jpg",
      alt: "Golden Hour Natural Light Editorial Stills",
      caption: "Natural Golden Light • Editorial Series",
      badge: "Editorial Stills",
      desktopStyle: {
        width: "330px",
        height: "330px",
        top: "6%",
        left: "4%",
        zIndex: 20,
        rotation: "-2deg"
      }
    },
    {
      id: "hero-circle-2",
      url: "/media/hero-circle-2.jpg",
      alt: "Classical Heritage Veranda & Colonnade Architectural Stills",
      caption: "Heritage Veranda • Architectural Stills",
      badge: "Architecture",
      desktopStyle: {
        width: "360px",
        height: "360px",
        top: "20%",
        right: "5%",
        zIndex: 30,
        rotation: "3deg"
      }
    },
    {
      id: "hero-circle-3",
      url: "/media/hero-circle-3.jpg",
      alt: "Architectural Estate Grounds & Dynamic Textile Motion",
      caption: "Pavilion Grounds • Visual Campaign",
      badge: "Estate Tour",
      desktopStyle: {
        width: "310px",
        height: "310px",
        bottom: "8%",
        left: "12%",
        zIndex: 25,
        rotation: "-4deg"
      }
    },
    {
      id: "hero-circle-4",
      url: "/media/hero-circle-4.jpg",
      alt: "Street Commerce & Local Business Promotion",
      caption: "Tilak Commerce • Local Business Showcase",
      badge: "Local Business",
      desktopStyle: {
        width: "270px",
        height: "270px",
        bottom: "16%",
        right: "10%",
        zIndex: 15,
        rotation: "1deg"
      }
    }
  ],

  // 3. ABOUT ME
  about: {
    headline: "Creating Visual Stories That Leave an Impression.",
    subheading: "High-Fashion Art Direction Meets Real Estate & Commercial Promotion",
    profileImage: "/media/about-portrait.jpg",
    profileAlt: "Shrizz Editorial Portrait",
    roleTitle: "Independent Visual Creator & Cinematographer",
    introductionParagraphs: [
      "I collaborate with property developers, fine homeowners, boutique showrooms, and local enterprises to translate physical environments into compelling visual narratives.",
      "Rather than ordinary catalog shots, my work treats every property, commercial interior, and local enterprise as an authentic set — capturing natural light, volume, vibrant atmosphere, and the human story that makes a space memorable."
    ],
    promotionalWork: [
      {
        id: "work-1",
        title: "Real Estate Photography & Home Tours",
        description: "Editorial stills and immersive visual tours designed for residences, heritage estates, and architectural spaces.",
        iconName: "Home"
      },
      {
        id: "work-2",
        title: "Property Promotional Videos",
        description: "Cinematic walkthrough reels, twilight video tours, and fluid camera movements tailored for high-engagement online discovery.",
        iconName: "Film"
      },
      {
        id: "work-3",
        title: "Shop & Showroom Promotions",
        description: "Curated visual showcases for retail stores, fashion boutiques, design showrooms, and aesthetic commercial spaces.",
        iconName: "Store"
      },
      {
        id: "work-4",
        title: "Local Business Promotions",
        description: "Atmospheric, story-driven visual content spotlighting neighborhood favorites, artisanal workshops, and commercial spots.",
        iconName: "Sparkles"
      }
    ],
    creativeApproach: [
      {
        number: "01",
        title: "Spatial Understanding",
        description: "Studying the architect's layout, natural sunlight angles, and the organic flow from room to room before firing a single shutter."
      },
      {
        number: "02",
        title: "Editorial Lighting & Tone",
        description: "Harnessing natural ambient daylight and subtle fill to preserve rich contrast, authentic colors, and tactile depth."
      },
      {
        number: "03",
        title: "Cinematic Rhythm",
        description: "Crafting visual motion that breathes — pairing sweeping spatial perspectives with intimate close-ups of craftsmanship, materials, and character."
      }
    ]
  },

  // 4. FEATURED 12-SECOND CINEMATIC VIDEO SHOWCASE
  featuredVideo: {
    sectionTitle: "MOTION SPOTLIGHT",
    headline: "12-Second Cinematic Promotional Showcase",
    supportingText: "An authentic, high-energy promotional reel highlighting atmospheric daylight, graceful movement, and visual presence.",
    videoUrl: "/media/promo-showcase.mp4",
    posterImage: "/media/promo-poster.jpg",
    durationLabel: "0:12 • 4K Motion",
    badgeText: "Official Promo Reel",
    instructionsNote: "Your custom video is active at /public/media/promo-showcase.mp4 with H.264 web optimization and custom audio."
  },

  // 5. CONTACT SECTION
  contact: {
    headline: "Have a Space or Business Worth Showcasing?",
    supportingText: "Available for commissions, private home tours, architectural projects, and commercial visual campaigns.",
    phone: "+918849795905",
    phoneDisplay: "+91 88497 95905",
    whatsappNumber: "918849795905",
    whatsappMessage: "Hello Shrizz! I came across your portfolio and would love to discuss a promotional shoot for my space.",
    instagramHandle: "@shriziii_vibe",
    instagramUrl: "https://www.instagram.com/shriziii_vibe?dlrf=MWw1am0zemUzMmk4Zw==",
    email: "heyriyu@gmail.com",
    location: "Available for on-location shoots & architectural commissions",
    availability: "Currently booking select projects for this season"
  },

  // 6. PORTFOLIO PROJECTS
  projects: [
    {
      id: "heritage-veranda",
      title: "The Heritage Colonnade • Veranda & Garden Architecture",
      category: "real-estate",
      categoryLabel: "Real Estate",
      subCategory: "Interior & Exterior Photography",
      tags: ["Heritage Architecture", "Veranda Stills", "Natural Light", "Garden View"],
      year: "2025",
      location: "Classical Estate",
      summary: "An architectural exploration of classical pillars, open-air courtyards, and soft ambient daylight.",
      description: "Photographed across midday to capture light filtering through carved stone columns and lush exterior greenery. Emphasizes classical proportion, symmetry, and architectural grace.",
      coverImage: "/media/hero-circle-2.jpg",
      gallery: [
        "/media/hero-circle-2.jpg",
        "/media/IMG-20241216-WA0023.jpg.jpeg",
        "/media/estate-shoot-1.jpg"
      ],
      videoUrl: "/media/promo-showcase.mp4",
      videoPoster: "/media/promo-poster.jpg",
      deliverables: [
        { label: "Deliverable", detail: "High-Resolution Architectural Stills" },
        { label: "Motion", detail: "15-Second Cinematic Promotional Reel" },
        { label: "Lighting", detail: "Natural Light Balancing & Detail Retouching" },
        { label: "Licensing", detail: "Full Commercial & Social Media Usage" }
      ],
      featured: true,
      isDemo: false
    },
    {
      id: "estate-pavilion-campaign",
      title: "The Estate Grounds • Daylight Architectural Campaign",
      category: "real-estate",
      categoryLabel: "Real Estate",
      subCategory: "Luxury Homes & Home Tours",
      tags: ["Architectural Grounds", "Outdoor Spatial", "Textile Motion", "Estate Stills"],
      year: "2025",
      location: "Pavilion Grounds",
      summary: "Framing modern architectural facades with outdoor natural foliage and vibrant movement.",
      description: "A dual study in static structure and fluid human motion. Features sweeping exterior compositions, golden sunlight angles, and intimate material close-ups.",
      coverImage: "/media/hero-circle-3.jpg",
      gallery: [
        "/media/hero-circle-3.jpg",
        "/media/estate-shoot-1.jpg",
        "/media/estate-shoot-2.jpg"
      ],
      videoUrl: "/media/promo-showcase.mp4",
      videoPoster: "/media/promo-poster.jpg",
      deliverables: [
        { label: "Deliverable", detail: "Editorial Architectural & Fashion Stills" },
        { label: "Motion", detail: "4K Walkthrough & Motion Cuts" },
        { label: "Color Grade", detail: "Warm Editorial Film LUT" }
      ],
      featured: true,
      isDemo: false
    },
    {
      id: "tilak-commerce-showcase",
      title: "Tilak Commerce • Local Business Visual Showcase",
      category: "business-promotions",
      categoryLabel: "Business Promotions",
      subCategory: "Local Businesses & Commercial Spaces",
      tags: ["Local Business", "Street Commerce", "Atmospheric Stills", "Commercial Promotion"],
      year: "2025",
      location: "Commercial District",
      summary: "Capturing the authentic vibrancy, community presence, and culinary craft of a busy commercial hub.",
      description: "Commissioned to build an engaging visual presence for a beloved local business. Combines street-level contextual wide shots with vibrant close-ups that honor everyday craftsmanship.",
      coverImage: "/media/hero-circle-4.jpg",
      gallery: [
        "/media/hero-circle-4.jpg",
        "/media/hero-circle-1.jpg",
        "/media/estate-shoot-2.jpg"
      ],
      videoUrl: "/media/promo-showcase.mp4",
      videoPoster: "/media/promo-poster.jpg",
      deliverables: [
        { label: "Deliverable", detail: "Commercial Spotlight Stills" },
        { label: "Social Cuts", detail: "Instagram Story & Feed Visual Assets" },
        { label: "Local Identity", detail: "Brand Visual Storytelling" }
      ],
      featured: true,
      isDemo: false
    },
    {
      id: "golden-hour-editorial",
      title: "Lumina Golden Hour • Portrait & Detail Series",
      category: "business-promotions",
      categoryLabel: "Business Promotions",
      subCategory: "Shops & Showrooms",
      tags: ["Editorial", "Natural Light", "Boutique Showcase", "Artisan Stills"],
      year: "2025",
      location: "Heritage Quarter",
      summary: "Warm late-afternoon directional sunlight highlighting jewelry, textiles, and authentic personality.",
      description: "Crafted for boutique fashion and showroom promotion. Uses directional raking sunlight to accentuate delicate embroideries, metallic jewelry reflections, and warm skin tones.",
      coverImage: "/media/hero-circle-1.jpg",
      gallery: [
        "/media/hero-circle-1.jpg",
        "/media/avatar-profile.jpg",
        "/media/Snapchat-146371157.jpg.jpeg",
        "/media/Snapchat-1832387260.jpg.jpeg"
      ],
      deliverables: [
        { label: "Deliverable", detail: "Lookbook & Showroom Photographic Suite" },
        { label: "Micro-Details", detail: "High-Macro Jewelry & Texture Captures" },
        { label: "Formats", detail: "Print & Social Ready Exports" }
      ],
      featured: false,
      isDemo: false
    },
    {
      id: "villa-solstice",
      title: "Villa Solstice • Coastal Minimalist Residence",
      category: "real-estate",
      categoryLabel: "Real Estate",
      subCategory: "Modern Villas & Luxury Homes",
      tags: ["Modern Villa", "Twilight Stills", "Drone Walkthrough", "Architectural"],
      year: "2025",
      location: "Private Bay Estate",
      summary: "A monolithic concrete and glass residence overlooking the sea, captured across golden hour and twilight.",
      description: "An editorial study in scale, clean lines, and water reflections. The shoot encompassed 35 high-resolution architectural plates and twilight drone panoramas.",
      coverImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85"
      ],
      deliverables: [
        { label: "Deliverable", detail: "32 Retouched Architectural Plates" },
        { label: "Motion", detail: "Twilight Aerial Drone Reel" }
      ],
      featured: true,
      isDemo: true
    },
    {
      id: "maison-lumina",
      title: "Maison Lumina • Flagship Design Showroom",
      category: "business-promotions",
      categoryLabel: "Business Promotions",
      subCategory: "Showrooms & Retail Stores",
      tags: ["Showroom", "Retail Design", "Commercial", "Lighting Study"],
      year: "2025",
      location: "Design District",
      summary: "Capturing the sculptural lighting fixtures, bespoke Italian furnishings, and curved plaster walls of a premier design house.",
      description: "Crafted to emphasize spatial rhythm and product materiality. Highlights the interplay between warm directional accent lighting and minimalist display pedestals.",
      coverImage: "https://images.unsplash.com/photo-1555529771-835f59fc5efe?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1555529771-835f59fc5efe?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85"
      ],
      deliverables: [
        { label: "Deliverable", detail: "24 Editorial Showroom Stills" },
        { label: "Commercial Reel", detail: "30-Second Brand Feature" }
      ],
      featured: false,
      isDemo: true
    }
  ]
};
