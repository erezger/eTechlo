"use client";
import { useState, useEffect, startTransition } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { HeaderBar, Logo, Nav, NavLink, MobileMenuButton, Overlay } from "./Header.styles";
import { useTranslations } from 'next-intl';
import { setUserLocale } from '@/services/locale';
import { FaLanguage } from 'react-icons/fa6';
import { InfoIcon } from './ContactSection.styles';

export default function Header() {
  const t = useTranslations('Header');
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

  return (
    <>
      <HeaderBar $isScrolled={isScrolled}>
        <Logo href="#home">eTechlo</Logo>
        <Nav $isOpen={isMenuOpen} $isScrolled={isScrolled}>
          <NavLink href="#home" onClick={closeMenu} $isScrolled={isScrolled}>{t('home')}</NavLink>
          <NavLink href="#about" onClick={closeMenu} $isScrolled={isScrolled}>{t('about')}</NavLink>
          <NavLink href="#services" onClick={closeMenu} $isScrolled={isScrolled}>{t('services')}</NavLink>
          <NavLink href="#testimonials" onClick={closeMenu} $isScrolled={isScrolled}>{t('testimonials')}</NavLink>
          <NavLink href="#contact" onClick={closeMenu} $isScrolled={isScrolled}>{t('contact')}</NavLink>
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