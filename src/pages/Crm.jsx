import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import crmHeroImg from '../assets/services/crm_hero_dashboard.png';

gsap.registerPlugin(ScrollTrigger);

export default function Crm({ hideHero = false }) {
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  useEffect(() => {
    if (!hideHero) {
      document.title = 'Advanced CRM Solutions & Sales Tech | GMMC';
      window.scrollTo(0, 0);
    }

    // 1. Initial fade-in of the introduction text
    gsap.fromTo('.crm-intro-anim',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
    );

    // 2. CSS-based Pinning & Zoom-out on scroll (desktop only)
    let imgTrigger;
    if (window.innerWidth > 1024) {
      imgTrigger = ScrollTrigger.create({
        trigger: '.crm-sticky-spacer',
        start: 'top 140px',
        end: 'bottom 660px',
        scrub: 1,
        animation: gsap.timeline()
          .to('.crm-split-media-wrapper', {
            width: '60%',
            borderRadius: '24px',
            ease: 'none'
          })
          .to('.crm-scroll-image', {
            scale: 1.0,
            ease: 'none'
          }, 0) // Zoom out the image inside simultaneously
          .to('.crm-split-content-wrapper', {
            opacity: 1,
            x: 0,
            ease: 'none'
          }, 0) // Fade in content on the right side
      });
    }

    // 3. Cards stagger fade-up
    const cardsTrigger = ScrollTrigger.create({
      trigger: '.crm-premium-card',
      start: 'top 85%',
      onEnter: () => {
        gsap.fromTo('.crm-premium-card',
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
      case 'salesforce':
        return (
          <svg className="tech-logo-svg" viewBox="0 0 24 24" width="16" height="16" fill="#00A1E0" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C9.5 2 7.3 3.5 6.4 5.7c-.5-.2-1.1-.3-1.6-.3-2.1 0-3.8 1.7-3.8 3.8 0 .4.1.8.2 1.2C.5 11.2 0 12.5 0 14c0 2.8 2.2 5 5 5h13.5c3 0 5.5-2.5 5.5-5.5 0-2.3-1.4-4.2-3.4-5C20.4 5.3 16.5 2 12 2z" />
          </svg>
        );
      case 'hubspot':
        return (
          <svg className="tech-logo-svg" viewBox="0 0 24 24" width="16" height="16" fill="#FF7A59" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="6" r="3" />
            <circle cx="6" cy="15" r="3" />
            <circle cx="18" cy="15" r="3" />
            <path d="M12 9v3M8.5 13.5L11 12M15.5 13.5L13 12" stroke="#FF7A59" strokeWidth="2.2" strokeLinecap="round" />
            <circle cx="12" cy="12" r="1.5" fill="#ffffff" />
          </svg>
        );
      case 'dynamics':
        return (
          <svg className="tech-logo-svg" viewBox="0 0 24 24" width="16" height="16" fill="#00205B" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2l10 10L2 22h8l10-10L10 2H2z" />
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
      case 'sql':
      case 'postgresql':
        return (
          <svg className="tech-logo-svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#336791" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
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
    <div className="crm-page-refactored">
      {/* Hero or Section Header */}
      {!hideHero && (
        <section className="subpage-hero">
          <div className="container">
            <div className="crm-badge-pill crm-intro-anim">CRM Platform Specialist</div>
            <h1 className="subpage-title crm-intro-anim">Advanced CRM Platforms</h1>
            <p className="subpage-lead crm-intro-anim">
              Transform customer engagement and accelerate sales pipeline velocity through our advanced CRM engineering services, lead scoring, and automated pipelines.
            </p>
          </div>
        </section>
      )}

      {/* Intro Section for Scrollspy Viewport (Always Visible) */}
      <div className="crm-intro-section">
        <span className="crm-badge-pill crm-intro-anim">Capabilities</span>
        <h2 className="crm-main-heading crm-intro-anim">Advanced CRM Platform Architecture</h2>
        <p className="crm-intro-text crm-intro-anim">
          Transform customer operations and sales velocity. We configure premium HubSpot and Salesforce integrations, deploy AI lead-scoring logic, and link omnichannel communication pipelines.
        </p>
      </div>

      {/* Split Interactive Section inside a Sticky Spacer Wrapper */}
      <div className="crm-sticky-spacer">
        <div className="crm-interactive-section">
          <div className="crm-split-media-wrapper">
            <img src={crmHeroImg} alt="CRM Sales Pipeline Interface" className="crm-scroll-image" />
            <div className="crm-image-overlay"></div>
          </div>
          
          <div className="crm-split-content-wrapper">
            <h3 className="crm-details-heading">Unified Client Intelligence</h3>
            <p className="crm-details-text">
              Equip your account managers and sales representatives with a 360-degree view of prospect communications. We construct reliable pipelines that sync activities, routes, and scores instantly.
            </p>
            
            <div className="crm-details-highlights">
              <div className="crm-highlight-item">
                <div className="crm-highlight-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="crm-highlight-info">
                  <h4>Pipeline Automation</h4>
                  <p>Drag-and-drop deals pipelines, automatic representative assignment, and stage triggers.</p>
                </div>
              </div>
              
              <div className="crm-highlight-item">
                <div className="crm-highlight-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="crm-highlight-info">
                  <h4>AI Lead Prioritization</h4>
                  <p>Predictive lead scoring matrices, contact telemetry rules, and high-value alerts.</p>
                </div>
              </div>
              
              <div className="crm-highlight-item">
                <div className="crm-highlight-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="crm-highlight-info">
                  <h4>Omnichannel Profiles</h4>
                  <p>Unified client records consolidating email, live chat, support tickets, and VoIP lines.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3-Column Premium Cards with technologies */}
      <div className="crm-cards-section">
        <div className="crm-cards-header">
          <span className="crm-section-tag">Key Pillars</span>
          <h2 className="crm-section-title">Core Technology Integrations</h2>
        </div>
        <div className="crm-cards-grid">
          {/* Card 1 */}
          <div className="crm-premium-card">
            <div className="crm-card-glow"></div>
            <div className="crm-card-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3>Pipeline Automation</h3>
            <p>
              Build visual deal pipelines, set up automatic stage transition rules, and trigger task creation to prompt immediate follow-ups.
            </p>
            <div className="crm-tech-badges">
              {['Salesforce', 'HubSpot', 'Dynamics', 'Node.js'].map((tech) => (
                <span key={tech} className="tech-badge">
                  {getTechLogo(tech)}
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Card 2 */}
          <div className="crm-premium-card">
            <div className="crm-card-glow"></div>
            <div className="crm-card-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
            <h3>Omnichannel Sync</h3>
            <p>
              Consolidate voice, email, chat, and support ticket records into a single unified customer activity timeline for account managers.
            </p>
            <div className="crm-tech-badges">
              {['GraphQL', 'AWS', 'Redis', 'Python'].map((tech) => (
                <span key={tech} className="tech-badge">
                  {getTechLogo(tech)}
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Card 3 */}
          <div className="crm-premium-card">
            <div className="crm-card-glow"></div>
            <div className="crm-card-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
            </div>
            <h3>AI Lead Scoring</h3>
            <p>
              Configure advanced dashboards to forecast revenue pipelines, acquire CAC metrics, and score inbound contacts on telemetry data.
            </p>
            <div className="crm-tech-badges">
              {['Docker', 'PostgreSQL', 'JWT', 'OAuth 2.0'].map((tech) => (
                <span key={tech} className="tech-badge">
                  {getTechLogo(tech)}
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Review Request Form */}
      <section className="crm-demo-section">
        <div className="crm-demo-container">
          <div className="crm-demo-left">
            <span className="crm-section-tag">Evaluation</span>
            <h2 className="crm-demo-heading">Request CRM Optimization Review</h2>
            <p className="crm-demo-text">
              Is your CRM cluttered with duplicate data? Are your sales agents complaining about platform complexity? Schedule a free 1-hour session to map out an optimization plan.
            </p>
            <ul className="crm-demo-list">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                <span>Evaluate contact duplicates and database records cleanliness</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                <span>Analyze automation triggers for speed optimizations</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                <span>Map reporting dashboard configurations to key metrics</span>
              </li>
            </ul>
          </div>

          <div className="crm-demo-right">
            <div className="crm-form-box">
              {inquirySubmitted ? (
                <div className="crm-form-success-message">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <h3>Request Received!</h3>
                  <p>A CRM Systems Architect will reach out to you within 24 business hours to schedule your evaluation.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="crm-inquiry-form">
                  <h3>Book CRM Optimization</h3>
                  <div className="crm-form-group">
                    <label htmlFor="companyName">Company Name *</label>
                    <input type="text" id="companyName" required placeholder="e.g. Acme Sales Group" />
                  </div>
                  <div className="crm-form-group">
                    <label htmlFor="workEmail">Work Email *</label>
                    <input type="email" id="workEmail" required placeholder="e.g. sales@acme.com" />
                  </div>
                  <div className="crm-form-group">
                    <label htmlFor="crmPlatform">CRM Platform</label>
                    <select id="crmPlatform">
                      <option value="salesforce">Salesforce Cloud</option>
                      <option value="hubspot">HubSpot Enterprise</option>
                      <option value="dynamics">Microsoft Dynamics CRM</option>
                      <option value="other">Other Platform</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary crm-submit-btn">
                    Schedule Free Session
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .crm-page-refactored {
          padding: 40px 0;
          background-color: #ffffff;
        }

        .crm-badge-pill {
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
        .crm-intro-section {
          max-width: 800px;
          margin-bottom: 60px;
          text-align: left;
        }

        .crm-main-heading {
          font-size: 2.1rem;
          font-weight: 600;
          color: var(--color-navy);
          margin-bottom: 20px;
          line-height: 1.25;
          letter-spacing: -0.01em;
        }

        .crm-intro-text {
          font-size: 1.0rem;
          line-height: 1.65;
          color: var(--color-text-secondary);
          margin: 0;
        }

        /* Sticky Spacer and Split Interactive Section */
        .crm-sticky-spacer {
          height: 1100px; /* Provides scrollable room for the sticky effect */
          position: relative;
          margin-bottom: 80px;
        }

        .crm-interactive-section {
          position: sticky;
          top: 140px; /* Sticks below GMMC header */
          height: 520px;
          display: flex;
          width: 100%;
          gap: 5%; /* 5% gap between image and text */
          align-items: center;
          background: #ffffff; /* ensure background is solid when sticking */
        }

        .crm-split-media-wrapper {
          position: absolute;
          left: 0;
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

        .crm-scroll-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transform: scale(1.1); /* starts slightly zoomed in */
          will-change: transform;
        }

        .crm-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(15, 23, 42, 0) 60%, rgba(15, 23, 42, 0.15) 100%);
          pointer-events: none;
        }

        .crm-split-content-wrapper {
          width: 35%; /* 35% content width + 60% image width + 5% gap = 100% total */
          margin-left: auto; /* Push content to the right side of the container */
          opacity: 0;
          transform: translateX(30px);
          z-index: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
          will-change: opacity, transform;
        }

        .crm-details-heading {
          font-size: 1.75rem;
          color: var(--color-navy);
          margin-bottom: 20px;
          line-height: 1.3;
          font-weight: 600;
        }

        .crm-details-text {
          font-size: 0.9rem;
          line-height: 1.65;
          color: var(--color-text-secondary);
          margin-bottom: 30px;
        }

        .crm-details-highlights {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .crm-highlight-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .crm-highlight-icon {
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

        .crm-highlight-info h4 {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-navy);
          margin-bottom: 4px;
        }

        .crm-highlight-info p {
          font-size: 0.85rem;
          line-height: 1.45;
          color: var(--color-text-secondary);
          margin: 0;
        }

        /* 3-Column Cards Section */
        .crm-cards-section {
          margin-bottom: 80px;
        }

        .crm-cards-header {
          margin-bottom: 48px;
          text-align: left;
        }

        .crm-section-tag {
          font-family: var(--font-heading);
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-blue);
          display: inline-block;
          margin-bottom: 12px;
        }

        .crm-section-title {
          font-size: 2.1rem;
          font-weight: 600;
          color: var(--color-navy);
          margin: 0;
          letter-spacing: -0.01em;
        }

        .crm-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .crm-premium-card {
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

        .crm-premium-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 36px rgba(15, 23, 42, 0.06);
          border-color: rgba(30, 136, 229, 0.3);
        }

        .crm-card-glow {
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

        .crm-premium-card:hover .crm-card-glow {
          opacity: 1;
        }

        .crm-card-icon-box {
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

        .crm-premium-card:hover .crm-card-icon-box {
          background: var(--color-blue);
          color: #ffffff;
          transform: scale(1.05);
          box-shadow: 0 6px 16px rgba(30, 136, 229, 0.25);
        }

        .crm-premium-card h3 {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-navy);
          margin-bottom: 12px;
        }

        .crm-premium-card p {
          font-size: 0.86rem;
          color: var(--color-text-secondary);
          line-height: 1.55;
          margin-bottom: 24px;
          flex-grow: 1;
        }

        .crm-tech-badges {
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
        .crm-demo-section {
          background-color: var(--color-soft-bg);
          border: 1px solid var(--color-border);
          border-radius: 16px;
          padding: 50px 40px;
          margin-bottom: 20px;
        }

        .crm-demo-container {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 50px;
          align-items: center;
        }

        .crm-demo-heading {
          font-size: 1.95rem;
          color: var(--color-navy);
          font-weight: 600;
          margin-bottom: 20px;
        }

        .crm-demo-text {
          font-size: 0.92rem;
          line-height: 1.6;
          color: var(--color-text-secondary);
          margin-bottom: 24px;
        }

        .crm-demo-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .crm-demo-list li {
          display: flex;
          gap: 12px;
          font-size: 0.88rem;
          color: var(--color-text-primary);
          align-items: center;
        }

        .crm-demo-list li svg {
          color: var(--color-blue);
          flex-shrink: 0;
        }

        .crm-form-box {
          background: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: 12px;
          padding: 32px;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.03);
        }

        .crm-inquiry-form h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 20px;
          color: var(--color-navy);
          text-align: center;
          margin-top: 0;
        }

        .crm-form-group {
          margin-bottom: 16px;
        }

        .crm-form-group label {
          display: block;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.85rem;
          color: var(--color-text-primary);
          margin-bottom: 6px;
        }

        .crm-form-group input, 
        .crm-form-group select {
          width: 100%;
          padding: 11px 14px;
          border-radius: 6px;
          border: 1px solid var(--color-border);
          background-color: var(--color-white);
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: var(--color-text-primary);
        }

        .crm-form-group input:focus, 
        .crm-form-group select:focus {
          border-color: var(--color-blue);
          outline: none;
        }

        .crm-submit-btn {
          width: 100%;
          padding: 12px 20px;
          border-radius: 6px;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.92rem;
          margin-top: 10px;
        }

        .crm-form-success-message {
          text-align: center;
          padding: 40px 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .crm-form-success-message h3 {
          color: var(--color-navy);
          margin: 0;
        }

        .crm-form-success-message p {
          color: var(--color-text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .crm-sticky-spacer {
            height: auto !important;
            margin-bottom: 40px;
          }
          .crm-interactive-section {
            position: relative !important;
            top: 0 !important;
            height: auto !important;
            flex-direction: column;
            gap: 40px;
          }
          .crm-split-media-wrapper {
            position: relative;
            width: 100% !important;
            height: 360px;
            border-radius: 12px !important;
          }
          .crm-split-content-wrapper {
            width: 100%;
            opacity: 1 !important;
            transform: none !important;
            margin-left: 0;
          }
          .crm-cards-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .crm-demo-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </div>
  );
}
