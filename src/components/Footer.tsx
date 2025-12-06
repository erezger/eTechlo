"use client";
import { usePathname } from "next/navigation";
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { FooterContainer, FooterContent, FooterColumn, Logo, ColumnTitle, FooterLink, SocialIcons, SocialIconLink, Copyright } from "./Footer.styles";
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  // If we're not on the homepage, prefix anchor links with "/"
  const getHref = (anchor: string) => {
    if (pathname === '/') {
      return anchor;
    }
    return `/${anchor}`;
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <Logo href={getHref('#home')}>eTechlo</Logo>
          <p>{t('slogan')}</p>
        </FooterColumn>
        <FooterColumn>
          <ColumnTitle>{t('navTitle')}</ColumnTitle>
          <FooterLink href={getHref('#home')}>{t('nav.home')}</FooterLink>
          <FooterLink href={getHref('#services')}>{t('nav.services')}</FooterLink>
          <FooterLink href={getHref('#about')}>{t('nav.about')}</FooterLink>
          <FooterLink href={getHref('#tech')}>{t('nav.tech')}</FooterLink>
          <FooterLink href="/case-studies">{t('nav.caseStudies')}</FooterLink>
          <FooterLink href={getHref('#pricing')}>{t('nav.pricing')}</FooterLink>
          <FooterLink href={getHref('#testimonials')}>{t('nav.testimonials')}</FooterLink>
          <FooterLink href={getHref('#contact')}>{t('nav.contact')}</FooterLink>
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