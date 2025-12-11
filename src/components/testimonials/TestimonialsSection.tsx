'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useTranslations } from 'next-intl';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {
  Section,
  SectionTitle,
  Subtitle,
  SwiperContainer,
} from './TestimonialsSection.styles';
import { useQuery } from '@tanstack/react-query';
import { getTestimonials } from '@/app/api/testimonials.client';
import TestimonialCard from './TestimonialCard';

export default function TestimonialsSection() {
  const t = useTranslations('TestimonialsSection');
  const { data: testimonials } = useQuery({
    queryKey: ['testimonials'],
    queryFn: getTestimonials,
    // אין צורך ב-onError מפורש אם אנחנו סומכים על הטיפול הגלובלי,
    // אבל עדיף תמיד לטפל ב-UI במקרה שגיאה.
  });

  // אם יש שגיאה, נחזיר הודעה ידידותית
  if (!testimonials) {
    return null;
  }

  return (
    <Section id="testimonials" $bg="#fff">
      <SectionTitle>{t('title')}</SectionTitle>
      <Subtitle>{t('subtitle')}</Subtitle>
      <SwiperContainer>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          spaceBetween={30}
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          dir="ltr"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <TestimonialCard t={t}></TestimonialCard>
            </SwiperSlide>
            // <SwiperSlide key={t.id}>
            //   <Card $bg="var(--color-background)" $minHeight="100%">
            //     <CardHeader>
            //       <QuoteIcon><FaQuoteLeft /></QuoteIcon>
            //       {renderStars(5)}
            //     </CardHeader>
            //     <TestimonialText>{t.quote_he}</TestimonialText>
            //     <ClientInfo>
            //       <ClientAvatar>{getInitials(t.clientName_he)}</ClientAvatar>
            //       <ClientDetails>
            //         <ClientName>{t.clientName_he}</ClientName>
            //         <ClientPosition>{t.clientTitle_he}</ClientPosition>
            //         <CompanyName>{t.company_he}</CompanyName>
            //       </ClientDetails>
            //     </ClientInfo>
            //   </Card>
            // </SwiperSlide>
          ))}
        </Swiper>
      </SwiperContainer>
    </Section>
  );
}
