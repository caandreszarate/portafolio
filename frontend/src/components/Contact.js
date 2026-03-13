import React, { useState } from 'react';
import './Contact.css';

// Para activar el formulario:
// 1. Crea cuenta gratis en https://formspree.io
// 2. Crea un nuevo form y copia el ID
// 3. Reemplaza YOUR_FORM_ID con tu ID (ej: "xpwzjrqv")
const FORMSPREE_URL = 'https://formspree.io/f/xpqyrona';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Contacto</h2>

        <div className="contact-container">
          <div className="contact-info">
            <h3>¿Tienes un proyecto en mente?</h3>
            <p>
              Estoy disponible para nuevas oportunidades y colaboraciones. No
              dudes en contactarme para discutir tu próximo proyecto.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <strong>Email</strong>
                  <p>andrewsogemer@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <strong>Ubicación</strong>
                  <p>Bogotá, Colombia</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">💻</span>
                <div>
                  <strong>GitHub</strong>
                  <p>@caandreszarate</p>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Asunto"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Mensaje"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>

            {submitStatus === 'success' && (
              <p className="submit-message success">
                ¡Mensaje enviado con éxito!
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="submit-message error">
                Error al enviar el mensaje. Inténtalo de nuevo.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
