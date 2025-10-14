// Données des projets - Portfolio
import type { Project, Technology } from '../types/common.types';

// Technologies disponibles
export const technologies: Technology[] = [
  // Frontend
  { id: 'react', name: 'React', category: 'frontend', proficiencyLevel: 'expert' },
  { id: 'typescript', name: 'TypeScript', category: 'frontend', proficiencyLevel: 'expert' },
  { id: 'javascript', name: 'JavaScript', category: 'frontend', proficiencyLevel: 'expert' },
  { id: 'html5', name: 'HTML5', category: 'frontend', proficiencyLevel: 'expert' },
  { id: 'css3', name: 'CSS3', category: 'frontend', proficiencyLevel: 'expert' },
  { id: 'sass', name: 'Sass/SCSS', category: 'frontend', proficiencyLevel: 'advanced' },
  { id: 'bootstrap', name: 'Bootstrap', category: 'frontend', proficiencyLevel: 'advanced' },
  { id: 'tailwind', name: 'TailwindCSS', category: 'frontend', proficiencyLevel: 'advanced' },
  { id: 'svelte', name: 'Svelte', category: 'frontend', proficiencyLevel: 'intermediate' },
  
  // Backend
  { id: 'nodejs', name: 'Node.js', category: 'backend', proficiencyLevel: 'advanced' },
  { id: 'express', name: 'Express.js', category: 'backend', proficiencyLevel: 'advanced' },
  { id: 'php', name: 'PHP', category: 'backend', proficiencyLevel: 'intermediate' },
  
  // Bases de données
  { id: 'mongodb', name: 'MongoDB', category: 'database', proficiencyLevel: 'intermediate' },
  { id: 'mysql', name: 'MySQL', category: 'database', proficiencyLevel: 'intermediate' },
  { id: 'postgresql', name: 'PostgreSQL', category: 'database', proficiencyLevel: 'beginner' },
  
  // DevOps & Tools
  { id: 'git', name: 'Git', category: 'devops', proficiencyLevel: 'advanced' },
  { id: 'docker', name: 'Docker', category: 'devops', proficiencyLevel: 'intermediate' },
  { id: 'gitlab', name: 'GitLab CI/CD', category: 'devops', proficiencyLevel: 'intermediate' },
  { id: 'vite', name: 'Vite', category: 'tools', proficiencyLevel: 'advanced' },
  { id: 'webpack', name: 'Webpack', category: 'tools', proficiencyLevel: 'intermediate' },
  
  // Testing
  { id: 'jest', name: 'Jest', category: 'testing', proficiencyLevel: 'intermediate' },
  { id: 'cypress', name: 'Cypress', category: 'testing', proficiencyLevel: 'beginner' },
];

// Fonction helper pour récupérer les technologies par ID
const getTechsByIds = (ids: string[]): Technology[] => {
  return ids.map(id => technologies.find(tech => tech.id === id)).filter(Boolean) as Technology[];
};

