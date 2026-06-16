import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import itBpoHeroImg from '../assets/services/it_bpo_hero_mockup.png';
import { TechIcon, ServiceForm, FormSuccess } from './ServiceShared';

gsap.registerPlugin(ScrollTrigger);

const BG = '#f0f7ff'; // soft sky blue tint

const STACK = [
  { title: ' & Service Management', desc: 'ServiceNow /ITOM, ITIL   certified processes, Jira Service Management, and automated SLA breach alerting.', techs: ['ServiceNow', 'Kubernetes', 'Docker', 'Python'] },
  { title: 'Cloud & Infrastructure', desc: 'AWS EC2/EKS/RDS, Microsoft Azure, Terraform IaC, Docker containers, and Kubernetes cluster management.', techs: ['AWS', 'Azure', 'Terraform', 'Docker'] },
  { title: 'BPO & Analytics', desc: 'Zendesk, Python-based text classifiers for ticket routing, Power BI SLA dashboards, and Node.js automation scripts.', techs: ['Zendesk', 'Python', 'Node.js', 'PowerBI'] },
];

export default function ItConsultingBpo({ hideHero = false }) {
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    if (!hideHero) { document.title = 'IT Consulting & BPO Operations | GMMC'; window.scrollTo(0, 0); }
    const tl = gsap.timeline();
    tl.fromTo('.itbpo-hero', { scale: 1.06, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.85, ease: 'power3.out' });
    tl.fromTo('.itbpo-a', { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.55, stagger: 0.1, ease: 'power3.out' }, '-=0.4');
    const ct = ScrollTrigger.create({ trigger: '.itbpo-cards', start: 'top 83%', onEnter: () => gsap.fromTo('.itbpo-card', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.65, stagger: 0.13, ease: 'power2.out' }), once: true });
    return () => { tl.kill(); ct.kill(); };
  }, [hideHero]);

  return (
    <div style={{ background: BG, padding: '0 28px 24px' }}>
      <HeroBanner cls="itbpo-hero" pill=" & Cloud Consulting" title="IT Consulting, ServiceNow  & BPO Outsourcing" sub="ITIL   governance, certified ServiceNow implementations, zero-trust cloud infrastructure, and back-office BPO support." img={itBpoHeroImg} />
      <div style={{ padding: '0 8px' }}>
        <Intro cls="itbpo-a" text="We maximise operational uptime by designing zero-trust Kubernetes cloud architectures, configuring ServiceNow  modules, and scaling automated back-office BPO pipelines aligned with global ITIL   compliance standards." />
        <Capabilities cls="itbpo-a" items={[
          { t: 'ServiceNow  Implementation', d: 'Incident, Problem, Change, and Asset Management modules configured by certified ServiceNow developers.' },
          { t: 'ITIL   Governance & Compliance', d: 'Process alignment with ITIL   service management framework, CAB workflows, and SLA monitoring dashboards.' },
          { t: 'AWS & Azure Cloud Architecture', d: 'Zero-trust VPC design, IAM policies, auto-scaling groups, EKS clusters, and cloud cost optimisation.' },
          { t: 'Kubernetes & Container Orchestration', d: 'Kubernetes cluster setup, Helm chart deployments, Docker containerisation for microservices.' },
          { t: '24/7 BPO Support Operations', d: 'Omnichannel customer support teams with Python-based ticket automation and SLA analytics dashboards.' },
          { t: 'Monitoring & Incident Automation', d: 'Prometheus, Grafana, CloudWatch, and PagerDuty runbook automation for zero-downtime operations.' },
        ]} />
        <div style={{ marginBottom: 40 }}>
          <Tag>Technology Stack</Tag>
          <SectionH>Platforms & Tools</SectionH>
          <div className="itbpo-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18 }}>
            {STACK.map(c => <TechCard key={c.title} cls="itbpo-card" {...c} />)}
          </div>
        </div>
        <CtaSection
          tag="Free Audit" heading="Book a Free IT Operations &  Audit"
          desc="Experiencing slow ticket pipelines or planning a cloud migration? Schedule a free 1-hour workflow review with our principal consultants."
          checks={['Audit ServiceNow ticket routing and  bottlenecks', 'Evaluate cloud hosting costs and containerisation options', 'Review BPO SLA response dashboards and routing logic']}
          form={submitted ? <FormSuccess /> : <ServiceForm title="Book Operations Audit" selectLabel="Optimization Target" options={['ServiceNow  Setup', 'AWS Cloud Migration', 'Azure Infrastructure', 'Back-Office BPO Team']} submitLabel="Schedule Free Session" onSubmit={e => { e.preventDefault(); setSubmitted(true); }} />}
        />
      </div>
      <SharedStyles />
    </div>
  );
}

