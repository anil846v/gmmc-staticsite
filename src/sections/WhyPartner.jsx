export default function WhyPartner() {
  const points = [
    {
      title: 'End-to-End Delivery & Support',
      description: 'We manage your digital transformation lifecycle from design workshops through software development and deployment, into continuous maintenance and enhancements.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.5 2v6h-6" />
          <path d="M2.5 22v-6h6" />
          <path d="M2 11.5a10 10 0 0 1 18.8-4.3l1.2 3.8" />
          <path d="M22 12.5a10 10 0 0 1-18.8 4.3l-1.2-3.8" />
        </svg>
      )
    },
    {
      title: 'Continuous Team Upskilling',
      description: 'We do not just hand over code. We build capabilities. Our private certified trainings equip your internal staff in ServiceNow best practices and ITIL governance.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      title: 'Framework-Driven Governance',
      description: 'Every sprint checkout, database schema change, and customer support ticket routing follow strict ITIL v4 compliance and documented quality assurance frameworks.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 11 11 13 15 9" />
        </svg>
      )
    }
  ];

  const highlights = [
    {
      title: 'ServiceNow Excellence',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 11 11 13 15 9" />
        </svg>
      )
    },
    {
      title: 'ITIL v4 Aligned',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
          <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
        </svg>
      )
    },
    {
      title: 'Agile & DevOps Approach',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      )
    },
    {
      title: 'Enterprise Security',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      )
    },
    {
      title: '24/7 Support',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        </svg>
      )
    },
    {
      title: 'Business Value Focus',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      )
    }
  ];

  return (
    <section className="section section-ash why-partner-section">
      <div className="container">
        
        <div className="why-partner-layout grid-2">
          
          {/* Left: Unsplash Team Image (kept clean as instructed) */}
          <div className="why-partner-image-side">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800" 
              alt="Genius Minds Consulting Team" 
              className="why-partner-img"
            />
            <div className="why-partner-img-overlay"></div>
          </div>
          
          {/* Right: Checklist Content */}
          <div className="why-partner-content-side">
            <div className="why-partner-header">
              <span className="section-tag">DIFFERENTIATORS</span>
              <h2 className="section-title">Why Partner With Us?</h2>
              <p className="section-subtitle-small">
                We deliver institutional stability combined with modern engineering agility.
              </p>
            </div>

            <div className="why-partner-points-stack">
              {points.map((point, index) => (
                <div key={index} className="modern-partner-row">
                  <div className="partner-icon-circle">
                    {point.icon}
                  </div>
                  <div className="partner-row-text">
                    <h3>{point.title}</h3>
                    <p>{point.description}</p>
                  </div>
                  <div className="partner-chevron-circle">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Row of Highlights Cards */}
        <div className="highlights-cards-grid">
          {highlights.map((item, index) => (
            <div key={index} className="highlight-card">
              <div className="highlight-icon-circle">
                {item.icon}
              </div>
              <h4>{item.title}</h4>
              <div className="highlight-decorator-line"></div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .why-partner-section {
          position: relative;
          background-color: var(--color-soft-bg);
          padding-top:50px;
        }

        .why-partner-layout {
          align-items: center;
          gap: 60px;
        }

        /* Image Column */
        .why-partner-image-side {
          position: relative;
          width: 100%;
          height: 480px;
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }

        .why-partner-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }

        .why-partner-img-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(rgba(30, 136, 229, 0.08), rgba(0, 0, 0, 0.45));
          z-index: 1;
          pointer-events: none;
        }

        .why-partner-image-side:hover .why-partner-img {
          transform: scale(1.03);
        }

        /* Content Column */
        .why-partner-content-side {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .why-partner-header {
          text-align: left;
          margin-bottom: 36px;
          
        }

        .section-subtitle-small {
          font-size: 1.15rem;
          color: var(--color-text-secondary);
          line-height: 1.5;
          margin-top: 12px;
        }

        .why-partner-points-stack {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .modern-partner-row {
          display: flex;
          align-items: center;
          gap: 20px;
          text-align: left;
          width: 100%;
          border-bottom: 1.5px solid var(--color-border);
          padding-bottom: 24px;
        }

        .modern-partner-row:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .partner-icon-circle {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: rgba(30, 136, 229, 0.08);
          color: var(--color-blue);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid rgba(30, 136, 229, 0.12);
          transition: all var(--transition-normal);
        }

        .partner-chevron-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: rgba(0, 0, 0, 0.02);
          color: rgba(0, 0, 0, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-left: auto;
          border: 1px solid rgba(0, 0, 0, 0.05);
          transition: all var(--transition-fast);
        }

        .modern-partner-row:hover .partner-icon-circle {
          background-color: var(--color-blue);
          color: #ffffff;
          border-color: var(--color-blue);
        }

        .modern-partner-row:hover .partner-chevron-circle {
          background-color: var(--color-blue);
          color: #ffffff;
          border-color: var(--color-blue);
          transform: translateX(3px);
        }

        .partner-row-text h3 {
          font-size: 1.2rem;
          color: var(--color-navy);
          margin-bottom: 6px;
          font-weight: 700;
        }

        .partner-row-text p {
          font-size: 0.95rem;
          color: var(--color-text-secondary);
          line-height: 1.55;
        }

        /* Highlights Cards Styles */
        .highlights-cards-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 12px;
          margin-top: 35px;
          width: 100%;
        }

        .highlight-card {
          background-color: #ffffff;
          border: 1.5px solid var(--color-border);
          padding: 16px 14px;
          display: flex;
          align-items: center; /* Vertically center icon and text side-by-side */
          gap: 12px;
          border-radius: var(--radius-md, 8px);
          box-shadow: var(--shadow-sm);
          transition: all var(--transition-normal);
          position: relative;
          overflow: hidden;
        }

        /* Bottom sliding accent border on hover */
        .highlight-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
          background-color: var(--color-blue);
          transition: width var(--transition-normal);
        }

        .highlight-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md), 0 6px 20px rgba(30, 136, 229, 0.06);
          border-color: rgba(30, 136, 229, 0.2);
        }

        .highlight-card:hover::after {
          width: 100%;
        }

        .highlight-icon-circle {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: rgba(30, 136, 229, 0.05);
          color: var(--color-blue);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid rgba(30, 136, 229, 0.08);
          transition: all var(--transition-normal);
        }

        .highlight-card:hover .highlight-icon-circle {
          background-color: var(--color-blue);
          color: #ffffff;
          border-color: var(--color-blue);
        }

        .highlight-card h4 {
          font-size: 0.88rem;
          color: var(--color-navy);
          font-weight: 700;
          line-height: 1.35;
          margin: 0;
          text-align: left;
        }

        /* Hide decorator line div since we use bottom hover line */
        .highlight-decorator-line {
          display: none;
        }

        @media (max-width: 1120px) {
          .highlights-cards-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 1024px) {
          .why-partner-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .why-partner-image-side {
            height: 360px;
          }
        }

        @media (max-width: 768px) {
          .highlights-cards-grid {
            grid-template-columns: repeat(2, 1fr);
            margin-top: 48px;
          }
        }

        @media (max-width: 480px) {
          .highlights-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
