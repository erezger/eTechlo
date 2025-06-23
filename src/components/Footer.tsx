"use client";
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { FooterContainer, FooterContent, FooterColumn, Logo, ColumnTitle, FooterLink, SocialIcons, SocialIconLink, Copyright } from "./Footer.styles";
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <Logo href="#home">eTechlo</Logo>
          <p>{t('slogan')}</p>
        </FooterColumn>
        <FooterColumn>
          <ColumnTitle>{t('navTitle')}</ColumnTitle>
          <FooterLink href="#home">{t('nav.home')}</FooterLink>
          <FooterLink href="#services">{t('nav.services')}</FooterLink>
          <FooterLink href="#about">{t('nav.about')}</FooterLink>
          <FooterLink href="#testimonials">{t('nav.testimonials')}</FooterLink>
          <FooterLink href="#contact">{t('nav.contact')}</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <ColumnTitle>{t('contactTitle')}</ColumnTitle>
          <p>{t('email')}</p>
          <p>{t('phone')}</p>
          <SocialIcons>
            <SocialIconLink href="#" aria-label={t('social.linkedin')} target="_blank" rel="noopener noreferrer"><FaLinkedin /></SocialIconLink>
            <SocialIconLink href="#" aria-label={t('social.github')} target="_blank" rel="noopener noreferrer"><FaGithub /></SocialIconLink>
            <SocialIconLink href="#" aria-label={t('social.twitter')} target="_blank" rel="noopener noreferrer"><FaTwitter /></SocialIconLink>
          </SocialIcons>
        </FooterColumn>
      </FooterContent>
      <Copyright>
        © {currentYear} eTechlo. {t('copyright')}
      </Copyright>
    </FooterContainer>
  );
} 