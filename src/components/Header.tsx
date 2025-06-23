"use client";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { HeaderBar, Logo, Nav, NavLink, MobileMenuButton, Overlay } from "./Header.styles";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <HeaderBar $isScrolled={isScrolled}>
        <Logo href="#home">eTechlo</Logo>
        <Nav $isOpen={isMenuOpen} $isScrolled={isScrolled}>
          <NavLink href="#home" onClick={closeMenu} $isScrolled={isScrolled}>דף הבית</NavLink>
          <NavLink href="#about" onClick={closeMenu} $isScrolled={isScrolled}>אודותינו</NavLink>
          <NavLink href="#services" onClick={closeMenu} $isScrolled={isScrolled}>שירותים</NavLink>
          <NavLink href="#testimonials" onClick={closeMenu} $isScrolled={isScrolled}>המלצות</NavLink>
          <NavLink href="#contact" onClick={closeMenu} $isScrolled={isScrolled}>צור קשר</NavLink>
        </Nav>
        <MobileMenuButton onClick={toggleMenu} $isScrolled={isScrolled}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </HeaderBar>
      <Overlay $isOpen={isMenuOpen} onClick={closeMenu} />
    </>
  );
} 