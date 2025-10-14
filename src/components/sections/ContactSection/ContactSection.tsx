import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { CONTACT_INFO, SERVICE_CONFIG } from '../../../constants/app.constants';
import './ContactSection.scss';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAlert, setShowAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulation d'envoi (à remplacer par votre API)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setShowAlert({
        type: 'success',
        message: 'Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.'
      });

      // Reset du formulaire
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        budget: '',
        message: ''
      });

    } catch (error) {
      setShowAlert({
        type: 'error',
        message: 'Erreur lors de l\'envoi du message. Veuillez réessayer ou me contacter directement.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section section">
      <Container fluid className="px-3 px-md-4">
        <div className="section-header text-center">
          <span className="section-subtitle">Parlons de votre projet</span>
          <h2 className="section-title">Contact</h2>
          <p className="section-description">
            Prêt à donner vie à votre projet ? Contactez-moi pour discuter 
            de vos besoins et obtenir un devis personnalisé.
          </p>
        </div>

        <Row>
          {/* Informations de contact */}
          <Col lg={4} className="contact-info">
            <div className="contact-card">
              <h4>Restons en contact</h4>
              <p>
                N'hésitez pas à me contacter pour discuter de votre projet. 
                Je réponds généralement sous 24h.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <i className="bi bi-envelope"></i>
                  </div>
                  <div className="method-info">
                    <h6>Email</h6>
                    <a href={`mailto:${CONTACT_INFO.email}`}>
                      {CONTACT_INFO.email}
                    </a>
                    <small>{CONTACT_INFO.responseTime}</small>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <i className="bi bi-telephone"></i>
                  </div>
                  <div className="method-info">
                    <h6>Téléphone</h6>
                    <a href={`tel:${CONTACT_INFO.phone}`}>
                      {CONTACT_INFO.phone}
                    </a>
                    <small>{CONTACT_INFO.workingHours}</small>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div className="method-info">
                    <h6>Localisation</h6>
                    <span>{CONTACT_INFO.location}</span>
                    <small>{CONTACT_INFO.timezone}</small>
                  </div>
                </div>
              </div>

              <div className="availability-status">
                <div className="status-indicator available"></div>
                <span>Disponible pour de nouveaux projets</span>
              </div>
            </div>
          </Col>

          {/* Formulaire de contact */}
          <Col lg={8} className="contact-form">
            <div className="form-card">
              <h4>Démarrons votre projet</h4>
              
              {showAlert && (
                <Alert 
                  variant={showAlert.type === 'success' ? 'success' : 'danger'}
                  onClose={() => setShowAlert(null)}
                  dismissible
                >
                  {showAlert.message}
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Nom complet *</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Votre nom"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email *</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="votre@email.com"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Téléphone</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+33 6 12 34 56 78"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Entreprise</Form.Label>
                      <Form.Control
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Nom de votre entreprise"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Type de projet *</Form.Label>
                      <Form.Select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Sélectionnez un service</option>
                        <option value="development">Développement Web</option>
                        <option value="seo">SEO & Référencement</option>
                        <option value="wordpress">WordPress</option>
                        <option value="consulting">Conseil & Audit</option>
                        <option value="maintenance">Maintenance</option>
                        <option value="other">Autre</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Budget approximatif</Form.Label>
                      <Form.Select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                      >
                        <option value="">Sélectionnez votre budget</option>
                        {SERVICE_CONFIG.budgetRanges.map((range) => (
                          <option key={range.id} value={range.id}>
                            {range.label}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-4">
                  <Form.Label>Décrivez votre projet *</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Décrivez votre projet, vos objectifs, vos contraintes..."
                  />
                  <Form.Text className="text-muted">
                    Plus vous serez précis, plus je pourrai vous proposer une solution adaptée.
                  </Form.Text>
                </Form.Group>

                <div className="form-actions">
                  <Button
                    type="submit"
                    className="btn-custom btn-primary"
                    disabled={isSubmitting}
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-send me-2"></i>
                        Envoyer le message
                      </>
                    )}
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;
