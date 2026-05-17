import React, { useState } from 'react';
import useScrollReveal from '../utils/useScrollReveal';
import './Skills.css';

const skillCategories = [
  {
    label: 'Languages',
    icon: '⚡',
    color: '#00f5c8',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'JavaScript', level: 88 },
      { name: 'HTML / CSS', level: 92 },
      { name: 'Java', level: 72 },
    ],
  },
  {
    label: 'Web Dev',
    icon: '🌐',
    color: '#7b61ff',
    skills: [
      { name: 'Frontend Development', level: 88 },
      { name: 'Responsive Design', level: 90 },
      { name: 'UI / UX Design', level: 82 },
      { name: 'API Integration', level: 78 },
    ],
  },
  {
    label: 'Frameworks',
    icon: '🧩',
    color: '#ff6bff',
    skills: [
      { name: 'React', level: 85 },
      { name: 'Node.js', level: 75 },
      { name: 'Express.js', level: 73 },
      { name: 'TensorFlow', level: 60 },
      { name: 'Three.js', level: 65 },
    ],
  },
  {
    label: '3D & Product Engineering',
    icon: '🎠',
    color: '#b67835',
    skills: [
  { name: 'Fusion 360', level: 82 },
  { name: 'Cura', level: 78 },
  { name: '3D Printing', level: 75 },
  { name: 'Product Prototyping', level: 84 },
  { name: '3D Design', level: 80 }
],
  },
  {
    label: 'Tools',
    icon: '🛠️',
    color: '#00c3ff',
    skills: [
      { name: 'VS Code', level: 95 },
      { name: 'GitHub', level: 85 },
      { name: 'Vercel / Render', level: 80 },
      { name: 'Firebase', level: 70 },
      { name: 'Canva', level: 88 },
    ],
  },
];

const SkillBar = ({ name, level, color, visible }) => (
  <div className="skill-bar">
    <div className="skill-bar__header">
      <span className="skill-bar__name">{name}</span>
      <span className="skill-bar__level" style={{ color }}>{level}%</span>
    </div>
    <div className="skill-bar__track">
      <div
        className="skill-bar__fill"
        style={{
          width: visible ? `${level}%` : '0%',
          background: `linear-gradient(90deg, ${color}, ${color}88)`,
          boxShadow: visible ? `0 0 12px ${color}44` : 'none',
        }}
      />
    </div>
  </div>
);

const Skills = () => {
  const [ref, visible] = useScrollReveal();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className={`skills section-pad ${visible ? 'revealed' : ''}`} ref={ref}>
      <div className="section-container">
        <div className="skills__header">
          <div className="section-label">Skills</div>
          <h2 className="section-title">
            My <span className="gradient-text">Tech Arsenal</span>
          </h2>
          <p className="skills__subtitle">
            Tools and technologies I use to bring ideas to life
          </p>
        </div>

        {/* Tab navigation */}
        <div className="skills__tabs">
          {skillCategories.map((cat, i) => (
            <button
              key={i}
              className={`skills__tab ${activeTab === i ? 'active' : ''}`}
              onClick={() => setActiveTab(i)}
              style={{
                '--tab-color': cat.color,
              }}
            >
              <span className="skills__tab-icon">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Active category content */}
        <div className="skills__content">
          {skillCategories.map((cat, catIdx) => (
            <div
              key={catIdx}
              className={`skills__panel ${activeTab === catIdx ? 'active' : ''}`}
            >
              <div className="skills__bars">
                {cat.skills.map((skill, i) => (
                  <div
                    key={i}
                    style={{ animationDelay: `${i * 0.1}s` }}
                    className="skills__bar-wrap"
                  >
                    <SkillBar
                      {...skill}
                      color={cat.color}
                      visible={visible && activeTab === catIdx}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech grid — all tech logos text-based */}
        <div className="skills__tech-grid">
          {[
            'Python', 'JavaScript', 'React', 'Node.js', 'Three.js',
            'TensorFlow', 'HTML5', 'CSS3', 'GitHub', 'Firebase',
            'Vercel', 'Express', 'Java', 'Canva', 'VS Code',
          ].map((tech, i) => (
            <div key={i} className="skills__tech-pill" style={{ animationDelay: `${i * 0.04}s` }}>
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
