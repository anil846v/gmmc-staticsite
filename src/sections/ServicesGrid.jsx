import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import servicenow from '../assets/servicenow.png';
import idcards from '../assets/services/idcardsservice.png';



gsap.registerPlugin(ScrollTrigger);

export default function ServicesGrid({ setCurrentTab }) {
  const services = [
   
    {
      id: 'erp-crm',
      title: 'Enterprise ERP Systems & Custom CRM Solutions Integration',
      description: 'Unify supply chain logistics, finance operations, and sales databases. We specialize in enterprise resource planning (ERP) implementations and custom HubSpot or Salesforce CRM pipeline syncs.',
      tab: 'erp-crm',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      ),
      bgIcon: 'rgba(30, 136, 229, 0.08)',
      colorIcon: 'var(--color-blue)'
    },
    {
      id: 'mobile-app-dev',
      title: 'iOS & Android Mobile App Development Services',
      description: 'Engage audiences worldwide with high-performance cross-platform React Native and Flutter mobile applications, optimized native Swift or Kotlin code, and secure offline-first data integrations.',
      tab: 'mobile-app-dev',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
      bgIcon: 'rgba(30, 136, 229, 0.08)',
      colorIcon: 'var(--color-blue)'
    },
    {
      id: 'it-bpo',
      title: 'IT Consulting, ServiceNow  & BPO Outsourcing',
      description: 'Optimize workflow efficiency with ITIL   governance models, certified ServiceNow platform custom configurations, secure cloud server scaling, and high-efficiency back-office BPO support teams.',
      tab: 'it-bpo',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
      bgIcon: 'rgba(30, 136, 229, 0.08)',
      colorIcon: 'var(--color-blue)'
    },
    {
      id: 'digital-marketing',
      title: 'Data-Driven Digital Marketing & Organic SEO Campaigns',
      description: 'Accelerate organic search traffic and optimize client acquisition. We engineer programmatic SEO strategies, run conversion-optimized paid ads (PPC), and configure multi-channel tracking loops.',
      tab: 'digital-marketing',
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=600',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 5L6 9H2v6h4l5 4V5z" />
          <path d="M23 9c0 2.1-1.04 3.96-2.65 5.14M15 9c0 1.2-.59 2.26-1.5 2.94" />
        </svg>
      ),
      bgIcon: 'rgba(30, 136, 229, 0.08)',
      colorIcon: 'var(--color-blue)'
    },
    {
      id: 'id-card-printing',
      title: 'Secure Proximity ID Cards & RFID Smart Card Printing',
      description: 'Secure physical facilities with dual-sided thermal PVC badge printing, custom barcode and QR configurations, smart card RFID chip encoding, and professional access badge accessories.',
      tab: 'id-card-printing',
      image: {idcards},
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <circle cx="9" cy="10" r="2" />
          <path d="M14 9h3M14 13h3M6 16c0-2 2-3 3-3s3 1 3 3" />
        </svg>
      ),
      bgIcon: 'rgba(30, 136, 229, 0.08)',
      colorIcon: 'var(--color-blue)'
    },
     {
      id: 'web-app-dev',
      title: 'Custom SaaS Platforms & Web Application Development',
      description: 'Maximize business efficiency with secure, scalable, multi-tenant SaaS platforms and custom React and Next.js web application architectures integrated with automated Stripe revenue billing engines.',
      tab: 'web-app-dev',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <polyline points="10 9 7 12 10 15" />
          <polyline points="14 15 17 12 14 9" />
        </svg>
      ),
      bgIcon: 'rgba(30, 136, 229, 0.08)',
      colorIcon: 'var(--color-blue)'
    },
  ];

  const handleServiceClick = (serviceId) => {
    setCurrentTab(serviceId);
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
          <span className="section-tag">Enterprise IT Solutions & Services</span>
          <h2 className="section-title">Full-Suite Enterprise Software Engineering & IT Consulting</h2>
          <p className="section-subtitle">
            We provide industry-leading digital transformation, custom SaaS architectures, enterprise ERP/CRM system integrations, ServiceNow  solutions, and performance marketing to optimize operations and scale growth.
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
                  onClick={() => handleServiceClick(service.id)}
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
        .row-bg-web-app-dev { background-color: #ffffff; }
        .row-bg-erp-crm { background-color: #f1f5f9; }       /* Subtle cool slate */
        .row-bg-mobile-app-dev { background-color: #faf5ff; }       /* Subtle soft purple */
        .row-bg-it-bpo { background-color: #f0f7f7; }    /* Subtle soft teal */
        .row-bg-digital-marketing { background-color: #fafaf9; } /* Subtle soft stone warm gray */
        .row-bg-id-card-printing { background-color: #ecf5ff; } /* Subtle soft brand blue */

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
          font-weight: 500;
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
          font-weight: 500;
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
          font-weight: 500;
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
