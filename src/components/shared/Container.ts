import styled from "styled-components";

export const Container = styled.div<{ $columns?: string; $gap?: string }>`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: ${({ $columns }) => $columns || '1fr 1fr'};
  gap: ${({ $gap }) => $gap || '4rem'};
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`; 