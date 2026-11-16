export type MainCategory = 'all' | 'real-estate' | 'business-promotions';

export interface HeroCircularImage {
  id: string;
  url: string;
  alt: string;
  caption: string;
  badge?: string;
  // Positioning classes for responsive desktop collage layout
  desktopStyle: {
    width: string;
    height: string;
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    zIndex: number;
    rotation?: string;
  };
}

export interface ProjectDeliverable {
  label: string;
  detail: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'real-estate' | 'business-promotions';
  categoryLabel: string;
  subCategory: string;
  tags: string[];
  year: string;
  location: string;
  summary: string;
  description: string;
  coverImage: string;
  gallery: string[];
  videoUrl?: string; // e.g. MP4 link or sample video
  videoPoster?: string;
  deliverables: ProjectDeliverable[];
  featured?: boolean;
  isDemo: boolean;
}

export interface AboutWorkItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface AboutApproachItem {
  number: string;
  title: string;
  description: string;
}

export interface AboutConfig {
  headline: string;
  subheading: string;
  profileImage: string;
  profileAlt: string;
  roleTitle: string;
  introductionParagraphs: string[];
  promotionalWork: AboutWorkItem[];
  creativeApproach: AboutApproachItem[];
}

export interface FeaturedVideoConfig {
  sectionTitle: string;
  headline: string;
  supportingText: string;
  videoUrl: string; // Replaceable MP4 URL or placeholder
  posterImage: string;
  durationLabel: string;
  badgeText: string;
  instructionsNote: string;
}

export interface ContactConfig {
  headline: string;
  supportingText: string;
  phone: string;
  phoneDisplay: string;
  whatsappNumber: string;
  whatsappMessage: string;
  instagramHandle: string;
  instagramUrl: string;
  email: string;
  location: string;
  availability: string;
}

export interface SiteConfig {
  personalName: string;
  tagline: string;
  heroBadge: string;
  heroHeadline: string;
  heroSupportingText: string;
  heroCircularImages: HeroCircularImage[];
  about: AboutConfig;
  featuredVideo: FeaturedVideoConfig;
  contact: ContactConfig;
  projects: Project[];
}
