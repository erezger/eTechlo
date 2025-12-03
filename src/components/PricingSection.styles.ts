import styled from "styled-components";
import { Section } from "./shared/Section";
import { SectionTitle } from "./shared/SectionTitle";
import { Card } from "./shared/Card";
import { PrimaryButton } from "./shared/PrimaryButton";

export { Section, SectionTitle, Card, PrimaryButton };

export const Subtitle = styled.p`
  font-size: 1.1rem;
  color: var(--color-text);
  text-align: center;
  margin-bottom: 2.5rem;
  max-width: 650px;
`;

export const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const Price = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--color-primary);
  margin: 0.5rem 0 0.75rem;
`;

export const PriceNote = styled.p`
  font-size: 0.85rem;
  color: var(--color-text);
  opacity: 0.8;
  margin-bottom: 1rem;
`;

export const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
  font-size: 0.95rem;
  color: var(--color-text);
`;

export const FeatureItem = styled.li`
  margin-bottom: 0.4rem;
`;


