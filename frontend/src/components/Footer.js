import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Carlos Martinez</h3>
            <p>Full Stack Developer</p>
          </div>
          
          <div className="footer-links">
            <a href="#home">Inicio</a>
            <a href="#about">Sobre mí</a>
            <a href="#projects">Proyectos</a>
            <a href="#skills">Habilidades</a>
            <a href="#contact">Contacto</a>
          </div>
          
          <div className="footer-social">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              LinkedIn
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              Twitter
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Carlos Andres Martinez. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
