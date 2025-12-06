"use client";
import { useState, useEffect, startTransition } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import { HeaderBar, Logo, Nav, NavLink, MobileMenuButton, Overlay } from "./Header.styles";
import { useTranslations } from 'next-intl';
import { setUserLocale } from '@/services/locale';
import { FaLanguage } from 'react-icons/fa6';
import { InfoIcon } from './ContactSection.styles';

export default function Header() {
  const t = useTranslations('Header');
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [userLocale, setLocale] = useState('he');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLocale = async () => {
    const newLocale = userLocale === 'he' ? 'en' : 'he';
    setLocale(newLocale);
    startTransition(() => {
      setUserLocale(newLocale);
    });
    // await setUserLocale(newLocale);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // If we're not on the homepage, prefix anchor links with "/"
  const getHref = (anchor: string) => {
    if (pathname === '/') {
      return anchor;
    }
    return `/${anchor}`;
  };

  return (
    <>
      <HeaderBar $isScrolled={isScrolled}>
        <Logo href={getHref('#home')}>eTechlo</Logo>
        <Nav $isOpen={isMenuOpen} $isScrolled={isScrolled}>
          <NavLink href={getHref('#home')} onClick={closeMenu} $isScrolled={isScrolled}>{t('home')}</NavLink>
          <NavLink href={getHref('#about')} onClick={closeMenu} $isScrolled={isScrolled}>{t('about')}</NavLink>
          <NavLink href={getHref('#services')} onClick={closeMenu} $isScrolled={isScrolled}>{t('services')}</NavLink>
          <NavLink href={getHref('#tech')} onClick={closeMenu} $isScrolled={isScrolled}>{t('tech')}</NavLink>
          <NavLink href="/case-studies" onClick={closeMenu} $isScrolled={isScrolled}>{t('caseStudies')}</NavLink>
          <NavLink href={getHref('#pricing')} onClick={closeMenu} $isScrolled={isScrolled}>{t('pricing')}</NavLink>
          <NavLink href={getHref('#testimonials')} onClick={closeMenu} $isScrolled={isScrolled}>{t('testimonials')}</NavLink>
          <NavLink href={getHref('#contact')} onClick={closeMenu} $isScrolled={isScrolled}>{t('contact')}</NavLink>
          <NavLink href="#" onClick={toggleLocale} $isScrolled={isScrolled}><InfoIcon><FaLanguage /></InfoIcon></NavLink>
        </Nav>
        <MobileMenuButton onClick={toggleMenu} $isScrolled={isScrolled}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </HeaderBar>
      <Overlay $isOpen={isMenuOpen} onClick={closeMenu} />
    </>
  );
} 