export default function IndustriesPage() {
  const industries = [
    {
      title: 'Financial Services & Banking',
      tag: 'FINTECH',
      desc: 'We build secure, compliant transactional backbones and portal engines for banking, insurance, and investment firms. Our setups integrate SSO, secure API token gateways, and satisfy strict SOC 2 audit policies.',
      image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=600',
      bullets: ['SOC 2 and PCI-DSS compliance audits', 'Secure payment gateway API checkouts', 'Customer onboarding portal development']
    },
    {
      title: 'Retail & E-commerce',
      tag: 'RETAIL',
      desc: 'Scale your online transactional capacity with our custom Shopify/headless web apps, warehouse database synchronization, and ERP connectors. We ensure zero HMR downtime during peak seasonal traffic spikes.',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=600',
      bullets: ['Headless commerce store integrations', 'Real-time inventory database updates', 'Automated customer support routing']
    },
    {
      title: 'Healthcare & Life Sciences',
      tag: 'MEDTECH',
      desc: 'We construct secure HIPAA-compliant Patient Portals and coordinate medical database setups. Enable secure doctor-patient telemedicine coordination and automate appointment routing pipelines.',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=600',
      bullets: ['HIPAA governance & database encryption', 'Electronic Health Record (EHR) integrations', 'Telehealth video coordination links']
    },
    {
      title: 'Public Sector & Civic Services',
      tag: 'CIVIC',
      desc: 'Deliver modern civic platforms governed under ITIL v4 standards. We build public service portal catalogs and automate citizen request routing to help civic organizations coordinate operations.',
      image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=600',
      bullets: ['ITIL-governed civic service workflows', 'Secure document indexing directories', 'Citizen request portal automation']
    }
  ];

  return (
    <div className="industries-page-view">
      {/* Subpage Hero (Dark Digital Block) */}
      <section className="subpage-hero">
        <div className="container">
          <span className="section-tag">Sectors</span>
          <h1 className="subpage-title">Industries We Serve</h1>
          <p className="subpage-lead">
            We deliver domain-specific technical consulting and custom software platforms that resolve operational bottlenecks.
          </p>
        </div>
      </section>

      {/* Industries Listing (Alternating Blocks) */}
      <div className="industries-list">
        {industries.map((ind, idx) => (
          <section 
            key={idx} 
            className={`section ${idx % 2 === 0 ? 'section-white' : 'section-dark-block'} industry-block`}
          >
            <div className="container grid-2 industry-layout">
              {/* Text column */}
              <div className={`industry-text-col ${idx % 2 !== 0 ? 'order-2' : ''}`}>
                <span className="section-tag">{ind.tag}</span>
                <h2>{ind.title}</h2>
                <p className="industry-desc">{ind.desc}</p>
                
                <div className="industry-bullets-header">Service Focus:</div>
                <ul className="industry-bullets">
                  {ind.bullets.map((bullet, bidx) => (
                    <li key={bidx}>
                      <span className="bullet-tick">→</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image column */}
              <div className="industry-image-col">
                <div className="industry-image-wrapper">
                  <img src={ind.image} alt={ind.title} className="industry-img" />
                  <div className="industry-img-overlay"></div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <style>{`
        .industry-layout {
          align-items: center;
          gap: 60px;
        }

        .order-2 {
          order: 2;
        }

        .industry-desc {
          font-size: 1.05rem;
          line-height: 1.65;
          margin-top: 16px;
          margin-bottom: 24px;
        }

        .section-white .industry-desc {
          color: var(--color-text-secondary);
        }

        .section-dark-block .industry-desc {
          color: rgba(255, 255, 255, 0.7);
        }

        .industry-bullets-header {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 12px;
        }

        .industry-bullets {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .industry-bullets li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.95rem;
        }

        .bullet-tick {
          color: var(--color-blue);
          font-weight: 900;
        }

        /* Image frame styling */
        .industry-image-wrapper {
          position: relative;
          width: 100%;
          height: 380px;
          border: 1.5px solid var(--color-border);
          overflow: hidden;
        }

        .section-dark-block .industry-image-wrapper {
          border-color: rgba(255, 255, 255, 0.08);
        }

        .industry-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }

        .industry-image-col:hover .industry-img {
          transform: scale(1.03);
        }

        .industry-img-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(rgba(30, 136, 229, 0.04), rgba(0, 0, 0, 0.35));
        }

        @media (max-width: 900px) {
          .industry-layout {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .order-2 {
            order: 0;
          }
          .industry-image-wrapper {
            height: 260px;
          }
        }
      `}</style>
    </div>
  );
}
