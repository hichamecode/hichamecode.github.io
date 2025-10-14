// Constantes de l'application - Portfolio
import type { NavigationItem, SocialLink } from '../types/common.types';

// Configuration de l'application
export const APP_CONFIG = {
  name: 'Jean Dupont - Développeur Web',
  shortName: 'Jean Dupont',
  title: 'Développeur Web Full-Stack',
  description: 'Services de développement web, SEO et WordPress. Création de sites responsives et performants.',
  author: 'Jean Dupont',
  version: '1.0.0',
  url: 'https://jeandupont.github.io',
  email: 'contact@jeandupont.dev',
  phone: '+33 6 12 34 56 78',
  location: 'Paris, France',
  availability: 'Disponible pour de nouveaux projets',
} as const;

// Informations de contact
export const CONTACT_INFO = {
  email: 'contact@jeandupont.dev',
  phone: '+33 6 12 34 56 78',
  location: 'Paris, France',
  timezone: 'Europe/Paris',
  responseTime: '24h',
  workingHours: 'Lun-Ven 9h-18h',
} as const;

// Navigation principale
export const NAVIGATION_ITEMS: NavigationItem[] = [
  { id: 'home', label: 'Accueil', href: '#home' },
  { id: 'about', label: 'À propos', href: '#about' },
  { id: 'skills', label: 'Compétences', href: '#skills' },
  { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'blog', label: 'Blog', href: '#blog' },
  { id: 'contact', label: 'Contact', href: '#contact' },
] as const;

// Réseaux sociaux
export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'github',
    platform: 'github',
    url: 'https://github.com/jeandupont',
    username: 'jeandupont',
    icon: 'bi-github',
  },
  {
    id: 'linkedin',
    platform: 'linkedin',
    url: 'https://linkedin.com/in/jean-dupont',
    username: 'jean-dupont',
    icon: 'bi-linkedin',
  },
  {
    id: 'twitter',
    platform: 'twitter',
    url: 'https://twitter.com/jeandupont_dev',
    username: '@jeandupont_dev',
    icon: 'bi-twitter',
  },
] as const;

// Statistiques
export const STATISTICS = [
  {
    id: 'projects',
    label: 'Projets réalisés',
    value: 50,
    unit: '+',
    icon: 'bi-code-slash',
    description: 'Sites web et applications développés',
  },
  {
    id: 'clients',
    label: 'Clients satisfaits',
    value: 30,
    unit: '+',
    icon: 'bi-people',
    description: 'Entreprises et particuliers accompagnés',
  },
  {
    id: 'experience',
    label: 'Années d\'expérience',
    value: 5,
    unit: '',
    icon: 'bi-calendar-check',
    description: 'Dans le développement web',
  },
  {
    id: 'technologies',
    label: 'Technologies maîtrisées',
    value: 15,
    unit: '+',
    icon: 'bi-gear',
    description: 'Langages et frameworks',
  },
] as const;

// Messages de l'interface
export const UI_MESSAGES = {
  loading: 'Chargement...',
  error: 'Une erreur est survenue',
  success: 'Opération réussie',
  noData: 'Aucune donnée disponible',
  comingSoon: 'Bientôt disponible',
  contactSuccess: 'Message envoyé avec succès !',
  contactError: 'Erreur lors de l\'envoi du message',
  formRequired: 'Ce champ est requis',
  formInvalidEmail: 'Adresse email invalide',
  formInvalidPhone: 'Numéro de téléphone invalide',
  downloadCV: 'Télécharger mon CV',
  viewProject: 'Voir le projet',
  viewCode: 'Voir le code',
  readMore: 'Lire la suite',
  showMore: 'Voir plus',
  showLess: 'Voir moins',
  backToTop: 'Retour en haut',
} as const;

// Configuration des animations
export const ANIMATION_CONFIG = {
  duration: {
    fast: 200,
    normal: 300,
    slow: 500,
  },
  easing: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  },
  delay: {
    short: 100,
    medium: 200,
    long: 300,
  },
} as const;

// Configuration SEO
export const SEO_CONFIG = {
  defaultTitle: APP_CONFIG.name,
  titleTemplate: '%s | ' + APP_CONFIG.name,
  defaultDescription: APP_CONFIG.description,
  siteUrl: APP_CONFIG.url,
  defaultImage: '/assets/images/og-image.jpg',
  twitterHandle: '@jeandupont_dev',
  language: 'fr',
  locale: 'fr_FR',
} as const;

// Configuration des formulaires
export const FORM_CONFIG = {
  contact: {
    maxMessageLength: 1000,
    allowedFileTypes: ['.pdf', '.doc', '.docx', '.txt'],
    maxFileSize: 5 * 1024 * 1024, // 5MB
    maxFiles: 3,
  },
  newsletter: {
    maxEmailLength: 100,
  },
} as const;

// Configuration des projets
export const PROJECT_CONFIG = {
  itemsPerPage: 6,
  categories: [
    { id: 'all', label: 'Tous les projets' },
    { id: 'web-development', label: 'Développement Web' },
    { id: 'wordpress', label: 'WordPress' },
    { id: 'seo', label: 'SEO' },
    { id: 'ecommerce', label: 'E-commerce' },
  ],
} as const;

// Configuration du blog
export const BLOG_CONFIG = {
  itemsPerPage: 6,
  categories: [
    { id: 'all', label: 'Tous les articles' },
    { id: 'development', label: 'Développement' },
    { id: 'seo', label: 'SEO' },
    { id: 'wordpress', label: 'WordPress' },
    { id: 'tutorials', label: 'Tutoriels' },
    { id: 'industry-news', label: 'Actualités' },
  ],
} as const;

// Configuration des services
export const SERVICE_CONFIG = {
  categories: [
    { id: 'development', label: 'Développement Web', icon: 'bi-code-slash' },
    { id: 'seo', label: 'SEO & Référencement', icon: 'bi-search' },
    { id: 'wordpress', label: 'WordPress', icon: 'bi-wordpress' },
    { id: 'consulting', label: 'Conseil', icon: 'bi-chat-dots' },
    { id: 'maintenance', label: 'Maintenance', icon: 'bi-tools' },
  ],
  budgetRanges: [
    { id: 'under-1k', label: 'Moins de 1 000€' },
    { id: '1k-5k', label: '1 000€ - 5 000€' },
    { id: '5k-10k', label: '5 000€ - 10 000€' },
    { id: '10k-25k', label: '10 000€ - 25 000€' },
    { id: 'over-25k', label: 'Plus de 25 000€' },
    { id: 'discuss', label: 'À discuter' },
  ],
} as const;

// Configuration des breakpoints (pour JavaScript)
export const BREAKPOINTS = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
} as const;

// Configuration des couleurs (pour JavaScript)
export const COLORS = {
  primary: '#2563eb',
  secondary: '#64748b',
  accent: '#f59e0b',
  success: '#10b981',
  warning: '#f59e0b',
  danger: '#ef4444',
} as const;

// URLs externes
export const EXTERNAL_URLS = {
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com',
  googleFonts: 'https://fonts.googleapis.com',
  bootstrapIcons: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css',
} as const;

// Configuration locale
export const LOCALE_CONFIG = {
  dateFormat: 'dd/MM/yyyy',
  timeFormat: 'HH:mm',
  currency: 'EUR',
  currencySymbol: '€',
  numberFormat: 'fr-FR',
} as const;
