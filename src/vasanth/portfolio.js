import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button, Card, Row, Col, Modal, Form, Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import profileImg from './profile.jpeg';

function Portfolio() {
  const [showModal, setShowModal] = useState(null);
  const [pdfToShow, setPdfToShow] = useState(null);
  const [formStatus, setFormStatus] = useState(null);

  // Initialize EmailJS with User ID
  useEffect(() => {
    const userId = process.env.REACT_APP_EMAILJS_USER_ID;
    if (userId) {
      emailjs.init(userId);
      console.log('EmailJS initialized successfully');
    } else {
      console.error('EmailJS User ID is missing. Please check your .env file.');
      setFormStatus({
        type: 'danger',
        message: 'Email service configuration error. Please try again later.',
      });
    }
  }, []);

  const handleShow = (modalId) => setShowModal(modalId);

  const handleClose = () => {
    setShowModal(null);
    setPdfToShow(null);
  };

  const handleShowPdf = (pdfUrl, isExternal) => {
    if (isExternal) {
      window.open(pdfUrl, '_blank');
      return;
    }
    setPdfToShow(pdfUrl);
    setShowModal('pdfViewer');
  };

  const certifications = [
    {
      title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
      issuer: 'Microsoft',
      desc: 'Foundational knowledge of cloud services and Azure.',
      pdf: 'https://learn.microsoft.com/api/credentials/share/en-us/DONTHIREDDYVASANTHKUMARREDDY-4744/EC6BF651C419A480?sharingId=134E51C9E2108F08',
      isExternal: true,
    },
    {
      title: 'Microsoft Certified: Power Platform Developer Associate (PL-400)',
      issuer: 'Microsoft',
      desc: 'Expertise in Power Platform development.',
      pdf: 'https://learn.microsoft.com/api/credentials/share/en-us/DONTHIREDDYVASANTHKUMARREDDY-4744/B23EF58C761A491F?sharingId=134E51C9E2108F08',
      isExternal: true,
    },
    {
      title: 'IBM Certified: SQL and Relational Databases 101',
      issuer: 'IBM',
      desc: 'Mastery of SQL and relational database concepts.',
      pdf: 'https://courses.cognitiveclass.ai/certificates/d145e441a9fa44ef99a36219e70b0ac6',
      isExternal: true,
    },
    {
      title: 'Power BI Job Simulation (PwC)',
      issuer: 'PwC',
      desc: 'Hands-on experience with Power BI in a job simulation.',
      pdf: '/certifications/pwc-internship-vasanth.pdf',
      isExternal: false,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus(null); // Clear previous status

    // Log environment variables for debugging
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID;
    console.log('EmailJS Config:', { serviceId, templateId, userId });

    // Validate environment variables
    if (!serviceId || !templateId || !userId) {
      console.error('Missing EmailJS configuration. Please check .env file.');
      setFormStatus({
        type: 'danger',
        message: 'Email service configuration is incomplete. Please try again later.',
      });
      return;
    }

    // Extract and validate form data
    const formData = new FormData(e.target);
    const formValues = {
      name: formData.get('name')?.trim(),
      email: formData.get('email')?.trim(),
      message: formData.get('message')?.trim(),
    };
    console.log('Form Data:', formValues);

    // Client-side validation
    if (!formValues.name || !formValues.email || !formValues.message) {
      setFormStatus({
        type: 'danger',
        message: 'Please fill in all required fields.',
      });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      setFormStatus({
        type: 'danger',
        message: 'Please enter a valid email address.',
      });
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, e.target, userId);
      setFormStatus({ type: 'success', message: 'Message sent successfully!' });
      e.target.reset();
    } catch (error) {
      console.error('EmailJS Error:', {
        message: error.message,
        text: error.text,
        status: error.status,
        details: error,
      });
      setFormStatus({
        type: 'danger',
        message: `Failed to send message: ${error.text || error.message || 'Unknown error. Please try again later.'}`,
      });
    }
  };

  return (
    <div className="portfolio">
      {/* Navbar */}
      <Navbar expand="lg" fixed="top" className="navbar-custom">
        <Container>
          <Navbar.Brand href="#" className="fw-bold text-white">
            Vasanth Kumar Reddy
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="ms-auto">
              {['home', 'about', 'skills', 'projects', 'experience', 'certifications', 'contact'].map((section) => (
                <Nav.Link key={section} href={`#${section}`} className="text-white mx-2">
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Home Section */}
      <section id="home" className="hero-section d-flex align-items-center text-center text-white">
        <Container>
          <img
            src={profileImg}
            alt="Vasanth Kumar Reddy"
            className="rounded-circle profile-img mb-4 animate__animated animate__fadeIn"
          />
          <h1 className="display-4 fw-bold animate__animated animate__fadeInUp">Vasanth Kumar Reddy</h1>
          <p className="lead">Power Platform Developer</p>
          <p className="fs-5">"Crafting Efficient Business Solutions with Passion and Precision"</p>
         <Button
  variant="outline-light"
  href={`${process.env.PUBLIC_URL}/Vasanth-Resume.pdf`}
  download="Vasanth_Resume.pdf"
  className="mt-3"
>
  Download Resume
</Button>

        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="py-5">
        <Container>
          <h2 className="section-title text-center">About Me</h2>
          <Row>
            <Col xs={12} className="text-center">
              <p className="fs-5">
                I am Vasanth Kumar Reddy Donthireddy, an enthusiastic and detail-oriented Power Platform
                Developer with foundational knowledge in PowerApps, Power BI, and Power Automate. I specialize
                in creating efficient business solutions and automation workflows.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-5 bg-light">
        <Container>
          <h2 className="section-title text-center">Skills & Technologies</h2>
          <Row className="g-4">
            {[
              { icon: 'bi-tools', title: 'Tools', text: 'PowerApps, Power Automate, Power BI, Power Pages' },
              { icon: 'bi-cloud', title: 'Cloud & Platforms', text: 'SharePoint Online, Azure DevOps' },
              { icon: 'bi-database', title: 'Languages', text: 'MY-SQL' },
              { icon: 'bi-globe', title: 'Web Development', text: 'HTML, CSS' },
              {
                icon: 'bi-person-lines-fill',
                title: 'Soft Skills',
                text: 'Problem-solving, Communication, Teamwork',
              },
            ].map((skill, idx) => (
              <Col key={idx} md={4} sm={6} xs={12}>
                <Card className="skill-card animate__animated animate__fadeInUp" style={{ animationDelay: `${idx * 0.2}s` }}>
                  <Card.Body className="text-center">
                    <i className={`bi ${skill.icon} fs-2 text-primary mb-3`}></i>
                    <h5>{skill.title}</h5>
                    <p>{skill.text}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5">
        <Container>
          <h2 className="section-title text-center">Projects</h2>
          <Row className="g-4">
            {[
              {
                title: 'PowerApps Solution with CI/CD Pipeline',
                desc: 'Business process automation solution',
                tech: 'PowerApps, Azure DevOps, Azure Repository (Git)',
                features: 'Automated workflows, CI/CD pipeline',
                modal: 'powerapps',
                anim: 'fadeInLeft',
              },
              {
                title: 'Automated Vacation Approval Workflow',
                desc: 'SharePoint-based vacation approval system',
                tech: 'Power Automate, SharePoint, Office 365, Email Notifications',
                features: 'Multi-step approvals, condition-based routing',
                modal: 'vacation',
                anim: 'fadeInRight',
              },
              {
                title: 'Automated Manager Retrieval System',
                desc: 'Manager details retrieval for SharePoint',
                tech: 'Power Automate, SharePoint, Office 365',
                features: 'Auto-triggered updates, manager info fetching',
                modal: 'manager',
                anim: 'fadeInLeft',
                delay: '0.2s',
              },
            ].map((project, idx) => (
              <Col key={idx} md={6} xs={12}>
                <Card className={`project-card animate__animated animate__${project.anim}`} style={{ animationDelay: project.delay || '0s' }}>
                  <Card.Body>
                    <h5 className="fw-bold">{project.title}</h5>
                    <p className="text-muted">{project.desc}</p>
                    <p>
                      <strong>Technologies:</strong> {project.tech}
                    </p>
                    <p>
                      <strong>Features:</strong> {project.features}
                    </p>
                    <Button variant="primary" className="me-2">
                      Live Demo
                    </Button>
                    <Button variant="success" className="btn-github">
                      <i className="bi bi-github me-2"></i>GitHub
                    </Button>
                    <Button variant="link" className="mt-2" onClick={() => handleShow(project.modal)}>
                      View Screenshots
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-5 bg-light">
        <Container>
          <h2 className="section-title text-center">Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <h5 className="fw-bold">Associate Software Engineer</h5>
              <p className="text-muted">CYE Technology Pvt Ltd | Nov 2024 - Present</p>
              <p>
                <strong>Technologies:</strong> PowerApps, Power Automate, SharePoint
              </p>
              <p>
                <strong>Responsibilities:</strong> Developed automation workflows and business solutions.
              </p>
            </div>
            <div className="timeline-item">
              <h5 className="fw-bold">Power Platform Developer</h5>
              <p className="text-muted">Techwave Solutions | Jul 2023 - Oct 2024</p>
              <p>
                <strong>Technologies:</strong> PowerApps, Power Automate, Power BI, SharePoint
              </p>
              <p>
                <strong>Responsibilities:</strong> Developed automation workflows and business solutions.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-5">
        <Container>
          <h2 className="section-title text-center">Certifications & Achievements</h2>
          <Row className="g-4">
            {certifications.map((cert, idx) => (
              <Col key={idx} md={6} xs={12}>
                <Card>
                  <Card.Body>
                    <h5 className="fw-bold">{cert.title}</h5>
                    <p className="text-muted">{cert.issuer}</p>
                    <p>{cert.desc}</p>
                    <Button
                      variant="link"
                      onClick={() => handleShowPdf(cert.pdf, cert.isExternal)}
                      className="text-primary"
                    >
                      View
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* PDF Viewer Modal */}
      <Modal show={showModal === 'pdfViewer'} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Certification PDF</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {pdfToShow ? (
            <iframe
              src={pdfToShow}
              title="Certification PDF"
              style={{ width: '100%', height: '80vh', border: 'none' }}
              onError={() => setPdfToShow(null)}
            ></iframe>
          ) : (
            <p className="text-danger">Unable to load PDF. Please try again.</p>
          )}
        </Modal.Body>
      </Modal>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-light">
        <Container>
          <h2 className="section-title text-center">Contact Me</h2>
          <Row>
            <Col md={6} xs={12}>
              {formStatus && (
                <Alert variant={formStatus.type} className="mb-3">
                  {formStatus.message}
                </Alert>
              )}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Control type="text" name="name" placeholder="Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Control type="email" name="email" placeholder="Email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Control as="textarea" name="message" rows={4} placeholder="Message" required />
                </Form.Group>
                <Button type="submit" variant="primary">
                  Send Message
                </Button>
              </Form>
            </Col>
            <Col md={6} xs={12} className="contact-details">
              <ul className="list-unstyled">
                <li>
                  <a href="mailto:vasanthkumarreddyd@gmail.com" className="text-decoration-none">
                    <i className="bi bi-envelope-fill me-2 text-primary"></i>Email: vasanthkumarreddyd@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+917022370234" className="text-decoration-none">
                    <i className="bi bi-telephone-fill me-2 text-primary"></i>Phone: +91-7022370234
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/vasanth-kumar-reddy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    <i className="bi bi-linkedin me-2 text-primary"></i>LinkedIn
                  </a>
                </li>
                <li>
                  <i className="bi bi-geo-alt-fill me-2 text-primary"></i>Location: Bangalore, Karnataka
                </li>
                <li>
                  <i className="bi bi-translate me-2 text-primary"></i>Languages: English, Telugu, Hindi, Kannada
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Project Modals */}
      {['powerapps', 'vacation', 'manager'].map((modalId) => (
        <Modal key={modalId} show={showModal === modalId} onHide={handleClose} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>{modalId.charAt(0).toUpperCase() + modalId.slice(1)} Project</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={`/screenshots/${modalId}-screenshot.jpg`}
              className="d-block w-100"
              alt={`${modalId} screenshot`}
              onError={(e) => (e.target.src = 'https://via.placeholder.com/650x650')}
            />
          </Modal.Body>
        </Modal>
      ))}

      {/* Footer Section */}
      <section id="footer" className="py-4 bg-dark text-white text-center">
        <Container>
          <p className="mb-0">© {new Date().getFullYear()} Vasanth Kumar Reddy. All Rights Reserved.</p>
        </Container>
      </section>
    </div>
  );
}

export default Portfolio;