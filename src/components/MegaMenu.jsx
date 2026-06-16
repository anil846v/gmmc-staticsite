export default function MegaMenu({ menuId, onNavigate, onClose }) {
  const handleLinkClick = (tabId, elementId) => {
    onNavigate(tabId, elementId);
    onClose();
  };

  const renderContent = () => {
    switch (menuId) {
      case 'services':
        return (
          <div className="mega-menu-grid">
            <div className="mega-menu-col">
              <h4>Development Services</h4>
              
              <button onClick={() => handleLinkClick('web-app-dev')} className="mega-item">
                <div className="mega-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                    <polyline points="10 9 7 12 10 15" />
                    <polyline points="14 15 17 12 14 9" />
                  </svg>
                </div>
                <div>
                  <h5>Web sites & App Dev</h5>
                  <p>Custom React apps, SaaS platforms, static edge sites</p>
                </div>
              </button>

              <button onClick={() => handleLinkClick('mobile-app-dev')} className="mega-item">
                <div className="mega-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12.01" y2="18" />
                  </svg>
                </div>
                <div>
                  <h5>Mobile App Dev</h5>
                  <p>Cross-platform React Native & Flutter iOS/Android apps</p>
                </div>
              </button>

              <button onClick={() => handleLinkClick('erp-crm')} className="mega-item">
                <div className="mega-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
                  </svg>
                </div>
                <div>
                  <h5>ERP & CRM Solutions</h5>
                  <p>Enterprise business systems, Salesforce & HubSpot</p>
                </div>
              </button>
            </div>

            <div className="mega-menu-col">
              <h4>Consulting & Operations</h4>

              <button onClick={() => handleLinkClick('it-bpo')} className="mega-item">
                <div className="mega-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                </div>
                <div>
                  <h5>IT Consulting & BPO</h5>
                  <p>ITIL workflow architecture, ServiceNow implementations</p>
                </div>
              </button>

              <button onClick={() => handleLinkClick('digital-marketing')} className="mega-item">
                <div className="mega-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 5L6 9H2v6h4l5 4V5z" />
                    <path d="M23 9c0 2.1-1.04 3.96-2.65 5.14M15 9c0 1.2-.59 2.26-1.5 2.94" />
                  </svg>
                </div>
                <div>
                  <h5>Digital Marketing</h5>
                  <p>Programmatic SEO, Meta & Google Ads optimization</p>
                </div>
              </button>

              <button onClick={() => handleLinkClick('id-card-printing')} className="mega-item">
                <div className="mega-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <circle cx="9" cy="10" r="2" />
                    <path d="M14 9h3M14 13h3M6 16c0-2 2-3 3-3s3 1 3 3" />
                  </svg>
                </div>
                <div>
                  <h5>ID Card Printing</h5>
                  <p>High-durability PVC cards, secure RFID encoding</p>
                </div>
              </button>
            </div>

            <div className="mega-menu-col highlight-col">
              <h4>Featured</h4>
              <div className="featured-card">
                <h5>Platform & Systems Audit</h5>
                <p>Request a free 1-hour systems architecture or workflow audit to identify performance lags and configuration gaps.</p>
                <button onClick={() => handleLinkClick('contact')} className="btn btn-primary" style={{ padding: '6px 12px', fontSize: '0.8rem', marginTop: '10px' }}>
                  Book Free Audit
                </button>
              </div>
            </div>
          </div>
        );

      case 'solutions':
        return (
          <div className="mega-menu-grid">
            <div className="mega-menu-col">
              <h4>Platform Solutions</h4>
              <button onClick={() => handleLinkClick('solutions')} className="mega-item">
                <div className="mega-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                    <line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" />
                  </svg>
                </div>
                <div>
                  <h5>SaaS & ERP Solutions</h5>
                  <p>Multi-tenant SaaS and ERP platform builds</p>
                </div>
              </button>
              <button onClick={() => handleLinkClick('solutions')} className="mega-item">
                <div className="mega-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <rect x="9" y="11" width="6" height="5" rx="1" />
                    <path d="M12 8a2 2 0 0 0-2 2v1h4v-1a2 2 0 0 0-2-2z" />
                  </svg>
                </div>
                <div>
                  <h5>Infrastructure & Security</h5>
                  <p>Cloud architecture, IAM, ISO 27001 readiness</p>
                </div>
              </button>
            </div>

            <div className="mega-menu-col">
              <h4>Digital & Data</h4>
              <button onClick={() => handleLinkClick('solutions')} className="mega-item">
                <div className="mega-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" /><circle cx="18" cy="6" r="3" />
                  </svg>
                </div>
                <div>
                  <h5>Automation & Analytics</h5>
                  <p>RPA, BI dashboards, ETL pipelines</p>
                </div>
              </button>
              <button onClick={() => handleLinkClick('solutions')} className="mega-item">
                <div className="mega-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12.01" y2="18" />
                  </svg>
                </div>
                <div>
                  <h5>Mobile App Development</h5>
                  <p>Cross-platform iOS & Android applications</p>
                </div>
              </button>
            </div>

            <div className="mega-menu-col highlight-col">
              <h4>Featured Solution</h4>
              <div className="featured-card">
                <h5>Digital Transformation Roadmap</h5>
                <p>Get a tailored digital transformation blueprint aligned to your industry, stack, and business goals.</p>
                <button onClick={() => handleLinkClick('contact')} className="btn btn-primary" style={{ padding: '6px 12px', fontSize: '0.8rem', marginTop: '10px' }}>
                  Get Your Roadmap
                </button>
              </div>
            </div>
          </div>
        );

      case 'industries':
        return (
          <div className="mega-menu-grid">
            <div className="mega-menu-col">
              <h4>Core Sectors</h4>
              <button onClick={() => handleLinkClick('industries')} className="mega-item">
                <div className="mega-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12" y2="6" /><line x1="8" y1="10" x2="16" y2="10" /><line x1="8" y1="14" x2="16" y2="14" />
                  </svg>
                </div>
                <div>
                  <h5>Financial Services</h5>
                  <p>Compliant systems for banking & fintech</p>
                </div>
              </button>
              <button onClick={() => handleLinkClick('industries')} className="mega-item">
                <div className="mega-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                </div>
                <div>
                  <h5>Retail & E-commerce</h5>
                  <p>API integrations and scalable storefronts</p>
                </div>
              </button>
            </div>

            <div className="mega-menu-col">
              <h4>Healthcare & Public</h4>
              <button onClick={() => handleLinkClick('industries')} className="mega-item">
                <div className="mega-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" />
                  </svg>
                </div>
                <div>
                  <h5>Health & Life Sciences</h5>
                  <p>Secure databases and workflow portals</p>
                </div>
              </button>
              <button onClick={() => handleLinkClick('industries')} className="mega-item">
                <div className="mega-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <div>
                  <h5>Public Sector</h5>
                  <p>ITIL-governed civic service structures</p>
                </div>
              </button>
            </div>

            <div className="mega-menu-col highlight-col">
              <h4>Case Study</h4>
              <div className="featured-card">
                <span className="featured-badge">Healthcare</span>
                <h5>Workflow Automation for NHS-aligned Portal</h5>
                <p>How we reduced ticket resolution time by 60% through ServiceNow  integration.</p>
                <button onClick={() => handleLinkClick('industries')} className="btn btn-outline" style={{ padding: '6px 12px', fontSize: '0.8rem', marginTop: '10px', borderColor: 'var(--color-blue)', color: 'var(--color-blue)' }}>
                  Read Study
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="mega-menu-outer">
      <div className="mega-menu-content-wrapper">
        {renderContent()}
      </div>

      <style>{`
        .mega-menu-outer {
          position: absolute;
          top: 108px;
          left: 50%;
          transform: translateX(-50%);
          width: 92%;
          max-width: 1200px;
          background-color: var(--color-primary-bg);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-xl), 0 12px 40px rgba(15, 23, 42, 0.08);
          animation: slideDown 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 99;
          padding: 36px 0;
        }

        .navbar-scrolled ~ .mega-menu-outer {
          top: 98px;
        }

        .mega-menu-content-wrapper {
          width: 100%;
          padding-left: 36px;
          padding-right: 36px;
        }

        .mega-menu-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 40px;
        }

        .mega-menu-col h4 {
          font-family: var(--font-heading);
          font-size: 0.75rem;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 16px;
          border-bottom: 1px solid var(--color-border-light);
          padding-bottom: 8px;
        }

        .mega-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          width: 100%;
          text-align: left;
          padding: 10px 12px;
          border-radius: 6px;
          transition: background-color var(--transition-fast);
          margin-bottom: 4px;
          background: none;
          border: none;
          cursor: pointer;
        }

        .mega-item:hover {
          background-color: var(--color-accent-bg);
        }

        .mega-icon {
          color: var(--color-blue);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 2px;
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: rgba(30, 136, 229, 0.07);
          border: 1px solid rgba(30, 136, 229, 0.1);
          transition: all var(--transition-fast);
        }

        .mega-item:hover .mega-icon {
          background: var(--color-blue);
          color: #ffffff;
          border-color: var(--color-blue);
        }

        .mega-item h5 {
          font-size: 0.92rem;
          font-weight: 500;
          color: var(--color-navy);
          margin-bottom: 3px;
        }

        .mega-item p {
          font-size: 0.78rem;
          color: var(--color-text-secondary);
          line-height: 1.4;
        }

        .highlight-col {
          border-left: 1px solid var(--color-border);
          padding-left: 40px;
        }

        .featured-card {
          background-color: var(--color-soft-bg);
          border: 1px solid var(--color-border);
          border-radius: 8px;
          padding: 24px;
        }

        .featured-badge {
          display: inline-block;
          font-family: var(--font-heading);
          font-size: 0.68rem;
          font-weight: 500;
          color: var(--color-blue);
          text-transform: uppercase;
          background-color: rgba(30, 136, 229, 0.08);
          padding: 3px 10px;
          border-radius: 20px;
          margin-bottom: 10px;
          letter-spacing: 0.05em;
        }

        .featured-card h5 {
          font-size: 1rem;
          font-weight: 500;
          color: var(--color-navy);
          margin-bottom: 8px;
          line-height: 1.3;
        }

        .featured-card p {
          font-size: 0.83rem;
          color: var(--color-text-secondary);
          line-height: 1.55;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translate(-50%, -8px); }
          to   { opacity: 1; transform: translate(-50%, 0); }
        }

        @media (max-width: 900px) {
          .mega-menu-outer {
            top: 80px;
            width: 95%;
          }
          .mega-menu-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .highlight-col {
            border-left: none;
            padding-left: 0;
            border-top: 1px solid var(--color-border);
            padding-top: 28px;
          }
        }
      `}</style>
    </div>
  );
}
