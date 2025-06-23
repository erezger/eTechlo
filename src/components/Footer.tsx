"use client";
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { FooterContainer, FooterContent, FooterColumn, Logo, ColumnTitle, FooterLink, SocialIcons, SocialIconLink, Copyright } from "./Footer.styles";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <Logo href="#home">eTechlo</Logo>
          <p>פתרונות תוכנה מתקדמים לעסקים. <br /> מחזון למציאות דיגיטלית.</p>
        </FooterColumn>
        <FooterColumn>
          <ColumnTitle>ניווט מהיר</ColumnTitle>
          <FooterLink href="#home">ראשי</FooterLink>
          <FooterLink href="#services">שירותים</FooterLink>
          <FooterLink href="#about">אודות</FooterLink>
          <FooterLink href="#testimonials">המלצות</FooterLink>
          <FooterLink href="#contact">צור קשר</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <ColumnTitle>יצירת קשר</ColumnTitle>
          <p>info@etechlo.com</p>
          <p>+972-50-1234567</p>
          <SocialIcons>
            <SocialIconLink href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedin /></SocialIconLink>
            <SocialIconLink href="#" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><FaGithub /></SocialIconLink>
            <SocialIconLink href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></SocialIconLink>
          </SocialIcons>
        </FooterColumn>
      </FooterContent>
      <Copyright>
        © {currentYear} eTechlo. כל הזכויות שמורות.
      </Copyright>
    </FooterContainer>
  );
} 