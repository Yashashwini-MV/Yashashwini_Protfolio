import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__glow" />

      <div className="section-container">
        <div className="footer__inner">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-initials">Y</span>
              <span className="footer__logo-dot" />
              <span className="footer__logo-text">MV</span>
            </div>
            <p className="footer__tagline">
              Computer Science Student · Developer · Creative Problem Solver
            </p>
          </div>

          {/* Links */}
          <div className="footer__nav">
            <div className="footer__nav-title">Navigation</div>
            <ul>
              {['About', 'Skills', 'Projects', 'Achievements', 'Contact'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="footer__nav-link">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="footer__social-col">
            <div className="footer__nav-title">Connect</div>
            <div className="footer__socials">
              <a
                href="mailto:yashashwinimv0@gmail.com"
                className="footer__social"
                aria-label="Email"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Gmail
              </a>

              <a
                href="https://www.linkedin.com/in/yashashwini-mv-2b680b258/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                LinkedIn
              </a>

              <a
                href="https://smart-mirror-delta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social"
                aria-label="Portfolio"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                Projects
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <div className="footer__divider" />
          <div className="footer__bottom-inner">
            <span className="footer__copy">© {year} Yashashwini MV. All rights reserved.</span>
            <span className="footer__made">
              Made with <span className="footer__heart">♥</span> & Three.js
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
