import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { projectsData } from '../../../data/projects.data';
import { PROJECT_CONFIG } from '../../../constants/app.constants';
import './PortfolioSection.scss';

const PortfolioSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(6);

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setVisibleProjects(6);
  };

  const loadMoreProjects = () => {
    setVisibleProjects(prev => prev + 3);
  };

  return (
    <section id="portfolio" className="portfolio-section section">
      <Container fluid className="px-3 px-md-4">
        <div className="section-header text-center">
          <span className="section-subtitle">Mes réalisations</span>
          <h2 className="section-title">Portfolio</h2>
          <p className="section-description">
            Découvrez une sélection de projets que j'ai développés, 
            alliant créativité, performance technique et expérience utilisateur optimale.
          </p>
        </div>

        {/* Filtres */}
        <div className="portfolio-filters">
          {PROJECT_CONFIG.categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => handleFilterChange(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Grille des projets */}
        <Row className="projects-grid">
          {displayedProjects.map((project) => (
            <Col lg={4} md={6} key={project.id} className="mb-4">
              <Card className="project-card h-100">
                <div className="project-image">
                  <Card.Img 
                    variant="top" 
                    src={project.imageUrl} 
                    alt={project.title}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/assets/images/placeholder-project.jpg';
                    }}
                  />
                  <div className="project-overlay">
                    <div className="project-actions">
                      {project.projectUrl && (
                        <Button
                          variant="light"
                          size="sm"
                          href={project.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="bi bi-eye me-1"></i>
                          Voir
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          variant="outline-light"
                          size="sm"
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="bi bi-github me-1"></i>
                          Code
                        </Button>
                      )}
                    </div>
                  </div>
                  {project.isHighlighted && (
                    <Badge className="featured-badge">
                      <i className="bi bi-star-fill me-1"></i>
                      Projet phare
                    </Badge>
                  )}
                </div>

                <Card.Body className="d-flex flex-column">
                  <div className="project-meta mb-2">
                    <small className="text-muted">
                      {new Date(project.completionDate).toLocaleDateString('fr-FR', {
                        year: 'numeric',
                        month: 'long'
                      })}
                    </small>
                  </div>

                  <Card.Title className="project-title">
                    {project.title}
                  </Card.Title>

                  <Card.Text className="project-description flex-grow-1">
                    {project.shortDescription}
                  </Card.Text>

                  <div className="project-technologies">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech.id} bg="secondary" className="me-1 mb-1">
                        {tech.name}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge bg="light" text="dark" className="me-1 mb-1">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Bouton Voir plus */}
        {filteredProjects.length > visibleProjects && (
          <div className="text-center mt-4">
            <Button 
              className="btn-custom btn-secondary"
              onClick={loadMoreProjects}
            >
              <i className="bi bi-plus-circle me-2"></i>
              Voir plus de projets
            </Button>
          </div>
        )}

        {/* Call to action */}
        <div className="portfolio-cta text-center">
          <h4>Intéressé par mon travail ?</h4>
          <p>Discutons de votre projet et voyons comment je peux vous aider à le concrétiser.</p>
          <Button 
            className="btn-custom btn-primary"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            <i className="bi bi-chat-dots me-2"></i>
            Démarrer une collaboration
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default PortfolioSection;
