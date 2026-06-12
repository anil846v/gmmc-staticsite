import { useState, useEffect } from 'react';
import MegaMenu from './MegaMenu';
import logoImg from '../assets/logo.png';

export default function Navbar({ currentTab, setCurrentTab }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null); // 'services', 'solutions', 'industries', 'insights', 'careers', 'about' or null

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (tabId) => {
    setCurrentTab(tabId);
    setMobileMenuOpen(false);
    setActiveMenu(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMenuHover = (menuId) => {
    setActiveMenu(menuId);
  };

  return (
    <div 
      className="navbar-wrapper" 
      onMouseLeave={() => setActiveMenu(null)}
      style={{ position: 'fixed', top: 0, left: 0, width: 100 + '%', zIndex: 1000 }}
    >
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : 'navbar-top'}`}>
        <div className="container nav-container">
          
          {/* Stacked Large Logo Image */}
          <div onClick={() => handleNavClick('home')} className="nav-logo-box">
            <img src={logoImg} alt="Genius Minds Logo" className="nav-logo-img" />
          </div>

          {/* Screenshot-Matched Navigation Links */}
          <ul className="nav-links">
            <li>
              <button 
                onClick={() => handleNavClick('home')} 
                className={`nav-link-btn ${currentTab === 'home' && !activeMenu ? 'active' : ''}`}
              >
                Home
              </button>
            </li>
            
            <li>
              <button 
                onClick={() => handleNavClick('about')} 
                className={`nav-link-btn ${currentTab === 'about' && !activeMenu ? 'active' : ''}`}
              >
                About Us
              </button>
            </li>

            <li onMouseEnter={() => handleMenuHover('services')}>
              <button 
                onClick={() => handleNavClick('servicenow')} 
                className={`nav-link-btn ${activeMenu === 'services' ? 'hover-active' : ''} ${currentTab === 'servicenow' || currentTab === 'bpo' ? 'active' : ''}`}
              >
                Services
                <span className="chevron-down"></span>
              </button>
            </li>

            <li onMouseEnter={() => handleMenuHover('solutions')}>
              <button 
                onClick={() => handleNavClick('servicenow')} 
                className={`nav-link-btn ${activeMenu === 'solutions' ? 'hover-active' : ''}`}
              >
                Solutions
                <span className="chevron-down"></span>
              </button>
            </li>
            
            <li onMouseEnter={() => handleMenuHover('industries')}>
              <button 
                onClick={() => handleNavClick('home')} 
                className={`nav-link-btn ${activeMenu === 'industries' ? 'hover-active' : ''}`}
              >
                Industries
                <span className="chevron-down"></span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('contact')} 
                className={`nav-link-btn ${currentTab === 'contact' ? 'active' : ''}`}
              >
                Contact Us
              </button>
            </li>
          </ul>

          {/* Action Button: Schedule a Consultation */}
          <div className="nav-cta">
            <button 
              onClick={() => handleNavClick('contact')} 
              className="btn btn-primary nav-contact-btn"
            >
              Schedule a Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="cta-arrow">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>

          {/* Mobile Burger Menu Icon */}
          <button 
            className={`burger-menu ${mobileMenuOpen ? 'open' : ''}`} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Render active Mega Menu (Aligned to new 110px height) */}
      {activeMenu && (
        <MegaMenu 
          menuId={activeMenu === 'solutions' ? 'services' : activeMenu} 
          onNavigate={handleNavClick} 
          onClose={() => setActiveMenu(null)} 
        />
      )}

      {/* Mobile Drawer Menu */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          <li>
            <button onClick={() => handleNavClick('home')} className={currentTab === 'home' ? 'active' : ''}>
              Home
            </button>
          </li>
          <li>
            <button onClick={() => handleNavClick('about')} className={currentTab === 'about' ? 'active' : ''}>
              About Us
            </button>
          </li>
          <li>
            <button onClick={() => handleNavClick('servicenow')} className={currentTab === 'servicenow' ? 'active' : ''}>
              ServiceNow Consulting
            </button>
          </li>
          <li>
            <button onClick={() => handleNavClick('bpo')} className={currentTab === 'bpo' ? 'active' : ''}>
              BPO Services
            </button>
          </li>
          <li>
            <button onClick={() => handleNavClick('trainings')} className={currentTab === 'trainings' ? 'active' : ''}>
              Trainings & Certifications
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleNavClick('contact')} 
              className="btn btn-primary"
              style={{ width: 100 + '%', marginTop: '20px' }}
            >
              Schedule a Consultation
            </button>
          </li>
        </ul>
      </div>

      <style>{`
        .navbar {
          width: 100%;
          height: 110px; /* Taller navbar to fit large logo badge */
          display: flex;
          align-items: center;
          transition: all var(--transition-normal);
          border-bottom: 1px solid transparent;
        }

        .navbar-top {
          background-color: #002140;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .navbar-scrolled {
          background-color: #002140;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          height: 100px; /* Slims slightly when scrolled */
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .nav-logo-box {
          display: flex;
          align-items: center;
          cursor: pointer;
        }

        .nav-logo-img {
          height: 102px; /* Taller logo badge exactly matching the screenshot */
          object-fit: contain;
          transition: transform var(--transition-fast);
        }

        .navbar-scrolled .nav-logo-img {
          height: 92px;
        }

        .nav-logo-img:hover {
          transform: scale(1.02);
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 6px;
          align-items: center;
        }

        .nav-link-btn {
          background: none;
          border: none;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.85);
          cursor: pointer;
          padding: 24px 12px;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all var(--transition-fast);
          position: relative;
        }

        .nav-link-btn:hover,
        .nav-link-btn.hover-active,
        .nav-link-btn.active {
          color: #ffffff;
        }

        /* Home active underline matching screenshot */
        .nav-link-btn.active::after {
          content: '';
          position: absolute;
          bottom: 12px;
          left: 12px;
          right: 12px;
          height: 2px;
          background-color: var(--color-blue);
          border-radius: 1px;
        }

        .chevron-down {
          width: 5px;
          height: 5px;
          border-right: 1.5px solid currentColor;
          border-bottom: 1.5px solid currentColor;
          transform: rotate(45deg);
          margin-top: -3px;
          transition: transform var(--transition-fast);
        }

        .nav-link-btn:hover .chevron-down,
        .nav-link-btn.hover-active .chevron-down {
          transform: rotate(-135deg) translateY(-1px) translateX(-1px);
        }

        .nav-contact-btn {
          padding: 12px 24px;
          font-size: 0.9rem;
          font-weight: 700;
          background-color: var(--color-blue);
          color: #ffffff;
          border: none;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 14px rgba(30, 136, 229, 0.25);
        }

        .nav-contact-btn:hover {
          background-color: var(--color-blue-hover);
          color: #ffffff;
        }

        .cta-arrow {
          transition: transform var(--transition-fast);
        }

        .nav-contact-btn:hover .cta-arrow {
          transform: translateX(3px);
        }

        .burger-menu {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 22px;
          height: 16px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 1001;
        }

        .burger-menu span {
          width: 100%;
          height: 2px;
          border-radius: 2px;
          background-color: #ffffff;
          transition: all var(--transition-fast);
        }

        .burger-menu.open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .burger-menu.open span:nth-child(2) {
          opacity: 0;
        }
        .burger-menu.open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        .mobile-nav-drawer {
          position: fixed;
          top: 0;
          right: -100%;
          width: 280px;
          height: 100vh;
          background-color: var(--color-primary-bg);
          box-shadow: -5px 0 25px rgba(15, 23, 42, 0.08);
          z-index: 999;
          padding: 100px 24px 40px;
          transition: right var(--transition-normal);
        }

        .mobile-nav-drawer.open {
          right: 0;
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 16px;
          list-style: none;
        }

        .mobile-nav-links button {
          background: none;
          border: none;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 1.05rem;
          color: var(--color-text-primary);
          text-align: left;
          width: 100%;
          padding: 8px 0;
          cursor: pointer;
        }

        .mobile-nav-links button.active {
          color: var(--color-blue);
        }

        @media (max-width: 1024px) {
          .navbar {
            height: 80px;
          }
          .nav-logo-img {
            height: 72px;
          }
          .nav-links, .nav-cta {
            display: none;
          }
          .burger-menu {
            display: flex;
          }
        }
      `}</style>
    </div>
  );
}
