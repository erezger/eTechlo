"use client";
import styled from "styled-components";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { useState } from "react";

const Section = styled.section`
  padding: 4rem 1rem;
  background: var(--color-background);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Title = styled.h2`
  color: var(--color-primary);
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
  grid-column: 1 / -1;
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: #fff;
  padding: 2rem;
  border-radius: 1.25rem;
  box-shadow: 0 4px 24px rgba(27, 42, 73, 0.08);
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: var(--color-primary);
  font-weight: 600;
  font-size: 0.95rem;
`;

const Input = styled.input`
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

const TextArea = styled.textarea`
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

const SubmitButton = styled.button`
  background: var(--color-cta);
  color: #fff;
  font-size: 1.1rem;
  font-weight: 700;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
  &:hover {
    background: var(--color-accent);
    transform: translateY(-2px);
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoCard = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 2px 16px rgba(27, 42, 73, 0.08);
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-4px);
  }
`;

const InfoIcon = styled.div`
  font-size: 1.5rem;
  color: var(--color-accent);
  flex-shrink: 0;
`;

const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const InfoTitle = styled.h3`
  color: var(--color-primary);
  font-weight: 600;
  font-size: 1.1rem;
`;

const InfoText = styled.p`
  color: var(--color-text);
  font-size: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
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

const SuccessMessage = styled.div`
  background: #d4edda;
  color: #155724;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #c3e6cb;
  margin-bottom: 1rem;
`;

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setShowSuccess(true);
    setFormData({ name: '', email: '', phone: '', message: '' });

    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <Section id="contact">
      <Title>צור קשר</Title>
      <Container>
        <ContactForm onSubmit={handleSubmit}>
          {showSuccess && (
            <SuccessMessage>
              תודה! נציג יצור איתך קשר בהקדם.
            </SuccessMessage>
          )}

          <FormGroup>
            <Label htmlFor="name">שם מלא *</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">אימייל *</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="phone">טלפון</Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="message">הודעה *</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="ספר לנו על הפרויקט שלך..."
            />
          </FormGroup>

          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'שולח...' : 'שלח הודעה'}
          </SubmitButton>
        </ContactForm>

        <ContactInfo>
          <InfoCard>
            <InfoIcon><FaPhone /></InfoIcon>
            <InfoContent>
              <InfoTitle>טלפון</InfoTitle>
              <InfoText>+972-50-123-4567</InfoText>
            </InfoContent>
          </InfoCard>

          <InfoCard>
            <InfoIcon><FaEnvelope /></InfoIcon>
            <InfoContent>
              <InfoTitle>אימייל</InfoTitle>
              <InfoText>info@etechlo.com</InfoText>
            </InfoContent>
          </InfoCard>

          <InfoCard>
            <InfoIcon><FaMapMarkerAlt /></InfoIcon>
            <InfoContent>
              <InfoTitle>כתובת</InfoTitle>
              <InfoText>תל אביב, ישראל</InfoText>
            </InfoContent>
          </InfoCard>

          <div>
            <InfoTitle style={{ marginBottom: '1rem' }}>עקבו אחרינו</InfoTitle>
            <SocialLinks>
              <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </SocialLink>
              <SocialLink href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </SocialLink>
            </SocialLinks>
          </div>
        </ContactInfo>
      </Container>
    </Section>
  );
} 