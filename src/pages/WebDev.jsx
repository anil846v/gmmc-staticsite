import { useState, useEffect } from 'react';

export default function WebDev({ hideHero = false }) {
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  useEffect(() => {
    if (!hideHero) {
      document.title = 'Custom Web Application & React Development | GMMC';
      window.scrollTo(0, 0);
    }
  }, [hideHero]);

  const modules = [
    {
      title: 'Next.js & Edge Config',
      tagline: 'Blazing Load Speeds',
      desc: 'Build serverless SSR and SSG web applications running on global CDN edges to minimize network hops and achieve high performance.',
      bullets: ['Serverless Server-Side Rendering (SSR)', 'Incremental Static Regeneration (ISR)', 'Vercel CDN edge routing setups']
    },
    {
      title: 'Decoupled Content Hubs',
      tagline: 'Headless CMS Integration',
      desc: 'Connect your custom React frontend to headless CMS content systems. Empower marketing teams to perform updates without developer cycles.',
      bullets: ['Contentful, Strapi, and Sanity APIs', 'Structured content schema design', 'Automated build triggers on content save']
    },
    {
      title: 'SEO & PageSpeed',
      tagline: 'Core Web Vitals Focus',
      desc: 'Implement clean W3C semantic layouts, leverage image optimization utilities, and bundle size control techniques to hit high PageSpeed metrics.',
      bullets: ['100% W3C HTML validity compliance', 'Optimized WebP/AVIF dynamic images', 'LCP (Largest Contentful Paint) under 1s']
    },
    {
      title: 'Reactive State Flow',
      tagline: 'Robust Global State',
      desc: 'Establish clean client state flows using global state management frameworks. Prevent unwanted component re-renders for smooth UX.',
      bullets: ['Zustand and Redux Toolkit patterns', 'Local state and hook encapsulation', 'Cache synchronization and polling intervals']
    }
  ];

  const phases = [
    { num: '01', title: 'Discover', desc: 'Identify target user experience, list browser support requirements, and detail API payloads.' },
    { num: '02', title: 'Design', desc: 'Create Figma wireframes, draft custom component tokens, and plan global states.' },
    { num: '03', title: 'Implement', desc: 'Code responsive components in React / Next.js with complete CSS design system rules.' },
    { num: '04', title: 'Deploy', desc: 'Deploy builds to staging CDN instances, run automated browser tests, and go live.' },
    { num: '05', title: 'Optimize', desc: 'Analyze Core Web Vitals telemetry, tune caching headers, and compress bundle assets.' }
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  return (
    <div className="webdev-page">
      {/* Page Hero */}
      {!hideHero && (
        <section className="subpage-hero">
          <div className="container">
            <div className="webdev-badge-pill">Web Architecture Specialist</div>
            <h1 className="subpage-title">Custom Web Applications</h1>
            <p className="subpage-lead">
              Build fast, accessible, and high-converting digital applications leveraging modern React frameworks, headless CMS platforms, and optimized code delivery pipelines.
            </p>
          </div>
        </section>
      )}

      {/* Modules Capabilities */}
      <section className="section section-white">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-tag">Platform Capabilities</span>
            <h2 className="section-title">Professional React Engineering</h2>
          </div>

          <div className="grid-2">
            {modules.map((mod, idx) => (
              <div key={idx} className="capability-card">
                <span className="cap-tag">{mod.tagline}</span>
                <h3>{mod.title}</h3>
                <p>{mod.desc}</p>
                <div className="cap-bullet-title">Core Offerings:</div>
                <ul className="cap-bullets">
                  {mod.bullets.map((bullet, bidx) => (
                    <li key={bidx}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifecycle Section */}
      <section className="section section-dark-block">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-tag">Methodology</span>
            <h2 className="section-title">Development Lifecycle</h2>
          </div>

          <div className="lifecycle-grid">
            {phases.map((phase, idx) => (
              <div key={idx} className="lifecycle-step">
                <div className="lifecycle-number">{phase.num}</div>
                <h4>{phase.title}</h4>
                <p>{phase.desc}</p>
                {idx < phases.length - 1 && <div className="lifecycle-arrow">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Request Form */}
      <section className="section section-white">
        <div className="container health-check-container">
          <div className="grid-2 align-center">
            <div>
              <span className="section-tag">Performance</span>
              <h2 className="about-section-heading">Book a Free PageSpeed & W3C Audit</h2>
              <p className="health-check-text" style={{ color: 'var(--color-text-secondary)', marginTop: '20px', marginBottom: '24px', fontSize: '1.05rem', lineHeight: '1.6' }}>
                Is your site loading slowly on mobile devices? Are you losing potential signups due to bad Core Web Vitals scores? Schedule a free analysis of your application bundles, DOM size, and accessibility index.
              </p>
              <ul className="health-check-list" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ display: 'flex', gap: '10px', fontSize: '0.95rem', color: 'var(--color-text-primary)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="20 6 9 17 4 12" /></svg>
                  <span>Evaluate bundle size, tree-shaking, and code split areas</span>
                </li>
                <li style={{ display: 'flex', gap: '10px', fontSize: '0.95rem', color: 'var(--color-text-primary)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="20 6 9 17 4 12" /></svg>
                  <span>Analyze contrast issues and W3C accessibility compliance</span>
                </li>
                <li style={{ display: 'flex', gap: '10px', fontSize: '0.95rem', color: 'var(--color-text-primary)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="20 6 9 17 4 12" /></svg>
                  <span>Deliver diagnostic report and optimization actions</span>
                </li>
              </ul>
            </div>

            <div className="health-form-box">
              {inquirySubmitted ? (
                <div className="form-success-message">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <h3>Request Received!</h3>
                  <p>A Web Performance Architect will contact you within 24 business hours to arrange the audit session.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="health-form">
                  <h3>Request Performance Audit</h3>
                  <div className="form-group">
                    <label htmlFor="companyName">Company Name *</label>
                    <input type="text" id="companyName" required placeholder="e.g. Acme Media" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="workEmail">Work Email *</label>
                    <input type="email" id="workEmail" required placeholder="e.g. build@acme.com" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="websiteUrl">Website URL *</label>
                    <input type="url" id="websiteUrl" required placeholder="https://acme.com" />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>
                    Schedule Free Session
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .webdev-badge-pill {
          display: inline-block;
          font-family: var(--font-heading);
          font-weight: 500;
          font-size: 0.75rem;
          color: #ffffff;
          background-color: var(--color-blue);
          padding: 6px 14px;
          border-radius: 0px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 15px;
        }

        .capability-card {
          background-color: var(--color-white);
          border: 1px solid var(--color-border);
          border-radius: 0px;
          padding: 35px;
          box-shadow: var(--shadow-sm);
          transition: all var(--transition-normal);
        }

        .capability-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: rgba(30, 136, 229, 0.25);
        }

        .cap-tag {
          font-family: var(--font-heading);
          font-weight: 500;
          color: var(--color-blue);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: block;
          margin-bottom: 8px;
        }

        .capability-card h3 {
          font-size: 1.35rem;
          color: var(--color-navy);
          margin-bottom: 12px;
        }

        .capability-card p {
          font-size: 0.95rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .cap-bullet-title {
          font-family: var(--font-heading);
          font-weight: 500;
          font-size: 0.85rem;
          color: var(--color-navy);
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .cap-bullets {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .cap-bullets li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          color: var(--color-text-primary);
        }

        .cap-bullets li svg {
          flex-shrink: 0;
        }

        /* Lifecycle grid */
        .lifecycle-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
          position: relative;
        }

        .lifecycle-step {
          background-color: rgba(255, 255, 255, 0.02);
          padding: 24px;
          border-radius: 0px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: var(--shadow-sm);
          text-align: center;
          position: relative;
        }

        .lifecycle-number {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 1.75rem;
          color: var(--color-blue);
          margin-bottom: 12px;
          opacity: 0.85;
        }

        .lifecycle-step h4 {
          font-size: 1.1rem;
          color: #ffffff;
          margin-bottom: 8px;
        }

        .lifecycle-step p {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.5;
        }

        .lifecycle-arrow {
          position: absolute;
          top: 50%;
          right: -15px;
          transform: translateY(-50%);
          font-size: 1.5rem;
          color: var(--color-blue);
          z-index: 5;
          pointer-events: none;
        }

        /* Health check form box */
        .health-form-box {
          background-color: var(--color-soft-bg);
          border: 1px solid var(--color-border);
          border-radius: 0px;
          padding: 30px;
          box-shadow: var(--shadow-sm);
        }

        .health-form h3 {
          font-size: 1.25rem;
          margin-bottom: 20px;
          color: var(--color-navy);
          text-align: center;
        }

        .form-group {
          margin-bottom: 16px;
        }

        .form-group label {
          display: block;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.85rem;
          color: var(--color-text-primary);
          margin-bottom: 6px;
        }

        .form-group input, 
        .form-group select {
          width: 100%;
          padding: 10px 14px;
          border-radius: 0px;
          border: 1px solid var(--color-border);
          background-color: var(--color-white);
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: var(--color-text-primary);
        }

        .form-group input:focus, 
        .form-group select:focus {
          border-color: var(--color-blue);
          outline: none;
        }

        .form-success-message {
          text-align: center;
          padding: 40px 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .form-success-message h3 {
          color: var(--color-navy);
          margin: 0;
        }

        .form-success-message p {
          color: var(--color-text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .lifecycle-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .lifecycle-arrow {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
