"use client";
import styled from "styled-components";
import { FaLaptopCode, FaCogs, FaLightbulb, FaNetworkWired } from "react-icons/fa";

const Section = styled.section`
  padding: 4rem 1rem;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  color: var(--color-primary);
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1100px;
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const Card = styled.div`
  background: #fff;
  border-radius: 1.25rem;
  box-shadow: 0 2px 16px rgba(27, 42, 73, 0.08);
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: box-shadow 0.2s, transform 0.2s;
  min-height: 260px;
  &:hover {
    box-shadow: 0 6px 32px rgba(79, 182, 244, 0.13);
    transform: translateY(-4px) scale(1.03);
  }
`;

const IconWrap = styled.div`
  font-size: 2.5rem;
  color: var(--color-accent);
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
`;

const CardDesc = styled.p`
  color: var(--color-text);
  font-size: 1rem;
`;

export default function ServicesSection() {
  return (
    <Section id="services">
      <Title>השירותים שלנו</Title>
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