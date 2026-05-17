import React, { useEffect, useRef, useState } from 'react';
import Scene3D from './Scene3D';
import Avatar3D from './Avatar3D';
import './Hero.css';

const roles = ['Software Engineer', 'UI/UX Designer', "Full Stack Developer",
               "AI Developer",
               "Creative Developer",
  "3D Experience Designer"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const [charIdx, setCharIdx] = useState(0);

  // Typewriter
  useEffect(() => {
    const current = roles[roleIndex];
    let timer;
    if (typing) {
      if (charIdx < current.length) {
        timer = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx + 1));
          setCharIdx(c => c + 1);
        }, 80);
      } else {
        timer = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (charIdx > 0) {
        timer = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx - 1));
          setCharIdx(c => c - 1);
        }, 45);
      } else {
        setRoleIndex(i => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timer);
  }, [typing, charIdx, roleIndex]);

  return (
    <section id="hero" className="hero">
      {/* 3D Background */}
      <div className="hero__bg">
        <Scene3D />
      </div>

      {/* Gradient overlays */}
      <div className="hero__overlay-bottom" />
      <div className="hero__overlay-left" />

      {/* Noise texture */}
      <div className="hero__noise" />

      {/* Main content */}
      <div className="hero__inner section-container">
        {/* Text side */}
        <div className="hero__text">
          <div className="hero__badge">
            <span className="hero__status-badge" />
            Available for Internships & Projects
          </div>

          <h1 className="hero__name">
            <span className="hero__name-hello">Hello, I'm</span>
            <br />
            <span className="gradient-text">Yashashwini</span>
            <br />
            <span className="hero__name-last">MV</span>
          </h1>

          <div className="hero__role">
            <span className="hero__role-prefix">CS Student & </span>
            <span className="hero__role-typed">{displayed}</span>
            <span className="hero__cursor">|</span>
          </div>

          <p className="hero__tagline">
            Building innovative applications that combine
            <span className="highlight"> technology</span> with{' '}
            <span className="highlight">creativity</span> and social impact.
          </p>

          {/* CTA Buttons */}
          <div className="hero__ctas">
            <a href="#projects" className="btn btn-primary hero__btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
              </svg>
              View Projects
            </a>
            <a href="#contact" className="btn btn-ghost hero__btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              Contact Me
            </a>
            <a href="/resume" className="btn btn-outline hero__btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Resume
            </a>
          </div>

          {/* Stats */}
          <div className="hero__stats">
            {[
              { num: '2+', label: 'Projects' },
              { num: '3+', label: 'Hackathons' },
              { num: '10+', label: 'Skills' },
            ].map((stat, i) => (
              <div key={i} className="hero__stat">
                <span className="hero__stat-num gradient-text">{stat.num}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3D Avatar */}
        <div className="hero__avatar-wrap">
          <div className="hero__avatar-glow" />
          <div className="hero__avatar-ring hero__avatar-ring--1" />
          <div className="hero__avatar-ring hero__avatar-ring--2" />
          <div className="hero__avatar-canvas">
            <Avatar3D />
          </div>
          {/* Floating tech pills */}
          {[
            { label: 'React', x: '-10%', y: '18%', color: '#00f5c8' },
            { label: 'Three.js', x: '90%', y: '25%', color: '#7b61ff' },
            { label: 'Python', x: '-5%', y: '72%', color: '#ff6bff' },
            { label: 'AI/ML', x: '88%', y: '68%', color: '#00c3ff' },
          ].map((pill, i) => (
            <div
              key={i}
              className="hero__pill"
              style={{ left: pill.x, top: pill.y, animationDelay: `${i * 0.4}s` }}
            >
              <span className="hero__pill-dot" style={{ background: pill.color }} />
              {pill.label}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;
