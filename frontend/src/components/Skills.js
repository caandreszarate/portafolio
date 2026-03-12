import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'Node.js', level: 95, category: 'Backend' },
    { name: 'TypeScript', level: 90, category: 'Backend' },
    { name: 'Express', level: 95, category: 'Backend' },
    { name: 'MongoDB', level: 85, category: 'Database' },
    { name: 'PostgreSQL', level: 80, category: 'Database' },
    { name: 'Redis', level: 75, category: 'Database' },
    { name: 'React', level: 85, category: 'Frontend' },
    { name: 'Vue.js', level: 80, category: 'Frontend' },
    { name: 'HTML/CSS', level: 95, category: 'Frontend' },
    { name: 'Docker', level: 85, category: 'DevOps' },
    { name: 'AWS', level: 80, category: 'DevOps' },
    { name: 'Git', level: 95, category: 'Tools' },
  ];

  const categories = ['Backend', 'Database', 'Frontend', 'DevOps', 'Tools'];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Habilidades Técnicas</h2>
        
        <div className="skills-container">
          {categories.map((category) => (
            <div key={category} className="skill-category">
              <h3 className="category-title">{category}</h3>
              <div className="skills-list">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
