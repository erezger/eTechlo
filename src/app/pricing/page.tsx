'use client';

import { Section, SectionTitle, Subtitle } from '@/components/pricing/PricingSection.styles';
import PricingPackagesList from '@/components/pricing/PricingPackageList';
import { useTranslations } from 'next-intl';

export default function CaseStudiesPage() {
  const t = useTranslations("PricingSection");

  return (
    <Section id="pricing" $bg="#fff">
      <SectionTitle>{t("title")}</SectionTitle>
      <Subtitle>{t("subtitle")}</Subtitle>
      <PricingPackagesList featuredOnly={false}></PricingPackagesList>
    </Section>
  );
}


