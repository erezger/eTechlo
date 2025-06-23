import styled from "styled-components";

export const Card = styled.div<{ $bg?: string; $minHeight?: string }>`
  background: ${({ $bg }) => $bg || '#fff'};
  border-radius: 1.25rem;
  box-shadow: 0 2px 16px rgba(27, 42, 73, 0.08);
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: box-shadow 0.2s, transform 0.2s;
  min-height: ${({ $minHeight }) => $minHeight || 'auto'};
  &:hover {
    box-shadow: 0 6px 32px rgba(79, 182, 244, 0.13);
    transform: translateY(-4px) scale(1.03);
  }
`; 