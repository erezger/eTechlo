import styled from "styled-components";

export const SectionTitle = styled.h2<{ $align?: string; $margin?: string }>`
  color: var(--color-primary);
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: ${({ $margin }) => $margin || '1rem'};
  text-align: ${({ $align }) => $align || 'center'};
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`; 