// Projets de démonstration
export const projectsData: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'Plateforme E-commerce Moderne',
    description: 'Développement d\'une plateforme e-commerce complète avec gestion des stocks, paiements sécurisés et interface d\'administration. Architecture moderne avec React et Node.js, optimisée pour les performances et le SEO.',
    shortDescription: 'Plateforme e-commerce complète avec React et Node.js',
    technologies: getTechsByIds(['react', 'typescript', 'nodejs', 'mongodb', 'sass']),
    imageUrl: '/assets/images/projects/ecommerce-platform.jpg',
    projectUrl: 'https://demo-ecommerce.example.com',
    githubUrl: 'https://github.com/jeandupont/ecommerce-platform',
    isHighlighted: true,
    category: 'ecommerce',
    completionDate: '2024-01-15',
    challenges: [
      'Optimisation des performances pour 10k+ produits',
      'Intégration de multiples passerelles de paiement',
      'Gestion temps réel des stocks',
      'SEO pour catalogue produits dynamique'
    ],
    results: [
      'Temps de chargement < 2 secondes',
      'Taux de conversion +35%',
      'Score Lighthouse 95+',
      '99.9% de disponibilité'
    ]
  },
  {
    id: 'portfolio-agency',
    title: 'Site Portfolio Agence Créative',
    description: 'Création d\'un site portfolio pour une agence créative avec animations fluides, galerie interactive et système de gestion de contenu. Design responsive et optimisé pour tous les appareils.',
    shortDescription: 'Portfolio agence avec animations et CMS',
    technologies: getTechsByIds(['react', 'typescript', 'tailwind', 'nodejs']),
    imageUrl: '/assets/images/projects/portfolio-agency.jpg',
    projectUrl: 'https://creative-agency.example.com',
    githubUrl: 'https://github.com/jeandupont/portfolio-agency',
    isHighlighted: true,
    category: 'web-development',
    completionDate: '2023-11-20',
    challenges: [
      'Animations complexes sans impact sur les performances',
      'Galerie interactive avec lazy loading',
      'CMS personnalisé pour les projets',
      'Optimisation mobile-first'
    ],
    results: [
      'Augmentation du trafic +150%',
      'Temps de session +80%',
      'Nouveaux clients +40%',
      'Score accessibilité 100%'
    ]
  },
  {
    id: 'wordpress-multisite',
    title: 'Réseau WordPress Multisite',
    description: 'Développement d\'un réseau WordPress multisite pour une chaîne de restaurants avec thème personnalisé, système de réservation et intégration e-commerce. Gestion centralisée de 15 sites.',
    shortDescription: 'Réseau WordPress pour chaîne de restaurants',
    technologies: getTechsByIds(['php', 'javascript', 'mysql', 'sass']),
    imageUrl: '/assets/images/projects/wordpress-multisite.jpg',
    projectUrl: 'https://restaurant-chain.example.com',
    isHighlighted: false,
    category: 'wordpress',
    completionDate: '2023-09-10',
    challenges: [
      'Synchronisation des données entre sites',
      'Thème adaptatif pour différents restaurants',
      'Système de réservation centralisé',
      'Performance avec 15 sites simultanés'
    ],
    results: [
      'Gestion simplifiée pour 15 sites',
      'Réservations en ligne +200%',
      'Temps de maintenance -60%',
      'Satisfaction client 4.8/5'
    ]
  },
  {
    id: 'seo-dashboard',
    title: 'Dashboard SEO Analytics',
    description: 'Application web pour le suivi et l\'analyse SEO avec intégration Google Analytics, Search Console et outils de tracking personnalisés. Interface intuitive avec graphiques en temps réel.',
    shortDescription: 'Dashboard SEO avec analytics en temps réel',
    technologies: getTechsByIds(['react', 'typescript', 'nodejs', 'mongodb']),
    imageUrl: '/assets/images/projects/seo-dashboard.jpg',
    githubUrl: 'https://github.com/jeandupont/seo-dashboard',
    isHighlighted: false,
    category: 'seo',
    completionDate: '2023-07-25',
    challenges: [
      'Intégration APIs Google (Analytics, Search Console)',
      'Traitement de gros volumes de données',
      'Graphiques interactifs performants',
      'Alertes automatisées'
    ],
    results: [
      'Suivi de 50+ sites clients',
      'Rapports automatisés quotidiens',
      'Détection d\'anomalies en temps réel',
      'Gain de temps 70% pour les audits'
    ]
  },
  {
    id: 'mobile-app-landing',
    title: 'Landing Page Application Mobile',
    description: 'Création d\'une landing page moderne pour le lancement d\'une application mobile avec animations parallax, formulaires de pré-inscription et intégration réseaux sociaux.',
    shortDescription: 'Landing page app mobile avec animations',
    technologies: getTechsByIds(['react', 'typescript', 'bootstrap', 'sass']),
    imageUrl: '/assets/images/projects/mobile-app-landing.jpg',
    projectUrl: 'https://app-landing.example.com',
    isHighlighted: false,
    category: 'web-development',
    completionDate: '2023-05-15',
    challenges: [
      'Animations parallax fluides',
      'Optimisation mobile critique',
      'Intégration formulaires marketing',
      'A/B testing pour conversions'
    ],
    results: [
      'Taux de conversion 12%',
      '5000+ pré-inscriptions',
      'Partages sociaux +300%',
      'Score PageSpeed 98/100'
    ]
  },
  {
    id: 'blog-tech',
    title: 'Blog Technique avec CMS',
    description: 'Développement d\'un blog technique avec système de gestion de contenu personnalisé, recherche avancée, commentaires et newsletter. Optimisé pour le SEO et les performances.',
    shortDescription: 'Blog technique avec CMS personnalisé',
    technologies: getTechsByIds(['svelte', 'nodejs', 'mongodb', 'sass']),
    imageUrl: '/assets/images/projects/blog-tech.jpg',
    projectUrl: 'https://tech-blog.example.com',
    githubUrl: 'https://github.com/jeandupont/blog-tech',
    isHighlighted: false,
    category: 'web-development',
    completionDate: '2023-03-30',
    challenges: [
      'CMS intuitif pour rédacteurs',
      'Recherche full-text performante',
      'Système de commentaires modéré',
      'Newsletter automatisée'
    ],
    results: [
      '10k+ visiteurs mensuels',
      'Temps de lecture moyen 4min',
      '500+ abonnés newsletter',
      'Référencement top 3 sur mots-clés cibles'
    ]
  }
];

// Projets mis en avant
export const highlightedProjects = projectsData.filter(project => project.isHighlighted);

// Projets par catégorie
export const getProjectsByCategory = (category: string) => {
  if (category === 'all') return projectsData;
  return projectsData.filter(project => project.category === category);
};

// Projet le plus récent
export const latestProject = projectsData.sort((a, b) => 
  new Date(b.completionDate).getTime() - new Date(a.completionDate).getTime()
)[0];
