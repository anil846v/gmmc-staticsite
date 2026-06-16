import { useEffect, useRef } from 'react';

export default function DigitalSolutions({ limit, setCurrentTab }) {
  const cardRefs = useRef([]);

  const solutions = [
    {
      title: 'ServiceNow Platform',
      tag: 'ServiceNow',
      accentColor: '30, 136, 229',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800',
      bullets: [
        ': Core workflow automation (incident, catalog request)',
        'ITOM: Automated discovery schedules and mapped CMDB',
        'SecOps: Automated vulnerability routing and threat intelligence',
        'FSM & CSM: Customer service portals and field ticketing systems',
      ],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="5" r="3" />
          <circle cx="5" cy="19" r="3" />
          <circle cx="19" cy="19" r="3" />
          <path d="M5 16v-3a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v3" />
          <path d="M12 8v5" />
        </svg>
      ),
    },
     {
      title: 'Custom Software Development',
      tag: 'Custom Dev',
      accentColor: '63, 81, 181',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800',
      bullets: [
        'Be spoke enterprise platforms built to exact business specs',
        'Microservices, event-driven, and serverless architectures',
        'Multi-tenant SaaS product design and white-label solutions',
        'Continuous integration, CI/CD pipelines, and QA automation',
      ],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
    {
      title: 'Application Development',
      tag: 'Software',
      accentColor: '124, 77, 255',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800',
      bullets: [
        'Responsive React/Node and Full-stack software engineering',
        'Secure API Gateway setups and third-party webhook integrations',
        'Active patch releases, bug mitigation, and repository checkouts',
        'Database tuning (PostgreSQL, MongoDB) and SLA monitoring',
      ],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      ),
    },
    {
      title: 'Automation & Analytics',
      tag: 'Automation',
      accentColor: '11, 85, 72',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800',
      bullets: [
        'Robotic Process Automation (RPA) workflow orchestrations',
        'Custom Business Intelligence (BI) dashboards (PowerBI, Tableau)',
        'Data Engineering, ETL pipeline automation, and warehouses',
        'Task automation scripting (Python, shell frameworks)',
      ],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
          <circle cx="18" cy="6" r="3" />
        </svg>
      ),
    },
    {
      title: 'Mobile App Development',
      tag: 'Mobile',
      accentColor: '100, 125, 50',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800',
      bullets: [
        'Cross-platform iOS & Android apps (React Native, Flutter)',
        'Native performance with offline-first architectures',
        'Push notifications, deep linking, and in-app analytics',
        'App Store & Play Store deployment and release management',
      ],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
    },
    {
      title: 'IT Consulting',
      tag: 'Consulting',
      accentColor: '0, 150, 136',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800',
      bullets: [
        'ITIL   governance frameworks and SLA alignment strategies',
        'Legacy infrastructure assessment and modernization roadmaps',
        'Technology stack evaluation and vendor selection advisory',
        'Digital transformation planning and executive reporting',
      ],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        </svg>
      ),
    },
   
    {
      title: 'BPO & Managed Services',
      tag: 'BPO',
      accentColor: '121, 85, 72',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800',
      bullets: [
        '24/7 helpdesk and L1–L3 technical support operations',
        'Managed NOC/SOC and real-time infrastructure monitoring',
        'Back-office outsourcing with SLA-driven delivery models',
        'Workforce augmentation and dedicated resource provisioning',
      ],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
     {
      title: 'Infrastructure & Security',
      tag: 'Cloud & Sec',
      accentColor: '0, 191, 165',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800',
      bullets: [
        'Cloud Architecture design and migration (AWS, Microsoft Azure)',
        'SSO, MFA, and Identity & Access Management (IAM)',
        'ISO 27001 & SOC 2 compliance preparedness and system audits',
        'Automated backup, database clusters, and recovery playbooks',
      ],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <rect x="9" y="11" width="6" height="5" rx="1" />
          <path d="M12 8a2 2 0 0 0-2 2v1h4v-1a2 2 0 0 0-2-2z" />
        </svg>
      ),
    },
    {
      title: 'Data & AI Solutions',
      tag: 'AI & Data',
      accentColor: '46, 125, 50',
      image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=800',
      bullets: [
        'Machine learning model development and MLOps pipelines',
        'Predictive analytics and AI-driven business intelligence',
        'Natural Language Processing (NLP) and chatbot integrations',
        'Data lake architecture, governance, and quality frameworks',
      ],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      ),
    },
  ];

  const displayedSolutions = limit ? solutions.slice(0, limit) : solutions;

  useEffect(() => {
    const handleScroll = () => {
      cardRefs.current.forEach((card) => {
        if (!card) return;
        const img = card.querySelector('.sol-card-bg-img');
        if (!img) return;
        const rect = card.getBoundingClientRect();
        const viewH = window.innerHeight;
        const progress = (viewH - rect.top) / (viewH + rect.height);
        const yShift = (progress - 0.5) * 60;
        img.style.transform = `translateY(${yShift}px) scale(1.18)`;
      });

      const section = document.querySelector('.solutions-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        const viewH = window.innerHeight;
        const progress = (viewH - rect.top) / (viewH + rect.height);
        
        // Offset background position-y for subtle grid parallax
        section.style.backgroundPositionY = `${(progress - 0.5) * -40}px`;

        const glow1 = section.querySelector('.solutions-ambient-glow-1');
        const glow2 = section.querySelector('.solutions-ambient-glow-2');
        if (glow1) {
          glow1.style.transform = `translate(${(progress - 0.5) * -120}px, ${(progress - 0.5) * -60}px)`;
        }
        if (glow2) {
          glow2.style.transform = `translate(${(progress - 0.5) * 120}px, ${(progress - 0.5) * 60}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCardMouseMove = (e, idx) => {
    const card = cardRefs.current[idx];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);

    const width = rect.width;
    const height = rect.height;
    const rotateX = -((y - height / 2) / height) * 10;
    const rotateY = ((x - width / 2) / width) * 10;

    card.style.setProperty('--rotate-x', `${rotateX}deg`);
    card.style.setProperty('--rotate-y', `${rotateY}deg`);
    card.style.setProperty('--scale-val', `1.025`);
  };

  const handleCardMouseLeave = (idx) => {
    const card = cardRefs.current[idx];
    if (!card) return;
    card.style.setProperty('--rotate-x', `0deg`);
    card.style.setProperty('--rotate-y', `0deg`);
    card.style.setProperty('--scale-val', `1`);
  };

  return (
    <section className="section solutions-section">
      <div className="solutions-ambient-glow-1"></div>
      <div className="solutions-ambient-glow-2"></div>

      <div className="solutions-grid-wrapper">
        <div className="solutions-section-header">
          <span className="section-tag">CAPABILITY SPECTRUM</span>
          <h2 className="section-title">A Full Spectrum of Leading Digital Solutions</h2>
          <p className="section-subtitle">
            We deliver best-in-class expertise across enterprise workflows and cloud technologies to bridge the gap between operations and goals.
          </p>
        </div>

        <div className="solutions-grid">
          {displayedSolutions.map((item, idx) => (
            <div
              key={idx}
              className="solution-card"
              ref={(el) => (cardRefs.current[idx] = el)}
              style={{ '--accent-rgb': item.accentColor }}
              onMouseMove={(e) => handleCardMouseMove(e, idx)}
              onMouseLeave={() => handleCardMouseLeave(idx)}
            >
              {/* Parallax Background Image */}
              <div className="sol-card-bg-wrap">
                <img src={item.image} alt={item.title} className="sol-card-bg-img" />
              </div>

              {/* Dark overlay */}
              <div className="sol-card-overlay"></div>



              {/* Card Content */}
              <div className="sol-card-content">
                <div className="card-top-row">
                  <div className="solution-icon-wrap">{item.icon}</div>
                  <span className="solution-badge">{item.tag}</span>
                </div>

                <div className="solution-card-body">
                  <h3>{item.title}</h3>
                </div>

                <div className="solution-card-divider"></div>

                <ul className="solutions-bullets">
                  {item.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx}>
                      <div className="bullet-indicator">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {limit && setCurrentTab && (
          <div className="solutions-explore-more">
            <button 
              onClick={() => {
                setCurrentTab('solutions');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
              className="explore-solutions-btn"
            >
              Explore all solution
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        )}
      </div>

      <style>{`
        .solutions-section {
          position: relative;
          background-color: var(--color-soft-bg) !important;
          background-image: radial-gradient(rgba(30, 136, 229, 0.1) 1.2px, transparent 1.2px);
          background-size: 36px 36px;
          background-position-y: 0px;
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
          overflow: hidden;
          padding: 50px 0;
        }

        .solutions-ambient-glow-1 {
          position: absolute;
          top: -15%;
          left: -15%;
          width: 55vw;
          height: 55vw;
          background: radial-gradient(circle, rgba(30, 136, 229, 0.14) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
          will-change: transform;
        }

        .solutions-ambient-glow-2 {
          position: absolute;
          bottom: -15%;
          right: -15%;
          width: 55vw;
          height: 55vw;
          background: radial-gradient(circle, rgba(124, 77, 255, 0.12) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
          will-change: transform;
        }

        .solutions-section-header {
          text-align: left;
          max-width: 1600px;
          margin: 0 auto 60px auto;
          position: relative;
          z-index: 1;
        }

        .solutions-section-header .section-tag {
          color: var(--color-blue);
          background-color: rgba(30, 136, 229, 0.06);
          border: 1px solid rgba(30, 136, 229, 0.1);
        }

        .solutions-section-header .section-title {
          color: var(--color-navy) !important;
          font-size: 2.75rem;
          font-weight: 600;
          letter-spacing: -0.02em;
          margin-bottom: 20px;
        }

        .solutions-section-header .section-subtitle {
          color: var(--color-text-secondary) !important;
          font-size: 1.15rem;
          line-height: 1.6;
          margin-bottom: 0;
        }

        .solutions-grid-wrapper {
          width: 100%;
          padding: 0 32px;
          position: relative;
          z-index: 1;
        }

        .solutions-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          max-width: 1600px;
          margin: 0 auto;
        }

        /* Stable height cards instead of aspect-ratio to prevent infinite stretching on scaling */
        .solution-card {
          position: relative;
          height: 480px;
          overflow: hidden;
          border-radius: 5px;
          cursor: pointer;
          border: 1.5px solid rgba(255,255,255,0.08);
          transform-style: preserve-3d;
          transform: perspective(1000px) rotateX(var(--rotate-x, 0deg)) rotateY(var(--rotate-y, 0deg)) scale3d(var(--scale-val, 1), var(--scale-val, 1), var(--scale-val, 1));
          transition: transform 0.15s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.35s ease, box-shadow 0.35s ease;
        }

        /* Parallax image container — taller than card to allow shift */
        .sol-card-bg-wrap {
          position: absolute;
          inset: -15%;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .sol-card-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          will-change: transform;
          transform: translateY(0px) scale(1.18);
          transition: transform 0.05s linear;
        }

        /* Dark gradient overlay — stronger at bottom for text legibility */
        .sol-card-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            to bottom,
            rgba(5, 10, 25, 0.45) 0%,
            rgba(5, 10, 25, 0.72) 55%,
            rgba(5, 10, 25, 0.92) 100%
          );
          transition: background 0.4s ease;
          pointer-events: none;
        }



        /* All text/content sits above overlay */
        .sol-card-content {
          position: absolute;
          inset: 0;
          z-index: 3;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding: 40px; /* Reduced from 48px to give text more horizontal breathing room */
          transform: translateZ(40px);
          transform-style: preserve-3d;
        }

        .card-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          transform: translateZ(30px);
        }

        .solution-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 8px;
          background-color: rgba(var(--accent-rgb), 0.2);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(var(--accent-rgb), 0.4);
          backdrop-filter: blur(4px);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          flex-shrink: 0;
        }

        .solution-card:hover .solution-icon-wrap {
          background-color: rgb(var(--accent-rgb));
          border-color: rgb(var(--accent-rgb));
          box-shadow: 0 0 20px rgba(var(--accent-rgb), 0.5);
        }

        .solution-badge {
          font-family: var(--font-heading);
          font-size: 0.68rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: rgba(255,255,255,0.75);
          background-color: rgba(255,255,255,0.1);
          padding: 5px 12px;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.15);
          backdrop-filter: blur(4px);
          transition: all 0.3s ease;
        }

        .solution-card:hover .solution-badge {
          color: #ffffff;
          background-color: rgba(var(--accent-rgb), 0.3);
          border-color: rgba(var(--accent-rgb), 0.5);
        }

        .solution-card-body {
          margin-bottom: 14px;
          transform: translateZ(35px);
        }

        .solution-card-body h3 {
          font-size: 1.45rem;
          color: #ffffff !important;
          font-weight: 500;
          letter-spacing: -0.3px;
          line-height: 1.25;
          text-shadow: 0 2px 8px rgba(0,0,0,0.4);
        }

        .solution-card-divider {
          height: 1px;
          background: linear-gradient(90deg, rgba(var(--accent-rgb), 0.6) 0%, transparent 100%);
          margin-bottom: 16px;
          width: 100%;
          transform: translateZ(25px);
        }

        .solutions-bullets {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 0;
          margin: 0;
          transform: translateZ(20px);
        }

        .solutions-bullets li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.84rem;
          color: rgba(255,255,255,0.82) !important;
          line-height: 1.4;
        }

        .bullet-indicator {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background-color: rgba(var(--accent-rgb), 0.25);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
          border: 1px solid rgba(var(--accent-rgb), 0.4);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .solution-card:hover .bullet-indicator {
          background-color: rgb(var(--accent-rgb));
          border-color: rgb(var(--accent-rgb));
          box-shadow: 0 0 8px rgba(var(--accent-rgb), 0.4);
        }

        /* Lift and shadow transition on hover */
        .solution-card:hover {
          border-color: rgba(var(--accent-rgb), 0.5);
          box-shadow: 
            0 24px 48px rgba(0,0,0,0.3), 
            0 0 30px rgba(var(--accent-rgb), 0.25);
        }

        .solutions-explore-more {
          display: flex;
          justify-content: center;
          margin-top: 50px;
          position: relative;
          z-index: 2;
        }

        .explore-solutions-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;

  margin-left: auto;

  color: var(--color-blue);
  font-family: var(--font-heading);
  font-size: 0.88rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;

  border: none;
  cursor: pointer;
  border-radius: 4px;

  transition: all var(--transition-fast);
  box-shadow: 0 8px 24px rgba(30, 136, 229, 0.25);
}
        .explore-solutions-btn:hover {
          // background: var(--color-blue-hover);
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(30, 136, 229, 0.4);
        }

        .explore-solutions-btn svg {
          transition: transform 0.2s ease;
        }

        .explore-solutions-btn:hover svg {
          transform: translateX(4px);
        }

        @media (max-width: 1100px) {
          .solutions-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .solution-card {
            height: 440px;
          }
          .sol-card-content {
            padding: 32px;
          }
        }

        @media (max-width: 640px) {
          .solutions-grid {
            grid-template-columns: 1fr;
          }
          .solution-card {
            height: 380px;
          }
          .solutions-grid-wrapper {
            padding: 0 24px;
          }
          .solutions-section-header .section-title {
            font-size: 2.25rem;
          }
          .sol-card-content {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
}
