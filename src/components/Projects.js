import React, { useState } from 'react';
import useScrollReveal from '../utils/useScrollReveal';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Smart Mirror',
    emoji: '🪞',
    description:
      'A smart interactive mirror that provides real-time features such as weather updates, time display, and AI-powered virtual makeup and beauty assistance. Enhances daily routines using smart technology.',
    tech: ['HTML', 'CSS', 'JavaScript', 'AI Integration'],
    liveLink: 'https://smart-mirror-delta.vercel.app/',
    color: '#00f5c8',
    gradient: 'linear-gradient(135deg, #00f5c8, #00c3ff)',
    featured: true,
  },
  {
    id: 2,
    title: 'Mental Health Companion',
    emoji: '💚',
    description:
      'A web-based mental health support platform designed to provide emotional assistance, mood tracking, and helpful resources to improve mental well-being.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://mental-health-companion-updated.onrender.com',
    color: '#7b61ff',
    gradient: 'linear-gradient(135deg, #7b61ff, #ff6bff)',
    featured: true,
  },
];

const ProjectCard = ({ project, index }) => {
  const [flipped, setFlipped] = useState(false);

return (
  <div
    className={`project-card ${project.featured ? 'project-card--featured' : ''}`}
    style={{ animationDelay: `${index * 0.15}s` }}
    onMouseEnter={() => setFlipped(true)}
    onMouseLeave={() => setFlipped(false)}
  >
      {/* Flip container */}
      <div
        className={`project-card__flipper ${flipped ? 'flipped' : ''}`}
      >
        {/* Front */}
        <div className="project-card__front glass-card">
          {/* Top accent bar */}
          <div
            className="project-card__accent"
            style={{ background: project.gradient }}
          />

          {/* Emoji icon */}
          <div
            className="project-card__icon"
            style={{ boxShadow: `0 0 30px ${project.color}30` }}
          >
            <span>{project.emoji}</span>
          </div>

          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__desc">{project.description}</p>

          {/* Tech stack */}
          <div className="project-card__tech">
            {project.tech.map((t, i) => (
              <span key={i} className="project-card__tech-tag" style={{ borderColor: `${project.color}40`, color: project.color }}>
                {t}
              </span>
            ))}
          </div>

          <div className="project-card__flip-hint">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 4v6h6"/><path d="M23 20v-6h-6"/>
              <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/>
            </svg>
           <span className="flip-text">
  ↻  flip & explore live demo
</span>
          </div>
        </div>

        {/* Back */}
        <div className="project-card__back glass-card">
          <div
            className="project-card__back-glow"
            style={{ background: `radial-gradient(circle at 50% 0%, ${project.color}20, transparent 60%)` }}
          />

          <h3 className="project-card__back-title" style={{ color: project.color }}>
            {project.title}
          </h3>
          <p className="project-card__back-desc">{project.description}</p>

          <div className="project-card__back-actions">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary project-card__live-btn"
              style={{ background: project.gradient }}
              onClick={e => e.stopPropagation()}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              Live Demo
            </a>
          </div>

          <div className="project-card__flip-hint">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 4v6h6"/><path d="M23 20v-6h-6"/>
              <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/>
            </svg>
            
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="projects" className={`projects section-pad ${visible ? 'revealed' : ''}`} ref={ref}>
      <div className="section-container">
        <div className="projects__header">
          <div className="section-label">Projects</div>
          <h2 className="section-title">
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <p className="projects__subtitle">
            Click any card to explore the project details and live demo
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* More coming soon card */}
        <div className="projects__more glass-card">
          <div className="projects__more-content">
            <span className="projects__more-icon">🚀</span>
            <div>
              <div className="projects__more-title">More projects coming soon</div>
              <div className="projects__more-sub">Currently building in stealth mode…</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
