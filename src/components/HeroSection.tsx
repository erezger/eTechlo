"use client";
import { Hero, Slogan, Subtitle, CTAButton } from "./HeroSection.styles";

export default function HeroSection() {
  return (
    <Hero id="home">
      <Slogan>eTechlo — מפתחים הצלחה במהירוטקלו</Slogan>
      <Subtitle>
        פתרונות טכנולוגיים מתקדמים לעסקים: פיתוח אתרים, מערכות פנימיות, ייעוץ טכנולוגי, אוטומציה ועוד.
      </Subtitle>
      <CTAButton href="#contact">בואו נדבר</CTAButton>
    </Hero>
  );
} 