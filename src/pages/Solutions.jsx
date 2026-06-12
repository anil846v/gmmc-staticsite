import DigitalSolutions from '../sections/DigitalSolutions';

export default function SolutionsPage() {
  return (
    <div className="solutions-page-view">
      {/* Subpage Hero (Dark Digital Block) */}
      <section className="subpage-hero">
        <div className="container">
          <span className="section-tag">Solutions</span>
          <h1 className="subpage-title">Digital Platform Solutions</h1>
          <p className="subpage-lead">
            Accelerate platform implementation, secure your cloud infrastructure, build full-stack React architectures, and deploy custom BI dashboards.
          </p>
        </div>
      </section>

      {/* Solutions Tab Block (Dark Block) */}
      <DigitalSolutions />
    </div>
  );
}
