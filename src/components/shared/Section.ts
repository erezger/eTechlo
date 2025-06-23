import styled from "styled-components";

export const Section = styled.section<{ $bg?: string }>`
  padding: 4rem 1rem;
  background: ${({ $bg }) => $bg || 'transparent'};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`; 