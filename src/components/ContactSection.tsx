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
import { useTranslations } from 'next-intl';

export default function ContactSection() {
  const t = useTranslations('ContactSection');
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
      <SectionTitle>{t('title')}</SectionTitle>
      <Container>
        <ContactForm onSubmit={handleSubmit}>
          {showSuccess && <SuccessMessage>{t('success')}</SuccessMessage>}
          <FormGroup>
            <Label htmlFor="name">{t('form.name')}</Label>
            <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">{t('form.email')}</Label>
            <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="phone">{t('form.phone')}</Label>
            <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">{t('form.message')}</Label>
            <TextArea id="message" name="message" value={formData.message} onChange={handleChange} required />
          </FormGroup>
          <PrimaryButton as="button" type="submit" disabled={isSubmitting}>
            {isSubmitting ? t('form.submitting') : t('form.submit')}
          </PrimaryButton>
        </ContactForm>
        <ContactInfo>
          <InfoCard>
            <InfoIcon><FaPhone /></InfoIcon>
            <InfoContent>
              <InfoTitle>{t('info.phoneTitle')}</InfoTitle>
              <InfoText>{t('info.phoneValue')}</InfoText>
            </InfoContent>
          </InfoCard>
          <InfoCard>
            <InfoIcon><FaEnvelope /></InfoIcon>
            <InfoContent>
              <InfoTitle>{t('info.emailTitle')}</InfoTitle>
              <InfoText>{t('info.emailValue')}</InfoText>
            </InfoContent>
          </InfoCard>
          <InfoCard>
            <InfoIcon><FaMapMarkerAlt /></InfoIcon>
            <InfoContent>
              <InfoTitle>{t('info.addressTitle')}</InfoTitle>
              <InfoText>{t('info.addressValue')}</InfoText>
            </InfoContent>
          </InfoCard>
          <SocialLinks>
            <SocialIcon href="#" aria-label={t('social.linkedin')} target="_blank" rel="noopener noreferrer"><FaLinkedin /></SocialIcon>
            <SocialIcon href="#" aria-label={t('social.github')} target="_blank" rel="noopener noreferrer"><FaGithub /></SocialIcon>
          </SocialLinks>
        </ContactInfo>
      </Container>
    </Section>
  );
} 