# Guide de Conventions de Code - Portfolio Hicham

## 🎯 Philosophie de développement

### Principes fondamentaux
- **DRY (Don't Repeat Yourself)** : Éviter la duplication de code
- **Composants réutilisables** : Créer des composants modulaires et réutilisables
- **Code auto-documenté** : Noms explicites plutôt que commentaires excessifs
- **Architecture propre** : Structure de dossiers claire et logique
- **Cohérence stylistique** : Thème global centralisé

---

## 📁 Architecture des dossiers

```
src/
├── components/           # Composants réutilisables
│   ├── common/          # Composants génériques (Button, Card, etc.)
│   ├── layout/          # Composants de mise en page (Header, Footer, etc.)
│   └── sections/        # Composants spécifiques aux sections
├── pages/               # Pages principales de l'application
├── hooks/               # Custom hooks React
├── utils/               # Fonctions utilitaires
├── types/               # Définitions TypeScript
├── styles/              # Fichiers de styles
│   ├── themes/          # Variables de thème
│   ├── components/      # Styles spécifiques aux composants
│   └── globals/         # Styles globaux
├── assets/              # Images, icônes, fichiers statiques
│   ├── images/
│   ├── icons/
│   └── documents/
├── data/                # Données statiques (projets, services, etc.)
└── constants/           # Constantes de l'application
```

---

## 🧩 Conventions pour les composants

### Création de composants
- **Toujours créer un composant** quand une partie de l'UI peut être réutilisée
- **Un composant = un fichier** avec le même nom
- **PascalCase** pour les noms de composants
- **Composants fonctionnels** avec TypeScript

### Structure d'un composant
```typescript
// components/common/Button/Button.tsx
import React from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';
import { ButtonProps } from './Button.types';
import './Button.scss';

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  ...props
}) => {
  return (
    <BootstrapButton
      variant={variant}
      size={size}
      disabled={isLoading}
      className={`custom-button ${isLoading ? 'loading' : ''}`}
      {...props}
    >
      {isLoading ? 'Chargement...' : children}
    </BootstrapButton>
  );
};
```

### Fichiers associés
```
Button/
├── Button.tsx           # Composant principal
├── Button.types.ts      # Types TypeScript
├── Button.scss          # Styles spécifiques
└── index.ts            # Export du composant
```

---

## 📝 Conventions de nommage

### Variables et fonctions
```typescript
// ✅ Bon - Noms explicites
const userProfileData = fetchUserProfile();
const isFormSubmissionLoading = false;
const calculateProjectEstimatedCost = (hours: number) => hours * hourlyRate;

// ❌ Éviter - Noms vagues
const data = fetch();
const loading = false;
const calc = (h: number) => h * rate;
```

### Composants
```typescript
// ✅ Bon
const ProjectCard = () => {};
const ServicePricingTable = () => {};
const ContactFormModal = () => {};

// ❌ Éviter
const Card = () => {};
const Table = () => {};
const Modal = () => {};
```

### Fichiers et dossiers
```
// ✅ Bon
components/common/ProjectCard/
pages/ServicesPage/
hooks/useContactForm/
utils/formatCurrency/

// ❌ Éviter
components/card/
pages/services/
hooks/form/
utils/format/
```

---

## 🎨 Gestion des styles

### Thème global
```scss
// styles/themes/variables.scss
:root {
  // Couleurs principales
  --color-primary: #2563eb;
  --color-secondary: #64748b;
  --color-accent: #f59e0b;
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-danger: #ef4444;
  
  // Couleurs de fond
  --bg-primary: #ffffff;
  --bg-secondary: #f8fafc;
  --bg-dark: #1e293b;
  
  // Couleurs de texte
  --text-primary: #1e293b;
  --text-secondary: #64748b;
  --text-muted: #94a3b8;
  --text-light: #ffffff;
  
  // Espacements
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;
  
  // Tailles de police
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 2rem;
  
  // Polices
  --font-family-primary: 'Inter', sans-serif;
  --font-family-heading: 'Poppins', sans-serif;
  --font-family-mono: 'Fira Code', monospace;
  
  // Bordures
  --border-radius-sm: 0.25rem;
  --border-radius-md: 0.375rem;
  --border-radius-lg: 0.5rem;
  --border-radius-xl: 0.75rem;
  
  // Ombres
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  
  // Transitions
  --transition-fast: 0.15s ease-in-out;
  --transition-normal: 0.3s ease-in-out;
  --transition-slow: 0.5s ease-in-out;
}

// Mode sombre
[data-theme="dark"] {
  --bg-primary: #1e293b;
  --bg-secondary: #334155;
  --text-primary: #f1f5f9;
  --text-secondary: #cbd5e1;
  --text-muted: #94a3b8;
}
```

### Utilisation dans les composants
```scss
// components/common/Button/Button.scss
.custom-button {
  font-family: var(--font-family-primary);
  border-radius: var(--border-radius-md);
  transition: var(--transition-fast);
  
  &.primary {
    background-color: var(--color-primary);
    color: var(--text-light);
  }
  
  &.loading {
    opacity: 0.7;
    cursor: not-allowed;
  }
}
```

---

## 🔧 Conventions TypeScript

### Définition des types
```typescript
// types/common.types.ts
export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: Technology[];
  imageUrl: string;
  projectUrl?: string;
  githubUrl?: string;
  isHighlighted: boolean;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  features: string[];
  pricing: ServicePricing;
  category: ServiceCategory;
}

export type ServiceCategory = 'development' | 'seo' | 'wordpress' | 'consulting';
```

### Props des composants
```typescript
// components/common/ProjectCard/ProjectCard.types.ts
import { BaseProps, Project } from '../../../types/common.types';

export interface ProjectCardProps extends BaseProps {
  project: Project;
  onViewDetails: (projectId: string) => void;
  isCompact?: boolean;
  showTechnologies?: boolean;
}
```

---

## 🪝 Custom Hooks

### Structure des hooks
```typescript
// hooks/useContactForm/useContactForm.ts
import { useState, useCallback } from 'react';
import { ContactFormData, ContactFormErrors } from './useContactForm.types';

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    projectType: '',
  });
  
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const validateForm = useCallback((): boolean => {
    const newErrors: ContactFormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Format d\'email invalide';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);
  
  const submitForm = useCallback(async () => {
    if (!validateForm()) return false;
    
    setIsSubmitting(true);
    try {
      // Logique de soumission
      return true;
    } catch (error) {
      console.error('Erreur lors de la soumission:', error);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, validateForm]);
  
  return {
    formData,
    setFormData,
    errors,
    isSubmitting,
    submitForm,
  };
};
```

---

## 📊 Gestion des données

### Structure des données
```typescript
// data/projects.data.ts
import { Project } from '../types/common.types';

export const projectsData: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'Plateforme E-commerce',
    description: 'Application de vente en ligne complète avec gestion des stocks',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    imageUrl: '/assets/images/projects/ecommerce.jpg',
    projectUrl: 'https://example-ecommerce.com',
    githubUrl: 'https://github.com/username/ecommerce',
    isHighlighted: true,
  },
  // ...autres projets
];
```

### Constantes
```typescript
// constants/app.constants.ts
export const APP_CONFIG = {
  name: 'Hicham - Développeur Web',
  description: 'Services de développement web et SEO',
  author: 'Hicham',
  version: '1.0.0',
} as const;

export const CONTACT_INFO = {
  email: 'contact@hicham.dev',
  linkedin: 'https://linkedin.com/in/hicham',
  github: 'https://github.com/hicham',
} as const;

export const NAVIGATION_ITEMS = [
  { id: 'home', label: 'Accueil', href: '#home' },
  { id: 'about', label: 'À propos', href: '#about' },
  { id: 'skills', label: 'Compétences', href: '#skills' },
  { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'contact', label: 'Contact', href: '#contact' },
] as const;
```

---

## 💬 Conventions pour les commentaires

### Quand commenter
```typescript
// ✅ Bon - Logique complexe qui nécessite une explication
const calculateProjectDeadline = (startDate: Date, complexity: number): Date => {
  // Ajouter des jours supplémentaires basés sur la complexité du projet
  // Complexité 1-3: +0 jours, 4-6: +3 jours, 7-10: +7 jours
  const additionalDays = complexity > 6 ? 7 : complexity > 3 ? 3 : 0;
  return addDays(startDate, 14 + additionalDays);
};

// ✅ Bon - Explication d'une solution non évidente
const handleScrollToSection = (sectionId: string) => {
  // Utiliser setTimeout pour éviter les conflits avec React Router
  setTimeout(() => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }, 100);
};
```

### Éviter les commentaires évidents
```typescript
// ❌ Éviter - Le code est auto-explicite
const userName = 'John'; // Définit le nom d'utilisateur
const isUserLoggedIn = checkUserLoginStatus(); // Vérifie si l'utilisateur est connecté

// ✅ Bon - Pas de commentaire nécessaire
const userName = 'John';
const isUserLoggedIn = checkUserLoginStatus();
```

---

## 🔍 Conventions pour les utilitaires

### Fonctions utilitaires
```typescript
// utils/formatters.utils.ts
export const formatCurrency = (amount: number, currency = 'EUR'): string => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency,
  }).format(amount);
};

export const formatDate = (date: Date, format: 'short' | 'long' = 'short'): string => {
  const options: Intl.DateTimeFormatOptions = 
    format === 'long' 
      ? { year: 'numeric', month: 'long', day: 'numeric' }
      : { year: 'numeric', month: '2-digit', day: '2-digit' };
  
  return new Intl.DateTimeFormat('fr-FR', options).format(date);
};

export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};
```

---

## ✅ Checklist de qualité

### Avant chaque commit
- [ ] Noms de variables et fonctions explicites
- [ ] Pas de code dupliqué
- [ ] Composants réutilisables créés quand nécessaire
- [ ] Types TypeScript définis
- [ ] Styles utilisent les variables du thème
- [ ] Pas de commentaires inutiles
- [ ] Structure de dossiers respectée
- [ ] Tests unitaires (si applicable)

### Avant chaque PR
- [ ] Code formaté avec Prettier
- [ ] Pas d'erreurs ESLint
- [ ] Pas d'erreurs TypeScript
- [ ] Responsive design testé
- [ ] Performance vérifiée
- [ ] Accessibilité respectée

---

*Ce guide doit être suivi rigoureusement pour maintenir la qualité et la cohérence du code.*
