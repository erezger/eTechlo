import styled from "styled-components";
import { Section } from "./shared/Section";
import { SectionTitle } from "./shared/SectionTitle";
import { Card } from "./shared/Card";

export { Section, SectionTitle, Card };

export const Subtitle = styled.p`
  font-size: 1.2rem;
  color: var(--color-text);
  text-align: center;
  margin-bottom: 3rem;
  max-width: 600px;
  direction: rtl;
`;

export const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

export const StepIcon = styled.div`
  color: var(--color-cta);
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export const StepTitle = styled.h3`
  color: var(--color-primary);
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const StepDesc = styled.p`
  color: var(--color-text);
  font-size: 1rem;
  line-height: 1.6;
`; 