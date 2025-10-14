import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
// SERVICE_CONFIG sera utilisé plus tard pour les options de budget
import './ServicesSection.scss';

const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 'development',
      title: 'Développement Web',
      icon: 'bi-code-slash',
      description: 'Création de sites web modernes et performants avec React, TypeScript et les dernières technologies.',
      features: [
        'Sites web responsive',
        'Applications React/TypeScript',
        'Optimisation des performances',
        'Architecture moderne',
        'Code maintenable'
      ],
      pricing: 'À partir de 1 500€',
      duration: '2-6 semaines',
      popular: true
    },
    {
      id: 'seo',
      title: 'SEO & Référencement',
      icon: 'bi-search',
      description: 'Optimisation complète de votre visibilité en ligne avec des stratégies SEO éprouvées.',
      features: [
        'Audit SEO technique',
        'Recherche de mots-clés',
        'Optimisation on-page',
        'Rédaction d\'articles SEO',
        'Suivi des performances'
      ],
      pricing: 'À partir de 800€',
      duration: '1-3 semaines',
      popular: false
    },
    {
      id: 'wordpress',
      title: 'WordPress Expert',
      icon: 'bi-wordpress',
      description: 'Développement, maintenance et optimisation de sites WordPress pour tous vos besoins.',
      features: [
        'Thèmes personnalisés',
        'Extensions sur mesure',
        'Maintenance complète',
        'Sécurisation avancée',
        'Migration de sites'
      ],
      pricing: 'À partir de 600€',
      duration: '1-4 semaines',
      popular: false
    },
    {
      id: 'consulting',
      title: 'Conseil & Audit',
      icon: 'bi-chat-dots',
      description: 'Accompagnement personnalisé pour optimiser votre stratégie digitale et technique.',
      features: [
        'Audit technique complet',
        'Stratégie digitale',
        'Recommandations UX/UI',
        'Formation équipes',
        'Suivi de projet'
      ],
      pricing: '150€/heure',
      duration: 'Flexible',
      popular: false
    }
  ];

  const handleContactForService = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="services" className="services-section section">
      <Container fluid className="px-3 px-md-4">
        <div className="section-header text-center">
          <span className="section-subtitle">Mes prestations</span>
          <h2 className="section-title">Services</h2>
          <p className="section-description">
            Des solutions complètes pour tous vos besoins digitaux, 
            de la conception au déploiement en passant par l'optimisation.
          </p>
        </div>

        <Row className="services-grid">
          {services.map((service) => (
            <Col lg={6} key={service.id} className="mb-4">
              <Card className={`service-card h-100 ${service.popular ? 'popular' : ''}`}>
                {service.popular && (
                  <Badge className="popular-badge">
                    <i className="bi bi-star-fill me-1"></i>
                    Plus demandé
                  </Badge>
                )}

                <Card.Body className="d-flex flex-column">
                  <div className="service-header">
                    <div className="service-icon">
                      <i className={service.icon}></i>
                    </div>
                    <div className="service-title-block">
                      <Card.Title className="service-title">
                        {service.title}
                      </Card.Title>
                      <div className="service-pricing">
                        <span className="price">{service.pricing}</span>
                        <span className="duration">{service.duration}</span>
                      </div>
                    </div>
                  </div>

                  <Card.Text className="service-description">
                    {service.description}
                  </Card.Text>

                  <div className="service-features flex-grow-1">
                    <h6>Ce qui est inclus :</h6>
                    <ul>
                      {service.features.map((feature, index) => (
                        <li key={index}>
                          <i className="bi bi-check-circle-fill"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-actions">
                    <Button 
                      className="btn-custom btn-primary w-100"
                      onClick={handleContactForService}
                    >
                      <i className="bi bi-chat-dots me-2"></i>
                      Demander un devis
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Section tarification */}
        <div className="pricing-info">
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h4>Tarification transparente</h4>
              <p>
                Tous mes tarifs sont transparents et adaptés à votre budget. 
                Chaque projet est unique, c'est pourquoi je propose toujours 
                un devis personnalisé après analyse de vos besoins.
              </p>
              
              <div className="pricing-features">
                <div className="pricing-feature">
                  <i className="bi bi-shield-check"></i>
                  <span>Devis gratuit sous 24h</span>
                </div>
                <div className="pricing-feature">
                  <i className="bi bi-clock"></i>
                  <span>Respect des délais</span>
                </div>
                <div className="pricing-feature">
                  <i className="bi bi-headset"></i>
                  <span>Support inclus</span>
                </div>
                <div className="pricing-feature">
                  <i className="bi bi-arrow-repeat"></i>
                  <span>Révisions gratuites</span>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {/* Call to action */}
        <div className="services-cta text-center">
          <h4>Prêt à démarrer votre projet ?</h4>
          <p>Contactez-moi pour discuter de vos besoins et obtenir un devis personnalisé.</p>
          <div className="cta-actions">
            <Button 
              className="btn-custom btn-primary me-3 mb-2"
              onClick={handleContactForService}
            >
              <i className="bi bi-rocket me-2"></i>
              Démarrer un projet
            </Button>
            <Button 
              variant="outline-primary"
              className="btn-custom btn-secondary mb-2"
              href="tel:+33612345678"
            >
              <i className="bi bi-telephone me-2"></i>
              Appeler directement
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
