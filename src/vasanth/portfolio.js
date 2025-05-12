import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Card, Row, Col, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'; // Ensure this CSS file is in the same directory or adjust the path
import profileImg from './profile.jpeg'; // Ensure this image is in the same directory or adjust the path

function Portfolio() {
  const [showModal, setShowModal] = useState(null);
  const [pdfToShow, setPdfToShow] = useState(null); // State to manage the PDF to display

  const handleShow = (modalId) => setShowModal(modalId);
  const handleClose = () => {
    setShowModal(null);
    setPdfToShow(null); // Reset PDF state when modal is closed
  };

  const handleShowPdf = (pdfUrl) => {
    setPdfToShow(pdfUrl);
    setShowModal('pdfViewer');
  };

  return (
    <div className="portfolio">
      {/* Navigation */}
      <Navbar expand="lg" fixed="top" className="navbar-custom">
        <Container>
          <Navbar.Brand href="#" className="fw-bold text-white">Vasanth Kumar Reddy</Navbar.Brand>
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
          <img src={profileImg} alt="Vasanth Kumar Reddy" className="rounded-circle profile-img mb-4 animate__animated animate__fadeIn" />
          <h1 className="display-4 fw-bold animate__animated animate__fadeInUp">Vasanth Kumar Reddy</h1>
          <p className="lead">Power Platform Developer</p>
          <p className="fs-5">"Crafting Efficient Business Solutions with Passion and Precision"</p>
          <Button variant="outline-light" href="/Vasanth-Resume.pdf" download className="mt-3">Download Resume</Button>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="py-5">
        <Container>
          <h2 className="section-title text-center">About Me</h2>
          <Row>
            <Col xs={12} className="text-center">
              <p className="fs-5">I am Vasanth Kumar Reddy Donthireddy, an enthusiastic and detail-oriented Power Platform Developer with foundational knowledge in PowerApps, Power BI, and Power Automate. I specialize in creating efficient business solutions and automation workflows.</p>
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
              { icon: 'bi-cloud', title: 'Cloud & Platforms', text: 'SharePoint Online,  Azure DevOps' },
              { icon: 'bi-database', title: 'Languages', text: 'MY-SQL' },
              { icon: 'bi-globe', title: 'Web Development', text: 'HTML, CSS' },
              { icon: 'bi-person-lines-fill', title: 'Soft Skills', text: 'Problem-solving, Communication, Teamwork' },
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
              { title: 'PowerApps Solution with CI/CD Pipeline', desc: 'Business process automation solution', tech: 'PowerApps, Azure DevOps, Azure Repository (Git)', features: 'Automated workflows, CI/CD pipeline', modal: 'powerapps', anim: 'fadeInLeft' },
              { title: 'Automated Vacation Approval Workflow', desc: 'SharePoint-based vacation approval system', tech: 'Power Automate, SharePoint, Office 365, Email Notifications', features: 'Multi-step approvals, condition-based routing', modal: 'vacation', anim: 'fadeInRight' },
              { title: 'Automated Manager Retrieval System', desc: 'Manager details retrieval for SharePoint', tech: 'Power Automate, SharePoint, Office 365', features: 'Auto-triggered updates, manager info fetching', modal: 'manager', anim: 'fadeInLeft', delay: '0.2s' },
              { title: 'Agriculture Robot', desc: 'Academic project for agricultural automation', tech: 'Embedded Systems, Sensors', features: 'Seed sowing, water spraying, soil pH/moisture detection', modal: 'agri', anim: 'fadeInRight', delay: '0.2s' },
            ].map((project, idx) => (
              <Col key={idx} md={6} xs={12}>
                <Card className={`project-card animate__animated animate__${project.anim}`} style={{ animationDelay: project.delay || '0s' }}>
                  <Card.Body>
                    <h5 className="fw-bold">{project.title}</h5>
                    <p className="text-muted">{project.desc}</p>
                    <p><strong>Technologies:</strong> {project.tech}</p>
                    <p><strong>Features:</strong> {project.features}</p>
                    <Button variant="primary" className="me-2">Live Demo</Button>
                    <Button variant="success" className="btn-github"><i className="bi bi-github me-2"></i>GitHub</Button>
                    <Button variant="link" className="mt-2" onClick={() => handleShow(project.modal)}>View Screenshots</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

     <section id="experience" className="py-5 bg-light">
  <Container>
    <h2 className="section-title text-center">Experience</h2>
    <div className="timeline">
      
      <div className="timeline-item">
        <h5 className="fw-bold">Associate Software Engineer</h5>
        <p className="text-muted">CYE Technology Pvt Ltd | Nov 2024 - Present</p>
        <p><strong>Technologies:</strong> PowerApps, Power Automate, SharePoint</p>
        <p><strong>Responsibilities:</strong> Developed automation workflows and business solutions.</p>
      </div>

      <div className="timeline-item">
        <h5 className="fw-bold">Power Platform Developer Intern</h5>
        <p className="text-muted">Symmetree Data Processing Pvt Ltd | July 2023 - October 2024</p>
        <p><strong>Technologies:</strong> PowerApps, Power Automate, Power BI, SharePoint</p>
        <p><strong>Responsibilities:</strong> Developed automation workflows and business solutions.</p>
      </div>

    </div>
  </Container>
</section>


      {/* Certifications Section */}
      <section id="certifications" className="py-5">
        <Container>
          <h2 className="section-title text-center">Certifications & Achievements</h2>
          <Row className="g-4">
            {[
              { 
                title: 'Microsoft Certified: Azure Fundamentals (AZ-900)', 
                issuer: 'Microsoft', 
                desc: 'Foundational knowledge of cloud services and Azure.', 
                pdf: '/certifications/AZ900-vasanth.pdf' // Path to the PDF file
              },
              { 
                title: 'Microsoft Certified: Power Platform Developer Associate (PL-400)', 
                issuer: 'Microsoft', 
                desc: 'Expertise in Power Platform development.', 
                pdf: '/certifications/pl400-vasanth.pdf' // Path to the PDF file
              },
              { 
                title: 'IBM Certified: SQL and Relational Databases 101', 
                issuer: 'IBM', 
                desc: 'Mastery of SQL and relational database concepts.', 
                pdf: '/certifications/Sql-vasanth.pdf' // Path to the PDF file
              },
              { 
                title: 'Power BI Job Simulation (PwC)', 
                issuer: 'PwC', 
                desc: 'Hands-on experience with Power BI in a job simulation.', 
                pdf: '/certifications/pwc-internship-vasanth.pdf' // Path to the PDF file
              },
            ].map((cert, idx) => (
              <Col key={idx} md={6} xs={12}>
                <Card>
                  <Card.Body>
                    <h5 className="fw-bold">{cert.title}</h5>
                    <p className="text-muted">{cert.issuer}</p>
                    <p>{cert.desc}</p>
                    <Button 
                      variant="link" 
                      onClick={() => handleShowPdf(cert.pdf)} 
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
          {pdfToShow && (
            <iframe
              src={pdfToShow}
              title="Certification PDF"
              style={{ width: '100%', height: '80vh', border: 'none' }}
            ></iframe>
          )}
        </Modal.Body>
      </Modal>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-light">
        <Container>
          <h2 className="section-title text-center">Contact Me</h2>
          <Row>
            <Col md={6} xs={12}>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Name" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="email" placeholder="Email" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control as="textarea" rows={4} placeholder="Message" required />
                </Form.Group>
                <Button type="submit" variant="primary">Send Message</Button>
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
                  <a href="https://www.linkedin.com/in/vasanth-kumar-reddy" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
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
      {['powerapps', 'vacation', 'manager', 'agri'].map((modalId) => (
        <Modal key={modalId} show={showModal === modalId} onHide={handleClose} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>{modalId.charAt(0).toUpperCase() + modalId.slice(1)} Project</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src="https://via.placeholder.com/650x650" className="d-block w-100" alt={`${modalId} screenshot`} />
          </Modal.Body>
        </Modal>
      ))}

      {/* Footer Section */}
      <section id="footer" className="py-4 bg-dark text-white text-center">
        <Container>
          <p className="mb-0">&copy; {new Date().getFullYear()} Vasanth Kumar Reddy. All Rights Reserved.</p>
          
        </Container>
      </section>
    </div>
  );
}

export default Portfolio;