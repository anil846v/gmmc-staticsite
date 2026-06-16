import footerLogo from '../assets/footerlogo.png';

export default function Footer({ setCurrentTab }) {
  const handleNavClick = (tabId) => {
    setCurrentTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        
        {/* Left Side: Brand Image and Tagline */}
        <div className="footer-brand-col">
          <img src={footerLogo} alt="Genius Minds Logo" className="footer-logo-img" />
        </div>

        {/* Center: Quick Links */}
        <div className="footer-links-col">
          <h3>Capabilities</h3>
          <ul className="footer-links-list">
            <li><button onClick={() => handleNavClick('home')}>Home Overview</button></li>
            <li><button onClick={() => handleNavClick('web-app-dev')}>Web & SaaS Development</button></li>
            <li><button onClick={() => handleNavClick('it-bpo')}>IT Consulting & BPO</button></li>
            <li><button onClick={() => handleNavClick('trainings')}>Trainings & Enablement</button></li>
            <li><button onClick={() => handleNavClick('about')}>About Genius Minds</button></li>
          </ul>
        </div>

        {/* Right Side: Contact info & Socials */}
        <div className="footer-contact-col">
          <h3>Get In Touch</h3>
          <p className="footer-contact-item">
            <strong>Email:</strong> info@geniusminds.com
          </p>
          <p className="footer-contact-item">
            <strong>Phone:</strong> +1 (800) 555-0199
          </p>
          <p className="footer-contact-item">
            <strong>HQ:</strong> Tech Hub Center, Block 4B, Silicon Hills
          </p>
          
          <div className="footer-socials">
            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            {/* Twitter/X */}
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            {/* GitHub */}
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p>Copyright &copy; 2026 | Genius Minds | All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer-section {
          background-color: var(--color-soft-bg);
          color: var(--color-text-secondary);
          padding-top: 80px;
          border-top: 1px solid var(--color-border);
        }

        .footer-container {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 60px;
          padding-bottom: 60px;
        }

        .footer-brand-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .footer-logo-img {
          height: 110px;
          object-fit: contain;
        }

        .footer-links-col h3,
        .footer-contact-col h3 {
          font-size: 0.75rem;
          color: var(--color-navy);
          margin-bottom: 24px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links-list button {
          background: none;
          border: none;
          color: var(--color-text-secondary);
          font-family: var(--font-body);
          font-size: 0.92rem;
          text-align: left;
          cursor: pointer;
          transition: color var(--transition-fast);
          padding: 0;
        }

        .footer-links-list button:hover {
          color: var(--color-blue);
        }

        .footer-contact-item {
          font-size: 0.92rem;
          margin-bottom: 14px;
          color: var(--color-text-secondary);
        }

        .footer-contact-item strong {
          color: var(--color-navy);
          font-weight: 600;
        }

        .footer-socials {
          display: flex;
          gap: 10px;
          margin-top: 24px;
        }

        .footer-socials a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 6px;
          background-color: rgba(15, 23, 42, 0.04);
          border: 1px solid var(--color-border);
          color: var(--color-text-secondary);
          transition: all var(--transition-fast);
        }

        .footer-socials a:hover {
          background-color: var(--color-blue);
          color: #ffffff;
          border-color: var(--color-blue);
          transform: translateY(-2px);
        }

        .footer-bottom {
          border-top: 1px solid var(--color-border);
          padding-top: 24px;
          padding-bottom: 24px;
          font-size: 0.82rem;
          color: var(--color-text-muted);
        }

        .footer-bottom-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-bottom-links {
          display: flex;
          gap: 24px;
        }

        .footer-bottom-links a {
          color: var(--color-text-muted);
          transition: color var(--transition-fast);
        }

        .footer-bottom-links a:hover {
          color: var(--color-blue);
        }
          .footer-logo {
            width: 260px;
            height: auto;
            object-fit: contain;
            display: block;
            margin-left: -150px;
}
          }

        @media (max-width: 900px) {
          .footer-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .footer-brand-col {
            align-items: center;
            text-align: center;
          }
          .footer-bottom-container {
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
