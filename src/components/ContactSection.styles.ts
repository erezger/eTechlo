import styled from "styled-components";
import { Section } from "./shared/Section";
import { SectionTitle } from "./shared/SectionTitle";
import { Container } from "./shared/Container";
import { Card as BaseCard } from "./shared/Card";
import { PrimaryButton } from "./shared/PrimaryButton";
import { SocialIcon } from "./shared/SocialIcon";

export { Section, SectionTitle, Container, PrimaryButton, SocialIcon };

export const Card = BaseCard;

export const InfoCard = styled(BaseCard)`
padding: 1.5rem;
border-radius: 1rem;
min-height: unset;
box-shadow: 0 2px 16px rgba(27, 42, 73, 0.08);
display: flex;
align-items: center;
gap: 1rem;
flex-direction: row;
text-align: start;
transition: transform 0.2s;
&:hover {
  transform: translateY(-4px);
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: #fff;
  padding: 2rem;
  border-radius: 1.25rem;
  box-shadow: 0 4px 24px rgba(27, 42, 73, 0.08);
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  color: var(--color-primary);
  font-weight: 600;
  font-size: 0.95rem;
`;

export const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 2px solid var(--color-background);
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: border-color 0.2s;
  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
`;

export const TextArea = styled.textarea`
  padding: 0.75rem 1rem;
  border: 2px solid var(--color-background);
  border-radius: 0.5rem;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: border-color 0.2s;
  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const InfoIcon = styled.div`
  font-size: 1.5rem;
  color: var(--color-accent);
  flex-shrink: 0;
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const InfoTitle = styled.h3`
  color: var(--color-primary);
  font-weight: 600;
  font-size: 1.1rem;
`;

export const InfoText = styled.p`
  color: var(--color-text);
  font-size: 1rem;
`;
export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const SuccessMessage = styled.div`
  background: #d4edda;
  color: #155724;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #c3e6cb;
  margin-bottom: 1rem;
`;
