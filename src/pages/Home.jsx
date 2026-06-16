import Hero from '../sections/Hero';
import ServicesGrid from '../sections/ServicesGrid';
import WhyPartner from '../sections/WhyPartner';
import DigitalSolutions from '../sections/DigitalSolutions';
import UpskillTeam from '../sections/UpskillTeam';
import CTASection from '../sections/CTASection';

export default function Home({ setCurrentTab }) {
  return (
    <div className="homepage-view">
      <Hero setCurrentTab={setCurrentTab} />
      <ServicesGrid setCurrentTab={setCurrentTab} />
      <WhyPartner />
      <DigitalSolutions limit={3} setCurrentTab={setCurrentTab} />
      <UpskillTeam setCurrentTab={setCurrentTab} />
      <CTASection setCurrentTab={setCurrentTab} />
    </div>
  );
}
