import React, { useEffect, useState } from 'react';
import './Loader.css';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);

  const phases = ['Initializing...', 'Loading assets...', 'Rendering 3D...', 'Almost there...'];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        const next = p + Math.random() * 18 + 4;
        if (next >= 100) { clearInterval(interval); return 100; }
        return next;
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setPhase(Math.min(3, Math.floor(progress / 25)));
  }, [progress]);

  return (
    <div className="loader-wrapper">
      {/* Animated background */}
      <div className="loader-bg">
        <div className="loader-orb loader-orb-1" />
        <div className="loader-orb loader-orb-2" />
        <div className="loader-grid" />
      </div>

      {/* Center content */}
      <div className="loader-content">
        {/* Animated logo rings */}
        <div className="loader-rings">
          <div className="ring ring-1" />
          <div className="ring ring-2" />
          <div className="ring ring-3" />
          <div className="loader-initials">YMV</div>
        </div>

        <div className="loader-name">Yashashwini MV</div>
        <div className="loader-phase">{phases[phase]}</div>

        {/* Progress bar */}
        <div className="loader-bar-track">
          <div
            className="loader-bar-fill"
            style={{ width: `${progress}%` }}
          />
          <div
            className="loader-bar-glow"
            style={{ left: `${progress}%` }}
          />
        </div>
        <div className="loader-percent">{Math.round(progress)}%</div>
      </div>
    </div>
  );
};

export default Loader;
