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

export interface AboutSectionData {
  title: string;
  description: string;
  image: string;
  showButton?:boolean
}

export interface CEOSectionData {
  name: string;
  about_ceo: string;
  ceo_image: string;
  section_background: string;
}

export interface whyUsItems {
    title: string;
    description: string;
    image: Media;
}

export interface WyUsData {
  introTitle: string;
  introDescription: string;
  items: whyUsItems[];
}

export interface SiteSettingsContextProps {
  settings: any;
  loading: boolean;
}

export interface BlogDataProps{
  title:string;
  cover_description:string;
  image:string;
  createdAt:string;
  id:string
}

export interface BlogDetailsProps{
  title:string;
  cover_description?:string;
  description:string;
  image:string,
  createdAt:string,
}


export interface ClientPoint {
  id: number;
  name: string;
}

export interface ClientPartnershipProps {
  title: string;
   description: string;
   points?: ClientPoint[];
   image:string
}

export interface ClientItemProps {
  id:string;
  image:Media
}

export interface ClientsProps{
  introText:string;
  introSubtitle:string;
  clientItems : ClientItemProps[]
}


export interface ProjectCategory {
  id: string;
  name: string;
}

export interface Project {
  id: string;
  documentId: string;
  title: string;
  coverDescription: string;
  image: { url: string };
  website_logo: { url: string };
  website_url: string;
  priority: number;
  project_category?: ProjectCategory;
}

export interface ProductsListProps {
  projects: Project[];
}

export interface ProjectDetails {
  id: string;
  documentId: string;
  title: string;
  coverDescription: string;
  description:string;
  image: { url: string };
  website_logo: { url: string };
  website_url: string;
  priority: number;
  project_category?: ProjectCategory;
  createdAt:string;
  updatedAt:string
}

export interface ProjectDetailsProps{
  project:ProjectDetails
}