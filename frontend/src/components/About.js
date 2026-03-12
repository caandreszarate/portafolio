import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">Sobre Mí</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              Soy un ingeniero de software con más de 3 años de experiencia en
              el desarrollo de aplicaciones web y móviles. Me especializo en
              arquitecturas escalables y desarrollo backend con Node.js,
              TypeScript y MongoDB.
            </p>
            <p className="about-description">
              Mi enfoque se centra en crear soluciones eficientes, mantenibles y
              de alto rendimiento. Me apasiona el aprendizaje continuo y la
              adopción de las mejores prácticas de desarrollo.
            </p>
            <div className="about-info">
              <div className="info-item">
                <span className="info-label">Ubicación:</span>
                <span className="info-value">Bogotá, Colombia</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">andrewsogemer@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="info-label">GitHub:</span>
                <span className="info-value">@caandreszarate</span>
              </div>
              <div className="info-item">
                <span className="info-label">Disponibilidad:</span>
                <span className="info-value">Tiempo completo</span>
              </div>
            </div>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Años de experiencia</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">Proyectos completados</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Tecnologías dominadas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
