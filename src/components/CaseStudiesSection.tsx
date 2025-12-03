"use client";

import { useTranslations, useMessages } from "next-intl";
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
  CaseMetrics,
  CaseMetric,
  ViewMoreLink,
} from "./CaseStudiesSection.styles";

export default function CaseStudiesSection() {
  const t = useTranslations("CaseStudiesSection");
  const messages = useMessages();
  const caseStudiesItems = (messages.CaseStudiesSection?.items ?? []) as {
    title: string;
    industry: string;
    summary: string;
    metrics?: string[];
  }[];

  return (
    <Section id="case-studies">
      <SectionTitle>{t("title")}</SectionTitle>
      <Subtitle>{t("subtitle")}</Subtitle>
      <CaseGrid>
        {caseStudiesItems.slice(0, 3).map((item, idx: number) => (
          <Card key={idx} $bg="var(--color-background)">
            <CaseTag>{item.industry}</CaseTag>
            <CaseTitle>{item.title}</CaseTitle>
            <CaseDesc>{item.summary}</CaseDesc>
            <CaseMetrics>
              {item.metrics?.map((m: string, mIdx: number) => (
                <CaseMetric key={mIdx}>{m}</CaseMetric>
              ))}
            </CaseMetrics>
          </Card>
        ))}
      </CaseGrid>
      <ViewMoreLink as={Link} href="/case-studies">
        {t("viewAll")}
      </ViewMoreLink>
    </Section>
  );
}


