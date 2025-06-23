import styled from "styled-components";

export const PrimaryButton = styled.a`
  background: var(--color-cta);
  color: #fff;
  font-size: 1.15rem;
  font-weight: 700;
  padding: 0.9rem 2.2rem;
  border-radius: 2rem;
  box-shadow: 0 4px 16px rgba(50, 212, 192, 0.2);
  text-decoration: none;
  transition: all 0.2s ease;
  display: inline-block;
  border: none;
  cursor: pointer;
  &:hover {
    background: var(--color-accent);
    box-shadow: 0 6px 20px rgba(79, 182, 244, 0.25);
    transform: translateY(-2px);
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`; 