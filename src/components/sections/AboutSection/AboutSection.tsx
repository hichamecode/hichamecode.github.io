import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { STATISTICS } from '../../../constants/app.constants';
import './AboutSection.scss';

const AboutSection: React.FC = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/assets/documents/cv-jean-dupont.pdf';
    link.download = 'CV-Jean-Dupont-Developpeur-Web.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleScrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="about" className="about-section section">
      <Container fluid className="px-3 px-md-4">
        <Row>
          <Col lg={6} className="about-content">
            <div className="section-header">
              <span className="section-subtitle">Qui suis-je ?</span>
              <h2 className="section-title">À propos de moi</h2>
            </div>

            <div className="about-text">
              <p className="lead">
                Passionné par le développement web depuis plus de 5 ans, 
                je crée des <strong>expériences digitales</strong> qui allient 
                performance technique et design moderne.
              </p>

              <p>
                Spécialisé dans l'écosystème <strong>React/TypeScript</strong>, 
                je maîtrise également <strong>Svelte</strong>, <strong>WordPress</strong> 
                et les techniques de <strong>référencement SEO</strong>. 
                Mon approche mobile-first et ma rigueur dans le code garantissent 
                des sites web rapides, accessibles et optimisés.
              </p>

              <p>
                Que ce soit pour une startup innovante ou une entreprise établie, 
                j'accompagne mes clients dans la <strong>transformation digitale</strong> 
                en proposant des solutions sur mesure adaptées à leurs besoins.
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight-item">
                <i className="bi bi-check-circle-fill"></i>
                <span>Code propre et maintenable</span>
              </div>
              <div className="highlight-item">
                <i className="bi bi-check-circle-fill"></i>
                <span>Approche mobile-first</span>
              </div>
              <div className="highlight-item">
                <i className="bi bi-check-circle-fill"></i>
                <span>Optimisation SEO native</span>
              </div>
              <div className="highlight-item">
                <i className="bi bi-check-circle-fill"></i>
                <span>Performance et accessibilité</span>
              </div>
            </div>

            <div className="about-actions">
              <Button 
                className="btn-custom btn-primary me-3 mb-2"
                onClick={handleDownloadCV}
              >
                <i className="bi bi-download me-2"></i>
                Télécharger mon CV
              </Button>
              
              <Button 
                variant="outline-primary"
                className="btn-custom btn-secondary mb-2"
                onClick={handleScrollToContact}
              >
                <i className="bi bi-chat-dots me-2"></i>
                Discutons de votre projet
              </Button>
            </div>
          </Col>

          <Col lg={6} className="about-visual">
            <div className="about-image-container">
              <div className="about-image">
                <img 
                  src="/assets/images/about-developer.jpg" 
                  alt="Jean Dupont - Développeur Web"
                  className="img-fluid"
                />
              </div>
              
              {/* Carte de compétences flottante */}
              <div className="skills-card">
                <h6>Technologies favorites</h6>
                <div className="tech-icons">
                  <span className="tech-icon" title="React">
                    <i className="bi bi-code-slash"></i>
                  </span>
                  <span className="tech-icon" title="TypeScript">
                    <i className="bi bi-braces"></i>
                  </span>
                  <span className="tech-icon" title="Bootstrap">
                    <i className="bi bi-bootstrap"></i>
                  </span>
                  <span className="tech-icon" title="Git">
                    <i className="bi bi-git"></i>
                  </span>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Statistiques */}
        <Row className="statistics-row">
          <Col xs={12}>
            <div className="statistics-container">
              {STATISTICS.map((stat) => (
                <div key={stat.id} className="statistic-item">
                  <div className="stat-icon">
                    <i className={stat.icon}></i>
                  </div>
                  <div className="stat-content">
                    <span className="stat-number">
                      {stat.value}{stat.unit}
                    </span>
                    <span className="stat-label">{stat.label}</span>
                    <span className="stat-description">{stat.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
