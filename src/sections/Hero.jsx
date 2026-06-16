import { useState, useEffect } from 'react';


export default function Hero({ setCurrentTab }) {
  const [introFinished, setIntroFinished] = useState(false);

  // Trigger state change once all words have animated in
  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroFinished(true);
    }, 1000); // 1.0s allows slower word-by-word animation to finish and settle
    return () => clearTimeout(timer);
  }, []);

  const handleCtaClick = (tabId) => {
    setCurrentTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const line1 = ["Bridging", "Tech", "Complexity"];
  const line2 = ["with", "Business", "Outcomes"];

  return (
    <section className="hero-section">
      {/* Background Banner Image */}
      <div className="hero-bg-container">
        <div 
          className="hero-bg-image"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600')`,
            opacity: introFinished ? 1 : 0
          }}
        />
        <div className={`hero-overlay ${introFinished ? 'visible' : 'intro'}`} />
      </div>

      <div className="container hero-layout-wrapper">
        {/* Left-Aligned Typography Block */}
        <div className="hero-content-left">
          <span 
            className={`hero-eyebrow fade-in-element ${introFinished ? 'visible' : ''}`}
            style={{ transitionDelay: '0.05s' }}
          >
            Enterprise IT Services & ServiceNow Excellence
          </span>
          
          <h1 className="hero-heading">
            <div className="hero-heading-line">
              {line1.map((word, idx) => (
                <span 
                  key={`l1-${idx}`} 
                  className="hero-word" 
                  style={{ '--word-index': idx }}
                >
                  {word}
                </span>
              ))}
            </div>
            <div className="hero-heading-line">
              {line2.map((word, idx) => (
                <span 
                  key={`l2-${idx}`} 
                  className={`hero-word ${idx > 0 ? 'hero-accent' : ''}`}
                  style={{ '--word-index': idx + line1.length }}
                >
                  {word}
                </span>
              ))}
            </div>
          </h1>
          
          <p 
            className={`hero-description fade-in-element ${introFinished ? 'visible' : ''}`}
            style={{ transitionDelay: '0.15s' }}
          >
            We engineer custom SaaS, ERP, and CRM platforms, deliver modern web developments, and architect ServiceNow workflows that streamline operations, enforce governance, and drive business growth.
          </p>
          
          <div 
            className={`hero-actions fade-in-element ${introFinished ? 'visible' : ''}`}
            style={{ transitionDelay: '0.25s' }}
          >
            <button onClick={() => handleCtaClick('contact')} className="btn btn-primary hero-btn-primary">
              Schedule a Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="btn-arrow">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            <button onClick={() => handleCtaClick('services')} className="btn btn-outline hero-btn-outline">
              Explore Our Services
            </button>
          </div>
        </div>

        {/* Minimalist Metrics Row */}
        <div 
          className={`hero-stats-row fade-in-element ${introFinished ? 'visible' : ''}`}
          style={{ transitionDelay: '0.4s' }}
        >
          <div className="stats-grid">
            <div className="stat-item">
              <strong>120+</strong>
              <span>Happy Clients</span>
            </div>
            <div className="stat-item">
              <strong>250+</strong>
              <span>Projects Delivered</span>
            </div>
            <div className="stat-item">
              <strong>50+</strong>
              <span>Expert Developers</span>
            </div>
            <div className="stat-item">
              <strong>23+</strong>
              <span>Years of Experience</span>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          color: #ffffff;
          overflow: hidden;
          background-color: #a4b3a3;
          padding-top: 80px; /* Offset sticky navbar */
          padding-bottom: 40px;
        }

        .hero-bg-container {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .hero-bg-image {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed;
          transition: opacity 1s ease-in-out;
        }

        /* Dark background transition to left-heavy gradient mask */
        .hero-overlay {
          position: absolute;
          inset: 0;
          background-color: #b6bebb;
          transition: background-image 1s ease-in-out, background-color 1s ease-in-out;
          z-index: 1;
        }

        .hero-overlay.visible {
          background-color: transparent;
          background-image: linear-gradient(90deg, rgba(119, 168, 138, 0.96) 0%, rgba(42, 153, 101, 0.85) 45%, rgba(61, 150, 85, 0.45) 75%, rgba(15, 23, 42, 0) 100%);
        }

        .hero-layout-wrapper {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 64px;
          width: 100%;
          text-align: left;
        }

        .hero-content-left {
          max-width: 800px;
        }

        .hero-eyebrow {
          display: inline-block;
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-blue);
          text-transform: uppercase;
          letter-spacing: 0.18em;
          margin-bottom: 24px;
        }

        .hero-heading {
          font-size: clamp(2.5rem, 5.5vw, 4.2rem);
          font-weight: 600;
          color: #ffffff;
          line-height: 1.15;
          letter-spacing: -0.025em;
          margin-bottom: 24px;
        }

        .hero-heading-line {
          display: block;
        }

        /* Individual word sliding intro animation - slowed down for premium feel */
        .hero-word {
          display: inline-block;
          margin-right: 0.22em;
          opacity: 0;
          transform: translateX(-40px);
          filter: blur(2px);
          animation: slideInWord 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          animation-delay: calc(var(--word-index) * 0.22s);
        }

        .hero-accent {
          color: var(--color-blue);
        }

        @keyframes slideInWord {
          to {
            opacity: 1;
            transform: translateX(0);
            filter: blur(0);
          }
        }

        .hero-description {
          font-size: 1.15rem;
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.65;
          margin-bottom: 40px;
          max-width: 660px;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--color-blue);
          color: #ffffff;
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 16px 36px;
          border: none;
          cursor: pointer;
          border-radius: 2px;
          transition: all var(--transition-fast);
          box-shadow: 0 4px 14px rgba(30, 136, 229, 0.2);
        }

        .hero-btn-primary:hover {
          background: var(--color-blue-hover);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(30, 136, 229, 0.35);
        }

        .btn-arrow {
          transition: transform var(--transition-fast);
        }

        .hero-btn-primary:hover .btn-arrow {
          transform: translateX(3px);
        }

        .hero-btn-outline {
          display: inline-flex;
          align-items: center;
          background: transparent;
          color: #ffffff;
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 16px 36px;
          border: 1.5px solid rgba(255, 255, 255, 0.3);
          cursor: pointer;
          border-radius: 2px;
          transition: all var(--transition-fast);
        }

        .hero-btn-outline:hover {
          border-color: #ffffff;
          background: rgba(255, 255, 255, 0.05);
          transform: translateY(-2px);
        }

        /* Staged Fade-in Elements */
        .fade-in-element {
          opacity: 0;
          transform: translateY(15px);
          pointer-events: none;
          transition: opacity 0.85s cubic-bezier(0.25, 1, 0.5, 1), transform 0.85s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .fade-in-element.visible {
          opacity: 1;
          transform: translateY(0);
          pointer-events: all;
        }

        /* Minimalist Metrics Row */
        .hero-stats-row {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 48px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .stat-item strong {
          font-family: var(--font-heading);
          font-size: 2.2rem;
          font-weight: 600;
          color: #ffffff;
          line-height: 1;
        }

        .stat-item span {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.55);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        @media (max-width: 900px) {
          .hero-section {
            padding-top: 100px;
          }
          .hero-bg-image {
            background-attachment: scroll;
          }
          .hero-overlay.visible {
            background-image: none;
            background-color: transparent;
            background: linear-gradient(180deg, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.85) 100%);
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
          }
          .hero-heading {
            font-size: 2.8rem;
          }
          .hero-description {
            font-size: 1.05rem;
          }
        }

        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }
          .hero-btn-primary, .hero-btn-outline {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
