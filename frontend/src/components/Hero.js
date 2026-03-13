import React from 'react';
import './Hero.css';
import carlosImage from '../img/img_carlos.jpeg';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-greeting fade-in">Hola, soy</span>
          <h1 className="hero-name fade-in">Carlos Andres Martinez</h1>
          <h2 className="hero-title fade-in">Full Stack Developer</h2>
          <p className="hero-description fade-in">
            Ingeniero de software apasionado por crear soluciones innovadoras y
            experiencias digitales excepcionales. Especializado en desarrollo
            backend con Node.js y arquitectura de sistemas escalables.
          </p>
          <div className="hero-buttons fade-in">
            <a href="#projects" className="btn btn-primary">
              Ver Proyectos
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contactar
            </a>
          </div>
        </div>
        <div className="hero-image fade-in">
          <img
            src={carlosImage}
            alt="Carlos Andres Martinez"
            className="profile-image"
          />
        </div>
      </div>

      <div
        className="hero-scroll"
        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="scroll-label">scroll</span>
        <div className="scroll-chevron"></div>
      </div>
    </section>
  );
};

export default Hero;
