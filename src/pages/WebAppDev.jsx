import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import saasHeroImg from '../assets/services/saas_hero_dashboard.png';
import { TechIcon, ServiceForm, FormSuccess } from './ServiceShared';

gsap.registerPlugin(ScrollTrigger);

const BG = '#f0f4ff'; // soft indigo tint

const STACK = [
  { title: 'Frontend Frameworks', desc: 'React, Angular, Next.js, TypeScript and TailwindCSS for fast, accessible, SEO-optimised interfaces.', techs: ['React', 'Angular', 'Next.js', 'TypeScript', 'TailwindCSS', 'Bootstrap'] },
  { title: 'Backend & APIs', desc: 'Node.js, Express.js, Python, Java with REST/GraphQL APIs backed by MySQL and MongoDB databases.', techs: ['Node.js', 'Express.js', 'Python', 'Java', 'MySQL', 'MongoDB'] },
  { title: 'Cloud & DevOps', desc: 'AWS (Lambda, S3, CloudFront), Docker containers, .NET services, Hibernate ORM, and CI/CD pipelines.', techs: ['AWS', 'Docker', '.NET', 'Hibernate', 'JavaScript', 'PostgreSQL'] },
];

export default function WebAppDev({ hideHero = false }) {
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    if (!hideHero) { document.title = 'Web Application & SaaS Development | GMMC'; window.scrollTo(0, 0); }
    const tl = gsap.timeline();
    tl.fromTo('.web-hero', { scale: 1.06, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.85, ease: 'power3.out' });
    tl.fromTo('.web-a', { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.55, stagger: 0.1, ease: 'power3.out' }, '-=0.4');
    const ct = ScrollTrigger.create({ trigger: '.web-cards', start: 'top 83%', onEnter: () => gsap.fromTo('.web-card', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.65, stagger: 0.13, ease: 'power2.out' }), once: true });
    return () => { tl.kill(); ct.kill(); };
  }, [hideHero]);

  return (
    <div style={{ background: BG, padding: '0 28px 24px' }}>
      <HeroBanner cls="web-hero" pill="Web & SaaS Engineering" title="Custom Web & Application Development" sub="Next.js edge-rendered sites, multi-tenant SaaS portals, and scalable serverless APIs — built for performance." img={saasHeroImg} />
      <div style={{ padding: '0 8px' }}>
        <Intro cls="web-a" text="We design, build, and deploy high-converting websites, React and Angular applications, and subscription-driven SaaS platforms on global edge networks with secure billing, tenant isolation, and CI/CD pipelines." />
        <Capabilities cls="web-a" items={[
          { t: 'Next.js & React Edge Rendering', d: 'ISR and Edge Middleware for sub-second LCP with global CDN deployment.' },
          { t: 'Multi-Tenant SaaS Architecture', d: 'Database schema partitioning, OAuth2/JWT scopes, and usage-based billing via Stripe.' },
          { t: 'Angular Enterprise Portals', d: 'Modular Angular apps with lazy loading, RxJS state management, and REST/GraphQL APIs.' },
          { t: 'RESTful & GraphQL APIs', d: 'Node.js / Express / Java Spring Boot APIs with rate limiting, caching, and structured logging.' },
          { t: 'MongoDB & MySQL Data Layers', d: 'Schema design, query optimisation, Hibernate ORM for Java apps, and Mongoose for Node.' },
          { t: 'Cloud Deployment & DevOps', d: 'AWS Lambda, EC2, S3, Docker containers, .NET microservices, and GitHub Actions CI/CD.' },
        ]} />
        <div style={{ marginBottom: 40 }}>
          <Tag>Technology Stack</Tag>
          <SectionH>Platforms & Tools</SectionH>
          <div className="web-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18 }}>
            {STACK.map(c => <TechCard key={c.title} cls="web-card" {...c} />)}
          </div>
        </div>
        <CtaSection
          tag="Free Audit" heading="Book a PageSpeed & Architecture Review"
          desc="Get a free 1-hour session with a lead developer to review bundle sizes, API design, and SaaS readiness."
          checks={['Bundle size, code-splitting, and CDN caching audit', 'Multi-tenant schema safety and Stripe billing review', 'Angular/React performance and accessibility check']}
          form={submitted ? <FormSuccess /> : <ServiceForm title="Book Architecture Audit" selectLabel="Project Scope" options={['Custom Web Application', 'Multi-Tenant SaaS Portal', 'Angular Enterprise App', 'Headless CMS Website']} submitLabel="Schedule Free Session" onSubmit={e => { e.preventDefault(); setSubmitted(true); }} />}
        />
      </div>
      <SharedStyles bg={BG} />
    </div>
  );
}

