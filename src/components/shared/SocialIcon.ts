import styled from "styled-components";

export const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background: var(--color-primary);
  color: #fff;
  border-radius: 50%;
  font-size: 1.2rem;
  transition: background 0.2s, transform 0.2s;
  &:hover {
    background: var(--color-accent);
    transform: translateY(-2px);
  }
`; 