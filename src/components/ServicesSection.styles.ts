import styled from "styled-components";
import { Section } from "./shared/Section";
import { SectionTitle } from "./shared/SectionTitle";
import { Card } from "./shared/Card";

export { Section, SectionTitle, Card };

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1100px;
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const IconWrap = styled.div`
  font-size: 2.5rem;
  color: var(--color-accent);
  margin-bottom: 1rem;
`;

export const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
`;

export const CardDesc = styled.p`
  color: var(--color-text);
  font-size: 1rem;
`; 