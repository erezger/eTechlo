"use client";
import { FaLaptopCode, FaCogs, FaLightbulb, FaNetworkWired } from "react-icons/fa";
import { Section, SectionTitle, Card, Cards, IconWrap, CardTitle, CardDesc } from "./ServicesSection.styles";

export default function ServicesSection() {
  return (
    <Section id="services">
      <SectionTitle $margin="2rem">השירותים שלנו</SectionTitle>
      <Cards>
        <Card>
          <IconWrap><FaLaptopCode /></IconWrap>
          <CardTitle>פיתוח אתרים</CardTitle>
          <CardDesc>בניית אתרים מודרניים, מהירים ומותאמים אישית לעסק שלך.</CardDesc>
        </Card>
        <Card>
          <IconWrap><FaCogs /></IconWrap>
          <CardTitle>מערכות פנימיות</CardTitle>
          <CardDesc>פיתוח מערכות ניהול, CRM, ERP ואוטומציות פנים-ארגוניות.</CardDesc>
        </Card>
        <Card>
          <IconWrap><FaLightbulb /></IconWrap>
          <CardTitle>ייעוץ טכנולוגי</CardTitle>
          <CardDesc>ליווי, ייעוץ והכוונה טכנולוגית לעסקים בכל שלב.</CardDesc>
        </Card>
        <Card>
          <IconWrap><FaNetworkWired /></IconWrap>
          <CardTitle>אוטומציה / DevOps</CardTitle>
          <CardDesc>הטמעת תהליכי DevOps, אוטומציה ושיפור תהליכים עסקיים.</CardDesc>
        </Card>
      </Cards>
    </Section>
  );
} 