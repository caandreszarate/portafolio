import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'Plataforma SaaS de Gestión de Proyectos',
      description:
        'Plataforma tipo Trello para gestión de proyectos con equipos, tableros, tareas y sistema de roles.',
      technologies: [
        'Next.js',
        'React',
        'Node.js',
        'Express',
        'PostgreSQL',
        'Prisma ORM',
        'JWT',
        'TailwindCSS',
      ],
      features: [
        'Registro e inicio de sesión',
        'Creación de equipos',
        'Tableros de proyectos',
        'Listas de tareas',
        'Drag and drop de tareas',
        'Comentarios en tareas',
        'Sistema de roles (admin/miembro)',
        'Notificaciones',
      ],
      github: 'https://github.com',
      url: 'https://example.com',
    },
    {
      id: 2,
      name: 'E-commerce Profesional Full Stack',
      description:
        'Plataforma de comercio electrónico con catálogo, carrito, checkout y panel administrador.',
      technologies: [
        'Next.js',
        'React',
        'Node.js',
        'PostgreSQL',
        'Prisma',
        'Stripe',
      ],
      features: [
        'Registro de usuarios',
        'Catálogo de productos',
        'Filtros por categoría',
        'Carrito de compras',
        'Checkout',
        'Integración de pagos Stripe',
        'Panel administrador',
        'Gestión de inventario',
      ],
      github: 'https://github.com',
      url: 'https://example.com',
    },
    {
      id: 3,
      name: 'DevConnect - Red Social para Desarrolladores',
      description:
        'Red social profesional para desarrolladores con publicaciones, comentarios y sistema de seguidores.',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma', 'JWT'],
      features: [
        'Registro y login',
        'Perfiles de usuario',
        'Publicaciones',
        'Comentarios',
        'Likes',
        'Sistema de seguidores',
        'Feed de publicaciones',
      ],
      github: 'https://github.com',
      url: 'https://example.com',
    },
    {
      id: 4,
      name: 'Dashboard de Analítica de Datos',
      description:
        'Dashboard profesional con gráficos interactivos, filtros de fecha y exportación de reportes.',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma'],
      features: [
        'Panel de métricas',
        'Gráficos interactivos',
        'Filtros de fecha',
        'Exportación de reportes',
        'Autenticación',
        'Consultas SQL optimizadas',
      ],
      github: 'https://github.com',
      url: 'https://example.com',
    },
    {
      id: 5,
      name: 'Sistema de Reservas Online',
      description:
        'Sistema completo de reservas online con calendario, horarios y gestión administrativa.',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma'],
      features: [
        'Registro de usuarios',
        'Calendario interactivo',
        'Reserva de horarios',
        'Gestión de disponibilidad',
        'Cancelación de reservas',
        'Panel administrador',
        'Validación de horarios',
        'Manejo de conflictos',
      ],
      github: 'https://github.com',
      url: 'https://example.com',
    },
    {
      id: 6,
      name: 'Plataforma de Cursos Online',
      description:
        'Plataforma educativa completa con catálogo de cursos, lecciones en video y evaluaciones.',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma'],
      features: [
        'Registro e inicio de sesión',
        'Catálogo de cursos',
        'Lecciones con video',
        'Progreso del estudiante',
        'Evaluaciones y calificaciones',
        'Panel de instructor',
        'Gestión de contenidos',
        'Certificados',
      ],
      github: 'https://github.com',
      url: 'https://example.com',
    },
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Proyectos</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.name}</h3>
                <p className="project-description">{project.description}</p>

                {project.features && (
                  <div className="project-features">
                    <h4>Funcionalidades:</h4>
                    <ul>
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                  {project.url && (
                    <a
                      href={project.url}
                      className="project-link primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
