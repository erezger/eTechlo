"use client";

import { useTranslations } from "next-intl";
import {
  Section,
  SectionTitle,
  Card,
  PrimaryButton,
  Subtitle,
  PricingGrid,
  Price,
  PriceNote,
  // FeaturesList,
  // FeatureItem,
} from "./PricingSection.styles";

export default function PricingSection() {
  const t = useTranslations("PricingSection");
  const plans = [0, 1, 2].map(idx => ({
    name: t(`plans.${idx}.name`),
    price: t(`plans.${idx}.price`),
    note: t(`plans.${idx}.note`),
    // features: t(`plans.${idx}.features`),
  }));

  return (
    <Section id="pricing" $bg="#fff">
      <SectionTitle>{t("title")}</SectionTitle>
      <Subtitle>{t("subtitle")}</Subtitle>
      <PricingGrid>
        {plans.map((plan: { name: string; price: string; note: string }, idx: number) => (
          <Card key={idx} $bg="var(--color-background)">
            <h3>{plan.name}</h3>
            <Price>{plan.price}</Price>
            {plan.note && <PriceNote>{plan.note}</PriceNote>}
            {/* <FeaturesList>
              {plan.features?.map((f: string, fIdx: number) => (
                <FeatureItem key={fIdx}>{f}</FeatureItem>
              ))}
            </FeaturesList> */}
            <PrimaryButton as="a" href="#contact">
              {t("cta")}
            </PrimaryButton>
          </Card>
        ))}
      </PricingGrid>
    </Section>
  );
}


