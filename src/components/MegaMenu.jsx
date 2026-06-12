export default function MegaMenu({ menuId, onNavigate, onClose }) {
  const handleLinkClick = (tabId) => {
    onNavigate(tabId);
    onClose();
  };

  const renderContent = () => {
    switch (menuId) {
      case 'services':
        return (
          <div className="mega-menu-grid">
            <div className="mega-menu-col">
              <h4>Technology Consulting</h4>
              <button onClick={() => handleLinkClick('servicenow')} className="mega-item">
                <div className="mega-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.5 19A3.5 3.5 0 0 0 13 15.7V8.3a2 2 0 1 0-2 0v7.4A3.5 3.5 0 0 0 6.5 19" />
                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
                  </svg>
                </div>
                <div>
                  <h5>ServiceNow Consulting</h5>
                  <p>Certified ITSM, ITOM, SecOps setup</p>
                </div>
              </button>
              <button onClick={() => handleLinkClick('about')} className="mega-item">
                <div className="mega-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                    <line x1="14" y1="4" x2="10" y2="20" />
                  </svg>
                </div>
                <div>
                  <h5>Custom Software Development</h5>
                  <p>Making Code: responsive web & APIs</p>
                </div>
              </button>
            </div>
            
            <div className="mega-menu-col">
              <h4>Operations & Support</h4>
              <button onClick={() => handleLinkClick('bpo')} className="mega-item">
                <div className="mega-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h5>Global BPO & Support</h5>
                  <p>24/7 technical customer helpdesks</p>
                </div>
              </button>
              <button onClick={() => handleLinkClick('about')} className="mega-item">
                <div className="mega-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div>
                  <h5>IT Staffing & Augmentation</h5>
                  <p>On-demand specialized talent</p>
                </div>
              </button>
            </div>

            <div className="mega-menu-col highlight-col">
              <h4>Featured Solution</h4>
              <div className="featured-card">
                <h5>Platform Health Check</h5>
                <p>Request a free audit of your ServiceNow instance to identify upgrade warnings and database bugs.</p>
                <button onClick={() => handleLinkClick('servicenow')} className="btn btn-primary" style={{ padding: '6px 12px', fontSize: '0.8rem', marginTop: '10px' }}>
                  Book Free Audit
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
              <button onClick={() => handleLinkClick('home')} className="mega-item">
                <div className="mega-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12" y2="6" />
                    <line x1="8" y1="10" x2="16" y2="10" />
                    <line x1="8" y1="14" x2="16" y2="14" />
                  </svg>
                </div>
                <div>
                  <h5>Financial Services</h5>
                  <p>Compliant systems for banking & fintech</p>
                </div>
              </button>
              <button onClick={() => handleLinkClick('home')} className="mega-item">
                <div className="mega-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                </div>
                <div>
                  <h5>Retail & E-commerce</h5>
                  <p>API integrations and storefront setups</p>
                </div>
              </button>
            </div>

            <div className="mega-menu-col">
              <h4>Healthcare & Public</h4>
              <button onClick={() => handleLinkClick('home')} className="mega-item">
                <div className="mega-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <line x1="12" y1="8" x2="12" y2="16" />
                    <line x1="8" y1="12" x2="16" y2="12" />
                  </svg>
                </div>
                <div>
                  <h5>Health & Life Sciences</h5>
                  <p>Secure databases and workflow portals</p>
                </div>
              </button>
              <button onClick={() => handleLinkClick('home')} className="mega-item">
                <div className="mega-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 22H2v-2h20v2zM12 2L2 7h20L12 2zM4 9h3v9H4V9zm6 0h3v9h-3V9zm6 0h3v9h-3V9z" />
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
                <span className="featured-badge">Retail</span>
                <h5>E-commerce Platform Migration</h5>
                <p>How we helped a leading retail client scale transactions by 40% with zero HMR downtime.</p>
                <button onClick={() => handleLinkClick('home')} className="btn btn-outline" style={{ padding: '6px 12px', fontSize: '0.8rem', marginTop: '10px', borderColor: 'var(--color-blue)', color: 'var(--color-blue)' }}>
                  Read Study
                </button>
              </div>
            </div>
          </div>
        );

      case 'insights':
        return (
          <div className="mega-menu-grid">
            <div className="mega-menu-col">
              <h4>Resources</h4>
              <button onClick={() => handleLinkClick('home')} className="mega-item">
                <div className="mega-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                </div>
                <div>
                  <h5>Technical Articles</h5>
                  <p>Dev tips, ServiceNow codes, and ITIL guides</p>
                </div>
              </button>
              <button onClick={() => handleLinkClick('home')} className="mega-item">
                <div className="mega-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                    <path d="M22 12A10 10 0 0 0 12 2v10z" />
                  </svg>
                </div>
                <div>
                  <h5>Thought Leadership</h5>
                  <p>Executive reports on automation & AI</p>
                </div>
              </button>
            </div>

            <div className="mega-menu-col">
              <h4>Company News</h4>
              <button onClick={() => handleLinkClick('about')} className="mega-item">
                <div className="mega-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 19l7-7 3 3-7 7-3-3z" />
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                    <circle cx="11" cy="11" r="2" />
                  </svg>
                </div>
                <div>
                  <h5>Genius Newsroom</h5>
                  <p>Press releases and company announcements</p>
                </div>
              </button>
            </div>

            <div className="mega-menu-col highlight-col">
              <h4>Latest Insights</h4>
              <div className="featured-card">
                <h5>The Future of ITSM</h5>
                <p>Download our 2026 report on how AI agent integration is transforming incident response models.</p>
              </div>
            </div>
          </div>
        );

      case 'careers':
        return (
          <div className="mega-menu-grid">
            <div className="mega-menu-col">
              <h4>Join Genius Minds</h4>
              <button onClick={() => handleLinkClick('trainings')} className="mega-item">
                <div className="mega-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
                <div>
                  <h5>Open Positions</h5>
                  <p>Explore careers in engineering & advisory</p>
                </div>
              </button>
              <button onClick={() => handleLinkClick('about')} className="mega-item">
                <div className="mega-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <div>
                  <h5>Life at Genius Minds</h5>
                  <p>Learn about our culture and value systems</p>
                </div>
              </button>
            </div>

            <div className="mega-menu-col">
              <h4>Enablement</h4>
              <button onClick={() => handleLinkClick('trainings')} className="mega-item">
                <div className="mega-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                  </svg>
                </div>
                <div>
                  <h5>Upskilling Programs</h5>
                  <p>Enroll in ITIL and ServiceNow cohorts</p>
                </div>
              </button>
            </div>

            <div className="mega-menu-col highlight-col">
              <h4>Recruitment</h4>
              <div className="featured-card">
                <h5>We Are Hiring!</h5>
                <p>We are actively looking for Senior React Engineers and certified ServiceNow Administrators.</p>
                <button onClick={() => handleLinkClick('contact')} className="btn btn-primary" style={{ padding: '6px 12px', fontSize: '0.8rem', marginTop: '10px' }}>
                  Submit Resume
                </button>
              </div>
            </div>
          </div>
        );

      case 'about':
        return (
          <div className="mega-menu-grid">
            <div className="mega-menu-col">
              <h4>About Us</h4>
              <button onClick={() => handleLinkClick('about')} className="mega-item">
                <div className="mega-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div>
                  <h5>Who We Are</h5>
                  <p>Our mission, values, and journey</p>
                </div>
              </button>
              <button onClick={() => handleLinkClick('about')} className="mega-item">
                <div className="mega-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3v18h18" />
                    <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
                  </svg>
                </div>
                <div>
                  <h5>Milestones Timeline</h5>
                  <p>Corporate milestones since 2020</p>
                </div>
              </button>
            </div>

            <div className="mega-menu-col">
              <h4>Governance</h4>
              <button onClick={() => handleLinkClick('about')} className="mega-item">
                <div className="mega-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <div>
                  <h5>ITIL Governance Model</h5>
                  <p>Agile sprint structures and SLA policies</p>
                </div>
              </button>
            </div>

            <div className="mega-menu-col highlight-col">
              <h4>Our Slogan</h4>
              <div className="featured-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h5 style={{ fontStyle: 'italic' }}>&ldquo;Making Code&rdquo;</h5>
                <p>Building Smart Solutions for a Future Digital World.</p>
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

        /* Offset top alignment when navbar is scrolled */
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
          font-size: 0.85rem;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 20px;
          border-bottom: 1px solid var(--color-border-light);
          padding-bottom: 8px;
        }

        .mega-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          width: 100%;
          text-align: left;
          padding: 12px;
          border-radius: var(--radius-sm);
          transition: background-color var(--transition-fast);
          margin-bottom: 8px;
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
        }

        .mega-item h5 {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-navy);
          margin-bottom: 4px;
        }

        .mega-item p {
          font-size: 0.8rem;
          color: var(--color-text-secondary);
        }

        /* Featured card side styles */
        .highlight-col {
          border-left: 1px solid var(--color-border);
          padding-left: 40px;
        }

        .featured-card {
          background-color: var(--color-soft-bg);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 24px;
        }

        .featured-badge {
          display: inline-block;
          font-family: var(--font-heading);
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--color-blue);
          text-transform: uppercase;
          background-color: rgba(30, 136, 229, 0.08);
          padding: 2px 8px;
          border-radius: var(--radius-pill);
          margin-bottom: 12px;
        }

        .featured-card h5 {
          font-size: 1.05rem;
          color: var(--color-navy);
          margin-bottom: 8px;
        }

        .featured-card p {
          font-size: 0.85rem;
          color: var(--color-text-secondary);
          line-height: 1.5;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translate(-50%, -8px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }

        @media (max-width: 900px) {
          .mega-menu-outer {
            top: 80px;
            width: 95%;
          }
          .navbar-scrolled ~ .mega-menu-outer {
            top: 80px;
          }
          .mega-menu-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .highlight-col {
            border-left: none;
            padding-left: 0;
          }
        }
      `}</style>
    </div>
  );
}
