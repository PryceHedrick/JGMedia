import Hero from '../components/home/Hero';
import ServicesPreview from '../components/home/ServicesPreview';
import FeaturedWork from '../components/home/FeaturedWork';
import Stats from '../components/home/Stats';
import CTASection from '../components/home/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <Stats />
      <FeaturedWork />
      <CTASection />
    </>
  );
}
