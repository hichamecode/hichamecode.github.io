// Types communs - Portfolio
import { ReactNode } from 'react';

// Props de base pour tous les composants
export interface BaseProps {
  className?: string;
  children?: ReactNode;
  id?: string;
}

// Types pour les technologies
export interface Technology {
  id: string;
  name: string;
  icon?: string;
  category: TechnologyCategory;
  proficiencyLevel: ProficiencyLevel;
}

export type TechnologyCategory = 
  | 'frontend' 
  | 'backend' 
  | 'database' 
  | 'devops' 
  | 'tools' 
  | 'testing';

export type ProficiencyLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';

// Types pour les projets
export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  technologies: Technology[];
  imageUrl: string;
  projectUrl?: string;
  githubUrl?: string;
  isHighlighted: boolean;
  category: ProjectCategory;
  completionDate: string;
  challenges: string[];
  results: string[];
}

export type ProjectCategory = 
  | 'web-development' 
  | 'mobile-app' 
  | 'wordpress' 
  | 'seo' 
  | 'ecommerce';

// Types pour les services
export interface Service {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  features: string[];
  pricing: ServicePricing;
  category: ServiceCategory;
  duration: string;
  deliverables: string[];
  isPopular?: boolean;
}

export interface ServicePricing {
  type: 'fixed' | 'hourly' | 'quote';
  amount?: number;
  currency: string;
  startingPrice?: number;
  hourlyRate?: number;
}

export type ServiceCategory = 
  | 'development' 
  | 'seo' 
  | 'wordpress' 
  | 'consulting' 
  | 'maintenance';

// Types pour les témoignages
export interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  clientCompany: string;
  content: string;
  rating: number;
  projectId?: string;
  avatarUrl?: string;
  date: string;
}

// Types pour le blog
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  lastModified: string;
  category: BlogCategory;
  tags: string[];
  imageUrl?: string;
  readingTime: number;
  isPublished: boolean;
  seoTitle?: string;
  seoDescription?: string;
}

export type BlogCategory = 
  | 'development' 
  | 'seo' 
  | 'wordpress' 
  | 'tutorials' 
  | 'industry-news';

// Types pour les formulaires
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType: ServiceCategory | '';
  budget: BudgetRange | '';
  message: string;
  timeline?: string;
  attachments?: File[];
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  message?: string;
  budget?: string;
}

export type BudgetRange = 
  | 'under-1k' 
  | '1k-5k' 
  | '5k-10k' 
  | '10k-25k' 
  | 'over-25k' 
  | 'discuss';

// Types pour la navigation
export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  isExternal?: boolean;
  icon?: string;
}

// Types pour les compétences
export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level: ProficiencyLevel;
  yearsOfExperience: number;
  icon?: string;
  description?: string;
}

export type SkillCategory = 
  | 'programming-languages'
  | 'frameworks'
  | 'databases'
  | 'tools'
  | 'soft-skills';

// Types pour les statistiques
export interface Statistic {
  id: string;
  label: string;
  value: number;
  unit?: string;
  icon?: string;
  description?: string;
}

// Types pour les réseaux sociaux
export interface SocialLink {
  id: string;
  platform: SocialPlatform;
  url: string;
  username?: string;
  icon: string;
}

export type SocialPlatform = 
  | 'github' 
  | 'linkedin' 
  | 'twitter' 
  | 'instagram' 
  | 'youtube' 
  | 'behance' 
  | 'dribbble';

// Types pour les paramètres de l'application
export interface AppSettings {
  theme: 'light' | 'dark' | 'auto';
  language: 'fr' | 'en';
  animations: boolean;
  reducedMotion: boolean;
}

// Types pour les métadonnées SEO
export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  canonicalUrl?: string;
}

// Types utilitaires
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

// Types pour les animations
export interface AnimationConfig {
  duration: number;
  delay?: number;
  easing?: string;
  direction?: 'normal' | 'reverse' | 'alternate';
}

// Types pour les événements
export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}
