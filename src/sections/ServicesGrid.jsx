import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import servicenow from '../assets/servicenow.png';


gsap.registerPlugin(ScrollTrigger);

export default function ServicesGrid({ setCurrentTab }) {
  const services = [
    {
      id: 'saas',
      title: 'SaaS Development',
      description: 'We engineer custom, multi-tenant SaaS platforms featuring highly secure data isolation, elastic scaling architectures, and billing API integrations. Our development cycles prioritize rapid feature deployments, clean API contracts, and robust microservices designed to scale dynamically alongside your user base.',
      tab: 'servicenow',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      ),
      bgIcon: 'rgba(30, 136, 229, 0.08)',
      colorIcon: 'var(--color-blue)'
    },
    {
      id: 'erp',
      title: 'ERP Solutions',
      description: 'Optimize your supply chain, financial reporting, and human capital workflows with our custom ERP system integrations. We bridge operational silos, unify fragmented database environments, and coordinate process automations that minimize resource waste and deliver real-time administrative visibility.',
      tab: 'servicenow',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=600',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
          <line x1="9" y1="22" x2="9" y2="16" />
          <line x1="15" y1="22" x2="15" y2="16" />
          <line x1="9" y1="16" x2="15" y2="16" />
          <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01" />
        </svg>
      ),
      bgIcon: 'rgba(30, 136, 229, 0.08)',
      colorIcon: 'var(--color-blue)'
    },
    {
      id: 'crm',
      title: 'CRM Solutions',
      description: 'Transform client interactions and accelerate sales velocity through intelligent, unified CRM platform architectures. We deploy customized pipeline automations, data-driven lead scoring engines, and cross-channel tracking interfaces that empower your account managers with actionable client telemetry.',
      tab: 'servicenow',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      bgIcon: 'rgba(30, 136, 229, 0.08)',
      colorIcon: 'var(--color-blue)'
    },
    {
      id: 'webdev',
      title: 'Web Development',
      description: 'Build blazingly fast, modern web applications leveraging responsive React frameworks and headless content management architectures. Our custom web solutions feature performance-optimized bundle sizes, accessible keyboard navigations, and secure backend portal integrations that maximize client engagement.',
      tab: 'servicenow',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      ),
      bgIcon: 'rgba(30, 136, 229, 0.08)',
      colorIcon: 'var(--color-blue)'
    },
    {
      id: 'itconsult',
      title: 'IT Consulting',
      description: 'Navigate digital complexity with our senior technology advisors who specialize in ITIL v4 governance models, SLA alignment, and cloud migrations. We analyze your legacy infrastructure, identify operational bottlenecks, and map out strategic technical blueprints aligned to your business outcomes.',
      tab: 'servicenow',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        </svg>
      ),
      bgIcon: 'rgba(30, 136, 229, 0.08)',
      colorIcon: 'var(--color-blue)'
    },
   {
  id: 'servicenow',
  title: 'ServiceNow ITSM Platform',
  description: 'Transform your IT Service Management with enterprise-grade ServiceNow implementations. We design custom ITSM workflows, automate incident response, optimize change management processes, and integrate ServiceNow across your entire IT ecosystem. From CMDB optimization to incident automation, we deliver fully-realized enterprise IT service excellence.',
  tab: 'servicenow',
  image: servicenow,
  icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="9" y1="9" x2="15" y2="9"></line>
      <line x1="9" y1="15" x2="15" y2="15"></line>
      <line x1="9" y1="12" x2="15" y2="12"></line>
    </svg>
  ),
  bgIcon: 'rgba(99, 102, 241, 0.08)',
  colorIcon: 'var(--color-indigo)'
}
  ];

  const handleServiceClick = (tabId) => {
    setCurrentTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Parallax scroll effect for each row background image
    const images = document.querySelectorAll('.flow-parallax-img');
    images.forEach(img => {
      gsap.fromTo(img, 
        { yPercent: -15 },
        {
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: img.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        }
      );
    });

    // Connector line height fill animation on scroll
    const fillLines = document.querySelectorAll('.flowchart-line-fill');
    fillLines.forEach(fill => {
      const row = fill.closest('.capability-flow-row');
      gsap.fromTo(fill,
        { height: '0%' },
        {
          height: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: row,
            start: 'top 60%',
            end: 'bottom 60%',
            scrub: true
          }
        }
      );
    });

    // Entrance and active state animation for each row (image and text stagger)
    const rows = document.querySelectorAll('.capability-flow-row');
    rows.forEach(row => {
      const imgWrapper = row.querySelector('.flow-image-wrapper');
      const textCol = row.querySelector('.flow-text-content');

      // Create main ScrollTrigger for class toggles (like active node styling)
      ScrollTrigger.create({
        trigger: row,
        start: 'top 65%',
        end: 'bottom 35%',
        onEnter: () => row.classList.add('is-active'),
        onLeave: () => row.classList.remove('is-active'),
        onEnterBack: () => row.classList.add('is-active'),
        onLeaveBack: () => row.classList.remove('is-active')
      });

      // Staggered entrance animation for image and text
      if (imgWrapper) {
        gsap.fromTo(imgWrapper,
          { opacity: 0.1, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: row,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

      if (textCol) {
        const textElements = textCol.querySelectorAll('.flow-step-tag, h3, p, .service-card-link-text');
        gsap.fromTo(textElements,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15, // Stagger tag, title, description, and link
            ease: 'power2.out',
            scrollTrigger: {
              trigger: row,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="section section-white services-grid-section">
      <div className="container">
        
        {/* Spacious Section Header */}
        <div className="services-section-header">
          <span className="section-tag">WHAT WE DO</span>
          <h2 className="section-title">Core Capability Areas</h2>
          <p className="section-subtitle">
            We deliver enterprise consulting and engineering structures that drive digital transformation and maximize operational efficiencies.
          </p>
        </div>

      </div>

      {/* Clean, alternating flowchart-style rows with full-width backgrounds */}
      <div className="capability-flow-container">
        {services.map((service, index) => {
          const isEven = index % 2 === 1;
          return (
            <div 
              key={service.id} 
              className={`capability-flow-row-wrapper row-bg-${service.id}`}
            >
              <div className="container">
                <div 
                  className={`capability-flow-row ${isEven ? 'row-reversed' : ''}`} 
                  onClick={() => handleServiceClick(service.tab)}
                >
                  {/* Left Column */}
                  <div className="flow-col flow-col-left">
                    {isEven ? (
                      <div className="flow-text-content">
                        <span className="flow-step-tag">Step 0{index + 1} / {service.title.toUpperCase()}</span>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <span className="service-card-link-text">
                          Learn More
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="link-arrow">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                          </svg>
                        </span>
                      </div>
                    ) : (
                      <div className="flow-image-wrapper">
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="flow-parallax-img"
                        />
                        <div className="flow-image-overlay"></div>
                      </div>
                    )}
                  </div>

                  {/* Center Column: Flowchart Timeline */}
                  <div className="flowchart-vertical-axis">
                    <div className="flowchart-line-wrapper">
                      <div className="flowchart-line"></div>
                      <div className="flowchart-line-fill"></div>
                    </div>
                    <div className="flowchart-node">
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* Right Column */}
                  <div className="flow-col flow-col-right">
                    {isEven ? (
                      <div className="flow-image-wrapper">
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="flow-parallax-img"
                        />
                        <div className="flow-image-overlay"></div>
                      </div>
                    ) : (
                      <div className="flow-text-content">
                        <span className="flow-step-tag">Step 0{index + 1} / {service.title.toUpperCase()}</span>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <span className="service-card-link-text">
                          Learn More
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="link-arrow">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                          </svg>
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .services-grid-section {
          position: relative;
          background-color: var(--color-primary-bg);
          overflow: hidden;
          padding-top: 40px !important;
          padding-bottom: 0px !important ;
        }

        .services-section-header {
          text-align: left;
          max-width: 800px;
          margin-bottom: 40px;
        }

        .capability-flow-container {
          display: flex;
          flex-direction: column;
          position: relative;
          width: 100%;
        }

        /* Full-width wrapper with unique background colors */
        .capability-flow-row-wrapper {
          width: 100%;
          transition: background-color var(--transition-normal);
        }

        /* Specific backgrounds for each capability block */
        .row-bg-saas { background-color: #ffffff; }
        .row-bg-erp { background-color: #f1f5f9; }       /* Subtle cool slate */
        .row-bg-crm { background-color: #faf5ff; }       /* Subtle soft purple */
        .row-bg-webdev { background-color: #f0f7f7; }    /* Subtle soft teal */
        .row-bg-itconsult { background-color: #fafaf9; } /* Subtle soft stone warm gray */
        .row-bg-servicenow { background-color: #ecf5ff; } /* Subtle soft brand blue */

        .capability-flow-row {
          display: grid;
          grid-template-columns: 1fr 80px 1fr;
          gap: 0px;
          align-items: center;
          padding: 50px 0;
          cursor: pointer;
        }

        .capability-flow-row:hover .flow-image-wrapper {
          border-color: var(--color-blue);
        }

        .flow-col {
          width: 100%;
        }

        .flow-image-wrapper {
          width: 100%;
          height: 380px;
          position: relative;
          overflow: hidden;
          border: 1.5px solid var(--color-border);
          transition: border-color var(--transition-normal);
        }

        .flow-parallax-img {
          width: 100%;
          height: 130%; /* Extra height to accommodate parallax translation */
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
        }

        .flow-image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.4) 100%);
          z-index: 2;
        }

        .flowchart-vertical-axis {
          width: 80px;
          display: flex;
          justify-content: center;
          align-items: center; /* Center the node vertically */
          position: relative;
          flex-shrink: 0;
          height: 100%;
          align-self: stretch;
        }

        .flowchart-line-wrapper {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          z-index: 1;
        }

        /* Starts line at the center of the first node (vertically centered in row) */
        .capability-flow-row:first-child .flowchart-line-wrapper {
          top: 50%;
          bottom: 0;
        }

        /* Ends line at the center of the last node (vertically centered in row) */
        .capability-flow-row:last-child .flowchart-line-wrapper {
          top: 0;
          bottom: 50%;
        }

        .flowchart-line {
          width: 100%;
          height: 100%;
          background-color: var(--color-border);
          position: absolute;
          top: 0;
          left: 0;
        }

        .flowchart-line-fill {
          width: 100%;
          height: 0%;
          background-color: var(--color-blue);
          position: absolute;
          top: 0;
          left: 0;
        }

        .flowchart-node {
          width: 48px;
          height: 48px;
          border: 2px solid var(--color-border);
          background-color: var(--color-primary-bg);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-text-muted);
          transition: all var(--transition-normal);
          position: relative;
          z-index: 10;
        }

        .flowchart-node svg {
          transition: transform var(--transition-normal);
        }

        .is-active .flowchart-node {
          border-color: var(--color-blue);
          color: var(--color-blue);
          background-color: var(--color-accent-bg);
          box-shadow: 0 0 15px rgba(30, 136, 229, 0.2);
        }

        .is-active .flowchart-node svg {
          transform: scale(1.1);
        }

        .flow-text-content {
          text-align: left; /* Left align on both sides */
        }

        .flow-col-left .flow-text-content {
          padding-right: 48px;
        }

        .flow-col-right .flow-text-content {
          padding-left: 48px;
        }

        .flow-step-tag {
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--color-text-muted);
          text-transform: uppercase;
          display: block;
          margin-bottom: 8px;
        }

        .is-active .flow-step-tag {
          color: var(--color-blue);
        }

        .flow-text-content h3 {
          font-size: 1.6rem;
          color: var(--color-navy);
          margin-bottom: 12px;
          font-weight: 700;
        }

        /* Justified text alignment for capability descriptions */
        .flow-text-content p {
          color: var(--color-text-secondary);
          font-size: 1.05rem;
          line-height: 1.65;
          margin-bottom: 20px;
          text-align: justify;
          text-justify: inter-word;
        }

        .service-card-link-text {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--color-blue);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all var(--transition-fast);
          justify-content: flex-start; /* Left aligned on both sides */
        }

        .link-arrow {
          transition: transform var(--transition-fast);
        }

        .capability-flow-row:hover .service-card-link-text {
          color: var(--color-blue-hover);
        }

        .capability-flow-row:hover .link-arrow {
          transform: translateX(3px);
        }

        @media (max-width: 900px) {
          .capability-flow-row {
            display: flex;
            flex-direction: column;
            gap: 24px;
            padding: 40px 0;
          }

          .capability-flow-row.row-reversed {
            flex-direction: column-reverse;
          }

          .flow-image-wrapper {
            height: 260px;
          }

          .flowchart-vertical-axis {
            display: none;
          }

          .flow-text-content {
            padding: 0 !important;
            text-align: left !important;
          }

          .flow-text-content p {
            text-align: left !important; /* Left-align on mobile for readability */
          }
        }
      `}</style>
    </section>
  );
}
