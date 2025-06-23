"use client";
import { Hero, Slogan, Subtitle, CTAButton } from "./HeroSection.styles";
import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('HeroSection');
  return (
    <Hero id="home">
      <Slogan>{t('title')}</Slogan>
      <Subtitle>{t('subtitle')}</Subtitle>
      <CTAButton href="#contact">{t('cta')}</CTAButton>
    </Hero>
  );
} 