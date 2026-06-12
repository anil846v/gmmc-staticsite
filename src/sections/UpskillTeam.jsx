export default function UpskillTeam({ setCurrentTab }) {
  const handleBtnClick = () => {
    setCurrentTab('trainings');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="section section-dark-block upskill-section">
      <div className="container grid-2 upskill-layout">
        
        {/* Left Column: Heading & Tech Title */}
        <div className="upskill-left-col">
          <span className="section-tag">ENABLEMENT</span>
          <h2 className="upskill-heading">Upskill Your Team for the Digital Workforce of Tomorrow</h2>
          
          <div className="modern-tech-list-box">
            <h4>Available Curriculum Areas:</h4>
            <ul className="modern-tech-bullet-list">
              <li>ServiceNow Administrator (CSA) enablement</li>
              <li>ServiceNow Developer & ITSM Implementation cohorts</li>
              <li>ITIL 4 Framework best-practice certification prep</li>
              <li>Agile Sprint methodologies and release controls</li>
            </ul>
          </div>
        </div>

        {/* Right Column: Description, Logos, and Button */}
        <div className="upskill-right-col">
          <p className="upskill-description">
            We deliver customized training cohorts tailored to your specific system configurations, release schedules, and operational playbooks. Upskill your internal IT teams to maximize platform independence.
          </p>

          {/* Logo badges container */}
          <div className="logo-badges-container">
            {/* ServiceNow Logo SVG */}
            <div className="brand-logo-badge">
              <svg width="130" height="38" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="16" fill="#81B5A2" />
                <path d="M14 24A6 6 0 0 1 20 18v-4a10 10 0 0 0-10 10" fill="#FFFFFF" />
                <path d="M26 16A6 6 0 0 1 20 22v4a10 10 0 0 0 10-10" fill="#FFFFFF" />
                <text x="44" y="26" fontFamily="var(--font-heading)" fontWeight="800" fontSize="16" fill="#FFFFFF">servicenow</text>
              </svg>
            </div>

            {/* ITIL 4 Logo SVG */}
            <div className="brand-logo-badge">
              <svg width="110" height="38" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="120" height="40" rx="6" fill="#7C2D12" />
                <text x="20" y="25" fontFamily="var(--font-heading)" fontWeight="800" fontSize="18" fill="#FFFFFF">ITIL</text>
                <circle cx="68" cy="20" r="9" fill="#EA580C" />
                <text x="64" y="25" fontFamily="var(--font-heading)" fontWeight="800" fontSize="13" fill="#FFFFFF">4</text>
              </svg>
            </div>
          </div>

          <button onClick={handleBtnClick} className="btn btn-secondary upskill-btn">
            View Trainings Catalog
          </button>
        </div>

      </div>

      <style>{`
        .upskill-section {
          position: relative;
        }

        .upskill-layout {
          align-items: center;
          gap: 64px;
        }

        .upskill-heading {
          font-size: 2.35rem;
          color: #ffffff;
          margin-bottom: 28px;
          line-height: 1.25;
          font-weight: 800;
        }

        .modern-tech-list-box {
          background-color: rgba(255, 255, 255, 0.02);
          border-radius: var(--radius-md);
          padding: 30px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: var(--shadow-sm);
        }

        .modern-tech-list-box h4 {
          font-size: 0.9rem;
          color: var(--color-blue);
          margin-bottom: 18px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .modern-tech-bullet-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .modern-tech-bullet-list li {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.85);
          padding-left: 24px;
          position: relative;
        }

        .modern-tech-bullet-list li::before {
          content: '→';
          color: var(--color-blue);
          font-weight: 700;
          position: absolute;
          left: 0;
        }

        .upskill-right-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .upskill-description {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.7;
          margin-bottom: 30px;
        }

        .logo-badges-container {
          display: flex;
          gap: 18px;
          margin-bottom: 36px;
          align-items: center;
          flex-wrap: wrap;
        }

        .brand-logo-badge {
          background-color: rgba(255, 255, 255, 0.03);
          border-radius: var(--radius-sm);
          padding: 8px 16px;
          box-shadow: var(--shadow-sm);
          border: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          height: 54px;
        }

        .upskill-btn {
          padding: 12px 26px;
          font-size: 0.9rem;
          background-color: var(--color-blue);
          color: #ffffff;
          border-color: var(--color-blue);
        }

        .upskill-btn:hover {
          background-color: var(--color-blue-hover);
          border-color: var(--color-blue-hover);
        }

        @media (max-width: 900px) {
          .upskill-layout {
            gap: 40px;
          }
          .upskill-heading {
            font-size: 1.85rem;
          }
        }
      `}</style>
    </section>
  );
}
