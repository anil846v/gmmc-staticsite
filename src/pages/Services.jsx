import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import detailed service components
import WebAppDev from './WebAppDev';
import ErpCrm from './ErpCrm';
import MobileAppDev from './MobileAppDev';
import ItConsultingBpo from './ItConsultingBpo';
import DigitalMarketing from './DigitalMarketing';
import IdCardPrinting from './IdCardPrinting';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesPage({ setCurrentTab, initialTab }) {
  const tabsList = [
    { id: 'web-app-dev', label: 'Web sites & App Dev' },
    { id: 'erp-crm', label: 'ERP & CRM Solutions' },
    { id: 'mobile-app-dev', label: 'Mobile App Dev' },
    { id: 'it-bpo', label: 'IT Consulting & BPO' },
    { id: 'digital-marketing', label: 'Digital Marketing' },
    { id: 'id-card-printing', label: 'ID Card Printing' }
  ];

  const [activeTab, setActiveTab] = useState(() => {
    const defaultTab = tabsList.find(t => t.id === initialTab);
    return defaultTab ? defaultTab.id : 'web-app-dev';
  });

  const isManualScrolling = useRef(false);

  // Helper function for smooth scrolling to a target service section
  const smoothScrollToSection = (tabId) => {
    const targetEl = document.getElementById(`service-section-${tabId}`);
    if (targetEl) {
      isManualScrolling.current = true;
      
      const isMobile = window.innerWidth <= 990;
      const headerOffset = isMobile ? 150 : 140;
      const elementPosition = targetEl.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      const checkScrollEnd = () => {
        if (window.smoothScrollTimeout) {
          clearTimeout(window.smoothScrollTimeout);
        }
        window.smoothScrollTimeout = setTimeout(() => {
          isManualScrolling.current = false;
          window.removeEventListener('scroll', checkScrollEnd);
        }, 100);
      };
      
      window.addEventListener('scroll', checkScrollEnd);
    }
  };

  useEffect(() => {
    document.title = 'Enterprise IT Services & Capabilities | GMMC';
    
    if (initialTab && initialTab !== 'services') {
      // Landed on a specific service detailed section. Scroll down to it.
      setTimeout(() => {
        smoothScrollToSection(initialTab);
      }, 250);
    } else {
      window.scrollTo(0, 0);
    }

    // Staggered Entrance for Hero Grid Images & Text on Load
    const tl = gsap.timeline();

    tl.fromTo('.hero-image-grid-item',
      { 
        opacity: 1, 
        scale: 1.15,
        y: (index) => (index < 4 ? -80 : 80), // Top row moves down, bottom row moves up
        x: (index) => ((index % 4) < 2 ? -80 : 80) // Left half moves right, right half moves left
      },
      {
        opacity: 1,
        scale: 1.0,
        y: 0,
        x: 0,
        duration: 1.6,
        stagger: 0.08,
        ease: 'power4.out'
      }
    );

    tl.to('.hero-image-grid-item', {
      opacity: 0.18,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.4');

    tl.fromTo('.services-hero-tag',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
      '-=0.2'
    );

    tl.fromTo('.services-hero-title',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.4'
    );

    tl.fromTo('.services-hero-lead',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.6'
    );

    // Parallax Scroll on Hero Image Grid
    gsap.to('.hero-image-grid', {
      yPercent: 25,
      ease: 'none',
      scrollTrigger: {
        trigger: '.services-subpage-hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      if (window.smoothScrollTimeout) {
        clearTimeout(window.smoothScrollTimeout);
      }
    };
  }, []);

  // Sync state with parent routing state updates (e.g. Navbar or Homepage clicks)
  useEffect(() => {
    if (initialTab && initialTab !== 'services' && initialTab !== activeTab) {
      const targetTab = tabsList.find(t => t.id === initialTab);
      if (targetTab) {
        setActiveTab(targetTab.id);
        setTimeout(() => {
          smoothScrollToSection(targetTab.id);
        }, 150);
      }
    }
  }, [initialTab]);

  // Scrollspy logic: update active tab on scroll
  useEffect(() => {
    const triggers = [];
    
    const timer = setTimeout(() => {
      tabsList.forEach((tab) => {
        const section = document.getElementById(`service-section-${tab.id}`);
        if (section) {
          const trigger = ScrollTrigger.create({
            trigger: section,
            start: 'top 220px',
            end: 'bottom 220px',
            onToggle: (self) => {
              if (self.isActive && !isManualScrolling.current) {
                setActiveTab(tab.id);
                setCurrentTab(tab.id);
              }
            }
          });
          triggers.push(trigger);
        }
      });
      ScrollTrigger.refresh();
    }, 300);

    return () => {
      clearTimeout(timer);
      triggers.forEach(t => t.kill());
    };
  }, []);

  // Animate active capsule — GSAP entrance + mobile horizontal scroll
  useEffect(() => {
    const isMobile = window.innerWidth <= 990;
    const activeBtn = document.querySelector('.services-timeline-item-wrapper.active');
    const capsule = document.querySelector('.services-timeline-active-capsule');
    const activeNode = capsule ? capsule.querySelector('.services-timeline-node') : null;

    if (isMobile) {
      // Mobile: horizontal scroll the tab bar
      const sidebar = document.querySelector('.services-sidebar-menu');
      if (activeBtn && sidebar) {
        const btnLeft = activeBtn.offsetLeft;
        const btnWidth = activeBtn.offsetWidth;
        const sidebarScrollLeft = sidebar.scrollLeft;
        const sidebarWidth = sidebar.clientWidth;
        if (btnLeft < sidebarScrollLeft) {
          sidebar.scrollTo({ left: btnLeft - 20, behavior: 'smooth' });
        } else if (btnLeft + btnWidth > sidebarScrollLeft + sidebarWidth) {
          sidebar.scrollTo({ left: btnLeft + btnWidth - sidebarWidth + 20, behavior: 'smooth' });
        }
      }
    } else {
      // Desktop: GSAP animate the capsule sliding in from left + node pulse
      if (capsule) {
        gsap.fromTo(capsule,
          { x: -18, opacity: 0, scale: 0.96 },
          { x: 0, opacity: 1, scale: 1, duration: 0.42, ease: 'power3.out' }
        );
      }
      if (activeNode) {
        gsap.fromTo(activeNode,
          { scale: 0.7, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.35, ease: 'back.out(1.7)', delay: 0.1 }
        );
      }
    }
  }, [activeTab]);

  const activeTabIndex = tabsList.findIndex(t => t.id === activeTab);

  const handlePrevTab = () => {
    if (activeTabIndex > 0) {
      handleTabChange(tabsList[activeTabIndex - 1].id);
    }
  };

  const handleNextTab = () => {
    if (activeTabIndex < tabsList.length - 1) {
      handleTabChange(tabsList[activeTabIndex + 1].id);
    }
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setCurrentTab(tabId);
    smoothScrollToSection(tabId);
  };

  const getTabIcon = (tabId) => {
    switch (tabId) {
      case 'web-app-dev':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
            <polyline points="10 9 7 12 10 15" />
            <polyline points="14 15 17 12 14 9" />
          </svg>
        );
      case 'erp-crm':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
          </svg>
        );
      case 'mobile-app-dev':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
            <line x1="12" y1="18" x2="12.01" y2="18" />
          </svg>
        );
      case 'it-bpo':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        );
      case 'digital-marketing':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 5L6 9H2v6h4l5 4V5z" />
            <path d="M23 9c0 2.1-1.04 3.96-2.65 5.14M15 9c0 1.2-.59 2.26-1.5 2.94" />
          </svg>
        );
      case 'id-card-printing':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <circle cx="9" cy="10" r="2" />
            <path d="M14 9h3M14 13h3M6 16c0-2 2-3 3-3s3 1 3 3" />
          </svg>
        );
      default:
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
          </svg>
        );
    }
  };

  const getServiceComponent = (tabId) => {
    switch (tabId) {
      case 'web-app-dev':
        return <WebAppDev hideHero={true} />;
      case 'erp-crm':
        return <ErpCrm hideHero={true} />;
      case 'mobile-app-dev':
        return <MobileAppDev hideHero={true} />;
      case 'it-bpo':
        return <ItConsultingBpo hideHero={true} />;
      case 'digital-marketing':
        return <DigitalMarketing hideHero={true} />;
      case 'id-card-printing':
        return <IdCardPrinting hideHero={true} />;
      default:
        return null;
    }
  };

  return (
    <div className="services-detailed-page">
      
      {/* Hero section */}
      <section className="services-subpage-hero">

        {/* Background image grid */}
        <div className="hero-image-grid">
          <img className="hero-image-grid-item" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800" alt="Cloud & Network Architecture" />
          <img className="hero-image-grid-item" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800" alt="Enterprise Data & ERP" />
          <img className="hero-image-grid-item" src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800" alt="Workflow Collaboration" />
          <img className="hero-image-grid-item" src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800" alt="IT Governance Consulting" />
          <img className="hero-image-grid-item" src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800" alt="Web Applications & SaaS" />
          <img className="hero-image-grid-item" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800" alt="Digital Services & Support" />
          <img className="hero-image-grid-item" src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=800" alt="Digital Marketing" />
          <img className="hero-image-grid-item" src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=800" alt="Identity Access & Smart Cards" />
        </div>

        <div className="services-hero-grid-mesh"></div>

        <div className="container services-hero-container">
          <div className="services-hero-text">
            <span className="services-hero-tag">Capabilities</span>

            <h1 className="services-hero-title">
              Technology Services & Consulting
            </h1>

            <p className="services-hero-lead">
              Empowering enterprise organizations through innovative technology services,
              certified platform configurations, and scalable cloud engineering.
            </p>
          </div>
        </div>

      </section>

      {/* Split Sidebar Tabs Layout */}
      <div className="services-tabs-split-container container">
        <div className="services-sidebar-menu">
          {/* Timeline navigation arrows */}
          <button 
            className={`services-timeline-nav-arrow arrow-up ${activeTabIndex === 0 ? 'disabled' : ''}`}
            onClick={handlePrevTab}
            disabled={activeTabIndex === 0}
            aria-label="Previous service"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
          </button>
          
          <button 
            className={`services-timeline-nav-arrow arrow-down ${activeTabIndex === tabsList.length - 1 ? 'disabled' : ''}`}
            onClick={handleNextTab}
            disabled={activeTabIndex === tabsList.length - 1}
            aria-label="Next service"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <polyline points="19 12 12 19 5 12" />
            </svg>
          </button>

          {/* Curved dotted timeline connector line SVG */}
          <svg className="services-timeline-curve-svg" viewBox="0 0 260 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 16,50 A 68 250 0 0 1 16,550"
              stroke="#cbd5e1"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="6 6"
            />
          </svg>
 
          {tabsList.map((tab, index) => {
            const isActive = activeTab === tab.id;
            const timelineOffsets = [0, 44, 58, 58, 44, 0];
            const shiftX = timelineOffsets[index] || 0;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`services-timeline-item-wrapper ${isActive ? 'active' : ''}`}
                style={{ '--timeline-offset': `${shiftX}px` }}
              >
                {isActive ? (
                  <div className="services-timeline-active-capsule">
                    <div className="services-timeline-node">
                      {getTabIcon(tab.id)}
                    </div>
                    <div className="services-timeline-info">
                      <span className="services-timeline-title">{tab.label}</span>
                      <span className="services-timeline-status">Active</span>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="services-timeline-node">
                      {getTabIcon(tab.id)}
                    </div>
                    <div className="services-timeline-info">
                      <span className="services-timeline-title">{tab.label}</span>
                      {/* <span className="services-timeline-status">Upcoming</span> */}
                    </div>
                  </>
                )}
              </button>
            );
          })}
        </div>

        <div className="services-tab-content-panel">
          {tabsList.map((tab, idx) => (
            <div
              key={tab.id}
              id={`service-section-${tab.id}`}
              className="service-scroll-section"
            >
              {getServiceComponent(tab.id)}
              {idx < tabsList.length - 1 && (
                <div className="services-section-divider">
                  <div className="divider-line"></div>
                  <div className="divider-badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                  <div className="divider-line"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Accelerate Transformation CTA Section */}
      <section className="accelerate-cta-section">
        <div className="container accelerate-cta-container">
          <div className="accelerate-cta-left">
            <h2>Ready to Accelerate Your Digital Transformation?</h2>
            <p>
              Let's discuss your business goals and build technology solutions that drive measurable results.
            </p>
            <button 
              onClick={() => {
                setCurrentTab('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
              className="btn btn-primary cta-consult-btn"
            >
              Schedule a Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
          
          <div className="accelerate-cta-right">
            <div className="delivery-steps-list">
              {[
                { step: 'Discover', desc: 'We understand your business and challenges.' },
                { step: 'Design', desc: 'We design the right solution and architecture.' },
                { step: 'Develop', desc: 'We build scalable, secure and robust solutions.' },
                { step: 'Deploy', desc: 'We assure smooth deployment and transition.' },
                { step: 'Support', desc: 'We provide 24/7 support and continuous improvement.' }
              ].map((item, idx) => (
                <div className="delivery-step-card" key={idx}>
                  <div className="step-icon-number">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div className="step-info">
                    <h3>{item.step}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Technology Partners Section */}
      <section className="tech-partners-section">
        <div className="container">
          <div className="partners-label">OUR TECHNOLOGY PARTNERS</div>
          <div className="partners-logos-grid">
            <div className="partner-logo-box">
              <span className="partner-logo-text aws-logo">aws</span>
            </div>
            <div className="partner-logo-box">
              <span className="partner-logo-text microsoft-logo">Microsoft <span>Partner</span></span>
            </div>
            <div className="partner-logo-box">
              <span className="partner-logo-text google-logo">Google Cloud</span>
            </div>
            <div className="partner-logo-box">
              <span className="partner-logo-text servicenow-logo">servicenow</span>
            </div>
            <div className="partner-logo-box">
              <span className="partner-logo-text salesforce-logo">salesforce</span>
            </div>
            <div className="partner-logo-box">
              <span className="partner-logo-text oracle-logo">ORACLE <span>Partner</span></span>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .services-detailed-page {
          background-color: #f8fafc !important;
          color: var(--color-text-primary);
          position: relative;
        }

        /* Hero section matching subpages */
        .services-subpage-hero {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background: #030a1e !important;
        }

        /* Background Images 2x4 Grid */
        .hero-image-grid {
          position: absolute;
          inset: 0;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(2, 1fr);
          gap: 2px;
          z-index: 0;
          will-change: transform;
        }

        .hero-image-grid-item {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          transform: scale(1.02);
          cursor: pointer;
        }

        .hero-image-grid-item:hover {
          opacity: 0.45 !important;
          transform: scale(1.06);
          z-index: 3;
        }

        /* Content */
        .services-hero-container {
          position: relative;
          z-index: 5;
          display: flex;
          align-items: center;
          min-height: 100vh;
        }

        .services-hero-text {
          max-width: 900px;
          text-align: left;
          border-left: 4px solid var(--color-blue);
          padding-left: 36px;
        }

        .services-hero-tag {
          opacity: 0;
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 600;
          color: #60a5fa;
          background: rgba(30, 136, 229, 0.12);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 9999px;
          padding: 6px 16px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          display: inline-block;
          margin-bottom: 20px;
          backdrop-filter: blur(8px);
          box-shadow: 0 0 15px rgba(30, 136, 229, 0.15);
        }

        .services-hero-title {
          opacity: 0;
          font-family: var(--font-heading);
          font-size: 3.5rem;
          font-weight: 600;
          color: #ffffff !important;
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin-bottom: 20px;
          text-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
        }

        .services-hero-lead {
          opacity: 0;
          font-size: 1.2rem;
          line-height: 1.7;
          color: #cbd5e1 !important;
          margin: 0;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        /* Timeline Sidebar Tabs Layout */
        .services-tabs-split-container {
          display: flex;
          gap: 48px; /* Slightly wider gap for premium spacing */
          align-items: flex-start;
          margin-top: 60px;
          margin-bottom: 80px;
          position: relative;
          max-width: 1800px !important; /* Expanded container width to push sidebar further left */
          width: 98% !important; /* Keep it near the screen margin on wide screens */
        }

        .services-sidebar-menu {
          width: 260px;
          height: 600px;
          flex-shrink: 0;
          background: transparent;
          display: flex;
          flex-direction: column;
          position: sticky;
          top: 140px;
          z-index: 90;
          overflow: hidden;
        }

        /* Timeline Nav Arrows */
        .services-timeline-nav-arrow {
          position: absolute;
          left: 1px;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #ffffff;
          border: 1.5px solid var(--color-border);
          color: var(--color-text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-sm);
          transition: all 0.25s ease;
          z-index: 15;
        }

        .services-timeline-nav-arrow:hover:not(.disabled) {
          border-color: var(--color-blue);
          color: var(--color-blue);
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(2, 67, 124, 0.15);
        }

        .services-timeline-nav-arrow.arrow-up {
          top:150px;
        }

        .services-timeline-nav-arrow.arrow-down {
          bottom: 150px;
        }

        .services-timeline-nav-arrow.disabled {
          opacity: 0.35;
          cursor: not-allowed;
          background: #f1f5f9;
          border-color: #e2e8f0;
          color: #94a3b8;
        }

        /* Curved dotted timeline connector SVG */
        .services-timeline-curve-svg {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .service-scroll-section {
          scroll-margin-top: 140px;
          margin-bottom: 100px;
        }
        .service-scroll-section:last-child {
          margin-bottom: 0;
        }

        .services-timeline-item-wrapper {
          display: flex;
          align-items: center;
          position: relative;
          z-index: 2;
          width: calc(100% - var(--timeline-offset, 0px)); /* Align capsule right boundaries exactly */
          height: 100px; /* Fixed height for precise SVG path matching */
          cursor: pointer;
          border: none;
          background: transparent;
          padding: 0;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          transform: translateX(var(--timeline-offset, 0px));
        }

        /* Inactive node circle */
        .services-timeline-node {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #ffffff;
          border: 1.5px solid #cbd5e1;
          color: #64748b;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
          margin-left: 8px;
          flex-shrink: 0;
          z-index: 2;
        }

        .services-timeline-info {
          display: flex;
          flex-direction: column;
          margin-left: 16px;
          text-align: left;
          transition: all 0.25s ease;
        }

        .services-timeline-title {
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-navy);
          margin: 0;
          transition: color 0.25s ease;
        }

        .services-timeline-status {
          font-size: 0.72rem;
          color: #94a3b8;
          font-weight: 500;
          margin-top: 2px;
          transition: color 0.25s ease;
        }

        .services-timeline-item-wrapper:hover .services-timeline-node {
          border-color: var(--color-blue);
          color: var(--color-blue);
          transform: scale(1.05);
        }

        .services-timeline-item-wrapper:hover .services-timeline-title {
          color: var(--color-blue);
        }

        /* Active Capsule Outline */
        .services-timeline-active-capsule {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 8px 18px;
          background: #ffffff;
          border: 2px solid var(--color-blue);
          border-radius: 9999px;
          width: 100%;
          position: relative;
          box-shadow: 0 4px 20px rgba(30, 136, 229, 0.08);
          z-index: 3;
          will-change: transform, opacity;
        }

        .services-timeline-active-capsule .services-timeline-node {
          background: var(--color-blue);
          border-color: var(--color-blue);
          color: #ffffff;
          margin-left: 0;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(30, 136, 229, 0.3);
          will-change: transform, opacity;
        }

        .services-timeline-active-capsule .services-timeline-info {
          flex: 1;
          min-width: 0;
          overflow: hidden;
        }

        .services-timeline-active-capsule .services-timeline-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-navy);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          display: block;
        }

        .services-timeline-active-capsule .services-timeline-status {
          color: var(--color-blue);
          font-weight: 700;
          font-size: 0.75rem;
          white-space: nowrap;
        }

        /* Blue indicator dot on right edge of capsule */
        .services-timeline-active-capsule::after {
          content: '';
          position: absolute;
          right: -5px;
          top: 50%;
          transform: translateY(-50%);
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--color-blue);
          border: 2px solid #ffffff;
        }

        .services-tab-content-panel {
          flex-grow: 1;
          min-width: 0;
          position: relative;
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 32px 56px;
          box-shadow: 0 4px 24px rgba(15, 23, 42, 0.02);
        }

        /* Visual Divider between Service Sections */
        .services-section-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-top: 20px;
          margin-bottom: 20px;
          opacity: 0.8;
        }

        .divider-line {
          flex-grow: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--color-border) 20%, var(--color-border) 80%, transparent);
        }

        .divider-badge {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #ffffff;
          border: 1.5px solid var(--color-border);
          color: var(--color-text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);
          transition: all 0.3s ease;
        }

        .services-section-divider:hover .divider-badge {
          color: var(--color-blue);
          border-color: var(--color-blue);
          transform: translateY(2px);
          box-shadow: 0 4px 12px rgba(30, 136, 229, 0.1);
        }

        @keyframes tabFadeIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in-active-tab {
          animation: tabFadeIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* Accelerate CTA Section */
        .accelerate-cta-section {
          padding: 90px 0;
          background-color: #f8fafc;
          border-top: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
          position: relative;
          z-index: 10;
        }

        .accelerate-cta-container {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 80px;
          align-items: center;
        }

        .accelerate-cta-left h2 {
          font-family: var(--font-heading);
          font-size: 2.5rem;
          font-weight: 600;
          color: var(--color-navy);
          line-height: 1.25;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
        }

        .accelerate-cta-left p {
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--color-text-secondary);
          margin-bottom: 36px;
        }

        .cta-consult-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 30px;
          background-color: var(--color-blue);
          color: #ffffff;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.9rem;
          border-radius: 4px;
          box-shadow: 0 4px 12px rgba(30, 136, 229, 0.2);
          transition: all 0.25s ease;
        }

        .cta-consult-btn:hover {
          background-color: var(--color-blue-hover);
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(30, 136, 229, 0.3);
        }

        .cta-consult-btn:hover .arrow-icon {
          transform: translateX(3px);
        }

        /* Steps progress cards */
        .delivery-steps-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .delivery-step-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 16px 20px;
          display: flex;
          gap: 18px;
          align-items: flex-start;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .delivery-step-card:hover {
          transform: translateX(4px);
          box-shadow: 0 8px 20px rgba(15, 23, 42, 0.04);
          border-color: rgba(30, 136, 229, 0.35);
        }

        .step-icon-number {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(30, 136, 229, 0.08);
          color: var(--color-blue);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
          transition: background-color 0.3s, color 0.3s;
        }

        .delivery-step-card:hover .step-icon-number {
          background-color: var(--color-blue);
          color: #ffffff;
        }

        .step-info h3 {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-navy);
          margin-bottom: 4px;
        }

        .step-info p {
          font-size: 0.9rem;
          color: var(--color-text-secondary);
          line-height: 1.45;
          margin: 0;
        }

        /* Technology Partners */
        .tech-partners-section {
          padding: 70px 0;
          background: #ffffff;
          border-bottom: 1px solid #e2e8f0;
          position: relative;
          z-index: 10;
        }

        .partners-label {
          font-family: var(--font-heading);
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--color-text-muted);
          text-align: center;
          letter-spacing: 0.18em;
          margin-bottom: 32px;
        }

        .partners-logos-grid {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 36px;
          flex-wrap: wrap;
        }

        .partner-logo-box {
          flex: 1;
          min-width: 130px;
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0.55;
          filter: grayscale(1);
          transition: opacity 0.3s ease, filter 0.3s ease, transform 0.3s ease;
          cursor: pointer;
        }

        .partner-logo-box:hover {
          opacity: 1;
          filter: grayscale(0);
          transform: scale(1.05);
        }

        .partner-logo-text {
          font-family: var(--font-heading);
          font-size: 1.45rem;
          font-weight: 700;
          color: var(--color-text-muted);
          letter-spacing: -0.02em;
          white-space: nowrap;
        }

        .aws-logo {
          color: #FF9900 !important;
        }

        .microsoft-logo {
          color: #7FBA00 !important;
          font-size: 1.25rem;
        }

        .microsoft-logo span {
          color: #00A4EF !important;
          font-weight: 400;
        }

        .google-logo {
          color: #4285F4 !important;
          font-size: 1.25rem;
        }

        .servicenow-logo {
          color: #293E40 !important;
          font-weight: 600;
        }

        .salesforce-logo {
          color: #00A1E0 !important;
        }

        .oracle-logo {
          color: #F80000 !important;
          font-size: 1.25rem;
        }

        .oracle-logo span {
          color: var(--color-text-muted);
          font-weight: 400;
        }

        @media (max-width: 1200px) {
          .services-sidebar-menu {
            top: 110px; /* Offset adjusted for responsive header height */
          }
        }

        @media (max-width: 990px) {
          .services-tabs-split-container {
            display: block;
            margin-top: 40px;
            margin-bottom: 60px;
          }

          .services-timeline-nav-arrow {
            display: none !important;
          }

          .services-tab-content-panel {
            background-color: transparent !important;
            border: none !important;
            border-radius: 0 !important;
            padding: 0 !important;
            box-shadow: none !important;
          }

          .services-sidebar-menu {
            width: 100%;
            height: auto; /* Auto height on mobile */
            position: sticky;
            top: 98px;
            flex-direction: row;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            background: #ffffff;
            border: none;
            border-bottom: 1px solid #e2e8f0;
            box-shadow: 0 4px 10px rgba(15, 23, 42, 0.04);
            z-index: 100;
            scrollbar-width: none;
            -ms-overflow-style: none;
            margin-bottom: 30px;
            padding: 4px 20px;
            gap: 10px;
          }

          .services-timeline-curve-svg {
            display: none !important; /* Hide curve on mobile */
          }

          .services-sidebar-menu::before {
            display: none; /* Hide vertical dotted line on mobile */
          }

          .services-sidebar-menu::-webkit-scrollbar {
            display: none;
          }

          .services-timeline-item-wrapper {
            width: auto;
            height: auto; /* Auto height on mobile */
            flex-shrink: 0;
            white-space: nowrap;
            transform: none !important; /* Reset translateX shift on mobile */
          }

          .services-timeline-node {
            margin-left: 0;
            width: 32px;
            height: 32px;
          }

          .services-timeline-node svg {
            width: 14px;
            height: 14px;
          }

          .services-timeline-info {
            margin-left: 8px;
          }

          .services-timeline-title {
            font-size: 0.85rem;
          }

          .services-timeline-status {
            display: none; /* Hide status label on mobile to save space */
          }

          /* Active mobile state (no capsule outline, just clean flat underline tabs) */
          .services-timeline-active-capsule {
            border: none;
            box-shadow: none;
            background: transparent;
            padding: 12px 16px;
            border-radius: 0;
            border-bottom: 3px solid var(--color-blue);
            width: auto;
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .services-timeline-active-capsule::after {
            display: none; /* Hide active indicator dot on mobile */
          }

          .services-timeline-active-capsule .services-timeline-node {
            background: rgba(30, 136, 229, 0.1);
            color: var(--color-blue);
            box-shadow: none;
          }

          .services-timeline-active-capsule .services-timeline-title {
            font-size: 0.85rem;
            color: var(--color-blue);
          }

          .accelerate-cta-container {
            grid-template-columns: 1fr;
            gap: 48px;
            text-align: center;
          }
          .accelerate-cta-left {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .cta-consult-btn {
            align-self: center;
          }
          .partners-logos-grid {
            justify-content: center;
            gap: 28px;
          }
          .partner-logo-box {
            flex: 0 0 40%;
          }
        }

        @media (max-width: 768px) {
          .services-hero-title {
            font-size: 2.75rem;
          }
          .services-sidebar-menu {
            padding: 4px 16px;
            gap: 8px;
          }
          .services-timeline-item-wrapper {
            padding: 12px 16px;
            font-size: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .services-hero-container {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .services-hero-text {
            padding-left: 20px;
          }
          .partner-logo-box {
            flex: 0 0 100%;
          }
        }
      `}</style>

    </div>
  );
}
