import { useEffect, useRef } from 'react';
import servicenowImg from '../assets/servicenow1.png';
import itilImg from '../assets/itil.png';
import servicenowBg from '../assets/servicenowbackground.png';

export default function UpskillTeam({ setCurrentTab }) {
  const handleBtnClick = () => {
    setCurrentTab('trainings');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const features = [
    {
      title: 'Expert-Led Training',
      description: 'Learn from certified practitioners and platform experts with real-world delivery experience.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 11 11 13 15 9" />
        </svg>
      ),
    },
    {
      title: 'Role-Based Learning',
      description: 'Targeted curriculum aligned to your team\'s specific roles, responsibilities, and platform goals.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="5" r="3" />
          <circle cx="6" cy="19" r="3" />
          <circle cx="18" cy="19" r="3" />
          <path d="M12 8v8" />
          <path d="M6 16h12" />
        </svg>
      ),
    },
    {
      title: 'Accelerate Outcomes',
      description: 'Reduce time-to-value with proven delivery frameworks, hands-on labs, and real-world scenarios.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      ),
    },
    {
      title: 'Stronger Independence',
      description: 'Empower your teams to operate, optimize, and innovate with confidence long after training ends.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
  ];

  const curriculum = [
    {
      text: 'ServiceNow Administrator (CSA) enablement',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      text: 'ServiceNow Developer &  Implementation cohorts',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /><line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      ),
    },
    {
      text: 'ITIL 4 Framework best-practice certification prep',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      ),
    },
    {
      text: 'Agile Sprint methodologies and release controls',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><path d="M6 9a9 9 0 0 1 9 9" />
        </svg>
      ),
    },
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const viewH = window.innerHeight;
      const progress = (viewH - rect.top) / (viewH + rect.height);
      // Shift background position-y for parallax
      section.style.backgroundPositionY = `${(progress - 0.5) * -100}px`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="section upskill-section">
      <div className="upskill-bg-overlay"></div>
      <div className="container">

        {/* ── Header + cert logos row ── */}
        <div className="upskill-top-row">

          {/* Left: heading block */}
          <div className="upskill-header">
            <span className="section-tag">ENABLEMENT</span>
            <h2 className="section-title">
              Upskill Your Team for the{' '}
              <span >Digital Workforce</span>{' '}
              of Tomorrow
            </h2>
            <p className="upskill-lead">
              Premier, customized training cohorts tailored to your platform configurations, release schedules, and operational playbooks. Build skills, drive adoption, and maximize platform value with our expert-led, role-based learning tracks.
            </p>
            <button onClick={handleBtnClick} className="upskill-cta-btn">
              View Trainings Catalog
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>

          {/* Right: cert partner cards */}
          <div className="upskill-cert-col">
            <p className="upskill-certs-label">CERTIFIED CURRICULUM PARTNERS</p>
            <div className="upskill-cert-cards">
              <div className="upskill-cert-card">
                <img src={servicenowImg} alt="ServiceNow" className="upskill-cert-img" />
                <span className="upskill-cert-name">ServiceNow</span>
              </div>
              <div className="upskill-cert-card">
                <img src={itilImg} alt="ITIL" className="upskill-cert-img" />
                <span className="upskill-cert-name">ITIL 4</span>
              </div>
            </div>
          </div>

        </div>

        {/* ── Feature cards ── */}
        <div className="upskill-features-grid">
          {features.map((f, i) => (
            <div key={i} className="upskill-feature-card">
              <div className="upskill-feature-icon">{f.icon}</div>
              <h4>{f.title}</h4>
            </div>
          ))}
        </div>

        {/* ── Curriculum strip ── */}
        {/* <div className="upskill-curriculum-strip">
          <div className="upskill-curriculum-left">
            <span className="upskill-curriculum-tag">AVAILABLE CURRICULUM</span>
            <h3>What Your Team Will Learn</h3>
          </div>
          <ul className="upskill-curriculum-list">
            {curriculum.map((item, i) => (
              <li key={i} className="upskill-curriculum-item">
                <div className="upskill-curriculum-icon">{item.icon}</div>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div> */}

      </div>

      <style>{`
        .upskill-section {
          position: relative;
          background-image: url(${servicenowBg});
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center 50%;
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
          padding: 50px 0 0 0;
          overflow: hidden;
        }

        .upskill-bg-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.94) 0%, rgba(243, 246, 249, 0.9) 100%);
          backdrop-filter: blur(1.5px);
          z-index: 0;
          pointer-events: none;
        }

        /* ── Top row ── */
        .upskill-top-row {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 72px;
          align-items: center;
          margin-bottom: 15px;
          position: relative;
          z-index: 1;
        }

        .upskill-header {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .upskill-header .section-tag {
          color: var(--color-blue);
          background-color: rgba(30, 136, 229, 0.06);
          border: 1px solid rgba(30, 136, 229, 0.12);
          margin-bottom: 20px;
        }

        .upskill-header .section-title {
          font-size: 2.75rem;
          color: var(--color-navy);
          margin-bottom: 20px;
        }

        .upskill-accent {
          color: var(--color-blue);
        }

        .upskill-lead {
          font-size: 1.05rem;
          color: var(--color-text-secondary);
          line-height: 1.75;
          margin-bottom: 32px;
          max-width: 560px;
        }

        .upskill-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background-color: var(--color-blue);
          color: #ffffff;
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          padding: 13px 26px;
          border: none;
          cursor: pointer;
          border-radius: 2px;
          transition: all var(--transition-fast);
          box-shadow: 0 6px 20px rgba(30,136,229,0.22);
        }

        .upskill-cta-btn:hover {
          background-color: var(--color-blue-hover);
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(30,136,229,0.32);
        }

        .upskill-cta-btn svg {
          transition: transform var(--transition-fast);
        }

        .upskill-cta-btn:hover svg {
          transform: translateX(4px);
        }

        /* Cert cards */
        .upskill-cert-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
          position: relative;
          z-index: 1;
        }

        .upskill-certs-label {
          font-family: var(--font-heading);
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.15em;
          color: var(--color-text-muted);
          text-transform: uppercase;
        }

        .upskill-cert-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          width: 100%;
        }

        .upskill-cert-card {
          background: #ffffff;
          border: 1.5px solid var(--color-border);
          border-radius: 10px;
          padding: 1px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 14px;
          box-shadow: var(--shadow-sm);
          transition: all var(--transition-normal);
          cursor: default;
          width: 100%;
          min-height: 200px;
          overflow: hidden; /* Clips the image corners perfectly */
        }

        .upskill-cert-card:hover {
          border-color: rgba(30, 136, 229, 0.3);
          transform: translateY(-5px);
          box-shadow: var(--shadow-md), 0 10px 30px rgba(30, 136, 229, 0.08);
        }

        .upskill-cert-img {
          width: 100%;
          height: 140px;
          object-fit: cover; /* Fills card to borders, removing all white space */
          border-radius: 9px 9px 0 0; /* Matches top rounded corners of card */
          filter: drop-shadow(0 4px 10px rgba(15, 23, 42, 0.05));
        }

        .upskill-cert-name {
          font-family: var(--font-heading);
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-navy);
          margin-bottom: 12px; /* Extra spacing at bottom due to 1px padding */
        }

        /* ── Feature cards ── */
        .upskill-features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-bottom: 15px;
          position: relative;
          z-index: 1;
        }

        .upskill-feature-card {
          background-color: #ffffff;
          border: 1.5px solid var(--color-border);
          padding: 16px 14px;
          display: flex;
          align-items: center;
          gap: 12px;
          border-radius: var(--radius-md, 8px);
          box-shadow: var(--shadow-sm);
          transition: all var(--transition-normal);
          position: relative;
          overflow: hidden;
          cursor: default;
        }

        .upskill-feature-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
          background-color: var(--color-blue);
          transition: width var(--transition-normal);
        }

        .upskill-feature-card:nth-child(1)::after { background-color: #278c5d; }
        .upskill-feature-card:nth-child(2)::after { background-color: #7c3aed; }
        .upskill-feature-card:nth-child(3)::after { background-color: #0284c7; }
        .upskill-feature-card:nth-child(4)::after { background-color: #db2777; }

        .upskill-feature-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md), 0 6px 20px rgba(30, 136, 229, 0.06);
          border-color: rgba(30, 136, 229, 0.2);
        }

        .upskill-feature-card:hover::after {
          width: 100%;
        }

        .upskill-feature-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid rgba(30, 136, 229, 0.08);
          transition: all var(--transition-normal);
        }

        .upskill-feature-card:nth-child(1) .upskill-feature-icon {
          color: #278c5d;
          background-color: rgba(39, 140, 93, 0.05);
          border-color: rgba(39, 140, 93, 0.08);
        }
        .upskill-feature-card:nth-child(1):hover .upskill-feature-icon {
          background-color: #278c5d;
          color: #ffffff;
          border-color: #278c5d;
        }

        .upskill-feature-card:nth-child(2) .upskill-feature-icon {
          color: #7c3aed;
          background-color: rgba(124, 58, 237, 0.05);
          border-color: rgba(124, 58, 237, 0.08);
        }
        .upskill-feature-card:nth-child(2):hover .upskill-feature-icon {
          background-color: #7c3aed;
          color: #ffffff;
          border-color: #7c3aed;
        }

        .upskill-feature-card:nth-child(3) .upskill-feature-icon {
          color: #0284c7;
          background-color: rgba(2, 132, 199, 0.05);
          border-color: rgba(2, 132, 199, 0.08);
        }
        .upskill-feature-card:nth-child(3):hover .upskill-feature-icon {
          background-color: #0284c7;
          color: #ffffff;
          border-color: #0284c7;
        }

        .upskill-feature-card:nth-child(4) .upskill-feature-icon {
          color: #db2777;
          background-color: rgba(219, 39, 119, 0.05);
          border-color: rgba(219, 39, 119, 0.08);
        }
        .upskill-feature-card:nth-child(4):hover .upskill-feature-icon {
          background-color: #db2777;
          color: #ffffff;
          border-color: #db2777;
        }

        .upskill-feature-card h4 {
          font-size: 0.88rem;
          color: var(--color-navy);
          font-weight: 500;
          line-height: 1.35;
          margin: 0;
          text-align: left;
        }

        /* ── Curriculum strip ── */
        .upskill-curriculum-strip {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 56px;
          align-items: center;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border: 1.5px solid var(--color-border);
          border-radius: 10px;
          padding: 15px 48px;
          box-shadow: var(--shadow-sm);
          position: relative;
          z-index: 1;
        }

        .upskill-curriculum-tag {
          display: block;
          font-family: var(--font-heading);
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.15em;
          color: var(--color-blue);
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .upskill-curriculum-left h3 {
          font-size: 1.45rem;
          font-weight: 500;
          color: var(--color-navy);
          line-height: 1.3;
        }

        .upskill-curriculum-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .upskill-curriculum-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 18px;
          border: 1px solid var(--color-border);
          border-radius: 8px;
          background: var(--color-soft-bg);
          transition: all var(--transition-fast);
          cursor: default;
        }

        .upskill-curriculum-item:hover {
          border-color: rgba(30,136,229,0.25);
          background: rgba(30,136,229,0.03);
          transform: translateX(4px);
        }

        .upskill-curriculum-icon {
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: rgba(30,136,229,0.07);
          color: var(--color-blue);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid rgba(30,136,229,0.12);
          transition: all var(--transition-fast);
        }

        .upskill-curriculum-item:hover .upskill-curriculum-icon {
          background: var(--color-blue);
          color: #ffffff;
          border-color: var(--color-blue);
        }

        .upskill-curriculum-item span {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--color-text-primary);
          line-height: 1.4;
        }

        /* ── Responsive ── */
        @media (max-width: 1100px) {
          .upskill-features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .upskill-top-row {
            gap: 48px;
          }
        }

        @media (max-width: 900px) {
          .upskill-top-row {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .upskill-header .section-title {
            font-size: 2.25rem;
          }
          .upskill-curriculum-strip {
            grid-template-columns: 1fr;
            gap: 28px;
            padding: 32px;
          }
          .upskill-curriculum-list {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .upskill-features-grid {
            grid-template-columns: 1fr;
          }
          .upskill-cert-cards {
            grid-template-columns: 1fr 1fr;
          }
          .upskill-header .section-title {
            font-size: 1.9rem;
          }
        }
      `}</style>
    </section>
  );
}
