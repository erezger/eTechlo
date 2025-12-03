"use client";

import { useTranslations } from "next-intl";
import { Section, SectionTitle } from "@/components/CaseStudiesSection.styles";
import {
  Card,
  Subtitle,
  CaseGrid,
  CaseTag,
  CaseTitle,
  CaseDesc,
  // CaseMetrics,
  // CaseMetric,
} from "@/components/CaseStudiesSection.styles";

export default function CaseStudiesPage() {
  const t = useTranslations("CaseStudiesSection");
  const caseStudiesItems = [0, 1, 2].map(idx => ({
    title: t(`items.${idx}.title`),
    industry: t(`items.${idx}.industry`),
    summary: t(`items.${idx}.summary`),
    // metrics: t(`items.${idx}.metrics`) as unknown as string[] | undefined,
    // details: t(`items.${idx}.details`) as unknown as string[] | undefined,
  }));
  return (
    <main>
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
      </Section>
    </main>
  );
}