/* ─── Shared sub-components (defined once here, duplicated in each file to keep files self-contained) ─── */
function HeroBanner({ cls, pill, title, sub, img }) {
  return (
    <div className={`svc-hero-wrap ${cls}`} style={{ position: 'relative', width: '100%', height: 320, overflow: 'hidden', borderRadius: 12, marginBottom: 36 }}>
      <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.42)' }} />
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '32px 36px', background: 'linear-gradient(to top,rgba(3,10,30,0.88) 0%,rgba(3,10,30,0.1) 65%,transparent 100%)' }}>
        <span style={{ display: 'inline-block', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#93c5fd', background: 'rgba(59,130,246,0.18)', border: '1px solid rgba(59,130,246,0.35)', padding: '4px 12px', borderRadius: 9999, marginBottom: 10, width: 'fit-content' }}>{pill}</span>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#fff', margin: '0 0 8px', lineHeight: 1.2 }}>{title}</h2>
        <p style={{ fontSize: '0.9rem', color: '#cbd5e1', margin: 0, maxWidth: 640, lineHeight: 1.55 }}>{sub}</p>
      </div>
    </div>
  );
}
function Intro({ cls, text }) {
  return <div style={{ borderLeft: '3px solid var(--color-blue)', paddingLeft: 18, marginBottom: 36 }}><p className={cls} style={{ fontSize: '0.97rem', lineHeight: 1.72, color: 'var(--color-text-secondary)', margin: 0 }}>{text}</p></div>;
}
function Tag({ children }) {
  return <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.13em', textTransform: 'uppercase', color: 'var(--color-blue)', display: 'block', marginBottom: 6 }}>{children}</span>;
}
function SectionH({ children }) {
  return <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-navy)', margin: '0 0 20px' }}>{children}</h3>;
}
function Capabilities({ cls, items }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <Tag>Core Capabilities</Tag>
      <SectionH>What We Deliver</SectionH>
      <div className={cls} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 24px' }}>
        {items.map(i => (
          <div key={i.t} style={{ display: 'flex', gap: 12, padding: 14, border: '1px solid #dce4f0', borderRadius: 8, background: 'rgba(255,255,255,0.7)', transition: 'border-color 0.2s' }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--color-blue)', flexShrink: 0, marginTop: 7 }} />
            <div><h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-navy)', margin: '0 0 3px' }}>{i.t}</h4><p style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>{i.d}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
}
function TechCard({ cls, title, desc, techs }) {
  return (
    <div className={cls} style={{ background: '#fff', border: '1px solid #dce4f0', borderRadius: 10, padding: '24px 20px', display: 'flex', flexDirection: 'column', transition: 'transform 0.22s,box-shadow 0.22s,border-color 0.22s' }}>
      <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-navy)', margin: '0 0 8px' }}>{title}</h4>
      <p style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: '0 0 16px', flexGrow: 1 }}>{desc}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {techs.map(t => (
          <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-navy)', background: '#f1f5f9', border: '1px solid #e2e8f0', padding: '4px 10px', borderRadius: 6 }}>
            <TechIcon name={t} size={16} />{t}
          </span>
        ))}
      </div>
    </div>
  );
}
function CtaSection({ tag, heading, desc, checks, form }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 44, background: 'rgba(255,255,255,0.8)', border: '1px solid #dce4f0', borderRadius: 14, padding: '36px 36px' }}>
      <div>
        <Tag>{tag}</Tag>
        <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--color-navy)', margin: '0 0 10px' }}>{heading}</h3>
        <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', lineHeight: 1.65, margin: '0 0 18px' }}>{desc}</p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {checks.map(c => <li key={c} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: '0.85rem', color: 'var(--color-text-primary)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}><polyline points="20 6 9 17 4 12"/></svg>{c}
          </li>)}
        </ul>
      </div>
      <div>{form}</div>
    </div>
  );
}
function SharedStyles({ bg }) {
  return <style>{`
    .svc-hero-wrap { transition: opacity 0.3s; }
    .web-card:hover,.erp-card:hover,.mob-card:hover,.itbpo-card:hover,.mkt-card:hover,.idc-card:hover { transform:translateY(-4px)!important; box-shadow:0 14px 30px rgba(15,23,42,0.09)!important; border-color:rgba(30,136,229,0.4)!important; }
    @media(max-width:900px){
      div[style*="repeat(3,1fr)"] { grid-template-columns:1fr!important; }
      div[style*="1fr 1fr"] { grid-template-columns:1fr!important; }
      div[style*="1.1fr 0.9fr"] { grid-template-columns:1fr!important; }
    }
  `}</style>;
}
