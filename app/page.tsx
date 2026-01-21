import Hero from './components/Hero';
import ServicesOverview from './components/ServicesOverview';
import SuccessStories from './components/SuccessStories';
import About from './components/About';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <SuccessStories />
      <About />
    </>
  );
}