function HeroBanner({ cls, pill, title, sub, img }) { return (<div className={cls} style={{ position: 'relative', width: '100%', height: 320, overflow: 'hidden', borderRadius: 12, marginBottom: 36 }}><img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.42)' }} /><div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '32px 36px', background: 'linear-gradient(to top,rgba(3,10,30,0.88) 0%,rgba(3,10,30,0.1) 65%,transparent 100%)' }}><span style={{ display: 'inline-block', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#93c5fd', background: 'rgba(59,130,246,0.18)', border: '1px solid rgba(59,130,246,0.35)', padding: '4px 12px', borderRadius: 9999, marginBottom: 10, width: 'fit-content' }}>{pill}</span><h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#fff', margin: '0 0 8px', lineHeight: 1.2 }}>{title}</h2><p style={{ fontSize: '0.9rem', color: '#cbd5e1', margin: 0, maxWidth: 640, lineHeight: 1.55 }}>{sub}</p></div></div>); }
function Intro({ cls, text }) { return <div style={{ borderLeft: '3px solid var(--color-blue)', paddingLeft: 18, marginBottom: 36 }}><p className={cls} style={{ fontSize: '0.97rem', lineHeight: 1.72, color: 'var(--color-text-secondary)', margin: 0 }}>{text}</p></div>; }
function Tag({ children }) { return <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.13em', textTransform: 'uppercase', color: 'var(--color-blue)', display: 'block', marginBottom: 6 }}>{children}</span>; }
function SectionH({ children }) { return <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-navy)', margin: '0 0 20px' }}>{children}</h3>; }
function Capabilities({ cls, items }) { return (<div style={{ marginBottom: 40 }}><Tag>Core Capabilities</Tag><SectionH>What We Deliver</SectionH><div className={cls} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 24px' }}>{items.map(i => (<div key={i.t} style={{ display: 'flex', gap: 12, padding: 14, border: '1px solid #c8dff5', borderRadius: 8, background: 'rgba(255,255,255,0.7)' }}><div style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--color-blue)', flexShrink: 0, marginTop: 7 }} /><div><h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-navy)', margin: '0 0 3px' }}>{i.t}</h4><p style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>{i.d}</p></div></div>))}</div></div>); }
function TechCard({ cls, title, desc, techs }) { return (<div className={cls} style={{ background: '#fff', border: '1px solid #c8dff5', borderRadius: 10, padding: '24px 20px', display: 'flex', flexDirection: 'column', transition: 'transform 0.22s,box-shadow 0.22s,border-color 0.22s' }}><h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-navy)', margin: '0 0 8px' }}>{title}</h4><p style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: '0 0 16px', flexGrow: 1 }}>{desc}</p><div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>{techs.map(t => (<span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-navy)', background: '#f0f7ff', border: '1px solid #c8dff5', padding: '4px 10px', borderRadius: 6 }}><TechIcon name={t} size={16} />{t}</span>))}</div></div>); }
function CtaSection({ tag, heading, desc, checks, form }) { return (<div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 44, background: 'rgba(255,255,255,0.8)', border: '1px solid #c8dff5', borderRadius: 14, padding: '36px 36px' }}><div><Tag>{tag}</Tag><h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--color-navy)', margin: '0 0 10px' }}>{heading}</h3><p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', lineHeight: 1.65, margin: '0 0 18px' }}>{desc}</p><ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>{checks.map(c => <li key={c} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: '0.85rem', color: 'var(--color-text-primary)' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}><polyline points="20 6 9 17 4 12"/></svg>{c}</li>)}</ul></div><div>{form}</div></div>); }
function SharedStyles() { return <style>{`.itbpo-card:hover{transform:translateY(-4px)!important;box-shadow:0 14px 30px rgba(15,23,42,0.09)!important;border-color:rgba(30,136,229,0.4)!important}@media(max-width:900px){div[style*="repeat(3,1fr)"]{grid-template-columns:1fr!important}div[style*="1fr 1fr"]{grid-template-columns:1fr!important}div[style*="1.1fr 0.9fr"]{grid-template-columns:1fr!important}}`}</style>; }
