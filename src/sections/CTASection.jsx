export default function CTASection({ setCurrentTab }) {
  const handleBtnClick = () => {
    setCurrentTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="section section-white cta-banner-section">
      <div className="container">
        
        <div className="modern-cta-card">
          <div className="cta-banner-grid">
            {/* Left Side: Call to Action text */}
            <div className="cta-text-side">
              <h2>Transform Your Business Operations</h2>
              <p>
                Partner with us to optimize your IT infrastructure, configure ServiceNow workflows, leverage ITIL governance, and scale your customer success helpdesk.
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
          padding-bottom: 80px;
          background-color: var(--color-primary-bg);
        }

        .modern-cta-card {
          background-color: var(--color-blue);
          border-radius: var(--radius-lg);
          padding: 60px;
          border: 1px solid var(--color-blue);
          box-shadow: var(--shadow-lg);
          position: relative;
          overflow: hidden;
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
          font-weight: 800;
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
          font-weight: 700;
          background-color: #ffffff;
          color: var(--color-blue);
          border: 1.5px solid #ffffff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
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
