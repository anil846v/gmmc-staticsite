import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import erpHeroImg from '../assets/services/erp_hero_dashboard.png';

gsap.registerPlugin(ScrollTrigger);

export default function Erp({ hideHero = false }) {
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  useEffect(() => {
    if (!hideHero) {
      document.title = 'Enterprise ERP Consulting & Integrations | GMMC';
      window.scrollTo(0, 0);
    }

    // 1. Initial fade-in of the introduction text
    gsap.fromTo('.erp-intro-anim',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
    );

    // 2. CSS-based Pinning & Zoom-out on scroll (desktop only)
    let imgTrigger;
    if (window.innerWidth > 1024) {
      imgTrigger = ScrollTrigger.create({
        trigger: '.erp-sticky-spacer',
        start: 'top 140px',
        end: 'bottom 660px',
        scrub: 1,
        animation: gsap.timeline()
          .to('.erp-split-media-wrapper', {
            width: '60%',
            borderRadius: '24px',
            ease: 'none'
          })
          .to('.erp-scroll-image', {
            scale: 1.0,
            ease: 'none'
          }, 0) // Zoom out the image inside simultaneously
          .to('.erp-split-content-wrapper', {
            opacity: 1,
            x: 0,
            ease: 'none'
          }, 0) // Fade in content on the right side
      });
    }

    // 3. Cards stagger fade-up
    const cardsTrigger = ScrollTrigger.create({
      trigger: '.erp-premium-card',
      start: 'top 85%',
      onEnter: () => {
        gsap.fromTo('.erp-premium-card',
          { opacity: 0, y: 45 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.18, ease: 'power2.out' }
        );
      },
      once: true
    });

    return () => {
      if (imgTrigger) imgTrigger.kill();
      cardsTrigger.kill();
    };
  }, [hideHero]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  const getTechLogo = (techName) => {
    switch (techName.toLowerCase()) {
      case 'sap':
        return (
          <svg className="tech-logo-svg" viewBox="0 0 24 24" width="16" height="16" fill="#008FD3" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" />
            <text x="3" y="16" fill="#ffffff" fontFamily="sans-serif" fontWeight="bold" fontSize="10">SAP</text>
          </svg>
        );
      case 'oracle':
        return (
          <svg className="tech-logo-svg" viewBox="0 0 24 24" width="16" height="16" fill="#F80000" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" />
            <text x="2" y="16" fill="#ffffff" fontFamily="sans-serif" fontWeight="bold" fontSize="8">ORCL</text>
          </svg>
        );
      case 'sql':
      case 'postgresql':
        return (
          <svg className="tech-logo-svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#336791" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
          </svg>
        );
      case 'python':
        return (
          <svg className="tech-logo-svg" viewBox="0 0 24 24" width="16" height="16" fill="#3776AB" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.898 0C5.32 0 5.768 2.87 5.768 2.87l.006 2.977h6.213V6.26H6.1c-2.348 0-4.137 1.706-4.137 4.053v3.52c0 2.296 1.83 3.99 4.137 3.99h1.663v-2.338a2.5 2.5 0 0 1 2.5-2.5h6.215c1.396 0 2.52-1.124 2.52-2.52V5.518c0-2.39-1.922-4.137-4.138-4.137H11.898zm.05 1.719a.855.855 0 1 1 0 1.71.855.855 0 0 1 0-1.71zm5.952 5.952H16.24v2.337a2.5 2.5 0 0 1-2.5 2.5H7.524a2.52 2.52 0 0 1-2.52 2.52v5.39c0 2.39 1.922 4.137 4.137 4.137h3.052c6.58 0 6.13-2.87 6.13-2.87l-.005-2.977h-6.213v-.413h5.882c2.348 0 4.138-1.706 4.138-4.053v-3.52c0-2.296-1.83-3.99-4.138-3.99zm-5.952 12.87a.855.855 0 1 1 0 1.71.855.855 0 0 1 0-1.71z"/>
          </svg>
        );
      case 'node.js':
      case 'nodejs':
        return (
          <svg className="tech-logo-svg" viewBox="0 0 24 24" width="16" height="16" fill="#339933" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.8 15.4c-2.4-.2-4.3-1.6-4.9-3.7-.1-.4-.2-.8-.2-1.2 0-.4.1-.8.2-1.2.6-2.1 2.5-3.5 4.9-3.7.3 0 .7.1 1 .2.7.2 1.4.6 1.8 1.2.2.3.4.6.5.9.1.4.2.8.2 1.2s-.1.8-.2 1.2c-.1.3-.3.6-.5.9-.4.6-1.1 1-1.8 1.2-.3.1-.7.1-1 .1zm3.8-3.4c-.2-.6-.5-1.1-1-1.4-.2-.1-.4-.2-.7-.2h-1.6c-.3 0-.5.1-.7.2-.5.3-.8.8-1 1.4-.1.3-.1.6-.1.9s0 .6.1.9c.2.6.5 1.1 1 1.4.2.1.4.2.7.2h1.6c.3 0 .5-.1.7-.2.5-.3.8-.8 1-1.4.1-.3.1-.6.1-.9s-.1-.6-.1-.9z"/>
          </svg>
        );
      case 'aws':
        return (
          <svg className="tech-logo-svg" viewBox="0 0 24 24" width="16" height="16" fill="#FF9900" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.4 17c-2.8 1.8-6.8 2.7-10.8 2.7-5.5 0-9.8-1.7-12-4.8-.4-.6.2-1.2.9-.9 4 1.8 9 2.8 12.3 2.8 3.3 0 7.8-.9 9.8-2.5.6-.5 1.1.2.8.7z"/>
            <path d="M14.5 14.5c-.3-1.6-1.6-3.8-3.3-5.2-.4-.4 0-1 .5-.7 2.2 1.8 3.7 4.3 4 6.4.1.6-.7.7-1.2-.5z"/>
          </svg>
        );
      case 'redis':
        return (
          <svg className="tech-logo-svg" viewBox="0 0 24 24" width="16" height="16" fill="#DC382D" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7l10 5 10-5-10-5zm0 6.5L4.5 7 12 3.5 19.5 7 12 8.5zM2 17l10 5 10-5v-3.5l-10 5-10-5V17zm0-6l10 5 10-5V7.5L12 12.5l-10-5V11z"/>
          </svg>
        );
      case 'docker':
        return (
          <svg className="tech-logo-svg" viewBox="0 0 24 24" width="16" height="16" fill="#2496ED" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.983 11.078h2.119c.51 0 .9-.37.9-.9V8.043c0-.53-.39-.9-.9-.9h-2.119c-.51 0-.9.37-.9.9v2.136c0 .53.39.899.9.899zm-2.837 0h2.118c.51 0 .9-.37.9-.9V8.043c0-.53-.39-.9-.9-.9h-2.118c-.51 0-.9.37-.9.9v2.136c0 .53.39.899.9.899zm-2.837 0h2.118c.51 0 .9-.37.9-.9V8.043c0-.53-.39-.9-.9-.9H8.31c-.51 0-.9.37-.9.9v2.136c0 .53.39.899.9.899zm-2.837 0h2.119c.51 0 .9-.37.9-.9V8.043c0-.53-.39-.9-.9-.9H5.472c-.51 0-.9.37-.9.9v2.136c0 .53.39.899.9.899zM8.31 14.246h2.118c.51 0 .9-.37.9-.9v-2.136c0-.53-.39-.9-.9-.9H8.31c-.51 0-.9.37-.9.9v2.136c0 .53.39.9.9.9zm-2.837 0h2.119c.51 0 .9-.37.9-.9v-2.136c0-.53-.39-.9-.9-.9H5.472c-.51 0-.9.37-.9.9v2.136c0 .53.39.9.9.9zm5.674 0h2.118c.51 0 .9-.37.9-.9v-2.136c0-.53-.39-.9-.9-.9h-2.118c-.51 0-.9.37-.9.9v2.136c0 .53.39.9.9.9zm-8.51 0h2.119c.51 0 .9-.37.9-.9v-2.136c0-.53-.39-.9-.9-.9H2.635c-.51 0-.9.37-.9.9v2.136c0 .53.39.9.9.9zm13.904-8.81h2.119c.51 0 .9-.37.9-.9V2.4c0-.53-.39-.9-.9-.9h-2.119c-.51 0-.9.37-.9.9v2.136c0 .53.39.9.9.9zm-2.837 0h2.118c.51 0 .9-.37.9-.9V2.4c0-.53-.39-.9-.9-.9h-2.118c-.51 0-.9.37-.9.9v2.136c0 .53.4.9.9.9zM23.99 9.878c-.28-.57-.866-.998-1.748-1.12-1.396-.192-3.882.268-5.38 1.488-.13.106-.216.27-.216.444v6.864c0 .324.264.588.588.588h1.22c1.782 0 3.25-.86 4.384-2.584.81-1.232 1.436-3.844 1.152-5.68z"/>
          </svg>
        );
      case 'graphql':
        return (
          <svg className="tech-logo-svg" viewBox="0 0 24 24" width="16" height="16" fill="#E10098" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15.92c-.28.05-.56.08-.85.08A5 5 0 0 1 7.15 13c0-.29.03-.57.08-.85L13 17.92zm-2-11.84c.28-.05.56-.08.85-.08A5 5 0 0 1 16.85 11c0 .29-.03.57-.08.85L11 6.08zm4.43 1.25a6.95 6.95 0 0 0-.85-.85l2.1-2.1a9.92 9.92 0 0 1 .85.85l-2.1 2.1zm-6.86 9.34a6.95 6.95 0 0 0 .85.85l-2.1 2.1a9.92 9.92 0 0 1-.85-.85l2.1-2.1z"/>
          </svg>
        );
      case 'oauth 2.0':
      case 'oauth2':
        return (
          <svg className="tech-logo-svg" viewBox="0 0 24 24" width="16" height="16" fill="#3F51B5" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5h-2v-2h2zm0-3.5h-2V7h2z"/>
          </svg>
        );
      case 'jwt':
        return (
          <svg className="tech-logo-svg" viewBox="0 0 24 24" width="16" height="16" fill="#D63AFF" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 11.5H13V15a1 1 0 0 1-2 0v-1.5H9.5a1 1 0 0 1 0-2H11V10a1 1 0 0 1 2 0v1.5h2.5a1 1 0 0 1 0 2z"/>
          </svg>
        );
      case 'tableau':
        return (
          <svg className="tech-logo-svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#E87624" strokeWidth="2.5" strokeLinecap="round" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 1.5v21M1.5 12h21M4 7.5h16M4 16.5h16M7.5 4v16M16.5 4v16" />
          </svg>
        );
      default:
        return (
          <svg className="tech-logo-svg" viewBox="0 0 24 24" width="16" height="16" fill="#64748b" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10"/>
          </svg>
        );
    }
  };

  return (
    <div className="erp-page-refactored">
      {/* Hero or Section Header */}
      {!hideHero && (
        <section className="subpage-hero">
          <div className="container">
            <div className="erp-badge-pill erp-intro-anim">ERP Integration Specialist</div>
            <h1 className="subpage-title erp-intro-anim">Enterprise ERP Solutions</h1>
            <p className="subpage-lead erp-intro-anim">
              Optimize your supply chain, procurement, financial reporting, and human capital workflows with our custom ERP system integrations and database optimizations.
            </p>
          </div>
        </section>
      )}

      {/* Intro Section for Scrollspy Viewport (Always Visible) */}
      <div className="erp-intro-section">
        <span className="erp-badge-pill erp-intro-anim">Capabilities</span>
        <h2 className="erp-main-heading erp-intro-anim">ERP Operations & Systems Integration</h2>
        <p className="erp-intro-text erp-intro-anim">
          Streamline your logistics, warehousing, financials, and workforce tracking. We build unified ERP databases, custom integration bridges, and secure compliance platforms.
        </p>
      </div>

      {/* Split Interactive Section inside a Sticky Spacer Wrapper */}
      <div className="erp-sticky-spacer">
        <div className="erp-interactive-section">
          <div className="erp-split-media-wrapper">
            <img src={erpHeroImg} alt="ERP Enterprise Dashboard Interface" className="erp-scroll-image" />
            <div className="erp-image-overlay"></div>
          </div>
          
          <div className="erp-split-content-wrapper">
            <h3 className="erp-details-heading">Unified Enterprise Control</h3>
            <p className="erp-details-text">
              Transform legacy operations into a real-time responsive machine. Our ERP solutions connect data channels, remove silos, and automate regulatory workflows with sub-second integrity.
            </p>
            
            <div className="erp-details-highlights">
              <div className="erp-highlight-item">
                <div className="erp-highlight-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="erp-highlight-info">
                  <h4>Supply Chain Automation</h4>
                  <p>Procurement automation, automated vendor restocking, and real-time transit telemetry.</p>
                </div>
              </div>
              
              <div className="erp-highlight-item">
                <div className="erp-highlight-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="erp-highlight-info">
                  <h4>Financial Ledger & Auditing</h4>
                  <p>Regional tax calculators, centralized book ledgers, and secure immutable logs.</p>
                </div>
              </div>
              
              <div className="erp-highlight-item">
                <div className="erp-highlight-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="erp-highlight-info">
                  <h4>Workforce Lifecycle</h4>
                  <p>HR planning automation, secure role access tiers, and API-based payroll links.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3-Column Premium Cards with technologies */}
      <div className="erp-cards-section">
        <div className="erp-cards-header">
          <span className="erp-section-tag">Key Pillars</span>
          <h2 className="erp-section-title">Core Technology Integrations</h2>
        </div>
        <div className="erp-cards-grid">
          {/* Card 1 */}
          <div className="erp-premium-card">
            <div className="erp-card-glow"></div>
            <div className="erp-card-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <h3>Operations & Supply Chain</h3>
            <p>
              Connect procurement portals, track inventory levels in real-time, and automate vendor re-order rules to minimize logistical blockages.
            </p>
            <div className="erp-tech-badges">
              {['SAP', 'Oracle', 'SQL', 'Python'].map((tech) => (
                <span key={tech} className="tech-badge">
                  {getTechLogo(tech)}
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Card 2 */}
          <div className="erp-premium-card">
            <div className="erp-card-glow"></div>
            <div className="erp-card-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <line x1="12" y1="4" x2="12" y2="20" />
              </svg>
            </div>
            <h3>Financial Auditing</h3>
            <p>
              Centralize transaction accounting, automate tax calculations across regions, and run instant financial reports with full system logs.
            </p>
            <div className="erp-tech-badges">
              {['PostgreSQL', 'Node.js', 'AWS', 'Redis'].map((tech) => (
                <span key={tech} className="tech-badge">
                  {getTechLogo(tech)}
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Card 3 */}
          <div className="erp-premium-card">
            <div className="erp-card-glow"></div>
            <div className="erp-card-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
              </svg>
            </div>
            <h3>Workforce & HR</h3>
            <p>
              Unify scheduling, role access, and payroll. Manage workforce resource allocations and secure data access across department tiers.
            </p>
            <div className="erp-tech-badges">
              {['Docker', 'GraphQL', 'JWT', 'Tableau'].map((tech) => (
                <span key={tech} className="tech-badge">
                  {getTechLogo(tech)}
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Audit Request Form */}
      <section className="erp-demo-section">
        <div className="erp-demo-container">
          <div className="erp-demo-left">
            <span className="erp-section-tag">Assessment</span>
            <h2 className="erp-demo-heading">Book an ERP Migration Audit</h2>
            <p className="erp-demo-text">
              Planning to upgrade or migrate your legacy ERP? Speak with our principal ERP consultants. We will audit your database schemas, identify integration conflicts, and design a SOX-compliant data transition roadmap.
            </p>
            <ul className="erp-demo-list">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                <span>Evaluate legacy data structures for upgrade readiness</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                <span>Identify potential integration vulnerabilities</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                <span>Provide custom estimates and duration scopes</span>
              </li>
            </ul>
          </div>

          <div className="erp-demo-right">
            <div className="erp-form-box">
              {inquirySubmitted ? (
                <div className="erp-form-success-message">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <h3>Request Received!</h3>
                  <p>An ERP Consultant will contact you within 24 business hours to arrange the audit session.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="erp-inquiry-form">
                  <h3>Request Migration Audit</h3>
                  <div className="erp-form-group">
                    <label htmlFor="companyName">Company Name *</label>
                    <input type="text" id="companyName" required placeholder="e.g. Acme Industries" />
                  </div>
                  <div className="erp-form-group">
                    <label htmlFor="workEmail">Work Email *</label>
                    <input type="email" id="workEmail" required placeholder="e.g. it@acme.com" />
                  </div>
                  <div className="erp-form-group">
                    <label htmlFor="erpPlatform">ERP Platform Target</label>
                    <select id="erpPlatform">
                      <option value="sap">SAP Suite / S4HANA</option>
                      <option value="dynamics">Microsoft Dynamics 365</option>
                      <option value="oracle">Oracle ERP Cloud</option>
                      <option value="custom">Custom ERP Architecture</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary erp-submit-btn">
                    Schedule Free Session
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .erp-page-refactored {
          padding: 40px 0;
          background-color: #ffffff;
        }

        .erp-badge-pill {
          display: inline-block;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.72rem;
          color: var(--color-blue);
          background: rgba(30, 136, 229, 0.08);
          border: 1px solid rgba(30, 136, 229, 0.2);
          padding: 6px 14px;
          border-radius: 9999px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 20px;
        }

        /* Intro Section */
        .erp-intro-section {
          max-width: 800px;
          margin-bottom: 60px;
          text-align: left;
        }

        .erp-main-heading {
          font-size: 2.1rem;
          font-weight: 600;
          color: var(--color-navy);
          margin-bottom: 20px;
          line-height: 1.25;
          letter-spacing: -0.01em;
        }

        .erp-intro-text {
          font-size: 1.0rem;
          line-height: 1.65;
          color: var(--color-text-secondary);
          margin: 0;
        }

        /* Sticky Spacer and Split Interactive Section */
        .erp-sticky-spacer {
          height: 1100px; /* Provides scrollable room for the sticky effect */
          position: relative;
          margin-bottom: 80px;
        }

        .erp-interactive-section {
          position: sticky;
          top: 140px; /* Sticks below GMMC header */
          height: 520px;
          display: flex;
          width: 100%;
          gap: 5%; /* 5% gap between image and text */
          align-items: center;
          background: #ffffff; /* ensure background is solid when sticking */
        }

        .erp-split-media-wrapper {
          position: absolute;
          right: 0;
          left: auto;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: 0px;
          z-index: 2;
          box-shadow: 0 20px 50px rgba(15, 23, 42, 0.06);
          will-change: width, border-radius;
          background: #0b1329;
        }

        .erp-scroll-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transform: scale(1.1); /* starts slightly zoomed in */
          will-change: transform;
        }

        .erp-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(15, 23, 42, 0) 60%, rgba(15, 23, 42, 0.15) 100%);
          pointer-events: none;
        }

        .erp-split-content-wrapper {
          width: 35%;
          margin-right: auto;
          margin-left: 0;
          opacity: 0;
          transform: translateX(-30px);
          z-index: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
          will-change: opacity, transform;
        }

        .erp-details-heading {
          font-size: 1.75rem;
          color: var(--color-navy);
          margin-bottom: 20px;
          line-height: 1.3;
          font-weight: 600;
        }

        .erp-details-text {
          font-size: 0.9rem;
          line-height: 1.65;
          color: var(--color-text-secondary);
          margin-bottom: 30px;
        }

        .erp-details-highlights {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .erp-highlight-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .erp-highlight-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(30, 136, 229, 0.08);
          color: var(--color-blue);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .erp-highlight-info h4 {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-navy);
          margin-bottom: 4px;
        }

        .erp-highlight-info p {
          font-size: 0.85rem;
          line-height: 1.45;
          color: var(--color-text-secondary);
          margin: 0;
        }

        /* 3-Column Cards Section */
        .erp-cards-section {
          margin-bottom: 80px;
        }

        .erp-cards-header {
          margin-bottom: 48px;
          text-align: left;
        }

        .erp-section-tag {
          font-family: var(--font-heading);
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-blue);
          display: inline-block;
          margin-bottom: 12px;
        }

        .erp-section-title {
          font-size: 2.1rem;
          font-weight: 600;
          color: var(--color-navy);
          margin: 0;
          letter-spacing: -0.01em;
        }

        .erp-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .erp-premium-card {
          background: #ffffff;
          border: 1px solid var(--color-border);
          padding: 40px 32px;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all var(--transition-normal);
          border-radius: 12px;
        }

        .erp-premium-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 36px rgba(15, 23, 42, 0.06);
          border-color: rgba(30, 136, 229, 0.3);
        }

        .erp-card-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(30, 136, 229, 0.03) 0%, rgba(255,255,255,0) 70%);
          pointer-events: none;
          transition: opacity 0.5s ease;
          opacity: 0;
        }

        .erp-premium-card:hover .erp-card-glow {
          opacity: 1;
        }

        .erp-card-icon-box {
          width: 52px;
          height: 52px;
          border-radius: 8px;
          background: rgba(30, 136, 229, 0.08);
          color: var(--color-blue);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          transition: all 0.3s ease;
        }

        .erp-premium-card:hover .erp-card-icon-box {
          background: var(--color-blue);
          color: #ffffff;
          transform: scale(1.05);
          box-shadow: 0 6px 16px rgba(30, 136, 229, 0.25);
        }

        .erp-premium-card h3 {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-navy);
          margin-bottom: 12px;
        }

        .erp-premium-card p {
          font-size: 0.86rem;
          color: var(--color-text-secondary);
          line-height: 1.55;
          margin-bottom: 24px;
          flex-grow: 1;
        }

        .erp-tech-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--color-navy);
          background: #f1f5f9;
          padding: 5px 12px;
          border-radius: 6px;
          border: 1px solid #e2e8f0;
          transition: all 0.2s ease;
        }

        .tech-badge:hover {
          background: #ffffff;
          border-color: var(--color-blue);
          box-shadow: 0 4px 10px rgba(15, 23, 42, 0.04);
          transform: translateY(-1px);
        }

        .tech-logo-svg {
          flex-shrink: 0;
          display: block;
        }

        /* Form Section */
        .erp-demo-section {
          background-color: var(--color-soft-bg);
          border: 1px solid var(--color-border);
          border-radius: 16px;
          padding: 50px 40px;
          margin-bottom: 20px;
        }

        .erp-demo-container {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 50px;
          align-items: center;
        }

        .erp-demo-heading {
          font-size: 1.95rem;
          color: var(--color-navy);
          font-weight: 600;
          margin-bottom: 20px;
        }

        .erp-demo-text {
          font-size: 0.92rem;
          line-height: 1.6;
          color: var(--color-text-secondary);
          margin-bottom: 24px;
        }

        .erp-demo-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .erp-demo-list li {
          display: flex;
          gap: 12px;
          font-size: 0.88rem;
          color: var(--color-text-primary);
          align-items: center;
        }

        .erp-demo-list li svg {
          color: var(--color-blue);
          flex-shrink: 0;
        }

        .erp-form-box {
          background: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: 12px;
          padding: 32px;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.03);
        }

        .erp-inquiry-form h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 20px;
          color: var(--color-navy);
          text-align: center;
          margin-top: 0;
        }

        .erp-form-group {
          margin-bottom: 16px;
        }

        .erp-form-group label {
          display: block;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.85rem;
          color: var(--color-text-primary);
          margin-bottom: 6px;
        }

        .erp-form-group input, 
        .erp-form-group select {
          width: 100%;
          padding: 11px 14px;
          border-radius: 6px;
          border: 1px solid var(--color-border);
          background-color: var(--color-white);
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: var(--color-text-primary);
        }

        .erp-form-group input:focus, 
        .erp-form-group select:focus {
          border-color: var(--color-blue);
          outline: none;
        }

        .erp-submit-btn {
          width: 100%;
          padding: 12px 20px;
          border-radius: 6px;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.92rem;
          margin-top: 10px;
        }

        .erp-form-success-message {
          text-align: center;
          padding: 40px 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .erp-form-success-message h3 {
          color: var(--color-navy);
          margin: 0;
        }

        .erp-form-success-message p {
          color: var(--color-text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .erp-sticky-spacer {
            height: auto !important;
            margin-bottom: 40px;
          }
          .erp-interactive-section {
            position: relative !important;
            top: 0 !important;
            height: auto !important;
            flex-direction: column;
            gap: 40px;
          }
          .erp-split-media-wrapper {
            position: relative;
            width: 100% !important;
            height: 360px;
            border-radius: 12px !important;
          }
          .erp-split-content-wrapper {
            width: 100%;
            opacity: 1 !important;
            transform: none !important;
            margin-left: 0;
          }
          .erp-cards-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .erp-demo-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </div>
  );
}
