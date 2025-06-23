"use client";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { useState } from "react";
import {
  Section,
  SectionTitle,
  Container,
  PrimaryButton,
  SocialIcon,
  ContactForm,
  FormGroup,
  Label,
  Input,
  TextArea,
  ContactInfo,
  InfoIcon,
  InfoContent,
  InfoTitle,
  InfoText,
  SocialLinks,
  SuccessMessage,
  InfoCard,
} from "./ContactSection.styles";

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
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1200);
  };

  return (
    <Section id="contact" $bg="var(--color-background)">
      <SectionTitle>צור קשר</SectionTitle>
      <Container>
        <ContactForm onSubmit={handleSubmit}>
          {showSuccess && <SuccessMessage>ההודעה נשלחה בהצלחה!</SuccessMessage>}
          <FormGroup>
            <Label htmlFor="name">שם מלא</Label>
            <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">אימייל</Label>
            <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="phone">טלפון</Label>
            <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">הודעה</Label>
            <TextArea id="message" name="message" value={formData.message} onChange={handleChange} required />
          </FormGroup>
          <PrimaryButton as="button" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'שולח...' : 'שלח הודעה'}
          </PrimaryButton>
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
          <SocialLinks>
            <SocialIcon href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedin /></SocialIcon>
            <SocialIcon href="#" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><FaGithub /></SocialIcon>
          </SocialLinks>
        </ContactInfo>
      </Container>
    </Section>
  );
} 