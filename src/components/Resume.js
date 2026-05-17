import React from "react";
import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050816",
        color: "white",
        padding: "40px 20px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated background glow */}
      <div className="resume-glow glow1"></div>
      <div className="resume-glow glow2"></div>

      {/* Floating particles */}
      <div className="resume-particles">
        {[...Array(50)].map((_, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      {/* Floating cubes */}
      <div className="floating-shapes">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="shape"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1450px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* Back button */}
        <div style={{ textAlign: "left", marginBottom: "20px" }}>
          <Link
            to="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
              color: "white",
              padding: "12px 22px",
              borderRadius: "14px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
              transition: "0.3s ease",
              fontWeight: "600",
              boxShadow: "0 0 20px rgba(123,97,255,0.15)",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-3px)";
              e.target.style.boxShadow =
                "0 0 30px rgba(123,97,255,0.5)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0px)";
              e.target.style.boxShadow =
                "0 0 20px rgba(123,97,255,0.15)";
            }}
          >
            ← Back to Portfolio
          </Link>
        </div>

        {/* Heading */}
        <h1 className="resume-title">My Resume</h1>

        <p
          style={{
            color: "#b0b0c3",
            marginBottom: "35px",
            fontSize: "1.1rem",
          }}
        >
          View or download my resume
        </p>

        {/* Download button */}
        <a
          href="/resume.pdf"
          download
          className="download-btn"
        >
          ⬇ Download Resume
        </a>

        {/* Resume container */}
        <div
          className="resume-viewer"
          onMouseMove={(e) => {
            e.currentTarget.style.transform =
              "rotateX(2deg) rotateY(2deg) scale(1.01)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform =
              "rotateX(0deg) rotateY(0deg) scale(1)";
          }}
        >
          <iframe
            src="/resume.pdf"
            title="Resume"
            width="100%"
            height="100%"
            style={{
              border: "none",
              background: "white",
            }}
          />
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .resume-title {
          font-size: 4.5rem;
          font-weight: 800;
          margin-bottom: 12px;
          background: linear-gradient(
            90deg,
            #00f5c8,
            #7b61ff,
            #ff4fd8
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: glowText 3s ease-in-out infinite alternate;
        }

        .download-btn {
          display: inline-block;
          padding: 16px 34px;
          border-radius: 16px;
          background: linear-gradient(
            90deg,
            #00f5c8,
            #7b61ff,
            #ff4fd8
          );
          color: white;
          text-decoration: none;
          font-weight: 700;
          font-size: 1rem;
          margin-bottom: 40px;
          box-shadow: 0 0 30px rgba(123,97,255,0.5);
          transition: 0.35s ease;
          animation: pulse 2.5s infinite;
        }

        .download-btn:hover {
          transform: translateY(-5px) scale(1.04);
          box-shadow: 0 0 50px rgba(123,97,255,0.9);
        }

        .resume-viewer {
          width: 100%;
          max-width: 1450px;
          height: 920px;
          margin: 0 auto;
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(18px);
          box-shadow: 0 0 70px rgba(123,97,255,0.25);
          transition: 0.4s ease;
          transform-style: preserve-3d;
          animation: fadeUp 1.2s ease;
        }

        .resume-glow {
          position: absolute;
          width: 700px;
          height: 700px;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.4;
          z-index: 0;
        }

        .glow1 {
          background: #7b61ff;
          top: -200px;
          right: -150px;
          animation: moveGlow1 8s ease-in-out infinite alternate;
        }

        .glow2 {
          background: #00f5c8;
          bottom: -200px;
          left: -150px;
          animation: moveGlow2 10s ease-in-out infinite alternate;
        }

        .resume-particles {
          position: fixed;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }

        .particle {
          position: absolute;
          width: 5px;
          height: 5px;
          background: #00f5c8;
          border-radius: 50%;
          opacity: 0.7;
          animation: floatParticle linear infinite;
          box-shadow: 0 0 12px #00f5c8;
        }

        .floating-shapes {
          position: absolute;
          inset: 0;
          overflow: hidden;
          z-index: 0;
          pointer-events: none;
        }

        .shape {
          position: absolute;
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255,255,255,0.2);
          transform: rotate(45deg);
          animation: floatShape 10s linear infinite;
        }

        @keyframes floatParticle {
          0% {
            transform: translateY(100vh) scale(0);
            opacity: 0;
          }

          20% {
            opacity: 1;
          }

          100% {
            transform: translateY(-120vh) scale(1);
            opacity: 0;
          }
        }

        @keyframes floatShape {
          0% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.2;
          }

          50% {
            opacity: 0.7;
          }

          100% {
            transform: translateY(-120px) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes glowText {
          from {
            filter: drop-shadow(0 0 10px rgba(123,97,255,0.4));
          }

          to {
            filter: drop-shadow(0 0 25px rgba(0,245,200,0.9));
          }
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 20px rgba(123,97,255,0.4);
          }

          50% {
            box-shadow: 0 0 45px rgba(0,245,200,0.7);
          }

          100% {
            box-shadow: 0 0 20px rgba(123,97,255,0.4);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes moveGlow1 {
          from {
            transform: translate(0px, 0px);
          }

          to {
            transform: translate(-50px, 40px);
          }
        }

        @keyframes moveGlow2 {
          from {
            transform: translate(0px, 0px);
          }

          to {
            transform: translate(50px, -40px);
          }
        }
      `}</style>
    </div>
  );
};

export default Resume;