"use client";
import { FaLightbulb, FaPencilRuler, FaCode, FaCheckCircle, FaRocket } from "react-icons/fa";
import { Section, SectionTitle, Card, Subtitle, StepsGrid, StepIcon, StepTitle, StepDesc } from "./ProcessSection.styles";
import { useTranslations } from 'next-intl';

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
  const t = useTranslations('ProcessSection');
  return (
    <Section id="process" $bg="#fff">
      <SectionTitle>{t('title')}</SectionTitle>
      <Subtitle>{t('subtitle')}</Subtitle>
      <StepsGrid>
        {steps.map((step, idx) => (
          <Card key={idx} $bg="var(--color-background)">
            <StepIcon>{step.icon}</StepIcon>
            <StepTitle>{t(`steps.${idx}.title`)}</StepTitle>
            <StepDesc>{t(`steps.${idx}.desc`)}</StepDesc>
          </Card>
        ))}
      </StepsGrid>
    </Section>
  );
} 