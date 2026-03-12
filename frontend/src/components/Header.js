import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <a href="#home">Carlos Martinez</a>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Inicio</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>Sobre mí</a></li>
            <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Proyectos</a></li>
            <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Habilidades</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contacto</a></li>
          </ul>
        </nav>
        
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span className="hamburger"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
