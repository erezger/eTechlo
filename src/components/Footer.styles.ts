import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: var(--color-primary);
  color: #fff;
  padding: 4rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 3rem;
  gap: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
  min-width: 200px;
`;

export const Logo = styled.a`
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--color-cta);
  letter-spacing: 1px;
  text-decoration: none;
  margin-bottom: 1rem;
`;

export const ColumnTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-accent);
  margin-bottom: 0.5rem;
`;

export const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: color 0.2s;
  &:hover {
    color: var(--color-accent);
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
   @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.2s, transform 0.2s;
  &:hover {
    color: var(--color-cta);
    transform: scale(1.1);
  }
`;

export const Copyright = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  width: 100%;
  max-width: 1200px;
  text-align: center;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
`; 