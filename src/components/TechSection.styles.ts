import styled from "styled-components";
import { Section } from "./shared/Section";
import { SectionTitle } from "./shared/SectionTitle";
import { Card } from "./shared/Card";

export { Section, SectionTitle, Card };

export const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const TechIcon = styled.div`
  font-size: 2.5rem;
  color: var(--color-accent);
`;

export const TechName = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  height: 1rem;
  color: var(--color-primary);
`;


