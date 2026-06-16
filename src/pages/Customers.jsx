export default function Customers() {
  const caseStudies = [
    {
      title: 'Enterprise ServiceNow  Automation & SLA Optimization',
      client: 'Global Telecommunications Provider',
      desc: 'Re-architected and automated global IT Service management () workflows and configuration databases (CMDB), consolidating operational silos and driving SLA response compliance.',
      bullets: [
        'Consolidated 12 legacy service desks into a single automated  platform',
        'Enabled real-time discovery schedules and 99.9% CMDB asset accuracy',
        'Achieved a 40% reduction in average ticket resolution times'
      ],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="9" y1="9" x2="15" y2="9"></line>
          <line x1="9" y1="15" x2="15" y2="15"></line>
          <line x1="9" y1="12" x2="15" y2="12"></line>
        </svg>
      )
    },
    {
      title: 'Custom Wealth Management SaaS Portal with Multi-Tenant Architecture',
      client: 'Leading Retail Banking Group',
      desc: 'Designed and engineered a high-performance, multi-tenant SaaS application managing customer telemetry and billing APIs, running on secure cloud infrastructure.',
      bullets: [
        'Engineered secure data isolation with SSO and Identity Provider integrations',
        'Optimized system capacity to support 5M+ active customer accounts',
        'Reduced wealth portal latency to under 100ms for real-time transactions'
      ],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    {
      title: '24/7 Managed NOC Alert Monitoring & Global Tech Helpdesk Support',
      client: 'Fortune 500 Logistics Corporation',
      desc: 'Provisioned L1-L3 technical support desks and network operations monitoring (NOC) systems to manage platform up-times, incident cataloging, and security audits.',
      bullets: [
        'Set up a 24/7/365 active NOC monitoring center for critical server loads',
        'Maintained a 98% First Contact Resolution (FCR) rate across channels',
        'Aligned all data handling playbooks with strict ISO 27001 security standards'
      ],
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    }
  ];

  const testimonials = [
    {
      quote: "Their certified ServiceNow team completely transformed our IT operations. The delivery was fast, structured, and ITIL-governed. Best-in-class execution.",
      author: "Chief Information Officer",
      company: "Telecom Partner Network"
    },
    {
      quote: "We achieved 24/7 support readiness in under 30 days. Their managed helpdesk services are top-rated and highly secure.",
      author: "Vice President of Infrastructure",
      company: "Global Retail Holdings"
    },
    {
      quote: "The custom SaaS Wealth portal they developed was clean, highly performant, and scales seamlessly with our growing user base.",
      author: "Director of Product Management",
      company: "FinTech Platform Inc."
    }
  ];

  return (
    <div className="customers-page">
      {/* Page Hero (Dark Digital Block) */}
      <section className="subpage-hero">
        <div className="container">
          <span className="section-tag">Success Stories</span>
          <h1 className="subpage-title">Our Enterprise Customers</h1>
          <p className="subpage-lead">
            Discover how we partner with leading global organizations to deliver top-rated digital solutions, custom SaaS platforms, and best-in-class ServiceNow architectures.
          </p>
        </div>
      </section>

      {/* Case Studies (White Block) */}
      <section className="section section-white">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-tag">Case Studies</span>
            <h2 className="section-title">Client Success Stories</h2>
          </div>

          <div className="customers-grid" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {caseStudies.map((study, idx) => (
              <div key={idx} className="customers-row-card">
                <div className="customers-card-icon-box">
                  {study.icon}
                </div>
                <div className="customers-card-content-box">
                  <span className="customers-client-tag">{study.client.toUpperCase()}</span>
                  <h3>{study.title}</h3>
                  <p>{study.desc}</p>
                  <div className="customers-bullet-title">Impact Highlights:</div>
                  <ul className="customers-bullets-list">
                    {study.bullets.map((bullet, bidx) => (
                      <li key={bidx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials (Dark Block) */}
      <section className="section section-dark-block">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-tag">Feedback</span>
            <h2 className="section-title">What Our Customers Say</h2>
          </div>

          <div className="grid-3">
            {testimonials.map((test, idx) => (
              <div key={idx} className="testimonial-card">
                <span className="quote-mark">“</span>
                <p className="testimonial-quote">{test.quote}</p>
                <div className="testimonial-meta">
                  <h4>{test.author}</h4>
                  <span>{test.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .customers-row-card {
          background-color: var(--color-white);
          border: 1px solid var(--color-border);
          border-radius: 0px;
          padding: 40px;
          box-shadow: var(--shadow-sm);
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 30px;
          transition: all var(--transition-normal);
        }

        .customers-row-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
          border-color: rgba(30, 136, 229, 0.25);
        }

        .customers-card-icon-box {
          width: 80px;
          height: 80px;
          border-radius: 0px;
          background-color: rgba(30, 136, 229, 0.08);
          color: var(--color-blue);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(30, 136, 229, 0.12);
        }

        .customers-client-tag {
          font-family: var(--font-heading);
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--color-blue);
          letter-spacing: 0.1em;
          display: inline-block;
          margin-bottom: 8px;
        }

        .customers-card-content-box h3 {
          font-size: 1.4rem;
          color: var(--color-navy);
          margin-bottom: 12px;
          font-weight: 600;
        }

        .customers-card-content-box p {
          color: var(--color-text-secondary);
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .customers-bullet-title {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.85rem;
          color: var(--color-navy);
          text-transform: uppercase;
          margin-bottom: 10px;
          letter-spacing: 0.05em;
        }

        .customers-bullets-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .customers-bullets-list li {
          font-size: 0.9rem;
          color: var(--color-text-primary);
          padding-left: 20px;
          position: relative;
        }

        .customers-bullets-list li::before {
          content: '✓';
          color: var(--color-blue);
          font-weight: 600;
          position: absolute;
          left: 0;
        }

        .testimonial-card {
          background-color: rgba(255, 255, 255, 0.02);
          padding: 36px;
          border-radius: 0px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          position: relative;
          transition: all var(--transition-normal);
        }

        .testimonial-card:hover {
          background-color: rgba(255, 255, 255, 0.03);
          border-color: rgba(30, 136, 229, 0.25);
          transform: translateY(-2px);
        }

        .quote-mark {
          font-size: 4rem;
          color: rgba(30, 136, 229, 0.2);
          font-family: serif;
          line-height: 1;
          position: absolute;
          top: 10px;
          left: 20px;
        }

        .testimonial-quote {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.65;
          margin-bottom: 24px;
          position: relative;
          z-index: 1;
        }

        .testimonial-meta h4 {
          font-size: 0.95rem;
          color: #ffffff;
          margin-bottom: 2px;
          font-weight: 600;
        }

        .testimonial-meta span {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.45);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        @media (max-width: 900px) {
          .customers-row-card {
            grid-template-columns: 1fr;
            text-align: center;
            justify-items: center;
          }
        }
      `}</style>
    </div>
  );
}
