import { useState } from 'react';

export default function ServiceNow() {
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const modules = [
    {
      title: 'IT Service Management (ITSM)',
      tagline: 'Standardize & Automate IT Workflows',
      desc: 'We configure incident, problem, change, release, and request catalog management. Speed up resolution times and align IT delivery with business constraints.',
      bullets: ['Custom Service Catalog & Portal design', 'SLA definition & routing rule automation', 'Virtual Agent & AI search setups']
    },
    {
      title: 'IT Operations Management (ITOM)',
      tagline: 'Visibility & Health of Infrastructure',
      desc: 'Gain 100% visibility into your infrastructure. We configure Discovery and build a robust CMDB to maps business services to servers, databases, and APIs.',
      bullets: ['Automated CMDB Discovery schedules', 'Service Mapping & Event Management integration', 'Predictive AIOps alerting configurations']
    },
    {
      title: 'Security Operations (SecOps)',
      tagline: 'Respond to Vulnerabilities in Real-time',
      desc: 'Tie security tools directly to ServiceNow. We automate security incident response and vulnerability management processes to secure applications.',
      bullets: ['Vulnerability Response integrations (Tenable, Qualys)', 'Security Incident Response playbook automation', 'Threat Intelligence correlation mapping']
    },
    {
      title: 'CSM & HR Service Delivery',
      tagline: 'Deliver Outstanding Shared Experiences',
      desc: 'Extend digital workflow structures beyond IT. Automate employee onboarding/offboarding processes and scale external client support systems.',
      bullets: ['Employee Service Center portals', 'HR Lifecycle workflow automation', 'Omnichannel Customer Service Management (CSM)']
    }
  ];

  const phases = [
    { num: '01', title: 'Discover', desc: 'Assess current systems, licenses, CMDB state, and define clear business outcome targets.' },
    { num: '02', title: 'Design', desc: 'Draft architecture proposals, process maps, data schemas, and UI wireframes.' },
    { num: '03', title: 'Implement', desc: 'Execute configuration and custom scripting in sprint iterations with full QA checks.' },
    { num: '04', title: 'Run & Support', desc: 'Deliver administrator support, handle enhancements, and maintain incident operations.' },
    { num: '05', title: 'Optimize', desc: 'Prepare platform upgrades (e.g., Washington/Xanadu) and automate manual operations.' }
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  return (
    <div className="servicenow-page">
      {/* Page Hero (Dark Digital Block) */}
      <section className="subpage-hero">
        <div className="container">
          <div className="servicenow-badge-pill">Certified ServiceNow Specialist</div>
          <h1 className="subpage-title">Enterprise ServiceNow Consulting</h1>
          <p className="subpage-lead">
            We help you implement, configure, and maintain the ServiceNow platform under ITIL v4 standards to drive automation and maximize digital returns.
          </p>
        </div>
      </section>

      {/* Modules Capabilities (White Block) */}
      <section className="section section-white">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-tag">Platform Capabilities</span>
            <h2 className="section-title">Where We Help You Succeed</h2>
          </div>

          <div className="grid-2">
            {modules.map((mod, idx) => (
              <div key={idx} className="capability-card">
                <span className="cap-tag">{mod.tagline}</span>
                <h3>{mod.title}</h3>
                <p>{mod.desc}</p>
                <div className="cap-bullet-title">Key Offerings:</div>
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

      {/* Lifecycle Section (Dark Block) */}
      <section className="section section-dark-block">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-tag">Methodology</span>
            <h2 className="section-title">Implementation Lifecycle</h2>
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

      {/* Direct Health Check CTA (White Block) */}
      <section className="section section-white">
        <div className="container health-check-container">
          <div className="grid-2 align-center">
            
            {/* Info */}
            <div>
              <span className="section-tag">Assessment</span>
              <h2 className="about-section-heading">Book a Free ServiceNow Health Check</h2>
              <p className="health-check-text" style={{ color: 'var(--color-text-secondary)', marginTop: '20px', marginBottom: '24px', fontSize: '1.05rem', lineHeight: '1.6' }}>
                Is your CMDB accurate? Are your users complaining about slow portal loading? Request a free, 1-hour assessment with a certified ServiceNow System Architect. We will analyze your system logs, configuration scripts, and upgrade health to deliver a recommendations dashboard.
              </p>
              <ul className="health-check-list" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ display: 'flex', gap: '10px', fontSize: '0.95rem', color: 'var(--color-text-primary)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="20 6 9 17 4 12" /></svg>
                  <span>Evaluate CMDB and Discovery schedule health</span>
                </li>
                <li style={{ display: 'flex', gap: '10px', fontSize: '0.95rem', color: 'var(--color-text-primary)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="20 6 9 17 4 12" /></svg>
                  <span>Check update set overrides and custom client script warnings</span>
                </li>
                <li style={{ display: 'flex', gap: '10px', fontSize: '0.95rem', color: 'var(--color-text-primary)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="20 6 9 17 4 12" /></svg>
                  <span>Analyze licensing and platform optimization options</span>
                </li>
              </ul>
            </div>

            {/* Simple Inline Form */}
            <div className="health-form-box">
              {inquirySubmitted ? (
                <div className="form-success-message">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <h3>Request Submitted!</h3>
                  <p>A ServiceNow Architect will reach out to you within 24 business hours to schedule your evaluation.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="health-form">
                  <h3>Request Health Check</h3>
                  <div className="form-group">
                    <label htmlFor="companyName">Company Name *</label>
                    <input type="text" id="companyName" required placeholder="e.g. Acme Corp" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="workEmail">Work Email *</label>
                    <input type="email" id="workEmail" required placeholder="e.g. you@acme.com" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="platformState">Current ServiceNow Version</label>
                    <select id="platformState">
                      <option value="utah">Utah</option>
                      <option value="washington">Washington DC</option>
                      <option value="xanadu">Xanadu</option>
                      <option value="earlier">Earlier / Not Sure</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: 100 + '%', marginTop: '10px' }}>
                    Schedule Free Session
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      <style>{`
        .servicenow-badge-pill {
          display: inline-block;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.75rem;
          color: #ffffff;
          background-color: #81B5A2; /* ServiceNow green */
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
          font-weight: 700;
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
          font-weight: 700;
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
          font-weight: 800;
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
