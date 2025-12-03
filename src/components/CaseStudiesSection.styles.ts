import styled from "styled-components";
import { Section } from "./shared/Section";
import { SectionTitle } from "./shared/SectionTitle";
import { Card } from "./shared/Card";

export { Section, SectionTitle, Card };

export const Subtitle = styled.p`
  font-size: 1.1rem;
  color: var(--color-text);
  text-align: center;
  margin-bottom: 2.5rem;
  max-width: 650px;
`;

export const CaseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const CaseTag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  background: rgba(54, 123, 245, 0.06);
  color: var(--color-accent);
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
`;

export const CaseTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
`;

export const CaseDesc = styled.p`
  font-size: 0.95rem;
  color: var(--color-text);
  margin-bottom: 0.75rem;
`;

export const CaseMetrics = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0.5rem 0 1rem;
  font-size: 0.9rem;
  color: var(--color-text);
`;

export const CaseMetric = styled.li`
  margin-bottom: 0.25rem;
`;

export const ViewMoreLink = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  font-size: 0.95rem;
  color: var(--color-cta);
  text-decoration: none;
  font-weight: 600;
  &:hover {
    text-decoration: underline;
  }
`;


