import React from 'react';
import useScrollReveal from '../utils/useScrollReveal';
import './Achievements.css';

const achievements = [
  {
    id: 1,
    title: 'Winner Certificate',
    event: 'Technotsav 2025',
    description:
      'Won first place at Technotsav 2025, a competitive technical fest showcasing innovative solutions and projects.',
    badge: '🥇',
    color: '#FFD700',
    type: 'Winner',
    year: '2025',
  },
  {
    id: 2,
    title: 'Top 10 Team',
    event: 'Hack for Hire Hackathon',
    description:
      'Ranked in the Top 10 teams at the Hack for Hire Hackathon conducted by Trekkia, competing against talented developers.',
    badge: '🏆',
    color: '#00f5c8',
    type: 'Finalist',
    year: '2024',
  },
  {
    id: 3,
    title: 'Participant',
    event: 'TCS Bootcamp for Startup Ideas',
    description:
      'Selected to participate in the TCS Bootcamp for Startup Ideas, gaining hands-on experience in entrepreneurship and innovation.',
    badge: '🚀',
    color: '#7b61ff',
    type: 'Participant',
    year: '2024',
  },
];

const Achievements = () => {
  const [ref, visible] = useScrollReveal();

  return (
    <section
      id="achievements"
      className={`achievements section-pad ${visible ? 'revealed' : ''}`}
      ref={ref}
    >
      <div className="section-container">
        <div className="achievements__header">
          <div className="section-label">Achievements</div>
          <h2 className="section-title">
            Milestones & <span className="gradient-text">Recognition</span>
          </h2>
        </div>

        <div className="achievements__timeline">
          {/* Central line */}
          <div className="achievements__line" />

          {achievements.map((item, i) => (
            <div
              key={item.id}
              className={`achievement-item ${i % 2 === 0 ? 'achievement-item--left' : 'achievement-item--right'}`}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {/* Connector dot */}
              <div
                className="achievement-item__dot"
                style={{ background: item.color, boxShadow: `0 0 20px ${item.color}60` }}
              >
                <span>{item.badge}</span>
              </div>

              {/* Card */}
              <div className="achievement-item__card glass-card">
                {/* Top border accent */}
                <div
                  className="achievement-item__accent"
                  style={{ background: item.color }}
                />

                <div className="achievement-item__meta">
                  <span
                    className="achievement-item__type"
                    style={{ color: item.color, borderColor: `${item.color}40` }}
                  >
                    {item.type}
                  </span>
                  <span className="achievement-item__year">{item.year}</span>
                </div>

                <h3 className="achievement-item__title">{item.title}</h3>
                <div
                  className="achievement-item__event"
                  style={{ color: item.color }}
                >
                  {item.event}
                </div>
                <p className="achievement-item__desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Summary stats */}
        <div className="achievements__stats">
          {[
            { num: '1', label: 'Competition Won', icon: '🥇' },
            { num: '3+', label: 'Hackathons', icon: '💻' },
            { num: '1', label: 'TCS Bootcamp', icon: '🚀' },
          ].map((stat, i) => (
            <div key={i} className="achievements__stat glass-card">
              <div className="achievements__stat-icon">{stat.icon}</div>
              <div className="achievements__stat-num gradient-text">{stat.num}</div>
              <div className="achievements__stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
