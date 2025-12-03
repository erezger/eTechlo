"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  Section,
  SectionTitle,
  Card,
  Subtitle,
  CaseGrid,
  CaseTag,
  CaseTitle,
  CaseDesc,
  // CaseMetrics,
  // CaseMetric,
  ViewMoreLink,
} from "./CaseStudiesSection.styles";

export default function CaseStudiesSection() {
  const t = useTranslations("CaseStudiesSection");
  // const items = t<any>("items");
  const caseStudiesItems = [0, 1, 2].map(idx => ({
    title: t(`items.${idx}.title`),
    industry: t(`items.${idx}.industry`),
    summary: t(`items.${idx}.summary`),
    // metrics: t(`items.${idx}.metrics`) as unknown as string[] | undefined,
    // details: t(`items.${idx}.details`) as unknown as string[] | undefined,
  }));

  return (
    <Section id="case-studies">
      <SectionTitle>{t("title")}</SectionTitle>
      <Subtitle>{t("subtitle")}</Subtitle>
      <CaseGrid>
        {caseStudiesItems.map((item: { title: string; industry: string; summary: string }, idx: number) => (
          <Card key={idx} $bg="var(--color-background)">
            <CaseTag>{item.industry}</CaseTag>
            <CaseTitle>{item.title}</CaseTitle>
            <CaseDesc>{item.summary}</CaseDesc>
            {/* <CaseMetrics>
              {item.metrics?.map((m: string, mIdx: number) => (
                <CaseMetric key={mIdx}>{m}</CaseMetric>
              ))}
            </CaseMetrics> */}
          </Card>
        ))}
      </CaseGrid>
      <ViewMoreLink as={Link} href="/case-studies">
        {t("viewAll")}
      </ViewMoreLink>
    </Section>
  );
}


