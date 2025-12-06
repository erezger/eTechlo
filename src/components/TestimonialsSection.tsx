"use client";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useTranslations } from 'next-intl';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {
  Section,
  SectionTitle,
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
  Subtitle,
  SwiperContainer,
} from "./TestimonialsSection.styles";

export default function TestimonialsSection() {
  const t = useTranslations('TestimonialsSection');
  const testimonials = [0, 1, 2, 3, 4].map(idx => ({
    id: idx + 1,
    text: t(`testimonials.${idx}.text`),
    name: t(`testimonials.${idx}.name`),
    position: t(`testimonials.${idx}.position`),
    company: t(`testimonials.${idx}.company`),
    rating: 5
  }));

  const renderStars = (rating: number) => (
    <Stars>{Array.from({ length: rating }).map((_, i) => <FaStar key={i} />)}</Stars>
  );
  const getInitials = (name: string) => name.split(' ').map(n => n[0]).join('').toUpperCase();

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
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <Card $bg="var(--color-background)" $minHeight="100%">
                <CardHeader>
                  <QuoteIcon><FaQuoteLeft /></QuoteIcon>
                  {renderStars(t.rating)}
                </CardHeader>
                <TestimonialText>{t.text}</TestimonialText>
                <ClientInfo>
                  <ClientAvatar>{getInitials(t.name)}</ClientAvatar>
                  <ClientDetails>
                    <ClientName>{t.name}</ClientName>
                    <ClientPosition>{t.position}</ClientPosition>
                    <CompanyName>{t.company}</CompanyName>
                  </ClientDetails>
                </ClientInfo>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperContainer>
    </Section>
  );
} 
