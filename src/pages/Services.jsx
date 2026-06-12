import ServicesGrid from '../sections/ServicesGrid';

export default function ServicesPage({ setCurrentTab }) {
  return (
    <div className="services-page-view">
      {/* Subpage Hero (Dark Digital Block) */}
      <section className="subpage-hero">
        <div className="container">
          <span className="section-tag">Capabilities</span>
          <h1 className="subpage-title">Enterprise Consulting Services</h1>
          <p className="subpage-lead">
            We deliver robust engineering, custom web applications, workflow automation, and ITIL process management.
          </p>
        </div>
      </section>

      {/* Capabilities Section (White Block) */}
      <ServicesGrid setCurrentTab={setCurrentTab} />
    </div>
  );
}
