import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import idCardHeroImg from '../assets/services/id_card_hero_mockup.png';
import { TechIcon, ServiceForm, FormSuccess } from './ServiceShared';

gsap.registerPlugin(ScrollTrigger);

const BG = '#f5f0ff'; // soft violet tint

const STACK = [
  { title: 'Smart Card Technologies', desc: 'HID iCLASS, Mifare DESFire EV2, NFC ISO 14443, EM4100 125kHz — compatible with all major access control systems.', techs: ['RFID', 'NFC', 'Smart Cards', 'Access Security'] },
  { title: 'Printing Equipment', desc: 'Zebra ZC300/ZXP, Fargo HDP5000, Matica XID8300 — high-volume batch printing with retransfer and direct-to-card options.', techs: ['Zebra ZC300', 'Fargo HDP5000', 'Matica XID', 'Zebra Printing'] },
  { title: 'Access Control Integration', desc: 'Compatible with Lenel OnGuard, Genetec, Honeywell Pro-Watch, and Bosch BIS for complete physical security setup.', techs: ['Lenel OnGuard', 'Genetec', 'RFID', 'NFC'] },
];

export default function IdCardPrinting({ hideHero = false }) {
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    if (!hideHero) { document.title = 'Enterprise ID Card & Smart Card Printing | GMMC'; window.scrollTo(0, 0); }
    const tl = gsap.timeline();
    tl.fromTo('.idc-hero', { scale: 1.06, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.85, ease: 'power3.out' });
    tl.fromTo('.idc-a', { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.55, stagger: 0.1, ease: 'power3.out' }, '-=0.4');
    const ct = ScrollTrigger.create({ trigger: '.idc-cards', start: 'top 83%', onEnter: () => gsap.fromTo('.idc-card', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.65, stagger: 0.13, ease: 'power2.out' }), once: true });
    return () => { tl.kill(); ct.kill(); };
  }, [hideHero]);

  return (
    <div style={{ background: BG, padding: '0 28px 24px' }}>
      <HeroBanner cls="idc-hero" pill="Secure Identification" title="Proximity ID Cards & RFID Smart Card Printing" sub="Dual-sided thermal PVC badge printing, RFID chip encoding, custom barcode/QR configurations, and professional access badge accessories." img={idCardHeroImg} />
      <div style={{ padding: '0 8px' }}>
        <Intro cls="idc-a" text="We secure physical access zones by designing employee ID layouts, encoding high-frequency proximity chips (125kHz & 13.56MHz), producing high-definition dual-sided PVC cards with UV overlays, and supplying branded lanyards and badge holders." />
        <Capabilities cls="idc-a" items={[
          { t: 'RFID & Smart Card Encoding', d: 'Mifare Classic, DESFire EV2, and HID iCLASS proximity card programming for 125kHz and 13.56MHz reader systems.' },
          { t: 'High-Definition PVC Printing', d: 'Dual-sided edge-to-edge thermal printing at 300 DPI with UV-blocking overlays and scratch-resistant laminate.' },
          { t: 'NFC & Contactless Cards', d: 'ISO 14443-A/B NFC cards for tap-to-pay, digital business cards, and contactless building access solutions.' },
          { t: 'Barcode & QR Code Integration', d: 'Code 128, Code 39, QR Code, and PDF417 barcode printing with access system scanning integration.' },
          { t: 'Corporate Badge Design', d: 'Custom ID layout design with logo placement, employee photography, department colour coding, and security holograms.' },
          { t: 'Lanyards & Accessories Sourcing', d: 'Heavy-duty branded lanyards, retractable badge reels, card holders, and clip accessories for corporate environments.' },
        ]} />
        <div style={{ marginBottom: 40 }}>
          <Tag>Technology & Products</Tag>
          <SectionH>Platforms & Hardware</SectionH>
          <div className="idc-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18 }}>
            {STACK.map(c => <TechCard key={c.title} cls="idc-card" {...c} />)}
          </div>
        </div>
        <CtaSection
          tag="Get a Quote" heading="Request ID Card Catalog & Access Pricing"
          desc="Need batch PVC cards or planning an RFID access upgrade? Share your parameters and receive design mockups with product pricing."
          checks={['Free digital badge layout mockups matching your brand', 'RFID frequency compatibility check before bulk print order', 'Lanyard and accessory recommendations for long-term use']}
          form={submitted ? <FormSuccess message="Quote Request Received!" /> : <ServiceForm title="Get Identity Badges Quote" selectLabel="Card Type" options={['RFID Proximity Cards', 'NFC Smart Cards', 'Standard PVC ID Cards', 'Contactless + Printed Combo']} submitLabel="Request Free Quote" onSubmit={e => { e.preventDefault(); setSubmitted(true); }} />}
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
function Capabilities({ cls, items }) { return (<div style={{ marginBottom: 40 }}><Tag>Core Capabilities</Tag><SectionH>What We Deliver</SectionH><div className={cls} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 24px' }}>{items.map(i => (<div key={i.t} style={{ display: 'flex', gap: 12, padding: 14, border: '1px solid #ddd0f5', borderRadius: 8, background: 'rgba(255,255,255,0.7)' }}><div style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--color-blue)', flexShrink: 0, marginTop: 7 }} /><div><h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-navy)', margin: '0 0 3px' }}>{i.t}</h4><p style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>{i.d}</p></div></div>))}</div></div>); }
function TechCard({ cls, title, desc, techs }) { return (<div className={cls} style={{ background: '#fff', border: '1px solid #ddd0f5', borderRadius: 10, padding: '24px 20px', display: 'flex', flexDirection: 'column', transition: 'transform 0.22s,box-shadow 0.22s,border-color 0.22s' }}><h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-navy)', margin: '0 0 8px' }}>{title}</h4><p style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: '0 0 16px', flexGrow: 1 }}>{desc}</p><div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>{techs.map(t => (<span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-navy)', background: '#f5f0ff', border: '1px solid #ddd0f5', padding: '4px 10px', borderRadius: 6 }}><TechIcon name={t} size={16} />{t}</span>))}</div></div>); }
function CtaSection({ tag, heading, desc, checks, form }) { return (<div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 44, background: 'rgba(255,255,255,0.8)', border: '1px solid #ddd0f5', borderRadius: 14, padding: '36px 36px' }}><div><Tag>{tag}</Tag><h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--color-navy)', margin: '0 0 10px' }}>{heading}</h3><p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', lineHeight: 1.65, margin: '0 0 18px' }}>{desc}</p><ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>{checks.map(c => <li key={c} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: '0.85rem', color: 'var(--color-text-primary)' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}><polyline points="20 6 9 17 4 12"/></svg>{c}</li>)}</ul></div><div>{form}</div></div>); }
function SharedStyles() { return <style>{`.idc-card:hover{transform:translateY(-4px)!important;box-shadow:0 14px 30px rgba(15,23,42,0.09)!important;border-color:rgba(30,136,229,0.4)!important}@media(max-width:900px){div[style*="repeat(3,1fr)"]{grid-template-columns:1fr!important}div[style*="1fr 1fr"]{grid-template-columns:1fr!important}div[style*="1.1fr 0.9fr"]{grid-template-columns:1fr!important}}`}</style>; }
