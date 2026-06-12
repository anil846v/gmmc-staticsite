import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ setCurrentTab }) {
  const bgRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const bgElement = bgRef.current;
    const sectionElement = sectionRef.current;

    if (bgElement && sectionElement) {
      // 1. Scroll-triggered parallax for background image
      gsap.fromTo(
        bgElement,
        { yPercent: 0, scale: 1.05 },
        {
          yPercent: 15,
          scale: 1.15,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionElement,
            start: 'top top',
            end: 'bottom top',
            scrub: true
          }
        }
      );

      // 2. Scroll-triggered parallax for the grid overlay
      const gridOverlay = sectionElement.querySelector('.hero-grid-overlay');
      if (gridOverlay) {
        gsap.fromTo(
          gridOverlay,
          { yPercent: 0 },
          {
            yPercent: 8,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionElement,
              start: 'top top',
              end: 'bottom top',
              scrub: true
            }
          }
        );
      }

      // 3. Scroll-triggered parallax for floating elements (moving faster in opposite direction!)
      const floatingElements = sectionElement.querySelectorAll('.hero-floating-item');
      floatingElements.forEach((el, index) => {
        const speed = (index + 1) * -35;
        gsap.fromTo(
          el,
          { y: 0 },
          {
            y: speed,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionElement,
              start: 'top top',
              end: 'bottom top',
              scrub: true
            }
          }
        );
      });
    }

    // 4. Mouse-move interactive parallax
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xNorm = (clientX / innerWidth) - 0.5;
      const yNorm = (clientY / innerHeight) - 0.5;

      if (bgRef.current) {
        gsap.to(bgRef.current, {
          x: xNorm * 30,
          y: yNorm * 20,
          duration: 1.2,
          ease: 'power2.out'
        });
      }

      const floatingItems = sectionRef.current?.querySelectorAll('.hero-floating-item');
      floatingItems?.forEach(item => {
        const depth = parseFloat(item.getAttribute('data-depth') || '0.5');
        const xMove = xNorm * depth * 90;
        const yMove = yNorm * depth * 90;

        gsap.to(item, {
          x: xMove,
          y: yMove,
          duration: 1.2,
          ease: 'power2.out'
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleCtaClick = (tabId) => {
    setCurrentTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Framer Motion staggered animation configurations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section ref={sectionRef} className="hero-section flex-center">
      
      {/* Parallax Background Canvas */}
      <div className="hero-parallax-bg-container">
        <div 
          ref={bgRef}
          className="hero-parallax-bg-image"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600')`
          }}
        />
        <div className="hero-parallax-overlay"></div>
        <div className="hero-grid-overlay"></div>
      </div>

      {/* Floating Elements for Parallax */}
      <div className="hero-floating-item hero-glow-sphere sphere-1" data-depth="0.2"></div>
      <div className="hero-floating-item hero-glow-sphere sphere-2" data-depth="0.4"></div>
      
      {/* High-tech sharp picture windows for parallax
      <div className="hero-floating-item hero-picture-box pic-left" data-depth="0.7">
        <div className="pic-box-inner">
          <img 
            src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=500" 
            alt="Digital Cryptography Node" 
            className="hero-pic-img"
          />
          <div className="pic-box-overlay"></div>
        </div>
      </div> */}

      

      <div className="container hero-layout-wrapper">
        
        {/* Centered Typography block */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hero-content-center"
        >
          <motion.span variants={itemVariants} className="hero-small-tag">
            INTELLIGENT IT SOLUTIONS
          </motion.span>
          
          <motion.h1 variants={itemVariants} className="hero-heading">
            Bridging Tech Complexity <br />
            with <span className="highlight-underline">Business Outcomes</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="hero-description">
            We design, develop, and support intelligent IT solutions that streamline operations, accelerate growth, and drive real impact.
          </motion.p>
          
          <motion.div variants={itemVariants} className="hero-actions-row">
            <button onClick={() => handleCtaClick('contact')} className="btn btn-primary cta-btn-filled">
              Schedule a Consultation
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="cta-arrow">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            <button onClick={() => handleCtaClick('servicenow')} className="btn btn-outline cta-btn-outline">
              Explore Our Services
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="cta-arrow">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </motion.div>
        </motion.div>

        {/* Bottom Stats Checklist & Trusted Brands Banner (Glassmorphic dark design) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="hero-stats-banner"
        >
          {/* Stats Bar */}
          <div className="stats-bar-grid">
            <div className="stat-unit">
              <div className="stat-unit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>
              </div>
              <div className="stat-unit-text">
                <strong>120+</strong>
                <span>Happy Clients</span>
              </div>
            </div>

            <div className="stat-unit">
              <div className="stat-unit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /><line x1="14" y1="4" x2="10" y2="20" /></svg>
              </div>
              <div className="stat-unit-text">
                <strong>250+</strong>
                <span>Projects Delivered</span>
              </div>
            </div>

            <div className="stat-unit">
              <div className="stat-unit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
              </div>
              <div className="stat-unit-text">
                <strong>50+</strong>
                <span>Expert Developers</span>
              </div>
            </div>

            <div className="stat-unit">
              <div className="stat-unit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
              </div>
              <div className="stat-unit-text">
                <strong>5+</strong>
                <span>Years of Experience</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          width: 100%;
          padding-bottom: 30px;
          overflow: hidden;
          z-index: 1;
          color: #ffffff;
        }

        /* Parallax Background styles */
        .hero-parallax-bg-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 115%; /* Extra height to accommodate parallax translation offsets */
          overflow: hidden;
          z-index: 0;
          pointer-events: none;
        }

        .hero-parallax-bg-image {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .hero-parallax-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(30, 136, 229, 0.18) 60%, #000000 100%);
          z-index: 1;
        }

        .hero-grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: radial-gradient(circle at 50% 50%, black 40%, transparent 85%);
          -webkit-mask-image: radial-gradient(circle at 50% 50%, black 40%, transparent 85%);
          z-index: 2;
        }

        /* Floating glowing spheres */
        .hero-glow-sphere {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.35;
          z-index: 1;
          pointer-events: none;
        }

        .sphere-1 {
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, var(--color-blue) 0%, transparent 70%);
          top: 15%;
          left: 10%;
        }

        .sphere-2 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, #6366f1 0%, transparent 70%);
          bottom: 20%;
          right: 15%;
        }

        /* Floating Picture Boxes */
        .hero-picture-box {
          position: absolute;
          border: 1.5px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 35px rgba(30, 136, 229, 0.18);
          z-index: 2;
          pointer-events: none;
          overflow: hidden;
          background-color: #000000;
          transition: border-color var(--transition-normal);
        }

        .pic-box-inner {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
        }

        .hero-pic-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.95) contrast(1.15) saturate(1.1); /* Very rich and sharp */
          transition: transform 0.5s ease;
        }

        .pic-box-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(30, 136, 229, 0.08) 0%, rgba(0, 0, 0, 0.35) 100%);
          z-index: 1;
        }

        .pic-left {
          top: 22%;
          left: 6%;
          width: 220px;
          height: 220px;
          animation: float-slow-1 8s ease-in-out infinite alternate;
        }

        .pic-right {
          bottom: 28%;
          right: 6%;
          width: 180px;
          height: 180px;
          animation: float-slow-2 10s ease-in-out infinite alternate;
        }

        @media (max-width: 1200px) {
          .pic-left {
            width: 140px;
            height: 140px;
            left: 2%;
            top: 25%;
          }
          .pic-right {
            width: 110px;
            height: 110px;
            right: 2%;
            bottom: 30%;
          }
        }

        /* Float animations */
        @keyframes float-slow-1 {
          0% { transform: translateY(0) rotate(-3deg); }
          100% { transform: translateY(-15px) rotate(-1deg); }
        }

        @keyframes float-slow-2 {
          0% { transform: translateY(0) rotate(4deg); }
          100% { transform: translateY(-20px) rotate(6deg); }
        }

        .hero-layout-wrapper {
          display: flex;
          flex-direction: column;
          gap: 80px;
          position: relative;
          z-index: 10;
        }

        /* Centered Hero Content block */
        .hero-content-center {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 960px;
          margin: 60px auto 0;
        }

        .hero-small-tag {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.9rem;
          color: #ffffff;
          letter-spacing: 0.12em;
          margin-bottom: 28px;
          display: inline-block;
          padding: 6px 18px;
          background-color: rgba(30, 136, 229, 0.12);
          border: 1px solid rgba(30, 136, 229, 0.3);
          border-radius: var(--radius-pill);
          backdrop-filter: blur(8px);
        }

        .hero-heading {
          font-size: 4.5rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #ffffff;
          line-height: 1.1;
          margin-bottom: 28px;
        }

        .highlight-underline {
          position: relative;
          display: inline-block;
          background: linear-gradient(90deg, #1e88e5, #38bdf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .highlight-underline::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #1e88e5, #38bdf8);
          border-radius: 2px;
        }

        .hero-description {
          font-size: 1.3rem;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.65;
          margin-bottom: 48px;
          max-width: 700px;
        }

        .hero-actions-row {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .cta-btn-filled {
          padding: 14px 28px;
          background-color: var(--color-blue);
          border: 1.5px solid var(--color-blue);
          color: #ffffff;
          box-shadow: 0 4px 20px rgba(30, 136, 229, 0.25);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .cta-btn-filled:hover {
          background-color: var(--color-blue-hover);
          border-color: var(--color-blue-hover);
          box-shadow: 0 6px 24px rgba(30, 136, 229, 0.4);
        }

        .cta-btn-outline {
          padding: 14px 28px;
          border-color: #ffffff;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .cta-btn-outline:hover {
          background-color: rgba(255, 255, 255, 0.08);
        }

        .cta-arrow {
          transition: transform var(--transition-fast);
        }

        .cta-btn-filled:hover .cta-arrow,
        .cta-btn-outline:hover .cta-arrow {
          transform: translateX(3px);
        }

        /* Bottom Stats Bar and Trust Banner (Dark glass theme) */
        .hero-stats-banner {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          flex-direction: column;
          gap: 0px;
        }

        .stats-bar-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          background-color: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: var(--radius-md);
          padding: 24px 32px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
        }

        .stat-unit {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .stat-unit-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: rgba(30, 136, 229, 0.12);
          color: var(--color-blue);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .stat-unit-text {
          display: flex;
          flex-direction: column;
          line-height: 1.35;
          text-align: left;
        }

        .stat-unit-text strong {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.4rem;
          color: #ffffff;
        }

        .stat-unit-text span {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.65);
        }

        .trusted-brands-row {
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .trusted-title {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.4);
          letter-spacing: 0.08em;
        }

        .trusted-logos-flex {
          display: flex;
          align-items: center;
          gap: 36px;
          flex-wrap: wrap;
        }

        .brand-logo-text {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.35);
          letter-spacing: -0.02em;
          transition: color var(--transition-fast);
        }

        .brand-logo-text:hover {
          color: #ffffff;
        }

        @media (max-width: 1080px) {
          .hero-heading {
            font-size: 3.8rem;
          }
        }

        @media (max-width: 1024px) {
          .stats-bar-grid {
            grid-template-columns: repeat(2, 1fr);
            padding: 20px;
          }
        }

        @media (max-width: 768px) {
          .hero-picture-box {
            display: none !important;
          }
          .hero-floating-card {
            display: none !important;
          }
          .hero-glow-sphere {
            display: none !important;
          }
        }

        @media (max-width: 768px) {
          .hero-heading {
            font-size: 2.8rem;
          }
          .stats-bar-grid {
            grid-template-columns: 1fr;
          }
          .trusted-brands-row {
            flex-direction: column;
            align-items: flex-start;
          }
          .trusted-logos-flex {
            gap: 20px;
          }
        }
      `}</style>
    </section>
  );
}
