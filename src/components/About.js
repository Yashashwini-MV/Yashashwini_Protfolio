import React, { useEffect, useRef } from 'react'; // Added useRef
import VanillaTilt from 'vanilla-tilt'; // Ensure you ran: npm install vanilla-tilt
import useScrollReveal from '../utils/useScrollReveal';
import './About.css';

const About = () => {
  const [ref, visible] = useScrollReveal();
  const tiltRef = useRef(null); // Ref for the photo card

  useEffect(() => {
    const tiltNode = tiltRef.current;
    if (tiltNode) {
      VanillaTilt.init(tiltNode, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.3,
        gyroscope: true,
      });
    }
    return () => tiltNode?.vanillaTilt?.destroy();
  }, []);

  return (
    <section
      id="about"
      className={`about section-pad ${visible ? 'revealed' : ''}`}
      ref={ref}
    >
      <div className="section-container">
        <div className="about__inner">
          {/* Left: Visual card */}
          <div className="about__visual">
            {/* 3D Tilt Wrapper */}
            <div className="about__tilt-wrapper" ref={tiltRef}>
              {/* Background Orbs for 'Life' */}
              <div className="photo-orb photo-orb--1"></div>
              <div className="photo-orb photo-orb--2"></div>
              
              <div className="about__img-wrap">
                <div className="about__img-placeholder">
                  <img src="/photo.jpg" alt="Yashashwini MV" className="about__img" />
                </div>

                {/* Decorative corner pieces */}
                <div className="about__img-corner about__img-corner--tl" />
                <div className="about__img-corner about__img-corner--br" />
              </div>
            </div>

            {/* Info cards */}
            <div className="about__info-cards">
              <div className="about__info-card glass-card">
                <span className="about__info-icon">🎓</span>
                <div>
                  <div className="about__info-title">BE Computer Science</div>
                  <div className="about__info-sub">Cambridge Institute of Technology</div>
                </div>
              </div>
              <div className="about__info-card glass-card">
                <span className="about__info-icon">📌</span>
                <div>
                  <div className="about__info-title">Bangalore, India</div>
                  <div className="about__info-sub">Open to Remote & Hybrid</div>
                </div>
              </div>
              <div className="about__info-card glass-card">
                <span className="about__info-icon">⚡</span>
                <div>
                  <div className="about__info-title">Actively Learning</div>
                  <div className="about__info-sub">AI, ML & Full Stack Dev</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="about__content">
            <div className="section-label">About Me</div>
            <h2 className="section-title">
              Crafting the future{' '}
              <span className="gradient-text">one line at a time</span>
            </h2>

            <div className="about__bio">
              <p>
                I'm a <strong>Computer Science student</strong> at Cambridge Institute of Technology,
                driven by a passion for building applications that blend technology with creativity
                and real-world impact.
              </p>
              <p>
                My journey spans <strong>web development</strong>, <strong>UI/UX design</strong>, <strong>Product Development</strong>,
                <strong>Human-Centered Design</strong>, and <strong>AI-based applications</strong> — always with an eye toward making
                technology more human and accessible.
              </p>
              <p>
                I thrive in hackathons and collaborative environments, turning bold ideas into
                working prototypes. From a <strong>Smart Mirror</strong> with AI makeup assistance
                to a <strong>Mental Health Companion</strong> platform, I build things that matter.
              </p>
            </div>

            {/* Education timeline */}
            <div className="about__edu">
              <div className="about__edu-label">Education</div>
              <div className="about__edu-item">
                <div className="about__edu-dot" />
                <div className="about__edu-info">
                  <div className="about__edu-degree">Bachelor of Engineering — Computer Science</div>
                  <div className="about__edu-school">Cambridge Institute of Technology</div>
                  <div className="about__edu-year">2022 – 2026 (Expected)</div>
                </div>
              </div>
            </div>

            {/* Quick traits */}
            <div className="about__traits">
              {['Creative Thinker', 'Fast Learner', 'Team Player', 'Detail-Oriented'].map((trait, i) => (
                <span key={i} className="about__trait">
                  <span className="about__trait-check">✓</span> {trait}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;