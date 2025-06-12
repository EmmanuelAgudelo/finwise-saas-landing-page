import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import FilterBanner from "@/components/FilterBanner";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Container>
        <Stats />
        <Benefits />
        <FilterBanner />
        <Section
          id="testimonials"
          title="Lo que nuestros clientes dicen"
          description="Escuche a quienes ya han comprado con nosotros."
        >
          <Testimonials />
        </Section>
      </Container>
    </>
  );
};

export default HomePage;
