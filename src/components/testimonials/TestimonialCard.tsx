import { Testimonial } from '@/app/api/testimonials.client';
import { useLocale } from 'next-intl';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import {
  Card,
  CardHeader,
  QuoteIcon,
  Stars,
  TestimonialText,
  ClientInfo,
  ClientAvatar,
  ClientDetails,
  ClientName,
  ClientPosition,
  CompanyName,
} from './TestimonialsSection.styles';

interface TestimonialCardProps {
  t: Testimonial;
}

const renderStars = (rating: number) => (
  <Stars>{Array.from({ length: rating }).map((_, i) => <FaStar key={i} />)}</Stars>
);

const getInitials = (name: string) => name.split(' ').map(n => n[0]).join('').toUpperCase();

export default function TestimonialCard({ t }: TestimonialCardProps) {
  const locale = useLocale(); // מקבל את השפה הנוכחית (he/en)

  // אם יש שגיאה, נחזיר הודעה ידידותית
  if (!t) {
    return null;
  }

  // **לוגיקה קריטית: בחירת השדות לפי השפה**
  const clientName = locale === 'en' ? t.clientName_en : t.clientName_he;
  const clientTitle = locale === 'en' ? t.clientTitle_en : t.clientTitle_he;
  const company = locale === 'en' ? t.company_en : t.company_he;
  const quote = locale === 'en' ? t.quote_en : t.quote_he;

  return (
    <Card $bg="var(--color-background)" $minHeight="100%">
      <CardHeader>
        <QuoteIcon><FaQuoteLeft /></QuoteIcon>
        {renderStars(5)}
      </CardHeader>
      <TestimonialText>{quote}</TestimonialText>
      <ClientInfo>
        <ClientAvatar>{getInitials(clientName || '')}</ClientAvatar>
        <ClientDetails>
          <ClientName>{clientName}</ClientName>
          <ClientPosition>{clientTitle}</ClientPosition>
          <CompanyName>{company}</CompanyName>
        </ClientDetails>
      </ClientInfo>
    </Card>
  );
} 