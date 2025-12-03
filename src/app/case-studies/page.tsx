"use client";

import { useTranslations, useMessages } from "next-intl";
import { Section, SectionTitle } from "@/components/CaseStudiesSection.styles";
import {
  Card,
  Subtitle,
  CaseGrid,
  CaseTag,
  CaseTitle,
  CaseDesc,
  CaseMetrics,
  CaseMetric,
} from "@/components/CaseStudiesSection.styles";

export default function CaseStudiesPage() {
  const t = useTranslations("CaseStudiesSection");
  const messages = useMessages();
  const caseStudiesItems = (messages.CaseStudiesSection?.items ?? []) as {
    title: string;
    industry: string;
    summary: string;
    metrics?: string[];
    details?: string[];
  }[];
  return (
    <main>
      <Section id="case-studies">
        <SectionTitle>{t("pageTitle")}</SectionTitle>
        <Subtitle>{t("pageSubtitle")}</Subtitle>
        <CaseGrid>
          {caseStudiesItems.map((item, idx: number) => (
            <Card key={idx} $bg="var(--color-background)">
              <CaseTag>{item.industry}</CaseTag>
              <CaseTitle>{item.title}</CaseTitle>
              <CaseDesc>{item.summary}</CaseDesc>
              <CaseMetrics>
                {item.details?.map((d: string, dIdx: number) => (
                  <CaseMetric key={dIdx}>{d}</CaseMetric>
                ))}
              </CaseMetrics>
            </Card>
          ))}
        </CaseGrid>
      </Section>
    </main>
  );
}


