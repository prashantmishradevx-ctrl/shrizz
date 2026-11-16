import { SiteConfig } from '../types/portfolio';

/**
 * ==============================================================================
 * CENTRALIZED PORTFOLIO CONFIGURATION
 * ==============================================================================
 * You can easily customize every aspect of your portfolio right here:
 * - Personal Name & Branding
 * - Hero Photographs & Circular Collage
 * - About Me & Creative Philosophy
 * - Portfolio Projects (Real Estate & Business Promotions)
 * - Featured 10s Showcase Video (swap with your local or hosted MP4 file)
 * - Contact Details (Phone, WhatsApp, Instagram, Email)
 * ==============================================================================
 */

export const siteConfig: SiteConfig = {
  // 1. BRANDING & HERO
  personalName: "SHRIZZ",
  tagline: "Real Estate & Business Portfolio",
  heroBadge: "Visual Creative & Architectural Cinematographer",
  heroHeadline: "Spaces. Stories. Visual Experiences.",
  heroSupportingText: "Showcasing properties, beautiful homes and businesses through creative visual storytelling.",

  // 2. HERO CIRCULAR COLLAGE (3-4 Overlapping Circular Photos)
  // Recreating the reference: overlapping circular masks, staggered depths, luxury real estate + boutique retail
  heroCircularImages: [
    {
      id: "hero-circle-1",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85",
      alt: "Modern Luxury Villa Exterior at Twilight with Pool Reflection",
      caption: "Villa Seraphina • Modern Architectural Exterior",
      badge: "Architecture",
      desktopStyle: {
        width: "340px",
        height: "340px",
        top: "6%",
        left: "4%",
        zIndex: 20,
        rotation: "-2deg"
      }
    },
    {
      id: "hero-circle-2",
      url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
      alt: "Sculptural Minimalist Living Room Interior",
      caption: "The Atrium Penthouse • Editorial Interior Stills",
      badge: "Interiors",
      desktopStyle: {
        width: "360px",
        height: "360px",
        top: "22%",
        right: "6%",
        zIndex: 30,
        rotation: "3deg"
      }
    },
    {
      id: "hero-circle-3",
      url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=85",
      alt: "High-End Minimalist Fashion & Design Concept Store",
      caption: "Maison Blanc • Concept Showroom Showcase",
      badge: "Showroom",
      desktopStyle: {
        width: "300px",
        height: "300px",
        bottom: "8%",
        left: "14%",
        zIndex: 25,
        rotation: "-4deg"
      }
    },
    {
      id: "hero-circle-4",
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=85",
      alt: "Curved Geometric Concrete Villa with Ambient Lighting",
      caption: "Solstice Pavilion • Twilight Aerial View",
      badge: "Estates",
      desktopStyle: {
        width: "260px",
        height: "260px",
        bottom: "18%",
        right: "12%",
        zIndex: 15,
        rotation: "1deg"
      }
    }
  ],

  // 3. ABOUT ME
  about: {
    headline: "Creating Visual Stories That Leave an Impression.",
    subheading: "High-Fashion Art Direction Meets Real Estate & Commercial Promotion",
    profileImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
    profileAlt: "Portrait Placeholder",
    roleTitle: "Independent Visual Creator & Cinematographer",
    introductionParagraphs: [
      "I collaborate with luxury real estate developers, visionary homeowners, boutique showrooms, and local enterprises to translate three-dimensional physical environments into arresting visual narratives.",
      "Rather than taking standard wide-angle catalog shots, my work treats every property and commercial interior as a cinematic set — capturing authentic volume, sculptural light, natural textures, and the atmosphere that makes a space truly unforgettable."
    ],
    promotionalWork: [
      {
        id: "work-1",
        title: "Real Estate Photography & Home Tours",
        description: "Editorial stills and immersive visual tours designed for prime architectural residences, penthouses, and private estates.",
        iconName: "Home"
      },
      {
        id: "work-2",
        title: "Property Promotional Videos",
        description: "Cinematic 4K walkthrough reels, twilight video tours, and fluid camera movements tailored for high-engagement online discovery.",
        iconName: "Film"
      },
      {
        id: "work-3",
        title: "Shop & Showroom Promotions",
        description: "Curated visual showcases for flagship retail stores, high-end furniture showrooms, and aesthetic commercial spaces.",
        iconName: "Store"
      },
      {
        id: "work-4",
        title: "Local Business Promotions",
        description: "Atmospheric, story-driven visual content spotlighting boutique cafes, artisan ateliers, and distinctive local brands.",
        iconName: "Sparkles"
      }
    ],
    creativeApproach: [
      {
        number: "01",
        title: "Spatial Understanding",
        description: "Studying the architect's intent, the light cycles of dawn and dusk, and the organic flow from room to room before firing a single shutter."
      },
      {
        number: "02",
        title: "Editorial Lighting & Tone",
        description: "Balancing natural ambient illumination with subtle continuous lighting to maintain rich contrast, tactile shadow, and genuine color accuracy."
      },
      {
        number: "03",
        title: "Cinematic Rhythm",
        description: "Crafting visual pacing that breathes — combining wide spatial orientation shots with intimate micro-details of materials, marble, wood, and glass."
      }
    ]
  },

  // 4. FEATURED 10-SECOND VIDEO SHOWCASE
  featuredVideo: {
    sectionTitle: "MOTION SPOTLIGHT",
    headline: "10-Second Cinematic Property Showcase",
    supportingText: "An ultra-crisp motion snapshot displaying the power of dynamic camera movement, ambient sound design, and twilight atmosphere.",
    // Standard high-definition sample architectural video loop (can be replaced with any MP4 URL or local '/video.mp4')
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    posterImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85",
    durationLabel: "0:10 • 4K UHD",
    badgeText: "Cinematic Promo Cut",
    instructionsNote: "To replace with your own 10s MP4: Simply place your file in /public/promo.mp4 and update 'videoUrl' in src/config/portfolioConfig.ts."
  },

  // 5. CONTACT SECTION
  contact: {
    headline: "Have a Space or Business Worth Showcasing?",
    supportingText: "Available for commissions, private home tours, architectural projects, and commercial visual campaigns.",
    phone: "+919876543210",
    phoneDisplay: "+91 98765 43210",
    whatsappNumber: "919876543210",
    whatsappMessage: "Hello Shrizz! I came across your portfolio and would love to discuss a promotional shoot for my space.",
    instagramHandle: "@shrizz.visuals",
    instagramUrl: "https://instagram.com",
    email: "shrizz.visuals@gmail.com",
    location: "Available for on-location shoots & architectural commissions",
    availability: "Currently booking select projects for this season"
  },

  // 6. PORTFOLIO PROJECTS (Clearly marked as Demo Content)
  projects: [
    {
      id: "villa-solstice",
      title: "Villa Solstice • Coastal Minimalist Residence",
      category: "real-estate",
      categoryLabel: "Real Estate",
      subCategory: "Luxury Homes & Modern Villas",
      tags: ["Modern Villa", "Twilight Stills", "Drone Walkthrough", "Architectural"],
      year: "2025",
      location: "Private Bay Estate",
      summary: "A monolithic concrete and glass residence overlooking the sea, captured across golden hour and twilight.",
      description: "An editorial study in scale, clean lines, and water reflections. The shoot encompassed 35 high-resolution architectural plates, a 60-second twilight drone reel, and an interior daylight home walkthrough.",
      coverImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85"
      ],
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      videoPoster: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
      deliverables: [
        { label: "Deliverable", detail: "32 High-End Retouched Architectural Stills" },
        { label: "Motion", detail: "60-Second 4K Cinematic Home Tour Reel" },
        { label: "Aerial", detail: "Twilight Drone Exterior Panoramas" },
        { label: "Format", detail: "Print & Social 9:16 + 16:9 Cuts" }
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
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85"
      ],
      deliverables: [
        { label: "Deliverable", detail: "24 Editorial Showroom Stills" },
        { label: "Commercial Reel", detail: "30-Second Brand Promotional Feature" },
        { label: "Social", detail: "Instagram Carousel Series" }
      ],
      featured: true,
      isDemo: true
    },
    {
      id: "monochrome-penthouse",
      title: "The Noir Residence • High-Rise Penthouse",
      category: "real-estate",
      categoryLabel: "Real Estate",
      subCategory: "Apartments & Interior Photography",
      tags: ["Luxury Penthouse", "Interior Design", "Cityscape Views", "Editorial"],
      year: "2025",
      location: "Metropolitan Tower",
      summary: "Dark-toned walnut millwork, bookmatched Nero Marquina marble, and panoramic city vistas.",
      description: "An exercise in low-key interior photography. Focused on moody ambient evening light, reflection control on floor-to-ceiling glazing, and tactile detail close-ups.",
      coverImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85"
      ],
      deliverables: [
        { label: "Deliverable", detail: "28 High-Resolution Interior Plates" },
        { label: "Virtual Walkthrough", detail: "4K Continuous Steadycam Tour" },
        { label: "Night Stills", detail: "Skyline Long-Exposure Captures" }
      ],
      featured: false,
      isDemo: true
    },
    {
      id: "atelier-botanica",
      title: "Atelier Botanica • Boutique Artisan Space",
      category: "business-promotions",
      categoryLabel: "Business Promotions",
      subCategory: "Shops & Local Businesses",
      tags: ["Boutique Shop", "Local Business", "Organic Texture", "Craftsmanship"],
      year: "2025",
      location: "Heritage Quarter",
      summary: "An organic tea and ceramic boutique celebrating raw terracotta, natural linen, and hand-thrown pottery.",
      description: "Commissioned to develop an authentic visual personality for a newly opened neighborhood gem. Combines wide interior atmosphere with macro shots of brewing craft and texture.",
      coverImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85"
      ],
      deliverables: [
        { label: "Deliverable", detail: "20 Curated Brand Images" },
        { label: "Promo Reel", detail: "15-Second Artisanal Process Short" },
        { label: "Website Assets", detail: "Hero Header Stills & Grid Tiles" }
      ],
      featured: false,
      isDemo: true
    },
    {
      id: "glass-pavilion",
      title: "The Glass Pavilion • Architectural Sanctuary",
      category: "real-estate",
      categoryLabel: "Real Estate",
      subCategory: "Modern Villas & Home Tours",
      tags: ["Architectural Stills", "Minimalism", "Indoor-Outdoor", "Home Tour"],
      year: "2024",
      location: "Forest Foothills",
      summary: "Seamless glass walls creating an unbroken dialogue between sculptural living areas and native pine trees.",
      description: "Photographed at early morning light to capture misty atmospheric filtration. Every image is framed to honor structural symmetry and the Japanese concept of Shakkei (borrowed scenery).",
      coverImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1600573472591-ee6c563aaec9?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=85"
      ],
      deliverables: [
        { label: "Deliverable", detail: "36 Retouched Architectural Plates" },
        { label: "Home Tour", detail: "90s Guided Video Walkthrough" },
        { label: "Editorial", detail: "Published Feature Layout Assets" }
      ],
      featured: true,
      isDemo: true
    },
    {
      id: "vault-concept-store",
      title: "KÖNIG • Concept Store & Watch Salon",
      category: "business-promotions",
      categoryLabel: "Business Promotions",
      subCategory: "Commercial Spaces & Retail Stores",
      tags: ["Luxury Retail", "Watch Salon", "Commercial Promotion", "Minimalist"],
      year: "2024",
      location: "Financial Core",
      summary: "Brushed titanium vitrines, monolithic black granite counters, and discrete client negotiation salons.",
      description: "Visual identity campaign for a luxury timepiece collector space. High-contrast directional lighting was tuned to capture delicate watch bevels without glass glare.",
      coverImage: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1200&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1555529771-7888783a18d3?auto=format&fit=crop&w=1200&q=85"
      ],
      deliverables: [
        { label: "Deliverable", detail: "18 High-Gloss Commercial Images" },
        { label: "Teaser", detail: "10-Second VIP Opening Announcement Video" },
        { label: "Commercial Rights", detail: "Full Global Digital & Print Licensing" }
      ],
      featured: false,
      isDemo: true
    }
  ]
};
