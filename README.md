# Portfolio Hicham - Développeur Web Full-Stack

[![Deployment Status](https://img.shields.io/badge/deployment-github--pages-success)](https://hichamecode.github.io)
[![React](https://img.shields.io/badge/React-18+-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue)](https://www.typescriptlang.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3+-purple)](https://getbootstrap.com/)

> Site portfolio professionnel présentant mes services de développement web, SEO et WordPress.

## 🚀 Aperçu

Ce portfolio présente mes compétences en développement web et mes services professionnels :
- **Développement web responsive** : Ce site démontre mes compétences avec React, TypeScript et Bootstrap entre autres
- **Maîtrise technique étendue** : Svelte, TailwindCSS, Docker, GitLab, Jira, Jest et bien plus
- **Services SEO** : audit, rédaction d'articles optimisés, stratégie de référencement
- **WordPress** : gestion complète, thèmes personnalisés, maintenance
- **Projets réalisés** : showcase de mes réalisations avec études de cas détaillées

🌐 **Site en ligne** : [hichamecode.github.io](https://hichamecode.github.io)

## 🛠️ Stack Technique

### Frontend
- **Framework** : React 18+ avec TypeScript
- **Build Tool** : Vite
- **Styling** : Bootstrap 5.3+ avec React Bootstrap
- **CSS** : SCSS/Sass pour les customisations
- **Animations** : Framer Motion + Bootstrap animations
- **Icons** : Bootstrap Icons / React Icons
- **Formulaires** : React Hook Form + Zod

### Stack utilisée pour ce projet
- **Linting** : ESLint + Prettier + TypeScript ESLint
- **Version Control** : Git + GitHub
- **Déploiement** : GitHub Pages
- **CI/CD** : GitHub Actions

### Autres technologies maîtrisées
- **Frameworks** : Svelte, SvelteKit
- **CSS Frameworks** : TailwindCSS, Bootstrap
- **DevOps** : Docker, GitLab CI/CD
- **Gestion de projet** : Jira, Trello
- **Testing** : Jest, Vitest, Cypress
- **Bases de données** : MongoDB, PostgreSQL, MySQL

## 📁 Structure du projet

```
src/
├── components/           # Composants réutilisables
│   ├── common/          # Composants génériques (Button, Card, etc.)
│   ├── layout/          # Composants de mise en page (Header, Footer)
│   └── sections/        # Composants spécifiques aux sections
├── pages/               # Pages principales
├── hooks/               # Custom hooks React
├── utils/               # Fonctions utilitaires
├── types/               # Définitions TypeScript
├── styles/              # Fichiers de styles
│   ├── themes/          # Variables de thème
│   ├── components/      # Styles spécifiques aux composants
│   └── globals/         # Styles globaux
├── assets/              # Images, icônes, fichiers statiques
├── data/                # Données statiques (projets, services)
└── constants/           # Constantes de l'application
```

## 🎯 Fonctionnalités

### ✅ Implémentées
- [x] Design responsive mobile-first
- [x] Navigation fluide avec ancres
- [x] Mode sombre/clair
- [x] Formulaire de contact fonctionnel
- [x] Optimisation SEO de base
- [x] Performance optimisée

### 🚧 En développement
- [ ] Blog avec système de catégories
- [ ] Calculateur de devis interactif
- [ ] Animations avancées
- [ ] Système de commentaires
- [ ] Analytics avancées

## 🚀 Installation et développement

### Prérequis
- Node.js 18+
- npm ou yarn

### Installation
```bash
# Cloner le repository
git clone https://github.com/hichamecode/hichamecode.github.io.git
cd hichamecode.github.io

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

### Scripts disponibles
```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run preview      # Aperçu du build
npm run lint         # Linter ESLint
npm run type-check   # Vérification TypeScript
```

## 📱 Approche Mobile-First

Ce projet suit une approche **mobile-first** avec **progressive enhancement** :

1. **MVP Mobile** : Version simple et fonctionnelle sur mobile
2. **Contenu Core** : Ajout progressif du contenu optimisé mobile
3. **Enhancement Desktop** : Adaptation et enrichissement pour grands écrans
4. **Fonctionnalités Avancées** : Animations et interactions complexes

## 🎨 Design System

### Variables CSS personnalisées
- **Couleurs** : Palette cohérente avec mode sombre/clair
- **Typographie** : Hiérarchie claire avec polices web optimisées
- **Espacements** : Système d'espacement cohérent
- **Animations** : Transitions fluides et micro-interactions

### Composants réutilisables
- Boutons avec états (loading, disabled)
- Cards de projets avec hover effects
- Formulaires avec validation
- Navigation responsive

## 📊 Performance

### Objectifs
- **Lighthouse Performance** : > 90
- **SEO Score** : > 90
- **Accessibilité** : > 90
- **Temps de chargement** : < 3 secondes

### Optimisations
- Lazy loading des images
- Code splitting automatique
- Compression des assets
- Cache stratégique

## 🔧 Conventions de code

Ce projet suit des conventions strictes pour maintenir la qualité :
- **DRY** : Éviter la duplication de code
- **Composants réutilisables** : Modularité maximale
- **Noms explicites** : Variables et fonctions auto-documentées
- **TypeScript strict** : Types explicites partout
- **Architecture propre** : Structure de dossiers logique

📖 Voir [coding-guidelines.md](./coding-guidelines.md) pour les détails complets.

## 📈 SEO et Analytics

### Optimisations SEO
- Meta tags optimisés pour chaque page
- Schema markup (JSON-LD)
- Sitemap XML automatique
- URLs sémantiques
- Open Graph pour réseaux sociaux

### Analytics
- Google Analytics 4
- Google Search Console
- Core Web Vitals monitoring

## 🚀 Déploiement

Le site est automatiquement déployé sur GitHub Pages via GitHub Actions :
- **Branche principale** : `main`
- **Build automatique** : À chaque push
- **URL de production** : https://hichamecode.github.io

### Workflow de déploiement
1. Push sur `main`
2. GitHub Actions build le projet
3. Déploiement automatique sur GitHub Pages
4. Vérification des performances

## 📞 Contact

**Hicham** - Développeur Web Full-Stack
- 🌐 Portfolio : [hichamecode.github.io](https://hichamecode.github.io)
- 📧 Email : [contact@hicham.dev](mailto:contact@hicham.dev)
- 💼 LinkedIn : [linkedin.com/in/hicham](https://linkedin.com/in/hicham)
- 🐙 GitHub : [github.com/hichamecode](https://github.com/hichamecode)

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## 🎯 Services proposés

### 💻 Développement Web
- Sites web responsive et performants
- Applications web sur mesure
- Refonte et modernisation de sites existants

### 🔍 SEO & Référencement
- Audit SEO complet avec rapport détaillé
- Rédaction d'articles optimisés SEO
- Stratégie de référencement personnalisée

### 🔧 WordPress
- Gestion complète de sites WordPress
- Développement de thèmes personnalisés
- Maintenance, sécurité et optimisation

---

*Développé avec ❤️ par Hicham*