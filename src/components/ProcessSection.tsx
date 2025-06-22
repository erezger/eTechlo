"use client";
import styled from "styled-components";
import { FaLightbulb, FaPencilRuler, FaCode, FaCheckCircle, FaRocket } from "react-icons/fa";

const Section = styled.section`
  padding: 4rem 1rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled.h2`
  color: var(--color-primary);
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
  direction: rtl;
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: var(--color-text);
  text-align: center;
  margin-bottom: 3rem;
  max-width: 600px;
  direction: rtl;
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const StepCard = styled.div`
  background: var(--color-background);
  border-radius: 1.25rem;
  box-shadow: 0 4px 24px rgba(27, 42, 73, 0.08);
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  direction: rtl;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 8px 32px rgba(27, 42, 73, 0.13);
  }
`;

const StepIcon = styled.div`
  color: var(--color-cta);
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const StepTitle = styled.h3`
  color: var(--color-primary);
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const StepDesc = styled.p`
  color: var(--color-text);
  font-size: 1rem;
  line-height: 1.6;
`;

const steps = [
  {
    icon: <FaLightbulb />,
    title: "אפיון ואסטרטגיה",
    desc: "הבנת הצרכים, הגדרת מטרות ויצירת תוכנית פעולה מותאמת אישית לכל לקוח.",
  },
  {
    icon: <FaPencilRuler />,
    title: "עיצוב וחווית משתמש",
    desc: "עיצוב ממשק מודרני ונוח, יצירת wireframes ו-UX שמוביל להצלחה.",
  },
  {
    icon: <FaCode />,
    title: "פיתוח אג'ילי",
    desc: "פיתוח מקצועי בטכנולוגיות המתקדמות ביותר, תוך שמירה על קוד איכותי וגמיש.",
  },
  {
    icon: <FaCheckCircle />,
    title: "בדיקות ואיכות",
    desc: "בדיקות קפדניות לאורך כל הדרך להבטחת מוצר יציב, מהיר וללא תקלות.",
  },
  {
    icon: <FaRocket />,
    title: "השקה ותמיכה",
    desc: "העלאת המערכת לאוויר, ליווי ותמיכה שוטפת להצלחת הלקוח.",
  },
];

export default function ProcessSection() {
  return (
    <Section id="process">
      <Title>התהליך שלנו</Title>
      <Subtitle>כך אנחנו הופכים רעיונות למציאות דיגיטלית מוצלחת:</Subtitle>
      <StepsGrid>
        {steps.map((step, idx) => (
          <StepCard key={idx}>
            <StepIcon>{step.icon}</StepIcon>
            <StepTitle>{step.title}</StepTitle>
            <StepDesc>{step.desc}</StepDesc>
          </StepCard>
        ))}
      </StepsGrid>
    </Section>
  );
} 