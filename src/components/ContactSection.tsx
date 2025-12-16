"use client";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";
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
import { trackLeadConversion } from '@/utils/analytics';
import { usePricingContext } from '@/context/PricingContext';
import { useSearchParams } from 'next/navigation';

export default function ContactSection() {
  const t = useTranslations('ContactSection');
  const { selectedPackage } = usePricingContext(); // מקור 1: Context (מדף הבית)
  const searchParams = useSearchParams(); // מקור 2: URL Query (מדף Pricing)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isPrefilled, setIsPrefilled] = useState(false); // <--- State חדש למעקב
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<string>(""); // הוספנו state להודעות

  // 🛑 לוגיקה קריטית: עדכון ה-State כשה-Context משתנה
  useEffect(() => {
    // 1. קביעת המקור: Context מקבל קדימות, אחרת נשתמש ב-URL
    const packageFromContext = selectedPackage;
    const packageFromUrl = searchParams.get('package');

    // 2. בחירת שם החבילה: (Context > Query)
    const selectedPackageName = packageFromContext || packageFromUrl;

    // 3. אם יש חבילה, בצע Pre-fill
    if (selectedPackageName) {
      const packageMessage = t('prefillMessage', { package: selectedPackageName });
      setFormData(prevData => {
        let newMessage = prevData.message;

        // 1. אם כבר מולא אוטומטית (המצב הנוכחי הוא Pre-fill)
        // או אם ההודעה הנוכחית ריקה לחלוטין - אנו מחליפים אותה.
        if (isPrefilled || prevData.message === '') {
          newMessage = packageMessage;
          setIsPrefilled(true); // מסמנים שוב שזה מילוי אוטומטי
        }

        return {
          ...prevData,
          message: newMessage
        };
      });
    } else if (isPrefilled) {
      // אם אין חבילה נבחרה כרגע, אבל היינו במצב Pre-fill, ננקה את ההודעה.
      setFormData(prevData => ({
        ...prevData,
        message: '' // או שתחזיר להודעה דיפולטית אם יש
      }));
      setIsPrefilled(false);
    }

    // 4. לוגיקת גלילה (חובה לניווט מ-Pricing)
    // אם הגענו עם hash ב-URL, גלול אוטומטית. (הערה: קוד זה אמור להיות בדף ה-page.tsx העוטף, אבל נכניס אותו כאן לשם פשטות זמנית)
    if (window.location.hash === '#contact') {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [selectedPackage, searchParams, t, isPrefilled]); // תלויות ב-Context ובפונקציית התרגום

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // אם המשתמש משנה את שדה ההודעה, נסמן שזה כבר לא Pre-fill
    if (e.target.name === 'message') {
      setIsPrefilled(false);
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSubmitting(true);
    setStatus(""); // נקה הודעות קודמות
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // שלב 2: אם השליחה הצליחה, שלח אירוע ל-GA4
        trackLeadConversion();
        setStatus(t("success")); // "ההודעה נשלחה בהצלחה!"
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        }); // נקה טופס
        setTimeout(() => setStatus(""), 5000); // הסתר הודעה אחרי 5 שניות
      } else {
        setStatus(t("error") || "אופס, משהו השתבש – נסה שוב או שלח ל-info@etechlo.com");
      }
    } catch (error) {
      console.error(error);
      setStatus(t("error") || "אופס, משהו השתבש – נסה שוב או שלח ל-info@etechlo.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" $bg="var(--color-background)">
      <SectionTitle>{t('title')}</SectionTitle>
      <Container>
        <ContactForm onSubmit={handleSubmit}>
          {status && (
            <SuccessMessage>
              {status}
            </SuccessMessage>
          )}
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