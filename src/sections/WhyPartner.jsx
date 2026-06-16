import { useState, useEffect } from 'react';

export default function WhyPartner() {
  const points = [
    {
      title: 'Top-Rated Software Engineering & Delivery',
      description: 'As a premier software development partner, we manage your complete digital lifecycle—delivering best-in-class custom SaaS designs, custom ERP/CRM systems, and robust API integrations.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800',
      badgeLabel: 'Active State: Top-Rated Software Engineering',
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
      title: 'Best-in-Class Team Enablement & Training',
      description: 'We build sustainable engineering excellence. Our customized, innovative training cohorts equip your teams in modern React development, cloud architecture, and certified ServiceNow administration.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800',
      badgeLabel: 'Active State: Best-in-Class Team Enablement',
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
      title: 'Top-Tier ITIL Compliance & QA Governance',
      description: 'Every custom database tuning, cloud server deployment, and web portal architecture follows strict ITIL   compliance and our industry-leading quality assurance protocols.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800',
      badgeLabel: 'Active State: Top-Tier QA & Compliance Governance',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 11 13 13 15 9" />
        </svg>
      )
    }
  ];

  const highlights = [
    {
      title: 'Best ServiceNow ',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 11 11 13 15 9" />
        </svg>
      )
    },
    {
      title: 'Innovative SaaS Design',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      )
    },
    {
      title: 'Top-Tier ERP Solutions',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      )
    },
    {
      title: 'Advanced CRM Systems',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0 " />
        </svg>
      )
    },
    {
      title: 'Expert Web Development',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      )
    },
    {
      title: 'Certified IT Consulting',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        </svg>
      )
    }
  ];

  const [activePoint, setActivePoint] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const rows = document.querySelectorAll('.modern-partner-row');
      if (rows.length === 0) return;
      
      let currentActive = 0;
      let minDistance = Infinity;

      rows.forEach((row, index) => {
        const rect = row.getBoundingClientRect();
        // Calculate proximity to the vertical center of the screen
        const viewportCenter = window.innerHeight / 2;
        const rowCenter = rect.top + rect.height / 2;
        const distance = Math.abs(rowCenter - viewportCenter);

        if (distance < minDistance) {
          minDistance = distance;
          currentActive = index;
        }
      });

      setActivePoint(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    // Run initially to set active state
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCardClick = (index) => {
    const rows = document.querySelectorAll('.modern-partner-row');
    if (rows[index]) {
      rows[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="section why-partner-section">
      <div className="container">
        
        <div className="why-partner-layout grid-2">
          
          {/* Left: Scroll-Synced Multi-Image Card Deck */}
          <div className="why-partner-image-side">
            {points.map((point, index) => (
              <div 
                key={index}
                className={`why-partner-img-wrapper ${index === activePoint ? 'active' : ''}`}
                style={{
                  backgroundImage: `url('${point.image}')`,
                  opacity: index === activePoint ? 1 : 0,
                  zIndex: index === activePoint ? 2 : 1
                }}
              />
            ))}
            <div className="why-partner-img-overlay"></div>
            
            {/* Glassmorphic Active Indicator Badge */}
            <div className="why-partner-glass-badge">
              <div className="badge-pulse-indicator">
                <span className="badge-pulse-dot" />
                <span className="badge-status-lbl">PILLAR IN FOCUS</span>
              </div>
              <h4 className="badge-pillar-title">{points[activePoint].badgeLabel}</h4>
            </div>
          </div>
          
          {/* Right: Scrolling Checklist Content */}
          <div className="why-partner-content-side">
            <div className="why-partner-header">
              <span className="section-tag">DIFFERENTIATORS</span>
              <h2 className="section-title">Why Partner With Our Enterprise IT, SaaS & ServiceNow Experts?</h2>
              <p className="section-subtitle-small">
                We deliver top-rated digital solutions, custom ERP/CRM platform integrations, and best-in-class ServiceNow workflow automation.
              </p>
            </div>

            <div className="why-partner-points-stack">
              {points.map((point, index) => (
                <div 
                  key={index} 
                  className={`modern-partner-row ${index === activePoint ? 'active' : ''}`}
                  onClick={() => handleCardClick(index)}
                >
                  <div className="partner-icon-circle">
                    {point.icon}
                  </div>
                  <div className="partner-row-text">
                    <h3>{point.title}</h3>
                    <p>{point.description}</p>
                  </div>
                  {/* <div className="partner-chevron-circle">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div> */}
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
          background-image: 
            linear-gradient(rgba(0, 0, 0, 0.012) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.012) 1px, transparent 1px);
          background-size: 50px 50px;
          padding-top: 80px;
          padding-bottom: 20px;
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
        }

        .why-partner-layout {
          align-items: start;
          gap: 64px;
        }

        .why-partner-image-side {
          position: sticky;
          top: 130px;
          width: 100%;
          height: 460px;
          border-radius: 2px;
          overflow: hidden;
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-lg);
          background-color: #0b0f19;
        }

        .why-partner-img-wrapper {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          transition: opacity 0.8s ease-in-out, transform 1.2s ease-out;
          transform: scale(1);
        }

        .why-partner-img-wrapper.active {
          transform: scale(1.05); /* Soft zoom-in dynamic parallax effect */
        }

        .why-partner-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(11, 15, 25, 0.1) 0%, rgba(11, 15, 25, 0.6) 100%);
          z-index: 3;
          pointer-events: none;
        }

        /* Glassmorphic active badge inside sticky photo */
        .why-partner-glass-badge {
          position: absolute;
          left: 24px;
          bottom: 24px;
          right: 24px;
          background: rgba(15, 23, 42, 0.75);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 20px;
          border-radius: 2px;
          z-index: 10;
          text-align: left;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
        }

        .badge-pulse-indicator {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 6px;
        }

        .badge-pulse-dot {
          width: 6px;
          height: 6px;
          background-color: var(--color-blue);
          border-radius: 50%;
          box-shadow: 0 0 8px var(--color-blue);
          animation: pulseDot 2s infinite;
        }

        .badge-status-lbl {
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--color-blue);
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }

        .badge-pillar-title {
          font-size: 1.05rem;
          font-weight: 600;
          color: #ffffff !important;
          line-height: 1.25;
          margin: 0;
        }

        @keyframes pulseDot {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(30, 136, 229, 0.7);
          }
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 6px rgba(30, 136, 229, 0);
          }
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(30, 136, 229, 0);
          }
        }

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
          gap: 16px;
        }

        /* Differentiator point card row styles */
        .modern-partner-row {
          display: flex;
          align-items: center;
          gap: 20px;
          text-align: left;
          width: 100%;
          padding: 24px;
          border: 1px solid transparent;
          border-left: 3.5px solid transparent;
          border-radius: 2px;
          background-color: transparent;
          cursor: pointer;
          transition: all var(--transition-normal);
        }

        .modern-partner-row:not(:last-child) {
          border-bottom: 1.5px solid var(--color-border);
        }

        /* Active Card pop-out styles */
        .modern-partner-row.active {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-left: 3.5px solid var(--color-blue);
          box-shadow: var(--shadow-md);
          transform: translateX(4px);
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

        .modern-partner-row.active .partner-icon-circle {
          background-color: var(--color-blue);
          color: #ffffff;
          border-color: var(--color-blue);
          transform: scale(1.06);
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

        .modern-partner-row.active .partner-chevron-circle {
          background-color: var(--color-blue);
          color: #ffffff;
          border-color: var(--color-blue);
          transform: translateX(3px);
        }

        .partner-row-text h3 {
          font-size: 1.2rem;
          color: var(--color-navy);
          margin-bottom: 6px;
          font-weight: 600;
        }

        .partner-row-text p {
          font-size: 0.95rem;
          color: var(--color-text-secondary);
          line-height: 1.55;
          margin: 0;
        }

        /* Bottom highlights cards */
        .highlights-cards-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 16px;
          margin-top: 20px;
          width: 100%;
        }

        .highlight-card {
          background-color: #ffffff;
          border: 1.5px solid var(--color-border);
          padding: 20px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          border-radius: 2px;
          box-shadow: var(--shadow-sm);
          transition: all var(--transition-normal);
          position: relative;
          overflow: hidden;
        }

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
          box-shadow: var(--shadow-md), 0 8px 24px rgba(30, 136, 229, 0.08);
          border-color: rgba(30, 136, 229, 0.25);
        }

        .highlight-card:hover::after {
          width: 100%;
        }

        .highlight-icon-circle {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background-color: rgba(30, 136, 229, 0.06);
          color: var(--color-blue);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid rgba(30, 136, 229, 0.1);
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
          font-weight: 500;
          line-height: 1.35;
          margin: 0;
          text-align: left;
        }

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
            gap: 48px;
          }
          .why-partner-image-side {
            position: relative;
            top: auto;
            height: 360px;
          }
          .modern-partner-row.active {
            transform: none; /* disable horizontal offset on vertical mobile stacks */
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
          .why-partner-glass-badge {
            left: 12px;
            bottom: 12px;
            right: 12px;
            padding: 12px;
          }
          .badge-pillar-title {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
}
