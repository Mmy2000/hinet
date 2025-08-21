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