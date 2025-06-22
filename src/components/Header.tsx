"use client";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const HeaderBar = styled.header<{ $isScrolled: boolean }>`
  position: sticky;
  top: 0;
  width: 100%;
  background: var(--color-primary);
  opacity: ${props => props.$isScrolled ? '0.8' : '1'};
  color: #fff;
  z-index: 1000;
  box-shadow: ${props => props.$isScrolled ? '0 4px 12px rgba(0, 0, 0, 0.1)' : 'none'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  min-height: 70px;
  transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease, padding 0.3s ease;
  
  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--color-cta);
  letter-spacing: 1px;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const Nav = styled.nav<{ $isOpen: boolean, $isScrolled: boolean }>`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 70px; // Match header height
    right: ${props => props.$isOpen ? '0' : '-100%'};
    width: 250px;
    height: calc(100vh - 70px);
    background: var(--color-primary);
    flex-direction: column;
    padding: 2rem 1rem;
    transition: right 0.3s ease;
    box-shadow: -2px 0 12px rgba(0, 0, 0, 0.1);
  }
`;

const NavLink = styled.a<{ $isScrolled: boolean }>`
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s;
  padding: 0.5rem 0;
  
  &:hover {
    color: var(--color-accent);
  }
  
  @media (max-width: 768px) {
    color: #fff;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    &:last-child {
      border-bottom: none;
    }
  }
`;

const MobileMenuButton = styled.button<{ $isScrolled: boolean }>`
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Overlay = styled.div<{ $isOpen: boolean }>`
  display: none;
  @media (max-width: 768px) {
    display: ${props => props.$isOpen ? 'block' : 'none'};
    position: fixed;
    top: 64px;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 99;
  }
`;

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
          <NavLink href="#home" onClick={closeMenu} $isScrolled={isScrolled}>Home</NavLink>
          <NavLink href="#about" onClick={closeMenu} $isScrolled={isScrolled}>About</NavLink>
          <NavLink href="#services" onClick={closeMenu} $isScrolled={isScrolled}>Services</NavLink>
          <NavLink href="#testimonials" onClick={closeMenu} $isScrolled={isScrolled}>Testimonials</NavLink>
          <NavLink href="#contact" onClick={closeMenu} $isScrolled={isScrolled}>Contact</NavLink>
        </Nav>
        <MobileMenuButton onClick={toggleMenu} $isScrolled={isScrolled}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </HeaderBar>
      <Overlay $isOpen={isMenuOpen} onClick={closeMenu} />
    </>
  );
} 