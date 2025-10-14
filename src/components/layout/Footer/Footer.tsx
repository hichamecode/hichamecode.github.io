import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { APP_CONFIG, CONTACT_INFO, SOCIAL_LINKS, NAVIGATION_ITEMS } from '../../../constants/app.constants';
import './Footer.scss';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="custom-footer">
      <Container>
        <Row className="footer-content">
          {/* Informations principales */}
          <Col lg={4} md={6} className="mb-4">
            <div className="footer-brand">
              <h5>{APP_CONFIG.shortName}</h5>
              <p className="footer-description">
                {APP_CONFIG.description}
              </p>
              <div className="footer-contact">
                <div className="contact-item">
                  <i className="bi bi-envelope"></i>
                  <a href={`mailto:${CONTACT_INFO.email}`}>
                    {CONTACT_INFO.email}
                  </a>
                </div>
                <div className="contact-item">
                  <i className="bi bi-geo-alt"></i>
                  <span>{CONTACT_INFO.location}</span>
                </div>
                <div className="contact-item">
                  <i className="bi bi-clock"></i>
                  <span>{CONTACT_INFO.workingHours}</span>
                </div>
              </div>
            </div>
          </Col>

          {/* Navigation rapide */}
          <Col lg={2} md={6} className="mb-4">
            <div className="footer-links">
              <h6>Navigation</h6>
              <ul>
                {NAVIGATION_ITEMS.slice(0, 4).map((item) => (
                  <li key={item.id}>
                    <a 
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Col>

          {/* Services */}
          <Col lg={2} md={6} className="mb-4">
            <div className="footer-links">
              <h6>Services</h6>
              <ul>
                <li><a href="#services">Développement Web</a></li>
                <li><a href="#services">SEO & Référencement</a></li>
                <li><a href="#services">WordPress</a></li>
                <li><a href="#services">Maintenance</a></li>
              </ul>
            </div>
          </Col>

          {/* Réseaux sociaux et contact */}
          <Col lg={4} md={6} className="mb-4">
            <div className="footer-social">
              <h6>Suivez-moi</h6>
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
              <div className="footer-cta">
                <p>Prêt à démarrer votre projet ?</p>
                <a 
                  href="#contact" 
                  className="btn-custom btn-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }}
                >
                  <i className="bi bi-chat-dots"></i>
                  Contactez-moi
                </a>
              </div>
            </div>
          </Col>
        </Row>

        {/* Ligne de séparation */}
        <hr className="footer-divider" />

        {/* Copyright et liens légaux */}
        <Row className="footer-bottom">
          <Col md={6}>
            <p className="copyright">
              © {currentYear} {APP_CONFIG.shortName}. Tous droits réservés.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <div className="footer-bottom-links">
              <a href="#privacy">Politique de confidentialité</a>
              <a href="#terms">Mentions légales</a>
              <button 
                className="back-to-top"
                onClick={scrollToTop}
                title="Retour en haut"
              >
                <i className="bi bi-arrow-up"></i>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
