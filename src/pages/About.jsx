export default function About() {
  const values = [
    {
      title: 'Quality-First Engineering',
      description: 'We believe code is the foundation of digital trust. Our engineering practices are rigorous, test-driven, and optimized for long-term scalability.'
    },
    {
      title: 'Customer Centricity',
      description: 'We align ourselves completely with our clients’ business outcomes, turning complex technical specifications into real commercial value.'
    },
    {
      title: 'Transparent Operations',
      description: 'We operate under full transparency, offering detailed sprint metrics, open source-level code checkouts, and clear SLA parameters.'
    },
    {
      title: 'Continuous Enablement',
      description: 'Technology never stops, and neither do we. We dedicate resources to constantly training our engineering talent and upskilling client teams.'
    }
  ];

  const milestones = [
    { year: '2020', title: 'Genius Minds Founded', desc: 'Launched with a core mission: making enterprise code simpler, robust, and smart.' },
    { year: '2022', title: 'ServiceNow Partnership', desc: 'Formally integrated ServiceNow consulting workflows, expanding ITSM services globally.' },
    { year: '2024', title: 'BPO Launch', desc: 'Introduced ITIL-driven Helpdesk & customer experience operations to support growing international clients.' },
    { year: '2026', title: 'Smart Solutions Era', desc: 'Pivoted to focus heavily on automation, secure cloud architecture, and framework governance.' }
  ];

  return (
    <div className="about-page">
      {/* Subpage Hero (Dark Digital Block) */}
      <section className="subpage-hero">
        <div className="container">
          <span className="section-tag">Who We Are</span>
          <h1 className="subpage-title">Making Code Work For Your Business</h1>
          <p className="subpage-lead">
            Genius Minds builds smart solutions designed to future-proof operations and bridge the gap between technical complexity and business outcomes.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section (White Block) */}
      <section className="section section-white">
        <div className="container grid-2 vision-layout">
          <div className="vision-block-card">
            <h2 className="about-section-heading">Our Mission</h2>
            <p className="about-text font-lg">
              To deliver world-class digital, software development, and workflow automation services that allow companies to automate operations, manage resources, and deliver exceptional experiences.
            </p>
          </div>
          <div className="vision-block-card">
            <h2 className="about-section-heading">Our Vision</h2>
            <p className="about-text font-lg">
              To be the premier global consulting partner recognized for engineering excellence, ITIL-governed operations, and the continuous upskilling of the digital workforce.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section (Dark Block) */}
      <section className="section section-dark-block">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-tag">Pillars</span>
            <h2 className="section-title">Our Core Values</h2>
          </div>

          <div className="grid-4">
            {values.map((val, idx) => (
              <div key={idx} className="value-card">
                <div className="value-number">0{idx + 1}</div>
                <h3>{val.title}</h3>
                <p>{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline / Journey Section (White Block) */}
      <section className="section section-white">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-tag">Timeline</span>
            <h2 className="section-title">Our Journey</h2>
          </div>

          <div className="timeline-container">
            <div className="timeline-line"></div>
            {milestones.map((milestone, idx) => (
              <div key={idx} className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <div className="timeline-year">{milestone.year}</div>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance & Delivery Model (Dark Block) */}
      <section className="section section-dark-block governance-section">
        <div className="container text-center">
          <span className="section-tag">Governance</span>
          <h2 className="section-title" style={{ marginBottom: '30px' }}>ITIL & Agile Framework Delivery</h2>
          <p className="governance-lead" style={{ maxWidth: '800px', margin: '0 auto 50px', fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.7' }}>
            All operations at Genius Minds are governed under ITIL v4 standards and managed through structured Agile sprints. This double-layer framework guarantees that while we move fast and write clean code, we maintain full compliance, clear incident containment, and robust system stability.
          </p>
          <div className="governance-metrics-grid" style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <div className="gov-metric-box">
              <span className="gov-metric-num">99.9%</span>
              <span className="gov-metric-lbl">SLA Compliance</span>
            </div>
            <div className="gov-metric-box">
              <span className="gov-metric-num">100%</span>
              <span className="gov-metric-lbl">ITIL v4 Certified Leads</span>
            </div>
            <div className="gov-metric-box">
              <span className="gov-metric-num">4.8/5</span>
              <span className="gov-metric-lbl">Client Satisfaction Rating</span>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .vision-layout {
          gap: 60px;
        }

        .vision-block-card {
          border: 1px solid var(--color-border);
          padding: 40px;
          border-radius: 0px;
          background-color: var(--color-primary-bg);
          box-shadow: var(--shadow-sm);
        }

        .about-section-heading {
          font-size: 1.85rem;
          color: var(--color-navy);
          margin-bottom: 20px;
          position: relative;
        }

        .about-section-heading::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 40px;
          height: 3px;
          background-color: var(--color-blue);
        }

        .about-text {
          color: var(--color-text-secondary);
          line-height: 1.7;
        }

        .font-lg {
          font-size: 1.1rem;
        }

        .value-card {
          background-color: rgba(255, 255, 255, 0.02);
          padding: 30px;
          border-radius: 0px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          position: relative;
          overflow: hidden;
          transition: all var(--transition-normal);
        }

        .value-card:hover {
          background-color: rgba(255, 255, 255, 0.04);
          border-color: var(--color-blue);
        }

        .value-number {
          font-size: 3rem;
          font-weight: 800;
          color: rgba(30, 136, 229, 0.15);
          position: absolute;
          top: 10px;
          right: 20px;
          line-height: 1;
        }

        .value-card h3 {
          font-size: 1.15rem;
          margin-bottom: 14px;
          color: #ffffff;
        }

        .value-card p {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
        }

        /* Timeline styling */
        .timeline-container {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          padding: 40px 0;
        }

        .timeline-line {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 3px;
          background-color: var(--color-border);
          transform: translateX(-50%);
        }

        .timeline-item {
          display: flex;
          width: 50%;
          position: relative;
          margin-bottom: 40px;
        }

        .timeline-item.left {
          justify-content: flex-end;
          padding-right: 45px;
          margin-left: 0;
        }

        .timeline-item.right {
          justify-content: flex-start;
          padding-left: 45px;
          margin-left: 50%;
        }

        .timeline-dot {
          position: absolute;
          width: 14px;
          height: 14px;
          background-color: var(--color-blue);
          border: 3px solid var(--color-primary-bg);
          z-index: 2;
          transform: rotate(45deg);
        }

        .timeline-item.left .timeline-dot {
          right: -7px;
          top: 25px;
        }

        .timeline-item.right .timeline-dot {
          left: -7px;
          top: 25px;
        }

        .timeline-card {
          background-color: var(--color-soft-bg);
          border: 1px solid var(--color-border);
          border-radius: 0px;
          padding: 24px;
          box-shadow: var(--shadow-sm);
          max-width: 400px;
          position: relative;
        }

        .timeline-year {
          font-family: var(--font-heading);
          font-weight: 800;
          color: var(--color-blue);
          font-size: 1.25rem;
          margin-bottom: 8px;
        }

        .timeline-card h3 {
          font-size: 1.15rem;
          color: var(--color-navy);
          margin-bottom: 8px;
        }

        .timeline-card p {
          font-size: 0.9rem;
          color: var(--color-text-secondary);
        }

        /* Governance boxes */
        .gov-metric-box {
          background-color: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 24px 40px;
          border-radius: 0px;
          min-width: 220px;
          box-shadow: var(--shadow-sm);
        }

        .gov-metric-num {
          display: block;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 2.25rem;
          color: var(--color-blue);
          margin-bottom: 6px;
        }

        .gov-metric-lbl {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.6);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        @media (max-width: 768px) {
          .timeline-line {
            left: 20px;
          }
          .timeline-item {
            width: 100%;
            margin-left: 0 !important;
            padding-left: 45px !important;
            padding-right: 0 !important;
            justify-content: flex-start !important;
          }
          .timeline-dot {
            left: 13px !important;
          }
          .timeline-card {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
