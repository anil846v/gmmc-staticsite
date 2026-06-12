import { useState } from 'react';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    org: '',
    inquiry: 'consulting',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="contact-page">
      {/* Page Hero (Dark Digital Block) */}
      <section className="subpage-hero">
        <div className="container">
          <span className="section-tag">Get In Touch</span>
          <h1 className="subpage-title">Connect With Our Specialists</h1>
          <p className="subpage-lead">
            Whether you want to automate IT with ServiceNow, outsource call center operations, or enroll in certified courses, we are ready to assist.
          </p>
        </div>
      </section>

      {/* Main Details and Form Split (White Block) */}
      <section className="section section-white">
        <div className="container grid-2 contact-layout">
          
          {/* Left Side: Contact details */}
          <div className="contact-info-side">
            <span className="section-tag">Direct Lines</span>
            <h2 className="about-section-heading">Corporate Directory</h2>
            <p className="contact-info-lead">
              Our support team is available 24/7/365 to handle client critical escalations. For general sales and consulting inquiries, our account leads respond within 1 business day.
            </p>

            <div className="contact-channels">
              {/* Channel 1: Email */}
              <div className="channel-box">
                <div className="channel-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <h4>Email Support</h4>
                  <p><strong>Inquiries:</strong> info@geniusminds.com</p>
                  <p><strong>Partnerships:</strong> partner@geniusminds.com</p>
                </div>
              </div>

              {/* Channel 2: Phone */}
              <div className="channel-box">
                <div className="channel-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <h4>Global Telephone</h4>
                  <p><strong>Toll-Free:</strong> +1 (800) 555-0199</p>
                  <p><strong>Helpdesk (SLA):</strong> +1 (888) 555-0150</p>
                </div>
              </div>

              {/* Channel 3: Address */}
              <div className="channel-box">
                <div className="channel-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <h4>Headquarters</h4>
                  <p>Tech Hub Center, Block 4B</p>
                  <p>Silicon Hills, CA 94025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="contact-form-side">
            <div className="contact-form-box">
              {formSubmitted ? (
                <div className="form-success-message">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <h3>Thank You!</h3>
                  <p>Your inquiry has been successfully routed to our specialists. An account manager will contact you within 24 business hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-actual-form">
                  <h3>Submit Inquiry</h3>
                  
                  <div className="form-grid-row">
                    <div className="form-group">
                      <label htmlFor="contName">Full Name *</label>
                      <input type="text" id="contName" name="name" required value={formData.name} onChange={handleInputChange} placeholder="e.g. Tony Stark" />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="contEmail">Work Email *</label>
                      <input type="email" id="contEmail" name="email" required value={formData.email} onChange={handleInputChange} placeholder="e.g. tony@stark.com" />
                    </div>
                  </div>

                  <div className="form-grid-row">
                    <div className="form-group">
                      <label htmlFor="contOrg">Organization *</label>
                      <input type="text" id="contOrg" name="org" required value={formData.org} onChange={handleInputChange} placeholder="e.g. Stark Industries" />
                    </div>

                    <div className="form-group">
                      <label htmlFor="contPhone">Phone Number</label>
                      <input type="tel" id="contPhone" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="e.g. +1 555-0100" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contInquiry">Inquiry Category *</label>
                    <select id="contInquiry" name="inquiry" value={formData.inquiry} onChange={handleInputChange}>
                      <option value="consulting">ServiceNow Consulting & Integration</option>
                      <option value="bpo">BPO & Support Outsourcing</option>
                      <option value="trainings">Upskilling & Certifications</option>
                      <option value="careers">Career Application / Talent Augmentation</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contSubject">Subject *</label>
                    <input type="text" id="contSubject" name="subject" required value={formData.subject} onChange={handleInputChange} placeholder="e.g. ServiceNow implementation quote" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contMessage">Message Details *</label>
                    <textarea id="contMessage" name="message" rows="4" required value={formData.message} onChange={handleInputChange} placeholder="Describe your technical needs or project parameters..."></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: 100 + '%', padding: '14px' }}>
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      <style>{`
        .contact-layout {
          gap: 60px;
          align-items: flex-start;
        }

        .contact-info-side {
          display: flex;
          flex-direction: column;
        }

        .about-section-heading {
          font-size: 1.85rem;
          color: var(--color-navy);
          margin-bottom: 20px;
          position: relative;
        }

        .about-section-heading::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 40px;
          height: 3px;
          background-color: var(--color-blue);
        }

        .contact-info-lead {
          font-size: 1.05rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
          margin-top: 20px;
          margin-bottom: 40px;
        }

        .contact-channels {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .channel-box {
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }

        .channel-icon {
          width: 52px;
          height: 52px;
          border-radius: 0px;
          background-color: rgba(30, 136, 229, 0.08);
          color: var(--color-blue);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .channel-box h4 {
          font-size: 1.1rem;
          color: var(--color-navy);
          margin-bottom: 6px;
        }

        .channel-box p {
          font-size: 0.95rem;
          color: var(--color-text-secondary);
          margin-bottom: 4px;
        }

        /* Form side styling */
        .contact-form-side {
          position: sticky;
          top: 130px;
        }

        .contact-form-box {
          background-color: var(--color-soft-bg);
          border: 1px solid var(--color-border);
          border-radius: 0px;
          padding: 40px;
          box-shadow: var(--shadow-sm);
        }

        .contact-actual-form h3 {
          font-size: 1.35rem;
          color: var(--color-navy);
          margin-bottom: 24px;
          text-align: center;
        }

        .form-grid-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .form-group label {
          display: block;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.85rem;
          color: var(--color-text-primary);
          margin-bottom: 6px;
        }

        .form-group input,
        .form-group select,
        .contact-actual-form textarea {
          width: 100%;
          padding: 10px 14px;
          border-radius: 0px;
          border: 1px solid var(--color-border);
          background-color: var(--color-white);
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: var(--color-text-primary);
          resize: vertical;
        }

        .form-group input:focus,
        .form-group select:focus,
        .contact-actual-form textarea:focus {
          border-color: var(--color-blue);
          outline: none;
        }

        @media (max-width: 900px) {
          .form-grid-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .contact-form-box {
            padding: 30px 20px;
          }
        }
      `}</style>
    </div>
  );
}
