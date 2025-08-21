export interface HeroProps {
  coverImage: string;
  title: string;
  description: string;
  showButton?: boolean;
  sectionType?: string;
  heroButtonLink?: string;
  heroButtonText?: string;
}

export interface ContactData {
  introText: string;
  introTitle: string;
  introImage: string;
}

export interface IntroSectionData {
  introText: string;
  introButtonText: string;
  introButtonLink: string;
}

export interface Point {
  id: number;
  title: string;
  icon?: string;
}

export interface VisualIdentitySectionProps {
  title: string;
  description: string;
  points?: Point[];
  image: string;
  icon?: string;
  variant?: "background" | "transparent";
}

export interface Media {
  id: number;
  url: string;
  alternativeText?: string;
  caption?: string;
  width?: number;
  height?: number;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  image?: Media;
  icon?: Media;
  points?: Point[];
}