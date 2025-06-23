import styled from "styled-components";
import { Section } from "./shared/Section";
import { SectionTitle } from "./shared/SectionTitle";
import { Container } from "./shared/Container";

export { Section, SectionTitle, Container };

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  color: var(--color-accent);
  font-weight: 600;
  margin-bottom: 3rem;
  text-align: center;
  max-width: 600px;
`;

export const Description = styled.p`
  font-size: 1.1rem;
  color: var(--color-text);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

export const Features = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: var(--color-background);
  border-radius: 0.75rem;
  border-right: 4px solid var(--color-cta);
`;

export const FeatureIcon = styled.div`
  font-size: 1.5rem;
  color: var(--color-accent);
  flex-shrink: 0;
`;

export const FeatureText = styled.div`
  color: var(--color-text);
  font-weight: 500;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  background: var(--color-background);
  border-radius: 1.5rem;
  box-shadow: 0 8px 32px rgba(27, 42, 73, 0.1);
  position: relative;
  overflow: hidden;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`; 