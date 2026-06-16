import { useEffect, useRef, useState } from 'react';
import region from '../assets/regions.png';

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function useCountUp(target, dur = 1600, go = false) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!go) return;
    let v = 0;
    const step = Math.ceil(target / (dur / 16));
    const t = setInterval(() => { v += step; if (v >= target) { setN(target); clearInterval(t); } else setN(v); }, 16);
    return () => clearInterval(t);
  }, [target, dur, go]);
  return n;
}

const FadeIn = ({ children, delay = 0, className = '' }) => {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} className={`fade-block ${visible ? 'fade-visible' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

const methodologies = [
  {
    title: 'ITIL (Information Technology Infrastructure Library)',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
    items: [
      'Incident Management',
      'Problem Management',
      'Change Management',
      'Service Request Management',
      'Service Level Management'
    ]
  },
  {
    title: 'Agile Methodology',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
      </svg>
    ),
    items: [
      'Scrum Framework',
      'Sprint Planning',
      'Daily Standups',
      'Sprint Reviews',
      'Continuous Improvement'
    ]
  },
  {
    title: 'Project Management Professional (PMP) Practices',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    items: [
      'Project Planning',
      'Scope Management',
      'Risk Management',
      'Cost Management',
      'Stakeholder Management'
    ]
  },
  {
    title: 'DevOps',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4z" />
      </svg>
    ),
    items: [
      'Continuous Integration (CI)',
      'Continuous Deployment (CD)',
      'Release Management',
      'Infrastructure Automation',
      'Monitoring & Logging'
    ]
  },
  {
    title: 'Software Development Life Cycle (SDLC)',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
    items: [
      'Requirement Analysis',
      'Design',
      'Development',
      'Testing',
      'Deployment',
      'Maintenance'
    ]
  },
  {
    title: 'Quality Assurance (QA)',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 11 11 13 15 9" />
      </svg>
    ),
    items: [
      'Manual Testing',
      'Automation Testing',
      'Performance Testing',
      'Security Testing',
      'User Acceptance Testing (UAT)'
    ]
  },
  {
    title: 'Information Security',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    items: [
      'Secure Coding Practices',
      'OWASP Guidelines',
      'Data Protection',
      'Access Control',
      'Vulnerability Management'
    ]
  },
  {
    title: 'Cloud & Modern Architecture',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
    items: [
      'Cloud-Native Applications',
      'Microservices Architecture',
      'API-First Development',
      'Scalability & Performance Optimization'
    ]
  },
  {
    title: 'Customer Success & Support',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
    items: [
      'Help Desk Support',
      'SLA Management',
      'Knowledge Management',
      'Continuous Service Improvement'
    ]
  }
];

export default function About() {
  const heroRef = useRef(null);
  const parallaxImgRef = useRef(null);
  const storyLeftImgRef = useRef(null);
  const founderBgRef = useRef(null);
  const [statsRef, statsVisible] = useInView(0.3);

  const c1 = useCountUp(23, 1200, statsVisible);
  const c2 = useCountUp(200, 1400, statsVisible);
  const c3 = useCountUp(98, 1300, statsVisible);
  const c4 = useCountUp(50, 1500, statsVisible);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        heroRef.current.style.backgroundPositionY = `${scrollY * 0.45}px`;
      }
      if (parallaxImgRef.current) {
        const scrollY = window.scrollY;
        parallaxImgRef.current.style.transform = `translateY(${scrollY * 0.05}px) scale(1.1)`;
      }
      if (storyLeftImgRef.current) {
        const rect = storyLeftImgRef.current.parentElement.getBoundingClientRect();
        const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        storyLeftImgRef.current.style.transform = `translateY(${(progress - 0.5) * 80}px) scale(1.12)`;
      }
      if (founderBgRef.current) {
        const rect = founderBgRef.current.parentElement.getBoundingClientRect();
        const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        founderBgRef.current.style.transform = `translateY(${(progress - 0.5) * -80}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const values = [
    { n: '01', title: 'Quality-First Engineering', desc: 'Rigorous, test-driven engineering standards across every codebase, workflow, and cloud deployment.' },
    { n: '02', title: 'Customer Centricity', desc: 'We translate complex technical requirements into measurable commercial value and operational results.' },
    { n: '03', title: 'Transparent Operations', desc: 'Full sprint visibility, SLA dashboards, and weekly executive briefings keep stakeholders in control.' },
    { n: '04', title: 'Continuous Enablement', desc: 'We upskill client teams through certified training programmes and ongoing platform coaching.' },
  ];

  const regions = [
    {
      svg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1M18.4 18.4l-2.1-2.1M7.7 7.7L5.6 5.6" />
        </svg>
      ),
      region: 'India',
      years: '10+',
      detail: '40+ enterprise implementations across BFSI, telecom, and government.'
    },
    {
      svg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      region: 'Middle East',
      years: '8',
      detail: 'Major clients in government, telecom, and banking sectors.'
    },
    {
      svg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20" />
        </svg>
      ),
      region: 'APAC, UK, USA & Australia',
      years: '3+',
      detail: '8+ global clients across diverse industries and verticals.'
    },
  ];

  const marqueeItems = [
    'ServiceNow ', 'Cloud Architecture', 'ITIL  ', 'Digital Transformation',
    'AI & Automation', 'BPO Services', 'DevOps', 'ISO 27001', 'Custom Software',
    'Mobile Apps', 'ELK Stack', 'BMC Remedy', 'SolarWinds', 'MLOps',
  ];

  const approach = [
    {
      num: '01', title: 'Discover & Assess',
      desc: 'We initiate our process with a comprehensive audit of your IT infrastructure, assessing legacy SaaS architectures, ERP database schemas, CRM pipelines, and web applications. This detailed system assessment maps operational gaps and outlines a strategic roadmap aligned with your business transformation outcomes.',
      img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800',
    },
    {
      num: '02', title: 'Design & Architect',
      desc: 'Our senior systems architects design secure, future-ready digital solutions. We draft scalable blueprints for multi-tenant SaaS structures, unified ERP integrations, custom CRM sales pipelines, responsive web applications, and modern ITIL governance frameworks.',
      img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800',
    },
    {
      num: '03', title: 'Deliver & Deploy',
      desc: 'Leveraging Agile Scrum methodologies, our engineering teams build and configure your platforms. We write high-performance microservices, customize React frontends, integrate third-party APIs, and deploy enterprise automation workflows under rigorous automated testing and continuous integration (CI/CD) practices.',
      img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800',
    },
    {
      num: '04', title: 'Enable & Support',
      desc: 'We run dedicated post-deployment managed services, including end-user coaching and administrator training for custom SaaS, CRM, and ERP applications. Our proactive 24/7 technical support, security patching, and platform optimization reviews guarantee continuous uptime and maximum system ROI.',
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800',
    },
  ];

  return (
    <div className="about-page">

      {/* ── HERO — full-bleed parallax ── */}
      <section className="ab-hero" ref={heroRef}>
        <div className="ab-hero-overlay" />
        <div className="container ab-hero-content">
          <FadeIn>
            <span className="ab-eyebrow">WHO WE ARE</span>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="ab-hero-title">
              Discover the Genius<br />Behind Digital<br />
              <span className="ab-hero-accent">Transformation</span>
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="ab-hero-sub">
              23+ years. 5 global regions. 200+ enterprise projects.<br />
              One mission — making technology work for your business.
            </p>
          </FadeIn>
        </div>
        <div className="ab-hero-right-heading">
          <h2>Know About Us</h2>
        </div>
        <div className="ab-hero-scroll-hint">
          <div className="ab-scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ── MARQUEE STRIP ── */}
      <div className="ab-marquee-strip">
        <div className="ab-marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="ab-marquee-item">
              {item} <span className="ab-marquee-dot">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── STORY — editorial split ── */}
      <section className="ab-section ab-story">
        <div className="container">
          <div className="ab-story-grid">
            <FadeIn className="ab-story-left">
              <div className="ab-story-left-bg-wrap">
                <img
                  ref={storyLeftImgRef}
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000"
                  alt="Corporate building facade"
                  className="ab-story-left-bg"
                />
                <div className="ab-story-left-overlay" />
              </div>
              <div className="ab-story-left-content">
                <span className="ab-label ab-label-light">OUR STORY</span>
                <h2 className="ab-h2 ab-h2-light">
                  New in the Market.<br />
                  <span className="ab-story-accent-light">Not New to the Mission.</span>
                </h2>
                <div className="ab-story-deco">
                  <span className="ab-deco-line-light"></span>
                  <span className="ab-deco-dot-light"></span>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={150} className="ab-story-right">
              <p className="ab-story-lead">
                We are new in the market — but not new to the mission. With 23+ years of global IT experience, Genius Minds Making Code is built on deep expertise, proven delivery, and a passion for innovation across ServiceNow, cloud infrastructure, and enterprise automation.
              </p>
              <div className="ab-story-divider"></div>
              <p className="ab-story-paragraph">
                We move faster, think smarter, and challenge the status quo. Not just a startup — we are a fearless, agile partner for real transformation.
              </p>
              <div className="ab-story-trust-pill">
                <span className="ab-trust-pill-label">Global Enterprise Footprint</span>
                <p className="ab-trust-pill-text">
                  Our consultants have served government agencies, banks, telecoms, and Fortune-class enterprises across India, the Middle East, Europe, USA, and Asia-Pacific.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="ab-stats-bar" ref={statsRef}>
        {[
          { val: c1, suffix: '+', label: 'Years of Global Experience' },
          { val: c2, suffix: '+', label: 'Enterprise Projects Delivered' },
          { val: c3, suffix: '%', label: 'Client Satisfaction Rate' },
          { val: c4, suffix: '+', label: 'Enterprise Clients Served' },
        ].map((s, i) => (
          <div key={i} className="ab-stat-item">
            <span className="ab-stat-num">{s.val}{s.suffix}</span>
            <span className="ab-stat-lbl">{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── FOUNDER — sticky image + scroll text ── */}
      <section className="ab-section ab-founder">
        <div className="ab-founder-bg-wrap">
          <div className="ab-founder-bg" ref={founderBgRef} />
        </div>
        <div className="container">
          <div className="ab-founder-grid">

            <div className="ab-founder-sticky">
              <div className="ab-parallax-wrap">
                <img
                  ref={parallaxImgRef}
                  // src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800"
                  alt="Genius Minds Founder"
                  className="ab-parallax-img"
                />
                <div className="ab-parallax-overlay" />
                <div className="ab-img-badge">
                  <strong>23+</strong>
                  <span>Years Global IT Leadership</span>
                </div>
              </div>
            </div>

            <div className="ab-founder-content">
              <FadeIn>
                <span className="ab-label">LEADERSHIP & VISION</span>
                <h2 className="ab-h2">About the Founder</h2>
                <p className="ab-body-lg">
                  With over 23 years of global IT experience, our founder has served as Lead Architect, Enterprise Architect, and Senior Manager — delivering digital transformation programmes across India, the Middle East, Europe, USA, and Asia-Pacific.
                </p>
                <p className="ab-body">
                  Deep expertise in ServiceNow, BMC Remedy, SolarWinds, Micro Focus, ELK, AI Ops, and Microsoft — combined with strategic vision — has helped organisations automate IT operations, modernise infrastructure, and elevate service delivery to world-class standards.
                </p>
              </FadeIn>

              <div className="ab-regions">
                {regions.map((r, i) => (
                  <FadeIn key={i} delay={i * 100}>
                    <div className="ab-region-card">
                      <div className="ab-region-icon">
                        {r.svg}
                      </div>
                      <div className="ab-region-body">
                        <div className="ab-region-top">
                          <strong>{r.region}</strong>
                          <span className="ab-region-years">{r.years} yrs</span>
                        </div>
                        <p>{r.detail}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── VALUES — large numbered cards ── */}
      <section className="ab-section ab-values">
        <div className="ab-values-overlay" />
        <div className="container">
          <FadeIn>
            <div className="ab-values-header">
              <span className="ab-label ab-label-light">OUR PILLARS</span>
              <h2 className="ab-h2 ab-h2-light">Core Values That Drive Us</h2>
            </div>
          </FadeIn>
          <div className="ab-values-grid">
            {values.map((v, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="ab-value-card">
                  <span className="ab-value-num">{v.n}</span>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                  <div className="ab-value-line" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPROACH — full-bleed image panels ── */}
      <section className="ab-section ab-approach-section">
        <div className="container">
          <FadeIn>
            <span className="ab-label">HOW WE WORK</span>
            <h2 className="ab-h2" style={{ maxWidth: 540, marginBottom: 60 }}>Our Four-Phase Delivery Approach</h2>
          </FadeIn>
        </div>
        {approach.map((item, i) => (
          <FadeIn key={i}>
            <div className={`ab-approach-row ${i % 2 === 1 ? 'ab-approach-rev' : ''}`}>
              <div className="ab-approach-img-wrap">
                <img src={item.img} alt={item.title} className="ab-approach-img" />
                <div className="ab-approach-num-overlay">{item.num}</div>
              </div>
              <div className="ab-approach-text">
                <span className="ab-approach-step">Phase {item.num}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </section>

      {/* ── GLOBAL PRESENCE ── */}
      <section className="ab-section ab-global">
        <div className="container">
          <FadeIn className="ab-global-header">
            <span className="ab-label">GLOBAL PRESENCE</span>
            <h2 className="ab-h2">Delivering Excellence Across 5 Regions</h2>
            <p className="ab-body">
              From enterprise IT implementations in India to government sector projects in the Middle East and digital transformation engagements across the USA, UK, and Asia-Pacific — our footprint is truly global.
            </p>
          </FadeIn>
          <div className="ab-global-grid">
            <FadeIn className="ab-global-left">
              <div className="ab-global-grid-details">
                {[
                  {
                    region: 'Europe & APAC',
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    ),
                    desc: '40+ implementations delivered across major BFSI, telecom, and government agencies.',
                  },
                  {
                    region: 'Middle East (UAE & KSA)',
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    ),
                    desc: 'Strategic automation, platform consulting, and digital operations for banking and telecom.',
                  },
                  {
                    region: 'Americas (USA)',
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    ),
                    desc: 'Enterprise ServiceNow platform architecture, custom cloud design, and integrations.',
                  },
                  {
                    region: 'Australlia',
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    ),
                    desc: 'High-scale DevOps orchestration, agile sprint delivery, and digital transformation consulting.',
                  },
                ].map((item, i) => (
                  <div key={i} className="ab-global-card">
                    <div className="ab-global-card-header">
                      <div className="ab-global-card-icon">{item.icon}</div>
                      <h3>{item.region}</h3>
                    </div>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={150} className="ab-global-right">
              <div className="ab-global-img-wrap">
                <img
                  src={region}
                  alt="Global digital transformation operations"
                  className="ab-global-img"
                />
                <div className="ab-global-overlay" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── GOVERNANCE METRICS ── */}
      <section className="ab-section ab-gov">
        <div className="container">
          <FadeIn>
            <div className="ab-gov-header">
              <span className="ab-label">GOVERNANCE</span>
              <h2 className="ab-h2">ITIL   & Agile Framework</h2>
              <p className="ab-gov-sub">
                All operations governed under ITIL   standards with structured Agile sprints — ensuring compliance, stability, and clean delivery across every engagement.
              </p>
            </div>
          </FadeIn>
          <div className="ab-gov-metrics">
            {[
              {
                val: '99.9%',
                lbl: 'SLA Compliance',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                )
              },
              {
                val: '100%',
                lbl: 'ITIL   Certified Leads',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                )
              },
              {
                val: '4.8/5',
                lbl: 'Client Satisfaction',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                )
              },
              {
                val: 'ISO',
                lbl: '20000 & 27000 Aligned',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0 " />
                  </svg>
                )
              },
            ].map((m, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="ab-gov-card">
                  <div className="ab-gov-icon-wrap">{m.icon}</div>
                  <span className="ab-gov-val">{m.val}</span>
                  <span className="ab-gov-lbl">{m.lbl}</span>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* ── METHODOLOGIES & BEST PRACTICES ── */}
          <div className="ab-methodologies-container">
            <FadeIn>
              <div className="ab-meth-header">
                <span className="ab-label">STANDARDS & FRAMEWORKS</span>
                <h3 className="ab-meth-title">Our Methodologies & Best Practices</h3>
                <p className="ab-meth-sub">
                  We leverage industry-leading operational standards and execution frameworks to ensure security, high availability, and rapid software delivery.
                </p>
              </div>
            </FadeIn>

            <div className="ab-meth-grid">
              {methodologies.map((m, idx) => (
                <FadeIn key={idx} delay={idx * 50}>
                  <div className="ab-meth-card">
                    <div className="ab-meth-card-header">
                      <div className="ab-meth-icon-wrap">{m.icon}</div>
                      <h4 className="ab-meth-card-title">{m.title}</h4>
                    </div>
                    <ul className="ab-meth-list">
                      {m.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="ab-meth-item">
                          <svg className="ab-meth-check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="ab-cta">
        <div className="ab-cta-overlay" />
        <div className="container ab-cta-content">
          <FadeIn>
            <span className="ab-cta-eyebrow">READY TO TRANSFORM?</span>
            <h2 className="ab-cta-title">Building Smart Solutions For a Future Digital World</h2>
            <p className="ab-cta-sub">
              Join forces with Genius Minds Making Code to revolutionise your business operations. Our intelligent IT solutions and global expertise are designed to propel your organisation to new heights.
            </p>
            <div className="ab-cta-actions">
              <button className="ab-btn-primary">
                Contact Us Today
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>
              <button className="ab-btn-outline-white">View Our Services</button>
            </div>
          </FadeIn>
        </div>
      </section>

      <style>{`
        .about-page { background: #ffffff; overflow-x: hidden; }

        /* ── Fade animation ── */
        .fade-block { opacity: 0; transform: translateY(32px); transition: opacity 0.75s cubic-bezier(0.16,1,0.3,1), transform 0.75s cubic-bezier(0.16,1,0.3,1); }
        .fade-visible { opacity: 1; transform: translateY(0); }

        /* ── Shared ── */
        .ab-section { padding: 50px 0; }
        .ab-label {
          display: inline-block;
          font-family: var(--font-heading);
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--color-blue);
          margin-bottom: 16px;
        }
        .ab-label-light { color: rgba(255,255,255,0.5); }

        .ab-h2 {
          font-size: 2.8rem;
          font-weight: 600;
          color: var(--color-navy);
          line-height: 1.15;
          letter-spacing: -0.025em;
          margin-bottom: 24px;
        }
        .ab-h2-light { color: #ffffff; }

        .ab-body-lg {
         font-size: 1.15rem; 
         color: var(--color-text-secondary); 
         line-height: 1.75; margin-bottom: 18px;
        }
        .ab-body {
         font-size: 1rem; 
         color: var(--color-text-secondary); 
         line-height: 1.8; margin-bottom: 16px; 
         
         }
        .ab-body strong, .ab-body-lg strong { color: var(--color-navy); }

        .ab-eyebrow {
          display: inline-block;
          font-family: var(--font-heading);
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.6);
          border: 1px solid rgba(255,255,255,0.2);
          padding: 6px 14px;
          border-radius: 20px;
          margin-bottom: 24px;
        }

        /* ── Hero ── */
        .ab-hero {
          position: relative;
          height: 96vh;
          min-height: 680px;
          display: flex;
          align-items: center;
          background: #001226 url('https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1600') center/cover no-repeat;
          background-attachment: fixed;
          overflow: hidden;
        }
        .ab-hero-overlay {
          position: absolute;
          inset: 0;
          background: 
            linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 18, 38, 0.95) 90%),
            linear-gradient(90deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 3, 6, 0.85) 45%, rgba(0, 18, 38, 0.3) 70%, rgba(0, 5, 10, 0) 100%);
        }
        .ab-hero-content {
          position: relative;
          z-index: 2;
          padding-top: 1px;
        }
        .ab-hero-title {
          font-size: clamp(2.8rem, 6vw, 5.5rem);
          font-weight: 600;
          color: #ffffff;
          line-height: 1.08;
          letter-spacing: -0.03em;
          margin-bottom: 28px;
        }
        .ab-hero-accent {
          background: linear-gradient(90deg, #60a5fa, #1e88e5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ab-hero-sub {
          font-size: 1.15rem;
          color: rgba(255,255,255,0.65);
          line-height: 1.7;
          max-width: 520px;
        }
        .ab-hero-scroll-hint {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          z-index: 2;
        }
        .ab-scroll-line {
          width: 1px;
          height: 60px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.6), transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }
        @keyframes scrollPulse { 0%,100%{opacity:0.4;transform:scaleY(1)} 50%{opacity:1;transform:scaleY(0.7)} }
        .ab-hero-scroll-hint span { font-size:0.65rem; letter-spacing:0.2em; text-transform:uppercase; color:rgba(255,255,255,0.4); }
        .ab-hero-right-heading {
          position: absolute;
          bottom: 40px;
          right: 8%;
          z-index: 5;
        }
        .ab-hero-right-heading h2 {
          font-family: var(--font-heading);
          font-size: clamp(1.2rem, 3vw, 2rem);
          font-weight: 500;
          color: rgba(255, 255, 255, 0.85) !important;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin: 0;
          text-shadow: 0 4px 15px rgba(0, 15, 30, 0.6);
        }

        /* ── Marquee ── */
        .ab-marquee-strip {
          background: var(--color-navy);
          padding: 14px 0;
          overflow: hidden;
          border-top: 1px solid rgba(255,255,255,0.06);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .ab-marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 28s linear infinite;
        }
        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        .ab-marquee-item {
          font-family: var(--font-heading);
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          padding: 0 28px;
          white-space: nowrap;
        }
        .ab-marquee-dot { color: var(--color-blue); margin-left: 4px; }

        /* ── Story ── */
        .ab-story { background: #ffffff; position: relative; }
        .ab-story-grid {
          display: grid;
          grid-template-columns: 1.1fr 1.3fr;
          gap: 80px;
          align-items: stretch;
        }
        .ab-story-left {
          position: relative;
          overflow: hidden;
          padding: 80px 48px;
          min-height: 480px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          border-radius: 0px;
        }
        .ab-story-left-bg-wrap {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
        }
        .ab-story-left-bg {
          width: 100%;
          height: 130%;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
          will-change: transform;
          transform: translateY(0) scale(1.12);
        }
        .ab-story-left-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(0, 30, 64, 0.82) 100%);
        }
        .ab-story-left-content {
          position: relative;
          z-index: 2;
        }
        .ab-story-accent-light {
          color: #60a5fa;
        }
        .ab-story-deco {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 24px;
        }
        .ab-deco-line-light {
          width: 80px;
          height: 1px;
          background: linear-gradient(90deg, #60a5fa 0%, rgba(96, 165, 250, 0) 100%);
          display: block;
        }
        .ab-deco-dot-light {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: #60a5fa;
          display: block;
        }
        @media (max-width: 600px) {
          .ab-story-left {
            padding: 60px 24px;
            min-height: 360px;
          }
        }
        .ab-story-lead {
          font-size: 1.15rem;
          color: var(--color-text-secondary);
          line-height: 1.8;
          margin-bottom: 24px;
        }
        .ab-story-highlight {
          color: var(--color-navy);
          font-weight: 600;
          background: linear-gradient(180deg, transparent 65%, rgba(30, 136, 229, 0.12) 65%);
          padding: 0 4px;
        }
        .ab-story-highlight-secondary {
          color: var(--color-navy);
          font-weight: 600;
        }
        .ab-story-divider {
          width: 100%;
          height: 1px;
          background-color: var(--color-border-light);
          margin: 24px 0;
        }
        .ab-story-paragraph {
          font-size: 1rem;
          color: var(--color-text-secondary);
          line-height: 1.8;
        }
        .ab-story-trust-pill {
          padding: 24px;
          background-color: var(--color-soft-bg);
          border-left: 3px solid var(--color-blue);
          border-radius: 2px;
          margin-top: 28px;
          box-shadow: var(--shadow-sm);
        }
        .ab-trust-pill-label {
          display: block;
          font-family: var(--font-heading);
          font-size: 0.72rem;
          font-weight: 600;
          color: var(--color-blue);
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin-bottom: 8px;
        }
        .ab-trust-pill-text {
          font-size: 0.95rem;
          color: var(--color-text-secondary);
          line-height: 1.65;
          margin: 0;
        }

        /* ── Stats bar ── */
        .ab-stats-bar {
          background: var(--color-navy);
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        .ab-stat-item {
          padding: 48px 32px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          border-right: 1px solid rgba(255,255,255,0.07);
          align-items: center;
          text-align: center;
        }
        .ab-stat-item:last-child { border-right: none; }
        .ab-stat-num {
          font-family: var(--font-heading);
          font-size: 3.2rem;
          font-weight: 600;
          line-height: 1;
          letter-spacing: -0.03em;
          background: linear-gradient(135deg, #ffffff 0%, #60a5fa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ab-stat-lbl {
          font-size: 0.75rem;
          font-weight: 600;
          color: rgba(255,255,255,0.4);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        /* ── Founder ── */
        .ab-founder {
          position: relative;
          background: var(--color-soft-bg);
          overflow: hidden;
        }
        .ab-founder-bg-wrap {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
        }
        .ab-founder-bg {
          width: 100%;
          height: 140%;
          position: absolute;
          top: -20%;
          left: 0;
          background-image: radial-gradient(circle at 15% 25%, rgba(30, 136, 229, 0.04) 0%, transparent 45%),
                            radial-gradient(circle at 85% 75%, rgba(30, 136, 229, 0.05) 0%, transparent 45%);
          will-change: transform;
        }
        .ab-founder-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 72px;
          align-items: start;
          position: relative;
          z-index: 1;
        }
        .ab-founder-sticky { position: sticky; top: 130px; }
        .ab-parallax-wrap {
          position: relative;
          height: 580px;
          overflow: hidden;
          border-radius: 2px;
          box-shadow: 0 40px 80px rgba(15,23,42,0.15);
        }
         .ab-parallax-img {
          width: 100%; height: 120%;
          object-fit: cover;
          position: absolute;
          top: -10%;
          left: 0;
          will-change: transform;
          transform: translateY(0) scale(1.1);
        }
        .ab-parallax-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(160deg, rgba(30, 136, 229, 0.12) 0%, rgba(0, 18, 38, 0.5) 100%);
        }
        .ab-img-badge {
          position: absolute;
          bottom: 28px; left: 28px;
          background: rgba(255,255,255,0.97);
          backdrop-filter: blur(12px);
          border-radius: 10px;
          padding: 14px 20px;
          z-index: 2;
          box-shadow: 0 8px 32px rgba(0,0,0,0.2);
        }
        .ab-img-badge strong { display:block; font-size:1.4rem; font-weight: 600; color:var(--color-navy); line-height:1; }
        .ab-img-badge span { font-size:0.7rem; font-weight:600; color:var(--color-text-muted); text-transform:uppercase; letter-spacing:0.08em; }

        .ab-regions {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-top: 32px;
        }
        .ab-region-card {
          display: flex;
          align-items: flex-start;
          gap: 18px;
          padding: 20px 24px;
          background: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: 2px;
          transition: all var(--transition-fast);
        }
        .ab-region-card:hover {
          border-color: rgba(30, 136, 229, 0.35);
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }
        .ab-region-card:nth-child(3) {
          grid-column: span 2;
        }
        .ab-region-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--color-blue);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all var(--transition-fast);
        }
        .ab-region-card:hover .ab-region-icon {
          transform: scale(1.08);
        }
        .ab-region-body { flex: 1; }
        .ab-region-top { display:flex; align-items:center; justify-content:space-between; margin-bottom:4px; }
        .ab-region-top strong { font-size:0.95rem; font-weight: 500; color:var(--color-navy); }
        .ab-region-years {
          font-family: var(--font-heading);
          font-size: 0.7rem; font-weight: 600;
          color: var(--color-blue);
          background: rgba(30, 136, 229, 0.08);
          border: 1px solid rgba(30, 136, 229, 0.15);
          border-radius: 1px;
          padding: 3px 10px;
        }
        .ab-region-body p { font-size:0.85rem; color:var(--color-text-secondary); margin:0; line-height:1.5; }

        /* ── Values ── */
        .ab-values {
          position: relative;
          background: url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600') center/cover no-repeat;
          background-attachment: fixed;
          padding: 100px 0;
        }
        .ab-values-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(135deg, rgba(0, 18, 38, 0.94) 0%, rgba(15, 23, 42, 0.88) 60%, rgba(0, 12, 24, 0.96) 100%);
        }
        .ab-values .container {
          position: relative;
          z-index: 2;
        }
        .ab-values-header { margin-bottom: 60px; }
        .ab-values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.07);
        }
        .ab-value-card {
          padding: 40px 32px;
          background: rgba(15, 23, 42, 0.55);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          position: relative;
          overflow: hidden;
          transition: background var(--transition-normal);
        }
        .ab-value-card:hover { background: rgba(30,136,229,0.12); }
        .ab-value-num {
          font-family: var(--font-heading);
          font-size: 4rem; font-weight: 600;
          color: rgba(231, 240, 248, 0.31);
          line-height: 1;
          margin-bottom: 20px;
          display: block;
          transition: color var(--transition-normal);
        }
        .ab-value-card:hover .ab-value-num { color: rgba(30,136,229,0.35); }
        .ab-value-card h3 { font-size: 1rem; font-weight: 500; color: #ffffff; margin-bottom: 12px; }
        .ab-value-card p { font-size: 0.87rem; color: rgba(255,255,255,0.7); line-height: 1.65; margin: 0; }
        .ab-value-line {
          position: absolute; bottom: 0; left: 0;
          width: 0; height: 3px;
          background: var(--color-blue);
          transition: width var(--transition-normal);
        }
        .ab-value-card:hover .ab-value-line { width: 100%; }

        /* ── Approach ── */
        .ab-approach-section { padding-top: 80px; padding-bottom: 0; background: #ffffff; }
        .ab-approach-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 480px;
        }
        .ab-approach-rev { direction: rtl; }
        .ab-approach-rev > * { direction: ltr; }
        .ab-approach-img-wrap {
          position: relative;
          overflow: hidden;
          height: 480px;
        }
        .ab-approach-img {
          width: 100%; height: 120%;
          object-fit: cover;
          position: absolute;
          top: 0; left: 0;
          transition: transform 0.8s cubic-bezier(0.16,1,0.3,1);
        }
        .ab-approach-row:hover .ab-approach-img { transform: scale(1.05); }
        .ab-approach-num-overlay {
          position: absolute;
          bottom: 24px; right: 24px;
          font-family: var(--font-heading);
          font-size: 3rem; font-weight: 600;
          color: rgba(233, 221, 221, 0.77);
          line-height: 1;
          z-index: 2;
          letter-spacing: -0.04em;
        }
        .ab-approach-text {
          padding: 64px 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: var(--color-soft-bg);
          border-bottom: 1px solid var(--color-border);
        }
        .ab-approach-step {
          font-family: var(--font-heading);
          font-size: 0.7rem; font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--color-blue);
          margin-bottom: 14px;
          display: block;
        }
        .ab-approach-text h3 { font-size: 1.8rem; font-weight: 500; color: var(--color-navy); margin-bottom: 16px; line-height: 1.25; }
        .ab-approach-text p { font-size: 1rem; color: var(--color-text-secondary); line-height: 1.75; }

        /* ── Global ── */
        .ab-global { background: #ffffff; position: relative; }
        .ab-global-header {
          max-width: 800px;
          margin-bottom: 48px;
        }
        .ab-global-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        .ab-global-left {
          display: flex;
          flex-direction: column;
        }
        .ab-global-grid-details {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-top: 0;
        }
        .ab-global-card {
          background: var(--color-soft-bg);
          border: 1px solid var(--color-border);
          padding: 24px;
          border-radius: 2px;
          transition: all var(--transition-fast);
        }
        .ab-global-card:hover {
          border-color: rgba(30, 136, 229, 0.35);
          box-shadow: var(--shadow-md);
          transform: translateY(-2px);
        }
        .ab-global-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 8px;
        }
        .ab-global-card-icon {
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: var(--color-blue);
          flex-shrink: 0;
          transition: all var(--transition-fast);
        }
        .ab-global-card:hover .ab-global-card-icon {
          transform: scale(1.08);
        }
        .ab-global-card h3 {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-navy);
          margin: 0;
        }
        .ab-global-card p {
          font-size: 0.85rem;
          color: var(--color-text-secondary);
          line-height: 1.55;
          margin: 0;
        }
        .ab-global-right {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ab-global-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 1672 / 941;
          overflow: hidden;
          border-radius: 2px;
          box-shadow: 0 20px 40px rgba(15,23,42,0.08);
        }
        .ab-global-img { width:100%; height:100%; object-fit:cover; transition: transform 0.8s ease; }
        .ab-global-img-wrap:hover .ab-global-img { transform: scale(1.04); }
        .ab-global-overlay {
          position: absolute; inset: 0;
          // background: linear-gradient(160deg, rgba(219, 226, 234, 0.08) 0%, rgba(216, 221, 228, 0.4) 100%);
        }

        /* ── Governance ── */
        .ab-gov {
          position: relative;
          background: var(--color-soft-bg);
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
        }
        .ab-gov-header { text-align:center; margin-bottom:64px; }
        .ab-gov-sub { font-size:1rem; color:var(--color-text-secondary); max-width:580px; margin:0 auto; line-height:1.7; }
        .ab-gov-metrics {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .ab-gov-card {
          padding: 40px 24px;
          background: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: 2px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          transition: all var(--transition-normal);
          box-shadow: var(--shadow-sm);
        }
        .ab-gov-card:hover {
          border-color: rgba(30, 136, 229, 0.35);
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }
        .ab-gov-icon-wrap {
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--color-blue);
          transition: all var(--transition-fast);
        }
        .ab-gov-card:hover .ab-gov-icon-wrap {
          transform: scale(1.08);
        }
        .ab-gov-val {
          font-family: var(--font-heading);
          font-size: 2.8rem;
          font-weight: 600;
          color: var(--color-navy);
          line-height: 1;
          letter-spacing: -0.02em;
        }
        .ab-gov-lbl {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          text-align: center;
        }

        /* ── Methodologies & Best Practices ── */
        .ab-methodologies-container {
          margin-top: 80px;
          border-top: 1px solid var(--color-border);
          padding-top: 80px;
        }
        .ab-meth-header {
          text-align: center;
          margin-bottom: 50px;
        }
        .ab-meth-title {
          font-family: var(--font-heading);
          font-size: 2.2rem;
          font-weight: 600;
          color: var(--color-navy);
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }
        .ab-meth-sub {
          font-size: 0.95rem;
          color: var(--color-text-secondary);
          max-width: 620px;
          margin: 0 auto;
          line-height: 1.6;
        }
        .ab-meth-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .ab-meth-card {
          background: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: 4px;
          padding: 32px 28px;
          transition: all var(--transition-normal);
          display: flex;
          flex-direction: column;
          gap: 20px;
          height: 100%;
        }
        .ab-meth-card:hover {
          border-color: rgba(30, 136, 229, 0.4);
          box-shadow: 0 10px 30px rgba(30, 136, 229, 0.06);
          transform: translateY(-2px);
        }
        .ab-meth-card-header {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .ab-meth-icon-wrap {
          color: var(--color-blue);
          background: rgba(30, 136, 229, 0.08);
          width: 42px;
          height: 42px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all var(--transition-fast);
        }
        .ab-meth-card:hover .ab-meth-icon-wrap {
          background: var(--color-blue);
          color: #ffffff;
        }
        .ab-meth-card-title {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-navy);
          margin: 0;
          line-height: 1.3;
        }
        .ab-meth-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .ab-meth-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.9rem;
          color: var(--color-text-primary);
          line-height: 1.4;
        }
        .ab-meth-check {
          color: var(--color-blue);
          flex-shrink: 0;
          margin-top: 3px;
        }

        /* ── CTA ── */
        .ab-cta {
          position: relative;
          padding: 140px 0;
          text-align: center;
          overflow: hidden;
          background: url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2000') center/cover no-repeat;
          background-attachment: fixed;
        }
        .ab-cta-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
background: linear-gradient(
  135deg,
  rgba(3, 16, 40, 0.45) 0%,
  rgba(3, 16, 40, 0.65) 55%,
  rgba(3, 16, 40, 0.78) 100%
);     }
        .ab-cta-content {
          position: relative;
          z-index: 2;
          max-width: 680px;
          margin: 0 auto;
        }
        .ab-cta-eyebrow {
          display: inline-block;
          font-family: var(--font-heading);
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #75aef3;
          margin-bottom: 16px;
        }
        .ab-cta-title {
          font-size: clamp(2.4rem, 5vw, 3.8rem);
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 24px;
          line-height: 1.15;
          letter-spacing: -0.02em;
        }
        .ab-cta-sub {
          font-size: 1.08rem;
          color: rgba(255, 255, 255, 0.75);
          margin-bottom: 44px;
          line-height: 1.75;
          max-width: 620px;
          margin-left: auto;
          margin-right: auto;
        }
        .ab-cta-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .ab-btn-primary {
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
          box-shadow: 0 8px 24px rgba(30, 136, 229, 0.25);
        }
        .ab-btn-primary:hover {
          background: var(--color-blue-hover);
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(30, 136, 229, 0.4);
        }
        .ab-btn-outline-white {
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
          border: 1.5px solid rgba(255, 255, 255, 0.2);
          cursor: pointer;
          border-radius: 2px;
          transition: all var(--transition-fast);
        }
        .ab-btn-outline-white:hover {
          border-color: #ffffff;
          background: rgba(255, 255, 255, 0.04);
          transform: translateY(-2px);
        }

        /* ── Responsive ── */
        @media (max-width: 1100px) {
          .ab-values-grid { grid-template-columns: repeat(2,1fr); }
          .ab-gov-metrics { grid-template-columns: repeat(2,1fr); }
          .ab-meth-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 900px) {
          .ab-hero, .ab-cta, .ab-values { background-attachment: scroll; }
          .ab-meth-grid { grid-template-columns: 1fr; }
          .ab-hero-overlay {
            background: linear-gradient(to bottom, rgba(0, 18, 38, 0.95) 0%, rgba(0, 18, 38, 0.75) 100%);
          }
          .ab-hero-title { font-size: 2.6rem; }
          .ab-story-grid, .ab-founder-grid, .ab-global-grid { grid-template-columns: 1fr; gap: 40px; }
          .ab-regions { grid-template-columns: 1fr; }
          .ab-region-card:nth-child(3) { grid-column: span 1; }
          .ab-founder-sticky { position: relative; top: auto; }
          .ab-parallax-wrap { height: 380px; }
          .ab-stats-bar { grid-template-columns: repeat(2,1fr); }
          .ab-stat-item:nth-child(2) { border-right: none; }
          .ab-stat-item:nth-child(3), .ab-stat-item:nth-child(4) { border-top: 1px solid rgba(255,255,255,0.07); }
          .ab-approach-row { grid-template-columns: 1fr; direction: ltr !important; }
          .ab-approach-img-wrap { height: 280px; }
          .ab-approach-text { padding: 40px 28px; }
          .ab-h2 { font-size: 2.2rem; }
          .ab-global-img-wrap { height: auto; aspect-ratio: 1672 / 941; }
        }

        @media (max-width: 600px) {
          .ab-section { padding: 70px 0; }
          .ab-values-grid { grid-template-columns: 1fr; }
          .ab-gov-metrics { grid-template-columns: 1fr 1fr; }
          .ab-stats-bar { grid-template-columns: 1fr 1fr; }
          .ab-h2 { font-size: 1.9rem; }
        }
      `}</style>
    </div>
  );
}
