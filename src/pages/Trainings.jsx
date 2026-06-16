import { useState, useEffect } from 'react';

export default function Trainings({ hideHero = false }) {
  const [registered, setRegistered] = useState(false);

  useEffect(() => {
    if (!hideHero) {
      document.title = 'Trainings & Certifications | GMMC';
      window.scrollTo(0, 0);
    }
  }, [hideHero]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'csa',
    students: '1',
    message: ''
  });

  const courses = [
    {
      id: 'csa',
      title: 'ServiceNow Certified System Administrator (CSA)',
      duration: '3 Days (24 Hours)',
      format: 'Live Instructor-led (Virtual or On-site)',
      overview: 'Master the fundamentals of ServiceNow configuration. Learn to manage database records, build custom catalog workflows, configure UI designs, and handle platform upgrades.',
      outline: ['Platform UI & User Management', 'Database Schema, CMDB & Relationships', 'Workflow automation via Flow Designer', 'Platform Maintenance & System Upgrades']
    },
    {
      id: 'cis',
      title: 'ServiceNow Implementation Specialist (CIS-)',
      duration: '4 Days (32 Hours)',
      format: 'Live Instructor-led (Virtual)',
      overview: 'Advance your ServiceNow career. Learn the configuration details required to implement  modules (Incident, Problem, Change, Catalog) under corporate environments.',
      outline: ['ITIL process mapping in ServiceNow', 'Advanced client scripting & business rules', 'Service Catalog schema customization', 'Platform integrations & update sets']
    },
    {
      id: 'itil',
      title: 'ITIL 4 Foundation Certification',
      duration: '2 Days (16 Hours)',
      format: 'Virtual Live Class + Exam Voucher',
      overview: 'Learn the international standard for IT Service Management (). Understand the Service Value System (SVS), the 4 dimensions of service management, and core ITIL practices.',
      outline: ['Core concepts of Service Management', 'The ITIL Service Value Chain activities', 'The 4 Dimensions of Service Management', '15 Key ITIL practices overview']
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setRegistered(true);
  };

  return (
    <div className="trainings-page">
      {/* Page Hero (Dark Digital Block) */}
      {!hideHero && (
        <section className="subpage-hero">
          <div className="container">
            <span className="section-tag">Upskill</span>
            <h1 className="subpage-title">Trainings & Certifications</h1>
            <p className="subpage-lead">
              Certified technical enablement programs designed for enterprise teams. Accelerate ServiceNow adoption and align operations with ITIL best practices.
            </p>
          </div>
        </section>
      )}

      {/* Course Catalog (White Block) */}
      <section className="section section-white">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-tag">Catalog</span>
            <h2 className="section-title">Professional Enablement Courses</h2>
          </div>

          <div className="courses-list" style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
            {courses.map((course) => (
              <div key={course.id} className="course-detail-card">
                <div className="course-header-row">
                  <div>
                    <h3>{course.title}</h3>
                    <div className="course-meta-pills">
                      <span className="course-pill"><strong>Duration:</strong> {course.duration}</span>
                      <span className="course-pill"><strong>Format:</strong> {course.format}</span>
                    </div>
                  </div>
                </div>
                
                <p className="course-overview-text">{course.overview}</p>
                
                <div className="course-outline-box">
                  <h4>Course Modules:</h4>
                  <ul className="course-outline-list">
                    {course.outline.map((item, oidx) => (
                      <li key={oidx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Inquiries & Registration (Dark Block) */}
      <section className="section section-dark-block">
        <div className="container registration-container">
          <div className="grid-2 align-center">
            
            {/* Info Column */}
            <div>
              <span className="section-tag">Enterprise Training</span>
              <h2 className="about-section-heading">Custom Corporate Programs</h2>
              <p className="reg-info-text" style={{ color: 'rgba(255, 255, 255, 0.7)', marginTop: '20px', marginBottom: '24px', fontSize: '1.05rem', lineHeight: '1.6' }}>
                Need to upskill an entire team? We deliver customized cohorts designed to match your specific ServiceNow configuration, internal release timelines, and incident response playbooks. Private classes can be delivered virtually or on-site at your facility.
              </p>
              <div className="pricing-note" style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '20px', borderRadius: '0px', border: '1px solid rgba(255, 255, 255, 0.08)', color: 'rgba(255, 255, 255, 0.9)' }}>
                <strong>Group Discounts Available:</strong> We offer special corporate pricing for cohorts of 5 or more students, including certified exam vouchers and sandbox environments.
              </div>
            </div>

            {/* Form Column */}
            <div className="reg-form-box">
              {registered ? (
                <div className="form-success-message">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <h3>Registration Request Received!</h3>
                  <p>Our training coordination team will contact you within 1 business day with cohort dates, syllabi, and pricing details.</p>
                </div>
              ) : (
                <form onSubmit={handleRegisterSubmit} className="reg-form">
                  <h3>Inquire or Register</h3>
                  
                  <div className="form-group">
                    <label htmlFor="regName">Your Name *</label>
                    <input type="text" id="regName" name="name" required value={formData.name} onChange={handleInputChange} placeholder="e.g. Sarah Connor" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="regEmail">Work Email *</label>
                    <input type="email" id="regEmail" name="email" required value={formData.email} onChange={handleInputChange} placeholder="e.g. sarah@cyberdyne.com" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="regCourse">Selected Course *</label>
                    <select id="regCourse" name="course" value={formData.course} onChange={handleInputChange}>
                      <option value="csa">ServiceNow CSA (System Admin)</option>
                      <option value="cis">ServiceNow CIS ( Specialist)</option>
                      <option value="itil">ITIL 4 Foundation</option>
                      <option value="corporate">Custom Corporate Group Cohort</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="regStudents">Number of Students</label>
                    <select id="regStudents" name="students" value={formData.students} onChange={handleInputChange}>
                      <option value="1">1 Student</option>
                      <option value="2-4">2 - 4 Students</option>
                      <option value="5-9">5 - 9 Students</option>
                      <option value="10+">10+ Students (Corporate Cohort)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="regMessage">Additional Requirements</label>
                    <textarea id="regMessage" name="message" rows="3" value={formData.message} onChange={handleInputChange} placeholder="e.g. preferred training dates, custom curriculum focus..."></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: 100 + '%', marginTop: '10px' }}>
                    Request Program Details
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      <style>{`
        .course-detail-card {
          background-color: var(--color-white);
          border: 1px solid var(--color-border);
          border-radius: 0px;
          padding: 40px;
          box-shadow: var(--shadow-sm);
        }

        .course-header-row h3 {
          font-size: 1.45rem;
          color: var(--color-navy);
          margin-bottom: 12px;
        }

        .course-meta-pills {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }

        .course-pill {
          background-color: var(--color-soft-bg);
          border: 1px solid var(--color-border);
          padding: 6px 12px;
          border-radius: 0px;
          font-size: 0.85rem;
          color: var(--color-text-secondary);
        }

        .course-pill strong {
          color: var(--color-navy);
        }

        .course-overview-text {
          font-size: 1rem;
          color: var(--color-text-secondary);
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .course-outline-box {
          background-color: var(--color-soft-bg);
          border-radius: 0px;
          padding: 24px;
          border: 1px solid var(--color-border);
        }

        .course-outline-box h4 {
          font-size: 0.95rem;
          color: var(--color-navy);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 16px;
        }

        .course-outline-list {
          list-style: none;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .course-outline-list li {
          font-size: 0.9rem;
          color: var(--color-text-primary);
          padding-left: 20px;
          position: relative;
        }

        .course-outline-list li::before {
          content: '→';
          color: var(--color-blue);
          font-weight: 500;
          position: absolute;
          left: 0;
          top: -1px;
        }

        /* Reg Form Box */
        .reg-form-box {
          background-color: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 0px;
          padding: 30px;
          box-shadow: var(--shadow-sm);
        }

        .reg-form h3 {
          font-size: 1.25rem;
          color: #ffffff;
          margin-bottom: 20px;
          text-align: center;
        }

        .reg-form label {
          display: block;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 6px;
        }

        .reg-form input,
        .reg-form select,
        .reg-form textarea {
          width: 100%;
          padding: 10px 14px;
          border-radius: 0px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background-color: rgba(255, 255, 255, 0.02);
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: #ffffff;
          resize: vertical;
        }

        .reg-form input:focus,
        .reg-form select:focus,
        .reg-form textarea:focus {
          border-color: var(--color-blue);
          outline: none;
        }

        .reg-form option {
          background-color: var(--color-navy);
          color: #ffffff;
        }

        @media (max-width: 900px) {
          .course-outline-list {
            grid-template-columns: 1fr;
          }
          .course-detail-card {
            padding: 24px;
          }
        }
      `}</style>
    </div>
  );
}
