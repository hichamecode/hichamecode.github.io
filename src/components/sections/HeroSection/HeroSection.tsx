import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { APP_CONFIG, SOCIAL_LINKS } from '../../../constants/app.constants';
import './HeroSection.scss';

const HeroSection: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = [
    'Développeur Web Full-Stack',
    'Expert React & TypeScript',
    'Spécialiste SEO',
    'Consultant WordPress'
  ];

  // Effet de frappe pour les titres
  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentTitle.length) {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayedText, currentIndex, isDeleting, titles]);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleDownloadCV = () => {
    // Simulation du téléchargement du CV
    const link = document.createElement('a');
    link.href = '/assets/documents/cv-jean-dupont.pdf';
    link.download = 'CV-Jean-Dupont-Developpeur-Web.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="hero-section">
      <Container fluid className="px-3 px-md-4">
        <Row className="align-items-center min-vh-100 mx-0">
          <Col lg={6} className="hero-content">
            <div className="hero-text">
              <p className="hero-greeting fade-in">
                👋 Salut, je suis
              </p>
              
              <h1 className="hero-name slide-in-left">
                {APP_CONFIG.shortName}
              </h1>
              
              <div className="hero-title-container">
                <h2 className="hero-title">
                  {displayedText}
                  <span className="cursor">|</span>
                </h2>
              </div>
              
              <p className="hero-description slide-in-right">
                Je crée des <strong>sites web modernes</strong> et <strong>performants</strong> 
                avec React, TypeScript et les dernières technologies. 
                Spécialisé en <strong>SEO</strong> et <strong>WordPress</strong>, 
                je vous accompagne dans tous vos projets digitaux.
              </p>

              <div className="hero-stats fade-in">
                <div className="stat-item">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Années d'expérience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Projets réalisés</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">30+</span>
                  <span className="stat-label">Clients satisfaits</span>
                </div>
              </div>

              <div className="hero-actions slide-in-left">
                <Button
                  className="btn-custom btn-primary me-3 mb-2"
                  onClick={() => handleScrollToSection('contact')}
                >
                  <i className="bi bi-chat-dots me-2"></i>
                  Démarrer un projet
                </Button>
                
                <Button
                  variant="outline-primary"
                  className="btn-custom btn-secondary mb-2"
                  onClick={() => handleScrollToSection('portfolio')}
                >
                  <i className="bi bi-eye me-2"></i>
                  Voir mes réalisations
                </Button>
              </div>

              <div className="hero-social slide-in-right">
                <p className="social-label">Suivez-moi :</p>
                <div className="social-links">
                  {SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      title={`Suivre sur ${social.platform}`}
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Col>

          <Col lg={6} className="hero-visual">
            <div className="hero-image-container fade-in">
              <div className="hero-image">
                <img 
                  src="/assets/images/hero-developer.svg" 
                  alt="Développeur Web"
                  className="img-fluid"
                />
              </div>
              
              {/* Éléments décoratifs flottants */}
              <div className="floating-elements">
                <div className="floating-tech react">
                  <i className="bi bi-code-slash"></i>
                  <span>React</span>
                </div>
                <div className="floating-tech typescript">
                  <i className="bi bi-braces"></i>
                  <span>TypeScript</span>
                </div>
                <div className="floating-tech seo">
                  <i className="bi bi-search"></i>
                  <span>SEO</span>
                </div>
                <div className="floating-tech wordpress">
                  <i className="bi bi-wordpress"></i>
                  <span>WordPress</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Indicateur de scroll */}
        <div className="scroll-indicator">
          <button 
            className="scroll-down"
            onClick={() => handleScrollToSection('about')}
            title="Découvrir la suite"
          >
            <i className="bi bi-chevron-down"></i>
          </button>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
