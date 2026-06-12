

export default function DigitalSolutions() {
  const solutions = [
    {
      title: 'ServiceNow Platform',
      tag: 'ServiceNow',
      accentColor: '30, 136, 229', // Blue (#1e88e5)
      description: 'Our ServiceNow team contains certified platform architects. We implement, configure, and maintain platform instances to streamline operations:',
      bullets: [
        'ITSM: Core workflow automation (incident, catalog request)',
        'ITOM: Automated discovery schedules and mapped CMDB',
        'SecOps: Automated vulnerability routing and threat intelligence',
        'FSM & CSM: Customer service portals and field ticketing systems'
      ],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="5" r="3" />
          <circle cx="5" cy="19" r="3" />
          <circle cx="19" cy="19" r="3" />
          <path d="M5 16v-3a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v3" />
          <path d="M12 8v5" />
        </svg>
      )
    },
    {
      title: 'Infrastructure & Security',
      tag: 'Cloud & Sec',
      accentColor: '0, 191, 165', // Teal (#00bfa5)
      description: 'Ensure highly resilient, scalable, and secure cloud operations built under ISO guidelines:',
      bullets: [
        'Cloud Architecture design and migration (AWS, Microsoft Azure)',
        'SSO, MFA, and Identity & Access Management (IAM)',
        'ISO 27001 & SOC 2 compliance preparedness and system audits',
        'Automated backup, database clusters, and recovery playbooks'
      ],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <rect x="9" y="11" width="6" height="5" rx="1" />
          <path d="M12 8a2 2 0 0 0-2 2v1h4v-1a2 2 0 0 0-2-2z" />
        </svg>
      )
    },
    {
      title: 'Application Development',
      tag: 'Software',
      accentColor: '124, 30, 255', // Purple/Indigo (#7c4dff)
      description: 'Design, write, and maintain custom software architectures with high code standards:',
      bullets: [
        'Responsive React/Node and Full-stack software engineering',
        'Secure API Gateway setups and third-party webhook integrations',
        'Active patch releases, bug mitigation, and repository checkouts',
        'Database tuning (PostgreSQL, MongoDB) and SLA monitoring'
      ],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      )
    },
    {
      title: 'Automation & Analytics',
      tag: 'Automation',
      accentColor: '255, 170, 0', // Orange (#ff9100)
      description: 'Leverage data to automate manual work and compile executive-level business analytics:',
      bullets: [
        'Robotic Process Automation (RPA) workflow orchestrations',
        'Custom Business Intelligence (BI) dashboards (PowerBI, Tableau)',
        'Data Engineering, ETL pipeline automation, and warehouses',
        'Task automation scripting (Python, shell frameworks)'
      ],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
          <circle cx="18" cy="6" r="3" />
        </svg>
      )
    }
  ];

  return (
    <section className="section solutions-section">
      {/* Background grid and glows */}
      <div className="solutions-ambient-glow-1"></div>
      <div className="solutions-ambient-glow-2"></div>
      
      <div className="container">
        
        {/* Left-Aligned Spacious Header */}
        <div className="solutions-section-header">
          <span className="section-tag">CAPABILITY SPECTRUM</span>
          <h2 className="section-title">A Full Spectrum of Digital Solutions</h2>
          <p className="section-subtitle">
            We deliver expertise across core technologies to bridge the gap between technical operations and executive objectives.
          </p>
        </div>

        {/* Dynamic 2x2 Grid of Square-ish Cards */}
        <div className="solutions-grid">
          {solutions.map((item, idx) => (
            <div 
              key={idx} 
              className="solution-card" 
              style={{ '--accent-rgb': item.accentColor }}
            >
              {/* Card Ambient Glow */}
              {/* <div className="card-ambient-glow"></div> */}

              {/* Card Top Row */}
              <div className="card-top-row">
                <div className="solution-icon-wrap">
                  {item.icon}
                </div>
                <span className="solution-badge">{item.tag}</span>
              </div>

              {/* Title & Description */}
              <div className="solution-card-body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

              <div className="solution-card-divider"></div>

              {/* Bullets List */}
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
          ))}
        </div>

      </div>

      <style>{`
        .solutions-section {
          position: relative;
          background-color: var(--color-soft-bg) !important;
          background-image: 
            radial-gradient(circle at 10% 20%, rgba(30, 136, 229, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 90% 80%, rgba(124, 77, 255, 0.04) 0%, transparent 40%),
            linear-gradient(rgba(15, 23, 42, 0.008) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15, 23, 42, 0.008) 1px, transparent 1px);
          background-size: 100% 100%, 100% 100%, 64px 64px, 64px 64px;
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
          overflow: hidden;
          padding: 100px 0;
        }

        .solutions-ambient-glow-1 {
          position: absolute;
          top: -20%;
          left: -10%;
          width: 50vw;
          height: 50vw;
          background: radial-gradient(circle, rgba(30, 136, 229, 0.05) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .solutions-ambient-glow-2 {
          position: absolute;
          bottom: -20%;
          right: -10%;
          width: 50vw;
          height: 50vw;
          background: radial-gradient(circle, rgba(124, 77, 255, 0.04) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .solutions-section-header {
          text-align: left;
          max-width: 800px;
          margin-bottom: 60px;
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
          font-weight: 800;
          letter-spacing: -0.02em;
          margin-bottom: 20px;
        }

        .solutions-section-header .section-subtitle {
          color: var(--color-text-secondary) !important;
          font-size: 1.15rem;
          line-height: 1.6;
          margin-bottom: 0;
        }

        /* Solutions Grid */
        .solutions-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
          position: relative;
          z-index: 1;
          width: 100%;
        }

        /* Solution Card styling */
        .solution-card {
          background-color: #ffffff;
          border: 1.5px solid var(--color-border);
          border-radius: 8px; /* Matching structural design but with soft rounding */
          padding: 40px;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: var(--shadow-sm);
        }

        .card-ambient-glow {
          position: absolute;
          top: 0;
          right: 0;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle at 100% 0%, rgba(var(--accent-rgb), 0.05) 0%, transparent 60%);
          pointer-events: none;
          transition: all 0.4s ease;
        }

        .solution-card:hover {
          transform: translateY(-6px);
          border-color: rgba(var(--accent-rgb), 0.35);
          box-shadow: 
            0 20px 40px rgba(15, 23, 42, 0.06), 
            0 0 25px rgba(var(--accent-rgb), 0.1);
        }

        .solution-card:hover .card-ambient-glow {
          background: radial-gradient(circle at 100% 0%, rgba(var(--accent-rgb), 0.1) 0%, transparent 60%);
          width: 260px;
          height: 260px;
        }

        .card-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 28px;
        }

        .solution-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 8px;
          background-color: rgba(var(--accent-rgb), 0.08);
          color: rgb(var(--accent-rgb));
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(var(--accent-rgb), 0.15);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .solution-card:hover .solution-icon-wrap {
          background-color: rgb(var(--accent-rgb));
          color: #ffffff;
          box-shadow: 0 0 20px rgba(var(--accent-rgb), 0.35);
          border-color: rgb(var(--accent-rgb));
        }

        .solution-badge {
          font-family: var(--font-heading);
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--color-text-muted);
          background-color: var(--color-soft-bg);
          padding: 6px 14px;
          border-radius: 20px;
          border: 1px solid var(--color-border);
          transition: all 0.3s ease;
        }

        .solution-card:hover .solution-badge {
          color: rgb(var(--accent-rgb));
          border-color: rgba(var(--accent-rgb), 0.25);
          background-color: rgba(var(--accent-rgb), 0.05);
        }

        .solution-card-body {
          margin-bottom: 28px;
          text-align: left;
        }

        .solution-card-body h3 {
          font-size: 1.5rem;
          color: var(--color-navy) !important;
          margin-bottom: 14px;
          font-weight: 700;
          letter-spacing: -0.3px;
        }

        .solution-card-body p {
          font-size: 0.95rem;
          color: var(--color-text-secondary) !important;
          line-height: 1.6;
        }

        .solution-card-divider {
          height: 1px;
          background: linear-gradient(90deg, var(--color-border) 0%, transparent 100%);
          margin-bottom: 28px;
          width: 100%;
        }

        .solutions-bullets {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 0;
          margin: 0;
          text-align: left;
        }

        .solutions-bullets li {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          font-size: 0.92rem;
          color: var(--color-text-primary) !important;
          line-height: 1.45;
        }

        .bullet-indicator {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: rgba(var(--accent-rgb), 0.08);
          color: rgb(var(--accent-rgb));
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
          border: 1px solid rgba(var(--accent-rgb), 0.12);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .solution-card:hover .bullet-indicator {
          background-color: rgb(var(--accent-rgb));
          color: #ffffff;
          border-color: rgb(var(--accent-rgb));
          box-shadow: 0 0 10px rgba(var(--accent-rgb), 0.25);
        }

        @media (max-width: 990px) {
          .solutions-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .solution-card {
            padding: 32px;
          }
          .solutions-section-header .section-title {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </section>
  );
}
