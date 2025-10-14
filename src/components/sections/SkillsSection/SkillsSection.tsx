import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { technologies } from '../../../data/projects.data';
import './SkillsSection.scss';

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend',
      icon: 'bi-code-slash',
      skills: technologies.filter(tech => tech.category === 'frontend')
    },
    {
      id: 'backend',
      title: 'Backend',
      icon: 'bi-server',
      skills: technologies.filter(tech => tech.category === 'backend')
    },
    {
      id: 'database',
      title: 'Bases de données',
      icon: 'bi-database',
      skills: technologies.filter(tech => tech.category === 'database')
    },
    {
      id: 'devops',
      title: 'DevOps & Outils',
      icon: 'bi-gear',
      skills: [...technologies.filter(tech => tech.category === 'devops'), ...technologies.filter(tech => tech.category === 'tools')]
    },
    {
      id: 'testing',
      title: 'Testing',
      icon: 'bi-check-circle',
      skills: technologies.filter(tech => tech.category === 'testing')
    }
  ];

  const getProficiencyColor = (level: string) => {
    switch (level) {
      case 'expert': return 'var(--color-success)';
      case 'advanced': return 'var(--color-primary)';
      case 'intermediate': return 'var(--color-accent)';
      case 'beginner': return 'var(--color-secondary)';
      default: return 'var(--color-secondary)';
    }
  };

  const getProficiencyWidth = (level: string) => {
    switch (level) {
      case 'expert': return '95%';
      case 'advanced': return '80%';
      case 'intermediate': return '65%';
      case 'beginner': return '40%';
      default: return '50%';
    }
  };

  return (
    <section id="skills" className="skills-section section">
      <Container fluid className="px-3 px-md-4">
        <div className="section-header text-center">
          <span className="section-subtitle">Mes expertises</span>
          <h2 className="section-title">Compétences techniques</h2>
          <p className="section-description">
            Technologies et outils que je maîtrise pour créer des solutions web modernes et performantes
          </p>
        </div>

        <Row>
          {skillCategories.map((category) => (
            <Col lg={6} key={category.id} className="mb-4">
              <div className="skill-category">
                <div className="category-header">
                  <div className="category-icon">
                    <i className={category.icon}></i>
                  </div>
                  <h4 className="category-title">{category.title}</h4>
                </div>

                <div className="skills-list">
                  {category.skills.map((skill) => (
                    <div key={skill.id} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.proficiencyLevel}</span>
                      </div>
                      <div className="skill-progress">
                        <div 
                          className="skill-progress-bar"
                          style={{
                            width: getProficiencyWidth(skill.proficiencyLevel),
                            backgroundColor: getProficiencyColor(skill.proficiencyLevel)
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Section compétences supplémentaires */}
        <Row className="additional-skills">
          <Col xs={12}>
            <div className="skills-highlight">
              <h5>Autres compétences</h5>
              <div className="skills-tags">
                <span className="skill-tag">Responsive Design</span>
                <span className="skill-tag">SEO Technique</span>
                <span className="skill-tag">Performance Web</span>
                <span className="skill-tag">Accessibilité</span>
                <span className="skill-tag">UI/UX Design</span>
                <span className="skill-tag">Gestion de projet</span>
                <span className="skill-tag">Méthodes Agiles</span>
                <span className="skill-tag">Code Review</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SkillsSection;
