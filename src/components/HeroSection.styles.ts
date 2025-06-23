import styled from "styled-components";

export const Hero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 90vh;
  padding: 4rem 1rem;
  text-align: center;
  position: relative;
  background-image: 
    linear-gradient(rgba(27, 42, 73, 0.9), rgba(27, 42, 73, 0.9)), 
    url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80");
  background-size: cover;
  background-position: center;
  @media (max-width: 600px) {
    min-height: 80vh;
    padding: 2rem 1rem;
  }
`;

export const Slogan = styled.h1`
  font-size: 3.5rem;
  font-family: var(--font-assistant), sans-serif;
  color: #fff;
  margin-bottom: 1rem;
  font-weight: 800;
  line-height: 1.2;
  text-shadow: 0 2px 10px rgba(0,0,0,0.3);
  max-width: 800px;
  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 2.5rem;
  max-width: 600px;
  line-height: 1.6;
  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

export const CTAButton = styled.a`
  background: var(--color-cta);
  color: #fff;
  font-size: 1.15rem;
  font-weight: 700;
  padding: 0.9rem 2.2rem;
  border-radius: 2rem;
  box-shadow: 0 4px 16px rgba(50, 212, 192, 0.2);
  text-decoration: none;
  transition: all 0.2s ease;
  &:hover {
    background: var(--color-accent);
    box-shadow: 0 6px 20px rgba(79, 182, 244, 0.25);
    transform: translateY(-2px);
  }
`; 