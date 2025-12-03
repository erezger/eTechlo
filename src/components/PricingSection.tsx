"use client";

import { useTranslations, useMessages } from "next-intl";
import {
  Section,
  SectionTitle,
  Card,
  PrimaryButton,
  Subtitle,
  PricingGrid,
  Price,
  PriceNote,
  FeaturesList,
  FeatureItem,
} from "./PricingSection.styles";

export default function PricingSection() {
  const t = useTranslations("PricingSection");
  const messages = useMessages();
  const plans = (messages.PricingSection?.plans ?? []) as {
    name: string;
    price: string;
    note?: string;
    features?: string[];
  }[];

  return (
    <Section id="pricing" $bg="#fff">
      <SectionTitle>{t("title")}</SectionTitle>
      <Subtitle>{t("subtitle")}</Subtitle>
      <PricingGrid>
        {plans.map((plan, idx: number) => (
          <Card key={idx} $bg="var(--color-background)">
            <h3>{plan.name}</h3>
            <Price>{plan.price}</Price>
            {plan.note && <PriceNote>{plan.note}</PriceNote>}
            <FeaturesList>
              {plan.features?.map((f: string, fIdx: number) => (
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


