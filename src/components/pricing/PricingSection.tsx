"use client";

import { useTranslations } from 'next-intl';
import {
  Section,
  SectionTitle,
  Subtitle,
} from './PricingSection.styles';
import { ViewMoreLink } from '../CaseStudiesSection.styles';
import Link from 'next/link';
import PricingPackagesList from './PricingPackageList';

export default function PricingSection() {
  const t = useTranslations("PricingSection");

  return (
    // <>
    <Section id="pricing" $bg="#fff">
      <SectionTitle>{t("title")}</SectionTitle>
      <Subtitle>{t("subtitle")}</Subtitle>
      <PricingPackagesList featuredOnly={true} />
      <ViewMoreLink as={Link} href="/pricing">
        {t("viewAll")}
      </ViewMoreLink>
    </Section>
  );
}


