import { useEffect, useRef, useState } from 'react';
import './Skills.css';

let idx = 0;
const categories = [
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 'avanzado' },
      { name: 'TypeScript', level: 'avanzado' },
      { name: 'Express', level: 'avanzado' },
      { name: 'Python', level: 'intermedio' },
    ],
  },
  {
    name: 'Frontend',
    skills: [
      { name: 'React', level: 'avanzado' },
      { name: 'HTML / CSS', level: 'avanzado' },
      { name: 'Next.js', level: 'intermedio' },
      { name: 'Vue.js', level: 'intermedio' },
    ],
  },
  {
    name: 'Base de Datos',
    skills: [
      { name: 'MongoDB', level: 'avanzado' },
      { name: 'PostgreSQL', level: 'intermedio' },
      { name: 'Redis', level: 'intermedio' },
    ],
  },
  {
    name: 'DevOps & Herramientas',
    skills: [
      { name: 'Docker', level: 'avanzado' },
      { name: 'Git', level: 'avanzado' },
      { name: 'AWS', level: 'intermedio' },
      { name: 'Linux', level: 'intermedio' },
    ],
  },
].map((cat) => ({
  ...cat,
  skills: cat.skills.map((skill) => ({ ...skill, delay: (idx++) * 55 })),
}));

const Skills = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Habilidades Técnicas</h2>
        <div className={`skills-container ${visible ? 'visible' : ''}`}>
          {categories.map((category) => (
            <div key={category.name} className="skill-category">
              <h3 className="category-title">{category.name}</h3>
              <div className="skills-chips">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`skill-chip level-${skill.level}`}
                    style={{ '--delay': `${skill.delay}ms` }}
                  >
                    <span className="chip-dot"></span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="skills-legend">
          <span className="legend-item">
            <span className="legend-dot avanzado"></span> Avanzado
          </span>
          <span className="legend-item">
            <span className="legend-dot intermedio"></span> Intermedio
          </span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
