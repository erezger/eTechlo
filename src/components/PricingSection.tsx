"use client";

import { useTranslations } from 'next-intl';
import { useQuery } from '@tanstack/react-query';
import {
  Section,
  SectionTitle,
  Card,
  PrimaryButton,
  Subtitle,
  PricingGrid,
  Price,
  FeaturesList,
  FeatureItem,
} from './PricingSection.styles';
import { getFeaturedPackages } from '@/app/api/pricing.client';

export default function PricingSection() {
  const t = useTranslations("PricingSection");
  // 1. הגדרת ה-Query:
  const {
    data: packages,
    isLoading,
    isError,
  } = useQuery({
    // מפתח ייחודי ל-Cache של הנתונים האלו
    queryKey: ['pricingPackages'],
    // פונקציית ה-fetch שלנו
    queryFn: getFeaturedPackages,
  });

  // 2. טיפול במצבי טעינה ושגיאה:
  if (isLoading) {
    return <p>...טוען חבילות תמחור</p>;
  }

  // הודעת שגיאה נקייה מהאינטרספטור (אנו מצפים ל-Error object)
  if (isError) {
    // error.message יכיל את ההודעה המנוקה ע"י האינטרספטור
    return null;
  }

  return (
    <Section id="pricing" $bg="#fff">
      <SectionTitle>{t("title")}</SectionTitle>
      <Subtitle>{t("subtitle")}</Subtitle>
      <PricingGrid>
        {packages && packages.map((p, idx: number) => (
          <Card key={idx} $bg="var(--color-background)">
            <h3>{p.packageName_he}</h3>
            <Price>{p.price_min}</Price>
            {/* {plan.note && <PriceNote>{plan.note}</PriceNote>} */}
            <FeaturesList>
              {p.description_he?.split('\n*').map((f: string, fIdx: number) => (
                <FeatureItem key={fIdx}>{f}</FeatureItem>
              ))}
            </FeaturesList>
            <PrimaryButton as="a" href="#contact">
              {t("cta")}
            </PrimaryButton>
          </Card>
        ))}
      </PricingGrid>
    </Section>
  );
}


