"use client";
import { FaUsers, FaRocket, FaHandshake } from "react-icons/fa";
import { Section, SectionTitle, Container, Content, Subtitle, Description, Features, Feature, FeatureIcon, FeatureText, ImageContainer, StyledImage } from "./AboutSection.styles";
import { useTranslations } from 'next-intl';

export default function AboutSection() {
  const t = useTranslations('AboutSection');
  return (
    <Section id="about" $bg="#fff">
      <SectionTitle>{t('title')}</SectionTitle>
      <Subtitle>{t('slogan')}</Subtitle>
      <Container>
        <Content>
          <Description>{t('desc1')}</Description>
          <Description>{t('desc2')}</Description>
          <Features>
            <Feature>
              <FeatureIcon><FaUsers /></FeatureIcon>
              <FeatureText>{t('features.0')}</FeatureText>
            </Feature>
            <Feature>
              <FeatureIcon><FaRocket /></FeatureIcon>
              <FeatureText>{t('features.1')}</FeatureText>
            </Feature>
            <Feature>
              <FeatureIcon><FaHandshake /></FeatureIcon>
              <FeatureText>{t('features.2')}</FeatureText>
            </Feature>
          </Features>
        </Content>
        <ImageContainer>
          <StyledImage src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" alt="eTechlo Team Collaboration" />
        </ImageContainer>
      </Container>
    </Section>
  );
} 