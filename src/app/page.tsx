import styles from "./page.module.css";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import ProcessSection from "../components/ProcessSection";
import TestimonialsSection from "../components/TestimonialsSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import AnimatedSection from "../components/AnimatedSection";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* <Header /> */}
      <main>
        <HeroSection />
        <AnimatedSection>
          <AboutSection />
        </AnimatedSection>
        <AnimatedSection>
          <ServicesSection />
        </AnimatedSection>
        <AnimatedSection>
          <ProcessSection />
        </AnimatedSection>
        <AnimatedSection>
          <TestimonialsSection />
        </AnimatedSection>
        <AnimatedSection>
          <ContactSection />
        </AnimatedSection>
      </main>
    </div>
  );
}
