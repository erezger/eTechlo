"use client";
import { FaLaptopCode, FaCogs, FaLightbulb, FaNetworkWired } from "react-icons/fa";
import { Section, SectionTitle, Card, Cards, IconWrap, CardTitle, CardDesc } from "./ServicesSection.styles";
import { useTranslations } from 'next-intl';

export default function ServicesSection() {
  const t = useTranslations('ServicesSection');
  return (
    <Section id="services">
      <SectionTitle $margin="2rem">{t('title')}</SectionTitle>
      <Cards>
        <Card>
          <IconWrap><FaLaptopCode /></IconWrap>
          <CardTitle>{t('cards.0.title')}</CardTitle>
          <CardDesc>{t('cards.0.desc')}</CardDesc>
        </Card>
        <Card>
          <IconWrap><FaCogs /></IconWrap>
          <CardTitle>{t('cards.1.title')}</CardTitle>
          <CardDesc>{t('cards.1.desc')}</CardDesc>
        </Card>
        <Card>
          <IconWrap><FaLightbulb /></IconWrap>
          <CardTitle>{t('cards.2.title')}</CardTitle>
          <CardDesc>{t('cards.2.desc')}</CardDesc>
        </Card>
        <Card>
          <IconWrap><FaNetworkWired /></IconWrap>
          <CardTitle>{t('cards.3.title')}</CardTitle>
          <CardDesc>{t('cards.3.desc')}</CardDesc>
        </Card>
      </Cards>
    </Section>
  );
} 