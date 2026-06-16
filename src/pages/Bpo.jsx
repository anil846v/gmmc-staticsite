import { useEffect } from 'react';

export default function Bpo({ hideHero = false }) {
  useEffect(() => {
    if (!hideHero) {
      document.title = 'Global BPO & Enabled Services | GMMC';
      window.scrollTo(0, 0);
    }
  }, [hideHero]);
  const offerings = [
    {
      title: 'Customer Experience & Helpdesk (CX)',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          <path d="M9 10h.01M15 10h.01M12 14s-1-1.5-2-1.5-2 1.5-2 1.5"/>
        </svg>
      ),
      desc: '24/7/365 multi-channel technical support (voice, email, web chat) governed under rigorous service level agreements (SLAs). We act as an extension of your customer success organization.',
      bullets: ['L1 & L2 Technical Support Helpdesk', 'Ticketing workflow management', 'SLA compliance & escalation tracking']
    },
    {
      title: 'Back-Office Data Operations',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10 9 9 9 8 9"/>
        </svg>
      ),
      desc: 'High-volume data processing, document validation, and information categorization. We automate inputs where possible and apply strict quality checks to administrative tasks.',
      bullets: ['Data scrubbing & database maintenance', 'Order validation & billing reconciliation', 'Document indexing & categorization']
    },
    {
      title: 'IT-Enabled Support Services (ITES)',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
          <line x1="6" y1="6" x2="6.01" y2="6"/>
          <line x1="6" y1="18" x2="6.01" y2="18"/>
        </svg>
      ),
      desc: 'Proactive network, firewall, and platform monitoring operations. We maintain system up-times by validating logs and escalating incidents immediately under structured playbooks.',
      bullets: ['24/7 Infrastructure alert monitoring', 'Active status verification checks', 'Incident cataloging & routing']
    }
  ];

  const rules = [
    { title: 'ISO 27001 Alignment', desc: 'All agent terminals, network routers, and data storage workflows align with ISO 27001 information security guidelines.' },
    { title: 'Strict SLA Metrics', desc: 'We maintain a 98% First Contact Resolution (FCR) target and under 30-second average speed of answer (ASA) across priority queues.' },
    { title: 'Continuous Quality Audits', desc: 'Weekly quality assurance call and script evaluations conducted by our dedicated operations managers.' }
  ];

  return (
    <div className="bpo-page">
      {/* Page Hero (Dark Digital Block) */}
      {!hideHero && (
        <section className="subpage-hero">
          <div className="container">
            <span className="section-tag">Operations</span>
            <h1 className="subpage-title">Global BPO & Enabled Services</h1>
            <p className="subpage-lead">
              Optimize processes, scale customer support, and reduce operational overhead with our ITIL-governed outsourcing models.
            </p>
          </div>
        </section>
      )}

      {/* Offerings Details (White Block) */}
      <section className="section section-white">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-tag">Offerings</span>
            <h2 className="section-title">Operations Outsourcing Services</h2>
          </div>

          <div className="bpo-grid" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {offerings.map((offering, idx) => (
              <div key={idx} className="bpo-row-card">
                <div className="bpo-card-icon-box">
                  {offering.icon}
                </div>
                <div className="bpo-card-content-box">
                  <h3>{offering.title}</h3>
                  <p>{offering.desc}</p>
                  <div className="bpo-bullet-title">Key Capabilities:</div>
                  <ul className="bpo-bullets-list">
                    {offering.bullets.map((bullet, bidx) => (
                      <li key={bidx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance (Dark Block) */}
      <section className="section section-dark-block">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-tag">Governance</span>
            <h2 className="section-title">Compliance & Quality Control</h2>
          </div>

          <div className="grid-3">
            {rules.map((rule, idx) => (
              <div key={idx} className="rule-card">
                <h4>{rule.title}</h4>
                <p>{rule.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .bpo-row-card {
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

        .bpo-row-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
          border-color: rgba(30, 136, 229, 0.25);
        }

        .bpo-card-icon-box {
          width: 80px;
          height: 80px;
          border-radius: 0px;
          background-color: rgba(30, 136, 229, 0.08);
          color: var(--color-blue);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bpo-card-content-box h3 {
          font-size: 1.4rem;
          color: var(--color-navy);
          margin-bottom: 12px;
        }

        .bpo-card-content-box p {
          color: var(--color-text-secondary);
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .bpo-bullet-title {
          font-family: var(--font-heading);
          font-weight: 500;
          font-size: 0.85rem;
          color: var(--color-navy);
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .bpo-bullets-list {
          list-style: none;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .bpo-bullets-list li {
          font-size: 0.9rem;
          color: var(--color-text-primary);
          padding-left: 16px;
          position: relative;
        }

        .bpo-bullets-list li::before {
          content: '✓';
          color: var(--color-blue);
          font-weight: 600;
          position: absolute;
          left: 0;
        }

        .rule-card {
          background-color: rgba(255, 255, 255, 0.02);
          padding: 30px;
          border-radius: 0px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: var(--shadow-sm);
        }

        .rule-card h4 {
          font-size: 1.15rem;
          color: #ffffff;
          margin-bottom: 12px;
          position: relative;
          padding-bottom: 8px;
        }

        .rule-card h4::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 30px;
          height: 2px;
          background-color: var(--color-blue);
        }

        .rule-card p {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          margin-top: 12px;
        }

        @media (max-width: 900px) {
          .bpo-row-card {
            grid-template-columns: 1fr;
            text-align: center;
            justify-items: center;
          }
          .bpo-bullets-list {
            grid-template-columns: 1fr;
            text-align: left;
          }
        }
      `}</style>
    </div>
  );
}
