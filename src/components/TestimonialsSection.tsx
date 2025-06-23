"use client";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
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

const testimonials = [
  {
    id: 1,
    text: "eTechlo הפכה את החזון שלנו למציאות. הצוות המקצועי שלהם בנה לנו מערכת ניהול מתקדמת שחוסכת לנו שעות עבודה בכל שבוע. התקשורת הייתה מצוינת והתוצאה מעבר לציפיות.",
    name: "דוד כהן",
    position: "מנכ\"ל",
    company: "טכנולוגיות מתקדמות בע\"מ",
    rating: 5
  },
  {
    id: 2,
    text: "עבדנו עם eTechlo על פרויקט מורכב של אוטומציה עסקית. הם הבינו בדיוק מה אנחנו צריכים והעבירו אותנו תהליך מקצועי ומסודר. התוצאה מדהימה - חיסכון של 40% בזמן עיבוד.",
    name: "שרה לוי",
    position: "מנהלת IT",
    company: "חברת ייצור גלובלית",
    rating: 5
  },
  {
    id: 3,
    text: "האתר החדש ש-eTechlo בנתה עבורנו הביא לעלייה של 60% בהמרות. העיצוב מודרני, מהיר ומותאם למובייל. הצוות היה זמין לכל שאלה ותמיכה לאורך כל התהליך.",
    name: "מיכאל רוזנברג",
    position: "מנהל שיווק",
    company: "רשת קמעונאית ישראלית",
    rating: 5
  },
  {
    id: 4,
    text: "eTechlo סיפקו לנו ייעוץ טכנולוגי מעולה שעזר לנו לבחור את הפתרון הנכון לעסק שלנו. הם לא רק מוכרים שירותים - הם שותפים אמיתיים להצלחה שלנו.",
    name: "נועה אברהם",
    position: "מייסדת",
    company: "סטארט-אפ חדשני",
    rating: 5
  },
  {
    id: 5,
    text: "המערכת הפנימית ש-eTechlo פיתחה עבורנו שינתה את הדרך שבה אנחנו עובדים. התהליך היה חלק, מקצועי והתוצאה מעולה. ממליץ בחום לכל עסק שמחפש פתרונות טכנולוגיים.",
    name: "יוסי שפירא",
    position: "מנהל תפעול",
    company: "חברת לוגיסטיקה",
    rating: 5
  }
];

export default function TestimonialsSection() {
  const renderStars = (rating: number) => (
    <Stars>{Array.from({ length: rating }).map((_, i) => <FaStar key={i} />)}</Stars>
  );
  const getInitials = (name: string) => name.split(' ').map(n => n[0]).join('').toUpperCase();

  return (
    <Section id="testimonials">
      <SectionTitle>מה הלקוחות שלנו אומרים</SectionTitle>
      <Subtitle>אנחנו גאים בשותפויות ארוכות טווח עם לקוחות מרוצים. הנה מה שיש להם לומר על העבודה שלנו.</Subtitle>
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
