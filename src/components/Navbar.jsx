import { useState, useEffect } from 'react';
import MegaMenu from './MegaMenu';
import logoImg from '../assets/logo.png';

export default function Navbar({ currentTab, setCurrentTab }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null); // 'services', 'solutions', 'industries', 'insights', 'careers', 'about' or null
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  useEffect(() => {
    if (!mobileMenuOpen) {
      setMobileServicesOpen(false);
      setMobileSolutionsOpen(false);
    }
  }, [mobileMenuOpen]);

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

  const handleNavClick = (tabId, elementId) => {
    setCurrentTab(tabId);
    setMobileMenuOpen(false);
    setActiveMenu(null);
    if (elementId) {
      setTimeout(() => {
        const el = document.querySelector(`.row-bg-${elementId}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 150);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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
        <div className="nav-container">
          
          {/* Stacked Large Logo Image */}
          <div onClick={() => handleNavClick('home')} className="nav-logo-box">
            <img src={logoImg} alt="Genius Minds Logo" className="nav-logo-img" />
          </div>

          {/* Screenshot-Matched Navigation Links */}
          <ul className="nav-links">
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
                onClick={() => handleNavClick('services')} 
                className={`nav-link-btn ${activeMenu === 'services' ? 'hover-active' : ''} ${['services', 'web-app-dev', 'erp-crm', 'mobile-app-dev', 'it-bpo', 'digital-marketing', 'id-card-printing', 'trainings'].includes(currentTab) ? 'active' : ''}`}
              >
                Services
                <span className="chevron-down"></span>
              </button>
            </li>

            <li onMouseEnter={() => handleMenuHover('solutions')}>
              <button 
                onClick={() => handleNavClick('solutions')} 
                className={`nav-link-btn ${activeMenu === 'solutions' ? 'hover-active' : ''} ${currentTab === 'solutions' ? 'active' : ''}`}
              >
                Solutions
                <span className="chevron-down"></span>
              </button>
            </li>
            
            <li>
              <button 
                onClick={() => handleNavClick('customers')} 
                className={`nav-link-btn ${currentTab === 'customers' ? 'active' : ''}`}
              >
                Customers
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
          menuId={activeMenu} 
          onNavigate={handleNavClick} 
          onClose={() => setActiveMenu(null)} 
        />
      )}

      {/* Mobile Drawer Menu */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          <li>
            <button onClick={() => handleNavClick('about')} className={currentTab === 'about' ? 'active' : ''}>
              About Us
            </button>
          </li>
          
          {/* Collapsible Services Accordion */}
          <li>
            <button 
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)} 
              className={`mobile-accordion-header ${['services', 'servicenow', 'bpo', 'trainings'].includes(currentTab) ? 'active' : ''}`}
            >
              Services
              <span className={`mobile-chevron ${mobileServicesOpen ? 'expanded' : ''}`}></span>
            </button>
            <ul className={`mobile-submenu ${mobileServicesOpen ? 'open' : ''}`}>
              <li>
                <button onClick={() => handleNavClick('services')} className={currentTab === 'services' ? 'active' : ''}>
                  All Services Overview
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('web-app-dev')} className={currentTab === 'web-app-dev' ? 'active' : ''}>
                  Web sites & App Dev
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('erp-crm')} className={currentTab === 'erp-crm' ? 'active' : ''}>
                  ERP & CRM Solutions
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('mobile-app-dev')} className={currentTab === 'mobile-app-dev' ? 'active' : ''}>
                  Mobile App Dev
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('it-bpo')} className={currentTab === 'it-bpo' ? 'active' : ''}>
                  IT Consulting & BPO
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('digital-marketing')} className={currentTab === 'digital-marketing' ? 'active' : ''}>
                  Digital Marketing
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('id-card-printing')} className={currentTab === 'id-card-printing' ? 'active' : ''}>
                  ID Card Printing
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('trainings')} className={currentTab === 'trainings' ? 'active' : ''}>
                  Trainings & Certifications
                </button>
              </li>
            </ul>
          </li>

          {/* Collapsible Solutions Accordion */}
          <li>
            <button 
              onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)} 
              className={`mobile-accordion-header ${currentTab === 'solutions' ? 'active' : ''}`}
            >
              Solutions
              <span className={`mobile-chevron ${mobileSolutionsOpen ? 'expanded' : ''}`}></span>
            </button>
            <ul className={`mobile-submenu ${mobileSolutionsOpen ? 'open' : ''}`}>
              <li>
                <button onClick={() => handleNavClick('solutions')} className={currentTab === 'solutions' ? 'active' : ''}>
                  All Solutions Overview
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('web-app-dev')} className={currentTab === 'web-app-dev' ? 'active' : ''}>
                  SaaS Development
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('erp-crm')} className={currentTab === 'erp-crm' ? 'active' : ''}>
                  Enterprise ERP Solutions
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('erp-crm')} className={currentTab === 'erp-crm' ? 'active' : ''}>
                  Advanced CRM Solutions
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('web-app-dev')} className={currentTab === 'web-app-dev' ? 'active' : ''}>
                  Professional Web Dev
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('it-bpo')} className={currentTab === 'it-bpo' ? 'active' : ''}>
                  Premier IT Consulting
                </button>
              </li>
            </ul>
          </li>

          <li>
            <button onClick={() => handleNavClick('customers')} className={currentTab === 'customers' ? 'active' : ''}>
              Customers
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleNavClick('contact')} 
              className="btn btn-primary"
              style={{ width: '100%', marginTop: '20px' }}
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
          justify-content: flex-start;
          width: 100%;
          padding-left: 40px;
          padding-right: 40px;
          gap: 0;
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
          margin-left: auto;
        }

        .nav-cta {
          margin-left: 16px;
          flex-shrink: 0;
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
          padding: 9px 16px;
          padding-left: 10px;
          font-size: 0.78rem;
          font-weight: 500;
          background-color: #ffffff;
          color: #002140;
          border: none;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
          white-space: nowrap;
        }

        .nav-contact-btn:hover {
          background-color: #f0f4f8;
          color: #197edc;
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

        .mobile-accordion-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .mobile-chevron {
          width: 6px;
          height: 6px;
          border-right: 1.8px solid var(--color-text-primary);
          border-bottom: 1.8px solid var(--color-text-primary);
          transform: rotate(45deg);
          transition: transform 0.3s ease;
          margin-right: 6px;
        }

        .mobile-chevron.expanded {
          transform: rotate(-135deg);
        }

        .mobile-submenu {
          list-style: none;
          padding: 0;
          margin: 0;
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .mobile-submenu.open {
          max-height: 320px;
          opacity: 1;
          margin-top: 6px;
          margin-bottom: 6px;
        }

        .mobile-submenu button {
          padding: 6px 0 6px 16px !important;
          font-size: 0.92rem !important;
          font-weight: 500 !important;
          color: var(--color-text-secondary) !important;
          border-left: 1.5px solid var(--color-border) !important;
        }

        .mobile-submenu button.active {
          color: var(--color-blue) !important;
          border-left-color: var(--color-blue) !important;
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
          .nav-container {
            padding-left: 24px;
            padding-right: 24px;
          }
        }
      `}</style>
    </div>
  );
}
