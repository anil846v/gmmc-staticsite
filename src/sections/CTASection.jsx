import servicenowBg from '../assets/servicenowbackground.png';

export default function CTASection({ setCurrentTab }) {
  const handleBtnClick = () => {
    setCurrentTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="section section-white cta-banner-section">
      <div className="container">
        
        <div className="modern-cta-card">
          <div className="cta-overlay" />
          <div className="cta-banner-grid">
            {/* Left Side: Call to Action text */}
            <div className="cta-text-side">
              <h2>Transform Operations with Top ServiceNow Solutions</h2>
              <p>
                Partner with the leading ServiceNow implementation partner to optimize your ITIL governance, configure enterprise workflows, and deploy best-in-class managed services.
              </p>
            </div>

            {/* Right Side: Action Button */}
            <div className="cta-button-side">
              <button onClick={handleBtnClick} className="btn btn-white cta-btn">
                Get Started Now
              </button>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .cta-banner-section {
          padding-top: 40px;
          padding-bottom: 40px;
          background-color: var(--color-primary-bg);
        }

        .modern-cta-card {
          position: relative;
          background: url('${servicenowBg}') center/cover no-repeat;
          background-attachment: fixed;
          border-radius: var(--radius-lg);
          padding: 60px;
          overflow: hidden;
        }

        .cta-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(135deg, rgba(0, 18, 38, 0.94) 0%, rgba(15, 23, 42, 0.88) 60%, rgba(0, 12, 24, 0.96) 100%);
        }

        .cta-banner-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          align-items: center;
          gap: 48px;
          position: relative;
          z-index: 2;
        }

        .cta-text-side h2 {
          color: #ffffff !important;
          font-size: 2.25rem;
          font-weight: 600;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }

        .cta-text-side p {
          color: rgba(255, 255, 255, 0.9) !important;
          font-size: 1.05rem;
          line-height: 1.65;
          max-width: 700px;
        }

        .cta-button-side {
          display: flex;
          justify-content: flex-end;
        }

        .cta-btn {
          padding: 16px 36px;
          font-size: 0.95rem;
          font-weight: 500;
          background-color: #ffffff;
          color: var(--color-blue);
          border: 1.5px solid #ffffff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border-radius: 2px;
          transition: all var(--transition-fast);
          cursor: pointer;
        }

        .cta-btn:hover {
          background-color: #f8fafc;
          color: var(--color-blue-hover);
          border-color: #f8fafc;
          transform: translateY(-1px);
        }

        @media (max-width: 900px) {
          .modern-cta-card {
            padding: 40px 30px;
            background-attachment: scroll;
          }
          .cta-banner-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 28px;
          }
          .cta-text-side h2 {
            font-size: 1.85rem;
          }
          .cta-button-side {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
